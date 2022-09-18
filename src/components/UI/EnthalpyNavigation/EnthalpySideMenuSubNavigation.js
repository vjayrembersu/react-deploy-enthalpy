import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import classes from "./EnthalpySideMenuSubNavigation.module.css";
const EnthalpySideMenuSubNavigation = (props) => {
  return (
    <Row>
      <Col md={{ span: 11, offset: 1 }}>
        <Row className={classes.sideBarLinks}>
          <NavLink
            className={({ isActive }) => (isActive ? `${classes.active}` : "")}
            to={props.sendToLocation}
          >
            {props.children}
          </NavLink>
        </Row>
      </Col>
    </Row>
  );
};

export default EnthalpySideMenuSubNavigation;
