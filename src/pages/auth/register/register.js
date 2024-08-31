import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const validateName = (name) => {
    if (!name) {
      return "Full name is required";
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

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
      console.log("Form submitted");
      // You can now submit the form data to the server
    } else {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
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
        <div className="col-md-6 bg-white p-5 d-flex flex-column justify-content-center">
          <h3 className="text-center mb-4" style={{ color: "#232f66" }}>
            Hospital Registration
          </h3>
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
            <div className="mb-4">
              <label
                htmlFor="password"
                className="form-label"
                style={{ color: "#6c757d" }}
              >
                Password
              </label>
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
              {errors.password && (
                <div
                  style={{ position: "absolute", width: "fit-content" }}
                  className="invalid-feedback"
                >
                  {errors.password}
                </div>
              )}
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
                type={showPassword ? "text" : "password"}
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {errors.confirmPassword && (
                <div
                  style={{ position: "absolute", width: "fit-content" }}
                  className="invalid-feedback"
                >
                  {errors.confirmPassword}
                </div>
              )}
            </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={handleShowPasswordToggle}
              />
              <label className="form-check-label" htmlFor="showPassword">
                Show Password
              </label>
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
