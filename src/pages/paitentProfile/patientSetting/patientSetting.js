import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const PatientSetting = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    emailError: "",
    nameError: "",
    phoneError: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [faildMessage, setFaildMessage] = useState("");
  let { auth, setAuth } = useAuth();

  useEffect(() => {
    if (auth?.user?.data) {
      setName(auth.user.data.name);
      setEmail(auth.user.data.email);
      setPhone(auth.user.data?.phone || "");
    }
  }, [auth]);

  const handleEmail = (e) => {
    let regex = /^\w+@\w+\.\w+$/;
    setEmail(e.target.value);
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, emailError: "Email is required" }));
    } else if (!regex.test(e.target.value)) {
      setErrors((prev) => ({ ...prev, emailError: "Invalid email" }));
    } else {
      setErrors((prev) => ({ ...prev, emailError: "" }));
    }
  };

  const handleName = (e) => {
    let regex = /^(?!\d+$).+$/;
    setName(e.target.value);
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, nameError: "Name is required" }));
    } else if (!regex.test(e.target.value)) {
      setErrors((prev) => ({ ...prev, nameError: "Invalid name" }));
    } else {
      setErrors((prev) => ({ ...prev, nameError: "" }));
    }
  };

  const handlePhone = (e) => {
    let regex = /^(010|011|012|015)(\d+){8}$/;
    setPhone(e.target.value);
    if (!regex.test(e.target.value)) {
      setErrors((prev) => ({ ...prev, phoneError: "Invalid phone number" }));
    } else {
      setErrors((prev) => ({ ...prev, phoneError: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!errors.emailError && !errors.nameError && !errors.phoneError) {
      let token = auth?.user?.token;
      try {
        const response = await axios.post(
          `http://localhost:5000/api/patient/updatePatient/${token}`,
          { email, name, phone }
        );
        setSuccessMessage(response.data.message);
        setFaildMessage("");
        setAuth({
          user: { token: response.data.token, data: response.data.data },
        });
        localStorage.setItem(
          "auth",
          JSON.stringify({
            token: response.data.token,
            data: response.data.data,
          })
        );
      } catch (err) {
        if (err.response && err.response.data) {
          let { message } = err.response.data;
          setFaildMessage(message);
          setSuccessMessage("");
        }
      }
    }
  };

  return (
    <div>
      <div className="container bg-light p-3 ">
        {successMessage && (
          <div className={`alert ${successMessage ? "alert-success" : ""}`}>
            {successMessage}
          </div>
        )}
        {faildMessage && (
          <div className={`alert alert-danger`}>{faildMessage}</div>
        )}
        <form
          onSubmit={handleSubmit}
          className="d-flex  justify-content-center flex-column"
        >
          <div className="position-relative d-flex align-items-center">
            <label htmlFor="name" className="col-2">
              Full Name*
            </label>
            <input
              id="name"
              className={`${errors.nameError && "is-invalid"} form-control m-3`}
              type="text"
              value={name}
              onChange={handleName}
            />
            {errors.nameError && (
              <small
                style={{
                  color: "red",
                  position: "absolute",
                  left: "20%",
                  bottom: "-10px",
                }}
              >
                {errors.nameError}
              </small>
            )}
          </div>
          <div className="position-relative d-flex align-items-center">
            <label htmlFor="email" className="col-2">
              Email Address*
            </label>
            <input
              id="email"
              className={`${
                errors.emailError && "is-invalid"
              } form-control m-3`}
              type="email"
              value={email}
              onChange={handleEmail}
            />
            {errors.emailError && (
              <small
                style={{
                  color: "red",
                  position: "absolute",
                  left: "20%",
                  bottom: "-10px",
                }}
              >
                {errors.emailError}
              </small>
            )}
          </div>
          <div className="position-relative d-flex align-items-center">
            <label htmlFor="phone" className="col-2">
              Phone Number
            </label>
            <input
              id="phone"
              className={`${
                errors.phoneError && "is-invalid"
              } form-control m-3`}
              type="text"
              value={phone}
              onChange={handlePhone}
            />
            {errors.phoneError && (
              <small
                style={{
                  color: "red",
                  position: "absolute",
                  left: "20%",
                  bottom: "-10px",
                }}
              >
                {errors.phoneError}
              </small>
            )}
          </div>
          <div>
            <button
              style={{ backgroundColor: "#232f66" }}
              className={`btn btn-primary col-2 ${
                (errors.nameError || errors.emailError || errors.phoneError) &&
                "disabled"
              }`}
              disabled={
                errors.nameError || errors.emailError || errors.phoneError
              }
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientSetting;
