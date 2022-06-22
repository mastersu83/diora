import React from "react";
import classes from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Slider from "./components/Slider/Slider";
import ClothesGallery from "./components/ClothesGallery/ClothesGallery";
import Clothes from "./components/Сlothes/Clothes";
import BG from "./assets/IndigoDesigns_BabyGirl_pp+(7)1.jpg";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className={classes.App}>
      <img className={classes.bg} src={BG} alt="" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Slider />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="girl-cloth" element={<ClothesGallery />} />
          <Route path="boy-cloth" element={<ClothesGallery />} />
          <Route path="others-cloth" element={<ClothesGallery />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
