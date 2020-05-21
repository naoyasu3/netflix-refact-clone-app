import React from "react";

import classes from "./TopCard.css";
import CardBackground from "./CardBackground/CardBackground";
import CardText from "./CardText/CardText";

const TopCard = () => {
  return (
    <div className={classes.TopCard}>
      <CardBackground />
      <CardText />
    </div>
  );
};

export default TopCard;
