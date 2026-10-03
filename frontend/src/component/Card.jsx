import React from 'react'
import "../css/Card.css"

export default function Card(props) {
  const {img,title,text}=props.data || {
    title:"default title",
    text:"default text",
  };
  return (
    <div>
      <div className='card'>
        <div>
        <img src={img} alt="" />
        </div>
        <div className='card-body'>
          <div className='card-body1'>
            <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{text}</p>
          </div>
          <div className='card-body1 '>
             <button type='text' className='card-button'>Read More</button>
          </div>
         
        </div>
      </div>
    </div>
  )
}
