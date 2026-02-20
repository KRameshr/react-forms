import React from "react";
import Controlledform from "./Controlledform";
import Uncontrolled from "./Uncontrolled";
import Formikvalidation from "./Formikvalidation";

const Home = () => {
  return (
    <>
      <Controlledform />
      <hr className="my-8" />
      <Uncontrolled />
      <hr className="my-8" />
      <Formikvalidation />
    </>
  );
};

export default Home;
