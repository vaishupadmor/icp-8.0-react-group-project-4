import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value
    };

    // Storing form data in local storage
    localStorage.setItem('signupData', JSON.stringify(formData));
  
  };

  return (
    <div className="container">
      <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
          <div className="title">Sign Up</div>
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
    </div>
  );
}

export default Signup;
