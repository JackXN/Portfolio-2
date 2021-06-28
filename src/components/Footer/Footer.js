import React from 'react'
import './Footer.css'
import {AiFillTwitterSquare as Twitter} from 'react-icons/ai' 
import {FaDiscord as Discord} from 'react-icons/fa' 
import {AiFillGithub as Github} from 'react-icons/ai'
import {AiFillLinkedin as LinkedIn} from 'react-icons/ai'

function Footer() {
    return (
     <div className='footer-container'>
         <footer>
        <a className='links github' href='https://github.com/JackXN' ><Github/></a>
        <a className='links discord' href='discord.com' ><Discord/></a>
        <a className='links linkedin' href='https://www.linkedin.com/in/jack-rigan/' ><LinkedIn/></a>
        <a className='links twitter' href='https://twitter.com/JackXN801' ><Twitter/></a>


         <p>Copyright @2021 Jack Rigan. All Rights Reserved.</p>
         </footer>
     </div>
    )
}

export default Footer
