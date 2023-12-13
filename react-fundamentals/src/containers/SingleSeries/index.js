import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const SingleSeries = () => {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    // This block of code will run when the component mounts
    // You can perform any side effects or data fetching here

    // For demonstration purposes, let's simulate fetching show data
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        setShowData(data);
      });

    // Clean-up function (optional) will run when the component unmounts
    return () => {
      // Perform any clean-up actions here
    };
  }, [showId]); // The dependency array ensures the effect runs when showId changes

  if (!showData) {
    return <Loader />;
  }

  return (
    <div>
      <h1>
        <a target="blank" href={showData.url}>
          {showData.name}
        </a>
      </h1>
      {/* Render showData or other components based on the fetched data */}
      <img src={showData.image.medium} />
      <div>
        <p>Premiered: {showData.premiered}</p>
        <p>Ended: {showData.ended}</p>
        <p>Rating: {showData.rating.average}</p>
        <p>Summary: {showData.summary}</p>
      </div>
    </div>
  );
};

export default SingleSeries;
