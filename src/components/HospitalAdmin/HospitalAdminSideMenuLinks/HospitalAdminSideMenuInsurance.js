import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import EnthalpySideMenuNavigationHeader from "../../UI/EnthalpyNavigation/EnthalpySideMenuNavigationHeader";
import EnthalpySideMenuSubNavigation from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation";
import EnthalpySideMenuHeader from "../../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";

const HospitalAdminSideMenuInsurance = () => {
  const [showInsuranceSubLink, setShowInsuranceSubLink] = useState(false);

  const onClickShowSubMenu = (onClickShowSubMenu) => {
    if (onClickShowSubMenu === "Insurance")
      setShowInsuranceSubLink((current) => !current);
  };
  return (
    <>
      <Row>
        <Col>
          <EnthalpySideMenuNavigationHeader
            onClickShowSubMenu={onClickShowSubMenu}
            showDisplaySideHeader="Insurance"
            sendToLink="/hospital-admin/insurance"
          ></EnthalpySideMenuNavigationHeader>
        </Col>
      </Row>
      {showInsuranceSubLink && (
        <>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Add-Hospital-Admin-Insurance">
            <EnthalpySideMenuHeader setDisName="Add-Hospital-Admin-Insurance"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Update-Hospital-Admin-Insurance">
            <EnthalpySideMenuHeader setDisName="Update-Hospital-Admin-Insurance"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Delete-Hospital-Admin-Insurance">
            <EnthalpySideMenuHeader setDisName="Delete-Hospital-Admin-Insurance"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
        </>
      )}
    </>

    // <>
    //   <Row className={classes.sideheader}>
    //     <NavLink
    //       className={({ isActive }) => (isActive ? `${classes.active}` : "")}
    //       to="/hospital-admin/insurance" onClick={handleLinkClick}
    //     >
    //       <Col sm={12} className={`${classes.sideBarLinks}  `}>
    //         <HospitalAdminLinks getLinks="InsuranceSub"></HospitalAdminLinks>
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

export default HospitalAdminSideMenuInsurance;
