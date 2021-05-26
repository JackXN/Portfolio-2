import React, {useState} from 'react'
import "./Contact.css"
import {db} from '../../firebase'
import Coffee from '../assets/images/idea.png'

function Contact() {

const [name, setName] = useState('')

const [email,setEmail] = useState('')

const [message,setMessage] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('contacts').add({name:name, email:email, message:message,})
    .then(() => {
        alert('Thanks! Ill get back to you asap')
    })
    .catch((error) => {
        alert(error.message)
    })
    setName('')
    setEmail('')
    setMessage('')
}

    return (
        <div className='form-section' id='contact'>
             <h1>Get In Touch!</h1>
             <div className='form-wrapper'>
             
       <form className='form' onSubmit={handleSubmit}>
       <img src={Coffee} alt='coffee' id='coffee'/>

           <label class='form-space'>Name:
           <input placeholder='Required' onChange={(e) => setName(e.target.value)} value={name}/>
           </label>

           <label class ='form-space'>Email:

            <input placeholder='Required' onChange={(e) => setEmail(e.target.value)} value={email}/>
           </label>
           <label>Phone #:
           <input placeholder='Optional' onChange={(e) => setEmail(e.target.value)} value={email}/>
           </label>
           <label>Leave Me A Message!
           <textarea placeholder='Hello my name is....'></textarea>
           </label>
          
<button type='submit' class='submit-btn'>Submit</button>

   

       </form>

       
       </div>
    
       </div>
       
    )
}

export default Contact
