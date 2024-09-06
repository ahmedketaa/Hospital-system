import React from 'react';
import './PatientServices.css';

const services = [
  {
    id: 1,
    name: 'General Consultation',
    description: 'Get expert advice and care from our experienced doctors.',
    icon: '🩺',
  },
  {
    id: 2,
    name: 'Emergency Services',
    description: '24/7 emergency services available for critical care.',
    icon: '🚑',
  },
  {
    id: 3,
    name: 'Surgery',
    description: 'State-of-the-art surgical procedures with expert surgeons.',
    icon: '🏥',
  },
  {
    id: 4,
    name: 'Maternity Care',
    description: 'Comprehensive maternity care for expecting mothers.',
    icon: '👶',
  },
  {
    id: 5,
    name: 'Pediatric Care',
    description: 'Specialized care for children from our pediatricians.',
    icon: '🧸',
  },
  {
    id: 6,
    name: 'Pharmacy Services',
    description: 'In-house pharmacy providing all essential medications.',
    icon: '💊',
  },
  
  {
    id: 8,
    name: 'Laboratory Services',
    description: 'Comprehensive lab tests for accurate diagnostics.',
    icon: '🔬',
  },
  {
    id: 9,
    name: 'Physical Therapy',
    description: 'Rehabilitation and therapy services to improve mobility.',
    icon: '🧑‍🦽',
  },
  {
    id: 10,
    name: 'Dental Care',
    description: 'Comprehensive dental services for all ages.',
    icon: '🦷',
  },
  {
    id: 11,
    name: 'Mental Health Services',
    description: 'Counseling and mental health support services.',
    icon: '🧠',
  },
  {
    id: 12,
    name: 'Nutrition and Diet Counseling',
    description: 'Personalized nutrition plans and diet advice.',
    icon: '🥗',
  },
  {
    id: 13,
    name: 'Cardiology',
    description: 'Specialized heart care services including diagnostics and treatments.',
    icon: '❤️',
  },
  {
    id: 14,
    name: 'Ophthalmology',
    description: 'Eye care services including exams and surgical procedures.',
    icon: '👁️',
  },
  {
    id: 15,
    name: 'Orthopedics',
    description: 'Specialized care for bone, joint, and muscle issues.',
    icon: '🦴',
  },
];

function PatientServices() {
  return (
    <div className="patient-services-container">
      <h2 className="section-title">Our Patient Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientServices;
