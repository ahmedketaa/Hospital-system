import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="row shadow-lg"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Image Section */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="authpage.jpg"
            alt="Hospital"
            className="img-fluid"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-md-6 bg-white p-5 d-flex flex-column justify-content-center">
          <h3 className="text-center mb-4" style={{ color: "#232f66" }}>
            Hospital System Registration
          </h3>
          <form>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label"
                style={{ color: "#6c757d" }}
              >
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "#6c757d" }}
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label"
                style={{ color: "#6c757d" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="form-label"
                style={{ color: "#6c757d" }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>
            <div className="d-grid">
              <button
                style={{ backgroundColor: "#232f66" }}
                type="submit"
                className="btn text-white"
              >
                Register
              </button>
            </div>
            <div className="text-center mt-3">
              <div style={{ color: "#dea94d" }}>
                Already have an account?
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#0088ce" }}
                >
                  {" "}
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
