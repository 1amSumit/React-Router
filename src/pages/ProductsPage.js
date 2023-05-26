import React from "react";
import { Link } from "react-router-dom";

const productsPage = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <p>
        Go <Link to={"/"}>to home page</Link>.
      </p>
    </div>
  );
};

export default productsPage;
