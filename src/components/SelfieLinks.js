import React from 'react'
import "./SelfieLinks.css"
import Self from './assets/images/self-portrait2.png'
import {FaDiscord as Discord} from 'react-icons/fa' 
import {AiFillGithub as Github} from 'react-icons/ai'
import {AiFillLinkedin as LinkedIn} from 'react-icons/ai'
import IntroText from '../components/IntroText'
function SelfieLinks() {
    return (
        <div className='selfie-container'>
           <img src={Self} alt='me'/>
            <div
             className='social-links'>
<Discord id='discord'/>
<Github id = 'github'/>
<LinkedIn id = 'linkedin'/>
            </div>
           <div className='titlename'>
               <h1>Jack Rigan</h1>
               <h2>Web Developer</h2>
           </div>

        </div>
    )
}

export default SelfieLinks
