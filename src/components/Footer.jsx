import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import './Footer.css';
import FooterCard from './FooterCard';
import { faClock, faEnvelopeCircleCheck, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="footer-cards" style={{ backgroundColor: '#222F66', color: 'white' }}>
        <Container>
          <Row className="mb-4">
            <Col md={4}>
                 <FooterCard icon={faEnvelopeCircleCheck} t1={'0123456789'} t2={'call us now'} />
            </Col>
            <Col md={4}>
                <FooterCard icon={faPhoneVolume} t1={'write@saifeehospital.com'} t2={'Drop us an email'} />
            </Col>
            <Col md={4}>
                <FooterCard icon={faClock} t1={'24 X 7 support'} t2={'We are open on'} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-links" style={{ backgroundColor: '#222F66', color: 'white' }}>
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col md={3}>
              <h5>Blogs</h5>
              <ul>
                <li><a href="#">Blog 1</a></li>
                <li><a href="#">Blog 2</a></li>
                <li><a href="#">Blog 3</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>News</h5>
              <ul>
                <li><a href="#">News 1</a></li>
                <li><a href="#">News 2</a></li>
                <li><a href="#">News 3</a></li>
              </ul>
            </Col>
            <Col className='' md={3}>
              <h5>Doctors & Specialists</h5>
              <ul>
                <li><a href="#">Doctor 1</a></li>
                <li><a href="#">Doctor 2</a></li>
                <li><a href="#">Doctor 3</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Our Social</h5>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom" style={{ backgroundColor: '#D9D9D9', padding: '10px 0' }}>
        <Container>
          <p className="text-center m-0">© 2024 Saifee Hospital. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
