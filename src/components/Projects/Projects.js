import React from 'react'
import "./Projects.css"
import PAX from '../assets/images/pax-img.png'



import {SiJavascript as JavaScriptIcon, SiCss3 as CssThree} from 'react-icons/si'

function Projects() {

    return (
<section className='projects-section'>
<div className='projects-container'>
<h1 data-aos='fade-down' id='projects'>Recent Projects</h1>
<div className='projects-display'>
<div data-aos='fade-left'className='project-1 project'>
<img className='project-img'src={PAX} alt='paxx'/>
<div className='project-text'>
<h3>Flash-O-Matic</h3>
<h4>[Front-End]</h4>
<p>A flashcard study app that can be used to help one study or review important concepts of a learning objective</p>
<ul className='code-used'>
    <li><JavaScriptIcon/></li>
    <li><CssThree/></li>
</ul>
<button>Launch</button>
</div>
</div>

<div  data-aos='fade-right'className='project-2 project'>
<img className='project-img'src={PAX} alt='paxx'/>

<div className='project-text'>
<h3>Weather Zen</h3>
<h4>[Full-Stack]</h4>
<p>A fullstack web application that allows users to check the weather forcast</p>
<ul className='code-used'>
    <li><JavaScriptIcon/></li>
    <li><CssThree/></li>
</ul>
<button>Launch</button>
</div>
</div>

</div>

</div>



</section>
 
    )
}

export default Projects
