import React from "react";
import { useParams } from "react-router-dom";

import HomeMainBodySearchFilterPage from "../HomeMainBodyPages/HomeFilterSearch/HomeMainBodySearchFilterPage";
// import classes from "./HomeMainBody.module.css";
import MainViewPageHeaderDisplay from "../../Cart/MainViewPageHeaderDisplay";
const HomeMainBody = () => {
  const params = useParams();

  const traceLocation = params.search;
  // console.log("traceLocation", traceLocation);

  return (
    <>
      {/* {traceLocation === undefined && (
        <>
          <Row className={`${classes.setMar} ${classes.sideheaderBackground} `}>
            <Col
              sm={12}
              className={`${classes.sideBarHeader} text-center `}
            ></Col>
          </Row>
        </>
      )} */}

      {/* {traceLocation !== undefined && ( */}
      <>
        {/* <Row className={`${classes.setMar} ${classes.sideheaderBackground} `}>
            <Col sm={12} className={`${classes.sideBarHeader} text-center `}>
              <EnthalpySideMenuHeader
                setCondition="headSet"
                setDisName={traceLocation}
              >
              </EnthalpySideMenuHeader>
            </Col>
          </Row> */}
        <MainViewPageHeaderDisplay
          setCondition="headSet"
          setDisName={traceLocation}
        ></MainViewPageHeaderDisplay>
        {traceLocation === "filterSearch" ? <HomeMainBodySearchFilterPage /> : ""}
        {traceLocation === "search2" ? "you are on the right track 2" : ""}
        {traceLocation === "search3" ? "you are on the right track 3" : ""}
      </>
      {/* )} */}
    </>
  );
};

export default HomeMainBody;
