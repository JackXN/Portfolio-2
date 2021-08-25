import React from 'react'
import "./Projects.css"
import RES from '../assets/images/res-app.png'
import Decoder from '../assets/images/Decoder-ss.png'
import Lib from '../assets/images/local-lib.png'
import {Link} from 'react-router-dom';

import {SiJavascript as JavaScriptIcon, SiCss3 as CssThree, SiReact as ReactIcon, SiHtml5} from 'react-icons/si'

function Projects() {

    return (
<section className='projects-section'>
<div className='projects-container'>
<h1 data-aos='fade-down' id='projects'>Recent Projects</h1>
<div className='projects-display'>
<div data-aos='fade-left'className='project-1 project'>
<img className='project-img'src={Lib} alt='paxx'/>
<div className='project-text'>
<h3>Library Admin</h3>
<p>A dashboard built for a fictional library that displays records of borrowed and returned books, along with the customers that are associated with those transactions </p>
<ul className='code-used'>
    <li><JavaScriptIcon className='javascript'/></li>
    <li><CssThree className='css'/></li>
    <li><SiHtml5/></li>
</ul>
<button><a href='https://jackxn.github.io/Local-Library-Project/'>Launch</a></button>
<button><a href='https://github.com/JackXN/Local-Library-Project'>Github</a></button>
</div>
</div>


<div  data-aos='fade-right'className='project-2 project'>
<img className='project-img'src={RES} alt='paxx'/>

<div className='project-text'>
<h3><span id='p'>Restaurant </span> Reservations</h3>

<p>An easy to use platform designed for restaurants to manage reservations and tables, while keeping track of customer data.</p>
<ul className='code-used'>
    <li className='javascript'><JavaScriptIcon /></li>
    <li className='css'><CssThree/></li>
    <li className='react'><ReactIcon/></li>
</ul>
<button><a href='https://res-final-client.herokuapp.com/dashboard'>Launch</a></button>
<button><a href='https://github.com/JackXN/reservations-capstone'>Github</a></button>
</div>
</div>

<div  data-aos='fade-right'className='project-2 project'>
<img className='project-img'src={Decoder} alt='Decoder'/>
<div className='project-text'>
<h3><span id ='d'>Decoder</span> Ring</h3>
<p>The decoder ring was built to encrypt and decrypt all sorts of secret messages</p>
<ul className='code-used'>
    <li><JavaScriptIcon/></li>
    <li><CssThree/></li>
</ul>
<button><a href='https://jackxn.github.io/Decoder-ring-project/'>Launch</a></button>
<button><a href='https://github.com/JackXN/Decoder-ring-project'>Github</a></button>
</div>
</div>




</div>

<Link to='/projects'><button>View All My Projects</button></Link>

</div>



</section>
 
    )
}

export default Projects
