import React from "react";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error Occured!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default Error;
