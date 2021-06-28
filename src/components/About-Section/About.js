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
        <h1 data-aos='fade-right' >Who Am I?</h1>
        <p id='about-para' data-aos='fade-left'>
        I am a 20 year old Norwegian web developer currently living in salt lake city utah.
I began my web development journey 2 years ago when i discovered the possibilities associated with the tech industry. I have always loved computers and so i decided to start learning their language. A year later i am now entering the professional field in hopes to learn and become a skilled technician in the field.
            </p>
            <br/>
        <p>Outside of work i love skateboarding and hanging out with friends, just like any other normal person my age. I like learning new things and meating new people who share similar interests. I also make sure to make time for other things, other than code. I like to think i have a healthy balance between my professional life and personal life. </p>
    </div>
    <img data-aos='fade-down' data-aos-duration="500" id='about-img'src={AboutImg} alt=':D'/>





</div>



      </section>
    )
}

export default About
