import React from "react";

const platformQa = [
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
const appQa=[
  {
    id: 1,
    collapseText: "collapseAppOne",
    question: "How can I get started with MyFuel.ai?",
    answer:
      "",
  },
  {
    id: 2,
    collapseText: "collapseAppTwo",
    question: "What kind of support do you offer?",
    answer:
      "",
  },
  {
    id: 3,
    collapseText: "collapseAppThree",
    question: "How can I get started with MyFuel.ai?",
    answer:
      "",
  },
  {
    id: 4,
    collapseText: "collapseAppFour",
    question: "What kind of support do you offer?",
    answer:
      "",
  },
]

const Faq = () => {
  return (
    <div className="col-11 d-flex flex-column home-desc-container p-0 gap-3 bg-light">
      <div className="col-12 d-flex flex-column mt-3 p-2">
        <h1 className="main-title">Frequently Asked Questions</h1>
        <p className="text-dark">
          Quick answers to questions you may have. Can’t find what you’re
          looking for? Contact us!
        </p>
      </div>
      {/* Qa-Accordion-section */}
      <div className="col-12 d-flex flex-column flex-md-row p-3 bg-white py-5">
        <div className="col-12 col-md-6">
          <p className="text-muted fs-7">Platform</p>
          <div className="accordion" id="platformAccordionExample">
            {platformQa.map((qa, index) => (
              <div className="accordion-item mb-2 rounded border-0" key={qa.id}>
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
                  data-bs-parent="#platformAccordionExample"
                >
                  <div className="accordion-body mt-0">{qa.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="col-12">
            <p className="text-muted fs-7">App</p>
            <div className="accordion" id="accordionExample">
              {appQa.map((qa, index) => (
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
            Get started with MyFuel.ai and experience seamless fuel logistics
            with real-time tracking and AI-driven optimization
          </p>
          <button
            type="button"
            className="custom-btn btn-default-text-color custom-btn-border-color bg-white"
          >
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
