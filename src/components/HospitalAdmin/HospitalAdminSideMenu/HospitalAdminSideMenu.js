import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import HospitalAdminSideMenuAppointments from "../HospitalAdminSideMenuLinks/HospitalAdminSideMenuAppointments";
import HospitalAdminSideMenuFacilities from "../HospitalAdminSideMenuLinks/HospitalAdminSideMenuFacilities";
import HospitalAdminSideMenuICDCodes from "../HospitalAdminSideMenuLinks/HospitalAdminSideMenuICDCodes";
import HospitalAdminSideMenuInsurance from "../HospitalAdminSideMenuLinks/HospitalAdminSideMenuInsurance";
import HospitalAdminSideMenuPractitioners from "../HospitalAdminSideMenuLinks/HospitalAdminSideMenuPractitioners";
import HospitalAdminSideMenuReffPractitioners from "../HospitalAdminSideMenuLinks/HospitalAdminSideMenuReffPractitioners";
import HospitalAdminSideMenuUser from "../HospitalAdminSideMenuLinks/HospitalAdminSideMenuUser";
import EnthalpyHorzLine from "../../Cart/EnthalpyHorzLine";
import SideViewPageHeaderDisplay from "../../Cart/SideViewPageHeaderDisplay";
import EnthalpyDiaplayMenuName from "../../UI/EnthalpyDisplayMenuName/EnthalpyDiaplayMenuName";

import classes from "./HospitalAdminSideMenu.module.css";
const HospitalAdminSideMenu = () => {
  return (
    <>
      {/* <Row className={classes.sideheaderBackground}>
        <Col sm={12} className={`${classes.sideBarHeader} text-center `}>
          <EnthalpyDiaplayMenuName setDisName="HospitalAdmin">
            <span>&nbsp;&nbsp;Hospital Admin</span>
          </EnthalpyDiaplayMenuName>
        </Col>
      </Row> */}
      <SideViewPageHeaderDisplay setDisName="HospitalAdmin"></SideViewPageHeaderDisplay>
      <HospitalAdminSideMenuUser></HospitalAdminSideMenuUser>
      <EnthalpyHorzLine></EnthalpyHorzLine>
      <HospitalAdminSideMenuInsurance></HospitalAdminSideMenuInsurance>
      <EnthalpyHorzLine></EnthalpyHorzLine>
      <HospitalAdminSideMenuICDCodes></HospitalAdminSideMenuICDCodes>
      <EnthalpyHorzLine></EnthalpyHorzLine>
      <HospitalAdminSideMenuPractitioners></HospitalAdminSideMenuPractitioners>
      <EnthalpyHorzLine></EnthalpyHorzLine>
      <HospitalAdminSideMenuReffPractitioners></HospitalAdminSideMenuReffPractitioners>
      <EnthalpyHorzLine></EnthalpyHorzLine>
      <HospitalAdminSideMenuFacilities></HospitalAdminSideMenuFacilities>
      <EnthalpyHorzLine></EnthalpyHorzLine>
      <HospitalAdminSideMenuAppointments></HospitalAdminSideMenuAppointments>
      <EnthalpyHorzLine></EnthalpyHorzLine>
    </>
  );
};

export default HospitalAdminSideMenu;
