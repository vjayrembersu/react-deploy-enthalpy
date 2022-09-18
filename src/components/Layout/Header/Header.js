import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Wrapper from "../../Helpers/Wrapper";
// import Home from "../../Home/Home";

import { FaUserMd, FaUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

import enthalpyLogo from "../../../assets/images/enthalpyLogo.png";

import classes from "./Header.module.css";

const Header = (props) => {
  const userSpecification = "drvivek.kapoor@gmail.com";
  return (
    <Row className={classes.headerDrop}>
      <Col>
        <Container>
          <Navbar.Brand href="/home">
            <img alt="" src={enthalpyLogo} />{" "}
          </Navbar.Brand>
        </Container>
      </Col>
      <Col>
        <Container className={classes.brandName}>
          <Navbar.Brand>Enthalpy</Navbar.Brand>
        </Container>
      </Col>
      <Col>
        <Navbar className={classes.colAlign}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  title={
                    <div style={{ display: "inline-block", color: "honeydew" }}>
                      <FaUserMd size="1.3rem" />{" "}
                      <span>&nbsp; {userSpecification}</span>{" "}
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    <Container>
                      <Row>
                        <Col sm={4}>
                          <FaUser />{" "}
                        </Col>
                        <Col sm={8}>My Account</Col>
                      </Row>
                    </Container>
                  </NavDropdown.Item>
                  <div className="dropdown-divider"></div>
                  <NavDropdown.Item href="#action/3.2">
                    <Container>
                      <Row>
                        <Col sm={4}>
                          <RiLogoutBoxRLine />{" "}
                        </Col>

                        <Col sm={8}> Logout</Col>
                      </Row>
                    </Container>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
