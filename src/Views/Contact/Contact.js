import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div className='contact'>
      <form>
    <h2 className='heading'>Contact Form</h2>
    <label>First Name</label>
    <input type= "text" required placeholder='Enter your first name'></input>
    <label>last Name</label>
    <input type= "text" required placeholder='Enter your last name'></input>
    <label>Email</label>
    <input type= "email" required placeholder='Enter your email address'></input>
    <label>Message</label>
    <input type= "text" required placeholder='Enter message'></input>
    <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Contact