import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Header from "../layout/header.layout";
import { Box } from "@mui/material";
import Footer from "../layout/footer.layout";

const LayoutComponent = ({ children }) => {
  return (
    <>
      <Header />
      <Box display={"flex"} flexDirection={"column"} minHeight={"88vh"}>
        {children}
      </Box>
      <Footer />
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
