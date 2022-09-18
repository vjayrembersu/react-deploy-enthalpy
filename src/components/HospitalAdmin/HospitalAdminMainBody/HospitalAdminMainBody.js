import React from "react";
import { useParams } from "react-router-dom";

// **************************
// * Hospital Admin User
// **************************

import HospitalAdminMainBodyAddUser from "../HospitalAdminMainBodyPages/User/AddUser/HospitalAdminMainBodyAddUser";
import HospitalAdminMainBodyUpdateUser from "../HospitalAdminMainBodyPages/User/UpdateUser/HospitalAdminMainBodyUpdateUser";
import HospitalAdminMainBodyDeleteUser from "../HospitalAdminMainBodyPages/User/DeleteUser/HospitalAdminMainBodyDeleteUser";

// **************************
// * Hospital Admin Insurance
// **************************

import HospitalAdminMainBodyAddInsurance from "../HospitalAdminMainBodyPages/Insurance/AddInsurance/HospitalAdminMainBodyAddInsurance";
import HospitalAdminMainBodyDeleteInsurance from "../HospitalAdminMainBodyPages/Insurance/DeleteInsurance/HospitalAdminMainBodyDeleteInsurance";
import HospitalAdminMainBodyUpdateInsurance from "../HospitalAdminMainBodyPages/Insurance/UpdateInsurance/HospitalAdminMainBodyUpdateInsurance";

// **************************
// * Hospital Admin ICD Codes
// **************************

import HospitalAdminMainBodyAddICDCodes from "../HospitalAdminMainBodyPages/ICDCodes/AddICDCodes/HospitalAdminMainBodyAddICDCodes";
import HospitalAdminMainBodyManageICDInterventions from "../HospitalAdminMainBodyPages/ICDCodes/ICDManageInterventions/HospitalAdminMainBodyManageICDInterventions";
import HospitalAdminMainBodyManageICDNonInterventions from "../HospitalAdminMainBodyPages/ICDCodes/ICDManageNonInterventions/HospitalAdminMainBodyManageICDNonInterventions";


// ******************************
// * Hospital Admin Practitioners
// ******************************

import HospitalAdminMainBodyAddPractitioners from "../HospitalAdminMainBodyPages/Practitioners/AddPractitioners/HospitalAdminMainBodyAddPractitioners";
import HospitalAdminMainBodyManagePractitioners from "../HospitalAdminMainBodyPages/Practitioners/ManagePractitioners/HospitalAdminMainBodyManagePractitioners";
import HospitalAdminMainBodyAcceptedInsurancePractitioners from "../HospitalAdminMainBodyPages/Practitioners/PractitionersAcceptedInsurances/HospitalAdminMainBodyAcceptedInsurancePractitioners";
import HospitalAdminMainBodyAssociatedAppointmentsPractitioners from "../HospitalAdminMainBodyPages/Practitioners/PractitionersAssociatedAppointments/HospitalAdminMainBodyAssociatedAppointmentsPractitioners";
import HospitalAdminMainBodySupportedReferralsPractitioners from "../HospitalAdminMainBodyPages/Practitioners/PractitionersSupportedReferrals/HospitalAdminMainBodySupportedReferralsPractitioners";

// ***********************************
// * Hospital Admin Reff Practitioners
// ***********************************


// ***************************
// * Hospital Admin Facilities
// ***************************

import HosipitalAdminMainBodyAddFacilities from "../HospitalAdminMainBodyPages/Facilities/AddFacilities/HosipitalAdminMainBodyAddFacilities";
import HosipitalAdminMainBodyManageFacilities from "../HospitalAdminMainBodyPages/Facilities/ManageFacilities/HosipitalAdminMainBodyManageFacilities";

// *****************************
// * Hospital Admin Appointments
// *****************************

import HospitalAdminMainBodyAddAppointments from "../HospitalAdminMainBodyPages/Appointments/AddAppointments/HospitalAdminMainBodyAddAppointments";
import HospitalAdminMainBodyManageInterventionsAppointments from "../HospitalAdminMainBodyPages/Appointments/ManageInterventionsAppointment/HospitalAdminMainBodyManageInterventionsAppointments";

