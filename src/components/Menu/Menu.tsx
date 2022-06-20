import React from "react";
import classes from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/appHooks";
import { getImages } from "../../services/galleryAPI";
import { getPathName } from "../../utils/utils";

const Menu = () => {
  const dispatch = useAppDispatch();

  const getOthersImages = (key: string | undefined) => {
    dispatch(getImages(getPathName(key)));
  };
  return (
    <ul className={classes.menu}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.menu__activeLink : "")}
      >
        <li className={`${classes.menu__link} `}>ГЛАВНАЯ</li>
      </NavLink>
      <NavLink
        to="clothes"
        className={({ isActive }) => (isActive ? classes.menu__activeLink : "")}
      >
        <li className={classes.menu__link}>НАРЯДНАЯ ОДЕЖДА</li>
      </NavLink>
      <NavLink
        onClick={() => getOthersImages("other")}
        to="others"
        className={({ isActive }) => (isActive ? classes.menu__activeLink : "")}
      >
        <li className={classes.menu__link}>КОНВЕРТЫ, ПЛЕДЫ, КОРЗИНЫ</li>
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) => (isActive ? classes.menu__activeLink : "")}
      >
        <li className={classes.menu__link}>КОНТАКТЫ</li>
      </NavLink>
    </ul>
  );
};

export default Menu;
