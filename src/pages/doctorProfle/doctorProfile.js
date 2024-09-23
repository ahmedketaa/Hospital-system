import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./doctor.module.css";
import OtherDoctors from "./otherDoctors/otherDoctors";
import MainProfile from "./mainProfile/mainProfile";
import { getDoctorById } from "../../utilities/api";

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const doctorData = await getDoctorById(id);
        setDoctor(doctorData);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      }
    };

    fetchDoctor();
  }, [id]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.paths}>
          <div className={styles.pagePath}>
            <Link className={styles.linkStyle} to={"/"}>Home</Link>
            <Link className={styles.linkStyle} to={"/doctors"}>&gt;Healthcare Experts</Link>
            <span className={styles.nowPath}>&gt;Doctor Profile</span>
          </div>
          <h3 className={styles.docNamePath}>{doctor.name}</h3>
        </div>
      </header>
      <main className="container">
        <section className="mt-5">
          <MainProfile doctor={doctor} />
        </section>
        <section className="mt-5 mb-5">
          <h3 style={{ color: "#232f66" }}>Other Doctors</h3>
          <OtherDoctors />
        </section>
      </main>
    </>
  );
};

export default DoctorProfile;
