import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Views/Home1/Home1.js";
import LearnMore from './Views/LearnMore/LearnMore';
import { Toaster } from 'react-hot-toast';
import Tournament from './Components/Tournaments/tournament.js';
import Upcoming from './Components/Tournaments/upcoming/upcoming.js'
import Past from './Components/Tournaments/past/past.js';
import Ongoing from './Components/Tournaments/ongoing/ongoing.js';
import Ongoing1 from './Components/Tournaments/tournamentsinfo/upcoming/upcoming1';
import Upcoming1 from './Components/Tournaments/tournamentsinfo/upcoming/upcoming1';
import Past1 from './Components/Tournaments/past/past.js';
import Shop from "./Views/Shop/shop";
import About from "./Views/About/About";







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
    path:"/about",
    element:<About/>
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
