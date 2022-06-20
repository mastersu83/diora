import React from "react";
import classes from "./Slider.module.scss";
import SimpleImageSlider from "react-simple-image-slider";
import image from "../../assets/IndigoDesigns_BabyBoy_cl+(5)1.png";
import { useGetSliderImgQuery } from "../../services/galleryAPI";

const Slider = () => {
  const { data: sliderImg, isSuccess } = useGetSliderImgQuery({});

  return (
    <div className={classes.slider}>
      {isSuccess && (
        <SimpleImageSlider
          width={1200}
          height={750}
          images={sliderImg}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={2}
          slideDuration={2}
        />
      )}

      <img className={classes.slider__image} src={image} alt="BabyBoy" />
    </div>
  );
};

export default Slider;
