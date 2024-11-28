import React from 'react'
import Link from 'next/link'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>kidz world👨‍🎨 </h1>
        <nav className='nav'>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Toys">Toys</Link>
            <Link href="Contact">contact</Link>
            <PiShoppingCartSimpleBold style={{color:"white",fontSize:"20px"}} /> 
        </nav>
    </header>
  )
}

export default Header
