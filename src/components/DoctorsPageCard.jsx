import React from 'react';
import './DoctorsPageCard.css'; 
import { Link } from 'react-router-dom';

export default function DoctorsPageCard({ photo, name, specialty, location, qualifications }) {
  return (
    <div className="doctor-card shadow">
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
      <button className='btn mb-2' style={{border:"1px solid #E1E1E1", padding:"8px 15px",borderRadius:"8px",color:"#606060"}}>
      <Link className='nav-link' to={'/doctorprofile/2'}>Doctor Profile</Link>
        </button>
        <button className='btn mb-2' style={{backgroundColor:"#222F66", padding:"8px 15px",borderRadius:"8px",color:"white"}}>
        Book Appointment</button>

      </div>
    </div>
  );
}