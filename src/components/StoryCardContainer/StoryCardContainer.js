import React from "react";

import classes from "./StoryCardContainer.css";
import CardText from "./CardText/CardText";
import CardImgContainer from "./CardImgContainer/CardImgContainer";

const StoryCardContainer = (props) => {
  return (
    <div className={classes.StoryCardContainer}>
      <CardText
        headline={props.content.headline}
        subHeadline={props.content.subHeadline}
      />
      <CardImgContainer
        image={props.content.image}
        video={props.content.video}
      />
    </div>
  );
};

export default StoryCardContainer;
