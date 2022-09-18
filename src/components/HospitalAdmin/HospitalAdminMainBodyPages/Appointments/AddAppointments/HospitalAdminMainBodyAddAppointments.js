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

const HospitalAdminMainBodyAddAppointments = () => {
  const options = [
    { value: "Hos1", label: "Hos1" },
    { value: "Hos2", label: "Hos2" },
    { value: "Hos3", label: "Hos3" },
  ];
  return (
    <MainViewPageBodyConfig setHedearName="New Appointment">
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
              <Form.Group as={Col} md="12" controlId="validationFormik01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik02">
                <Form.Label>Short Name</Form.Label>
                <Form.Control
                  type="text"
                  name="shortName"
                  value={values.shortName}
                  onChange={handleChange}
                  isValid={touched.shortName && !errors.shortName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik04">
                <Form.Label>Preference Rank</Form.Label>
                <Form.Control
                  type="text"
                  name="preferenceRank"
                  value={values.preferenceRank}
                  onChange={handleChange}
                  isValid={
                    touched.preferenceRank && !errors.preferenceRank
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Phone Number.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik05">
                <Form.Label>ICD Type</Form.Label>

                <Select options={options} />
                {/* <Form.Control
                  type="text"
                  name="pmsSystem"
                  value={values.pmsSystem}
                  onChange={handleChange}
                  isValid={touched.pmsSystem && !errors.pmsSystem}
                /> */}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

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
        )}
      </Formik>
    </MainViewPageBodyConfig>
  );
};



export default HospitalAdminMainBodyAddAppointments