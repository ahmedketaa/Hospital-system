
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
    console.log('All Doctors:', doctors); 
    return doctors;
  }
  export async function getDoctorById(id) {
    const doctor = await apiRequest(`api/doctors/${id}`);
    console.log('Doctor Details:', doctor);
    return doctor;
  }