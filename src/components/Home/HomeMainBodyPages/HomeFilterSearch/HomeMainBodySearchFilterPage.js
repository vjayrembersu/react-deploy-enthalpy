import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import EnthalpyHorzLine from "../../../Cart/EnthalpyHorzLine";

import MainViewPageBodyConfig from "../../../Cart/MainViewPageBodyConfig";
// const { Formik } = formik;

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  city: Yup.string().required(),
});

const HomeMainBodySearchFilterPage = () => {
  return (
    <MainViewPageBodyConfig setHedearName="Patient Information">
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
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik03">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name="dob"
                  type="date"
                  placeholder="Date Of Birth"
                  value={values.date}
                  onChange={handleChange}
                  isInvalid={!!errors.date}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br></br>
            <EnthalpyHorzLine />
            <br></br>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" >
                <Button as={Col} md="2" type="submit" >
                  Search
                </Button>
              </Form.Group>
            </Row>
          </Form>
        )}
      </Formik>
    </MainViewPageBodyConfig>
  );
};

export default HomeMainBodySearchFilterPage;
