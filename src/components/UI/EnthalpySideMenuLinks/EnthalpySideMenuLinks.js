import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImFilter } from "react-icons/im";

// import classes from "./EnthalpySideMenuLinks.module.css";

const EnthalpySideMenuLinks = (props) => {
  let Icons = "";
  if (props.setSideMenuName === "Filter") {
    Icons = ImFilter;
  }

  return (
    <Row style={{ height: "2.5rem", padding: "0.5rem", fontSize: "1rem" }}>
      <Col sm={2}>
        <Icons
          style={{
            color: "black",
            fontSize: "1.2rem",
            marginTop: "-5px",
          }}
        />
      </Col>
      <Col sm={10}>{props.children}</Col>
    </Row>
  );
};

export default EnthalpySideMenuLinks;
