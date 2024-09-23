import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './third.css';

const ThirdSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,}); 
  }, []);

  return (
    <div className='p-4 my-4' style={{ background: "#EEE", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          background: "white",
          right: "50%",
          top: "-25px",
          transform: "rotate(45deg)"
        }}
      ></span>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <div className="two-words mb-4">
              <h2 style={{ color: "#222F66" }}>Welcome to </h2>
              <h2 style={{ color: "#DEAA4E", display: "block" }} className="">
                Saifee Hospital
              </h2>
            </div>
            <div className="mb-4">
              <p style={{ color: "#606060", fontFamily: "arial" }}>
                Saifee Hospital is a state-of-the-art healthcare facility dedicated to delivering comprehensive medical services with a patient-centric approach. Our highly qualified professionals are committed to providing advanced treatments and compassionate care to every individual.
              </p>
              <p style={{ color: "#606060", fontFamily: "arial" }}>
                With a focus on innovation and excellence, we offer specialized care across multiple disciplines, ensuring that every patient receives the best possible treatment. From routine checkups to complex surgeries, Saifee Hospital is here to serve your healthcare needs.
              </p>
            </div>
            <div className="d-flex gap-3 mb-4 align-items-center">
              <div style={{ color: "#DEAA4E" }}>
                <FontAwesomeIcon icon={faCalendarDays} className="me-1" />
                <span style={{ color: "#DEAA4E" }}>Online Appointment</span>
              </div>
              <div style={{ color: "#DEAA4E" }}>
                <FontAwesomeIcon icon={faCalendarDays} className="me-1" />
                <span>Our Specialties</span>
              </div>
            </div>
            <button
              className='btn mb-2'
              style={{ backgroundColor: "#222F66", padding: "8px 15px", borderRadius: "20px", color: "white" }}
            >
              Show More
            </button>
          </div>
          <div className="col-md-6 text-center" data-aos="fade-left">
            <div className="image-frame">
              <img src="third.png" alt="Sample" className="img-fluid rounded-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
