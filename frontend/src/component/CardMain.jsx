import React from 'react'
import Card from './Card'
import img1 from "../images/card1.png"
import img2 from "../images/card2.png"
import img3 from "../images/card3.png"
import img4 from "../images/card4.png"
import img5 from "../images/card5.png"
import img6 from "../images/card6.png"
import img7 from "../images/card7.png"
import img8 from "../images/card8.png"
import "../css/Card.css"

export default function CardMain() {
  const data1={
    img:img1,
    title:"Wedding Services",
    text:"Contrary to popular belief, ipsum is not simply random,ipsum is not simply ."
  }
  const data2={
    img:img2,
    title:"Corporate Catering",
    text:"Contrary to popular belief, ipsum is not simply random."

  }
  const data3={
    img:img3,
    title:"Cocktail Reception",
    text:"Contrary to popular belief, ipsum is not simply random."
  }
  const data4={
    img:img4,
    title:"Bento Catering",
    text:"Contrary to popular belief, ipsum is not simply random."
  }
  const data5={
    img:img5,
    title:"Pub Party",
    text:"Contrary to popular belief, ipsum is not simply random."
  }
  const data6={
    img:img6,
    title:"Home Delievery",
    text:"Contrary to popular belief, ipsum is not simply random."

  }
  const data7={
    img:img7,
    title:"Sit-down Catering",
    text:"Contrary to popular belief, ipsum is not simply random."
  }
  const data8={
    img:img8,
    title:"Buffet-Catering",
    text:"Contrary to popular belief, ipsum is not simply random."
  }
  return (
    <div>
      <section className='service-section'>
           {/* Heading */}
        <div className="service-heading text-center">
          <span>OUR SERVICES</span>
          <h2>What We Offer</h2>
        </div>

        <div className='first-card-row'>
            <div>
               <Card data={data1}></Card> 
            </div>
            <div>
              <Card data={data2}></Card>
            </div>
            <div>
              <Card data={data3}></Card>
            </div>
            <div>
              <Card data={data4}></Card>
            </div>
        </div>
        <div className='second-card-row'>
            <div>
               <Card data={data5}></Card> 
            </div>
            <div>
              <Card data={data6}></Card>
            </div>
            <div>
              <Card data={data7}></Card>
            </div>
            <div>
              <Card data={data8}></Card>
            </div>
        </div>
        </section>
    </div>
  )
}
