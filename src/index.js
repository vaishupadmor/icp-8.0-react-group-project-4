import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./view/home/home";
import { Toaster } from 'react-hot-toast';
import About from './view/About/About';


const root = ReactDOM.createRoot(document.getElementById('root'));

 const router=createBrowserRouter([
  {
    path:"/",
    element:< Home/>
  },
  
  {
    path:"*",
    element:<h1> 404 Not found</h1>
  },
  {
    path:"about",
    element:<About/>
  }
 ])
root.render( 
<div>
  <RouterProvider router={router} /> 
  <Toaster/>
  </div>
);
 

