import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>

        <div className="container-fluid nav_bg">
            <div className="row">
                <div className='col-10 mx-auto'>
                    
              

       <nav className ="navbar navbar-expand-lg bg-body-tertiary">
            <div className ="container-fluid">
                <NavLink className ="navbar-brand" to="#">Shad-Technical</NavLink>
            <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className ="navbar-toggler-icon"></span>
            </button>
    <div className ="collapse navbar-collapse" id="navbarScroll">
      <ul className ="navbar-nav ml-auto my-2 my-lg-0 navbar-nav-scroll" style={{marginLeft:"auto"}} >
        <li className ="nav-item">
          <NavLink activeClassName = "menu_active" className ="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className ="nav-item">
          <NavLink activeClassName = "menu_active" className ="nav-link" to="/About">About</NavLink>
        </li>
        <li className ="nav-item">
          <NavLink activeClassName = "menu_active" className ="nav-link" to="/Service">Service</NavLink>
        </li>
        <li className ="nav-item">
          <NavLink activeClassName = "menu_active" className ="nav-link" to="/Contact">Contact</NavLink>
        </li>
      </ul>  
      
    </div>
  </div>
</nav>

</div>
            </div>
        </div>
        </>
    )
}
export default Navbar;