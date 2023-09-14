import React from "react";

import { Link } from "react-router-dom";

function Cardcode(props) {
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item_link" to={props.path}>
          <figure className="cards-item_pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="img tag template for cardcodes of various sneakers"
              className="cards-item_img"
            />
          </figure>
          <div className="cards-item_info">
            <h5 className="cards-item_info-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Cardcode;
