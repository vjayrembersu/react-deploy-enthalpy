import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import EnthalpySideMenuNavigationHeader from "../../UI/EnthalpyNavigation/EnthalpySideMenuNavigationHeader";
import EnthalpySideMenuSubNavigation from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation";

import EnthalpySideMenuHeader from "../../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";
const EnthalpyAdminSideMenuHospital = () => {
  const [showHospitalLink, setShowHospitalLink] = useState(false);

  const onClickShowSubMenu = (onClickShowSubMenu) => {
    if (onClickShowSubMenu === "Hospital")
      setShowHospitalLink((current) => !current);
  };
  return (
    <>
      <Row>
        <Col>
          <EnthalpySideMenuNavigationHeader
            onClickShowSubMenu={onClickShowSubMenu}
            showDisplaySideHeader="Hospital"
            sendToLink="/enthalpy-admin/hospital"
          ></EnthalpySideMenuNavigationHeader>
        </Col>
      </Row>

      {showHospitalLink && (
        <>
          <EnthalpySideMenuSubNavigation sendToLocation="/enthalpy-admin/AddHospital">
            <EnthalpySideMenuHeader setDisName="AddHospital"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>

          <EnthalpySideMenuSubNavigation sendToLocation="/enthalpy-admin/UpdateHospital">
            <EnthalpySideMenuHeader setDisName="UpdateHospital"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
        </>
      )}
    </>
  );
};

export default EnthalpyAdminSideMenuHospital;
