import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import styles from './ReportModal.module.css'; 

const ReportModal = ({ show, handleClose, report }) => {
  
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFillColor(72, 61, 139); 
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F'); 

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('Prescription Report', 10, 10);

    const headerX = 10;
    const headerY = 25;
    const headerWidth = 190;
    const headerHeight = 30;
    const borderRadius = 5;
  
    doc.setFillColor(75, 72, 142); 
    doc.roundedRect(headerX, headerY, headerWidth, headerHeight, borderRadius, borderRadius, 'F'); 

    const padding = 5;
    doc.setFontSize(12);
    doc.text(`Patient Name: ${report.patientName}`, headerX + padding, headerY + padding + 10);
    doc.text(`Patient Phone: ${report.patientPhoneNumber}`, headerX + padding, headerY + padding + 20);
    doc.text(`Doctor: ${report.doctorName} (${report.department})`, headerX + padding, headerY + padding + 30);

    doc.text(' ', 10, headerY + headerHeight + 10);

    doc.setFontSize(14);
    doc.text('Examination Details:', 10, headerY + headerHeight + 20);
    doc.setFontSize(12);
    doc.text(`Diagnosis: ${report.diagnosis}`, 10, headerY + headerHeight + 30);
    doc.text(`Treatment: ${report.treatmentPrescription}`, 10, headerY + headerHeight + 40);
    doc.text(`Doctor's Comment: ${report.doctorComment}`, 10, headerY + headerHeight + 50);
    doc.text(`Date of Examination: ${new Date(report.appointmentId?.date).toLocaleDateString()}`, 10, headerY + headerHeight + 60);
    doc.text(`Time of Examination: ${report.appointmentId?.time}`, 10, headerY + headerHeight + 70);

    doc.save(`Prescription-${new Date(report.appointmentId?.date).toLocaleDateString()}.pdf`);
  };

  return (
    <Modal show={show} onHide={handleClose} className={styles.modal}>
      <Modal.Header closeButton>
        <Modal.Title>Prescription Report</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.header}>
          <h5><strong>Patient Name:</strong> {report.patientName}</h5>
          <h6><strong>Phone:</strong> {report.patientPhoneNumber}</h6>
          <h6><strong>Doctor:</strong> {report.doctorName} ({report.department})</h6>
        </div>
        
        <div className={styles.details}>
          <h4>Examination Details</h4>
          <p><strong>Diagnosis:</strong> {report.diagnosis}</p>
          <p><strong>Treatment:</strong> {report.treatmentPrescription}</p>
          <p><strong>Doctor's Comment:</strong> {report.doctorComment}</p>
          <p><strong>Date of Examination:</strong> {new Date(report.appointmentId?.date).toLocaleDateString()}</p>
          <p><strong>Time of Examination:</strong> {report.appointmentId?.time}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={downloadPDF}>
          Download PDF
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReportModal;
