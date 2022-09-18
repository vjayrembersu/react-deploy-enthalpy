import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import TopSelectHospital from "./TopSelectHospital";
import TopMenuNavigation from "./TopMenuNavigation";


import classes from "./TopMenu.module.css";

const TopMenu = () => {
  return (
    <>
      <Row>
        <Col className={classes.topMenu}>
          <Container>
            <Row className="d-flex justify-content-between">
              <Col sm={3}>
                <TopSelectHospital></TopSelectHospital>
              </Col>
              <Col sm={9}>
                <Row className="d-flex justify-content-between">
                  <TopMenuNavigation></TopMenuNavigation>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default TopMenu;
