import React from 'react';
import styles from './styles.module.css';

const BookingAvailability = ({ year = 2024, month = 8 }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate(); 
  const firstDayOfMonth = new Date(year, month, 1).getDay(); 
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className={styles.availabilityCalendar}>
      <div className={styles.bookingTitle}>
        <h4>Booking Availability</h4>
      </div>
      <div className={styles.calendar}>
        <div className={styles.monthYear}>
          <span>{new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        </div>
        <div className={styles.dayLabels}>
          {dayLabels.map((day, index) => (
            <div key={index} className={styles.dayLabel}>{day}</div>
          ))}
        </div>
        <div className={styles.days}>
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className={styles.day}></div>
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => (
            <div
              key={i}
              className={`${styles.day} `}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingAvailability;
