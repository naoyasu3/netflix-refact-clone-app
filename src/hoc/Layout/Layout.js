import React, { Component } from "react";
import Aux from "../Aux/Aux";

import classes from "./Layout.css";
import HeaderWrapper from "../../components/HeaderWrapper/HeaderWrapper";
import MainWrapper from "../../components/MainWrapper/MainWrapper";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.Layout}>
          <HeaderWrapper />
          <MainWrapper />
        </div>
      </Aux>
    );
  }
}

export default Layout;
