import React from "react";
import { Row, Col, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";



import Select from "react-select";

import EnthalpyHeadersView from "../../../../Cart/EnthalpyHeadersView";
// const { Formik } = formik;

const AddFacilitiesInformation = ({ formik }) => {
  const options = [
    { value: "Hos1", label: "Hos1" },
    { value: "Hos2", label: "Hos2" },
    { value: "Hos3", label: "Hos3" },
  ];
  return (
    <>
      <EnthalpyHeadersView setHedearName="Facilitis Information"></EnthalpyHeadersView>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationFormik02">
          <Form.Label>Address 1</Form.Label>
          <Form.Control
            type="text"
            name="address1"
            value={formik.values.address1}
            onChange={formik.handleChange}
            isValid={formik.touched.address1 && !formik.errors.address1}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationFormik02">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            type="text"
            name="address2"
            value={formik.values.address2}
            onChange={formik.handleChange}
            isValid={formik.touched.address2 && !formik.errors.address2}
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
            value={formik.values.city}
            onChange={formik.handleChange}
            isValid={formik.touched.city && !formik.errors.city}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationFormik03">
          <Form.Label>Fax</Form.Label>
          <Form.Control
            type="text"
            name="fax"
            value={formik.values.fax}
            onChange={formik.handleChange}
            isValid={formik.touched.fax && !formik.errors.fax}
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
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            isValid={formik.touched.emailAddress && !formik.errors.emailAddress}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
    </>
  );
};

export default AddFacilitiesInformation;
