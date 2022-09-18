import React from "react";

import EnthalpyHorzLine from "../../Cart/EnthalpyHorzLine";
import SideViewPageHeaderDisplay from "../../Cart/SideViewPageHeaderDisplay";

import EnthalpyAdminSideMenuPrePopulated from "../EnthalpyAdminSideMenuLinks/EnthalpyAdminSideMenuPrePopulated";
import EnthalpyAdminSideMenuHospital from "../EnthalpyAdminSideMenuLinks/EnthalpyAdminSideMenuHospital";
import EnthalpyAdminSideMenuUpdatePMS from "../EnthalpyAdminSideMenuLinks/EnthalpyAdminSideMenuUpdatePMS";

// import classes from "./EnthalpyAdminSideMenu.module.css";

const EnthalpyAdminSideMenu = () => {
  return (
    <>
      <SideViewPageHeaderDisplay setDisName="EnthalpyAdmin"></SideViewPageHeaderDisplay>

      <EnthalpyAdminSideMenuHospital></EnthalpyAdminSideMenuHospital>
      <EnthalpyHorzLine></EnthalpyHorzLine>

      <EnthalpyAdminSideMenuUpdatePMS></EnthalpyAdminSideMenuUpdatePMS>
      <EnthalpyHorzLine></EnthalpyHorzLine>

      <EnthalpyAdminSideMenuPrePopulated></EnthalpyAdminSideMenuPrePopulated>
      <EnthalpyHorzLine></EnthalpyHorzLine>
    </>
  );
};

export default EnthalpyAdminSideMenu;
