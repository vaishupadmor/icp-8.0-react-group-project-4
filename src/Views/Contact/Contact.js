import React from 'react'
import "./contact.css"
import toast, { Toaster } from "react-hot-toast"

function Contact() {
  return (
    <div className='contact'>
      <form>
        <h2 className='heading'>Contact Form</h2>
        <div className='input-box'>
          <label>First Name</label>
          <input type="text" required placeholder='Enter your first name' className='field'></input>
        </div>
        <div className='input-box'>
          <label>last Name</label>
          <input type="text" required placeholder='Enter your last name' className='field'></input>
        </div>
        <div className='input-box'>
          <label>Email</label>
          <input type="email" required placeholder='Enter your email address' className='field'></input>
        </div>
        <div className='input-box'>
          <label>Message</label>
          <input type="text" required placeholder='Enter message' className='field'></input>
        </div>
        <button type="submit" className='btn' onClick={() => {
          toast.success("Submit Successfully ", {
            icon: "🚀",
            duration: 5000,
            style: {
              borderRadius: "13px",
              backgroundColor: 'orange',
              fontSize: "25px"
            }
          })
        }}>
          Submit
        </button>
      </form>
      <div className='address-container'>
          <h1 className='heading'>Get in Touch</h1>
          </div>

      <Toaster />
    </div>
  )
}

export default Contact