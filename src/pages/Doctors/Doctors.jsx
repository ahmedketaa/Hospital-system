import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../doctorProfle/doctor.module.css'
import DoctorsPageCard from '../../components/DoctorsPageCard';
export default function Doctors() {
  const doctorsData = [
    {
      photo: 'doctor1.jpg',
      name: 'Dr. John Doe',
      specialty: 'Cardiologist',
      location: 'New York, NY',
      qualifications: 'MBBS, MD'
    },
    {
      photo: 'doctor2.jpg',
      name: 'Dr. Jane Smith',
      specialty: 'Dermatologist',
      location: 'Los Angeles, CA',
      qualifications: 'MBBS, MD'
    },
    {
        photo: 'doctor1.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        location: 'New York, NY',
        qualifications: 'MBBS, MD'
      },
      {
        photo: 'doctor1.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        location: 'New York, NY',
        qualifications: 'MBBS, MD'
      },
      {
        photo: 'doctor1.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        location: 'New York, NY',
        qualifications: 'MBBS, MD'
      },
      {
        photo: 'doctor1.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        location: 'New York, NY',
        qualifications: 'MBBS, MD'
      },
      {
        photo: 'doctor1.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        location: 'New York, NY',
        qualifications: 'MBBS, MD'
      },
      {
        photo: 'doctor1.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        location: 'New York, NY',
        qualifications: 'MBBS, MD'
      },
      {
        photo: 'doctor1.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        location: 'New York, NY',
        qualifications: 'MBBS, MD'
      },
      {
        photo: 'doctor1.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        location: 'New York, NY',
        qualifications: 'MBBS, MD'
      },
      {
        photo: 'doctor1.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        location: 'New York, NY',
        qualifications: 'MBBS, MD'
      },
      {
        photo: 'doctor1.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        location: 'New York, NY',
        qualifications: 'MBBS, MD'
      },
      {
        photo: 'doctor1.jpg',
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        location: 'New York, NY',
        qualifications: 'MBBS, MD'
      },
  ];

  const [specialty, setSpecialty] = useState('');
  const [gender, setGender] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctorsData.filter((doctor) => {
    return (
      (specialty ? doctor.specialty === specialty : true) &&
      (gender ? doctor.gender === gender : true) &&
      (searchTerm ? doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    );
  });

  return (
    <>
     <div className='px-5 py-3' style={{backgroundColor:"#EEEEEE", color:"#29367D"}}>
     <div className={styles.pagePath}>
            <Link className={styles.linkStyle} to={"/"}>
              Home 
            </Link>
            <Link className={styles.nowPath} to={"/doctors"}>
                &gt; Healthcare Experts
            </Link>
          </div>
            <h5>Doctor Directory / healthcare experts</h5>
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
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
        </select>
        <select
          className="form-select col ms-2"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button className="btn btn-warning col ms-2">Search</button>
      </div>

      <div className="doctor-cards row">
        {filteredDoctors.map((doctor, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <DoctorsPageCard {...doctor} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
