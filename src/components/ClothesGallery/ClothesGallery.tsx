import React from "react";
import classes from "./ClothesGallery.module.scss";
import { ImageTypes } from "../../types/types";
import { useAppSelector } from "../../hooks/appHooks";
import HorizontalLoader from "../Loader/HorizontalLoader";
import VerticalLoader from "../Loader/VerticalLoader";

const ClothesGallery = () => {
  const { vertical, horizontal, imagesIsSuccess } = useAppSelector(
    (state) => state.gallery
  );

  return (
    <div className={classes.clothesGirl}>
      <p className={classes.clothesGirl__title}>
        Комплекты на выписку для девочек
      </p>
      <div className={classes.clothesGirl__items}>
        <div className={classes.clothesGirl__verticalItems}>
          {imagesIsSuccess
            ? vertical.map((i: ImageTypes) => (
                <img
                  className={classes.clothesGirl__item}
                  key={i.id}
                  src={i.url}
                  alt=""
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <VerticalLoader key={index} />)}
        </div>
        <div className={classes.clothesGirl__horizontalItems}>
          {imagesIsSuccess
            ? horizontal.map((i: ImageTypes) => (
                <img
                  className={classes.clothesGirl__item}
                  key={i.id}
                  src={i.url}
                  alt=""
                />
              ))
            : Array(3)
                .fill(0)
                .map((_, index) => <HorizontalLoader key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default ClothesGallery;
