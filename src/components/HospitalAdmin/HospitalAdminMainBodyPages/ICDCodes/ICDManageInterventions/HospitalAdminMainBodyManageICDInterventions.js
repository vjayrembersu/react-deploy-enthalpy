import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import EnthalpyHorzLine from "../../../../Cart/EnthalpyHorzLine";

import Select from "react-select";

import MainViewPageBodyConfig from "../../../../Cart/MainViewPageBodyConfig";
// const { Formik } = formik;

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  city: Yup.string().required(),
});

const HospitalAdminMainBodyManageICDInterventions = () => {
  const options = [
    { value: "Hos1", label: "Hos1" },
    { value: "Hos2", label: "Hos2" },
    { value: "Hos3", label: "Hos3" },
  ];
  return (
    <MainViewPageBodyConfig setHedearName="Hospital Admin Manage ICD Codes Interventions ">
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: "",
          lastName: "",
          city: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>ICD</Form.Label>

                <Select options={options} />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br></br>
            <EnthalpyHorzLine />
            <br></br>

            {/* <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik02">
                <Form.Label>Insurance name</Form.Label>
                <Form.Control
                  type="text"
                  name="insuranceName"
                  value={values.insuranceName}
                  onChange={handleChange}
                  isValid={touched.insuranceName && !errors.insuranceName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik03">
                <Form.Label>Insurance Percentage</Form.Label>
                <Form.Control
                  type="text"
                  name="insurancePercentage"
                  value={values.insurancePercentage}
                  onChange={handleChange}
                  isValid={
                    touched.insurancePercentage && !errors.insurancePercentage
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Phone Number.
                </Form.Control.Feedback>
              </Form.Group>
            </Row> */}

            <br></br>
            <EnthalpyHorzLine />
            <br></br>
            <Row className="mb-3">
              <Form.Group as={Col} md="12">
                <Button as={Col} md="2" type="submit">
                  Update
                </Button>
                <Button as={Col} md={{ span: 2, offset: 1 }} type="submit">
                  Reset
                </Button>
              </Form.Group>
            </Row>
          </Form>
        )}
      </Formik>
    </MainViewPageBodyConfig>
  );
};


export default HospitalAdminMainBodyManageICDInterventions