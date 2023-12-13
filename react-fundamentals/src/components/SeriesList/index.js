import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const SeriesListItem = ({ series }) => (
  <li>
    <Link to={`/series/${series.id}`}>{series.name}</Link>
  </li>
);

const SeriesList = (props) => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map((series) => (
          <SeriesListItem series={series} key={series.id} />
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
