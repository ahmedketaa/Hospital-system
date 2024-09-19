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
  let { auth } = useAuth();

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
    if (e.target.value === "") {
      setErrors({ ...errors, passwordError: "Password is required" });
    } else if (e.target.value.length < 8) {
      setErrors({
        ...errors,
        passwordError: "Password must be more 8 character",
      });
    } else {
      setErrors({ ...errors, passwordError: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== newPassword) {
      setErrors({
        ...errors,
        confirmPasswordError: "Passwords do not match",
      });
    } else {
      setErrors({ ...errors, confirmPasswordError: "" });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConPasswordVisibility = () => {
    setShowConPassword(!showConPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errors.passwordError && !errors.confirmPasswordError) {
      let token = auth?.user?.token && auth.user.token;
      if (newPassword.length < 8) {
        return setErrors({ ...errors, passwordError: "Password is required" });
      }
      if (newPassword !== confirmPassword) {
        return setErrors({
          ...errors,
          confirmPasswordError: "Passwords do not match",
        });
      } else {
        try {
          await axios.post(
            `http://localhost:5000/api/patient/updatepassword/${token}`,
            {
              password: newPassword,
            }
          );
          setFaildMessage("");
          setSuccessMessage("Password Updated Successfully");
        } catch (err) {
          if (err.response && err.response.data) {
            let { message } = err.response.data;
            setSuccessMessage("");
            setFaildMessage(message);
          }
        }
      }
    }
  };

  return (
    <div>
      <div className="container bg-light p-3">
        {successMessage && (
          <div className={`alert ${successMessage ? "alert-success" : ""}`}>
            {successMessage}
          </div>
        )}
        {faildMessage && (
          <div className={`alert ${faildMessage ? "alert-danger" : ""}`}>
            {faildMessage}
          </div>
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
              className={`${
                errors.passwordError && "is-invalid"
              } form-control m-3`}
              type={showPassword ? "text" : "password"}
              onChange={handlePasswordChange}
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
              className={`${
                errors.confirmPasswordError && "is-invalid"
              } form-control m-3`}
              type={showConPassword ? "text" : "password"}
              onChange={handleConfirmPasswordChange}
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
              className={` ${
                (errors.passwordError || errors.confirmPasswordError) &&
                "disabled"
              } btn btn-primary col-2`}
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
