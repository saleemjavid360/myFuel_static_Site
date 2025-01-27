import React from "react";


const accountTerms = [
  "You must be 13 years or older or have permission from a parent or legal guardian to use this Service.",
  "You must be a human. Accounts registered by \"bots\" or other automated methods are not permitted.",
  "You must provide your name, a valid email address, and any other information requested in order to complete the sign-up process.",
  "You are responsible for maintaining the security of your account and password. We cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.",
  "You are responsible for all Content posted and activity that occurs under your account (even when Content is posted by others who have accounts under your account)",
  "You may not use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright or trademark laws).",
];

const copyRightAndContent=[
  "We claim no intellectual property rights over the material you provide to the Service. Your profile and materials uploaded remain yours.",
  "We don't pre-screen Content, but we have the right (but not the obligation) in our sole discretion to refuse or remove any Content that is available via the Service.",
  "The look and feel of the Service is copyrighted by Myfuel.ai. All rights reserved. You may not duplicate, copy, or reuse any portion of the HTML/CSS, Javascript, or visual design elements or concepts without express written permission from Myfuel.ai."
]
const generalConditions=[
  "Your use of the Service is at your sole risk. The service is provided on an \"as is\" and \"as available\" basis.",
  "Support for Myfuel.ai services is only available in English, via email.",
  "You understand that we use third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.",
  "You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Myfuel.ai., or any other Myfuel.ai. service.",
  "You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by Myfuel.ai.",
  "We may, but have no obligation to, remove Content and Accounts containing Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.",
  "Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Myfuel.ai. customer, employee, member, or officer will result in immediate account termination.",
  "Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Myfuel.ai. customer, employee, member, or officer will result in immediate account termination."
]
const TermsAndConditions = () => {
  return (
    <div className="col-11 d-flex flex-column home-desc-container p-0 gap-3 bg-light">
      <div className="col-12 d-flex flex-column flex-md-row mt-3 p-2">
        <h1 className="main-title">Terms & Conditions</h1>
        <p className="text-dark">Last updated: Dec 23rd, 2024</p>
      </div>
      <div className="col-12 p-3 bg-white py-5">
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3">Introduction</h1>
          <p className="terms-para">
            PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY CLICKING “ACCEPTED
            AND AGREED TO,” CUSTOMER AGREES TO THESE TERMS AND CONDITIONS.
          </p>
          <p>
            If we make material changes to these Terms, we will notify you by
            email or by posting a notice on our site before the changes are
            effective. Any new features that augment or enhance the current
            Service, including the release of new tools and resources, shall be
            subject to the Terms of Service. Continued use of the Service after
            any such changes shall constitute your consent to such changes.
          </p>
          <p>
            Violation of any of the terms below will result in the termination
            of your Account. While we prohibit such conduct and Content on the
            Service, you understand and agree that we cannot be responsible for
            the Content posted on the Service and you nonetheless may be exposed
            to such materials. You agree to use the Service at your own risk.
          </p>
        </div>
        {/*  */}
        <div className="">
          <h1 className="fw-bold fs-4 mb-3 mt-3">
            Account Terms
          </h1>
          <ul className="list-unstyled">
            {accountTerms.map((point, index) => (
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
            Copyright and Content Ownership
          </h1>
          <ul className="list-unstyled">
            {copyRightAndContent.map((point, index) => (
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
            General Conditions
          </h1>
          <ul className="list-unstyled">
            {generalConditions.map((point, index) => (
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

export default TermsAndConditions;
