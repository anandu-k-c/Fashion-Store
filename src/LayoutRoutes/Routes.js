import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Logout from "../components/Logout/Logout";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import NotFound from "../notfound/NotFound";

function RoutesLayout() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path='/Fashion Store' element={<Home/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default RoutesLayout;
