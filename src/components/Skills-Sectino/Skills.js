import React from 'react'
import "./Skills.css"
import {DiReact as ReactIcon} from 'react-icons/di'
import {SiJavascript as JavaScriptIcon, SiCss3 as CssThree, SiHtml5 as HTMLFive, SiPostgresql as Posty,SiMocha as Mocha } from 'react-icons/si'
import SkillImg from '../assets/images/whatdoido.png'



function Skills() {
    return (
        <section className='skills-section' id='skills'>
            <div className='skills-container'>
            <img data-aos='zoom-in'id='skill-img' src={SkillImg} alt='skillzzz'/>
                <div className='skills-text'>
               
<h1 data-aos='fade-down'>What Do I Do?</h1>
<p data-aos='fade-up'>I build full-scale web applications. My main focus of an application is to ensure fast load times and lag free interactions, Responsive layouts, intuitive UX/UI and a dynamic layout that includes some animations and a little bit of life. Although i specialize in front end development, i am also comfortable building back end applications as well.
 </p> 

<div className='skills-icons' data-aos='fade-left'>
<ul >
    <li><JavaScriptIcon id='javascript'className='skills-icons'/></li>
    <li><ReactIcon id='react'className='skills-icons'/></li>
    <li><HTMLFive id='html'className='skills-icons'/></li>  
    <li><CssThree className='skills-icons' id='css'/></li> 
    <li><Mocha className='skills-icon' id='mocha'/> </li>
    <li><Posty className='skills-icon'id ='posty'/> </li>
</ul>
</div>
                </div>
                

            </div>
        </section>

    
    )
}

export default Skills
