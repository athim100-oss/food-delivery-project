import React from 'react'
import Welcome from "../component/Welcome";
import About from "../component/About";
import Counter from "../component/Counter";
import CardMain from "../component/CardMain";
import EventGallery from "../component/EventGallery";
import FoodMenu from "../component/FoodMenu";
import FoodCardMainMenu from "../component/FoodCardMainMenu";
import OrderDetailsButton from '../component/OrderDetailsButton';



export default function Home() {
  return (
    <div>
         
          <Welcome />
          <About />
          <Counter />
          <CardMain />
          <EventGallery />
          <FoodMenu />
          <FoodCardMainMenu />
          <OrderDetailsButton/>
        
    </div>
  )
}
