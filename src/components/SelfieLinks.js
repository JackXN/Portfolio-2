import React from 'react'
import "./SelfieLinks.css"
import Self from './assets/images/self-portrait2.png'
import {FaDiscord as Discord} from 'react-icons/fa' 
import {AiFillGithub as Github} from 'react-icons/ai'
import {AiFillLinkedin as LinkedIn} from 'react-icons/ai'
function SelfieLinks() {
    return (
        <div className='selfie-container'>
           <img src={Self} alt='me'/>
            <div
             className='social-links'>
                 <ul>
                     <li><a rel="noopener noreferrer" href='https://www.discord.com' id = 'discord'  target='_blank'><Discord/></a></li>
                     <li><a rel="noopener noreferrer" href='https://github.com/JackXN' id ='github' target='_blank'><Github/></a></li>
                     <li><a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/jack-rigan-2395811ba/' id='linkedin'><LinkedIn/></a></li>
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
