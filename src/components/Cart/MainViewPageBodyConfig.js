import React from "react";

import classes from "./cartCommon.module.css";

const MainViewPageBodyConfig = (props) => {
  return (
    <div className={classes.setMainPage}>
      <div className="shadow p-3 mb-5 bg-body rounded">
        <div className="card">
          <div className="card-header" style={{fontSize: "1.5rem", backgroundColor: "lightcyan"}}>{props.setHedearName}</div>
          <div className="card-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainViewPageBodyConfig;
