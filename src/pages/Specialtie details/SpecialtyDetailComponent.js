import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './SpecialtyDetailComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart ,faHospital,faUserDoctor,faDroplet} from '@fortawesome/free-solid-svg-icons'; // Example icon


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const specialties = [
  {
    id: 1,
    title: 'Cardiology Center Of Excellence',
    image: 'https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8=',
    overview: 'Our Cardiology Center provides comprehensive care for all heart-related conditions, including advanced diagnostics and treatment options.',
    facilities: [
      'State-of-the-art cardiac imaging equipment',
      'Advanced cardiac catheterization labs',
      'Experienced cardiologists and support staff',
      '24/7 emergency cardiac care'
    ]
  },
  {
    id: 2,
    title: 'General Surgery Center Of Excellence',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoagNyiVakhbmmC_rDUpqPDbHdRjnj6Gf-7WuhCAHPXyedil8c90OhOA1ij8se9EfKeG4&usqp=CAU',
    overview: 'Our General Surgery Center offers a wide range of surgical services performed by highly skilled surgeons in a state-of-the-art facility.',
    facilities: [
      'Modern operating rooms',
      'Pre- and post-operative care units',
      'Experienced surgical team',
      'Comprehensive surgical services'
    ]
  },
  {
    id: 3,
    title: 'Paediatric Center Of Excellence',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5UGxAvApcMeCr9ghraxXKWuLB0KryFNR8Orc8S7gE6Fnxw6Sr4sHa6ZZQsGxlUx0Yn0&usqp=CAU',
    overview: 'Our Pediatric Center specializes in providing medical care for children, from newborns to adolescents, with a focus on compassionate and effective treatments.',
    facilities: [
      'Child-friendly examination rooms',
      'Pediatric specialists in various fields',
      'Child life specialists',
      'On-site laboratory and imaging services'
    ]
  },

  {
    id: 4,
    title: 'Orthopaedic Center Of Excellence',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJiHtESSsXNNYInwd5FJ8ybY8V_Iu-IAuJ9WFvpsiDOv_J9FpBSMMjJX-wxjTutN5sH6A&usqp=CAU',
    overview: 'Our Orthopaedic Center is dedicated to diagnosing and treating musculoskeletal issues, providing innovative and personalized care for bone, joint, and muscle conditions.',
    facilities: [
      'Advanced orthopaedic imaging technology',
      'State-of-the-art surgical suites',
      'Experienced orthopaedic surgeons',
      'Comprehensive rehabilitation services'
    ]
  },
  {
    id: 5,
    title: 'Oncology Center Of Excellence',
    image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/11334/conversions/1e30c11b-b464-47af-a432-7a86606b954f-thumb.jpg',
    overview: 'Our Oncology Center provides cutting-edge treatments and compassionate care for patients with cancer, utilizing the latest advancements in oncology.',
    facilities: [
      'State-of-the-art chemotherapy and radiation therapy',
      'Oncology specialists with advanced training',
      'Supportive care services including counseling',
      'Comprehensive diagnostic imaging'
    ]
  },
  {
    id: 6,
    title: 'Gastroenterology Center Of Excellence',
    image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/doctor-doing-a-medical-exam-1296x728-header.jpg?w=1155&h=1528',
    overview: 'Our Gastroenterology Center offers specialized care for digestive disorders, including advanced diagnostic and therapeutic procedures.',
    facilities: [
      'Advanced endoscopic and diagnostic tools',
      'Experienced gastroenterologists',
      'Comprehensive treatment plans for digestive issues',
      'On-site laboratory and imaging services'
    ]
  },
  {
    id: 7,
    title: 'Neurology Center Of Excellence',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrKfdVqgr905wHYHMcG3KFQ1HXWLs9MgU5x4GUaNBJcZGKqA9WP7JwOlVxw_VlG2nxMc&usqp=CAU',
    overview: 'Our Neurology Center provides expert care for neurological conditions, offering a range of diagnostic and treatment services to manage disorders of the nervous system.',
    facilities: [
      'Advanced neuroimaging technology',
      'Specialized neurological diagnostics',
      'Experienced neurologists',
      'Integrated care with physical and occupational therapy'
    ]
  },
  {
    id: 8,
    title: 'Dermatology Center Of Excellence',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDuDh9NdvsC_T6tGQOUgNdG2QwuVUhWuGwh8BeiTkfJENdUTRgP1KDj2fG8_XSMx0nV4&usqp=CAU',
    overview: 'Our Dermatology Center offers expert care for skin conditions, including cosmetic and medical dermatology services with the latest treatments and technology.',
    facilities: [
      'Advanced dermatological diagnostic tools',
      'Wide range of dermatologic treatments',
      'Experienced dermatologists',
      'Cosmetic dermatology services'
    ]
  },
  {
    id: 9,
    title: 'Endocrinology Center Of Excellence',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrKfdVqgr905wHYHMcG3KFQ1HXWLs9MgU5x4GUaNBJcZGKqA9WP7JwOlVxw_VlG2nxMc&usqp=CAU',
    overview: 'Our Endocrinology Center specializes in diagnosing and treating hormone-related disorders, providing comprehensive care for conditions affecting the endocrine system.',
    facilities: [
      'Advanced diagnostic endocrine testing',
      'Experienced endocrinologists',
      'Comprehensive management of hormonal disorders',
      'Integrated care with nutrition and lifestyle counseling'
    ]
  },
];

