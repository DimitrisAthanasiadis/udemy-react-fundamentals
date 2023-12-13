import React, { Component, useEffect, useState } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";
import Intro from "../../components/Intro";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [seriesName, setSeriesName] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const onSeriesInputChange = (e) => {
    setSeriesName(e.target.value);
    setIsFetching(true);
  };

  useEffect(() => {
    if (seriesName.trim() === "") {
      setIsFetching(false);
      setSeries([]);

      return;
    }

    fetch(`https://api.tvmaze.com/search/shows?q=${seriesName}`)
      .then((response) => response.json())
      .then((json) => {
        setSeries(json.map((show) => show.show));
        setIsFetching(false);
      });
  }, [seriesName]);

  return (
    <div>
      <Intro message="Here you can find all of your most loved series" />
      <div>
        <input value={seriesName} type="text" onChange={onSeriesInputChange} />
      </div>
      {!isFetching && series.length === 0 && seriesName.trim() === "" && (
        <p>Please enter a series name into the input</p>
      )}
      {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
        <p>No TV series found with this name</p>
      )}
      {isFetching && <Loader />}
      {!isFetching && <SeriesList list={series} />}
    </div>
  );
};

export default Series;
