import React from "react";
import { Link } from "react-router-dom";

const data = [
  { id: "p1", name: "product 1" },
  { id: "p2", name: "product 2" },
  { id: "p3", name: "product 3" },
];

const productsPage = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default productsPage;
