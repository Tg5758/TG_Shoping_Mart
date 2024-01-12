import React from "react";

function Pagination() {
  fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price")
    .then((res) => res.json())
    .then(console.log);
  return <div>Pagination</div>;
}

export default Pagination;
