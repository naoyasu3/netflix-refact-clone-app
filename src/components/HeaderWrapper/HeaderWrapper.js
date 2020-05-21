import React from "react";
import classes from "./HeaderWrapper.css";
import Header from "../Header/Header";

const HeaderWrapper = () => {
  return (
    <div className={classes.HeaderWrapper}>
      <Header />
    </div>
  );
};

export default HeaderWrapper;
