import { useEffect, useRef } from "react";
import { MdOutlineAttachment } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import activateNavMenuItem from "../../utils/activateNavMenuItem";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    activateNavMenuItem(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-9">
            <div
              className="profile-wrapper"
              data-aos-duration="1000"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="d-flex justify-content-center about-heading">
                Hi. I’m Mustkeem, nice to meet you. Please take a look around!
              </h3>
              <p>
                I am passionate about building excellent software that improves
                the lives of those around me. With over 7 years of experience in
                software development, I load an arsenal of various technologies
                aimed at high quality development adhering to the industry
                standards while ensuring smooth user experience. I specialize in
                creating software for clients ranging from individuals and
                small-businesses all the way to large enterprise corporations.
              </p>
              <div className="row d-flex pt-5 pb-5 justify-content-center actions">
                <div className="col-md-12 col-lg-8 col-xs-12">
                  <div className="row">
                    <div className="col-lg-6 col-xs-12">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1jYbveXiIZ2W9_-4ZFb_jOY9HQ6t_vEqr/view"
                        className="btn btn-common link"
                        rel="noreferrer"
                      >
                        <MdOutlineAttachment className="icon" />
                        Download Resume
                      </a>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                      <a href="#contact" className="btn btn-common link">
                        <MdPermContactCalendar className="icon" /> Contact Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
