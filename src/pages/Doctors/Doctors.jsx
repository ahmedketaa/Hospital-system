// Doctors.jsx
import React, { useState, useEffect } from 'react';
import DoctorsPageCard from '../../components/DoctorsPageCard';
import AppointmentPopup from '../../components/AppointmentPopup';
import '../../components/popup.css'; // Import the popup styles

export default function Doctors() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    // Fetch the doctors data from the API
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/doctors');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setDoctorsData(result);
      } catch (error) {
        console.error('Error fetching doctors data:', error);
      }
    };

    fetchDoctors();
  }, []);

  const openPopup = (doctor) => {
    setSelectedDoctor(doctor);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <>
      <div className='px-5 py-3' style={{backgroundColor:"#EEEEEE", color:"#29367D"}}>
        {/* Other content */}
      </div>

      <div className="doctors-page container">
        <div className="search-bar row my-4">
          {/* Search bar implementation */}
        </div>

        <div className="doctor-cards row">
          {doctorsData.map((doctor) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={doctor._id}>
              <DoctorsPageCard
                photo={doctor.photo || 'default-photo.jpg'} // Use a default image if photo is not available
                name={doctor.name}
                specialty={doctor.specialization}
                location={doctor.location || 'Location not available'}
                qualifications={doctor.qualifications || 'Qualifications not available'}
                onBookAppointment={() => openPopup(doctor)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Render the popup */}
      {isPopupOpen && (
        <AppointmentPopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          doctor={selectedDoctor}
        />
      )}
    </>
  );
}
