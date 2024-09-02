import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import styles from "./styles.module.css";

const OtherDoctors = () => {
  let doctors = [
    {
      id: 1,
      image: "https://placehold.co/100x100",
      name: "Dr. John Doe",
      speciality: "Cardiologist",
      location: "New York, NY",
      education: "Harvard Medical School",
    },
    {
      id: 2,
      image: "https://placehold.co/100x100",
      name: "Dr. Jane Smith",
      speciality: "Dermatologist",
      location: "Los Angeles, CA",
      education: "Yale Medical School",
    },
    {
      id: 3,
      image: "https://placehold.co/100x100",
      name: "Dr. Emily Clark",
      speciality: "Pediatrician",
      location: "Chicago, IL",
      education: "Stanford Medical School",
    },
  ];

  return (
    <div className={`mt-5 ${styles.doctorsRow}`}>
      {doctors.map((doctor, i) => (
        <div key={i} className={styles.doctorCol}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <img
                src={doctor.image}
                alt={`${doctor.name}'s profile`}
                className={styles.doctorImage}
              />
              <h4 className={styles.doctorName}>{doctor.name}</h4>
              <p className={styles.speciality}>{doctor.speciality}</p>
            </div>
            <hr className={styles.separator} />
            <div className={styles.location}>
              <IoLocationOutline />
              {doctor.location}
            </div>
            <div className={styles.education}>
              <RiGraduationCapFill />
              {doctor.education}
            </div>
            <div className={styles.buttonGroup}>
              <Link
                to={`/doctorprofile/${doctor.id}`}
                className={styles.profileButton}
              >
                Doctor Profile
              </Link>
              <button className={styles.appointmentButton}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherDoctors;
