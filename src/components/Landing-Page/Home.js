import React from 'react'
import SelfieLinks from '../SelfieLinks'
import "./Home.css"
import ResumeBtn from '../ResumeBtn/Resume'
function Home() {
    return (
        <div className='landing-page' id='top'>
           
            <div className='intro-text' id='top'>
                  
<SelfieLinks/>
<ResumeBtn/>
            </div>
        </div>
    )
}

export default Home
