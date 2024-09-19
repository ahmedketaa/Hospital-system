import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const BookAppointment = () => {
  let { auth } = useAuth();
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");

  useEffect(() => {
    if (auth?.user) {
      setPatient(auth.user.data.email || "you r not authorized");
    }
    if (doctor) {
      setDoctor(doctor || "doctor Name");
    }
  }, []);

  return (
    <div className="container bg-light rounded border p-3 mt-4 col-md-6 col-sm-12">
      <div className="w-100 container-fulid">
        <form>
          <div className="d-flex align-items-center m-2">
            <label className="col-2">doctor</label>
            <input className="form-control" disabled value={doctor} />
          </div>
          <div className="d-flex align-items-center m-2">
            <label className="col-2">email</label>
            <input className="form-control" value={patient} disabled />
          </div>
          <div className="d-flex flex-row align-items-center m-2">
            <label className="col-2">Avaliable Days*</label>
            <select className="form-select">
              <option>select day</option>
            </select>
          </div>
          <div className="d-flex flex-row align-items-center m-2">
            <label className="col-2">Avaliable Times*</label>
            <select className="form-select">
              <option>select Day Frist</option>
            </select>
          </div>
          <div>
            <button
              style={{ backgroundColor: "#232f66" }}
              className="btn btn-primary"
            >
              book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
