import React from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Retrieve values from form inputs
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Retrieve signup data from localStorage
    const storedData = localStorage.getItem('signupData');
    const parsedData = storedData ? JSON.parse(storedData) : null;

    // Check if username (email) and password match the stored data
    if (parsedData && parsedData.email === username && parsedData.password === password) {
      toast.success("Login Successful", {
        position: "top-right",
        duration: 3000,  // Toast disappears after 3 seconds
      });
      // Navigate to the home page or another protected route
      navigate('/');
    } else {
      toast.error("Invalid Username or Password", {
        position: "top-right",
        duration: 3000,  // Toast disappears after 3 seconds
      });
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form1" onSubmit={handleSubmit}>
          <div className="title-signup">Login</div>
          <input type="text" name="username" placeholder="Username (Email)" required className="input-field" />
          <input type="password" name="password" placeholder="Password" required className="input-field" />
          <button type="submit" className="button">Login</button>
          <a href="/forgot-password" className="link btn-password">Forgot Password?</a>
          <div className="signup-link">
            <p className="text">Don't have an account?</p>
            <Link to="/signup" className="link">Sign Up</Link>
          </div>
        </form>
      
      </div>
      <Toaster 
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: 'white',
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white',
            },
          },
        }}
      />
    </div>
  );
}

export default Login;
