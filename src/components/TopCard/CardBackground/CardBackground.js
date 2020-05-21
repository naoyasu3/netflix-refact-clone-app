import React from "react";

import classes from "./CardBackground.css";
import img from "../../../assets/img/bg.jpg";

const CardBackground = () => {
  return (
    <div className={classes.CardBackground}>
      <div className={classes.ImgWrapper}>
        <img src={img} alt="背景画像" />
        <div className={classes.concordImgGradient}></div>
      </div>
    </div>
  );
};

export default CardBackground;