import MainViewPageHeaderDisplay from "../../Cart/MainViewPageHeaderDisplay";
const HospitalAdminMainBody = () => {
  const params = useParams();

  const traceLocation = params.hosAdmin;

  return (
    <>
      <MainViewPageHeaderDisplay
        setCondition="headSet"
        setDisName={traceLocation}
      ></MainViewPageHeaderDisplay>

      {/* *****************************
       *
       * This Section belongs to Hospital User
       *
       ***************************** */}

      {traceLocation === "Add-Hospital-Admin-User"
        ? <HospitalAdminMainBodyAddUser />
        : ""}
      {traceLocation === "Update-Hospital-Admin-User"
        ? <HospitalAdminMainBodyUpdateUser />
        : ""}
      {traceLocation === "Delete-Hospital-Admin-User"
        ? <HospitalAdminMainBodyDeleteUser />
        : ""}

      {/* *****************************
       *
       * This Section belongs to Hospital Insurance
       *
       ***************************** */}

      {traceLocation === "Add-Hospital-Admin-Insurance"
        ? <HospitalAdminMainBodyAddInsurance />
        : ""}
      {traceLocation === "Update-Hospital-Admin-Insurance"
        ? <HospitalAdminMainBodyUpdateInsurance />
        : ""}
      {traceLocation === "Delete-Hospital-Admin-Insurance"
        ? <HospitalAdminMainBodyDeleteInsurance />
        : ""}

      {/* *****************************
       *
       * This Section belongs to Hospital ICD Codes
       *
       ***************************** */}

      {traceLocation === "Add-Hospital-Admin-ICD-Codes"
        ? <HospitalAdminMainBodyAddICDCodes />
        : ""}
      {traceLocation === "Manage-Interventions-Hospital-Admin-ICD-Codes"
        ? <HospitalAdminMainBodyManageICDInterventions />
        : ""}
      {traceLocation === "Manage-Non-Interventions-Hospital-Admin-ICD-Codes"
        ? <HospitalAdminMainBodyManageICDNonInterventions />
        : ""}

      {/* *****************************
       *
       * This Section belongs to Hospital Practitioners
       *
       ***************************** */}

      {traceLocation === "Add-Hospital-Admin-Practitioners"
        ? <HospitalAdminMainBodyAddPractitioners />
        : ""}
      {traceLocation === "Manage-Hospital-Admin-Practitioners"
        ? <HospitalAdminMainBodyManagePractitioners />
        : ""}
      {traceLocation === "Accepted-Insurance-Hospital-Admin-Practitioners"
        ? <HospitalAdminMainBodyAcceptedInsurancePractitioners />
        : ""}
      {traceLocation === "Associated-Appointment-Hospital-Admin-Practitioners"
        ? <HospitalAdminMainBodyAssociatedAppointmentsPractitioners />
        : ""}
      {traceLocation === "Supported-Referrals-Hospital-Admin-Practitioners"
        ? <HospitalAdminMainBodySupportedReferralsPractitioners />
        : ""}

      {/* *****************************
       *
       * This Section belongs to Hospital Reff Practitioners
       *
       ***************************** */}

      {traceLocation === "Add-Hospital-Admin-Reff-Practitioners"
        ? "you are on the right track 1"
        : ""}
      {traceLocation === "Manage-Hospital-Admin-Reff-Practitioners"
        ? "you are on the right track 2"
        : ""}

      {/* *****************************
       *
       * This Section belongs to Hospital Facilities
       *
       ***************************** */}
      {traceLocation === "Add-Hospital-Admin-Facilities"
        ? <HosipitalAdminMainBodyAddFacilities />
        : ""}
      {traceLocation === "Manage-Hospital-Admin-Facilities"
        ? <HosipitalAdminMainBodyManageFacilities />
        : ""}

      {/* *****************************
       *
       * This Section belongs to Hospital Appointments
       *
       ***************************** */}

      {traceLocation === "Add-Hospital-Admin-Appointments"
        ? <HospitalAdminMainBodyAddAppointments />
        : ""}
      {traceLocation === "Manage-Interventions-Hospital-Admin-Appointments"
        ? <HospitalAdminMainBodyManageInterventionsAppointments />
        : ""}
    </>
  );
};

export default HospitalAdminMainBody;
