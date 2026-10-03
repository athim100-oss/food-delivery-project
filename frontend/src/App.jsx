import React from "react";
import Home from "./pages/HomePage"
import Header  from "./component/Header";
import Footer from "./component/Footer";
import AboutPage from "./pages/AboutPage";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ServicePage from "./pages/ServicePage";
import Eventpage from "./pages/EventPage"
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import SignUp from "./component/SignUp";
import Login from "./component/Login"
import Admin from "./component/Admin";
import UserLogin from "./component/UserDashboard"
import FoodList from "./component/FoodList";
import Order from "./component/Order"
import FoodCard from "./component/FoodCard"
import MyOrders from "./component/MyOrders";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>

       <Route path="/" element={<Home/>}/> 
      <Route path="/abouts" element={<AboutPage/>}/>
      <Route path="/service" element={<ServicePage/>}/>
      <Route path="/event" element={<Eventpage/>}/>
      <Route path="/menu" element={<MenuPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/User" element={<UserLogin/>}/>
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/foodlist" element={<FoodList/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/foodcard" element={<FoodCard/>}/>
         <Route path="/myorders" element={<MyOrders/>}/>  
      </Routes>
      <Footer/>
      
      </BrowserRouter>
      
      
  

    </div>
  );
}
