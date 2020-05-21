import React from "react";
import Aux from "../../hoc/Aux/Aux";

import classes from "./AuthLinks.css";

const AuthLinks = () => {
  return (
    <Aux>
      <a className={classes.AuthLinks} href="/">
        ログイン
      </a>
    </Aux>
  );
};

export default AuthLinks;
