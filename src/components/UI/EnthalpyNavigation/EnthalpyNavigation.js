import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./EnthalpyNavigation.module.css";

const EnthalpyNavigation = (props) => {
  return (
    <>
      <span className={props.topNav == 1 ? classes.headerNav : ""}>
        <NavLink
          className={({ isActive }) => (isActive ? `${classes.active}` : "")}
          to={props.sendToLink}
        >
          {props.children}
        </NavLink>
      </span>
    </>
  );
};

export default EnthalpyNavigation;
