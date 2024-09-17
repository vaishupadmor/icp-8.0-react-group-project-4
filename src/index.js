import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Views/Home/Home";
import LearnMore from './Views/LearnMore/LearnMore';
import { Toaster } from 'react-hot-toast';
import Tournament from './Components/Tournaments/tournament.js';
import Upcoming from './Components/Tournaments/upcoming/upcoming.js'
import Past from './Components/Tournaments/past/past.js';
import Ongoing from './Components/Tournaments/ongoing/ongoing.js';
import Ongoing1 from './Components/Tournaments/tournamentsinfo/ongoing/ongoing1.js';
import Upcoming1 from './Components/Tournaments/tournamentsinfo/upcoming/upcoming1';
import Past1 from './Components/Tournaments/tournamentsinfo/past/past1.js';
import Shop from "./Views/Shop/shop";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact.js"
import Login from "./Views/Login/login.js"
import Gallery from "./Views/Gallery/gallery.js"
import Gocard from "./Views/Gocart/gocart.js"








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
    path:"/tournament",
    element:<Tournament/>
   },
   {
    path:"/gallery",
    element:<Gallery/>
   },
   {
    path:"/gocard",
    element:<Gocard/>
   },
   {
    path:"/login",
    element:<Login/>
   },
   {
    path:"/upcoming",
    element:<Upcoming/>
  },

  {
    path:"/past",
    element:<Past/>
  },
  {
    path:"/ongoing",
    element:<Ongoing/>
  },
  {
    path:"/ongoing/:neha",
    element:<Ongoing1/>
  },
  
  {
    path:"/upcoming/:neha",
    element:<Upcoming1/>
  },
  {
    path:"/past/:neha",
    element:<Past1/>
  },
  {
    path:"/shop",
    element:<Shop/>
  },
  {
    path:"/productcard",
    element:<Productcard/>
  },

  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"*",
    element:<h1> 404 Not found</h1>
  },
 
 ])
root.render( 
<div>
  <RouterProvider router={router} /> 
  <Toaster/>
  </div>
);
