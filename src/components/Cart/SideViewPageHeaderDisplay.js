import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import EnthalpyDiaplayMenuName from "../UI/EnthalpyDisplayMenuName/EnthalpyDiaplayMenuName";
import classes from "./cartCommon.module.css";

const SideViewPageHeaderDisplay = (props) => {
  return (
    <>
      <Row className={classes.sideheaderBackground}>
        <Col sm={12} className={`${classes.sideBarHeader} text-center `}>
          <EnthalpyDiaplayMenuName setDisName={props.setDisName}>
            <span>&nbsp;&nbsp;{props.setDisName}</span>
          </EnthalpyDiaplayMenuName>
        </Col>
      </Row>
    </>
  );
};

export default SideViewPageHeaderDisplay;
