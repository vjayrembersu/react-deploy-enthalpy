import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import EnthalpySideMenuHeader from "../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";
import classes from "./cartCommon.module.css";

const MainViewPageHeaderDisplay = (props) => {
  // console.log(props.setDisName)
  return (
    <>
      <Row className={classes.sideheaderBackground}>
        <Col sm={12} className={`${classes.sideBarHeader} text-center `}>
          {/* {props.setDisName !== undefined && ( */}
            <EnthalpySideMenuHeader setCondition={props.setCondition} setDisName={props.setDisName}>
              <span>&nbsp;&nbsp;{props.setDisName}</span>
            </EnthalpySideMenuHeader>
          {/* )} */}
        </Col>
      </Row>
    </>
  );
};

export default MainViewPageHeaderDisplay;
