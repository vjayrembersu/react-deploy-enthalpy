import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import EnthalpySideMenuNavigationHeader from "../../UI/EnthalpyNavigation/EnthalpySideMenuNavigationHeader";
import EnthalpySideMenuSubNavigation from "../../UI/EnthalpyNavigation/EnthalpySideMenuSubNavigation";
import EnthalpySideMenuHeader from "../../UI/EnthalpySideMenuHeader/EnthalpySideMenuHeader";

const EnthalpyAdminSideMenuPrePopulated = () => {
  const [showPrePopulatedlLink, setShowPrePopulatedLink] = useState(false);

  const onClickShowSubMenu = (onClickShowSubMenu) => {
    if (onClickShowSubMenu === "prePopulatedhospitalinfo")
      setShowPrePopulatedLink((current) => !current);
  };
  return (
    <>
      <Row>
        <Col>
          <EnthalpySideMenuNavigationHeader
            onClickShowSubMenu={onClickShowSubMenu}
            showDisplaySideHeader="prePopulatedhospitalinfo"
            sendToLink="/enthalpy-admin/prePopulatedhospital"
          ></EnthalpySideMenuNavigationHeader>
        </Col>
      </Row>
      {showPrePopulatedlLink && (
        <>
          <EnthalpySideMenuSubNavigation sendToLocation="/enthalpy-admin/ViewPrePopulatedHospital">
            <EnthalpySideMenuHeader setDisName="ViewPrePopulatedHospital"></EnthalpySideMenuHeader>
          </EnthalpySideMenuSubNavigation>
        </>
      )}
    </>
  );
};

export default EnthalpyAdminSideMenuPrePopulated;
