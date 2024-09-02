import BookingAvailability from "../bookingAvailability/bookingAvailability";
import styles from "./styles.module.css";
import { MdOutlineWatchLater } from "react-icons/md";

const MainProfile = () => {
  return (
    <>
      <div className={styles.profileContainer}>
        <div>
          <div className={styles.coverContainer}>
            <div className={styles.coverPhoto}>
              <img
                src="https://placehold.co/800x200"
                alt="Cover"
                className={styles.coverImage}
              />
            </div>
            <div className={styles.profilePhoto}>
              <img
                src="https://placehold.co/100x100"
                alt="Profile"
                className={styles.profileImage}
              />
            </div>
          </div>
          {/* profile details */}
          <div className={styles.profileInfo}>
            <div className={styles.profileDetails}>
              <h2>Dr. John Doe</h2>
              <p>Specialty: Cardiologist</p>
              <button className={styles.bookNowBtn}>Book An Appointment</button>
            </div>
            <div className={styles.bookingAvailability}>
              <p>
                <MdOutlineWatchLater /> Available: Mon-Fri, 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
        <BookingAvailability />
      </div>
    </>
  );
};

export default MainProfile;
