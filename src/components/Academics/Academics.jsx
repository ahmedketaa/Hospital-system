import React from 'react';
import './Academics.css';

const academicPrograms = [
  {
    id: 1,
    title: 'Medical Residency Program',
    description: 'Comprehensive residency training across various medical specialties.',
    icon: '🏥', // يمكن استبدالها بأيقونة أو صورة ملائمة
  },
  {
    id: 2,
    title: 'Nursing Training Program',
    description: 'Specialized training for aspiring nurses with hands-on experience.',
    icon: '👩‍⚕️',
  },
  {
    id: 3,
    title: 'Research Fellowship',
    description: 'Opportunities for research in cutting-edge medical science.',
    icon: '🔬',
  },
  {
    id: 4,
    title: 'Continuing Medical Education (CME)',
    description: 'Educational programs to keep healthcare professionals up-to-date.',
    icon: '📚',
  },
  {
    id: 5,
    title: 'Workshops and Seminars',
    description: 'Interactive sessions and seminars on various medical topics.',
    icon: '🗣️',
  },
  // إضافة المزيد من البرامج الأكاديمية هنا
];

function Academics() {
  return (
    <div className="academics-container">
      <h2 className="section-title">Our Academic Programs</h2>
      <div className="programs-list">
        {academicPrograms.map((program) => (
          <div key={program.id} className="program-card">
            <div className="program-icon">{program.icon}</div>
            <h3 className="program-title">{program.title}</h3>
            <p className="program-description">{program.description}</p>
            <button className="program-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academics;
