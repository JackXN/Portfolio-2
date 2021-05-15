import React from 'react'
import "./SelfieLinks.css"
import Self from './assets/images/self-portrait2.png'
import {FaDiscord as Discord} from 'react-icons/fa' 
import {AiFillGithub as Github} from 'react-icons/ai'
import {AiFillLinkedin as LinkedIn} from 'react-icons/ai'

function SelfieLinks() {
    return (
        <div className='container'>
           <img src={Self} alt='me'/>
            <div
             className='social-links'>
<Discord id='discord'/>
<Github id = 'github'/>
<LinkedIn id = 'linkedin'/>


            </div>


        </div>
    )
}

export default SelfieLinks
