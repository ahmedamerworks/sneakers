import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Hive 22 <i className="fas fa-solid fa-meteor" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className={click ? "nav-links" : "nav-links text-focus-in"}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/brand"
                className={click ? "nav-links" : "nav-links text-focus-in"}
                onClick={closeMobileMenu}
              >
                Brand 22
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/product"
                className={click ? "nav-links" : "nav-links text-focus-in"}
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" link="/signup">
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
