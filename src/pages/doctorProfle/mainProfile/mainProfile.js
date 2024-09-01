import styles from "./styles.module.css";

const MainProfile = () => {
  return (
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
      </div>

      {/* <div className={styles.profileInfo}>
        <div className={styles.profileDetails}>
          <h2>Dr. John Doe</h2>
          <p>Specialty: Cardiologist</p>
          <p>Location: Hospital XYZ, 123 Main St</p>
          <p>Education: MD, Harvard Medical School</p>
        </div>
        <div className={styles.bookingAvailability}>
          <h4>Booking Availability</h4>
          <p>Available: Mon-Fri, 9:00 AM - 5:00 PM</p>
          <button className={styles.bookNowBtn}>Book Now</button>
        </div>
      </div> */}
      {/* 
      <div className={styles.availabilityCalendar}>
        <h4>Booking Availability</h4>
        <div className={styles.calendar}>
          <div className={styles.monthYear}>
            <span>September 2024</span>
          </div>
          <div className={styles.days}>
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className={`${styles.day} ${
                  i % 7 === 5 || i % 7 === 6 ? styles.weekend : ""
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MainProfile;
