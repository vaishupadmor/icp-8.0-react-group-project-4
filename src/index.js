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
    path:"/xyz-tro-123",
    element:<Ongoing1/>
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
 

