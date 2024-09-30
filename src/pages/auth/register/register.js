import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons

const RegisterPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [message, setMessage] = useState(""); // State for success or error message
  const navigate = useNavigate();
  let { auth } = useAuth();

  // If there is a user, navigate to the home page
  useEffect(() => {
    if (auth?.user?.token) {
      navigate("/");
    }
  }, [auth, navigate]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const validateName = (name) => {
    let regex = /^(?!\d+$).+$/;
    if (!name) {
      return "Full name is required";
    } else if (!regex.test(name)) {
      return "Invalid name";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email address is invalid";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) {
      return "Please confirm your password";
    } else if (confirmPassword !== password) {
      return "Passwords do not match";
    }
    return "";
  };

  const validateGender = (gender) => {
    if (!gender) {
      return "Gender is required";
    }
    return "";
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: validateName(newName),
    }));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(newEmail),
    }));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: validatePassword(newPassword),
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: validateConfirmPassword(newConfirmPassword),
    }));
  };

  const handleGenderChange = (e) => {
    const newGender = e.target.value;
    setGender(newGender);
    setErrors((prevErrors) => ({
      ...prevErrors,
      gender: validateGender(newGender),
    }));
  };

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleConShowPasswordToggle = () => {
    setShowConfirmPass((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);
    const genderError = validateGender(gender);

    if (
      !nameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError &&
      !genderError
    ) {
      let patient = {
        name: name,
        email: email,
        password: password,
        gender: gender,
      };

      try {
        await axios.post(`http://localhost:5000/api/patient/signup`, patient);
        setMessage("Registration successful! Confirm Your Email and Login");
        // Clear form fields
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setGender("");
        // Navigate to login page
        setTimeout(() => {
          navigate("/signin");
        }, 3000);
      } catch (error) {
        if (error.response && error.response.data) {
          setMessage(error.response.data.message || "Registration failed");
          setErrors({
            name: nameError || "Error occurred",
            email: emailError || "Error occurred",
            password: passwordError || "Error occurred",
            confirmPassword: confirmPasswordError || "Error occurred",
            gender: genderError || "Error occurred",
          });
        } else {
          setMessage("An error occurred during registration");
        }
      }
    } else {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
        gender: genderError,
      });
      setMessage(""); // Clear message
    }
  };

  return (
    <div
      className={`container-fluid min-vh-100 d-flex align-items-center justify-content-center ${
        isLoaded ? "fade-in" : ""
      }`}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className={`row shadow-lg mt-3 formContainer slide-up ${
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
        <div className="col-md-6 bg-white p-5 d-flex flex-column justify-content-center">
          <h3 className="text-center mb-4" style={{ color: "#232f66" }}>
            Hospital Registration
          </h3>
          {message && (
            <div
              className={`mt-3 alert ${
                message.includes("successful")
                  ? "alert-success"
                  : "alert-danger"
              }`}
              role="alert"
            >
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="form-label"
                style={{ color: "#6c757d" }}
              >
                Full Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={handleNameChange}
              />
              {errors.name && (
                <div
                  style={{ position: "absolute", width: "fit-content" }}
                  className="invalid-feedback"
                >
                  {errors.name}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "#6c757d" }}
              >
                Email address
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <div
                  style={{ position: "absolute", width: "fit-content" }}
                  className="invalid-feedback"
                >
                  {errors.email}
                </div>
              )}
            </div>
            {/* Password Field with Eye Icon*/}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="form-label"
                style={{ color: "#6c757d" }}
              >
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                />

                <span
                  className="input-group-text"
                  onClick={handleShowPasswordToggle}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.password && (
                  <div
                    style={{
                      position: "absolute",
                      width: "fit-content",
                    }}
                    className="invalid-feedback"
                  >
                    {errors.password}
                  </div>
                )}
              </div>
              {errors.password && (
                <small
                  style={{
                    position: "absolute",
                    width: "fit-content",
                  }}
                  className="text-danger"
                >
                  {errors.password}
                </small>
              )}
            </div>
            {errors.password && (
              <small
                style={{
                  width: "fit-content",
                }}
                className="invalid-feedback"
              >
                {errors.password}
              </small>
            )}
            {/* Confirm Password Field with Eye Icon */}
            <div className="mb-4 position-relative">
              <label
                htmlFor="confirmPassword"
                className="form-label"
                style={{ color: "#6c757d" }}
              >
                Confirm Password
              </label>
              <div className="input-group">
                <input
                  type={showConfirmPass ? "text" : "password"}
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <span
                  className="input-group-text"
                  onClick={handleConShowPasswordToggle}
                  style={{ cursor: "pointer" }}
                >
                  {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.confirmPassword && (
                <small
                  style={{ position: "absolute", width: "fit-content" }}
                  className="text-danger"
                >
                  {errors.confirmPassword}
                </small>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="form-label"
                style={{ color: "#6c757d" }}
              >
                Gender
              </label>
              <select
                id="gender"
                className={`form-control ${errors.gender ? "is-invalid" : ""}`}
                value={gender}
                onChange={handleGenderChange}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <div
                  style={{ position: "absolute", width: "fit-content" }}
                  className="invalid-feedback"
                >
                  {errors.gender}
                </div>
              )}
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
                  to="/signin"
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

      <style jsx="true">{`
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
