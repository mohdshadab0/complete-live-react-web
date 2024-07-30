import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3  border-top bg-black text-white">
    <div className="col mb-3">
      
      <p className="text-light">© 2022 Shad Technical, Inc.  </p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3 " >
      <h5>Learn More </h5>
      <ul className="nav flex-column ">
       <li className="nav-item mb-2 "><NavLink to="#" className="nav-link p-0 text-light">Features</NavLink></li>
       <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-light">Pricing</NavLink></li>
       <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-light">FAQs</NavLink></li>
     </ul>
    </div>

    <div className="col mb-3">
      <h5>Company</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><NavLink to="/Home" className="nav-link p-0 text-light">Home</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="/Service" className="nav-link p-0 text-light">Services</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="/Contact" className="nav-link p-0 text-light">Contact</NavLink></li>
        <li className="nav-item mb-2"><NavLink to="/About" className="nav-link p-0 text-light">About</NavLink></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Support</h5>
      <ul className="nav flex-column">
       <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-light">Features</NavLink></li>
       <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-light">Pricing</NavLink></li>
       <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-light">FAQs</NavLink></li>
     </ul>
    </div>
  </footer>
        </>
    )
}


export default Footer;