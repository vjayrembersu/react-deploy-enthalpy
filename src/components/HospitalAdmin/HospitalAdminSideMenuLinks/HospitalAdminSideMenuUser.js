import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import EnthalpySideMenuNavigationHeader from "../../UI/EnthalpyNavigation/EnthalpySideMenuNavigationHeader";
import EnthalpySideMenuSubNavigation from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation";
import EnthalpySideMenuHeader from "../../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";

// import classes from '../HospitalAdminSideMenuCommon.module.css';

const HospitalAdminSideMenuUser = () => {
  const [showUserSubLink, setShowUserSubLink] = useState(false);

  const onClickShowSubMenu = (onClickShowSubMenu) => {
    if (onClickShowSubMenu === "User")
      setShowUserSubLink((current) => !current);
  };
  return (
    <>
      <Row>
        <Col>
          <EnthalpySideMenuNavigationHeader
            onClickShowSubMenu={onClickShowSubMenu}
            showDisplaySideHeader="User"
            sendToLink="/hospital-admin/user"
          ></EnthalpySideMenuNavigationHeader>
        </Col>
      </Row>
      {showUserSubLink && (
        <>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Add-Hospital-Admin-User">
            <EnthalpySideMenuHeader setDisName="Add-Hospital-Admin-User"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Update-Hospital-Admin-User">
            <EnthalpySideMenuHeader setDisName="Update-Hospital-Admin-User"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Delete-Hospital-Admin-User">
            <EnthalpySideMenuHeader setDisName="Delete-Hospital-Admin-User"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
        </>
      )}
    </>
  );
};

export default HospitalAdminSideMenuUser;
