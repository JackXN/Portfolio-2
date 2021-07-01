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
        <h1 data-aos='fade-right' >Me Myself, & I</h1>
        <p id='about-para' data-aos='fade-left'>
  I am a Full-Stack Developer born in Sandefjord, Norway, but currently living in Salt Lake City, UT. As a recent bootcamp graduate i am frequently looking for new projects and people to collaborate with. When im not coding im probably skateboarding.
            </p>
            <br/>
        
    </div>
    <img data-aos='fade-down' data-aos-duration="500" id='about-img'src={AboutImg} alt=':D'/>





</div>



      </section>
    )
}

export default About
