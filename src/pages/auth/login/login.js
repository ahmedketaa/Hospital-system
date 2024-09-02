import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    }
    return "";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (!emailError && !passwordError) {
      console.log("Form submitted");
    } else {
      setErrors({ email: emailError, password: passwordError });
    }
  };

  return (
    <div
      className={`container-fluid min-vh-100 d-flex align-items-center justify-content-center ${
        isLoaded ? "fade-in" : ""
      }`}
      style={{ backgroundColor: "#f8f9fa" }}>
      <div
        className={`row shadow-lg formContainer slide-up ${
          isLoaded ? "slide-up-loaded" : ""
        }`}
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          maxWidth: "900px",
          width: "100%",
        }}>
        {/* Image Section */}
        <div
          className={`col-md-6 d-none d-md-block p-0 slide-in ${
            isLoaded ? "slide-in-loaded" : ""
          }`}
          style={{ zIndex: "100" }}>
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
            Hospital Login
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "#6c757d" }}>
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
                <small
                  style={{ position: "absolute", width: "fit-content" }}
                  className="invalid-feedback">
                  {errors.email}
                </small>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="form-label"
                style={{ color: "#6c757d" }}>
                Password
              </label>
              <input
                type="password"
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
                  className="invalid-feedback">
                  {errors.password}
                </div>
              )}
            </div>
            <div className="d-grid">
              <button
                style={{ backgroundColor: "#232f66" }}
                type="submit"
                className="btn text-white">
                Login
              </button>
            </div>
            <div className="text-center mt-3">
              <a href="#" style={{ textDecoration: "none", color: "#dea94d" }}>
                Forgot password?
              </a>
            </div>
            <hr />
            <div className="text-center">
              <div style={{ textDecoration: "none", color: "#dea94d" }}>
                New user?{" "}
                <Link
                    to="/signup"
                  style={{ color: "#0088ce", textDecoration: "none" }}
                >
                  Register now!
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .slide-in {
          transform: translateX(100%);
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

export default LoginPage;
