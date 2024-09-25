import React, { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import 'primereact/resources/primereact.min.css';        
import 'primeicons/primeicons.css';                 
import styles from './styles.module.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const BookingAvailability = ({ availableDates = [] }) => {
  const toast = useRef(null);

  // Format available dates with time and extract year and month
  const formattedAvailableDates = availableDates.map(({ date, fromTime, toTime }) => {
    const dateObj = new Date(date);
    return {
      dateString: `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')}`,
      fromTime,
      toTime,
      month: dateObj.getMonth(),
      year: dateObj.getFullYear(),
      day: dateObj.getDate()
    };
  });

  // Extract unique months with available dates (combination of month and year)
  const uniqueAvailableMonths = Array.from(new Set(formattedAvailableDates.map(date => `${date.year}-${date.month}`)))
    .map(monthYear => {
      const [year, month] = monthYear.split('-').map(Number);
      return { year, month };
    })
    .sort((a, b) => (a.year - b.year) || (a.month - b.month)); // Sort by year and month

  // Initial state: Set the current month and year to the first available month
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMonth = uniqueAvailableMonths[currentIndex].month;
  const currentYear = uniqueAvailableMonths[currentIndex].year;

  // Get days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Check if the day is available
  const isAvailable = (day) => {
    const dateString = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return formattedAvailableDates.find(dateObj => dateObj.dateString === dateString);
  };

  // Handle navigation to previous and next available months
  const goToNextMonth = () => {
    if (currentIndex < uniqueAvailableMonths.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Show toast if there are no more available months
      showToast()
    }
  };

const showToast=()=>{
  toast.current.show({ severity: 'info', summary: 'No More Available Dates', detail: 'There are no available dates for the next month.', life: 3000 });

}
  const goToPreviousMonth = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Show toast if there are no earlier available months
      toast.current.show({ severity: 'info', summary: 'No More Available Dates', detail: 'There are no available dates for the previous month.', life: 3000 });
    }
  };

  return (
    <div className={styles.availabilityCalendar}>
      {/* PrimeReact Toast */}
      <Toast ref={toast} />

      <div className={styles.bookingTitle}>
        <h4>Booking Availability</h4>
      </div>
      <div className={styles.calendar}>
        {/* Month and Year display with navigation */}
        <div className={styles.monthYear}>
          <button onClick={goToPreviousMonth} className={' btn btn-info text-center mx-2 '} >
              <FaChevronLeft/>
          </button>
          <span>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
          <button onClick={goToNextMonth} className={'btn btn-info text-center mx-2 '} >
              <FaChevronRight/>
          </button>
        </div>

        {/* Day labels (Sun, Mon, etc.) */}
        <div className={styles.dayLabels}>
          {dayLabels.map((day, index) => (
            <div key={index} className={styles.dayLabel}>{day}</div>
          ))}
        </div>

        {/* Days of the month with available dates highlighted */}
        <div className={styles.days}>
          {/* Empty days for offsetting the first day of the month */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className={styles.day}></div>
          ))}

          {/* Display days of the current month */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const availability = isAvailable(i + 1);
            return (
              <div
                key={i}
                className={`${styles.day} ${availability ? styles.available : ''}`}
                title={availability ? `Available from ${availability.fromTime} to ${availability.toTime}` : 'No availability'}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookingAvailability;
