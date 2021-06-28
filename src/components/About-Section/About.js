import React, {useEffect} from 'react'
import './About.css'
import AboutImg from '../assets/images/AboutHello.png'
import Aos from 'aos';
import 'aos/dist/aos.css';


function About() {

    useEffect(() => {
        Aos.init({});
    }, [])


    return (
      <section className='about-section'>
<div className='about-container'>
    <div className='about-text'>
        <h1 data-aos='fade-right' id='about'>Who Am I?</h1>
        <p id='about-para' data-aos='fade-left'>My name is Jack Rigan.
A 20 year old Norwegian web developer
And designer, focused on creating developing 
Quality websites with simple and sleek design. <br/>Outside of work im a skateboarder at heart and i love being outside in nature!</p>
    </div>
    <img data-aos='fade-down' data-aos-duration="500" id='about-img'src={AboutImg} alt=':D'/>





</div>



      </section>
    )
}

export default About
