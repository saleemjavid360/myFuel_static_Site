import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import myFuelLogoMobile from "../assets/images/myFuelLogo-mobile.png";
import myFuelLogoDesktop from "../assets/images/myFuelLogo-desktop.png";

const Navbar = () => {
  const location = useLocation()
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const handleMenuClick = (e) => {
    setIsMenuToggle(!isMenuToggle);
  };
  const items = [
    {
      id: 1,
      label: "Solutions",
      icon: null,
      navigateTo:"/solutions",
    },
    {
      id: 2,
      label: "App",
      icon: null,
      navigateTo:"/app",
    },
    {
      id: 3,
      label: "Platform",
      navigateTo:"/platform",
      icon: null,
    },
    {
      id: 4,
      label: "About Us",
      icon: null,
      navigateTo:"/aboutus",
    },
    {
      id: 5,
      label: "Pricing",
      icon: null,
      navigateTo:"/pricing",
    },
    {
      id: 6,
      label: "Contact Us",
      icon: null,
      navigateTo:"/contactus",
    },
    {
      id: 7,
      label: "Faq",
      icon: null,
      navigateTo:"/faq",
    },
  ];

  return (
    <React.Fragment>
      <div className="d-flex flex-column align-items-center bg-light border-bottom">
        <nav className="col-11 d-flex flex-column justify-content-center align-items-center navbar-light">
          <div className="col-12 d-flex flex-row justify-content-md-between navbar">
            {/* logo container */}
            <div className="p-2">
              <Link to={"/"}>
                <img
                  className="d-sm-block d-md-none myfuel-logo-mobile"
                  src={myFuelLogoMobile}
                  alt="MyFuelAi"
                />
                <img
                  className="d-none d-md-block myfuel-logo-desktop"
                  src={myFuelLogoDesktop}
                  alt="MyFuelAi"
                />
              </Link>
            </div>
            {/* link Container mobile*/}
            <div className=" d-sm-block d-md-none">
              <div className="d-flex">
                <button
                  type="button"
                  className="custom-btn btn-default-text-color custom-btn-border-color mx-3"
                >
                  Get a demo
                </button>
                <button
                  className="navbar-toggler border-0 outline-none navbar-toggler-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={handleMenuClick}
                >
                  {isMenuToggle ? (
                    <span className="fs-2" aria-hidden="true">&times;</span>
                  ) : (
                    <span
                      className={`navbar-toggler-icon ${
                        isMenuToggle ? "close-icon" : ""
                      }`}
                    ></span>
                  )}
                </button>
              </div>
            </div>
            {/* links desktop-Containers */}
            <div className="d-flex justify-content-center align-items-center d-none d-md-block">
              <div className="d-flex">
                {items.map((item, indx) => {
                  const isActive = location.pathname === item.navigateTo;
                  return (
                    <div className="nav-item mx-2" key={item.id}>
                      <Link className={`nav-link navbar-links ${isActive ? "active-link" : ""}`} to={item.navigateTo}>
                        {item.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="d-none d-md-block">
              <div className="d-flex flex-wrap">
                <button
                  type="button"
                  className="navbar-links bg-transparent border-0 mx-3"
                >
                  Log in
                </button>
                <button
                  type="button"
                  className="custom-btn btn-default-text-color custom-btn-border-color mx-2"
                >
                  Get a demo
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* links-mobile-view */}
      <div className="d-sm-block d-md-none">
       <div className="collapse navbar-collapse overlay" id="navbarSupportedContent">
        <ul className="d-flex flex-column align-items-center navbar-nav">
          {items.map((item, indx) => {
            const isActive = location.pathname === item.navigateTo;
            return (
              <li className="nav-item active" key={item.id}>
                <Link 
                  className={`nav-link navbar-links ${isActive ? "active-link" : ""}`}
                  to={item.navigateTo}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
