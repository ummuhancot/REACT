import React from "react";
import { Badge, Card } from "react-bootstrap";
import { LuChefHat } from "react-icons/lu";
import {
  PiLightningFill,
  PiStarFill,
  PiStarBold,
  PiTimerBold,
} from "react-icons/pi";
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

  const ratingScore = Math.round(rating);

  const filledStars = [...new Array(ratingScore)].map((_, index) => (
    <PiStarFill key={index + 1} />
  ));

  const emptyStars = [...new Array(5 - ratingScore)].map((_, index) => (
    <PiStarBold key={index + 1} />
  ));

  const totalTime = prepTimeMinutes + cookTimeMinutes;
  const formattedTime = `${
    Math.floor(totalTime / 60) === 0 ? "" : `${Math.floor(totalTime / 60)}h`
  } 
  ${totalTime % 60 === 0 ? "" : `${totalTime % 60}m`}`;

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          <PiTimerBold />
          {formattedTime}
        </Card.Subtitle>
        <Card.Title>{name}</Card.Title>
        <div className="text-success">
          {filledStars}
          {emptyStars}
        </div>
        <Badge bg="success" className="position-absolute top-0 start-0 m-2">
          <LuChefHat className="" /> {cuisine}
        </Badge>
        <Badge
          bg={`${
            difficulty === "Easy"
              ? "primary"
              : difficulty === "Medium"
              ? "warning"
              : "danger"
          }`}
          className="position-absolute top-0 start-0 ms-2 my-5"
        >
          <PiLightningFill /> {difficulty}
        </Badge>
      </Card.Body>
    </Card>
  );
};
