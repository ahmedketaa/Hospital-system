import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import DoctorCard from './doctorCard';

const SecondSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, }); // Initialize AOS
  }, []);

  return (
    <div>
      <div
        className="py-5 d-flex flex-column gap-3 text-center justify-content-center align-items-center"
        data-aos="fade-up" // Animation for scrolling
      >
        <div
          className="text-center w-75 d-flex flex-column justify-content-center align-items-center"
          data-aos="fade-up" // Animation for scrolling
        >
          <h3 style={{ color: "#222F66" }}>
            OUR CENTRES OF <span style={{ color: "#DEAA4E" }}>EXCELLENCE</span>
          </h3>
          <div className='d-flex justify-content-center align-items-center text-center'>
            <p className='my-2' style={{ color: "#606060", fontFamily: "arial", width: "60%", textAlign: "center", margin: "auto", fontSize: "14px" }}>
            At Saifee Hospital, we are dedicated to providing top-quality healthcare services through our specialized centers of excellence. These centers combine advanced medical technology, highly skilled specialists, and compassionate care to ensure the best outcomes for our patients.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row g-2 gap-4">
            <div className="col-md-1"></div>
            <DoctorCard
              src={'doctor1.png'}
              text={'Cardiology Center of Excellence'}
              data-aos="fade-left" // Animation for scrolling
            />
            <DoctorCard
              src={'doctor2.png'}
              text={'General Surgery Center of Excellence'}
              data-aos="fade-left" // Animation for scrolling
            />
            <DoctorCard
              src={'doctor3.png'}
              text={'Paediatric Center of Excellence'}
              data-aos="fade-left" // Animation for scrolling
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
