
const BASE_URL = 'http://localhost:5000';

export async function apiRequest(endpoint, method = 'GET', body = null) {
  const headers = {
    'Content-Type': 'application/json',
  };

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);
    if (!response.ok) {
        
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
    
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

export async function getAllDoctors() {
    const doctors = await apiRequest('api/doctors');
    return doctors;
  }
  export async function getDoctorById(id) {
    const doctor = await apiRequest(`api/doctors/${id}`);
    console.log('Doctor Details:', doctor);
    return doctor;
  }

  export async function getDepartments() {
    const departments = await apiRequest('api/departments'); // Adjust the endpoint as needed
    return departments.departments;
  }

  // Helper function to generate time slots
export const generateTimeSlots = (start, end, interval) => {
  const timeSlots = [];
  let current = start;

  while (current < end) {
    const hours = Math.floor(current / 60);
    const minutes = current % 60;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    timeSlots.push(formattedTime);
    current += interval;
  }

  return timeSlots;
};
