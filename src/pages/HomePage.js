import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Go <Link to={"/products"}>to list of products</Link>.
      </p>
    </div>
  );
};

export default HomePage;
