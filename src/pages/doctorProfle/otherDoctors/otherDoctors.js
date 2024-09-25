import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import styles from "./styles.module.css";
import { getAllDoctors } from "../../../utilities/api";

const OtherDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const data = await getAllDoctors();
        data.splice(3);
        setDoctors(data);
      } catch (err) {
      } finally {
      }
    }

    fetchDoctors();
    console.log(doctors);
  }, []);

  return (
    <div className={`mt-5 ${styles.doctorsRow}`}>
      {doctors.map((doctor, i) => (
        <div key={i} className={styles.doctorCol}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <img
                src={doctor.Image?.secure_url}
                alt={`${doctor.name}'s profile`}
                className={styles.doctorImage}
              />
              <h4 className={styles.doctorName}>{doctor.name}</h4>
              <p className={styles.speciality}>{doctor.specialization}</p>
            </div>
            <hr className={styles.separator} />
            <div className={styles.location}>
              <IoLocationOutline />
              {doctor.history}
            </div>
            <div className={styles.education}>
              <RiGraduationCapFill />
              {doctor.department?.name}
            </div>
            <div className={styles.buttonGroup}>

              <Link
                to={`/doctorprofile/${doctor._id}`}
                className={styles.profileButton}
              >
                Doctor Profile
              </Link>
              <button className={styles.appointmentButton}>
              <Link className='nav-link' to={`/bookappointment/${doctor._id}`}> Book Appointment</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherDoctors;
