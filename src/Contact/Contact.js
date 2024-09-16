import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div>
    <h2>Contact Form</h2>
    <label>First Name</label>
    <input type= "text" required placeholder='Enter your first name'></input>
    <label>last Name</label>
    <input type= "text" required placeholder='Enter your last name'></input>
    
    </div>
  )
}

export default Contact