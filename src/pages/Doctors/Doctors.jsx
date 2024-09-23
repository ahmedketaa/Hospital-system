import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../doctorProfle/doctor.module.css';
import DoctorsPageCard from '../../components/DoctorsPageCard';
import { getAllDoctors } from '../../utilities/api';

export default function Doctors() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [specialty, setSpecialty] = useState('');
  const [gender, setGender] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const data = await getAllDoctors();
        setDoctorsData(data);
      } catch (err) {
        setError('Failed to fetch doctors.');
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  const filteredDoctors = doctorsData.filter((doctor) => {
    return (
      (specialty ? doctor.specialization === specialty : true) &&
      (gender ? doctor.gender === gender : true) &&
      (searchTerm ? doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    );
  });

  return (
    <>
      <div className='px-5 py-3' style={{ backgroundColor: "#EEEEEE", color: "#29367D" }}>
        <div className={styles.pagePath}>
          <Link className={styles.linkStyle} to={"/"}>Home</Link>
          <Link className={styles.nowPath} to={"/doctors"}>&gt; Healthcare Experts</Link>
        </div>
        <h5>Doctor Directory / Healthcare Experts</h5>
      </div>

      <div className="doctors-page container">
        <div className="search-bar row my-4">
          <input
            type="text"
            className="form-control col"
            placeholder="Search doctor by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="form-select col ms-2"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="">Select Specialty</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Orthopedics">Orthopedics</option>
           
          </select>
          <select
            className="form-select col ms-2"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button className="btn btn-warning col ms-2">Search</button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className="doctor-cards row">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={doctor._id}>
                <DoctorsPageCard
                  photo={ doctor.Image?.secure_url} 
                  name={doctor.name}
                  specialty={doctor.specialization}
                  location={doctor?.statistics?.patientsTreated}
                  qualifications={doctor.experience}
                  doctorId ={doctor._id}
                />
              </div>
            ))
          ) : (
            <p>No doctors found.</p>
          )}
        </div>
      </div>
    </>
  );
}
