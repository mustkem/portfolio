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
              <h3 className="d-flex justify-content-center">Hi There!</h3>
              <p>
                I am a front-end developer with a passion to create powerful
                tech products. With over 7 years of experience in software
                development, I load an arsenal of various technologies aimed at
                high quality development adhering to the industry standards
                while ensuring a smooth user experience. I have over 7 years of
                experience, remotely collaborating with startups around the
                globe, preferably open to such more opportunities.
              </p>
              <div className="row d-flex pt-5 pb-5 justify-content-center">
                <div className="col-md-12 col-lg-8 col-xs-12">
                  <div className="row">
                    <div className="col-lg-6 col-xs-12">
                      <a
                        href="https://drive.google.com/file/d/1giSAlBvcw25e2UjxMcyb_ZLwCJSc5p3O/view"
                        className="btn btn-common link"
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
