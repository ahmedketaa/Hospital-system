import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PatientProfile = () => {
  let { auth, logOut } = useAuth();
  const navLinkColor = "#232f66";
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {/* Sidebar */}
        <nav
          style={{ minHeight: "50vh" }}
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse border position-relative"
        >
          <div className="position-sticky pt-3">
            <h5 style={{ color: "#0088ce" }} className="text-center mt-3">
              {auth?.user?.data?.name && auth.user.data.name.toUpperCase()}{" "}
              Profile
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink
                  to="setting"
                  style={{ color: navLinkColor }}
                  className="nav-link"
                >
                  <span data-feather="layers"></span>
                  <i className="fa-solid fa-pen-to-square"></i> Setting
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: navLinkColor }}
                  to="appointment"
                  className="nav-link"
                >
                  <span data-feather="clock"></span>
                  <i className="fa-solid fa-calendar-check"></i> Appointment{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: navLinkColor }}
                  to="changepassword"
                  className="nav-link"
                >
                  <span data-feather="clock"></span>
                  <i className="fa-solid fa-lock"></i> Change Password
                </NavLink>
              </li>
              <li
                className="nav-ite position-absolute"
                style={{ bottom: "-100px" }}
              >
                <div
                  style={{ color: navLinkColor }}
                  onClick={logOut}
                  className="nav-link"
                  role="button"
                >
                  <span data-feather="clock"></span>
                  <i className="fa-solid fa-right-from-bracket"></i> Logout
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="content border">
            {/* Add any main content for the patient here */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PatientProfile;
