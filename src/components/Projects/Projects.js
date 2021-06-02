import React, {useEffect} from 'react'
import "./Projects.css"
import Aos from 'aos';
import 'aos/dist/aos.css'; 

import ProjectImg5 from '../assets/images/grubhubbg.png'
import BackEndImg from '../assets/images/backend.png'
import {SiJavascript as JavaScriptIcon, SiCss3 as CssThree} from 'react-icons/si'
function Projects() {

    useEffect(() => {
        Aos.init()
    },[])


    return (
      
<div className='projects-container' >
   <h1 id='projects-title'>View My Work!</h1>
<div className='display-container' >

<div className='display block-1'>
<div className='project-showcase'>
    <img src={BackEndImg} alt='project-2'/>
    <div className='project-description'>
    <h1>PAX SMP</h1>
    <p class='font-or-back'>[Front-End]</p>
        <p>A basic website for a Minecraft Game used as a main directory for players to easily access all external resources for the server</p>
        <div className='code-use'>
        <h1>Technologies Used</h1>
            <ul className='code-list'>
                <li className='javascript'><JavaScriptIcon/></li>
                <li className='cssThree'><CssThree/></li>
            </ul>
        </div>
    </div>
</div>
<div className='project-links'>
   
   <button type='button'><a rel="noopener noreferrer" href='https://specter22.com' target='_blank'>Live Preview</a></button>
</div>
</div>
<div className='display mid block-2'>

<div className='project-showcase'>
    <img src={ProjectImg5} alt='project-2'/>
    <div className='project-description'>
    <h1>Grub Dash</h1>
    <p class='font-or-back'>[Full-Stack]</p>
        <p>This is a description of the project do u understand what that meanas</p>
        <div className='code-use'>
            <h1>Technologies Used</h1>
            <ul className='code-list'>
                <li className='javascript'><JavaScriptIcon/></li>
                <li className='cssThree'><CssThree/></li>
            </ul>
        </div>
    </div>

</div>
<div className='project-links'>
   <button type='button'>Github Repo</button>
   <button type='button'>Live Preview</button>
</div>
</div>
<div className='display block-3'>

<div className='project-showcase' id='projects'>
    <img src={BackEndImg} alt='project-2'/>
    <div className='project-description'>
    <h1>Weather Zen</h1>
    <p class='font-or-back'>[Back-End]</p>
        <p>This is a description of the project do u understand what that meanas</p>
        <div className='code-use'>
        <h1>Technologies Used</h1>
            <ul className='code-list'>
                <li className='javascript'><JavaScriptIcon/></li>
                <li className='cssThree'><CssThree/></li>
            </ul>
        </div>
    </div>
</div>
<div className='project-links'>
   <button type='button'>Github Repo</button>
   <button type='button'>Live Preview</button>
</div>
</div>

</div>



</div>
 
    )
}

export default Projects
