import React from 'react'
import "./About.css"
import Ab from '../assets/images/AboutHello.png'

function About() {
    return (
        <div className='about-container'>
<h1 id='about'>About Me</h1>
<div className='about-content'>
<div className='about-img'>
<img src={Ab} alt='about img' id='aboutimg'/>
</div>
<div className='about-text sidetext'>
    <p>I AM,</p>
    <br/>
    <p><span>Jack Rigan</span> A FullStack Web Developer and designer with a strong passions for designing and creating unique projects for a diversity of people and small businesses.</p>
</div>
</div>
        </div>
    )
}

export default About
