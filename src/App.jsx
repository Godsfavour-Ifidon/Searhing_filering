import "./index.css";

import Navigation from "./Navigation/Navigation";
import Sidebar from "./sidebar/sidebar/Sidebar";
import Recommended from "./recommended/Recommended";
import Product from "./products/Product";
import products from "./db/data";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  //   input field
  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  const filterItem = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //  button field

  function handleClick(event) {
    setSelected(event.target.value);
  }

  // radio  field

  function handleChange(event) {
    setSelected(event.target.value);
  }

  function filterData(query, selected, products) {
    let filterDataProduct = products;

    if (query) {
      filterDataProduct = filterItem;
    }

    if (selected) {
      filterDataProduct = filterDataProduct.filter(
        (product) =>
          product.category === selected ||
          product.color === selected ||
          product.company === selected ||
          product.newPrice === selected ||
          product.title === selected
      );
    }

    return filterDataProduct.map(
      ({
        company,
        category,
        newPrice,
        prevPrice,
        reviews,
        img,
        stars,
        title,
        color,
      }) => (
        <Card
          key={Math.random()}
          color={color}
          title={title}
          company={company}
          stars={stars}
          img={img}
          reviews={reviews}
          category={category}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filterData(products, selected, query);

  //
  return (
    <>
      <Navigation handleInputChange={handleInputChange} query={query} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
      <Sidebar handleChange={handleChange} />
    </>
  );
}

export default App;
