import React from "react";
import homeVideo from "../../assets/videos/homePageVideo.mp4";
import momentoLogo from "../../assets/images/momentoLogo.png";
import signatureRX from "../../assets/images/signatureRX.png";
import lifeData1 from "../../assets/images/lifedata1.png";
import lifeData2 from "../../assets/images/lifedata2.png";
import signaturePharmacy from "../../assets/images/signaturePharmacy.png";
import lopic from "../../assets/images/lopic.png";
import appMapImage from "../../assets/images/appMapImage.png";
import adminTerminal from "../../assets/images/adminTerminal.png";
import plus from "../../assets/images/plus.svg";
const appfeatureTexts = [
  { id: 1, text: "User-Friendly Interface" },
  { id: 2, text: "Real-Time Updates" },
  { id: 3, text: "Reliability" },
  { id: 4, text: "Seamless Documentation" },
];
const aiModuleTexts = [
  { id: 1, text: "AI-Driven Route Optimization" },
  { id: 2, text: "Fleet Management" },
  { id: 3, text: "Fuel Usage Insights" },
  { id: 4, text: "Real-Time Monitoring" },
];
const basicPricePerks = [
  { id: 1, text: "Dispatch (Load and Orders)" },
  { id: 2, text: "Mobile App (Loads, Orders, Pictures)" },
  { id: 3, text: "Live Tracking" },
  { id: 4, text: "48 hour support turn around" },
];
const proPerks = [
  { id: 1, text: "Dispatch (Load and Orders)" },
  { id: 2, text: "Mobile App (Loads, Orders, Pictures)" },
  { id: 3, text: "Live Tracking" },
  { id: 4, text: "BOL and Ticket digitization (Spring 2025)" },
  { id: 5, text: "Reconciliation (Spring 2025)" },
  { id: 6, text: "Bestbuy (Spring 2025)" },
  { id: 7, text: "Truck and Driver Optimization (Spring 2025)" },
  { id: 8, text: "Integrations with external systems (Inbound and Outbound)" },
  { id: 9, text: "Truck Insights and Replay Route" },
  { id: 10, text: "LCR Register Integration" },
  { id: 11, text: "24 hour support turn around" },
];
const customPricingPerks = [
  { id: 1, text: "Private Hosting" },
  { id: 2, text: "Private Hosting" },
];

const qaList = [
  {
    id: 1,
    collapseText: "collapseOne",
    question: "What is MyFuel.ai and how does it work?",
    answer:
      "MyFuel.ai is a digital platform for managing fuel transportation, combining a mobile app for drivers and a web platform for administrators to ensure smooth operations.",
  },
  {
    id: 2,
    collapseText: "collapseTwo",
    question: "How can I get started with MyFuel.ai?",
    answer: "",
  },
  {
    id: 3,
    collapseText: "collapseThree",
    question: "What kind of support do you offer?",
    answer: "",
  },
  {
    id: 4,
    collapseText: "collapseFour",
    question: "How can I get started with MyFuel.ai?",
    answer: "",
  },
  {
    id: 5,
    collapseText: "collapseFive",
    question: "What kind of support do you offer?",
    answer: "",
  },
];

