import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { link } from 'react-router-dom'

import HomeSideMenu from "../Home/HomeSideMenu/HomeSideMenu";
import HomeMainBody from "../Home/HomeMainBody/HomeMainBody";

import HospitalAdminSideMenu from "../HospitalAdmin/HospitalAdminSideMenu/HospitalAdminSideMenu";
import HospitalAdminMainBody from "../HospitalAdmin/HospitalAdminMainBody/HospitalAdminMainBody";

import EnthalpyAdminSideMenu from "../EnthalpyAdmin/EnthalpyAdminSideMenu/EnthalpyAdminSideMenu";
import EnthalpyAdminMainBody from "../EnthalpyAdmin/EnthalpyAdminMainBody/EnthalpyAdminMainBody";
// import Wrapper from "../Helpers/Wrapper";
import classes from "./Enthalpy.module.css";

const Enthalpy = (props) => {
  return (
    <section>
      <Container>
        <Row>
          <Col sm={4} className={classes.sideColSetting} id={classes.myTesting}>
            {/* {props.pathname === "/" && <link to={}} */}
            {props.pathname === "home" && <HomeSideMenu />}
            {props.pathname === "hospitaladmin" && <HospitalAdminSideMenu />}
            {props.pathname === "enthalpyadmin" && <EnthalpyAdminSideMenu />}
          </Col>
          {/* <span
            style={{
              borderLeft: "8px solid dimgray",
              height: "82vh",
              position: "absolute",
              left: "35%",
            }}
          ></span> */}
          <Col sm={8} className={`${classes.verticaLine} ${classes.mainColSetting}`}>
            {props.pathname === "home" && <HomeMainBody />}
            {props.pathname === "hospitaladmin" && <HospitalAdminMainBody />}
            {props.pathname === "enthalpyadmin" && <EnthalpyAdminMainBody />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Enthalpy;
