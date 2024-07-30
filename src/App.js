import React from "react";
import { Route,Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {
  return (
     <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/About" Component={About}/>
        <Route path="/Service" Component={Service}/>
        <Route path="/Contact" Component={Contact}/>
      </Routes>
      
      <Footer />
     </>
  )
}
export default App;
