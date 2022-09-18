import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import EnthalpySideMenuNavigationHeader from "../../UI/EnthalpyNavigation/EnthalpySideMenuNavigationHeader";
import EnthalpySideMenuSubNavigation from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation";
import EnthalpySideMenuHeader from "../../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";

const HospitalAdminSideMenuPractitioners = () => {
  const [showPractitionersSubLink, setShowPractitionersSubLink] =
    useState(false);

  const onClickShowSubMenu = (onClickShowSubMenu) => {
    if (onClickShowSubMenu === "Practitioners")
      setShowPractitionersSubLink((current) => !current);
  };
  return (
    <>
      <Row>
        <Col>
          <EnthalpySideMenuNavigationHeader
            onClickShowSubMenu={onClickShowSubMenu}
            showDisplaySideHeader="Practitioners"
            sendToLink="/hospital-admin/practitioners"
          ></EnthalpySideMenuNavigationHeader>
        </Col>
      </Row>
      {showPractitionersSubLink && (
        <>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Add-Hospital-Admin-Practitioners">
            <EnthalpySideMenuHeader setDisName="Add-Hospital-Admin-Practitioners"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Manage-Hospital-Admin-Practitioners">
            <EnthalpySideMenuHeader setDisName="Manage-Hospital-Admin-Practitioners"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Accepted-Insurance-Hospital-Admin-Practitioners">
            <EnthalpySideMenuHeader setDisName="Accepted-Insurance-Hospital-Admin-Practitioners"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Associated-Appointment-Hospital-Admin-Practitioners">
            <EnthalpySideMenuHeader setDisName="Associated-Appointment-Hospital-Admin-Practitioners"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Supported-Referrals-Hospital-Admin-Practitioners">
            <EnthalpySideMenuHeader setDisName="Supported-Referrals-Hospital-Admin-Practitioners"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
        </>
      )}
    </>

    // <>
    //   <Row className={classes.sideheader}>
    //     <NavLink
    //       className={({ isActive }) => (isActive ? `${classes.active}` : "")}
    //       to="/hospital-admin/practitioners" onClick={handleLinkClick}
    //     >
    //       <Col sm={12} className={`${classes.sideBarLinks}  `}>
    //         <HospitalAdminLinks getLinks="PractitionersSub"></HospitalAdminLinks>
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

export default HospitalAdminSideMenuPractitioners;
