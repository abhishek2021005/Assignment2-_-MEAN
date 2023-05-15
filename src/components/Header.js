import { useState } from "react";
// import { LOGO_URL } from "../utils/constants";
import LOGO from "../assets/img/food-logo.jpeg";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
        {isLoggedIn ? (
          <button className="log-btn" onClick={() => setIsLoggedIn(false)}>
            LogOut
          </button>
        ) : (
          <button className="log-btn" onClick={() => setIsLoggedIn(true)}>
            LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
