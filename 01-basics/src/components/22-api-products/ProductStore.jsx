import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import { PiStarFill } from "react-icons/pi";
import { SingleProduct } from "./SingleProduct";

export const ProductStore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data.products);
      });
  }, []);

  //State her degistiginde metod tekrar tanimlanacagindan, gereksiz
  //kaynak kullanimi olusuyor.
  //Bu yuzden, useEffect ile bir kere fetch yapip, state'i guncellemek daha mantikli.
  //   const loadProducts = () => {
  //     fetch("https://dummyjson.com/products")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProducts(data.products);
  //       });
  //   };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Product Store</h1>

      {loading && <Spinner animation="grow" className="d-block mx-auto my-3" />}
      <Row xs={2} md={3} xl={4} xxl={5} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <SingleProduct
              key={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              description={product.description}
              rating={product.rating}
              availabilityStatus={product.availabilityStatus}
              discountPercentage={product.discountPercentage}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
      {/* <Button variant="dark" onClick={loadProducts}>Load Products</Button> */}
    </Container>
  );
};