const SpecialtyDetailComponent = () => {
  const { id } = useParams();
  const specialtyId = parseInt(id, 10); // Convert id from string to number

  // Find the specialty by ID
  const specialty = specialties.find(s => s.id === specialtyId);

  // Check if the specialty was found
  if (!specialty) {
    return <div>Specialty not found</div>;
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
          {specialty.facilities.map((facility, index) => (
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
            <FontAwesomeIcon icon={faDroplet} size="3x"/> 
              <Card.Title>Name Of Treatment</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faHospital} size="3x"/> 
            <Card.Title>Name Of Treatment</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faHeart}size="3x" /> 
            <Card.Title>Name Of Treatment</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faUserDoctor} size="3x"/> 
              <Card.Title>Name Of Treatment</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more treatment cards as needed */}
      </Row>

      {/* Doctors Section */}
      <h4>Our Doctors</h4>
      <div
      className="modal show"
      style={{ display: 'flex', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Max Rogers</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card.Img variant="top" src="https://media.istockphoto.com/id/537738697/photo/heroes-are-ordinary-people-who-make-themselves-extraordinary.jpg?s=612x612&w=0&k=20&c=x3VSEwMniwNg4JEy_IDSGPLof8tiVaFDXCHmhUwSAQk=" alt="Doctor Name" />
          <p>Surgeon</p>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Doctor Profile</Button>
          <Button variant="primary">Book Appointment</Button>
        </Modal.Footer>
      </Modal.Dialog>
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Leonardo Hayden</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card.Img variant="top" src="https://media.istockphoto.com/id/912920540/photo/profile-view-of-indian-man-doctor-thinking-against-white-background.jpg?s=612x612&w=0&k=20&c=A7pzhxZOyCtxnxNLeEmcfUl_8IbZSnfZqHgXbk-908Y=" alt="Doctor Name" />
          <p>Radiologist</p>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Doctor Profile</Button>
          <Button variant="primary">Book Appointment</Button>
        </Modal.Footer>
      </Modal.Dialog>
        <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Doctor Name</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card.Img variant="top" src="https://media.istockphoto.com/id/669685368/photo/profile-view-of-senior-persian-man-doctor-thinking-against-white-background.jpg?s=612x612&w=0&k=20&c=VLc0ozvpZhY-lcwA6nnYyqnPWTQmyRdDNQK4AHDX3vY=" alt="Doctor Name" />
          <p>Emergency medicine</p>

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
