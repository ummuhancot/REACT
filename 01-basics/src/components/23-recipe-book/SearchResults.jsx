import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SingleRecipe } from "./SingleRecipe";
import axios from "axios";

export const SearchResults = ({ searchTerm }) => {
  const [recipes, setRecipes] = useState([]);

  //Sadece searchTerm degistiginde calisacak sekilde useEffect'i ayarliyoruz.

  //buraya fetch islemini yazacagiz
  // 1- recipe state
  // 2- useEffect ile fetch
  // 3- SingleRecipe mapleme
  // 3- recipe state ile re-render

  // npm i axios indirip axios ile fetch yapabiliriz
  // fetch("https://dummyjson.com/recipes/search?q=Margherita")
  //   .then((res) => res.json())
  //   .then(console.log);

  //Sadece searchTerm degistiginde calisacak sekilde useEffect'i ayarliyoruz.

  useEffect(() => {
    //Debouncing
    const loadData = async () => {
      const res = await axios(
        `https://dummyjson.com/recipes/search?q=${searchTerm}`
      );

      const { data } = res;
      //data.recipes bos gelirse, recipes'i bos bir dizi olarak ayarlayacagiz.
      setRecipes(data.recipes || []);
      console.log(data);
    };

    // Debounce: 500ms bekle
    const debounce = setTimeout(() => {
      console.log("C"); // Konsolda C gorunce gerisayimin bittiğini anlayacagiz. Fetch yapilacak.
      loadData();
    }, 500);
    console.log("A"); //Konsolda A gorunce gerisayimin basladigini anlayacagiz.

    //Buradaki return searchTerm degistiginde eski deger memoryden cikarilacagi zaman calisir.
    //Yani searchTerm degistiginde, eski searchTerm degeri memoryden silinecek ve bu fonksiyon calisacak.
    //Bu sayede, eger 500ms icinde searchTerm degistirilirse, bir fetch islemi yapilmayacak.
    //Eger 500ms icinde searchTerm degistirilmezse, fetch islemi yapilacak.
    //Bu sayede, gereksiz fetch islemlerinden kaciniyoruz. Buna da debouncing deniyor.
    return () => {
      console.log("B"); // Konsolda B gorunce gerisayimin iptal edildigini anlayacagiz.
      clearTimeout(debounce);
    };
  }, [searchTerm]);

  return (
    <Container className="my-3">
      <h2>Search Results</h2>
      <p>
        <em>{recipes.length} results found.</em>
      </p>
      <Row className="g-4" xs={2} md={3} xl={4} xxl={5}>
        {/* Burada gelen sonuclari kullanarak SingleRecipe bileşenini render ediyoruz. */}
        {recipes.map((recipe) => (
          <Col key={recipe.id}>
            <SingleRecipe {...recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
