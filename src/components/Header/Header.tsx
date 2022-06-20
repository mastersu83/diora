import React from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/logo.png";
import headerImg from "../../assets/IndigoDesigns_BabyGirl_cl+(5)1.png";
import groupImg from "../../assets/Group1.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <img className={classes.header__logo} src={logo} alt="logo" />
      </div>
      <div>
        <img className={classes.header__img} src={headerImg} alt="headerImg" />
        <p>8(928)22-00-633</p>
        <p>E:mail diorakids@mail.ru</p>
      </div>
      <img className={classes.header__groupImg} src={groupImg} alt="groupImg" />
    </div>
  );
};

export default Header;
