import React from 'react'
import "./contact.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer1'


import toast, { Toaster } from "react-hot-toast"
import email from "./icons8-email-64.png"
import mobile from "./icons8-contact-48.png"
import location from "./icons8-location-50.png"


function Contact() {
  return (
    <div>
    <Navbar/>
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
          <div className='main-info'><b>Location:-</b>
            <br/>
            <p><a href="https://www.google.com/maps/place/%E0%A4%95%E0%A5%8B%E0%A4%A8%E0%A5%89%E0%A4%9F+%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%87%E0%A4%B8,+%E0%A4%A8%E0%A4%B5%E0%A5%80+%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80,+%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80+110001/@28.6289016,77.2049872,15z/data=!3m1!4b1!4m6!3m5!1s0x390cfd37b741d057:0xcdee88e47393c3f1!8m2!3d28.6304203!4d77.2177216!16zL20vMDR4eDB4?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"> Connaught Place,New Delhi</a></p>
            <img src={location} className='address'></img>
          </div>
         
          <div className='main-info'><b>Email:-</b>
            <br/>
            <p ><a href="mailto:%20contact@esportsgroup.net">esports@gmail.com</a></p>
            <img src={email} className='address'></img>
          </div>
          <div className='main-info'><b>Contact:-</b>
            <br/>
          <p><a href="tel:8869586487">+8869586487</a></p>
        <img src={mobile} className='address call'></img>
          </div>
          </div>
          </div>

      <Toaster />
    </div>
    <Footer/>
    </div>
  )
}

export default Contact