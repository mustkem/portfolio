import React, { useEffect, useRef } from "react";
import activateNavMenuItem from "../../utils/activateNavMenuItem";
import { MdLocationOn, MdEmail, MdLocalPhone } from "react-icons/md";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    activateNavMenuItem(sectionRef.current);
  }, []);
  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="contact-form">
        <div className="container">
          <div
            className="contact-form-area footer-right-contact"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <div className="contact-content row">
              <div className="col-8 mx-auto">
                <div className="contact-wrap">
                  <div className="row">
                    <div className="col-md-6 col-xs-12 justify-content-center">
                      <div className="d-flex single-contact">
                        <MdLocationOn className="icon" />
                        <p>New Delhi, Delhi</p>
                      </div>
                    </div>

                    <div className="col-md-6 col-xs-12 justify-content-center">
                      <div className="d-flex single-contact">
                        <MdLocalPhone className="icon" />
                        <p>
                          <a href="tel:+91-8130128030">+91-8130128030</a>
                        </p>
                      </div>
                    </div>

                    {/*  */}
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <div className="d-flex align-items-center single-contact">
                        <MdEmail className="icon" />
                        <div>
                          <p>
                            <a href="mailto:mustkeem@upstack.co">
                              mustkeem@upstack.co
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="d-flex align-items-center single-contact">
                        <MdEmail className="icon" />
                        <div>
                          <p>
                            <a href="mailto:mo.mustkem@gmail.com">
                              mo.mustkem@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
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

export default Contact;
