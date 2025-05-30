import React from "react";
import { Button, Card } from "react-bootstrap";

export const Product = ({ image, name, description, price }) => {
  //const { id, name, description, price, image } = props;
  return (
    <Card className="text-center h-100">
      <Card.Body>
        <Card.Img
          style={{ height: "250px", width: "100%", objectFit: "contain" }}
          variant="top"
          src={`/img/products/${image}`}
        />
        <Card.Title className="fs-3 mt-3">{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Subtitle className="my-3 fs-3">${price}</Card.Subtitle>
        <Button variant="warning">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};
