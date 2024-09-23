import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Views/Home/Home";
import LearnMore from './Views/LearnMore/LearnMore';
import { Toaster } from 'react-hot-toast';
import Tournament from './Components/Tournaments/Tournament';
import Upcoming from './Components/Tournaments/Upcoming/Upcoming';
import Past from './Components/Tournaments/Past/Past';
import Ongoing from './Components/Tournaments/Ongoing/Ongoing';
import Ongoing1 from './Components/Tournaments/TournamentsInfo/Ongoing/Ongoing1';
import Upcoming1 from './Components/Tournaments/TournamentsInfo/Upcoming/Upcoming1';
import Past1 from './Components/Tournaments/TournamentsInfo/Past/Past1';
import Shop from "./Views/Shop/shop";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact"
import Login from "./Views/SignUp/LogIn"
import Gallery from "./Views/Gallery/gallery"
import Gocart from "./Views/GoCart1/GoCart1"
import Signup from "./Views/SignUp/SignUp"






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
    path:"/shop/:cartID",
    element:<Gocart/>
   },
   {
    path:"/login",
    element:<Login/>
   },
   {
    path:"/signup",
    element:<Signup/>
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
