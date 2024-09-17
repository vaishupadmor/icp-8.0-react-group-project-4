import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div className='contact'>
      <form>
    <h2 className='heading'>Contact Form</h2>
    <div className='input-box'>
    <label>First Name</label>
    <input type= "text" required placeholder='Enter your first name' className='field'></input>
    </div>
    <div className='input-box'>
    <label>last Name</label>
    <input type= "text" required placeholder='Enter your last name' className='field'></input>
    </div>
    <div className='input-box'>
    <label>Email</label>
    <input type= "email" required placeholder='Enter your email address' className='field'></input>
    </div>
    <div className='input-box'>
    <label>Message</label>
    <input type= "text" required placeholder='Enter message' className='field'></input>
    </div>
    <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Contact