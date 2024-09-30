import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../doctorProfle/doctor.module.css';
import DoctorsPageCard from '../../components/DoctorsPageCard';
import { getAllDoctors } from '../../utilities/api';
import axios from 'axios';

export default function Doctors() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [departments, setDepartments] = useState([]); 
  const [specialty, setSpecialty] = useState('');
  const [gender, setGender] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 9;

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const data = await getAllDoctors();
        setDoctorsData(data);
        console.log(data);
        
      } catch (err) {
        setError('Failed to fetch doctors.');
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  const fetchDepartments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/departments");
      const allDepartments = res.data?.departments || [];

      // Filter departments with available doctors
      const departmentsWithDoctors = await Promise.all(
        allDepartments.map(async (dept) => {
          const doctorRes = await axios.get(
            `http://localhost:5000/api/doctors?department=${dept.name}`
          );
          if (doctorRes.data.length > 0) {
            return dept; // Return the department if it has doctors
          }
          return null; // Return null if it doesn't
        })
      );

      // Set state with valid departments only
      setDepartments(departmentsWithDoctors.filter(Boolean));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const filteredDoctors = doctorsData.filter((doctor) => {
    return (
      (specialty ? doctor.department?.name === specialty : true) &&
      (gender ? doctor.gender === gender : true) &&
      (searchTerm ? doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    );
  });

  // Pagination logic
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (pageNum) => {
    setCurrentPage(pageNum);
  };

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
        <div className="search-bar  flex-column flex-md-row gap-3 row my-4">
          <input
            type="text"
            aria-label="Search"
            className=" text-black col"
            placeholder='Search By Doctor Name...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="form-select col ms-2"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="">Select Specialty</option>
            {departments.map(department => (
              <option key={department._id} value={department.name}>{department.name}</option>
            ))}
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
          {currentDoctors.length > 0 ? (
            currentDoctors.map((doctor) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={doctor._id}>
                <DoctorsPageCard
                  photo={doctor.Image?.secure_url}
                  name={doctor.name}
                  specialty={doctor.specialization}
                  location={doctor?.statistics?.patientsTreated}
                  qualifications={doctor.experience}
                  doctorId={doctor._id}
                  price={doctor.price}
                />
              </div>
            ))
          ) : (
            <p>No doctors found.</p>
          )}
        </div>

        {/* Ensure that pagination renders if totalPages > 1 */}
        {filteredDoctors.length > 0 && (
  <nav className="mt-5 d-flex justify-content-center">
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <Link to="" className="page-link" onClick={prePage}>
          Prev
        </Link>
      </li>
      {[...Array(totalPages).keys()].map((n) => (
        <li
          className={`page-item ${currentPage === n + 1 ? "active" : ""}`}
          key={n + 1}
        >
          <Link to="" className="page-link text-white" onClick={() => changeCPage(n + 1)}>
            {n + 1}
          </Link>
        </li>
      ))}
      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <Link to="" className="page-link" onClick={nextPage}>
          Next
        </Link>
      </li>
    </ul>
  </nav>
)}

      </div>
    </>
  );
}
