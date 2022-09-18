import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import EnthalpySideMenuNavigationHeader from "../../UI/EnthalpyNavigation/EnthalpySideMenuNavigationHeader";
import EnthalpySideMenuSubNavigation from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation";
import EnthalpySideMenuHeader from "../../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";

const HospitalAdminSideMenuAppointments = () => {
  const [showAppointmentsSubLink, setShowAppointmentsSubLink] = useState(false);

  const onClickShowSubMenu = (onClickShowSubMenu) => {
    if (onClickShowSubMenu === "Appointments")
      setShowAppointmentsSubLink((current) => !current);
  };
  return (
    <Row>
      <Col>
        <EnthalpySideMenuNavigationHeader
          onClickShowSubMenu={onClickShowSubMenu}
          showDisplaySideHeader="Appointments"
          sendToLink="/hospital-admin/appointments"
        ></EnthalpySideMenuNavigationHeader>
      </Col>
      <Row>
        {showAppointmentsSubLink && (
          <>
            <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Add-Hospital-Admin-Appointments">
              <EnthalpySideMenuHeader setDisName="Add-Hospital-Admin-Appointments"></EnthalpySideMenuHeader>
            </EnthalpySideMenuSubNavigation>
            <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Manage-Interventions-Hospital-Admin-Appointments">
              <EnthalpySideMenuHeader setDisName="Manage-Interventions-Hospital-Admin-Appointments"></EnthalpySideMenuHeader>
            </EnthalpySideMenuSubNavigation>
          </>
        )}
      </Row>
    </Row>
    // <>
    //   <Row className={classes.sideheader}>
    //     <NavLink
    //       className={({ isActive }) => (isActive ? `${classes.active}` : "")}
    //       to="/hospital-admin/appointments"
    //       onClick={handleLinkClick}
    //     >
    //       <Col sm={12} className={`${classes.sideBarLinks}  `}>
    //         <HospitalAdminLinks getLinks="appointments"></HospitalAdminLinks>
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

export default HospitalAdminSideMenuAppointments;
