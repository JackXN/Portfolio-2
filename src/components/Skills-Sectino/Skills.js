import React from 'react'
import "./Skills.css"
import {DiReact as ReactIcon} from 'react-icons/di'
import {SiJavascript as JavaScriptIcon, SiCss3 as CssThree, SiHtml5 as HTMLFive} from 'react-icons/si'
import SkillImg from '../assets/images/whatdoido.png'


function Skills() {
    return (
        
        <div className='margin-container' >
        <div className='skills-container display-container container'>
    <img src={SkillImg} id='skill-img'alt='Skillzzzz'/>
<div className='skills-title'>
                    <div className='right-side'>
                    <h1>What Do I Do?</h1>
                    
                </div>
                <div className='skills-text'id='skills' >
                    <p>I build web applications utilizing
Dev Ops to test and solidify a project, before
Deploying to production. For front end development
I rely on JavaScript, React, and CSS3
I also utilize several other frameworks.
For the backend I use Node.js, Express, and postgreSQL.
For data handling and server management</p>
</div>
<div className='language-icons'>
<ul className='icon-list'>
    <li id='react'><ReactIcon/></li>
    <li id='js'><JavaScriptIcon/></li>
    <li id='html'><HTMLFive/></li>
    <li id ='css' ><CssThree/></li>
</ul>
</div>
</div>

                







        </div>
        </div>
    
    )
}

export default Skills
