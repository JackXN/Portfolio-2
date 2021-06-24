import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/images/JRLogo.png'
import "./Navbar.css";
import { IconContext} from 'react-icons/lib';
import {Link, animateScroll as scroll} from 'react-scroll';

       

const Navbar = () => {

    const [click, setClick] = useState(false);
const [ setButton] = useState(true)

const scrollToTop = () => {
    scroll.scrollToTop();
};

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
        <div className=" container">

            <Link onClick={closeMobileMenu} className ='navbar-logo'
            >
              <img onClick={scrollToTop }src={Logo} id='nav-logo' alt='jr logo'
              />
            </Link>

            <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
            </div>
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>

        <li className="nav-item">
            <Link to = 'about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            className = 'nav-links' onClick={closeMobileMenu}>
                Who Am I?
            </Link>
        </li>
        <li className="nav-item">
            <Link to = 'skills'className = 'nav-links'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMobileMenu} >
                My Skills
            </Link>
        </li>
        <li className="nav-item">
            <Link to='projects'className = 'nav-links'   spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMobileMenu}>
                View My Work
            </Link>
        </li>
        <li className="nav-item">
            <Link to = 'contact'className = 'nav-links'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMobileMenu} >
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