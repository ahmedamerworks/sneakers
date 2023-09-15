import React from "react";
import Button from "../button/Button";

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
      </div>
    </>
  );
};

export default Footer;
