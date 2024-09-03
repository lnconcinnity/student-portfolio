import React, { useEffect, useState } from "react";

const _ = require("lodash")

function trackScroll(scrollParent: HTMLElement) {
    if (!scrollParent) return ''
    const elements = [...scrollParent.children].reduce((map, item: any) => item.id ? {[item.id]: item, ...map} : map, {})
    let best = {} as {sectionName: string, delta: number};
    for (const sectionName in elements) {
        if (Object.prototype.hasOwnProperty.call(elements, sectionName)) {
            const element = elements[sectionName] as HTMLElement
            const delta = Math.abs(window.scrollY-(element.offsetTop-(element.offsetTop > 0 ? element.offsetHeight : 0)))
            if (!best.sectionName || (best.sectionName && delta < best.delta))
                best = {sectionName: sectionName, delta: delta}
        }
    }
    return best.sectionName
}

const Scrollspy = ({children, linksContainerRef, sectionsContainerRef, activeClass='active', onSelected=undefined as any}) => {
    if (!linksContainerRef)
        console.error('ScrollSpy [props.linksContainerRef] is missing!')
    if (!sectionsContainerRef)
        console.error('ScrollSpy [props.sectionsContainerRef] is missing!')

    const [currentSelection, setCurrentSelection] = useState('')

    useEffect(() => {
        const wrapper = sectionsContainerRef.current as HTMLElement
        const throttledOnScroll = _.throttle((elm: any) => {
            if (wrapper)
                setCurrentSelection(trackScroll(wrapper ))
        }, 100, { trailing: false })
        
        if (wrapper)
            setCurrentSelection(trackScroll(wrapper))

        const disconnects = [] as any
        if (linksContainerRef.current) {
            const links = [...linksContainerRef.current.querySelectorAll('a')]
            links.forEach((elm) => {
                const onClick = () => {
                    if (wrapper) {
                        const target = [...wrapper.children].filter((sec) => sec.id === elm.getAttribute('data-scrollspy-targetid')).pop() as HTMLElement
                        window.scrollTo(0, target.offsetTop-target.offsetHeight)
                    }
                }

                elm.addEventListener('click', onClick)
                disconnects.push(() => elm.removeEventListener('click', onClick))
            })
        }

        window.addEventListener('scroll', throttledOnScroll)
        return () => {
            wrapper.removeEventListener('scroll', throttledOnScroll)
            disconnects.forEach((c) => c())
        }
    }, [])

    useEffect(() => {
        const wrapper = linksContainerRef.current as HTMLElement
        if (wrapper) {
            const links = [...wrapper.querySelectorAll('a')]
            const target = links.filter((elm) => elm.getAttribute('data-scrollspy-targetid') === currentSelection).pop()
            links.forEach((elm) => elm.classList.remove(activeClass))
            if (target)
                target.classList.add(activeClass)
        }

        if (onSelected)
            onSelected(currentSelection)
    }, [currentSelection])

    return children || (<></>)
}

export default Scrollspy;