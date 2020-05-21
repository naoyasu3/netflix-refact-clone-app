import React from "react";

import classes from "./MainWrapper.css";
import TopCard from "../TopCard//TopCard";
import StoryCard from "../../containers/StoryCard/StoryCard";

const MainWrapper = () => {
  return (
    <div className={classes.MainWrapper}>
      <TopCard />
      <StoryCard />
    </div>
  );
};

export default MainWrapper;
