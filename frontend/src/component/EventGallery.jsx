import React from 'react'
import event1 from "../images/event-1.jpg"
import event2 from "../images/event-2.jpg"
import event3 from "../images/event-3.jpg"
import event4 from "../images/event-4.jpg"
import event5 from "../images/event-5.jpg"
import event6 from "../images/event-6.jpg"
import event7 from "../images/event-7.jpg"
import event8 from "../images/event-8.jpg"
import "../css/EventGallery.css"

export default function EventGallery() {
  return (
    <div>
        <section className='event-section container-fluid'>
            
            <div className='event-label '>
                LATEST EVENTS
            </div>
            <h1>Our Social And Professional Events Gallery</h1>
            <div className='category-buttons'>
                <button className='active'>All Events</button>
                <button>Wedding</button>
                <button>Corporate</button>
                <button>Cocktail</button>
                <button>Buffet</button>
            </div>
            <div className='gallery '>
                <div className='gallery-row1'>
                    <div className='img-size col-12 col-sm-6 col-lg-3'>
                    <img src={event1} alt="" srcset="" />
                </div>
                <div className='img-size col-12 col-sm-6 col-lg-3'>
                    <img src={event2} alt="" srcset="" />
                </div>
                <div className='img-size col-12 col-sm-6 col-lg-3'>
                    <img src={event3} alt="" srcset="" />
                </div>
                <div className='img-size col-12 col-sm-6 col-lg-3'>
                    <img src={event4} alt="" srcset="" />
                </div>

                </div>

                <div className='gallery-row2'>
                    <div className='img-size col-12 col-sm-6 col-lg-3'>
                    <img src={event5} alt="" srcset="" />
                </div>
                <div className='img-size col-12 col-sm-6 col-lg-3'>
                    <img src={event6} alt="" srcset="" />
                </div>
                <div className='img-size col-12 col-sm-6 col-lg-3'>
                    <img src={event7} alt="" srcset="" />
                </div>
                <div className='img-size col-12 col-sm-6 col-lg-3'>
                    <img src={event8} alt="" srcset="" />
                </div>
                
                </div>
                
            </div>
        </section>
    </div>
  )
}
