import React, { useState, useEffect } from 'react';
import './SpecialtiesComponent.css';
import { Link } from 'react-router-dom';

const SpecialtiesComponent = () => {
    const [specialties, setSpecialties] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const currentspecialty = specialties.slice(firstIndex, lastIndex);  // Ensure this is an array
    const nPage = Math.ceil(specialties.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);
  


    useEffect(() => {
        // Fetch data from the API
        fetch('http://localhost:5000/api/specialies')
            .then(response => response.json())
            .then(data => {
                setSpecialties(data.specialies);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching specialties:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Specialties</h2>
            <div className="row">
            {Array.isArray(specialties) && specialties.length > 0 ? (
                currentspecialty.map((specialty) => (
        <div key={specialty._id} className="col-md-4 col-sm-6 mb-4">
            <div className="card">
                <Link to={`/specialty/${specialty._id}`} className="text-decoration-none">
                    <img src={specialty.image} className="card-img-top" alt={specialty.title} />
                    <div className="card-body">
                        <h5 className="card-title">{specialty.title}</h5>
                    </div>
                </Link>
            </div>
        </div>
    ))
) : (
    <div>No specialties available.</div>
)}

            </div>

            {/* Pagination */}
            {/* <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <Link className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav> */}


            
<nav className="mt-5 d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item">
            <Link to="" className="page-link" onClick={prePage}>
              Prev
            </Link>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <Link to="" className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link to="" className="page-link" onClick={nextPage}>
              Next
            </Link>
          </li>
        </ul>
      </nav>

        </div>
    );

    function prePage() {
        if (currentPage !== 1) {
          setCurrentPage(currentPage - 1);
        }
      }
    
      function changeCPage(id) {
        setCurrentPage(id);
      }
    
      function nextPage() {
        if (currentPage !== nPage) {
          setCurrentPage(currentPage + 1);
        }
      }
};

export default SpecialtiesComponent;
