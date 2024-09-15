import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Views/home/home.js";
import LearnMore from './Views/LearnMore/LearnMore';
import { Toaster } from 'react-hot-toast';

import Tournament from './Components/Tournaments/tournament';
import Upcoming from './Config/upcoming.js';
import Past from './Config/past.js';
import Ongoing from './Config/ongoing.js';
import Ongoing1 from './Components/Tournaments/tournamentsinfo/upcoming/upcoming1';
import Upcoming1 from './Components/Tournaments/tournamentsinfo/upcoming/upcoming1';
import Past1 from './Components/Tournaments/tournamentsinfo/past/past1';
import Shop from "./Views/Shop/shop";
import About from "./Views/About/About";
import Tournament from './component/tournaments/Tournament';
import Upcoming from './component/tournaments/Upcoming/Upcoming';
import Past from './component/tournaments/Past/Past';
import Ongoing from './component/tournaments/Ongoing/Ongoing'
import Ongoing1 from './component/tournaments/tournamentsinfo/ongoing/ongoing1';
import Upcoming1 from './component/tournaments/tournamentsinfo/upcoming/upcoming1';
import Past1 from './component/tournaments/tournamentsinfo/past/past1';
import Shop from "./view/shop/shop";
import About from "./view/About/About";
>>>>>>> 83c8314f0fb331b3993b47f0638837dc6c3fa273



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
