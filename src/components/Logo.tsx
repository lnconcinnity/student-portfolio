
import React from 'react'
import logo from '../components/brand.svg'

const Logo = (props: {width: number,height: number}) => {
    return <img src={logo} alt='Logo' style={{width: (props.width || 32)+'px', height: (props.height || 32)+'px'}}></img>
}

export default Logo;