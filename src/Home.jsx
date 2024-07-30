import React from "react";
import Service from "./Service";
import web from '../src/images/3.svg';
import Commen from "./Commen";







const Home = () => {
  return (
     <>
        <Commen 
            name = "Grow Your Business With "
            img = {web}
            btn ="Get Started"
            visit = "/About"
        />
     <Service />
     
     </>
  )
}
export default Home;
