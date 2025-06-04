import React, { useEffect, useState } from "react";
import data from "./country.json"
import { Card, Container, FormControl, FormLabel } from "react-bootstrap";

export const CountryFilter = () => {
  const [text, setText] = useState("");
  const [countries, setCountries] = useState(data);

  useEffect(() => {
    if (!text) {
      setCountries([]);
      return;
    }
    const array = data.filter((country) =>
      country.country.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );

    setCountries(array);
  }, [text]);

  return (
    <Container className="mt-4">
      <h1 className="text-center">Country Filter</h1>
      <FormLabel className="mt-4">Select a country:</FormLabel>
      <FormControl
        placeholder="Enter a country name"
        onChange={(event) => setText(event.target.value)}
      />
      <Card className={`mt-4 ${!countries.length ? "d-none" : ""}`}>
        <Card.Body>
          {countries.map((item, index) => (
            <p key={item.code}>
              {index + 1} - {item.country}
            </p>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};
