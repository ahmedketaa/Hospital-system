import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const PatientProfile = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <h5 className="text-center mt-3">My Info</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  <span data-feather="layers"></span>
                  Info
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  <span data-feather="clock"></span>
                  Bending Appointment{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  <span data-feather="clock"></span>
                  Appointment History
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Patient Dashboard</h1>
          </div>

          <div className="content">
            {/* Add any main content for the patient here */}
            <p>Welcome to your patient profile dashboard!</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PatientProfile;
