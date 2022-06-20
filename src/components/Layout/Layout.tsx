import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import classes from "../Main/Main.module.scss";

const Layout = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
