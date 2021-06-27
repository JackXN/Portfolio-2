import React from 'react'
import "./Skills.css"
import {DiReact as ReactIcon} from 'react-icons/di'
import {SiJavascript as JavaScriptIcon, SiCss3 as CssThree, SiHtml5 as HTMLFive, SiPostgresql as Posty,SiMocha as Mocha } from 'react-icons/si'
import SkillImg from '../assets/images/whatdoido.png'



function Skills() {
    return (
        <section className='skills-section'>
            <div className='skills-container'>
                <div className='skills-text'>
<h1 data-aos='fade-down'>What Do I Do?</h1>
<p data-aos='fade-up'>I build web applications utilizing
Dev Ops to test and solidify a project, before
Deploying to production. For front end development
I rely on JavaScript, React, and CSS3
I also utilize several other frameworks.
For the backend I use Node.js, Express, and postgreSQL.
For data handling and server management</p>
<div className='skills-icons' data-aos='fade-left'>
<ul >
    <li><JavaScriptIcon id='javascript'className='skills-icons'/></li>
    <li><ReactIcon id='react'className='skills-icons'/></li>
    <li><HTMLFive id='html'className='skills-icons'/></li>  
    <li><CssThree className='skills-icons' id='css'/></li> 
    <li><Mocha className='skills-icon'/> </li>
    <li><Posty className='skills-icon'/> </li>
</ul>
</div>
                </div>
                <img data-aos='zoom-in'id='skill-img' src={SkillImg} alt='skillzzz'/>

            </div>
        </section>

    
    )
}

export default Skills
