import React from 'react'
import './About.css'
import AboutImg from '../assets/images/AboutHello.png'

function About() {
    return (
        <div className='container-two'>
        <div className='about-container display-container'>
            <div className='container'>
            <div className='about-title'  id='about'>
            <div className='about-text'>
                <h1 id='about-title'>About Me</h1>
           
            <p id='about-para'>My name is Jack Rigan.
A 20 year old Norwegian web developer
And designer, focused on creating developing 
Quality websites with simple and sleek design. <br/>Outside of work im a skateboarder at heart and i love being outside in nature!</p>

        </div>
        </div>
        
<img src={AboutImg} id='about-img'alt='about me!'/>
        
</div>

        </div>
        </div>
    )
}

export default About
