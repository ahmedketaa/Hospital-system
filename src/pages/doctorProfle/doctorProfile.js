import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./doctor.module.css";
import OtherDoctors from "./otherDoctors/otherDoctors";
import MainProfile from "./mainProfile/mainProfile";

const DoctorProfile = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log("hala wallah", id);
  }, []);

  let doctor = {
    name: "Mohamed Yassin",
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.paths}>
          <div className={styles.pagePath}>
            <Link className={styles.linkStyle} to={"/"}>
              Home
            </Link>
            <Link className={styles.linkStyle} to={"/healthcareexpertsv"}>
              &gt;Healthcare Expertsv
            </Link>
            <span className={styles.nowPath}>&gt;Doctor Profile</span>
          </div>
          <h3 className={styles.docNamePath}>{doctor.name}</h3>
        </div>
      </header>
      <main className="container">
        <section className="mt-5">
          <MainProfile />
        </section>
        <section className="mt-5 mb-5">
          <h3 style={{ color: "#232f66" }}>Other Doctor</h3>
          <OtherDoctors />
        </section>
      </main>
    </>
  );
};

export default DoctorProfile;
