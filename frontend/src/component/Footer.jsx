import React from 'react'
import "../css/Footerbox.css"
import img1 from "../images/menu-1.jpg"
import img2 from "../images/menu-2.jpg"
import img3 from "../images/menu-3.jpg"
import img4 from "../images/menu-4.jpg"
import img5 from "../images/menu-5.jpg"
import img6 from "../images/menu-6.jpg"
import checks from "../images/checks.png"
import map from "../images/map.png"
import call from "../images/call.png"
import mail from "../images/mail.png"
import time from "../images/time.png"
import fb from "../images/fb.png"
import twr from "../images/twr.png"
import insta from "../images/insta.png" 
import ln from "../images/ln.png"
export default function Footer() {
  return (
    <div>
        <footer className='footer'>
            <div className='footer-container'>
                <div className='row container'>
                    <div className='footer-box col-12 col-lg-3 col-md-6 col-12'>
                    <h2><span>Cater</span>Serve</h2>
                    <p>There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its estiegittis miristum.</p>
                     <div className='footer-boxs d-flex gap-3 mt-4'>
                        <img src={fb} alt="" />
                        <img src={twr} alt="" />
                        <img src={insta} alt="" />
                        <img src={ln} alt="" />
                     </div>
                </div>
                <div className='footer-box col-12 col-lg-3 col-md-6 col-12'>
                    <h3>Special Facilites</h3>
                    <ul>
                        <li><img src={checks} alt=""/>  Cheese Burger</li>
                        <li><img src={checks} alt=""/>  Sandwich</li>
                        <li><img src={checks} alt=""/>  Panner Burger</li>
                        <li><img src={checks} alt=""/>  Special Sweets</li>
                    </ul>
                </div>
                <div className='footer-box  col-12 col-lg-3 col-md-6 col-12'>
                    <h3>Contact Us</h3>
                    <div className='contact-item'>
                           <img src={map} alt="" srcset="" />
                           <span>123 Street, New York, USA</span>
                    </div>
                    <div className='contact-item'>
                           <img src={call} alt="" srcset="" />
                           <span> (+012) 3456 7890 123</span>
                    </div>
                    <div className='contact-item'>
                           <img src={mail} alt="" srcset="" />
                           <span> info@example.com</span>
                    </div>
                    <div className='contact-item'>
                        <img src={time} alt="" />
                           <span>26/7 Hours Service</span>
                    </div>
                </div>
                <div className='footer-box gallery col-12 col-lg-3 col-md-6 col-12'>
                    <h3>Social Gallery</h3>
                    <div className='gallery-grid'>
                        <div className='d-flex gap-3'>
                        <img src={img1} alt="" srcset="" />
                        <img src={img2} alt="" srcset="" />
                        <img src={img3} alt="" srcset="" />
                        </div>
                       <div className='d-flex gap-3 mt-3'>
                         <img src={img4} alt="" srcset="" />
                        <img src={img5} alt="" srcset="" />
                        <img src={img6} alt="" srcset="" />
                       </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
