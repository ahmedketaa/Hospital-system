import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppointmentSection = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-md-6">
          <img
            src="appointment.png"
            alt="Doctor Image"
            className="img-fluid"
            style={{ height: '100%', borderBottom: '10px solid #222F66', borderRight: '10px solid #222F66', borderRadius: '10px' }}
          />
        </div>

        {/* Right Form Section */}
        <div className="col-md-6">
          <div className="p-4" style={{ backgroundColor: '#222F66', borderRadius: '10px', height: '100%' }}>
            <div className="text-center mb-4">
              <h2 className="text-light"><span style={{ color: '#DEAA4E' }}>Book</span> Appointment</h2>
              <p style={{ color: '#B0B0B0' }}>Fill in the details below to book your appointment.</p>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label text-light">Phone Number</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label text-light">Appointment Date</label>
                <input type="date" className="form-control" id="date" />
              </div>
              <button type="submit" className="btn w-100" style={{ backgroundColor: '#D8B36A', color: 'white' }}>Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
