import React from "react";
import appMapImage from "../../assets/images/appMapImage.png";
import momentoLogo from "../../assets/images/momentoLogo.png";
import signatureRX from "../../assets/images/signatureRX.png";
import lifeData1 from "../../assets/images/lifedata1.png";
import lifeData2 from "../../assets/images/lifedata2.png";
import signaturePharmacy from "../../assets/images/signaturePharmacy.png";
import lopic from "../../assets/images/lopic.png";
import artOfScanning from "../../assets/images/artOfScanning.png";
import IotIntegration from "../../assets/images/IotIntegration.png";


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
const AppRoute = () => {
  return (
    <div className="col-11 d-flex flex-column home-desc-container p-0 gap-3 bg-light">
      {/* Main-section */}
      <div className="col-12 d-flex flex-column flex-md-row mt-3 p-2">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start mt-3">
          <h1 className="main-title">
            Fuel managment <br />
            made simple
          </h1>
          <p className="custom-paragraph text-md-left text-dark">
            Stay in control of your fleet with our intuitive app – track fuel
            usage, manage deliveries, and access critical documents anytime,
            anywhere
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
          <img className="p-1" src={appMapImage} alt="MyFuelAi" />
        </div>
      </div>

      {/*Logos-section  */}
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

      {/* State-of-art-Section */}
      <div className="col-12 my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center  align-items-md-start gap-3 p-2">
              <div className="app-detail-container">
                <h1>State-of-the-Art Mobile Scanning</h1>
                <p>
                  Streamline your operations with myFuel's advanced mobile
                  scanning technology. Our AI-powered live extraction automates
                  data capture, reducing manual input by 80% and minimizing
                  errors. By quickly and accurately collecting essential data,
                  you'll accelerate load and order completion times.
                </p>
                <p>
                  With top-notch proof of delivery documentation generated
                  effortlessly, you can expedite your accounts receivable
                  process and improve cash flow. Experience t he future of
                  transportation logistics with myFuel's innovative mobile
                  scanning solution
                </p>
              </div>
              <button
                type="button"
                className="col-12 col-md-4 custom-btn border border-dark bg-transparent"
              >
                Start for free
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img className="p-1 w-100" src={artOfScanning} alt="MyFuelAi" />
          </div>
        </div>
      </div>

      {/* Iot-Integration-Section */}
      <div className="col-12 my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center order-md-2">
            <div className="d-flex flex-column align-items-center  align-items-md-start gap-3 p-2">
              <div className="app-detail-container">
                <h1>IoT Integration</h1>
                <p>
                  Our TMS system offers robust IoT integration, enabling
                  seamless communication with Liquid Controls' LCR-II electronic
                  registers and wireless printers.
                </p>
                <p>
                  This connectivity facilitates real-time data exchange and
                  precise control over fuel dispensing operations. With
                  Bring-Your-Own-Device (BYOD) support, users can access and
                  manage the system from any device, enhancing operational
                  flexibility and efficiency.
                </p>
              </div>
              <button
                type="button"
                className="col-12 col-md-4 custom-btn border border-dark bg-transparent"
              >
                Start for free
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-md-1">
            <img className="p-1 w-100" src={IotIntegration} alt="MyFuelAi" />
          </div>
        </div>
      </div>

      {/* Pricing-section */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center  gap-3 p-2">
              <button
                type="button"
                className="custom-btn btn-default-text-color custom-btn-border-color bg-transparent"
              >
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
                    <p className="text-decoration-line-through lh-base">
                      $59.99
                    </p>
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
                      <button
                        type="button"
                        className="custom-btn btn-default-text-color custom-btn-border-color bg-transparent"
                      >
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
                      <button
                        type="button"
                        className="custom-btn btn-default-text-color custom-btn-border-color bg-transparent"
                      >
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
                      <button
                        type="button"
                        className="custom-btn btn-default-text-color custom-btn-border-color bg-transparent"
                      >
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
                <div
                  className="accordion-item mb-2 rounded border-0"
                  key={qa.id}
                >
                  <h2
                    className="accordion-header text-dark"
                    id={`heading${index}`}
                  >
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

export default AppRoute;
