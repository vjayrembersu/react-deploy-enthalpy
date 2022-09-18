import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import EnthalpySideMenuHeader from "../EnthalpySideMenuHeader/EnthalpySideMenuHeader";
import classes from "./EnthalpySideMenuNavigation.module.css";

const EnthalpySideMenuNavigationHeader = (props) => {
  const { pathname } = useLocation();
  // console.log(props.sendToLink)
  // const pathname = "/home11"
  // var check =  pathname.split("/");
  // var my = "/" + check[2]
  // console.log(my)
  // console.log(pathname.includes("filterSearch"));

  return (
    <>
      <Row className={classes.sideMenuHeader}>
        <NavLink
          className={({ isActive }) => (isActive ? `${classes.active}` : "")}
          // className={({ isActive }) => (isActive=['/filter', '/filterSearch'].includes(pathname)  ? `${classes.active}` : "")}
          // https://stackoverflow.com/questions/62228741/navlink-active-on-same-link-for-multiple-urls-in-react-router-dom
          // className={({ isActive }) =>
          //   (isActive = pathname.includes("hospital"))
          //     ? `${classes.active}`
          //     : ""
          // }
          to={props.sendToLink}
          onClick={() => props.onClickShowSubMenu(props.showDisplaySideHeader)}
        >
          <Col sm={12} className={classes.sideBarMenuLinks}>
            <EnthalpySideMenuHeader
              setDisName={props.showDisplaySideHeader}
            ></EnthalpySideMenuHeader>
          </Col>
        </NavLink>
      </Row>
    </>
  );
};

export default EnthalpySideMenuNavigationHeader;
