import React, {useEffect} from 'react'
import "./Projects.css"
import "./Projects-2.css"

import ProjectImg5 from '../assets/images/grubhubbg.png'
import BackEndImg from '../assets/images/backend.png'
import PlaceHold from '../assets/images/placehold.png'
import {SiJavascript as JavaScriptIcon, SiCss3 as CssThree} from 'react-icons/si'
import CleanCode from '../assets/images/clean-code.png'
function Projects() {




    return (
<section className='projects-section'>
<h1>Some Of My Work</h1>
<div className='project-container'>
<div className='box box-1'>
<img src={CleanCode}></img>
</div>
<div className='box box-1'>
<img src={CleanCode}></img>
</div>
<div className='box box-1'>
<img src={CleanCode}></img>
</div>



</div>




</section>
 
    )
}

export default Projects
