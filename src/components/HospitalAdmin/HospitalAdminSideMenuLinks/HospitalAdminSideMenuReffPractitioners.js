import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import EnthalpySideMenuNavigationHeader from "../../UI/EnthalpyNavigation/EnthalpySideMenuNavigationHeader";
import EnthalpySideMenuSubNavigation from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation";
import EnthalpySideMenuHeader from "../../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";

const HospitalAdminSideMenuReffPractitioners = () => {
  const [showReffPractitionersSubLink, setShowReffPractitionersSubLink] =
    useState(false);

  const onClickShowSubMenu = (onClickShowSubMenu) => {
    if (onClickShowSubMenu === "ReffPractitioners")
      setShowReffPractitionersSubLink((current) => !current);
  };
  return (
    <>
      <Row>
        <Col>
          <EnthalpySideMenuNavigationHeader
            onClickShowSubMenu={onClickShowSubMenu}
            showDisplaySideHeader="ReffPractitioners"
            sendToLink="/hospital-admin/reff-practitioners"
          ></EnthalpySideMenuNavigationHeader>
        </Col>
      </Row>
      {showReffPractitionersSubLink && (
        <>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Add-Hospital-Admin-Reff-Practitioners">
            <EnthalpySideMenuHeader setDisName="Add-Hospital-Admin-Reff-Practitioners"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Manage-Hospital-Admin-Reff-Practitioners">
            <EnthalpySideMenuHeader setDisName="Manage-Hospital-Admin-Reff-Practitioners"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
        </>
      )}
    </>

    // <>
    //   <Row className={classes.sideheader}>
    //     <NavLink
    //       className={({ isActive }) => (isActive ? `${classes.active}` : "")}
    //       to="/hospital-admin/reff-practitioners" onClick={handleLinkClick}
    //     >
    //       <Col sm={12} className={`${classes.sideBarLinks}  `}>
    //         <HospitalAdminLinks getLinks="ReffPractitionersSub"></HospitalAdminLinks>
    //       </Col>
    //     </NavLink>
    //     <Row>
    //       {showLink && (
    //         <>
    //           <Col sm={12}>whate</Col>
    //           <Col sm={12}>whate</Col>
    //           <Col sm={12}>whate</Col>
    //         </>
    //       )}
    //     </Row>
    //   </Row>
    // </>
  );
};

export default HospitalAdminSideMenuReffPractitioners;
