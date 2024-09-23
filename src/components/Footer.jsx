import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import FooterCard from './FooterCard';
import { faClock, faEnvelopeCircleCheck, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [blogs, setBlogs] = useState([]);
  const [news, setNews] = useState([]);
  const [doctors, setDoctors] = useState([]); // State for doctors


  // Fetch blogs and news

 useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/news");
        const data = await response.json();

        
  
        // Assuming the API returns an object with a `news` property containing the array
        if (data && Array.isArray(data.news)) {
          setNews(data.news.slice(0, 3));
        } else {
          console.error("Unexpected API response format:", data);
          setNews([]); // Set to an empty array if not valid
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetch("http://localhost:5000/api/blogs")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      return response.json();
    })
    .then((data) => {
      // If the response is an object with a blogs array, extract the array
      const blogsArray = Array.isArray(data) ? data : data.blogs;
      setBlogs(blogsArray.slice(0,3));  
    })
    .catch((err) => {
      console.log(err);
      
    });
    fetch("http://localhost:5000/api/doctors")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch doctors");
      }
      return response.json();
    })
    .then((data) => {
      const doctorsArray = Array.isArray(data) ? data : data.doctors;
      setDoctors(doctorsArray.slice(0, 3)); // Store the first 3 doctors
    })
    .catch((err) => {
      console.log(err);
    });
    fetchNews();
  }, []);

  return (
    <footer>
      <div className="footer-cards" style={{ backgroundColor: '#222F66', color: 'white' }}>
        <Container>
          <Row className="mb-4">
            <Col md={4}>
              <FooterCard icon={faEnvelopeCircleCheck} t1={'0123456789'} t2={'Call us now'} />
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
                {blogs.map((blog) => (
                  <li key={blog._id}>
                    <Link to={`/singleBlog/${blog._id}`}>{blog.title.substring(0, 15)}...</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={3}>
              <h5>News</h5>
              <ul>
                {news.map((newsItem) => (
                  <li key={newsItem._id}>
                    <Link to={`/news/${newsItem._id}`}>{newsItem.title.substring(0, 15)}...</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col className='' md={3}>
              <h5>Doctors & Specialists</h5>
              <ul>
                {doctors.map((doctor) => (
                  <li key={doctor._id}>
                    <Link to={`/doctorprofile/${doctor._id}`}>{doctor.name.substring(0, 15)}...</Link>
                  </li>
                ))}
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
