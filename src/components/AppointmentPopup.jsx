// AppointmentPopup.jsx
import React, { useState } from 'react';

const AppointmentPopup = ({ isOpen, onClose, doctor }) => {
  const [doctorID, setDoctorID] = useState(doctor ? doctor._id : '');
  const [patientID, setPatientID] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [department, setDepartment] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/appointments/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ doctorID, patientID, date, time, department }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSuccess('Appointment booked successfully');
      setError(null);
      onClose();
    } catch (error) {
      setError(error.message);
      setSuccess(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Book Appointment with {doctor.name}</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="patientID" className="form-label">Patient ID</label>
            <input
              type="text"
              className="form-control"
              id="patientID"
              value={patientID}
              onChange={(e) => setPatientID(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">Time</label>
            <input
              type="time"
              className="form-control"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Book Appointment</button>
        </form>
        <button className="btn btn-secondary mt-3" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AppointmentPopup;
