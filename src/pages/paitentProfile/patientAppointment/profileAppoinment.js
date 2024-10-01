import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import useAuth from '../../../hooks/useAuth';
import styles from './AppointmentList.module.css';
import ReportModal from './reportModal';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io("http://localhost:5000");

const ProfileAppointment = () => {
  const { auth } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [reports, setReports] = useState([]); // State to store all reports
  const [selectedReport, setSelectedReport] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const toast = React.useRef(null);

  // Fetch appointments associated with the logged-in user
  const fetchAppointments = async () => {
    if (auth?.user?.data?.email) {
      try {
        const response = await axios.get(`http://localhost:5000/api/appointments/patient/${auth.user.data.email}`);
        setAppointments(response.data.appointments);
        console.log("Appointments fetched:", response.data.appointments);
      } catch (err) {
        console.error('Error fetching appointments:', err);
      }
    }
  };

  // Fetch reports associated with appointments
  const fetchReports = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/report'); // Adjust the endpoint as needed
      setReports(response.data.reports);
      console.log("Reports fetched:", response.data.reports);
    } catch (err) {
      console.error('Error fetching reports:', err);
    }
  };

  // Get all reports that match a specific appointment ID
  const getReportsForAppointment = (appointmentID) => {
    return reports.filter(report => report.appointmentId === appointmentID);
  };

  useEffect(() => {
    fetchAppointments();
    fetchReports();
    
    // Listen for real-time report updates
    socket.on("newReport", (newReport) => {
      console.log("New report received:", newReport);
      fetchReports(); // Refresh the reports list when a new report is added
    });

    return () => {
      socket.off("newReport"); 
    };
  }, [auth]);

  const handleCancelAppointment = async (appointmentID) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/cancel/${appointmentID}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setAppointments((prev) => prev.filter((appt) => appt._id !== appointmentID));
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Appointment cancelled successfully', life: 3000 });
      fetchAppointments();
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to cancel appointment', life: 3000 });
    }
  };

  const confirmCancel = (appointmentID, appointmentDate) => {
    const appointmentTime = new Date(appointmentDate);
    const currentTime = new Date();
    const timeDifference = appointmentTime - currentTime;
    const oneDayInMs = 24 * 60 * 60 * 1000;

    if (timeDifference < oneDayInMs) {
      toast.current.show({ severity: 'warn', summary: 'Warning', detail: 'You can only cancel appointments at least one day in advance.', life: 3000 });
      return;
    }

    confirmDialog({
      message: 'Are you sure you want to cancel this appointment?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => handleCancelAppointment(appointmentID),
    });
  };

  const handleViewReport = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReport(null);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return styles.statusCompleted;
      case 'not completed':
        return styles.statusNotCompleted;
      case 'cancelled':
        return styles.statusCancelled;
      default:
        return '';
    }
  };

  return (
    <div className={styles.container}>
      <Toast ref={toast} />
      <h2>Your Appointments</h2>
      <ConfirmDialog />
      <div className={styles.appointmentsScrollContainer}>
        <ul className="list-group">
          {appointments.length > 0 ? (
            appointments.map((appointment) => {
              const matchedReports = getReportsForAppointment(appointment._id);
              return (
                <li key={appointment._id} className={`list-group-item d-flex justify-content-between align-items-center ${styles.listGroupItem}`}>
                  <div>
                    {appointment.doctorID && (
                      <>
                        <p className={`${styles.doctorName}`}>Doctor/ {appointment.doctorID.name}</p>
                        <p className={`${styles.specialization}`}>Specialization/ {appointment.doctorID.specialization}</p>
                      </>
                    )}
                    <p className="mb-0"><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
                    <p className="mb-0"><strong>Time:</strong> {appointment.time}</p>
                    <p className={`mb-0 ${getStatusClass(appointment.status)}`}><strong>Status:</strong> {appointment.status}</p>
                  </div>
                  <div className={`d-flex flex-column `}>
                    <button
                      className={`btn btn-danger ${appointment.status === "cancelled" ? 'disabled' : ""}`}
                      onClick={() => confirmCancel(appointment._id, appointment.date)}
                    >
                      Cancel Appointment
                    </button>
                    {matchedReports.length > 0 && matchedReports.map((report, index) => (
                      <button
                        key={report._id}
                        className={styles.reportButton}
                        onClick={() => handleViewReport(report)}
                      >
                        View Report ({index + 1})
                      </button>
                    ))}
                  </div>
                </li>
              );
            })
          ) : (
            <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
              <h4 className='mt-3'>You Don't have any appointments</h4>
              <button className='btn mb-2' style={{ backgroundColor: "#222F66", padding: "8px 15px", borderRadius: "20px", color: "white" }}>
                <Link className='nav-link' to={`/bookappointment`}> Make Appointment Now!</Link>
              </button>     
            </div>
          )}
        </ul>
        {selectedReport && (
          <ReportModal
            show={showModal}
            handleClose={handleCloseModal}
            report={selectedReport}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileAppointment;
