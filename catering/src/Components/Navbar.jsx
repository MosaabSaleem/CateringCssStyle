import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Catering</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
};