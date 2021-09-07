import React from 'react'
import "./Projects.css"
import RES from '../assets/images/res-app.png'
import Decoder from '../assets/images/Decoder-ss.png'
import Lib from '../assets/images/td-pc.png'
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
<h3>Tinkers Todos</h3>
<p> A simple todo list designed to help people like Tinker, keep all of their tasks organized in one place. It allows you to mark a task as complete and also remove tasks from the list completely</p>
<ul className='code-used'>
    <li><JavaScriptIcon className='javascript'/></li>
    <li><CssThree className='css'/></li>
    <li><SiHtml5/></li>
</ul>
<button><a href='https://compassionate-haibt-d8c1ff.netlify.app/'>Launch</a></button>
<button><a href='https://github.com/JackXN/Todo-mvc'>Github</a></button>
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

<button type='button'><a rel="noopener noreferrer" href='https://github.com/JackXN'target='_blank'>View All My Pojects</a></button>
</div>



</section>
 
    )
}

export default Projects
