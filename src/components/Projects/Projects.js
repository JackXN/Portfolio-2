import React, {useEffect} from 'react'
import "./Projects.css"
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import ProjectImg1 from '../assets/images/Project-1.png'
import ProjectImg2 from '../assets/images/Project-2.png'
import ProjectImg3 from '../assets/images/Project-3.png'
import ProjectImg4 from '../assets/images/pax-smp.png'
import ProjectImg5 from '../assets/images/back-end-img.png'
import {FaDiscord as Discord} from 'react-icons/fa' 
import {AiFillGithub as Github} from 'react-icons/ai'
import {AiFillLinkedin as LinkedIn} from 'react-icons/ai'
import {DiReact as ReactIcon} from 'react-icons/di'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {SiJavascript as JavaScriptIcon, SiCss3 as CssThree, SiHtml5 as HTMLFive} from 'react-icons/si'
function Projects() {

    useEffect(() => {
        Aos.init()
    },[])
    return (
        <>

<div className='projects-container' >
   <h1 id='projects-title'>Check Out My Creations!</h1>
<div className='display-container' >

<div className='display block-1'>
<div className='project-showcase'>
    <img src={ProjectImg5} alt='project-2'/>
    <div className='project-description'>
    <h1>PAX SMP</h1>
        <p>A basic website for a Minecraft Survival Server, used as a main directory for players to easily access all external resources for the server</p>
        <div className='code-use'>
        <h1>Technologies Used</h1>
            <ul className='code-list'>
                <li><JavaScriptIcon/></li>
                <li><CssThree/></li>
            </ul>
        </div>
    </div>
</div>
<div className='project-links'>
   <button type='button'><a href='https://github.com'>Github Repo</a></button>
   <button type='button'><a href='https://specter22.com' target='_blank'>Live Preview</a></button>
</div>
</div>
<div className='display mid block-2'>

<div className='project-showcase'>
    <img src={ProjectImg5} alt='project-2'/>
    <div className='project-description'>
    <h1>Grub Dash</h1>
        <p>This is a description of the project do u understand what that meanas</p>
        <div className='code-use'>
            <h1>Technologies Used</h1>
            <ul className='code-list'>
                <li><JavaScriptIcon/></li>
                <li><CssThree/></li>
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

<div className='project-showcase'>
    <img src={ProjectImg5} alt='project-2'/>
    <div className='project-description'>
    <h1>Weather Zen</h1>
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
     </>
    )
}

export default Projects
