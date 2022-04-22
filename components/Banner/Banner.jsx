import { useEffect, useRef } from "react";
import activateNavMenuItem from "../../utils/activateNavMenuItem";

import Connect from "../Connect";

const Banner = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    activateNavMenuItem(sectionRef.current);
  }, []);
  return (
    <div ref={sectionRef} id="hero-area" className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <div className="contents">
              <h5
                className="script-font"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Hi This is
              </h5>
              <h2
                className="head-title"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                Mustkeem K
              </h2>
              <p
                className="script-font"
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Front-end Developer & Mentor
              </p>
              <img
                className="script-font"
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="600"
                alt="Avatar"
                src="/images/mf-avatar.svg"
                width={217}
                height={237}
              ></img>
              <div
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                <Connect animate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
