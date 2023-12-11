import React from "react";
import { useParams } from "react-router-dom";

const SingleSeries = () => {
  // Access URL parameters using useParams hook
  const { id } = useParams();

  return (
    <div>
      <p>Single Series - the show id is {id}</p>
    </div>
  );
};

export default SingleSeries;
