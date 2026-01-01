import "../Styles/Navbar.css";
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>C(ate)ring</h1>
      </div>
      <div className="nav-links">
        <a href="#Home" className="navlink">Home</a>
        <a href="#Menu" className="navlink">Menu</a>
        <a href="#About" className="navlink">About Us</a>
        <a href="#Contact" className="navlink">Contact</a>
      </div>
    </nav>
  )
};