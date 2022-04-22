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
          <div className="col-lg-6 col-md-6 col-sm-6">
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
          <div className="col-lg-6 col-md-6 col-sm-6">
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
                      I currently work here as a Front-end developer, my
                      responsibilities include handling the the front-end.
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
                      Compound is a real estate startup based out of Manhattan,
                      New York. At compound I mainly focused on the user facing
                      web application and deployment.
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
                      Zeblok is a biotech startup based out of New York, my role
                      at Zeblok included development of Back-end, Front-end
                      applications as well as managing the cloud.
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
                      Sparxit is a biotech startup based out of New York, my
                      role at Sparxit included development of Back-end,
                      Front-end applications as well as managing the cloud.
                    </p>
                  </div>
                </li>
              </ul>
              and more ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
