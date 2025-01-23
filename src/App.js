import React, { Suspense, lazy, } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./pages/sharedComponents/Loader";
import Layout from "./components/Layout.js";


const Home = lazy(() => import("./pages/Home/Home.jsx"));
const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
