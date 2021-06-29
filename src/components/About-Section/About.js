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
        I began my web development journey over a year ago, mostly learning HTML & CSS. After a few months i fell inlove and decided i wanted to accelarate my skills with hopes of turning it into a career. After this decision i enrolled in an online bootcamp that was focused on teaching the fundamentals of building full scale web applications.
            </p>
            <br/>
        
    </div>
    <img data-aos='fade-down' data-aos-duration="500" id='about-img'src={AboutImg} alt=':D'/>





</div>



      </section>
    )
}

export default About
