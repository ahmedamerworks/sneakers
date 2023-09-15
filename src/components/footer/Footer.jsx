import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription_heading">
            Join our newsletter to recieve our best deals on comfort!
          </p>
          <p className="footer-subscription_text">text2</p>
          <div className="input-areas">
            <form action="">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="footer-input"
              />
              <Button buttonStyle="btn--outline">Subscribe!</Button>
            </form>
          </div>
        </section>
        <div className="footer-link">
          <div className="footer-link_wrapper">
            <div className="footer-link_item">
              <h2>About Us</h2>
              {/* Links are just for show - no function yet */}
              <Link to="/">Company Mission Statement</Link>
              <Link to="/">Terms of Services</Link>
              <Link to="/">Partners</Link>
            </div>
            <div className="footer-link_item">
              <h2>Work With Us</h2>
              <Link to="/">Careers</Link>
              <Link to="/">Sponsorships</Link>
              <Link to="/">Represent Us</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media_wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                Hive 22 <i className="fas fa-solid fa-meteor" />
              </Link>
            </div>
            <small className="website-rights">All rights reserved © 2023</small>
            <div className="social-icons">
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
