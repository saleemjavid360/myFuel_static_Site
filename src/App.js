import React, { Suspense, lazy, } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./pages/sharedComponents/Loader";
import Layout from "./components/Layout.js";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));
const Platform = lazy(() => import("./pages/platform/Platform.js"));
const NotFound = lazy(() => import("./pages/notFound/NotFound.js")); 
const AppRoute = lazy(() => import("./pages/appRoute/AppRoute.js")); 
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs.js")); 
const TermsAndConditions = lazy(() => import("./pages/termsAndConditions/TermsAndConditions.js")); 
const PrivacyPolicy = lazy(() => import("./pages/privacyPolicy/PrivacyPolicy.js")); 
const Faq = lazy(() => import("./pages/faq/Faq.js")); 

const SuspenseWrapper = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuspenseWrapper><Layout /></SuspenseWrapper>}>
          <Route index element={<Home />} /> 
          <Route path="aboutus" element={<AboutUs />} /> 
          <Route path="platform" element={<Platform />} /> 
          <Route path="app" element={<AppRoute />} /> 
          <Route path="contactus" element={<ContactUs />} /> 
          <Route path="termsAndConditions" element={<TermsAndConditions />} /> 
          <Route path="privacyPolicy" element={<PrivacyPolicy />} /> 
          <Route path="faq" element={<Faq />} /> 
          <Route path="*" element={<SuspenseWrapper><NotFound /></SuspenseWrapper>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
