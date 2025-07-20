import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Catering</h1>
      </div>
      <div className="nav-links">
        <Link to="/contact" className="navlink">Home</Link>
        <Link to="/contact" className="navlink">Services</Link>
        <Link to="/contact" className="navlink">About Us</Link>
        <Link to="/contact" className="navlink">Contact</Link>
      </div>
    </nav>
  )
};