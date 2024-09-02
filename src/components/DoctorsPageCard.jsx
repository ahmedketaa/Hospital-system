import React from 'react';
import './DoctorsPageCard.css'; 

export default function DoctorsPageCard({ photo, name, specialty, location, qualifications }) {
  return (
    <div className="doctor-card">
      <div className="card-body d-flex">
        <div className="doctor-photo" style={{ backgroundImage: `url(${photo})` }}></div>
        <div className="doctor-info ms-3">
          <h5 className="doctor-name">{name}</h5>
          <p className="doctor-specialty">{specialty}</p>
          <hr />
          <p className="doctor-location">{location}</p>
          <p className="doctor-qualifications">{qualifications}</p>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-primary">Doctor Profile</button>
        <button className="btn btn-outline-primary">Book Appointment</button>
      </div>
    </div>
  );
}
