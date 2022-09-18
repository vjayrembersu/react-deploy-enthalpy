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
import EnthalpyHeadersView from "../../../../Cart/EnthalpyHeadersView";
// const { Formik } = formik;

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  city: Yup.string().required(),
});

const HosipitalAdminMainBodyAddFacilities = () => {
  const options = [
    { value: "Hos1", label: "Hos1" },
    { value: "Hos2", label: "Hos2" },
    { value: "Hos3", label: "Hos3" },
  ];
  return (
    <MainViewPageBodyConfig setHedearName="Hospital Admin Add Facilities">
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
            <EnthalpyHeadersView setHedearName="Facilitis Information"></EnthalpyHeadersView>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>Address 1</Form.Label>
                <Form.Control
                  type="text"
                  name="address1"
                  value={values.address1}
                  onChange={handleChange}
                  isValid={touched.address1 && !errors.address1}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="text"
                  name="address2"
                  value={values.address2}
                  onChange={handleChange}
                  isValid={touched.address2 && !errors.address2}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isValid={touched.city && !errors.city}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>Fax</Form.Label>
                <Form.Control
                  type="text"
                  name="fax"
                  value={values.fax}
                  onChange={handleChange}
                  isValid={touched.fax && !errors.fax}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Phone Number.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>ICD Type</Form.Label>

                <Select options={options} />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationFormik04">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="emailAddress"
                  value={values.emailAddress}
                  onChange={handleChange}
                  isValid={touched.emailAddress && !errors.emailAddress}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br></br>
            <Row>
              <Col sm={6}>
                <EnthalpyHeadersView setHedearName="Lunch Break Start Time"></EnthalpyHeadersView>
              </Col>
              <Col sm={6}>
                <EnthalpyHeadersView setHedearName="Lunch Break End Time"></EnthalpyHeadersView>
              </Col>
            </Row>

            <br></br>
            <EnthalpyHorzLine />
            <br></br>

            <EnthalpyHeadersView setHedearName="Genral Information"></EnthalpyHeadersView>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik02">
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
              <Form.Group as={Col} md="6" controlId="validationFormik02">
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
              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isValid={touched.state && !errors.state}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isValid={touched.zip && !errors.zip}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Phone Number.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>Preference Rank</Form.Label>
                <Form.Control
                  type="text"
                  name="preferenceRank"
                  value={values.preferenceRank}
                  onChange={handleChange}
                  isValid={touched.preferenceRank && !errors.preferenceRank}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  isValid={touched.phoneNumber && !errors.phoneNumber}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Phone Number.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>Week Start Day</Form.Label>
                <Form.Control
                  type="text"
                  name="weekStartDay"
                  value={values.weekStartDay}
                  onChange={handleChange}
                  isValid={touched.weekStartDay && !errors.weekStartDay}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>Week End Day</Form.Label>
                <Form.Control
                  type="text"
                  name="weekEndDay"
                  value={values.weekEndDay}
                  onChange={handleChange}
                  isValid={touched.weekEndDay && !errors.weekEndDay}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Phone Number.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br></br>
            <br></br>
            <Row className="mb-3">
              <Col sm={6}>
                <EnthalpyHeadersView setHedearName="Work Day Start Time"></EnthalpyHeadersView>
              </Col>
              <Col sm={6}>
                <EnthalpyHeadersView setHedearName="Work Day End Time"></EnthalpyHeadersView>
              </Col>
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

export default HosipitalAdminMainBodyAddFacilities;
