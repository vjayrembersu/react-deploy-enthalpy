import React from "react";

import Select, { components } from "react-select";


import { FaRegHospital } from "react-icons/fa";

// import classes from "./TopSelectHospital.module.css";

const TopSelectHospital = () => {
  const hospitalList = [
    { label: "None", value: "N" },
    { label: "Hospital 1", value: "H1" },
    { label: "Hospital 2", value: "H2" },
    { label: "Hospital 3", value: "H3" },
  ];
  const Placeholder = (props) => {
    return <components.Placeholder {...props} />;
  };
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <FaRegHospital style={{ color: "#0000e6" }} />
      </components.DropdownIndicator>
    );
  };
  return (
    <>
      <div className="p-2 text-center">
        <Select
          styles={{
            control: (base) => ({
              ...base,
              background: "#d0e2ec00",
              border: "none",
              minHeight: 35,
              height: 35,
              cursor: "pointer",
              // boxShadow: state.isFocused ? null : null,
            }),
            valueContainer: (provided, state) => ({
              ...provided,
              height: 35,
              padding: "0 6px",
            }),
            indicatorsContainer: (provided, state) => ({
              ...provided,
              height: 35,
            }),
            input: (provided, state) => ({
              ...provided,
              margin: "0px",
              color: "#0000e6",
            }),
            indicatorSeparator: (state) => ({
              display: "none",
            }),
            placeholder: (base) => ({
              ...base,
              fontSize: "1em",
              color: "#0000e6",
              fontWeight: 400,
            }),
            singleValue: (base) => ({
              ...base,
              color: "#0000e6",
            }),
          }}
          closeMenuOnSelect={true}
          components={{ DropdownIndicator, Placeholder }}
          placeholder={"Select Hospital"}
          options={hospitalList}
        />
      </div>
    </>
  );
};

export default TopSelectHospital;
