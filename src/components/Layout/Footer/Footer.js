import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiCopyright } from "react-icons/bi";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <Row className={classes.footer}>
        <Col>
          <Container>
            <footer>
              Copyright
              <strong>
                {" "}
                <BiCopyright size="1.2rem" /> Entrigna{" "}
              </strong>{" "}
              2022.
            </footer>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
