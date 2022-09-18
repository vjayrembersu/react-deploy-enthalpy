import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import classes from "./EnthalpyMain.module.css";

import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import TopMenu from "../Layout/TopMenu/TopMenu";
import Enthalpy from "../Enthalpy/Enthalpy";
import HomeMainBody from "../Home/HomeMainBody/HomeMainBody";
import HospitalAdminMainBody from "../HospitalAdmin/HospitalAdminMainBody/HospitalAdminMainBody";
import EnthalpyAdminMainBody from "../EnthalpyAdmin/EnthalpyAdminMainBody/EnthalpyAdminMainBody";
import { Row, Container } from "react-bootstrap";

function EnthalpyMain() {
  return (
    <>
      <Header />
      <TopMenu></TopMenu>
      <main>
        <Row className={classes.setMainBackground}>
          <Routes>
            <Route exact path="/" element={<Enthalpy pathname="home" />}>
              <Route exact path="/home" element={<Enthalpy pathname="home" />}>
                <Route exact path=":search" element={<HomeMainBody />} />{" "}
              </Route>
            </Route>

            <Route
              exact
              path="/hospital-admin"
              element={<Enthalpy pathname="hospitaladmin" />}
            >
              <Route
                exact
                path=":hosAdmin"
                element={<HospitalAdminMainBody />}
              />{" "}
            </Route>

            <Route
              exact
              path="/enthalpy-admin"
              element={<Enthalpy pathname="enthalpyadmin" />}
            >
              <Route
                exact
                path=":entAdmin"
                element={<EnthalpyAdminMainBody />}
              />{" "}
            </Route>

            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Row>
      </main>
      <Footer></Footer>
    </>
  );
}

export default EnthalpyMain;
