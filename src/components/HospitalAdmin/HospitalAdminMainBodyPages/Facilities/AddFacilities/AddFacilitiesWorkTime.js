import React from "react";
import {Row, Col} from "react-bootstrap";

import EnthalpyHeadersView from "../../../../Cart/EnthalpyHeadersView";
import Testime from "./Testime";

const AddFacilitiesWorkTime = () => {
  return (
    <>
      <Row className="mb-3">
        <Col sm={6}>
          <EnthalpyHeadersView setHedearName="Work Day Start Time"></EnthalpyHeadersView>
          <br></br>
          <Testime  setTime="Start" />
       </Col>
        <Col sm={6}>
          <EnthalpyHeadersView setHedearName="Work Day End Time"></EnthalpyHeadersView>
          <br></br>
          <Testime  setTime="End" />
        </Col>
      </Row>
    </>
  );
};

export default AddFacilitiesWorkTime;
