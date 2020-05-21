import React from "react";

import classes from "./StoryCard.css";
import StoryCardContainer from "../../components/StoryCardContainer/StoryCardContainer";

const StoryCard = (props) => {
  return (
    <div className={classes.StoryCard}>
      <StoryCardContainer content={props.content} />
    </div>
  );
};

export default StoryCard;
