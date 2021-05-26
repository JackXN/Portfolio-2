import React, {useState, useEffect} from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JRIcon from '../components/assets/images/JRIcon.ico'
import {FaBars, FaTimes } from 'react-icons/fa'
import "./Nav.css"
import JRLogo from './assets/images/JRDone.png'
import {iconContext, IconContext} from 'react-icons/lib';
import {FaCentercode as LogoTest} from 'react-icons/fa'

       

const Nav = () => {

    const [click, setClick] = useState(false);
const [button, setButton] = useState(true)



    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    }else {
        setButton(true)
    }
}
 



useEffect(() => {
    showButton();
}, [])


        window.addEventListener('resize', showButton)

    return (
        <>
     <div className='menu-toggle'>
         <div className='bar half start'></div>
         <div className='bar'></div>
         <div className='bar half end'></div>
     </div>
     <nav className='top-nav'>
         <ul className='nav-list'>
             <li className='nav-link'><a href='#'>Home</a></li>
             <li className='nav-link'><a href='#'>About</a></li>
             <li className='nav-link'><a href='#'>Projects</a></li>
             <li className='nav-link'><a href='#'>Contact</a></li>
         </ul>
     </nav>





     </>
    )
}

export default Nav