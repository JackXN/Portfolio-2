import "./Navbar.css";
import React from 'react';
import {Link} from 'react-scroll';
       

const Navbar = () => {


return (
    <div className='nav-container'>
<nav>
    <ul>
        <li><Link to='contact'>Contact</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Projects</Link></li>
    
    </ul>
</nav>
    </div>
)
}

export default Navbar