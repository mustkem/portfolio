import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = (e) => {
    setNavbarOpen((prev) => {
      if (typeof window != "undefined" && window.document) {
        if (prev) {
          document.body.style = "overflow-y:visible";
        } else {
          document.body.style = "overflow-y:hidden";
        }
      }
      return !prev;
    });
  };

  return (
    <header id="header-wrap">
      {/* Navbar Start */}
      <div
        onClick={handleToggle}
        className={`navbar-header ${navbarOpen ? "active" : ""}`}
      >
        <AiOutlineMenu />
      </div>
      <nav
        className={`navbar navbar-expand-lg fixed-top scrolling-navbar ${
          navbarOpen ? "active" : ""
        }`}
      >
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}

          <div
            id="main-navbar"
            className={`navbar-collapse menuNav ${navbarOpen ? "active" : ""}`}
          >
            <div className="navbar-content">
              <div onClick={handleToggle} className="close-sidebar">
                Close
              </div>
              <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
                <li data-ref="hero-area" className="nav-item active">
                  <a
                    onClick={handleToggle}
                    className="nav-link"
                    href="#hero-area"
                  >
                    Home
                  </a>
                </li>
                <li data-ref="about" className="nav-item">
                  <a onClick={handleToggle} className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li data-ref="services" className="nav-item">
                  <a
                    onClick={handleToggle}
                    className="nav-link"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li data-ref="resume" className="nav-item">
                  <a onClick={handleToggle} className="nav-link" href="#resume">
                    Resume
                  </a>
                </li>
                <li data-ref="work" className="nav-item">
                  <a onClick={handleToggle} className="nav-link" href="#work">
                    Work
                  </a>
                </li>
                <li data-ref="contact" className="nav-item">
                  <a
                    onClick={handleToggle}
                    className="nav-link"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {navbarOpen && (
          <div onClick={handleToggle} className="mobile-menu-layout"></div>
        )}
      </nav>
    </header>
  );
};

export default Header;
