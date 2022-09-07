import React, { useEffect, useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";

import activateNavMenuItem from "../../utils/activateNavMenuItem";

const Resume = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    activateNavMenuItem(sectionRef.current);
  }, []);
  return (
    <div>
      <div ref={sectionRef} id="resume" className="section-padding">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-8 col-md-8 col-xs-12 ">
              <div
                className="experience"
                data-aos-delay="400"
                data-aos-easing="linear"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <h2
                  className="section-title"
                  data-aos-delay="400"
                  data-aos-easing="linear"
                  data-aos="flip-up"
                  data-aos-duration="500"
                >
                  Experience
                </h2>
                <ul className="timeline">
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">
                        Senior Software Developer - Upstack Technologies, Inc.
                      </h3>
                      <span>Oct 2021 - Present</span>
                      <p className="line-text">
                        I currently work here as a software developer, creating
                        and developing innovative software solutions for clients
                        across a broad range of industries.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">
                        Senior Software Developer - Cognizant
                      </h3>
                      <span>March 2020 - Oct 2021</span>
                      <p className="line-text">
                        Cognizant is a multinational information technology
                        services and consulting company. I worked here as front
                        end developer and technical consultant and mainly
                        focused on the finance and telecom web applications.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">
                        Software Developer - Paytm Payment Bank
                      </h3>
                      <span>Sep 2019 - March 2020</span>
                      <p className="line-text">
                        Paytm is a financial technology company specializing in
                        digital payment system and financial services, my role
                        here included development of front end and back end
                        development of internet banking platform.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">
                        Software Developer - Sparxit Inc.
                      </h3>
                      <span>December 2016 - March 2020</span>
                      <p className="line-text">
                        Sparx IT Solutions is a software development company
                        that specializes in creating custom software
                        applications. My role at sparxIt included both front end
                        and back end development.
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="more-link d-flex justify-content-center">
                  and more ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="education" className="section-padding mb-130">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-8 col-md-8 col-xs-12 ">
              <div
                className="experience"
                data-aos-delay="400"
                data-aos-easing="linear"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <h2
                  className="section-title"
                  data-aos-delay="400"
                  data-aos-easing="linear"
                  data-aos="flip-up"
                  data-aos-duration="500"
                >
                  Education
                </h2>
                <ul className="timeline">
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">Bachelor of Technology</h3>
                      <span>2010 - 2014</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
