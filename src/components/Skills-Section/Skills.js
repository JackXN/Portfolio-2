import React from 'react'
import {SiJavascript} from 'react-icons/si'
import {SiReact as ReactIcon, SiHtml5 as Html5, SiCss3 as Css3, SiPostgresql as PostSQL} from 'react-icons/si'
import {GrNode as Node} from 'react-icons/gr'
import "./Skills.css"
function Skills() {
    return (
        <div className='container'>
            <h1 id='skills'>Skills</h1>

        <div className='front-end'>
        <h1>Front End</h1>
        <div className='display'>
            <div className='icons'>
                       <ul>
                           <li><SiJavascript/></li>
                           <li><ReactIcon/></li>
                           <li><Html5/></li>
                           <li><Css3/></li>
                       </ul> 
                        </div>
        </div>
        </div>

<div className='back-end'>
    <h1>Back End</h1>
    <div className='display'>
        <div className='icons'>
            <ul>
                <li><Node/></li>
                <li><PostSQL/></li>
            </ul>
        </div>
    </div>
</div>

        </div>
    )
}

export default Skills
