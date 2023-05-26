import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>Product Details</h1>
      {params.id}
    </>
  );
};

export default ProductDetails;
