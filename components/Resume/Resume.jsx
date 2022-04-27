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
    <div ref={sectionRef} id="resume" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div
              className="education"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <ul className="timeline">
                <li>
                  <div className="icon-head">
                    <FaGraduationCap />
                  </div>
                  <h2 className="timelin-title">Education</h2>
                </li>
                <li>
                  <div className="content-text">
                    <h3 className="line-title">
                      BTech - ABESIT College of Engineering
                    </h3>
                    <span>2010 - 2014</span>
                  </div>
                </li>
                <li>
                  <div className="content-text">
                    <h3 className="line-title">
                      High School - Board of High School and Intermediate
                      Education Uttar Pradesh
                    </h3>
                    <span>2008 - 2010</span>
                  </div>
                </li>
                <li>
                  <div className="content-text">
                    <h3 className="line-title">
                      Secondary School - Board of High School and Intermediate
                      Education Uttar Pradesh
                    </h3>
                    <span>2003 - 2008</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6  col-xs-12">
            <div
              className="experience"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <ul className="timeline">
                <li>
                  <div className="icon-head">
                    <BsBriefcaseFill />
                  </div>
                  <h2 className="timelin-title">Experience</h2>
                </li>
                <li>
                  <div className="content-text">
                    <h3 className="line-title">
                      Front-End Developer - Upstack Technologies, Inc.
                    </h3>
                    <span>Oct 2021 - Present</span>
                    <p className="line-text">
                      I currently work here as a Front-End developer, Creating
                      and developing innovative software solutions for clients
                      across a broad range of industries.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content-text">
                    <h3 className="line-title">
                      Front-End Developer - Cognizant
                    </h3>
                    <span>March 2020 - Oct 2021</span>
                    <p className="line-text">
                      Cognizant is an multinational information technology
                      services and consulting company. I worked here as Front-End
                      developer and technical consultant and mainly focused on
                      the finance and telecom demain web applications and
                      deployment.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content-text">
                    <h3 className="line-title">
                      Front-End Developer - Paytm Payment Bank
                    </h3>
                    <span>Sep 2019 - March 2020</span>
                    <p className="line-text">
                      Paytm is a financial technology company specializing in
                      digital payment system and financial services, my role
                      here included development of Front-End part of the
                      internet banking platform.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content-text">
                    <h3 className="line-title">
                      Full-Stack Developer - Sparxit Inc.
                    </h3>
                    <span>December 2016 - March 2020</span>
                    <p className="line-text">
                      Sparx IT Solutions is a software development company that
                      specializes in creating custom software applications. My
                      role at sparxIt included both Front-End and Back-end
                      development.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="more-link">and more ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
