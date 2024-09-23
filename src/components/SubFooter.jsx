import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';

export default function SubFooter() {
  useEffect(() => {
    AOS.init({ duration: 1000,});
  }, []);

  return (
    <div className='' style={{ backgroundColor: "#D9D9D9", marginTop: "130px" }}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-3" style={{ transform: "translateY(-50px)" }} data-aos="fade-up">
            <div className="rounded-circle position-relative" style={{ backgroundColor: "#222F66", width: "250px", height: "250px" }}>
              <img src="/dun.png" style={{ transform: "translateY(-50px)" }} className='w-100' alt="" />
            </div>
          </div>
          
          <div className="text m-5" data-aos="fade-up">
            <h4 style={{ color: "#222F66" }}>Make Appointment</h4>
            <p className='text-white'>Looking for professional & trusted medical healthcare?</p>
            <button className='btn mb-2' style={{ backgroundColor: "#222F66", padding: "8px 15px", borderRadius: "20px", color: "white" }}>
              <Link className='nav-link' to={`/bookappointment`}> Make Appointment</Link>
            </button>         
          </div>
        </div>
      </div>
    </div>
  );
}
