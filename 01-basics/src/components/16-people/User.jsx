import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { PiConfetti, PiCake } from "react-icons/pi";

export const User = (props) => {
  const { id, name, age, image, celebrated, celebrateUser } = props;
  return (
    <Card
      className={`mb-4 mx-auto ${celebrated && "bg-info-subtle"}`}
      style={{ maxWidth: "540px" }}
    >
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={3}>
            <Image src={`/img/people/${image}`} fluid roundedCircle />
          </Col>
          <Col xs={9}>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>
              <PiCake size={24} className="pb-1" /> {age}
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
      {!celebrated && (
        <Button
          variant="link"
          className="text-info position-absolute top-0 end-0 m-3"
          onClick={() => celebrateUser(id)}
        >
          <PiConfetti size={32} />
        </Button>
      )}
    </Card>
  );
};
