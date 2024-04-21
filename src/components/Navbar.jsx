import "./Navbar.css"
import logo from "../assets/logo.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {

  const location = useLocation();

  const textColor = location.pathname === "/about" || location.pathname === "/contact" || location.pathname.includes("/products") ? "#131313" : "#FFFFFF";
  const inverLogo = location.pathname === "/about" || location.pathname === "/contact" || location.pathname.includes("/products") ? "" : "invert";

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    navigate(selectedValue);
  };

  return (
    <nav style={{color: textColor}} className="navbar">
      <Link to="/">
        <img className={`nav-logo ${inverLogo}`} src={logo} alt="brand logo" />
      </Link>
      <ul className='nav-menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>
          <select value={selectedOption} onChange={handleChange}>
            <option value="">Products</option>
            <option value="/products/se03-lite">SE03 Lite</option>
            <option value="/products/se03">SE03</option>
            <option value="/products/se03-max">SE03 Max</option>
            <option value="/products/compare">Compare</option>
          </select>
        </li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><button className='btn'>Pre-book Now</button></li>
      </ul>
    </nav>
  );
}

export default Navbar