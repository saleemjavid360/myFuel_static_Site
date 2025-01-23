import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myFuelLogoMobile from "../assets/images/myFuelLogo-mobile.png";
import myFuelLogoDesktop from "../assets/images/myFuelLogo-desktop.png";

const Navbar = () => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    console.log(e);
    setIsMenuToggle(!isMenuToggle);
  };
  const items = [
    {
      id: 1,
      label: "Solutions",
      icon: null,
      command: () => {
        navigate("/");
      },
    },
    {
      id: 2,
      label: "App",
      icon: null,
      command: () => {
        navigate("/");
      },
    },
    {
      id: 3,
      label: "Platform",
      icon: null,
      command: () => {
        navigate("/");
      },
    },
    {
      id: 4,
      label: "About Us",
      icon: null,
      command: () => {
        navigate("/");
      },
    },
    {
      id: 5,
      label: "Pricing",
      icon: null,
      command: () => {
        navigate("/");
      },
    },
    {
      id: 6,
      label: "Contact Us",
      icon: null,
      command: () => {
        navigate("/");
      },
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
                  className="navbar-toggler border-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={handleMenuClick}
                >
                  {isMenuToggle ? (
                    <span aria-hidden="true">&times;</span>
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
                  return (
                    <div className="nav-item active mx-2" key={item.id}>
                      <Link className="nav-link navbar-links" to="/">
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
      <div
        className={`collapse navbar-collapse d-sm-blcok d-md-none ${
          isMenuToggle ? "show" : ""
        }`}
        id="navbarSupportedContent"
      >
        <ul className="d-flex flex-column align-items-center navbar-nav">
          {items.map((item, indx) => {
            return (
              <li className="nav-item active" key={item.id}>
                <Link className="nav-link navbar-links" to="/">
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
