import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import useAuth from '../../../hooks/useAuth';
import styles from './AppointmentList.module.css';
import ReportModal from './reportModal';

const ProfileAppointment = () => {
  const { auth } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const toast = React.useRef(null);

  const fetchAppointments = async () => {
    if (auth?.user?.data?.email) {
      try {
        const response = await axios.get(`http://localhost:5000/api/appointments/patient/${auth.user.data.email}`);
        setAppointments(response.data.appointments);
        console.log("data ",response.data.appointments);
        
      } catch (err) {
        console.error(err);
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to load appointments', life: 3000 });
      }
    }
  };
  useEffect(() => {
    fetchAppointments();
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
      fetchAppointments()
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      if (error.response) {
        toast.current.show({ severity: 'error', summary: 'Error', detail: error.response.data.message || 'Failed to cancel appointment', life: 3000 });
      } else {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Network error', life: 3000 });
      }
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
    if (report) {
      setSelectedReport(report);
      setShowModal(true);
    }
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
          {appointments.map((appointment) => (
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
              <div className='d-flex flex-column'>
                <button
                  className="btn btn-danger"
                  onClick={() => confirmCancel(appointment._id, appointment.date)}
                >
                  Cancel Appointment
                </button>
                <button
                  className={styles.reportButton}
                  disabled={!appointment.report} // Disable if no report is available
                  onClick={() => handleViewReport(appointment.report)}
                  >
                  View Report
                </button>
              </div>
            </li>
          ))}
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
