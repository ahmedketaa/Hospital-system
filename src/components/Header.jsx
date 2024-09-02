import { Link } from "react-router-dom";
import SocialIcon from "./socialIcon";


function Header() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex" >
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{color:"#222F66"}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news" style={{color:"#222F66"}}>| News & Media</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/academics" style={{color:"#222F66"}}>  |  Academics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors" style={{color:"#222F66"}}>|  Doctors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{color:"#222F66"}}>|  About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{color:"#222F66"}}>|  Contact</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <span style={{color:"#222F66"}} className="me-3">Follow us on:</span>
            <SocialIcon color={'#053B8C'} icon={'fa-facebook'}/>
            <SocialIcon color={'#00C2FF'} icon={'fa-twitter'} />
            <SocialIcon color={'#CF00A2'} icon={'fa-instagram'} />
          </div>
        </div>
      </div>
    </nav>
    
    </>
  );
}

export default Header;