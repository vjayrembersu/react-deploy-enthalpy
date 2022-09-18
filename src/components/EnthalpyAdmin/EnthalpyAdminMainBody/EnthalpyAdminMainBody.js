import React from "react";
import { useParams } from "react-router-dom";

import EnthalpyHospitalAddPage from "../../EnthalpyAdmin/EnthalpyAdminMainBodyPages/EnthalpyHospital/EnthalpyHospitalAddPage";

import MainViewPageHeaderDisplay from "../../Cart/MainViewPageHeaderDisplay";
const EnthalpyAdminMainBody = () => {
  const params = useParams();

  const traceLocation = params.entAdmin;

  return (
    <>
      <MainViewPageHeaderDisplay
        setCondition="headSet"
        setDisName={traceLocation}
      ></MainViewPageHeaderDisplay>
      {traceLocation === "AddHospital" ? <EnthalpyHospitalAddPage /> : ""}
      {traceLocation === "UpdateHospital" ? "you are on the right track 2" : ""}
      {traceLocation === "ViewPrePopulatedHospital"
        ? "you are on the right track 3"
        : ""}
      {traceLocation === "UpdatePMSHospital"
        ? "you are on the right track 4"
        : ""}
    </>
  );
};

export default EnthalpyAdminMainBody;
