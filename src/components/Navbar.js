import React from 'react'
import JR from './assets/images/JRLogo.png'
import "./Navbar.css"

function Navbar() {
    return (
        <>
<div className = 'nav-container'>
<nav>
<ul>
    <img src={JR}/>
</ul>

</nav>

</div>
        </>
    )
}

export default Navbar
