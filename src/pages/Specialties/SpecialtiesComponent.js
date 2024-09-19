import React, { useState, useEffect } from 'react';
import './SpecialtiesComponent.css';
import { Link } from 'react-router-dom';

const SpecialtiesComponent = () => {
    const [specialties, setSpecialties] = useState([]);
    const [loading, setLoading] = useState(true);

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
             specialties.map((specialty) => (
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
            <nav aria-label="Page navigation example">
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
            </nav>
        </div>
    );
};

export default SpecialtiesComponent;
