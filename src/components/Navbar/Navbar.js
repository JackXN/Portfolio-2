import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes } from 'react-icons/fa'
import "./Navbar.css";
import { IconContext} from 'react-icons/lib';

       

const Navbar = () => {

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
            <Link to = 'contact'className ='nav-links'  smooth={true} duration={1000} onClick={closeMobileMenu} >
               Contact
            </Link>
        </li>
      
        <li className="nav-item">
            <Link to ='projects' smooth={true} duration={1000} className = 'nav-links' onClick={closeMobileMenu}>
                Projects
            </Link>
        </li>

    


        </ul>
        </div>
        </div>

    
        </IconContext.Provider>

    )
}

export default Navbar