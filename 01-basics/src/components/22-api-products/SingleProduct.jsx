import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { PiStarFill } from "react-icons/pi";

export const SingleProduct = (props) => {
  const {
    thumbnail,
    title,
    description,
    rating,
    availabilityStatus,
    discountPercentage,
    price,
  } = props;
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Badge
          bg="dark"
          className="fs-6"
          style={{ position: "absolute", top: "10px", left: "10px" }}
        >
            {availabilityStatus === "In Stock" ? "" : availabilityStatus}
        </Badge>
        <Badge
          bg="dark"
          className="fs-6"
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <PiStarFill style={{ marginBottom: "2px" }} /> {rating.toFixed(1)}
        </Badge>
      </Card.Body>
      <Card.Footer className="text-center bg-transparent border-0 px-2">
        <Badge bg="dark" className="mb-2">
          {discountPercentage}% Off!
        </Badge>
        <Card.Subtitle className="mb-4 fs-5">${price}</Card.Subtitle>
        <Button variant="dark" className="w-100">
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );
};
