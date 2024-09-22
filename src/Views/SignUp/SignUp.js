import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form submitted"); 

    const formData = {
      firstName: e.target.firstName.value.trim(),
      lastName: e.target.lastName.value.trim(),
      phoneNumber: e.target.phoneNumber.value.trim(),
      email: e.target.email.value.trim(),
      password: e.target.password.value.trim(),
      confirmPassword: e.target.confirmPassword.value.trim()
    };

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    localStorage.setItem('signupData', JSON.stringify(formData));
    toast.success('Sign up successful!');
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="title-signup">Sign Up</div>
          <div className="name-fields">
            <input type="text" name="firstName" placeholder="First Name" required className="name-input" />
            <input type="text" name="lastName" placeholder="Last Name" required className="name-input" />
          </div>
          <input type="tel" name="phoneNumber" placeholder="Phone Number" required className="input-field" />
          <input type="email" name="email" placeholder="Email" required className="input-field" />
          <input type="password" name="password" placeholder="Password" required className="input-field" />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required className="input-field" />
          <button type="submit" className="button">Sign Up</button>
          <div className="login-link-container">
            <p className="text">Already have an account?</p>
            <Link to="/login" className="link">Sign In</Link>
          </div>
        </form>
      </div>
      <Toaster /> 
    </div>
  );
}

export default Signup;
