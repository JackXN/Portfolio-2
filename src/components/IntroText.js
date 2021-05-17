import React from 'react'
import "./IntroText.css"
import Circle from './assets/images/Ellipse9.png'
import CircleTwo from './assets/images/Ellipse6.png'
function IntroText() {
    return (

        <>

<div className='large-intro'>
    <h1>Hello!</h1>
    <br/>
    <p>My name is <span>Jack Rigan</span>.</p>
    <br/>
    <p>a 20 year old Norwegian web developer</p>
    <p>And designer, focused on creating and </p>
    <p>Developing quality websites with simple and sleek design</p>
</div>
<div className='circles'>
<img id = 'circle1'src={Circle}/>
<img id = 'circle2'src={Circle}/>
<img id = 'circle3'src={Circle}/>
<img id = 'circle4'src={Circle}/>
</div>
</>

    )
}

export default IntroText
