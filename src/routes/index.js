import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/AboutUs";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
