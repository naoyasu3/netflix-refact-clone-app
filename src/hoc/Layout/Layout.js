import React, { Component } from "react";

import classes from "./Layout.css";
import HeaderWrapper from "../../components/HeaderWrapper/HeaderWrapper";
import MainWrapper from "../../components/MainWrapper/MainWrapper";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <HeaderWrapper />
        <MainWrapper />
      </div>
    );
  }
}

export default Layout;
