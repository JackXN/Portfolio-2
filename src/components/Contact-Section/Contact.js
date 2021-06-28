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
             <h1>Get In Touch!</h1>
             <div className='form-wrapper'>
      
       <form className='form' onSubmit={handleSubmit}>
       <img src={Coffee} alt='coffee' id='coffee'/>
       <div className='left-side'>
           <label class='form-space'>Name:
           <input placeholder='Required' required onChange={(e) => setName(e.target.value)} value={name}/>
           </label>

           <label class ='form-space'>Email:

            <input type='email'placeholder='Required' required onChange={(e) => setEmail(e.target.value)} value={email}/>
           </label>
           <label>Phone:
           <input placeholder='Optional' onChange={(e) => setPhone(e.target.value)} value={phone}/>
           </label>
           <div className='textArea'>
           <label>Leave Me A Message!</label>
           <textarea onChange={(e) => setMessage(e.target.value)} value={message} placeholder='Hello my name is....' required></textarea>
        
           </div>
           </div>
          
<button type='submit' class='submit-btn'>Submit</button>

   

       </form>

       
       </div>
    
       </div>
       
    )
}

export default Contact
