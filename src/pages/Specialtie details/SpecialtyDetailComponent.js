import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './SpecialtyDetailComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHospital, faUserDoctor, faDroplet } from '@fortawesome/free-solid-svg-icons'; // Example icons

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SpecialtyDetailComponent = () => {
  const { id } = useParams();
  const [specialty, setSpecialty] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch the specialty details from the API
  useEffect(() => {
    const fetchSpecialty = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/specialies/${id}`);
        const data = await response.json();
        setSpecialty(data.speciality); // Set the fetched data
        setLoading(false); // Stop loading once the data is fetched
      } catch (error) {
        console.error('Error fetching specialty:', error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchSpecialty();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  if (!specialty) {
    return <div>Specialty not found</div>; // Show an error message if no data is found
  }

  return (
    <Container className="my-5">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/specialty">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/specialty">Specialities</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{specialty.title}</li>
        </ol>
      </nav>

      {/* Title and Overview Section */}
      <h2 className="mb-4">{specialty.title}</h2>
      <Row>
        <Col md={8}>
          <h4>Overview</h4>
          <p>{specialty.overview}</p>
        </Col>
        <Col md={4}>
          <img src={specialty.image} alt={specialty.title} className="img-fluid rounded" />
        </Col>
      </Row>

      {/* Facilities Section */}
      <div className="my-5 p-4 bg-light rounded">
        <h4>Facilities</h4>
        <ul>
          {specialty.facilities && specialty.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
      </div>

      {/* Treatments Section */}
      <h4>Treatments</h4>
      <Row className="my-4">
        <Col md={3} sm={6} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faDroplet} size="3x" />
              <Card.Title>Name Of Treatment</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faHospital} size="3x" />
              <Card.Title>Name Of Treatment</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faHeart} size="3x" />
              <Card.Title>Name Of Treatment</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faUserDoctor} size="3x" />
              <Card.Title>Name Of Treatment</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Doctors Section */}
      <h4>Our Doctors</h4>
      <div className="modal show" style={{ display: 'flex', position: 'initial' }}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Max Rogers</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/id/537738697/photo/heroes-are-ordinary-people-who-make-themselves-extraordinary.jpg?s=612x612&w=0&k=20&c=x3VSEwMniwNg4JEy_IDSGPLof8tiVaFDXCHmhUwSAQk="
              alt="Doctor Name"
            />
            <p>Surgeon</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Doctor Profile</Button>
            <Button variant="primary">Book Appointment</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </Container>
  );
};

export default SpecialtyDetailComponent;
