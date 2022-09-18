import React from "react";
import {Row, Col} from "react-bootstrap";



import EnthalpyHeadersView from "../../../../Cart/EnthalpyHeadersView";
import Testime from "./Testime";

const AddFacilitiesBreakTime = () => {
  return (
    <>
      <Row>
        <Col sm={6}>
          <EnthalpyHeadersView setHedearName="Lunch Break Start Time"></EnthalpyHeadersView>
          <br></br>
          <Testime  setTime="Start" />
        </Col>
        <Col sm={6}>
          <EnthalpyHeadersView setHedearName="Lunch Break End Time"></EnthalpyHeadersView>
          <br></br>
        <Testime setTime="End" />
        </Col>
      </Row>
    </>
  );
};

export default AddFacilitiesBreakTime;
