import React from "react";

import { HiHome } from "react-icons/hi";
import { GrUserSettings } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";

const EnthalpyDiaplayMenuName = (props) => {
  let Icons = "";
  let setHeaderName=<></>;
  
  if (props.setDisName === "Home") {
    Icons = HiHome;
    setHeaderName = <span>&nbsp;&nbsp;Home</span>
  }
  if (props.setDisName === "HospitalAdmin") {
    Icons = GrUserSettings;
    setHeaderName = <span>&nbsp;&nbsp;Hospital Admin</span>
  }
  if (props.setDisName === "EnthalpyAdmin") {
    Icons = IoSettingsSharp;
    setHeaderName = <span>&nbsp;&nbsp;Enthalpy Admin</span>
  }
  if (props.setDisName === "filterSearch") {
    Icons = IoSettingsSharp;
    setHeaderName = <span>&nbsp;&nbsp;Filter / Search</span>
  }

  return (
    <>
      <span>
        <Icons
          style={{
            color: "black",
            fontSize: "1.2rem",
            marginTop: "-5px",
          }}
        />
        {setHeaderName}

        {/* {props.children} */}
      </span>
    </>
  );
};

export default EnthalpyDiaplayMenuName;
