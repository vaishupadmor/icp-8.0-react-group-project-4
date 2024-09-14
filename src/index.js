import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./view/home/home";
import LearnMore from './view/LearnMore/LearnMore';

import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));

 const router=createBrowserRouter([
  {
    path:"/",
    element:< Home/>
  },
  {
   path:"/learnmore",
   element:<LearnMore/>
  },
  
  {
    path:"*",
    element:<h1> 404 Not found</h1>
  }
 ])
root.render( 
<div>
  <RouterProvider router={router} /> 
  <Toaster/>
  </div>
);
 

