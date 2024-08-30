import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`container-fluid min-vh-100 d-flex align-items-center justify-content-center ${
        isLoaded ? "fade-in" : ""
      }`}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className={`row shadow-lg formContainer slide-up ${
          isLoaded ? "slide-up-loaded" : ""
        }`}
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Form Section */}
        <div
          className={`col-md-6 bg-white p-5 d-flex flex-column justify-content-center`}
        >
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
            <hr />
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
        {/* Image Section */}
        <div
          className={`col-md-6 d-none d-md-block p-0 slide-in ${
            isLoaded ? "slide-in-loaded" : ""
          }`}
        >
          <img
            src="authpage.jpg"
            alt="Hospital"
            className="img-fluid"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .slide-in {
          transform: translateX(-100%);
          transition: transform 1s ease-in-out;
        }

        .slide-in-loaded {
          transform: translateX(0);
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;
