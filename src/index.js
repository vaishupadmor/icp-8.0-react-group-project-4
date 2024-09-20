import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Views/Home/Home";
import LearnMore from './Views/LearnMore/LearnMore';
import { Toaster } from 'react-hot-toast';
import Tournament from './Components/Tournaments/Tournament.js';
import Upcoming from './Components/Tournaments/Upcoming/Upcoming.js'
import Past from './Components/Tournaments/Past/Past.js';
import Ongoing from './Components/Tournaments/Ongoing/Ongoing.js';
import Ongoing1 from './Components/Tournaments/TournamentsInfo/Ongoing/Ongoing1.js';
import Upcoming1 from './Components/Tournaments/TournamentsInfo/Upcoming/Upcoming1.js';
import Past1 from './Components/Tournaments/TournamentsInfo/Past/Past1.js';
import Shop from "./Views/Shop/shop";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact.js"
import Login from "./Views/Login/login.js"
import Gallery from "./Views/Gallery/gallery.js"
import Gocart from "./Views/Gocart/gocart.js"







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
    path:"//shop/:cartID",
    element:<Gocart/>
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
