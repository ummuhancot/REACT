import React from "react";
import { Button, Container } from "react-bootstrap";
import people from "./people.json";
import { User } from "./User";

export const UsersList = () => {
  return (
    <Container className="my-3">
      <div className="text-center mb-4">
        <h2>People who were born today</h2>
        <p>5 people were born today.</p>
      </div>

      {people.map((person) => (
        <User key={person.id} {...person} />
      ))}

      <div className="text-center mt-4">
        <Button>Celebreate All</Button>
      </div>
    </Container>
  );
};
