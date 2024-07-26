import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/index";
import Orders from "./Orders/index";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Orders />} />
      </Routes>
    </Router>
  );
};

export default Routers;
