import React from "react";
import "./hero.css";
import sneakerVid from "../../images/sneaker-vid.mp4";
import Button from "../button/Button";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <video src={sneakerVid} autoPlay loop muted />
        <h1>Dive Into Comfort</h1>
        <div className="hero-buttons">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            link="/product"
          >
            Look Inside the Vault
          </Button>
          {/* <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Second Button
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
