import React from "react";

import classes from "./CardImg.css";

const CardImg = (props) => {
  return (
    <div className={classes.CardImg}>
      <img src={props.image} alt="content img" />
      <div className={classes.CardAnimation}>
        <video>
          <source src={props.video} />
        </video>
      </div>
    </div>
  );
};

export default CardImg;
