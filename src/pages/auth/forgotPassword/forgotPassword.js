import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import styles from "./forgotPassword.module.css"; // Custom styles
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setSuccess("email sent successfull, please check your email");
      setTimeout(() => navigate("/signin"), 3000);
    }
  };

  return (
    <div
      className={`mt-5 d-flex justify-content-center align-items-center ${styles.forgetPasswordContainer}`}
    >
      <div className={`p-3 ${styles.fCard}`}>
        <h4 className={`text-center ${styles.heading}`}>
          Forgot Your Password?
        </h4>
        {success && (
          <p className={`alert alert-success ${styles.success}`}>{success}</p>
        )}
        <p style={{ textAlign: "center" }}>
          No problem. We'll help you recover it Enter your email address to
          reset your password
        </p>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-3">
            <input
              type="email"
              className={`form-control ${
                error ? styles.invalid : styles.formControl
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <small className={`form-text ${styles.error}`}>{error}</small>
            )}
          </div>

          <button type="submit" className={`btn btn-primary ${styles.sButton}`}>
            Send Mail
          </button>
        </form>
        <div className="text-center mt-3">
          <Link
            to="/signin"
            style={{ color: "#dea94d", textDecoration: "none" }}
            className="btn btn-link"
          >
            Go back to login page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
