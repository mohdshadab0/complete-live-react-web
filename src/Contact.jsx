import React, { useState } from "react";






const Contact = () => {
    const [data, setData]= useState(
        {
            fullname:"",
            phone:"",
            email:"",
            msg:""
        }
    );

    const formsubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. and Mobile number is ${data.phone}. and My email id is ${data.email} and my messege is ${data.msg}`);
        
    }
    const InputEvent =(event) => {
          const  {name,value } = event.target;

          setData((preval) => {
            return {
                ...preval,
                [name]: value,
            };
            
          })
    }
    
  return (
     <>
      <div className="my-5">
      <h1 className="text-center"> Contact Us </h1>
            <div className="container contact_div">
                <div className='row'>
                <div className="col-md-6 col-10 mx-auto">

                    <form onSubmit={formsubmit}>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" 
                            className="form-label">Full Name </label>
                        <input type="text" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Enter Your Full Name "
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}

                             />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" 
                            className="form-label">Phone Number </label>
                        <input type="number" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Mobile Number" 
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}                      
                            />
    
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" 
                            className="form-label">Email address</label>
                        <input type="email" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com" 
                            name="email"
                            value={data.email}
                            onChange={InputEvent}                                                         
                            />
 
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" 
                                className="form-label">Messege</label>
                        <textarea className="form-control" 
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                  name="msg"
                                  value={data.msg}
                                  onChange={InputEvent}></textarea>
                                  
                </div>

                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">
                                Submit Form
                        </button>
                    </div>

                    </form>
                </div>
                    
                </div>
            </div>
        </div>
     
     </>
  )
}
export default Contact;
