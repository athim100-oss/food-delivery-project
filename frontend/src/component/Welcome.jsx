import React from "react";
import image1 from "../images/image.png";
import "../css/Welcome.css";
import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <div>
      <section className="food container-fluid">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="welcome">WELCOME TO CATERSERVE</div>
              <h1 className="welcome-title">
                Book <span>Cater</span>Serve For
                <br />
                Your Dream Event
              </h1>
              <div className="mt-5 me-5">
                <Link to="/menu">
                  <button className="btn welcome-btn ">Book Now</button>
                </Link>
                <Link to="/abouts">
                  <button className="btn welcome-btn ">Know More</button>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="img_Box">
                <img src={image1} alt="food" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
