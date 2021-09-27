import React, { useState } from "react";
import {
  Nav,
  Hamburger,
  Menu,
  MenuLink,
} from "./NavbarElements";
import {Link} from 'react-scroll'
import Sticky from 'react-stickynode';




function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   const handleStateChange = (status) => {
//     if(status.status === Sticky.STATUS_FIXED) {
//         setIsSticky(true)
//     }else if(status.status === Sticky.STATUS_ORIGINAL) {
//         setIsSticky(false)
//     }
// }






  return (
      <Sticky>
    <Nav>
      <Link to="/">
        {/* <Logo src={GrayLogo}></Logo> */}
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
      <MenuLink href=""><Link to='home' smooth={true} spy={100} duration={600}>Home</Link></MenuLink>
        <MenuLink href=""><Link to='about' smooth={true} spy={100} duration={600}>About Me</Link></MenuLink>
        <MenuLink href=""><Link to='skills' smooth={true} spy={100} duration={600}>Skills</Link></MenuLink>
        <MenuLink href=""><Link to='projects' smooth={true} spy={100} duration={600}>Projects</Link></MenuLink>
      </Menu>
    </Nav>
    </Sticky>
  );
}

export default Navbar;
