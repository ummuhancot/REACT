import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Product } from "./Product";
import products from "./products.json";

export const ProductList = () => {
  return (
    <Container className="my-5">
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {products.map((product) => (
          <Col key={product.id}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
