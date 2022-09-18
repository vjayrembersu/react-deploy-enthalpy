import React from "react";
import { Row, Col, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";



import EnthalpyHeadersView from "../../../../Cart/EnthalpyHeadersView";
// const { Formik } = formik;

const AddFacilitiesGeneralInformation = ({ formik }) => {
  return (
    <>
      <EnthalpyHeadersView setHedearName="General Information"></EnthalpyHeadersView>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationFormik02">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            isValid={formik.touched.name && !formik.errors.name}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationFormik02">
          <Form.Label>Short Name</Form.Label>
          <Form.Control
            type="text"
            name="shortName"
            value={formik.values.shortName}
            onChange={formik.handleChange}
            isValid={formik.touched.shortName && !formik.errors.shortName}
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
            value={formik.values.state}
            onChange={formik.handleChange}
            isValid={formik.touched.state && !formik.errors.state}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationFormik03">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type="text"
            name="zip"
            value={formik.values.zip}
            onChange={formik.handleChange}
            isValid={formik.touched.zip && !formik.errors.zip}
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
            value={formik.values.preferenceRank}
            onChange={formik.handleChange}
            isValid={
              formik.touched.preferenceRank && !formik.errors.preferenceRank
            }
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationFormik03">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a Phone Number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </>
  );
};

export default AddFacilitiesGeneralInformation;
