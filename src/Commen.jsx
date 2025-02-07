import React from "react";
import { NavLink } from "react-router-dom";







const Commen = (props) => {
  return (
     <>
        <header id="header" className="header">
        
        <div className="container-fluid">
            <div className="row">
                <div className='col-10 mx-auto'>
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.name} <strong className="brand-name">
                            Shadab Tech
                        </strong>
                        </h1>
                        
                            <h2 className="mt-3">
                            We are the Team of talented developer making websites 
                                
                            </h2>
                        <div className="mt-3">
                        <NavLink to={props.visit} className="btn-get-started">
                                {props.btn}     
                                </NavLink>
                        </div>

                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src= {props.img}
                        className="img fluid animated"
                        alt = "Commen img" />
                    </div>
                </div>
                    
                </div>
            </div>
        </div>

        </header>
     
     </>
  )
}
export default Commen;
