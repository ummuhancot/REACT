import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import data from "./people.json";
import { User } from "./User";

export const UsersList = () => {
  const [people, setPeople] = useState(data);

  const celebrateUser = (id) => {
    // setPeople((prevPeople) =>
    //   prevPeople.map((person) =>
    //     person.id === id ? { ...person, celebrated: true } : person
    //   )
    // );
    const array = people.map((person) =>
      person.id === id ? { ...person, celebrated: true } : person
    );
    setPeople(array);
  };

  const celebrateAll = () => {
    const array = people.map((person) => ({ ...person, celebrated: true }));
    setPeople(array);
  };

  const getCelebratedCount = () => {
    return people.filter((person) => person.celebrated).length;
  };

  return (
    <Container className="my-3">
      <div className="text-center mb-4">
        <h2>People who were born today</h2>
        <p>
          {people.length} people were born today. You have celebrated{" "}
          {getCelebratedCount()} of them.
        </p>
      </div>

      {people.map((person) => (
        <User key={person.id} {...person} celebrateUser={celebrateUser} />
      ))}
      {getCelebratedCount() === people.length || (
        <div className="text-center mt-4">
          <Button onClick={celebrateAll}>Celebreate All</Button>
        </div>
      )}
    </Container>
  );
};
