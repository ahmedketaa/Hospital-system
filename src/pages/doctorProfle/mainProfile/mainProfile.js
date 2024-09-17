import BookingAvailability from "../bookingAvailability/bookingAvailability";
import styles from "./styles.module.css";
import { MdOutlineWatchLater, MdPhone, MdLocationOn, MdEmail } from "react-icons/md";

const MainProfile = ({ doctor }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[date.getDay()];
    return `${dayName} from 9 AM to 3 PM`; 
  };


  const formattedAvailableDates = doctor.availableDates.map(dateString => formatDate(dateString)).join(', ');

  const formattedDOB = new Date(doctor.dateOfBirth).toLocaleDateString();


  if (!doctor) return <div>Loading...</div>;

  return (
    <div className={styles.profileContainer}>
      <div>
        <div className={styles.coverContainer}>
          <div className={styles.coverPhoto}>
            <img
              src={doctor.coverPhoto || "/cover.jpeg"}
              alt="Cover"
              className={styles.coverImage}
            />
          </div>
          <div className={styles.profilePhoto}>
            <img
              src={doctor.gender==="male"?"/male.jpg":"/female.jpeg"}
              alt="Profile"
              className={styles.profileImage}
            />
          </div>
        </div>
        <div className={styles.profileInfo}>
        <div className={styles.profileDetails}>
      <h2 className={styles.name}>{doctor.name}</h2>
      <p className={styles.text}>Specialization: {doctor.specialization}</p>
      <p className={styles.text}>Department: {doctor.department?.name ||'not available'}</p>
      <p className={styles.text}>Experience: {doctor.experience} years</p>
      <p className={styles.text}>Gender: {doctor.gender}</p>
      <p className={styles.text}>Date of Birth: {formattedDOB}</p>
      <p className={styles.text}>History: {doctor.history}</p>
      <p className={styles.text}>Statistics:</p>
      <ul className={styles.statisticsList}>
        <li className={styles.statisticsItem}>Successful Surgeries: {doctor.statistics.successfulSurgeries}</li>
        <li className={styles.statisticsItem}>Patients Treated: {doctor.statistics.patientsTreated}</li>
      </ul>
      <p className={styles.text}>
        <MdPhone className={styles.icon} /> Phone: {doctor.contactInfo.phone}
      </p>
      <p className={styles.text}>
        <MdEmail className={styles.icon} /> Email: {doctor.contactInfo.email}
      </p>
      <p className={styles.text}>
        <MdLocationOn className={styles.icon} /> Location: {doctor.location || "Not provided"}
      </p>
      <p >
              <MdOutlineWatchLater />Available Dates: <span style={{color:"green"}}> [{formattedAvailableDates || "No availability"} ] </span>
            </p>
    </div>
        </div>
      </div> 
      <BookingAvailability availableDates={doctor.availableDates} />
    </div>
  );
};

export default MainProfile;
