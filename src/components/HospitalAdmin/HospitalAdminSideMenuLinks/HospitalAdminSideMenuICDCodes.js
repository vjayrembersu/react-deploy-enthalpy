import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import EnthalpySideMenuNavigationHeader from "../../UI/EnthalpyNavigation/EnthalpySideMenuNavigationHeader";
import EnthalpySideMenuSubNavigation from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation";
import EnthalpySideMenuHeader from "../../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";

const HospitalAdminSideMenuICDCodes = () => {
  const [showIcdCodesSubLink, setShowIcdCodesSubLink] = useState(false);

  const onClickShowSubMenu = (onClickShowSubMenu) => {
    if (onClickShowSubMenu === "IcdCodes")
      setShowIcdCodesSubLink((current) => !current);
  };
  return (
    <>
      <Row>
        <Col>
          <EnthalpySideMenuNavigationHeader
            onClickShowSubMenu={onClickShowSubMenu}
            showDisplaySideHeader="IcdCodes"
            sendToLink="/hospital-admin/icd-codes"
          ></EnthalpySideMenuNavigationHeader>
        </Col>
      </Row>
      {showIcdCodesSubLink && (
        <>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Add-Hospital-Admin-ICD-Codes">
            <EnthalpySideMenuHeader setDisName="Add-Hospital-Admin-ICD-Codes"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Manage-Interventions-Hospital-Admin-ICD-Codes">
            <EnthalpySideMenuHeader setDisName="Manage-Interventions-Hospital-Admin-ICD-Codes"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Manage-Non-Interventions-Hospital-Admin-ICD-Codes">
            <EnthalpySideMenuHeader setDisName="Manage-Non-Interventions-Hospital-Admin-ICD-Codes"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
        </>
      )}
    </>
  );
};

export default HospitalAdminSideMenuICDCodes;
