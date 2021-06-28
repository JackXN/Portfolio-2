import React from 'react'
import SelfieLinks from '../SelfieLinks'
import "./Home.css"
import ResumeBtn from '../ResumeBtn/Resume'
function Home() {
    return (
        <div className='landing-page'>
           
            <div className='intro-text' id='home'>
                  
<SelfieLinks/>
<ResumeBtn/>
            </div>
        </div>
    )
}

export default Home
