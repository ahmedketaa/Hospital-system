import React from 'react';
import './SpecialtiesComponent.css';
import { Link } from 'react-router-dom';

const SpecialtiesComponent = () => {
    const specialties = [
        { id: 1, title: 'Cardiology Center Of Excellence', image: 'mature-male-doctor-smiling-science-photo-library.jpg' },
        { id: 2, title: 'General Surgery Center Of Excellence', image: 'mature-male-doctor-smiling-science-photo-library.jpg' },
        { id: 3, title: 'Paediatric Center Of Excellence', image: 'mature-male-doctor-smiling-science-photo-library.jpg' },
        { id: 4, title: 'Cardiology Center Of Excellence', image: 'mature-male-doctor-smiling-science-photo-library.jpg' },
        { id: 5, title: 'General Surgery Center Of Excellence', image: 'mature-male-doctor-smiling-science-photo-library.jpg' },
        { id: 6, title: 'Paediatric Center Of Excellence', image: 'mature-male-doctor-smiling-science-photo-library.jpg' },
        { id: 7, title: 'Cardiology Center Of Excellence', image: 'mature-male-doctor-smiling-science-photo-library.jpg' },
        { id: 8, title: 'General Surgery Center Of Excellence', image: 'mature-male-doctor-smiling-science-photo-library.jpg' },
        { id: 9, title: 'Paediatric Center Of Excellence', image: 'mature-male-doctor-smiling-science-photo-library.jpg' },
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Specialties</h2>
            <div className="row">
                {specialties.map((specialty) => (
                    <div key={specialty.id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <Link to={`/specialty/${specialty.id}`} className="text-decoration-none">
                                <img src={specialty.image} className="card-img-top" alt={specialty.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{specialty.title}</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
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
