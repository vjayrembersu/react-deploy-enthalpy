import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

import EnthalpySideMenuNavigationHeader from "../../UI/EnthalpyNavigation/EnthalpySideMenuNavigationHeader";
import EnthalpySideMenuSubNavigation from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation";
import EnthalpyNavigation from "../../UI/EnthalpyNavigation/EnthalpyNavigation";
import EnthalpyDiaplayMenuName from "../../UI/EnthalpyDisplayMenuName/EnthalpyDiaplayMenuName";
// import classes from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation.module.css";
import EnthalpySideMenuLinks from "../../UI/EnthalpySideMenuLinks/EnthalpySideMenuLinks";

import EnthalpySideMenuHeader from "../../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";
const HomeSideMenuLinksFilter = () => {
  const [showFilterSearchLink, setShowFilterSearchLink] = useState(false);

  const onClickShowSubMenu = (onClickShowSubMenu) => {
    if (onClickShowSubMenu === "FilterSearch")
    setShowFilterSearchLink((current) => !current);
  };
  return (
    <>
      <Row>
        <Col>
          <EnthalpySideMenuNavigationHeader
            onClickShowSubMenu={onClickShowSubMenu}
            showDisplaySideHeader="FilterSearch"
            sendToLink="/home/filter"
          ></EnthalpySideMenuNavigationHeader>
        </Col>
      </Row>

      {showFilterSearchLink && (
        <>
          <EnthalpySideMenuSubNavigation sendToLocation="/home/filterSearch">
            <EnthalpySideMenuHeader setDisName="filterSearch"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          

        </>
      )}
    </>
  );
};

export default HomeSideMenuLinksFilter;
