import React from "react";
import classes from "./Main.module.scss";
import Menu from "../Menu/Menu";
import ClothesGallery from "../ClothesGallery/ClothesGallery";

const Main = () => {
  return (
    <div className={classes.main}>
      <Menu />
      {/*<Slider />*/}
      {/*<Clothes />*/}
      <ClothesGallery />
    </div>
  );
};

export default Main;
