import React from "react";
import image2 from "../images/imageabout.png";
import "../css/About.css"

export default function About() {
  return (
    <div>
      <section className="about_section container-fluid ">
       
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 mb-4 mb-lg-0">
              <img
                src={image2}
                alt="catering"
                srcset=""
                className="img-fluid rounded-4 shadow-sm"
              />
            </div>

            <div className="col-12 col-lg-7">
              <span className="about_tag">About Us</span>

              <h1 className="about_title my-4">
                Trusted By 200+ satisfied clients
              </h1>

              <p className="about-text">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>

              <div className="row mt-4">
                <div className="col-12 col-md-6">
                  <p className="feature"> Fresh and Fast Food Delivery</p>

                  <p className="feature"> Easy Customization Options</p>
                </div>

                <div className="col-12 col-md-6">
                  <p className="feature"> 24/7 Customer Support</p>

                  <p className="feature">
                     Delicious Deals for Delicious Meals
                  </p>
                </div>
              </div>
              <button className="btn about-btn mt-4">About Us →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
