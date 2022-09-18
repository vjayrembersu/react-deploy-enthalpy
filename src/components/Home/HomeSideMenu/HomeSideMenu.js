import React from "react";

import { Row, Col, Container } from "react-bootstrap";

import HomeSideMenuLinksFilter from "../HomeSideMenuLinks/HomeSideMenuLinksFilter.js";
import EnthalpyDiaplayMenuName from "../../UI/EnthalpyDisplayMenuName/EnthalpyDiaplayMenuName";
import EnthalpyHorzLine from "../../Cart/EnthalpyHorzLine";
import SideViewPageHeaderDisplay from "../../Cart/SideViewPageHeaderDisplay";
import classes from "./HomeSideMenu.module.css";

const HomeSideMenu = () => {
 
  return (
    <>
    <SideViewPageHeaderDisplay setDisName="Home"></SideViewPageHeaderDisplay>
      {/* <Row className={classes.sideheaderBackground}>
        <Col sm={12} className={`${classes.sideBarHeader} text-center `}>
          <EnthalpyDiaplayMenuName setDisName="Home">
            <span>&nbsp;&nbsp;Home</span>
          </EnthalpyDiaplayMenuName>
        </Col>
      </Row> */}

      <HomeSideMenuLinksFilter></HomeSideMenuLinksFilter>
      <EnthalpyHorzLine></EnthalpyHorzLine>

      {/* <EnthalpySideMenuSubNavigation sendToLocation="/home/search1">
        <EnthalpySideMenuHeader setDisName="filterSearch"></EnthalpySideMenuHeader>
      </EnthalpySideMenuSubNavigation> */}
    </>
  );
};

export default HomeSideMenu;
