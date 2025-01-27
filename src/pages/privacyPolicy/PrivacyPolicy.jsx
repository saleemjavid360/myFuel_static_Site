import React from "react";

const informationWeUse = [
  "Provide, operate, and improve our services.",
  "Communicate with you, including responding to inquiries and sending updates.",
  "Personalize your user experience.",
  "Ensure the security of our services.",
];
const sharingInformation = [
  "Service providers who assist us in delivering our services (e.g., hosting providers, analytics tools).",
  "Legal authorities if required to comply with applicable laws or regulations.",
];
const yourRights = [
  "Access, correct, or delete your personal information.",
  "Restrict or object to our use of your data.",
  "Lodge a complaint with your local data protection authority.",
];
const updatesToThisPolicy = [
  "Access, correct, or delete your personal information.",
  "Restrict or object to our use of your data.",
  "Lodge a complaint with your local data protection authority.",
];
const contactUs = [
  "Email: [your-email@example.com]",
  "Phone: [your-phone-number]",
  "Address: [your-company-address]",
];

const PrivacyPolicy = () => {
  return (
    <div className="col-11 d-flex flex-column home-desc-container p-0 gap-3 bg-light">
      <div className="col-12 d-flex flex-column flex-md-row mt-3 p-2">
        <h1 className="main-title">Privacy Policy</h1>
        <p className="text-dark">Last updated: Dec 23rd, 2024</p>
      </div>
      <div className="col-12 p-3 bg-white py-5">
        <div className="">
          <h1 className="fw-bold fs-4 mb-3">Introduction</h1>
          <p className="terms-para">
            Welcome to [Your Company Name]! We are committed to protecting your
            personal information and your right to privacy. This Privacy Policy
            explains how we collect, use, and protect your information when you
            visit our website or use our services.
          </p>
        </div>
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3">1. Information We Collect</h1>
          <p className="terms-label mb-2">Personal Data:</p>
          <span className="terms-para">
            When you use our website, we may collect personal data such as your
            name, email address, phone number, and any other details you
            provide.
          </span>
          <p className="terms-label mb-2 mt-2">Non-Personal Data:</p>
          <span className="terms-para">
            We may also collect technical information such as your IP address,
            browser type, operating system, and pages visited on our site.
          </span>
        </div>
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3 mt-3">
            2. How We Use Your Information
          </h1>
          <p className="terms-label">We use the information we collect to:</p>
          <ul className="list-unstyled">
            {informationWeUse.map((point, index) => (
              <li key={index} className="mb-2 d-flex align-items-start">
                <span className="me-2 text-dark ">•</span>
                <span className="terms-para">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3 mt-3">
            3. Sharing Your Information
          </h1>
          <p className="terms-label">
            We do not sell your personal information to third parties. However,
            we may share your data with:
          </p>
          <ul className="list-unstyled">
            {sharingInformation.map((point, index) => (
              <li key={index} className="mb-2 d-flex align-items-start">
                <span className="me-2 text-dark ">•</span>
                <span className="terms-para">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3 mt-3">
            4. Cookies and Tracking Technologies
          </h1>
          <p className="terms-label">
            We use cookies and similar technologies to enhance your browsing
            experience. You can control your cookie preferences through your
            browser settings.
          </p>
        </div>
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3 mt-3">5. Data Retention</h1>
          <p className="terms-label">
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy or comply with
            legal requirements.
          </p>
        </div>
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3 mt-3">6. Your Rights</h1>
          <p className="terms-label">
            Depending on your location, you may have the following rights
            regarding your data:
          </p>
          <ul className="list-unstyled">
            {yourRights.map((point, index) => (
              <li key={index} className="mb-2 d-flex align-items-start">
                <span className="me-2 text-dark ">•</span>
                <span className="terms-para">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3 mt-3">7. Data Security</h1>
          <p className="terms-label">
            We implement technical and organizational measures to protect your
            data against unauthorized access, loss, or misuse. However, no
            method of transmission over the internet is 100% secure.
          </p>
        </div>
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3 mt-3">8. Third-Party Links</h1>
          <p className="terms-label">
            Our website may contain links to external sites. We are not
            responsible for the privacy practices or content of those
            third-party websites.
          </p>
        </div>
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3 mt-3">9. Updates to This Policy</h1>
          <p className="terms-label">Updates to This Policy</p>
          <ul className="list-unstyled">
            {updatesToThisPolicy.map((point, index) => (
              <li key={index} className="mb-2 d-flex align-items-start">
                <span className="me-2 text-dark ">•</span>
                <span className="terms-para">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3 mt-3">10. Contact Us</h1>
          <p className="terms-label">
            If you have any questions about this Privacy Policy or our
            practices, please contact us at:
          </p>
          <ul className="list-unstyled">
            {contactUs.map((point, index) => (
              <li key={index} className="mb-2 d-flex align-items-start">
                <span className="me-2 text-dark ">•</span>
                <span className="terms-para">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
