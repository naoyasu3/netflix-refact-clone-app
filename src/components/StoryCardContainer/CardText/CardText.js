import React from "react";

import classes from "./CardText.css";

const CardText = (props) => {
  return (
    <div className={classes.CardText}>
      <h1>{props.headline}</h1>
      <h2>{props.subHeadline}</h2>
    </div>
  );
};

export default CardText;
