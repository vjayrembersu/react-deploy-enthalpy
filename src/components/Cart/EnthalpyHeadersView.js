import React from "react";

import classes from "./cartCommon.module.css";

const EnthalpyHeadersView = (props) => {
  return (
    <div className={classes.setHeaderMargin}>
      {/* <div className="mb-5"> */}
        <div className="card">
          <div
            className="card-header"
            style={{ fontSize: "1.2rem", backgroundColor: "azure" }}
          >
            {props.setHedearName}
          </div>
        </div>
      </div>
    // </div>
  );
};

export default EnthalpyHeadersView;
