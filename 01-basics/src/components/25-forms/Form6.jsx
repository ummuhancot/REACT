import { useFormik } from "formik";
import React, { useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import * as Yup from "yup";
export const Form6 = () => {
  const [message, setMessage] = useState({});

  //Formik ve Yup'a alternatif olarak React Hook Form ve Zod kullanilabilir.
  //Zod daha cok TypeScript ve NextJS ile kullaniliyor.
  //Formik icin initalValues
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
  };

  //Formik icin validationSchema
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .trim()
      .min(3, "Must be at least 3 characters")
      .max(20, "Must be at most 20 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .trim()
      .min(3, "Must be at least 3 characters")
      .max(20, "Must be at most 20 characters")
      .required("Last name is required"),
    phoneNumber: Yup.string()
      .trim()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email format")
      .required("Email is required"),
    address: Yup.string()
      .trim()
      .min(5, "Must be at least 5 characters")
      .max(100, "Must be at most 100 characters")
      .required("Address is required"),
  });

  //Formik icin handleSubmit
  const onSubmit = (values) => {
    console.log("onSubmit calisti");
    setTimeout(() => {
      //Server response gecikmesi simule ediliyor.
      setMessage({
        heading: "Form Submitted Successfully",
        body: `Thank you ${values.firstName} ${values.lastName}, your form has been submitted successfully.`,
      });
      formik.resetForm(); // Formu resetliyoruz.
    }, 2000);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
  });

  const isInvalid = (field) => {
    return formik.touched[field] && !!formik.errors[field];
  };

  const isValid = (field) => {
    return formik.touched[field] && !formik.errors[field];
  };

  return (
    <Container className="my-4">
      {!!message.heading || (
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={isInvalid("firstName")}
              isValid={isValid("firstName")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={isInvalid("lastName")}
              isValid={isValid("lastName")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phoneNumber"
              type="text"
              placeholder="Enter your phone number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={isInvalid("phoneNumber")}
              isValid={isValid("phoneNumber")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="Enter your email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={isInvalid("email")}
              isValid={isValid("email")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              as="textarea"
              rows={3}
              type="text"
              placeholder="Enter your address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={isInvalid("address")}
              isValid={isValid("address")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.address}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
            variant="dark"
            type="submit"
            className="d-inline-flex align-items-center gap-1"
          >
            {formik.isSubmitting ? <Spinner size="sm" /> : <FaSave />}
            Submit
          </Button>
        </Form>
      )}
      {message.heading && (
        <Alert show={message} variant="dark">
          <Alert.Heading>{message.heading}</Alert.Heading>
          <p>{message.body}</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setMessage({})} variant="outline-dark">
              Close
            </Button>
          </div>
        </Alert>
      )}
    </Container>
  );
};
