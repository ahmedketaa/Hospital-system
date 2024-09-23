import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import styles from './BookAppointment.module.css';
import useAuth from '../../hooks/useAuth';

const BookAppointment = ({fromLanding}) => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [formData, setFormData] = useState({
    doctorId: '',
    department: '',
    appointmentDate: '',
    time: '',
  });
  const [formError, setFormError] = useState('');
  const toast = useRef(null);
  const { auth } = useAuth();
  const doctorId = id;

  // Fetch all departments
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/departments');
        const allDepartments = res.data?.departments || [];

        // Filter departments with available doctors
        const departmentsWithDoctors = await Promise.all(
          allDepartments.map(async (dept) => {
            const doctorRes = await axios.get(`http://localhost:5000/api/doctors?department=${dept.name}`);
            if (doctorRes.data.length > 0) {
              return dept; // Return the department if it has doctors
            }
            return null; // Return null if it doesn't
          })
        );

        // Set state with valid departments only
        setDepartments(departmentsWithDoctors.filter(Boolean));
      } catch (error) {
        console.error(error);
      }
    };

    fetchDepartments();
  }, []);

  // Handle case where doctorId is present
  useEffect(() => {
    if (doctorId) {
      const fetchDoctor = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/doctors/${doctorId}`);
          const doctorData = res.data;
          setDoctor(doctorData);
          setAvailableDates(doctorData.availableDates);
          setFormData({
            ...formData,
            doctorId: doctorData._id,
            department: doctorData.department.name, 
          });
        } catch (error) {
          console.error(error);
        }
      };

      fetchDoctor();
    }
  }, [doctorId]);

  // Fetch doctors when department is selected
  useEffect(() => {
    if (selectedDepartment) {
      axios.get(`http://localhost:5000/api/doctors?department=${selectedDepartment}`)
        .then(res => setDoctors(res.data))
        .catch(err => console.log(err));
    }
  }, [selectedDepartment]);

  // Handle doctor selection to fetch doctor details
  const handleDoctorChange = (id) => {
    setFormData({ ...formData, doctorId: id });
    axios.get(`http://localhost:5000/api/doctors/${id}`)
      .then(res => {
        setDoctor(res.data);
        setAvailableDates(res.data.availableDates);
      })
      .catch(err => console.log(err));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { doctorId, department, appointmentDate, time } = formData;

    if (!doctorId || !department || !appointmentDate || !time) {
      setFormError('All fields are required.');
      return;
    }

    axios.post('http://localhost:5000/api/appointments/book', {
      doctorID: doctorId,
      department,
      date: appointmentDate,
      time,
      patientEmail: auth?.user?.data?.email,
    })
      .then(() => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Appointment booked successfully!', life: 3000 });
        setFormData({
          doctorId: '',
          department: '',
          appointmentDate: '',
          time: '',
        });
        setFormError('');
      })
      .catch(err => {
        console.error(err);
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to book appointment.', life: 3000 });
      });
  };

  return (
    <div className="container my-5">
      <Toast ref={toast} />
      {!fromLanding&&<h2 className="mb-4">Book Appointment</h2>}
      
      <form onSubmit={handleSubmit} className={`${styles.formContainer}`}>
        
        {/* Check if doctorId exists */}
        {doctorId ? (
          <>
            {/* Display selected doctor information */}
            {doctor && (
              <>
                <h5>Selected Doctor: {doctor.name}</h5>
                <h6>Department: {doctor.department.name}</h6> {/* Accessing department name directly */}
              </>
            )}
          </>
        ) : (
          // If no doctorId, show department selection
          <div className="mb-3" >
            <label htmlFor="department" className="form-label">Select Department</label>
            <select
              id="department"
              className="form-select"
              value={formData.department}
              onChange={e => {
                setFormData({ ...formData, department: e.target.value });
                setSelectedDepartment(e.target.value);
              }}
            >
              <option value="">Choose department...</option>
              {departments?.map((dept, index) => (
                <option key={index} value={dept.name}>{dept.name}</option>
              ))}
            </select>
            {formError && !formData.department && <div className="text-danger">Please select a department.</div>}
          </div>
        )}

        {/* If doctorId is not present, show doctor selection */}
        {!doctorId && selectedDepartment && (
          <div className="mb-3">
            <label htmlFor="doctor" className="form-label">Select Doctor</label>
            <select
              id="doctor"
              className="form-select"
              value={formData.doctorId}
              onChange={e => handleDoctorChange(e.target.value)}
            >
              <option value="">Choose doctor...</option>
              {doctors?.map((doc, index) => (
                <option key={index} value={doc._id}>{doc.name}</option>
              ))}
            </select>
            {formError && !formData.doctorId && <div className="text-danger">Please select a doctor.</div>}
          </div>
        )}

        {/* Date and Time Selection */}
        {(doctor || formData.doctorId) && (
          <>
            <div className="mb-3">
              <label htmlFor="appointmentDate" className="form-label">Select Date</label>
              <select
                id="appointmentDate"
                className="form-select"
                value={formData.appointmentDate}
                onChange={e => setFormData({ ...formData, appointmentDate: e.target.value })}
              >
                <option value="">Choose date...</option>
                {availableDates?.map((date, index) => (
                  <option key={index} value={date}>{new Date(date).toLocaleDateString()}</option>
                ))}
              </select>
              {formError && !formData.appointmentDate && <div className="text-danger">Please select a date.</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="appointmentTime" className="form-label">Select Time</label>
              <select
                id="appointmentTime"
                className="form-select"
                value={formData.time}
                onChange={e => setFormData({ ...formData, time: e.target.value })}
              >
                <option value="">Choose time...</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                {/* Add more time options as necessary */}
              </select>
              {formError && !formData.time && <div className="text-danger">Please select a time.</div>}
            </div>
          </>
        )}

        <button type="submit" className="btn btn-primary">Book Appointment</button>

        {formError && <div className="text-danger mt-3">{formError}</div>}
      </form>
    </div>
  );
};

export default BookAppointment;
