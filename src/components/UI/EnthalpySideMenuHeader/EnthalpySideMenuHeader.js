import React from "react";

import { Row, Col, Container } from "react-bootstrap";

import {
  FaUserMd,
  FaBarcode,
  FaDollyFlatbed,
  FaCoins,
  FaWpforms,
  FaCubes,
} from "react-icons/fa";
import {
  AiOutlineForm,
  AiOutlineFieldTime,
  AiOutlineFileSearch,
} from "react-icons/ai";
import {
  RiHospitalLine,
  RiNurseFill,
  RiNurseLine,
  RiAddCircleLine,
  RiDeleteBinLine,
  RiUserSharedLine,
} from "react-icons/ri";
import { GrDocumentUpdate, GrUpdate } from "react-icons/gr";
import { BsFillCaretDownFill } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineGroupWork,
} from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { ImFilter } from "react-icons/im";
import { VscUngroupByRefType, VscGroupByRefType } from "react-icons/vsc";
import { IoHourglassOutline } from "react-icons/io5";
// import { BiSupport } from "react-icons/bi";
import { HiOutlineSupport } from "react-icons/hi";

import classes from "./EnthalpySideMenuHeader.module.css";

const EnthalpySideMenuHeader = (props) => {
  let Icons = "";
  let setHeaderName = <></>;
  let IconCarret = BsFillCaretDownFill;

  // This section belongs to Home Headers
  if (props.setDisName === "FilterSearch") {
    Icons = AiOutlineFileSearch;
    setHeaderName = <span>&nbsp;&nbsp;Filter</span>;
  }

  // This section belongs to Home SubMenu
  if (props.setDisName === "filterSearch") {
    Icons = ImFilter;
    setHeaderName = <span>&nbsp;&nbsp;Filter / Search</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }

  // This section belongs to EnthalpyAdmin Header
  if (props.setDisName === "Hospital") {
    Icons = RiHospitalLine;
    setHeaderName = <span>&nbsp;&nbsp;Hospital</span>;
  }
  if (props.setDisName === "updatePMSInfo") {
    Icons = GrDocumentUpdate;
    setHeaderName = <span>&nbsp;&nbsp;Hospital PMS </span>;
  }
  if (props.setDisName === "prePopulatedhospitalinfo") {
    Icons = AiOutlineForm;
    setHeaderName = <span>&nbsp;&nbsp;Pre Populated Hospital </span>;
  }

  // This section belongs to EnthalpyAdmin SubMenu starts here

  // Enthalpy Admin Hospital Section
  if (props.setDisName === "AddHospital") {
    Icons = RiAddCircleLine;
    setHeaderName = <span>&nbsp;&nbsp;Add</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "UpdateHospital") {
    Icons = MdUpdate;
    setHeaderName = <span>&nbsp;&nbsp;Update</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }

  // Enthalpy Admin Hospital PMS Section
  if (props.setDisName === "UpdatePMSHospital") {
    Icons = MdUpdate;
    setHeaderName = <span>&nbsp;&nbsp;Update Hospital PMS</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }

  // Enthalpy Admin Hospital Pre Populated Section
  if (props.setDisName === "ViewPrePopulatedHospital") {
    Icons = FaWpforms;
    setHeaderName = <span>&nbsp;&nbsp;Pre Populated</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }

  // This section belongs to EnthalpyAdmin SubMenu ends here

  // This section belongs to HospitalAdmin Header Starts here
  if (props.setDisName === "User") {
    Icons = FaUserMd;
    setHeaderName = <span>&nbsp;&nbsp;User</span>;
  }
  if (props.setDisName === "Insurance") {
    Icons = FaCoins;
    setHeaderName = <span>&nbsp;&nbsp;Insurance</span>;
  }
  if (props.setDisName === "IcdCodes") {
    Icons = FaBarcode;
    setHeaderName = <span>&nbsp;&nbsp;Icd-Codes</span>;
  }
  if (props.setDisName === "Practitioners") {
    Icons = RiNurseFill;
    setHeaderName = <span>&nbsp;&nbsp;Practitioners</span>;
  }
  if (props.setDisName === "ReffPractitioners") {
    Icons = RiNurseLine;
    setHeaderName = <span>&nbsp;&nbsp;Reff Practitioners</span>;
  }
  if (props.setDisName === "Facilities") {
    Icons = FaDollyFlatbed;
    setHeaderName = <span>&nbsp;&nbsp;Facilities</span>;
  }
  if (props.setDisName === "Appointments") {
    Icons = AiOutlineFieldTime;
    setHeaderName = <span>&nbsp;&nbsp;Appointments</span>;
  }

  // This section belongs to HospitalAdmin Header Ends here

  // This section belongs to HospitalAdmin SubMenu Starts Here

  // This section belongs to HospitalAdmin SubMenu User Starts Here

  if (props.setDisName === "Add-Hospital-Admin-User") {
    Icons = RiAddCircleLine;
    setHeaderName = <span>&nbsp;&nbsp;Add</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Update-Hospital-Admin-User") {
    Icons = MdUpdate;
    setHeaderName = <span>&nbsp;&nbsp;Update</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Delete-Hospital-Admin-User") {
    Icons = RiDeleteBinLine;
    setHeaderName = <span>&nbsp;&nbsp;Delete</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }

  // This section belongs to HospitalAdmin SubMenu User Ends Here

  // This section belongs to HospitalAdmin SubMenu Insurance Starts Here

  if (props.setDisName === "Add-Hospital-Admin-Insurance") {
    Icons = RiAddCircleLine;
    setHeaderName = <span>&nbsp;&nbsp;Add</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Update-Hospital-Admin-Insurance") {
    Icons = MdUpdate;
    setHeaderName = <span>&nbsp;&nbsp;Update</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Delete-Hospital-Admin-Insurance") {
    Icons = RiDeleteBinLine;
    setHeaderName = <span>&nbsp;&nbsp;Delete</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }

  // This section belongs to HospitalAdmin SubMenu Insurance Ends Here

  // This section belongs to HospitalAdmin SubMenu IcdCodes Starts Here

  if (props.setDisName === "Add-Hospital-Admin-ICD-Codes") {
    Icons = RiAddCircleLine;
    setHeaderName = <span>&nbsp;&nbsp;Add</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Manage-Interventions-Hospital-Admin-ICD-Codes") {
    Icons = MdOutlineGroupWork;
    setHeaderName = <span>&nbsp;&nbsp;Manage Interventions</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Manage-Non-Interventions-Hospital-Admin-ICD-Codes") {
    Icons = VscUngroupByRefType;
    setHeaderName = <span>&nbsp;&nbsp;Manage Non-Interventions</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }

  // This section belongs to HospitalAdmin SubMenu IcdCodes Ends Here

  // This section belongs to HospitalAdmin SubMenu Practitioners Starts Here

  if (props.setDisName === "Add-Hospital-Admin-Practitioners") {
    Icons = RiAddCircleLine;
    setHeaderName = <span>&nbsp;&nbsp;Add</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Manage-Hospital-Admin-Practitioners") {
    Icons = MdOutlineGroupWork;
    setHeaderName = <span>&nbsp;&nbsp;Manage</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Accepted-Insurance-Hospital-Admin-Practitioners") {
    Icons = RiUserSharedLine;
    setHeaderName = <span>&nbsp;&nbsp;Accepted Insurance</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Associated-Appointment-Hospital-Admin-Practitioners") {
    Icons = IoHourglassOutline;
    setHeaderName = <span>&nbsp;&nbsp;Associated Appointment</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Supported-Referrals-Hospital-Admin-Practitioners") {
    Icons = HiOutlineSupport;
    setHeaderName = <span>&nbsp;&nbsp;Supported Referrals</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  // This section belongs to HospitalAdmin SubMenu Practitioners Ends Here

  // This section belongs to HospitalAdmin SubMenu Reff Practitioners Starts Here

  if (props.setDisName === "Add-Hospital-Admin-Reff-Practitioners") {
    Icons = RiAddCircleLine;
    setHeaderName = <span>&nbsp;&nbsp;Add</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Manage-Hospital-Admin-Reff-Practitioners") {
    Icons = VscGroupByRefType;
    setHeaderName = <span>&nbsp;&nbsp;Manage Reff-Practitioners</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  // This section belongs to HospitalAdmin SubMenu Reff Practitioners Starts Here

  // This section belongs to HospitalAdmin SubMenu Facilities Starts Here

  if (props.setDisName === "Add-Hospital-Admin-Facilities") {
    Icons = RiAddCircleLine;
    setHeaderName = <span>&nbsp;&nbsp;Add</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Manage-Hospital-Admin-Facilities") {
    Icons = FaCubes;
    setHeaderName = <span>&nbsp;&nbsp;Manage Facilities</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  // This section belongs to HospitalAdmin SubMenu Reff Practitioners Starts Here

  // This section belongs to HospitalAdmin SubMenu Appointments Starts Here

  if (props.setDisName === "Add-Hospital-Admin-Appointments") {
    Icons = RiAddCircleLine;
    setHeaderName = <span>&nbsp;&nbsp;Add</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  if (props.setDisName === "Manage-Interventions-Hospital-Admin-Appointments") {
    Icons = MdOutlineGroupWork;
    setHeaderName = <span>&nbsp;&nbsp;Manage Interventions</span>;
    IconCarret = MdOutlineKeyboardArrowRight;
  }
  // This section belongs to HospitalAdmin SubMenu Reff Practitioners Starts Here

  // This section belongs to HospitalAdmin SubMenu Ends Here
  // setCondition="headSet"
  // console.log(props.setCondition);
  return (
    <>
      <Row>
        {/* <Col md={{ span: 2, offset: 4 }}>  */}
        <Col sm={2} className=" text-center">
          {props.setCondition !== "headSet" && (
            <Icons
              style={{
                color: "black",
                fontSize: "1.2rem",
                marginTop: "-5px",
              }}
            />
          )}
        </Col>
        <Col sm={8}>{setHeaderName}</Col>
        <Col sm={2}>
          {props.setCondition !== "headSet" && (
            <IconCarret
              style={{
                color: "black",
                fontSize: "1.2rem",
                marginTop: "-5px",
              }}
            />
          )}
        </Col>
        {/* </Col> */}
      </Row>
    </>
  );
};

export default EnthalpySideMenuHeader;
