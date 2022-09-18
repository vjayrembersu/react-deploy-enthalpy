import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import EnthalpySideMenuNavigationHeader from "../../UI/EnthalpyNavigation/EnthalpySideMenuNavigationHeader";
import EnthalpySideMenuSubNavigation from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation";
import EnthalpySideMenuHeader from "../../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";

const EnthalpyAdminSideMenuUpdatePMS = () => {
  const [showUpdatePMSlLink, setShowUpdatePMSLink] = useState(false);

  const onClickShowSubMenu = (onClickShowSubMenu) => {
    if (onClickShowSubMenu === "updatePMSInfo")
      setShowUpdatePMSLink((current) => !current);
  };
  return (
    <>
      <Row>
        <Col>
          <EnthalpySideMenuNavigationHeader
            onClickShowSubMenu={onClickShowSubMenu}
            showDisplaySideHeader="updatePMSInfo"
            sendToLink="/enthalpy-admin/updatePMS"
          ></EnthalpySideMenuNavigationHeader>
        </Col>
      </Row>

      {showUpdatePMSlLink && (
        <>
          <EnthalpySideMenuSubNavigation sendToLocation="/enthalpy-admin/UpdatePMSHospital">
            <EnthalpySideMenuHeader setDisName="UpdatePMSHospital"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
        </>
      )}
    </>
  );
};

export default EnthalpyAdminSideMenuUpdatePMS;
