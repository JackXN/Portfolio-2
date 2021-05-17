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
        <IconContext.Provider value={{color: '#fff'}}>
        <Router>
        <div className="navbar">
        <div className="navbar-container container">

            <Link onClick={closeMobileMenu} className ='navbar-logo' to ='/'>
                <LogoTest/>
                
            </Link>

            <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
            </div>
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>

        <li className="nav-item">
            <Link to = '/'className = 'nav-links' onClick={closeMobileMenu}>
                View My Work
            </Link>
        </li>
        <li className="nav-item">
            <Link to = '/services'className = 'nav-links' onClick={closeMobileMenu} >
                Skills
            </Link>
        </li>
        <li className="nav-item">
            <Link to = '/products'className = 'nav-links' onClick={closeMobileMenu}>
                About
            </Link>
        </li>



        </ul>
        </div>
        </div>

        </Router>
        </IconContext.Provider>
        </>
    )
}

export default Nav