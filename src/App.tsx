import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar, Offcanvas, } from "react-bootstrap";

import Sections from "./config/sections.ts";

import Scrollspy from "./components/ScrollSpy.tsx";

import './App.scss';

const App = (props: {}): ReactNode => {
    const [isInHeader, setIsInHeader] = useState(false)
    const linksContainerRef = useRef<any>(), sectionsContainerRef = useRef<any>(), navbarRef = useRef<any>()

    useEffect(() => {
        if (navbarRef.current) {
            navbarRef.current.classList[isInHeader !== 'header' ? 'add' : 'remove']('navbar-show')
        }
    }, [isInHeader])

    return (
        <>
            <header>
                <Navbar expand='md' className='navbar navbar-main mb-0' id='main-navbar' fixed='top' ref={navbarRef}>
                    <Container fluid className='justify-content-md-start'>
                        <Navbar.Brand href='/'><span className='kanit-medium px-md-5 mt-2'>Gian Dwayne Romero</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls='main-nav-navbar' />
                        <Navbar.Offcanvas id='main-nav-navbar' aria-labelledby='main-nav-navbar-label' placement='end' responsive='md'>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id='main-nav-navbar-label'>Navigation</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className='ps-2' ref={linksContainerRef}>
                                    {
                                        Sections.map((section) => section.ignoreAsLink ? <></> : (<Nav.Item key={section.id}><Nav.Link data-scrollspy-targetid={section.key}>{section.name}</Nav.Link></Nav.Item>))
                                    }
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </header>
            <Scrollspy linksContainerRef={linksContainerRef} sectionsContainerRef={sectionsContainerRef} children={(
                <div className='container-fluid' ref={sectionsContainerRef}>
                {
                    Sections.map(section => section.render())
                }
                </div>
            )} onSelected={selection => setIsInHeader(selection)}/>
        </>
    )
}

export default App;