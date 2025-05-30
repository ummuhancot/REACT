import React from "react";

export const Jsx02 = () => {
  const student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 20,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
  };

  return (
    <ul>
      <li>
        <b>First name: </b>
        {student.firstName}
      </li>
      <li>
        <b>Last name: </b>
        {student.lastName}
      </li>
      <li>
        <b>Age: </b>
        {student.age}
      </li>
      <li>
        <b>Skills: </b>
        {student.skills.toString()}
      </li>
      <li>
        <b>Address: </b>
        {student.address.street}
      </li>
    </ul>
  );
};
