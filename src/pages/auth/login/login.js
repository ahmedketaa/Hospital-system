import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState(""); // State for success or error message
  const navigate = useNavigate();
  let { auth, setAuth } = useAuth();
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // if there is user navigate to home page
  useEffect(() => {
    if (auth?.user?.token) {
      navigate("/"); // Navigate if user is authenticated
    }
  }, [auth, navigate]);
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (!emailError && !passwordError) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/patient/signin",
          { email: email, password: password }
        );
        let { token, message, data } = response.data;
        setMessage(message || "Login successfull!");
        localStorage.setItem(
          "auth",
          JSON.stringify({ token: token, data: data })
        );

        setMessage(response.response.data.message || "Login Faild");
        
        setTimeout(() => {
          setAuth({ user: { token: token, data: data } });
          navigate("/");
        }, 2000);
      } catch (err) {
        
        if (err.response && err.response.data) {
          let { messgae } = err.response.data;
          
          setMessage(messgae || "Login Faild");
        }
      }
    } else {
      setErrors({ email: emailError, password: passwordError });
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
        {/* Image Section */}
        <div
          className={`col-md-6 d-none d-md-block p-0 slide-in ${
            isLoaded ? "slide-in-loaded" : ""
          }`}
          style={{ zIndex: "100" }}
        >
          <img
            src="authpage.jpg"
            alt="Hospital"
            className="img-fluid"
            style={{ height: "100%" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-md-6 bg-white p-5 d-flex flex-column justify-content-center">
          <h3 className="text-center mb-4" style={{ color: "#232f66" }}>
            Hospital Login
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
                <small
                  style={{ position: "absolute", width: "fit-content" }}
                  className="invalid-feedback"
                >
                  {errors.email}
                </small>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="form-label"
                style={{ color: "#6c757d" }}
              >
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
                  className="invalid-feedback"
                >
                  {errors.password}
                </div>
              )}
            </div>
            <div className="d-grid">
              <button
                style={{ backgroundColor: "#232f66" }}
                type="submit"
                className="btn text-white"
              >
                Login
              </button>
            </div>
            <div className="text-center mt-3">
              <Link to="/forgotpassword" style={{ textDecoration: "none", color: "#dea94d" }}>
                Forgot password?
              </Link>
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

      <style jsx='true'>{`
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
