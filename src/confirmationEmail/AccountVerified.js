import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const AccountVerified = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    verifyEmail();
  }, []);

  const verifyEmail = async () => {
    try {
      await axios.get(`http://localhost:5000/api/patient/verify/${id}`);
      setMessage(
        "Congratulations! Your account has been successfully verified."
      );
    } catch (err) {
      console.log("Error verifying account:", err);
      setTimeout(() => {
        setError(
          "There was an error verifying your account. Please try again."
        );
        navigate("/signin");
        setMessage("");
      }, 2000);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/signin");
  };

  return (
    <div
      className={`container-fluid d-flex justify-content-center align-items-center vh-100`}
      style={{
        backgroundColor: "#f0f4f8", // Light background for a cleaner look
      }}
    >
      <div
        className="shadow-lg p-5 text-center"
        style={{
          maxWidth: "500px",
          width: "100%",
          border: `1px solid #232f66`,
          borderRadius: "12px",
          backgroundColor: "#fff",
        }}
      >
        <h2 className="mb-4" style={{ color: "#232f66", fontWeight: "600" }}>
          Account Verification
        </h2>

        {message && (
          <p className="text-success mb-3" style={{ fontSize: "1.2rem" }}>
            {message}
          </p>
        )}

        {error && (
          <p className="text-danger mb-3" style={{ fontSize: "1.2rem" }}>
            {error}
          </p>
        )}

        {!message && !error && (
          <p className="text-muted mb-3" style={{ fontSize: "1.2rem" }}>
            you account has been verified 
          </p>
        )}

        <p className="text-muted mb-4" style={{ fontSize: "1.2rem" }}>
          You can now log in and start using your account.
        </p>

        <button
          onClick={handleLoginRedirect}
          className="btn"
          style={{
            backgroundColor: "#232f66",
            color: "#fff",
            borderRadius: "30px",
            padding: "12px 25px",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Go to Login
        </button>

        <div className="mt-4">
          <p className="text-muted" style={{ fontSize: "0.9rem" }}>
            If you have any issues, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountVerified;
