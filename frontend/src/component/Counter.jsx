import React from "react";
import "../css/Counter.css"
import people1 from "../images/people.png"
import chef from "../images/chef.png"
import tick from "../images/tick.png"

export default function counter() {
  return (
    <div>
      <section className="counter_section">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* left side counter cards */}
            <div className="col-12 col-lg-7">
              <div className="row g-4">
                {/* happy customers */}
                <div className="col-12 col-md-4">
                  <div className="counter-box">
                    <div className="counter-icon">
                     <img src={people1} alt="" srcset="" />
                    </div>
                    <div className="counter-number">689</div>
                    <div className="counter-title">HAPPY CUSTOMER</div>
                  </div>
                </div>

                {/* expert chef */}
                <div className="col-12 col-md-4">
                  <div className="counter-box">
                    <div className="counter-icon">
                      <img src={chef} alt="" srcset="" />
                    </div>
                    <div className="counter-number">108</div>
                    <div className="counter-title">EXPERTS CHEF</div>
                  </div>
                </div>
                {/* Events Complete */}
                <div className="col-12 col-md-4">
                  <div className="counter-box">
                    <div className="counter-icon">
                          <img src={tick} alt="" srcset="" />
                    </div>

                    <div className="counter-number">253</div>

                    <div className="counter-title">EVENTS COMPLETE</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="col-12 col-lg-5">
              <div className="video-box">
                <iframe title="catering" src="https://www.youtube.com/embed/Seg3Rmts7Yo" width={580} height={480} ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
