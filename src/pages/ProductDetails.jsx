import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>Product Details</h1>
      {params.id}
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};

export default ProductDetails;
