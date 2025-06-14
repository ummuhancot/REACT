import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
export const Form5 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  //birden fazla hata olabilecegi icin bos obje ile useState kullanildi.
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    //1- Formun default submit davranisi engellenir
    e.preventDefault();

    //2- Formdaki veriler kontrol edilir
    const { firstName, lastName, phoneNumber, email, address } = formData;

    let tempErrors = {};

    if (!firstName) {
      tempErrors = {
        ...tempErrors,
        firstName: "First name is required.",
      };
    }

    if (!lastName) {
      tempErrors = {
        ...tempErrors,
        lastName: "Last name is required.",
      };
    }

    if (!phoneNumber) {
      tempErrors = {
        ...tempErrors,
        phoneNumber: "Phone number is required.",
      };
    }

    if (!email) {
      tempErrors = {
        ...tempErrors,
        email: "Email is required.",
      };
    } else {
      const regex = /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/;
      if (!regex.test(email)) {
        tempErrors = {
          ...tempErrors,
          email: "Email is not valid.",
        };
      }
    }

    if (!address) {
      tempErrors = {
        ...tempErrors,
        address: "Address is required.",
      };
    }

    //Errors objesi icindeki hatalar kontrol edilir.
    if (Object.keys(tempErrors).length > 0) {
      setErrors({ ...tempErrors });
      console.log(errors);
      return;
    }
    //3- Form verileri bir payload icine konulur.
    const payload = {
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
    };

    //4- Form verileri bir API'ye gonderilir
    //Bu örnekte API'ye gönderim yapılmıyor,
    //ancak burada fetch veya axios kullanabilirsiniz.
    console.log(payload);
    alert("Form submitted.");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
      // koseli parantezler kullanildiginda name degiskeni
      // dinamik olarak anahtar ismi olarak kullanilir.
    }));
    setErrors((previous) => ({
      ...previous,
      [name]: "", // Hata mesajını temizle
    }));
  };

  console.log(formData);

  return (
    <Container className="my-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleOnChange}
            isInvalid={!!errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleOnChange}
            isInvalid={!!errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleOnChange}
            isInvalid={!!errors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            type="text"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleOnChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
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
            value={formData.address}
            onChange={handleOnChange}
            isInvalid={!!errors.address}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          className="d-inline-flex align-items-center gap-1"
        >
          <FaSave /> Submit
        </Button>
      </Form>
    </Container>
  );
};
