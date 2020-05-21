import React from "react";

import classes from "./CardImgContainer.css";
import CardImg from "./CardImg/CardImg";

const CardImgContainer = (props) => {
  return (
    <div className={classes.CardImgContainer}>
      <CardImg image={props.image} video={props.video} />
    </div>
  );
};

export default CardImgContainer;
