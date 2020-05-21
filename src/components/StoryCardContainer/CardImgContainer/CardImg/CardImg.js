import React from "react";

import classes from "./CardImg.css";

const CardImg = (props) => {
  let animationClasses = classes.WatchOnTvAnimation;
  if (props.class === "WatchOnDevice") {
    animationClasses = classes.WatchOnDeviceAnimation;
  }

  return (
    <div className={classes.CardImg}>
      <img src={props.image} alt="content img" />
      <div className={animationClasses}>
        <video>
          <source src={props.video} />
        </video>
      </div>
    </div>
  );
};

export default CardImg;
