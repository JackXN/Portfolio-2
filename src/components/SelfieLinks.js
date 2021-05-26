import React from 'react'
import "./SelfieLinks.css"
import Self from './assets/images/self-portrait2.png'
import {FaDiscord as Discord} from 'react-icons/fa' 
import {AiFillGithub as Github} from 'react-icons/ai'
import {AiFillLinkedin as LinkedIn} from 'react-icons/ai'
import {Link} from 'react-router-dom'
function SelfieLinks() {
    return (
        <div className='selfie-container'>
           <img src={Self} alt='me'/>
            <div
             className='social-links'>
                 <ul>
                     <li><a href='https://www.discord.com' id = 'discord'><Discord/></a></li>
                     <li><a  href='https://www.github.com' id ='github'><Github/></a></li>
                     <li><a  href='https://www.linkedin.com/in/jack-rigan-2395811ba/' id='linkedin'><LinkedIn/></a></li>
                 </ul>
            </div>
           <div className='titlename'>
               <h1>Jack Rigan</h1>
               <h2>Web Developer</h2>
           </div>

        </div>
    )
}

export default SelfieLinks
