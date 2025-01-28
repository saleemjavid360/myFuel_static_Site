import React from 'react'
import myFuelLogoDesktop from "../assets/images/myFuelLogo-desktop.png";
import diagonalArrow from "../assets/images/diagonal-arrow-right-up.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center">
      <footer className="col-11 py-5 p-1 px-0 pb-0">
        <div className="d-flex p-0 flex-wrap">
          <div className='col-12 col-sm-3 col-md-5 mb-4 col-md-2'>
            <img
              src={myFuelLogoDesktop}
              alt="MyFuelAi"
              width={100}
            />
            <div className='col-12 d-sm-none d-md-block mt-md-4'>
              <p className='text-dark fs-7'>Subscribe to get the latest insights </p>
              <div className='d-flex col-10'>
                <input
                  id="newsletter1"
                  type="text"
                  className="footer-input bg-white text-muted"
                  placeholder="Enter your email here"
                />
                <button className='footer-btn mx-2' type='submit'>
                  <img className="diagonalArrowRightUpIcon" alt="" src={diagonalArrow} />
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-2 mb-3 ">
            <h5 className='text-muted fs-6 mb-2'>Company</h5>
            <ul className="nav flex-column gap-2">
              <li className="nav-item mb-2 fs-7">
                <a href="#" className="nav-link p-0 text-dark mx-1">
                  Solutions
                </a>
              </li>
              <li className="nav-item mb-2 fs-7">
                <a href="#" className="nav-link p-0 text-dark mx-1">
                  App
                </a>
              </li>
              <li className="nav-item mb-2 fs-7">
                <a href="#" className="nav-link p-0 text-dark mx-1">
                  Platform
                </a>
              </li>
              <li className="nav-item mb-2 fs-7">
                <a href="#" className="nav-link p-0 text-dark mx-1">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2 fs-7">
                <a href="#" className="nav-link p-0 text-dark mx-1">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2 fs-7">
                <a href="#" className="nav-link p-0 text-dark mx-1">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-2 mb-3 ">
            <h5 className='text-muted fs-6'>Social networks</h5>
            <ul className="col-12 nav flex-column gap-2">
              <li className="d-flex nav-item mb-2 ">
                <a href="#" className="p-0 text-dark footer-text">
                  Facebook
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.9932 7.57048C17.9932 7.02148 17.5493 6.57448 16.9993 6.57148L9.00625 6.52148H9.00025C8.45025 6.52148 8.00425 6.96548 8.00025 7.51548C7.99625 8.06748 8.44125 8.51848 8.99425 8.52148L14.5522 8.55648L6.29325 16.8145C5.90225 17.2055 5.90225 17.8385 6.29325 18.2285C6.48825 18.4245 6.74425 18.5215 7.00025 18.5215C7.25625 18.5215 7.51225 18.4245 7.70725 18.2285L15.9952 9.94048L16.0002 15.5225C16.0002 16.0745 16.4482 16.5215 17.0002 16.5215H17.0013C17.5533 16.5215 18.0002 16.0725 18.0002 15.5205L17.9932 7.57048Z" fill="#1D2023" />
                </svg>
              </li>
              <li className="d-flex nav-item mb-2">
                <a href="#" className=" p-0 text-dark footer-text ">
                  Linkdin
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.9932 7.57048C17.9932 7.02148 17.5493 6.57448 16.9993 6.57148L9.00625 6.52148H9.00025C8.45025 6.52148 8.00425 6.96548 8.00025 7.51548C7.99625 8.06748 8.44125 8.51848 8.99425 8.52148L14.5522 8.55648L6.29325 16.8145C5.90225 17.2055 5.90225 17.8385 6.29325 18.2285C6.48825 18.4245 6.74425 18.5215 7.00025 18.5215C7.25625 18.5215 7.51225 18.4245 7.70725 18.2285L15.9952 9.94048L16.0002 15.5225C16.0002 16.0745 16.4482 16.5215 17.0002 16.5215H17.0013C17.5533 16.5215 18.0002 16.0725 18.0002 15.5205L17.9932 7.57048Z" fill="#1D2023" />
                </svg>
              </li>
              <li className="d-flex nav-item mb-2 ">
                <a href="#" className="p-0 text-dark footer-text ">
                  Twitter
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.9932 7.57048C17.9932 7.02148 17.5493 6.57448 16.9993 6.57148L9.00625 6.52148H9.00025C8.45025 6.52148 8.00425 6.96548 8.00025 7.51548C7.99625 8.06748 8.44125 8.51848 8.99425 8.52148L14.5522 8.55648L6.29325 16.8145C5.90225 17.2055 5.90225 17.8385 6.29325 18.2285C6.48825 18.4245 6.74425 18.5215 7.00025 18.5215C7.25625 18.5215 7.51225 18.4245 7.70725 18.2285L15.9952 9.94048L16.0002 15.5225C16.0002 16.0745 16.4482 16.5215 17.0002 16.5215H17.0013C17.5533 16.5215 18.0002 16.0725 18.0002 15.5205L17.9932 7.57048Z" fill="#1D2023" />
                </svg>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-2 mb-3 ">
            <h5 className='text-muted mb-3 fs-6 mx-md-2'>Contact Us</h5>
            <ul className="col-12 nav flex-column">
              <li className="d-flex nav-item mb-2  gap-2 ">
                <svg className='mar-l' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <g clipPath="url(#clip0_11865_21863)">
                    <path d="M12 13.2715C13.6569 13.2715 15 11.9283 15 10.2715C15 8.61463 13.6569 7.27148 12 7.27148C10.3431 7.27148 9 8.61463 9 10.2715C9 11.9283 10.3431 13.2715 12 13.2715Z" stroke="#6245D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.5 10.2715C19.5 17.0215 12 22.2715 12 22.2715C12 22.2715 4.5 17.0215 4.5 10.2715C4.5 8.28236 5.29018 6.37471 6.6967 4.96818C8.10322 3.56166 10.0109 2.77148 12 2.77148C13.9891 2.77148 15.8968 3.56166 17.3033 4.96818C18.7098 6.37471 19.5 8.28236 19.5 10.2715Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_11865_21863">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.521484)" />
                    </clipPath>
                  </defs>
                </svg>
                <a href="#" className="nav-link p-0 text-dark fs-7">
                  1234 Fuel St, Logistics City, USA
                </a>
              </li>
              <li className="d-flex nav-item mb-2 gap-2">
                <svg className='mar-l' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <g clipPath="url(#clip0_11865_21869)">
                    <path d="M14.25 5.02148C15.5114 5.35366 16.6621 6.01469 17.5844 6.93705C18.5068 7.85942 19.1678 9.01007 19.5 10.2715" stroke="#6245D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.5 8.02148C15.0488 8.43586 16.0856 9.47273 16.5 11.0215" stroke="#6245D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.6616 14.8972C14.7654 14.8281 14.8849 14.786 15.0091 14.7747C15.1334 14.7634 15.2585 14.7833 15.3731 14.8325L19.7944 16.8135C19.9434 16.8771 20.0677 16.9874 20.1489 17.1276C20.23 17.2679 20.2635 17.4307 20.2444 17.5916C20.0987 18.6801 19.5627 19.6786 18.736 20.4015C17.9093 21.1244 16.8482 21.5224 15.75 21.5216C12.3685 21.5216 9.12548 20.1783 6.73439 17.7872C4.3433 15.3961 3 12.1531 3 8.77159C2.99916 7.6734 3.3972 6.61229 4.12009 5.78559C4.84298 4.95888 5.84152 4.42286 6.93 4.27721C7.09091 4.2581 7.25368 4.29161 7.39395 4.37273C7.53422 4.45385 7.64444 4.57821 7.70813 4.72721L9.68906 9.15221C9.73774 9.26586 9.75756 9.38979 9.74676 9.51295C9.73596 9.63611 9.69489 9.7547 9.62719 9.85815L7.62375 12.2403C7.55269 12.3476 7.51066 12.4714 7.50179 12.5997C7.49291 12.7281 7.51749 12.8565 7.57313 12.9725C8.34844 14.5597 9.98906 16.1806 11.5809 16.9485C11.6975 17.0039 11.8266 17.0279 11.9553 17.0182C12.084 17.0085 12.208 16.9654 12.315 16.8931L14.6616 14.8972Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_11865_21869">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.521484)" />
                    </clipPath>
                  </defs>
                </svg>
                <a href="#" className="nav-link p-0 text-dark fs-7">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="d-flex nav-item mb-2 gap-2">
                <svg className='mar-l' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <g clipPath="url(#clip0_11865_21876)">
                    <path d="M9 14.7715H5.25" stroke="#6245D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.75 17.0215V11.3965C21.75 10.1036 21.2364 8.86358 20.3221 7.94934C19.4079 7.0351 18.1679 6.52148 16.875 6.52148H7.125C8.41793 6.52148 9.65791 7.0351 10.5721 7.94934C11.4864 8.86358 12 10.1036 12 11.3965V17.7715H21C21.1989 17.7715 21.3897 17.6925 21.5303 17.5518C21.671 17.4112 21.75 17.2204 21.75 17.0215Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 21.5215V17.7715H3C2.80109 17.7715 2.61032 17.6925 2.46967 17.5518C2.32902 17.4112 2.25 17.2204 2.25 17.0215V11.3965C2.25 10.1036 2.76361 8.86358 3.67785 7.94934C4.59209 7.0351 5.83207 6.52148 7.125 6.52148" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 14.0215V2.77148H18" stroke="#6245D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_11865_21876">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.521484)" />
                    </clipPath>
                  </defs>
                </svg>
                <a href="#" className="nav-link p-0 text-dark fs-7">
                  support@myfuel.ai
                </a>
              </li>

            </ul>
          </div>

          <div className='col-12 col-md-2 d-sm-block d-md-none '>
            <p className='text-dark'>Subscribe to get the latest insights </p>
            <div className='d-flex'>
              <input
                id="newsletter1"
                type="text"
                className="footer-input bg-white text-muted"
                placeholder="Enter your email here"
              />
              <button className='footer-btn mx-2' type='submit'>
                <img className="diagonalArrowRightUpIcon" alt="" src={diagonalArrow} />
              </button>
            </div>
          </div>

        </div>

        <div className="d-flex flex-column flex-md-row justify-content-md-between py-4 p-2 pb-1">
          <p className='text-muted fs-7'>2019 - 2024 ©</p>
          <ul className="list-unstyled d-flex">
            <li className="text-muted fs-7">
              <Link className="nav-link navbar-links" to={"/termsAndConditions"}>
                <p>Terms of Service</p>
              </Link>
            </li>
            <li className="mx-3 text-muted fs-7">
            <Link className="nav-link navbar-links" to={"/privacyPolicy"}>
              <p>Privacy Policy</p>
            </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer