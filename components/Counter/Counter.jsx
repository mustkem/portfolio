import React, { useEffect, useRef } from "react";
import { BsBriefcase } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import {RiVipDiamondLine} from 'react-icons/ri'

import activateNavMenuItem from "../../utils/activateNavMenuItem";

const Counter = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    activateNavMenuItem(sectionRef.current);
  }, []);
  return (
    <section
      ref={sectionRef}
      id="work"
      className="counter-section section-padding"
    >
      <div className="container">
        <div className="row">
          {/* Counter Item */}
          <div className="col-md-4 col-sm-6 work-counter-widget text-center">
            <div
              className="counter"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="icon">
                <BsBriefcase />
              </div>
              <div className="counterUp">9</div>
              <p>Project Completed</p>
            </div>
          </div>
          {/* Counter Item */}
          <div className="col-md-4 col-sm-6 work-counter-widget text-center">
            <div
              className="counter"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="icon">
                <BsCheckCircle />
              </div>
              <div className="counterUp">5</div>
              <p>Projects Live</p>
            </div>
          </div>
          {/* Counter Item */}
          <div className="col-md-4 col-sm-6 work-counter-widget text-center">
            <div
              className="counter"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="icon">
                <RiVipDiamondLine />
              </div>
              <div className="counterUp">3</div>
              <p>Awards Received</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
