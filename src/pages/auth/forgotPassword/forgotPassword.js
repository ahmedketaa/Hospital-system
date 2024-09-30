import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import styles from "./forgotPassword.module.css"; // Custom styles
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email address is invalid";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    let newEmail = e.target.value;
    setEmail(newEmail);
    setError(validateEmail(newEmail));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let emailError = validateEmail(email);
    setError("");
    setSuccess("");

    if (!emailError) {
      try {
        await axios.post("http://localhost:5000/api/patient/forget", { email });
        setTimeout(() => navigate("/signin"), 3000);
        setSuccess("Email sent successfully, Please check your email");
      } catch (err) {
        if (err.response) setError("Email doesn't exist");
      }
    } else {
      setError(emailError);
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
              onChange={handleEmailChange}
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
