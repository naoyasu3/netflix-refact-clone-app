import React from "react";
import classes from "./Header.css";
import Logo from "../Logo/Logo";
import AuthLinks from "../AuthLinks/AuthLinks";

const Header = () => {
  return (
    <div className={classes.Header}>
      <Logo />
      <AuthLinks />
    </div>
  );
};

export default Header;
