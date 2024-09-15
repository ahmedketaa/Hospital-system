import React, { useState } from 'react'; 
import './appointment.css';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    doctorID: '',
    patientID: '',
    date: '',
    time: '',
    department: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/appointments/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Appointment booked successfully!');
        // Optionally, clear form data here
        setFormData({
          doctorID: '',
          patientID: '',
          date: '',
          time: '',
          department: ''
        });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while booking the appointment.');
    }
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center gap-3 gap-md-0">
        <div className="col-md-6">
          <img
            src="appointment.png"
            alt="Doctor Image"
            className="img-fluid"
            style={{ height: '100%', borderBottom: '10px solid #222F66', borderRight: '10px solid #222F66', borderRadius: '10px' }}
          />
        </div>
        <div className="col-md-6">
          <div className="p-4" style={{ backgroundColor: '#222F66', borderRadius: '10px', height: '100%' }}>
            <div className="text-center mb-4">
              <h2 className="text-light"><span style={{ color: '#DEAA4E' }}>Book</span> Appointment</h2>
              <p style={{ color: '#B0B0B0' }}>Fill in the details below to book your appointment.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="doctorID" className="form-label text-light">Doctor ID</label>
                <input
                  type="text"
                  style={{ backgroundColor: "#222F66", color: "white" }}
                  className="form-control text-white"
                  id="doctorID"
                  value={formData.doctorID}
                  onChange={handleChange}
                  placeholder="Enter Doctor ID"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="patientID" className="form-label text-light">Patient ID</label>
                <input
                  type="text"
                  style={{ backgroundColor: "#222F66", color: "white" }}
                  className="form-control"
                  id="patientID"
                  value={formData.patientID}
                  onChange={handleChange}
                  placeholder="Enter Patient ID"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label text-light">Appointment Date</label>
                <input
                  type="date"
                  style={{ backgroundColor: "#222F66", color: "white" }}
                  className="form-control"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label text-light">Appointment Time</label>
                <input
                  type="time"
                  style={{ backgroundColor: "#222F66", color: "white" }}
                  className="form-control"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="department" className="form-label text-light">Department</label>
                <input
                  type="text"
                  style={{ backgroundColor: "#222F66", color: "white" }}
                  className="form-control"
                  id="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Enter Department"
                />
              </div>
              <button type="submit" className="btn" style={{ backgroundColor: '#D8B36A', color: 'white' }}>Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
