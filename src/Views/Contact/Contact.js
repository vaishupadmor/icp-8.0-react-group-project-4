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
          <div className='container'>
          <div className='main-info'>location
            <img src="https://www.shutterstock.com/image-vector/location-icon-isolated-on-white-600nw-2433352449.jpg" className='address'></img>
          </div>
         
          <div className='main-info'>Email
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTRm8o5NhQEbDK3ngLdZUwSgcM7wIUD9c8w&s" className='address'></img>
          </div>
          <div className='main-info'>Contact
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvIH0qQEwp_XV51RMqRW30rtrLvU0EI9wTg&s" className='address call'></img>
          </div>
          </div>
          </div>

      <Toaster />
    </div>
  )
}

export default Contact