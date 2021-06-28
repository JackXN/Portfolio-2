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
<h3>PAX SMP</h3>
<h4>[Front-End]</h4>
<p>A front end project created for a local minecraft survival server. It serves as a main directory for all staff and players</p>
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
<h3>Atom</h3>
<h4>[Front-End]</h4>
<p>A front end project created for a local minecraft survival server. It serves as a main directory for all staff and players</p>
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
