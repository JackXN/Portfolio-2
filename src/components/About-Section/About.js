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
      <section className='about-section' id='about'>
<div className='about-container'>
    <div className='about-text'>
        <h1 data-aos='fade-right' >About Me</h1>
        <p id='about-para' data-aos='fade-left'>
I am a front-end-web developer with a passion for creating beautiful, usable, and professional websites using best practices and a mobile first approach. When starting a new project i like to define what components i will need for certain parts of the website. For layout designs, i utilize several tools such as, Adobe XD, Adobe Illustrator, and Dreamweaver. For the actual code implementation i take a component based approach and utilize React aswell as several other react libraries that vary, depending on the task at hand. When im not busy working on projects, i love being outside and spending time at my local skatepark.
            </p>
            <br/>
        
    </div>
    <img data-aos='fade-down' data-aos-duration="500" id='about-img'src={AboutImg} alt=':D'/>
</div>
      </section>
    )
}

export default About
