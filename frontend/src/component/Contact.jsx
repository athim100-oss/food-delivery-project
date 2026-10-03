import React from "react";
import "../css/Contact.css";
import map from "../images/map.png";
import phone from "../images/call.png"
import mails from "../images/mail.png"
export default function Contact() {
  return (
    <div>
      <div className="container con-color">
        <div className="small-heading">
          <h5>GET IN TOUCH</h5>
        </div>
        <h1 className="mt-4">Contact Us For Any Queries</h1>
        <div className="row g-2">
          <div className="col-12 col-lg-7">
            <input
              type="text"
              className="input-box form-control form-control-lg "
              placeholder="your Name"
            />
            <input
              type="email"
              className="input-box form-control form-control-lg"
              placeholder="enter your email"
            />
            <textarea
              type="text"
              className="input-box form-control form-control-lg"
              placeholder="your message"
              rows="5"
            ></textarea>
            <button className="input-button py-3 fs-5">Submit Now</button>
            </div>
            <div className="col-12 col-lg-5">
              <div className="address-box">
                <div>
                  <img src={map} alt="" />
                </div>
                <div>
                  <h2>address</h2>
                  <p>123 Street, New York, USA</p>
                </div>
              </div>
              <div className="address-box">
                <div>
                  <img src={mails} alt="" />
                </div>
                <div>
                  <h2>Mail Us</h2>
                  <p>info@gmail.com</p>
                  <p>info2@gamil.com</p>
                </div>
              </div>
              <div className="address-box">
                <div>
                  <img src={phone} alt="" />
                </div>
                <div>
                  <h2>Telephone</h2>
                  <p>(+012) 3456 7890 123</p>
                  <p>(+704) 5555 0127 296</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
