import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Header from "../layout/header.layout";

const LayoutComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <LayoutComponent>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </LayoutComponent>
    </Router>
  );
};

export default AppRoutes;
