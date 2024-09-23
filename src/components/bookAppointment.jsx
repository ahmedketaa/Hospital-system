import React, { useEffect } from 'react';
import './appointment.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import BookAppointment from '../pages/bookAppoinment/bookappoint';

const AppointmentSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, }); // Initialize AOS
  }, []);

  return (
    <div className="container my-5">
      <div className="row align-items-center gap-3 gap-md-0">
       
        {/* Image Section */}
        <div
          className="col-md-6"
          data-aos="fade-right" // Animation for scrolling
        >
          <img
            src="appointment.png"
            alt="Doctor Image"
            className="img-fluid"
            style={{
              height: '100%',
              borderBottom: '10px solid #222F66',
              borderRight: '10px solid #222F66',
              borderRadius: '10px',
            }}
          />
        </div>

        {/* Form Section */}
        <div
          className="col-md-6"
          data-aos="fade-left" // Animation for scrolling
        >
          <div
            className="p-4"
            style={{
              backgroundColor: '#222F66',
              borderRadius: '10px',
              height: '100%',
            }}
          >
            <div className="text-center mb-4">
              <h2 className="text-light">
                <span style={{ color: '#DEAA4E' }}>Book</span> Appointment
              </h2>
              <p style={{ color: '#B0B0B0' }}>
                Fill in the details below to book your appointment.
              </p>
            </div>
            <BookAppointment fromLanding='true'/>
            {/* <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">
                  Full Name
                </label>
                <input
                  type="text"
                  style={{ backgroundColor: '#222F66', color: 'white' }}
                  className="form-control text-white"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">
                  Email address
                </label>
                <input
                  type="email"
                  style={{ backgroundColor: '#222F66', color: 'white' }}
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label text-light">
                  Phone Number
                </label>
                <input
                  type="text"
                  style={{ backgroundColor: '#222F66', color: 'white' }}
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label text-light">
                  Appointment Date
                </label>
                <input
                  type="date"
                  style={{ backgroundColor: '#222F66', color: 'white' }}
                  className="form-control"
                  id="date"
                />
              </div>
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: '#D8B36A', color: 'white' }}
              >
                Book Now
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