const Home = () => {
  return (
    <div className="col-11 d-flex flex-column home-desc-container p-0 gap-3 bg-light">
      {/* video-container-section */}
      <div className="col-12 d-flex flex-column flex-md-row mt-3 p-2">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start mt-3">
          <p className="title">Fuel Management Simplified with </p>
          <h1 className="main-title">
            AI-Driven <br />
            Solutions
          </h1>
          <p className="custom-paragraph text-md-left text-dark">
            Manage fuel logistics efficiently with real-time monitoring,
            AI-powered route optimization, and seamless mobile app integration.
          </p>
          <div className="col-11 d-flex flex-column flex-md-row mt-3 gap-1">
            <button
              type="button"
              className="custom-btn custom-btn-border-color myfuel-default-bg-color text-white"
            >
              Get a demo
            </button>
            <button
              type="button"
              className="custom-btn border border-secondary"
            >
              Start for free
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-cente align-items-center">
          <video
            autoPlay
            width="100%"
            height="240"
            muted
            loop 
            // className="w-100 h-100"
            // style={{ objectFit: "cover" }}
          >
            <source src={homeVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* logos-container-section */}
      <div className="col-12 d-flex align-items-center justify-content-center flex-wrap mt-3">
        <div className="col-4 col-md-2  mx-md-2 my-3 my-md-5">
          <img className="p-1" src={momentoLogo} alt="MyFuelAi" width={110} />
        </div>
        <div className="col-4 col-md-2  mx-md-2 my-3 my-md-5">
          <img className="p-1" width={90} src={signatureRX} alt="MyFuelAi" />
        </div>
        <div className="col-4 col-md-2  mx-md-2 my-3 my-md-5 d-flex justify-content-center align-items-center">
          <img
            className="p-1"
            width={40}
            height={30}
            src={lifeData1}
            alt="MyFuelAi"
          />
          <img className="p-1" width={90} src={lifeData2} alt="MyFuelAi" />
        </div>
        <div className="col-4 col-md-2  mx-md-2 my-3 my-md-5">
          <img
            className="p-1"
            width={90}
            src={signaturePharmacy}
            alt="MyFuelAi"
          />
        </div>
        <div className="col-4 col-md-2  mx-md-2 my-3 my-md-5">
          <img className="p-1" width={90} src={lopic} alt="MyFuelAi" />
        </div>
      </div>

      {/* feature-container-section */}
      <div className="col-12 p-2">
        <div className="">
          <h1 className="text-center heavy-title">
            Powered by for Ultimate Speed and Reliability
          </h1>
          <p className="text-center text-dark fw-normal fs-6">
            MyFuel.ai leverages the power of GCP to provide lightning-fast
            performance, unparalleled security, and scalability you can rely on.
          </p>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 d-flex flex-wrap justify-content-center">
              <div className="col-12 col-md-6 col-lg-3 p-3 ">
                <div className="d-flex flex-column gap-2 p-3 h-100  rounded feature-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M12 22.5V9.13393C12 8.20816 12.4274 7.33424 13.1582 6.76587L16.1582 4.43254C17.2415 3.58995 18.7585 3.58995 19.8418 4.43254L22.8418 6.76587C23.5726 7.33424 24 8.20816 24 9.13393V22.5M12 22.5C12 23.3284 12.6716 24 13.5 24H22.5C23.3284 24 24 23.3284 24 22.5M12 22.5H9C8.17157 22.5 7.5 21.8284 7.5 21V16.9419C7.5 16.4036 7.78843 15.9066 8.25579 15.6396L12 13.5V22.5ZM24 22.5L27 22.5C27.8284 22.5 28.5 21.8284 28.5 21V16.9419C28.5 16.4036 28.2116 15.9066 27.7442 15.6396L24 13.5V22.5Z"
                      stroke="#303030"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 16.5V20.25M15.75 9.54205C17.4614 8.81437 18.4276 8.82428 20.25 9.54205M16.5 27.75C15.75 30.75 15 31.5 13.5 33M19.5 27.75C20.25 30.75 21 31.5 22.5 33M12.75 27C11.5507 28.9321 9.75 30 8.25 30M23.25 27C24.4493 28.9321 26.25 30 27.75 30"
                      stroke="#6245D8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="title fs-5">Speed</h3>
                  <p className="fs-6 fw-normal">
                    Experience rapid data processing and seamless cloud
                    operations, thanks to GCP's top-tier infrastructure.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 p-3">
                <div className="d-flex flex-column gap-2 p-3 h-100 rounded feature-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    {/* Your existing SVG path for Reliability */}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.6483 10.8018C17.7913 10.5466 18.0391 10.4393 18.267 10.534C18.4949 10.6287 18.6534 10.9048 18.6627 11.2232V16.1158H21.9449C22.1507 16.1199 22.3384 16.2735 22.4346 16.5163C22.5308 16.7592 22.5203 17.0527 22.4071 17.2821L18.3494 25.1982C18.2065 25.4534 17.9586 25.5607 17.7307 25.466C17.5028 25.3713 17.3443 25.0952 17.335 24.7768V19.8842H14.0551C13.8493 19.8801 13.6616 19.7265 13.5654 19.4837C13.4692 19.2408 13.4797 18.9473 13.5929 18.7179L17.6483 10.8018Z"
                      stroke="#6245D8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5H25.5C28.8137 4.5 31.5 7.18629 31.5 10.5V25.5C31.5 28.8137 28.8137 31.5 25.5 31.5H10.5C7.18629 31.5 4.5 28.8137 4.5 25.5V10.5Z"
                      stroke="#303030"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="title fs-5">Reliability</h3>
                  <p className="fs-6 fw-normal">
                    Run your logistics with confidence, using the same cloud
                    infrastructure trusted by global leaders
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 p-3">
                <div className="d-flex flex-column gap-2 p-3 h-100 rounded feature-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M13.5 22.7561C8.25663 23.3739 4.5 25.0407 4.5 27C4.5 29.4853 10.5442 31.5 18 31.5C25.4558 31.5 31.5 29.4853 31.5 27C31.5 25.0407 27.7434 23.3739 22.5 22.7561"
                      stroke="#303030"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 16.5C21.3137 16.5 24 13.8137 24 10.5C24 7.18629 21.3137 4.5 18 4.5C14.6863 4.5 12 7.18629 12 10.5C12 13.8137 14.6863 16.5 18 16.5ZM18 16.5V27"
                      stroke="#6245D8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="title fs-5">Scalability</h3>
                  <p className="fs-6 fw-normal">
                    Easily scale your operations as your business grows, with
                    GCP's flexible, on-demand resources.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 p-3">
                <div className="d-flex flex-column gap-2 p-3 h-100 rounded feature-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_11857_21262)">
                      <path
                        d="M18 22.5C19.5533 22.5 20.8125 21.2408 20.8125 19.6875C20.8125 18.1342 19.5533 16.875 18 16.875C16.4467 16.875 15.1875 18.1342 15.1875 19.6875C15.1875 21.2408 16.4467 22.5 18 22.5Z"
                        stroke="#6245D8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 22.5V25.875"
                        stroke="#6245D8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.25 12.375H6.75C6.12868 12.375 5.625 12.8787 5.625 13.5V29.25C5.625 29.8713 6.12868 30.375 6.75 30.375H29.25C29.8713 30.375 30.375 29.8713 30.375 29.25V13.5C30.375 12.8787 29.8713 12.375 29.25 12.375Z"
                        stroke="#303030"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.375 12.375V7.875C12.375 6.38316 12.9676 4.95242 14.0225 3.89752C15.0774 2.84263 16.5082 2.25 18 2.25C19.4918 2.25 20.9226 2.84263 21.9775 3.89752C23.0324 4.95242 23.625 6.38316 23.625 7.875V12.375"
                        stroke="#303030"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11857_21262">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3 className="title fs-5">Security</h3>
                  <p className="fs-6 fw-normal">
                    Benefit from advanced security features that ensure your
                    data is protected 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* myFuel-details-section*/}
      <div className="container-fluid ">
        <div className="row justify-content-center p-2">
          <div className="col-12 col-md-6 d-flex justify-content-center ">
            <div className="d-flex flex-column align-items-center  align-items-md-start gap-3 p-2">
              <button type="button" className="sm-custom-btn btn-default-text-color custom-btn-border-color">
                APP
              </button>
              <div className="app-detail-container">
                <h1>Simple, Reliable Mobile App for Drivers</h1>
                <p>
                  Manage fuel deliveries with ease through our intuitive mobile
                  app, designed to provide drivers with real-time updates and
                  seamless route navigation.
                </p>
              </div>
              <div className="col-12 d-flex flex-column justify-content-center p-2 pb-0 pt-0">
                {appfeatureTexts.map((apptext) => (
                  <div className="d-flex center gap-2" key={apptext.id}>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_11857_21320)">
                          <path
                            d="M7 12.9375L10.0988 16L17.1818 9"
                            stroke="#6245D8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_11857_21320">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="mx-2">{apptext.text}</p>
                  </div>
                ))}
                <button
                  type="button"
                  className="col-12 col-md-4 custom-btn border border-dark bg-transparent"
                >
                  Start for free
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img className="p-1" src={appMapImage} alt="MyFuelAi" />
          </div>
        </div>
      </div>

      {/* AiModule-section */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center order-md-2">
            <div className="d-flex flex-column align-items-center  align-items-md-start gap-3 p-2 ">
              <button type="button" className="sm-custom-btn  btn-default-text-color custom-btn-border-color">
                AI module
              </button>
              <div className="app-detail-container">
                <h1>
                  Optimize Fuel Logistics with AI-Powered Route Management
                </h1>
                <p>
                  Our platform uses advanced AI to optimize routes and maximize
                  transport efficiency, reducing fuel costs and delivery times.
                </p>
              </div>
              <div className="col-12 d-flex flex-column justify-content-center p-2 pb-0 pt-0">
                {aiModuleTexts.map((apptext) => (
                  <div className="d-flex center gap-2" key={apptext.id}>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_11857_21320)">
                          <path
                            d="M7 12.9375L10.0988 16L17.1818 9"
                            stroke="#6245D8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_11857_21320">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="mx-2">{apptext.text}</p>
                  </div>
                ))}
                <button
                  type="button"
                  className="col-12 col-md-4 custom-btn border border-dark bg-transparent"
                >
                  Start for free
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-md-1">
            <img className="p-1 w-100" src={adminTerminal} alt="MyFuelAi" />
          </div>
        </div>
      </div>

      {/* Pricing-section */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center  gap-3 p-2">
              <button type="button" className="custom-btn btn-default-text-color custom-btn-border-color bg-transparent">
                Pricing
              </button>
              <div className="app-detail-container">
                <h1 className="text-center">
                  Flexible Pricing for Every Business
                </h1>
                <p className="text-center">
                  Whether you're a small fleet or a large enterprise, we offer
                  flexible pricing plans to help you optimize your fuel
                  logistics.
                </p>
              </div>
            </div>
          </div>
          {/* Price-plans-container */}
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                {/*  */}
                <div className="col-12 col-md-4 p-1 ">
                  <div className="d-flex flex-column align-items-center gap-0 p-3 h-100 rounded basic-price-container">
                    <p className="fw-normal lh-1">BASIC</p>
                    <h3 className="fw-bold fs-2 lh-1">$49.99</h3>
                    <p className="text-decoration-line-through lh-base">$59.99</p>
                    <div className="col-12 d-flex flex-column justify-content-center p-2 pb-0 pt-0">
                      {basicPricePerks.map((apptext) => (
                        <div className="d-flex center gap-2" key={apptext.id}>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_11857_21320)">
                                <path
                                  d="M7 12.9375L10.0988 16L17.1818 9"
                                  stroke="#6245D8"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_11857_21320">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <p className="mx-2 fs-6">{apptext.text}</p>
                        </div>
                      ))}
                      <button type="button" className="custom-btn btn-default-text-color custom-btn-border-color bg-transparent">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="col-12 col-md-4 p-1 ">
                  <div className="d-flex flex-column align-items-center gap-0 p-0 h-100  rounded pro-price-container">
                    <div className="col-12 d-flex flex-column align-items-center rounded-top myfuel-default-bg-color">
                      <p className="text-white">PRO</p>
                      <h3 className="text-white">$79.99</h3>
                    </div>

                    <div className="col-12 d-flex flex-column justify-content-center p-3">
                      {proPerks.map((apptext) => (
                        <div className="d-flex center gap-2" key={apptext.id}>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_11768_20948)">
                                <rect
                                  width="24"
                                  height="24"
                                  rx="12"
                                  fill="#6245D8"
                                />
                                <path
                                  d="M7 12.9375L10.0988 16L17.1818 9"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_11768_20948">
                                  <rect
                                    width="24"
                                    height="24"
                                    rx="12"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <p className="mx-2">{apptext.text}</p>
                        </div>
                      ))}
                      <button type="button" className="custom-btn btn-default-text-color custom-btn-border-color bg-transparent">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 p-1 ">
                  <div className="d-flex flex-column align-items-center gap-0 p-3 h-100  rounded basic-price-container">
                    <p className="fw-normal lh-1 text-dark">ENTERPRISE</p>
                    <h3 className="fw-bold fs-4 lh-1">Custom Pricing</h3>
                    <div className="col-12 d-flex flex-column justify-content-center p-2 pb-0 pt-0 mt-2">
                      {customPricingPerks.map((apptext) => (
                        <div className="d-flex center gap-2" key={apptext.id}>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_11857_21320)">
                                <path
                                  d="M7 12.9375L10.0988 16L17.1818 9"
                                  stroke="#6245D8"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_11857_21320">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <p className="mx-2">{apptext.text}</p>
                        </div>
                      ))}
                      <button type="button" className="custom-btn btn-default-text-color custom-btn-border-color bg-transparent">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion-QA-Section */}
      <div className="container-fluid">
        <div className="row col-12 d-flex flex-column align-items-center">
          <div className="col-11 ">
              <div className="accordion" id="accordionExample">
                {qaList.map((qa, index) => (
                  <div className="accordion-item mb-2 rounded border-0" key={qa.id}>
                    <h2 className="accordion-header text-dark" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${
                          index === 0 ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${qa.collapseText}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={qa.collapseText}
                      >
                        {qa.question}
                      </button>
                    </h2>
                    <div
                      id={qa.collapseText}
                      className={`accordion-collapse collapse  ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body mt-0">{qa.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>

      {/* Try-Demo-Section */}
      <div className=" rounded myfuel-default-bg-color">
        <div className="d-flex flex-column justify-content-center align-items-center p-3 my-5 mx-5">
          <h1 className="text-white text-center heavy-title">
            Ready to Optimize Your Fuel Logistics?
          </h1>
          <p className="fw-normal fs-7 text-white text-center">
            Get started with MyFuel.ai and experience seamless fuel logistics with
            real-time tracking and AI-driven optimization
          </p>
          <button type="button" className="custom-btn btn-default-text-color custom-btn-border-color bg-white">
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
