import React, {useState} from 'react'
import "./Contact.css"
import {db} from '../../firebase'
import Coffee from '../assets/images/idea.png'

function Contact() {

const [name, setName] = useState('')

const [email,setEmail] = useState('')

const [message,setMessage] = useState('')
const [phone,setPhone] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('contacts').add({name:name, email:email, message:message, phone: phone,})
    .then(() => {
        alert("Thank you! I'll Be In Touch!")
    })
    .catch((error) => {
        alert(error.message)
    })
    setName('')
    setEmail('')
    setMessage('')
    setPhone('')
}

    return (
        <div className='form-section' id='contact'>
             <h1 data-aos='fade-down'>Get In Touch!</h1>
             <div className='form-wrapper'>
      
       <form className='form' onSubmit={handleSubmit}>
       <img data-aos='fade-down' src={Coffee} alt='coffee' id='coffee'/>
       <div className='left-side'>
           <label class='form-space' data-aos='fade-right'>Name:
           <input placeholder='Required' required onChange={(e) => setName(e.target.value)} value={name}/>
           </label>

           <label class ='form-space' data-aos='fade-right'>Email:

            <input type='email'placeholder='Required' required onChange={(e) => setEmail(e.target.value)} value={email}/>
           </label>
           <label data-aos='fade-right'>Phone:
           <input placeholder='Optional' onChange={(e) => setPhone(e.target.value)} value={phone}/>
           </label>
           <div className='textArea'>
           <label data-aos='fade-right'>Leave Me A Message!</label>
           <textarea onChange={(e) => setMessage(e.target.value)} value={message} placeholder='Hello my name is....' required></textarea>
        
           </div>
           </div>
          
<button type='submit' class='submit-btn' data-aos='fade-bottom'>Submit</button>

   

       </form>

       
       </div>
    
       </div>
       
    )
}

export default Contact
