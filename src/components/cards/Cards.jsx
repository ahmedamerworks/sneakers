import React from "react";
import Cardcode from "./Cardcode";
import "./cards.css";

import yellowShoe from "../../images/sneakers_yellow.jpg";
import greenShoe from "../../images/sneakers_nike_green.jpg";
import redShoe from "../../images/sneakers_red.jpg";
import blueShoe from "../../images/sneakers_vuitton_blue.jpg";

function Cards() {
  return (
    <>
      <div className="cards">
        {/* <h2>Brand 22</h2> */}
        <div className="cards-container">
          <div className="cards-wrapper">
            <ul className="cards-items">
              <Cardcode
                src={yellowShoe}
                text="Sleek and Agile"
                label="Style"
                path="/products"
              />
              <Cardcode
                src={greenShoe}
                text="Comfortable and Functional"
                label="Sport"
                path="/products"
              />
            </ul>
            <ul className="cards-items">
              <Cardcode
                src={blueShoe}
                text="Super fashionable"
                label="Style"
                path="/products"
              />
              <Cardcode
                src={redShoe}
                text="Maximum energy"
                label="Sport"
                path="/products"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
