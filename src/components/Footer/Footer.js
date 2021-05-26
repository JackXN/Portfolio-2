import React from 'react'
import {Link} from 'react-router-dom'
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
            <li ><Link id='twitter'><Twitter/></Link></li>
            <li ><Link id='discord'><Discord/></Link></li>
            <li ><Link id='linkedin'><LinkedIn/></Link></li>
            <li> <Link id='github'><Github/></Link></li>
        </ul>

            </div>

        </div>
    )
}

export default Footer
