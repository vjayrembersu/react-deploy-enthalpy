import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import EnthalpyHorzLine from "../../../../Cart/EnthalpyHorzLine";

import Select from "react-select";

import MainViewPageBodyConfig from "../../../../Cart/MainViewPageBodyConfig";
import AddFacilitiesInformation from "./AddFacilitiesInformation";
import AddFacilitiesGeneralInformation from "./AddFacilitiesGeneralInformation";
import AddFacilitiesBreakTime from "./AddFacilitiesBreakTime";
import AddFacilitiesWorkTime from "./AddFacilitiesWorkTime";

import EnthalpyHeadersView from "../../../../Cart/EnthalpyHeadersView";

const HosipitalAdminMainBodyAddFacilities = () => {
  const formik = useFormik({
    initialValues: {
      AddFacilitiesInformation: {
        name: "",
        email: "",
      },
      AddFacilitiesGeneralInformation: {
        phone: "",
      },
    },
    validationSchema: Yup.object({
      AddFacilitiesInformation: Yup.object({
        name: Yup.string().required("This field is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
      }),
      AddFacilitiesGeneralInformation: Yup.object({
        phone: Yup.string()
          .required("This field is required")
          .min(6, "At least 06 characters"),
      }),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <MainViewPageBodyConfig setHedearName="Hospital Admin Add Facilities">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <AddFacilitiesInformation formik={formik} />
        <br></br>
        <AddFacilitiesBreakTime />
        <br></br>
        <br></br> 
        <AddFacilitiesGeneralInformation formik={formik} />
        <br></br>
        <AddFacilitiesWorkTime />
        <br></br>
        <EnthalpyHorzLine />
        <br></br>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Button as={Col} md="2" type="submit">
              Add
            </Button>
            <Button as={Col} md={{ span: 2, offset: 1 }} type="submit">
              Reset
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </MainViewPageBodyConfig>
  );
};

export default HosipitalAdminMainBodyAddFacilities;
