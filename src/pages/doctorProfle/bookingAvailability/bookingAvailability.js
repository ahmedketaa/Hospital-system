import React from 'react';
import styles from './styles.module.css';

const BookingAvailability = ({ availableDates = [] }) => {
  // Extract month and year from the available dates
  const dates = availableDates.map(date => new Date(date));
  const months = new Set(dates.map(date => date.getMonth()));
  const years = new Set(dates.map(date => date.getFullYear()));

  // Default to the first month and year found in available dates
  const month = months.size ? Math.min(...months) : new Date().getMonth();
  const year = years.size ? Math.min(...years) : new Date().getFullYear();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const formattedAvailableDates = availableDates.map(date => {
    const dateObj = new Date(date);
    return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')}`;
  });

  const isAvailable = (day) => {
    const dateString = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return formattedAvailableDates.includes(dateString);
  };

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
              className={`${styles.day} ${isAvailable(i + 1) ? styles.available : ''}`}
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
