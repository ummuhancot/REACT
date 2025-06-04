import React from "react";
import { Card } from "react-bootstrap";

export const SingleRecipe = (props) => {
  const {
    name,
    image,
    prepTimeMinutes,
    cookTimeMinutes,
    difficulty,
    cuisine,
    rating,
  } = props;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};
