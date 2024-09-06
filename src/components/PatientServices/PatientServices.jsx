import React from 'react';
import './PatientServices.css';

const services = [
  {
    id: 1,
    name: 'General Consultation',
    description: 'Get expert advice and care from our experienced doctors.',
    icon: '🩺', // يمكنك استبدال هذا بأيقونة أو صورة مناسبة
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
  // أضف المزيد من الخدمات هنا
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
