import React, {useState} from 'react';
import {Link} from 'react-scroll';

import {FaBars, FaTimes } from 'react-icons/fa'
import "./Navbar.css";
import { IconContext} from 'react-icons/lib';

       

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        
        <IconContext.Provider value={{color: '#fff'}}>
   
        <div className="navbar">
        <div className="navbar-container container">
{/* 
            <Link onClick={closeMobileMenu} className ='navbar-logo' to ='home'>
                JR
            </Link> */}

            <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
            </div>
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>

        <li className="nav-item">
            <Link to = 'home'className = 'nav-links' smooth={true} duration={1000} onClick={closeMobileMenu}>
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link to = 'about'className = 'nav-links' smooth={true} duration={1000} onClick={closeMobileMenu}>
                About
            </Link>
        </li>
        <li className="nav-item">
            <Link to = 'skills'className = 'nav-links' smooth={true} duration={1000} onClick={closeMobileMenu}>
                Skills
            </Link>
        </li>
        <li className="nav-item">
            <Link to ='projects' smooth={true} duration={1000} className = 'nav-links' onClick={closeMobileMenu}>
                Projects
            </Link>
        </li>
        <li className="nav-item">
            <Link to = 'contact'className ='nav-links'  smooth={true} duration={1000} onClick={closeMobileMenu} >
               Contact
            </Link>
        </li>
      
 

    


        </ul>
        </div>
        </div>

    
        </IconContext.Provider>

    )
}

export default Navbar