import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import EnthalpySideMenuNavigationHeader from "../../UI/EnthalpyNavigation/EnthalpySideMenuNavigationHeader";
import EnthalpySideMenuSubNavigation from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation";
import EnthalpySideMenuHeader from "../../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";

const HospitalAdminSideMenuFacilities = () => {
  const [showFacilitiesSubLink, setShowFacilitiesSubLink] = useState(false);

  const onClickShowSubMenu = (onClickShowSubMenu) => {
    if (onClickShowSubMenu === "Facilities")
      setShowFacilitiesSubLink((current) => !current);
  };
  return (
    <>
      <Row>
        <Col>
          <EnthalpySideMenuNavigationHeader
            onClickShowSubMenu={onClickShowSubMenu}
            showDisplaySideHeader="Facilities"
            sendToLink="/hospital-admin/facilities"
          ></EnthalpySideMenuNavigationHeader>
        </Col>
      </Row>
      {showFacilitiesSubLink && (
        <>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Add-Hospital-Admin-Facilities">
            <EnthalpySideMenuHeader setDisName="Add-Hospital-Admin-Facilities"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
          <EnthalpySideMenuSubNavigation sendToLocation="/hospital-admin/Manage-Hospital-Admin-Facilities">
            <EnthalpySideMenuHeader setDisName="Manage-Hospital-Admin-Facilities"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
        </>
      )}
    </>
  );
};

export default HospitalAdminSideMenuFacilities;
