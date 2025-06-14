import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
export const Form2 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    //1- Formun default submit davranisi engellenir
    e.preventDefault();

    //2- Formdaki veriler kontrol edilir
    if (!firstName || !lastName || !phoneNumber || !email || !address) {
      alert("Please fill in all fields.");
      return; // Formun submit edilmemesi icin return ediyoruz.
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

  return (
    <Container className="my-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
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
