import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import styles from "./resetPassword.module.css"; // Custom styles
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  let { token } = useParams();

  useEffect(() => {}, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (password, confirmPassword) => {
    if (!password || !confirmPassword) {
      setError("Both password fields are required.");
      setSuccess("");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!error && password === confirmPassword) {
      try {
        await axios.post(`http://localhost:5000/api/patient/reset/${token}`, {
          password,
        });
        setSuccess("Password updated successfully");
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      } catch (err) {
        setError("Update failed");
      }
    }
  };

  return (
    <div
      className={`mt-5 d-flex justify-content-center align-items-center ${styles.passwordContainer}`}
    >
      <div className={`p-3 ${styles.pCard}`}>
        <h4 className={`text-center ${styles.heading}`}>Set Password</h4>
        {success && (
          <p className={`alert alert-success ${styles.success}`}>{success}</p>
        )}
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-3">
            <label className={`form-label ${styles.label}`}>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control ${
                error && password !== confirmPassword
                  ? styles.invalid
                  : styles.formControl
              }`}
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            {error && password !== confirmPassword && (
              <small className={`form-text ${styles.error}`}>{error}</small>
            )}
          </div>

          <div className="mb-3">
            <label className={`form-label ${styles.label}`}>
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control ${
                error && password !== confirmPassword
                  ? styles.invalid
                  : styles.formControl
              }`}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="form-check-label" htmlFor="showPassword">
              Show Password
            </label>
          </div>

          <button type="submit" className={`btn btn-primary ${styles.button}`}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
