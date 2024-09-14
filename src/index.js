import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./view/home/home";
import LearnMore from './view/LearnMore/LearnMore';
import { Toaster } from 'react-hot-toast';
import Tournament from './component/tournaments/tournament';
import Upcoming from './component/tournaments/upcoming/upcoming';
import Past from './component/tournaments/past/past';
import Ongoing from './component/tournaments/ongoing/ongoing'
import Ongoing1 from './component/tournaments/tournamentsinfo/ongoing/ongoing1';
import Upcoming1 from './component/tournaments/tournamentsinfo/upcoming/upcoming1';
import Past1 from './component/tournaments/tournamentsinfo/past/past1';

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
    path:"upcoming",
    element:<Upcoming/>
  },
  {
    path:"past",
    element:<Past/>
  },
  {
    path:"ongoing",
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
 

