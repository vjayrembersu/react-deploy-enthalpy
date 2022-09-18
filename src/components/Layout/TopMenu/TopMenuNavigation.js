import React from "react";
import { Row, Col } from "react-bootstrap";

import EnthalpyDiaplayMenuName from "../../UI/EnthalpyDisplayMenuName/EnthalpyDiaplayMenuName";
import EnthalpyNavigation from "../../UI/EnthalpyNavigation/EnthalpyNavigation";
import classes from "./TopMenuNavigation.module.css";

const TopMenuNavigation = () => {
  return (
    <Col className={classes.topMenuHeader}>
      <Row>
        <Col className="text-center ">
          <EnthalpyNavigation topNav="1" sendToLink="/home">
            <EnthalpyDiaplayMenuName setDisName="Home">
            </EnthalpyDiaplayMenuName>
          </EnthalpyNavigation>
        </Col>

        <Col className="text-center ">
          <EnthalpyNavigation topNav="1" sendToLink="/hospital-admin">
            <EnthalpyDiaplayMenuName setDisName="HospitalAdmin">
            </EnthalpyDiaplayMenuName>
          </EnthalpyNavigation>
        </Col>

        <Col className="text-center ">
          <EnthalpyNavigation topNav="1" sendToLink="/enthalpy-admin">
            <EnthalpyDiaplayMenuName setDisName="EnthalpyAdmin">
            </EnthalpyDiaplayMenuName>
          </EnthalpyNavigation>
        </Col>
      </Row>
    </Col>
  );
};

export default TopMenuNavigation;
