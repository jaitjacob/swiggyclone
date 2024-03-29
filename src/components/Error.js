import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError(); // Here, error is assigned, not err
  console.log(error); // Corrected to log 'error', not 'err'
  return (
    <div>
      <h1>Ooops!!!</h1>
      <h2>Something went wrong !!!!</h2>
      <h3>
        {error.status}:{error.statusText}
      </h3>
    </div>
  );
};

export default Error;
