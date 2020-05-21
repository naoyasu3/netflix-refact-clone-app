import React from "react";

import classes from "./StoryCardContainer.css";
import CardText from "./CardText/CardText";
import CardImgContainer from "./CardImgContainer/CardImgContainer";

const StoryCardContainer = (props) => {
  let flippedClass = [classes.StoryCardContainer];
  if (props.content.flipped) {
    flippedClass = [classes.StoryCardContainer, classes.Flipped];
  }
  return (
    <div className={flippedClass.join(" ")}>
      <CardText
        headline={props.content.headline}
        subHeadline={props.content.subHeadline}
      />
      <CardImgContainer
        image={props.content.image}
        video={props.content.video}
        class={props.content.class}
      />
    </div>
  );
};

export default StoryCardContainer;
