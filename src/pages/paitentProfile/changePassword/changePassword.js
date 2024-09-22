import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const PasswordSetting = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [faildMessage, setFaildMessage] = useState("");
  const { auth } = useAuth();

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 8)
      return "Password must be at least 8 characters long";
    return "";
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    setErrors((prev) => ({
      ...prev,
      passwordError: validatePassword(value),
      confirmPasswordError:
        value !== confirmPassword ? "Passwords do not match" : "",
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setErrors((prev) => ({
      ...prev,
      confirmPasswordError:
        value !== newPassword ? "Passwords do not match" : "",
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConPasswordVisibility = () => {
    setShowConPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordError = validatePassword(newPassword);
    const confirmPasswordError =
      confirmPassword !== newPassword ? "Passwords do not match" : "";

    if (!passwordError && !confirmPasswordError) {
      const token = auth?.user?.token;
      if (!token) {
        return setFaildMessage("Authentication token is missing.");
      }

      try {
        await axios.post(
          `http://localhost:5000/api/patient/updatepassword/${token}`,
          { password: newPassword }
        );
        setSuccessMessage("Password Updated Successfully");
        setFaildMessage("");
      } catch (err) {
        const message = err.response?.data?.message || "An error occurred.";
        setSuccessMessage("");
        setFaildMessage(message);
      }
    } else {
      setErrors({ passwordError, confirmPasswordError });
    }
  };

  return (
    <div>
      <div className="container bg-light p-3">
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        {faildMessage && (
          <div className="alert alert-danger">{faildMessage}</div>
        )}

        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center flex-column"
        >
          <div className="position-relative d-flex align-items-center">
            <label htmlFor="newPassword" className="col-2">
              New Password*
            </label>
            <input
              id="newPassword"
              className={`form-control m-3 ${
                errors.passwordError ? "is-invalid" : ""
              }`}
              type={showPassword ? "text" : "password"}
              onChange={handlePasswordChange}
              value={newPassword}
            />
            <span
              style={{ position: "absolute", right: "60px", cursor: "pointer" }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.passwordError && (
              <small
                style={{
                  color: "red",
                  position: "absolute",
                  left: "20%",
                  bottom: "-10px",
                }}
              >
                {errors.passwordError}
              </small>
            )}
          </div>

          <div className="position-relative d-flex align-items-center">
            <label htmlFor="confirmPassword" className="col-2">
              Confirm Password*
            </label>
            <input
              id="confirmPassword"
              className={`form-control m-3 ${
                errors.confirmPasswordError ? "is-invalid" : ""
              }`}
              type={showConPassword ? "text" : "password"}
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
            />
            <span
              style={{ position: "absolute", right: "60px", cursor: "pointer" }}
              onClick={toggleConPasswordVisibility}
            >
              {showConPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPasswordError && (
              <small
                style={{
                  color: "red",
                  position: "absolute",
                  left: "20%",
                  bottom: "-10px",
                }}
              >
                {errors.confirmPasswordError}
              </small>
            )}
          </div>

          <div>
            <button
              style={{ backgroundColor: "#232f66" }}
              className={`btn btn-primary col-2 ${
                errors.passwordError || errors.confirmPasswordError
                  ? "disabled"
                  : ""
              }`}
            >
              Save Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordSetting;
