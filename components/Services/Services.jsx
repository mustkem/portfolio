import React, { useEffect, useRef } from "react";
import { BsGrid } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import activateNavMenuItem from "../../utils/activateNavMenuItem";

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    activateNavMenuItem(sectionRef.current);
  }, []);
  return (
    <section
      ref={sectionRef}
      id="services"
      className="services section-padding"
    >
      <h2
        className="section-title"
        data-aos="flip-up"
        data-aos-delay="0.4s"
        data-aos-duration="500"
      >
        What I do
      </h2>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {/* Services item */}
          <div className="col-md-6 col-lg-3 col-xs-12">
            <div
              className="services-item"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos="fade-down"
            >
              <div className="icon">
                <BsGrid />
              </div>
              <div className="services-content">
                <h3>Front-End Development</h3>
                <p>
                  Reactjs, React Native, Angular preffered in the same order.
                </p>
              </div>
            </div>
          </div>
          {/* Services item */}
          <div className="col-md-6 col-lg-3 col-xs-12">
            <div
              className="services-item"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos="fade-down"
            >
              <div className="icon">
                <FiLayers />
              </div>
              <div className="services-content">
                <h3>Back-end Development</h3>
                <p>REST API based backend development using Nodejs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
