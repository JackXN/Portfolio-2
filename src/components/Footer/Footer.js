import React from 'react'
import './Footer.css'
import {AiFillTwitterSquare as Twitter} from 'react-icons/ai' 
import {FaDiscord as Discord} from 'react-icons/fa' 
import {AiFillGithub as Github} from 'react-icons/ai'
import {AiFillLinkedin as LinkedIn} from 'react-icons/ai'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='social-links'>
        <ul className='social-icons'>
            <li ><a id='twitter' href='https://twitter.com/JackXN801' target='_blank'><Twitter/></a></li>
            <li ><a id='discord'><Discord/></a></li>
            <li ><a  target='_blank' href= 'https://www.linkedin.com/in/jack-rigan-2395811ba/'id='linkedin'><LinkedIn/></a></li>
            <li> <a target='_blank' href='https://github.com/JackXN' id='github'><Github/></a></li>
        </ul>

            </div>

        </div>
    )
}

export default Footer
