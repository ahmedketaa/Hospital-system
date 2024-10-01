import { Link } from "react-router-dom";
import SocialIcon from "./socialIcon";
import useAuth from "../hooks/useAuth";
import { Badge } from 'primereact/badge';
import { useEffect, useState } from "react"; 
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");
function Header() {
  let { auth, logOut } = useAuth();
  const [hasNewReport, setHasNewReport] = useState(false);

  // State to control the visibility of the logout button
  const [showLogout, setShowLogout] = useState(false);
  
  // Handlers for mouse events
  const handleMouseEnter = () => {
    setShowLogout(true);
  };
  
  const handleMouseLeave = () => {
    setShowLogout(false);
  };

  useEffect(() => {
    // Listen for the "newReport" event from the server
    socket.on("newReport", () => {
      setHasNewReport(true); // Set notification state to true when a new report is added
    });

    // Cleanup the event listener on component unmount
    return () => {
      socket.off("newReport");
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: "#222F66" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news" style={{ color: "#222F66" }}>
                  | News & Media
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctors" style={{ color: "#222F66" }}>
                  | Doctors
                </Link>
              </li>
              <li className="nav-item">
              <Link to="specialty" className="nav-link" style={{ color: "#222F66" }}>
                | Specialties
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs" style={{ color: "#222F66" }}>
                  | Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about_Us" style={{ color: "#222F66" }}>
                  | About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact_Us" style={{ color: "#222F66" }}>
                  | Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <span style={{ color: "#222F66" }} className="me-3">
                Follow us on:
              </span>
              <SocialIcon color={"#053B8C"} icon={"fa-facebook"} />
              <SocialIcon color={"#00C2FF"} icon={"fa-twitter"} />
              <SocialIcon color={"#CF00A2"} icon={"fa-instagram"} />

              {/* Sign In and Sign Up Buttons in a Styled Container */}
              {auth?.user?.token ? (
                <div
                  style={userComp}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-1" style={profileContainer}>
                    <Link to="/profile" style={profileButton}>
                      <i style={icon} className="fa-solid fa-user p-2"></i>
                      {auth?.user?.data?.name}
                     
                    
                      {hasNewReport && (
                          <span title="you have new report" style={notificationDot}>
                          <Badge value="1" severity="danger"></Badge>
                          </span>
                      )}
                    </Link>
                  </div>
                  {showLogout && (
                    <button style={logoutButton} onClick={logOut}>
                      Logout
                    </button>
                  )}
                </div>
              ) : (
                <div style={authButtonContainer}>
                  <Link to="/signin" style={signinButton}>
                    Sign In
                  </Link>
                  <Link to="/signup" style={signupButton}>
                    Create Account
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

/* Inline styles */
const authButtonContainer = {
  display: "flex",
  gap: "1rem", // Space between the buttons
  marginLeft: "2rem", // Space between social icons and the buttons
};

const userComp = {
  position: "relative",
};

const logoutButton = {
  backgroundColor: "#dea94d",
  color: "white",
  padding: "0.5rem 1.5rem",
  borderRadius: "5px",
  border: "none",
  fontSize: "1rem",
  textDecoration: "none",
  position: "absolute",
  zIndex: "10",
  top: "100%",
  right: "0",
  display: "block",
};

const icon = {
  backgroundColor: "#232f66",
  borderRadius: "50%",
  padding: "1px",
  color: "white",
  marginRight: "10px",
};

const profileContainer = {
  backgroundColor: "#d3d4d3",
  borderRadius: "50px",
};

const profileButton = {
  color: "#232f66",
  padding: "0.5rem 1.5rem",
  borderRadius: "20px",
  border: "none",
  fontSize: "1rem",
  transition: "all 0.3s ease-in-out",
  textDecoration: "none",
};

const signinButton = {
  backgroundColor: "#222f66",
  color: "white",
  padding: "0.5rem 1.5rem",
  borderRadius: "20px",
  border: "none",
  fontSize: "1rem",
  transition: "all 0.3s ease-in-out",
  textDecoration: "none",
};

const signupButton = {
  backgroundColor: "#dea94d",
  color: "white",
  padding: "0.5rem 1.5rem",
  borderRadius: "20px",
  border: "none",
  fontSize: "1rem",
  transition: "all 0.3s ease-in-out",
  textDecoration: "none",
};

/* Adding hover effects */
signinButton["&:hover"] = {
  backgroundColor: "#1a2450",
  transform: "scale(1.05)",
};

signupButton["&:hover"] = {
  backgroundColor: "#c07a30",
  transform: "scale(1.05)",
};

const notificationDot = {
  position: "absolute",
  top: "-5px",
  right: "-5px",
  width: "10px",
  height: "10px",
  // backgroundColor: "red",
  borderRadius: "50%",
  border: "1px solid white", // Add a white border to make it stand out
  zIndex: "20",
};

export default Header;
