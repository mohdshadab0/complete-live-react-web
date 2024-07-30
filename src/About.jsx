import React from "react";

import web from '../src/images/home1.jpg';
import Commen from "./Commen";






const About = () => {
  return (
     <>
        <Commen 
            name = "Welcome to About Page "
            img = {web}
            btn ="Contact us"
            visit = "/Service"
        />
     </>
  )
}
export default About;
