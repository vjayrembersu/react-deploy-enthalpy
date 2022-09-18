import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import EnthalpyHorzLine from "../../../Cart/EnthalpyHorzLine";

import Select from "react-select";

import MainViewPageBodyConfig from "../../../Cart/MainViewPageBodyConfig";
// const { Formik } = formik;

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  city: Yup.string().required(),
});

const EnthalpyHospitalAddPage = () => {
  const options = [
    { value: "Hos1", label: "Hos1" },
    { value: "Hos2", label: "Hos2" },
    { value: "Hos3", label: "Hos3" },
  ];
  return (
    <MainViewPageBodyConfig setHedearName="Brand-New Hospital">
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
                <Form.Label>Hospital name</Form.Label>
                <Form.Control
                  type="text"
                  name="hospitalName"
                  value={values.hospitalName}
                  onChange={handleChange}
                  isValid={touched.hospitalName && !errors.hospitalName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik02">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  isValid={touched.description && !errors.description}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik03">
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

            {/* <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik03">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Row> */}

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik04">
                <Form.Label>Contact Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="contactNumber"
                  value={values.contactNumber}
                  onChange={handleChange}
                  isValid={touched.contactNumber && !errors.contactNumber}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Phone Number.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik04">
                <Form.Label>Contact Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Contact Phone Number"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Phone Number.
                </Form.Control.Feedback>
              </Form.Group>
            </Row> */}

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik05">
                <Form.Label>Time Unit Block</Form.Label>
                <Form.Control
                  type="text"
                  name="timeUnitBlock"
                  value={values.timeUnitBlock}
                  onChange={handleChange}
                  isValid={touched.timeUnitBlock && !errors.timeUnitBlock}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Time Unit Block.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationFormik05">
                <Form.Label>Time Unit Block</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Time Unit Block"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Time Unit Block.
                </Form.Control.Feedback>
              </Form.Group>
            </Row> */}

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik06">
                <Form.Label>Select PMS System</Form.Label>
             
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

export default EnthalpyHospitalAddPage;
