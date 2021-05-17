import React from 'react'
import "./ProjectDisplay.css"
import ProjectOne from '../assets/images/Project-1.png'
import ProjectTwo from '../assets/images/Project-2.png'
import ProjectThree from '../assets/images/Project-3.png'
import {SiReact as ReactIcon, SiHtml5 as Html5, SiCss3 as Css3, SiPostgresql as PostSQL} from 'react-icons/si'
import {GrNode as Node} from 'react-icons/gr'

function ProjectDisplay() {
    return (
        <>
<h1 id='mywork'>My Work</h1>
<div className='projects-container'>
<div className='showcase-img'>
    <img src={ProjectOne}/>
   
    <img src={ProjectOne}/>
    <img src={ProjectOne}/>
    
</div>


</div>

        </>
  
    )
}

export default ProjectDisplay

