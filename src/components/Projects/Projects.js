import React from 'react'
import "./Projects.css"
import "./Projects-2.css"

import {Link} from 'react-router-dom';

import {SiJavascript as JavaScriptIcon, SiCss3 as CssThree} from 'react-icons/si'
import CleanCode from '../assets/images/clean-code.png'
function Projects() {

    return (
<section className='projects-section'>
<h1>Some Of My Work</h1>
<div className='project-container'>
<div className='box box-1'>
<img alt='project-img' src={CleanCode}></img>
<h2>Grub Dash</h2>
<p>Grub dash is an online delivery service for local restaurants. Grub Dash delivers for free to any place, any time</p>
<div className='stack-used'>
<h3>Technologies Used</h3>
<ul>
    <li><JavaScriptIcon id ='js'/></li>
    <li><CssThree id='css'/></li>
</ul>
</div>


<div className='link-buttons'>
<ul>
    <li><Link>Live Demo</Link></li>
    <li><Link>Github</Link></li>
</ul>


</div>
</div>
<div className='box box-1'>
<img  src={CleanCode} alt='project-img'></img>
<h2>PAX SMP</h2>
<p>PAX SMP is a home directory for a local Minecraft vanilla server. A project i built for some friends who were developing a minecraft server </p>
<div className='stack-used'>
<h3>Technologies Used</h3>
<ul>
    <li><JavaScriptIcon id ='js'/></li>
    <li><CssThree id='css'/></li>
</ul>
</div>


<div className='link-buttons'>
<ul>
    <li><Link>Live Demo</Link></li>
    <li><Link>Github</Link></li>
</ul>


</div>
</div>
<div className='box box-1'>
<img src={CleanCode} alt='project-img'></img>
<h2>FlashCards</h2>
<p>A flashcard study app that is designed to help quiz developers on the fundamentals of React</p>

<div className='stack-used'>
<h3>Technologies Used</h3>
<ul>
    <li><JavaScriptIcon id ='js'/></li>
    <li><CssThree id='css'/></li>
</ul>
</div>


<div className='link-buttons'>
<ul>
    <li><Link>Live Demo</Link></li>
    <li><Link>Github</Link></li>
</ul>


</div>



</div>



</div>




</section>
 
    )
}

export default Projects
