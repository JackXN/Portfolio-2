import React from 'react'
import './About.css'
import AboutImg from '../assets/images/AboutHello.png'
import AboutImg2 from '../assets/images/whatdoido.png'
function About() {
    return (
        <div className='container-two'>
        <div className='about-container display-container'>
            <div className='container'>
            <div className='about-title'>
            <div className='about-text'>
                <h1 id='about-title'>About Me</h1>
           
            <p id='about-para'>My name is Jack Rigan.
A 20 year old Norwegian web developer
And designer, focused on creating developing 
Quality websites with simple and sleek design. Outside of work im a skateboarder at heart and i love being outside in nature!</p>

        </div>
        </div>
        <div className='about-img'>
<img src={AboutImg} alt='about me!'/>
        </div>
</div>

        </div>
        </div>
    )
}

export default About
