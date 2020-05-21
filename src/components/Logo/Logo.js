import React from "react";
import Aux from "../../hoc/Aux/Aux";

import classes from "./Logo.css";
import svg from "../../assets/svg/logo.svg";

const Logo = () => {
  return (
    <Aux>
      <span className={classes.Logo}>
        <img src={svg} alt="nfLogo" />
      </span>
    </Aux>
  );
};

export default Logo;
