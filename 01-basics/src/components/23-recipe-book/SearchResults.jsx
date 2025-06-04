import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SingleRecipe } from "./SingleRecipe";

export const SearchResults = (props) => {
  //buraya fetch islemini yazacagiz
  // 1- recipe state
  // 2- useEffect ile fetch
  // 3- SingleRecipe mapleme
  // 3- recipe state ile re-render

  return (
    <Container className="my-3">
      <h2>Search Results</h2>
      <p>
        <em>15 results found.</em>
      </p>
      <Row className="g-4" xs={2} md={3} xl={4} xxl={5}>
        <Col>
          <SingleRecipe name={props.searchTerm} />
        </Col>
      </Row>
    </Container>
  );
};
