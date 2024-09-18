import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { UNSAFE_ErrorResponseImpl } from "react-router-dom";

const PatientSetting = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setError] = useState("");
  let { auth } = useAuth();

  useEffect(() => {
    if (auth?.user?.data) {
      setName(auth.user.data.name);
      setEmail(auth.user.data.email);
    }
  }, []);

  const handleEmail = (e) => {
    let regex = /^\w+@\w+\.\w+$/g;
    setEmail(e.target.value);
    if (e.target.value == "") {
      setError({ ...errors, emailError: "email is required" });
    } else if (!regex.test(e.target.value)) {
      setError({ ...errors, emailError: "invalid email" });
    } else {
      setError({ ...errors, emailError: "" });
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
    if (e.target.value == "") {
      setError({ ...errors, nameError: "name is required" });
    } else {
      setError({ ...errors, nameError: "" });
    }
  };

  const handlePhone = (e) => {
    let regex = /^(010|011|012|015)(\d+){8}$/;
    setPhone(e.target.value);
    if (!regex.test(e.target.value)) {
      setError({ ...errors, phoneError: "invalid number" });
    } else {
      setError({ ...errors, phoneError: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.emailError || !errors.nameError || !errors.phoneError) {
      let token = auth?.user?.token && auth.user.token;
      console.log(token);
    }
  };

  return (
    <div>
      <div className="container bg-light p-3 ">
        <form
          onSubmit={handleSubmit}
          className="d-flex  justify-content-center flex-column"
        >
          <div className="position-relative d-flex align-items-center">
            <label for="name" className="col-2">
              Full Name*
            </label>
            <input
              id="name"
              className={`${
                errors.nameError ? "is-invalid" : "is-valid"
              } form-control m-3`}
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
            <label for="email" className="col-2">
              Email Adderss*
            </label>
            <input
              id="email"
              className={`${
                errors.emailError ? "is-invalid" : "is-valid"
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
            <label for="phone" className="col-2">
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
              className={` ${
                (errors.nameError || errors.emailError || errors.phoneError) &&
                "disabled"
              } btn btn-primary col-2`}
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
