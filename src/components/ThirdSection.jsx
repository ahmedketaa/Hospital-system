import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './third.css'
function ThirdSection() {
  return (
   <div className='p-4 my-4' style={{background:"#EEE",position:"relative"}}>
    <span style={{position:"absolute",width:"50px",height:"50px",background:"white", right:"50%",top:"-25px",transform:"rotate(45deg)"}}></span>
     <div className="container my-5 " >
      <div className="row align-items-center">
        <div className="col-md-6"> 
        
          <div className="two-words mb-4">
            <h2 className="" style={{color:"#222F66"}}>Welcome to </h2> <h2 style={{color:"#DEAA4E",display:"block"}} className="">Saifee Hospital</h2>
          </div>
          <div className="mb-4">
            <p style={{color:"#606060",fontFamily:"arial"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae itaque nisi illo dolorum neque, maxime labore natus autem aliquid, veritatis perferendis illum quae optio! Ex impedit deleniti necessitatibus nesciunt quaerat!
            </p>
            <p style={{color:"#606060",fontFamily:"arial"}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quo, dolor officiis voluptates eligendi accusantium in optio repellendus fuga facere dignissimos iure maxime molestiae qui autem. Harum dignissimos minima similique.
            </p>
          </div>
          <div className="d-flex gap-3 mb-4 align-items-center">
            <div style={{color:"#DEAA4E"}}>
            <FontAwesomeIcon icon={faCalendarDays}  className="me-1" />
            <span style={{color:"#DEAA4E"}}>Online Appointment</span>
            </div>
            <div style={{color:"#DEAA4E"}}>
            <FontAwesomeIcon icon={faCalendarDays}  className="me-1" />
            <span >Our Specialties</span>
            </div>
          </div>
          <button className='btn' style={{backgroundColor:"#222F66", padding:"8px 15px",borderRadius:"20px",color:"white"}}>show more</button>
          </div>
        <div className="col-md-6 text-center">
          <div className="image-frame">
            <img src="third.png" alt="Sample" className="img-fluid rounded-3" />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default ThirdSection;
