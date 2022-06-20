import React from "react";
import classes from "./Menu.module.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
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
        to="other"
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
