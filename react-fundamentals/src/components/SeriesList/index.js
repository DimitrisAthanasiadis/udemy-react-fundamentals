import React from "react";
import "./index.css"


const SeriesListItem = ({series}) => (
    <li key={series.id}>
        <h2>{series.name}</h2>
        <p>{series.summary}</p>
    </li>
)


const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list" >
                {props.list.map(series => (
                    <SeriesListItem series={series} />
                ))}
            </ul>
        </div>
    )
}


export default SeriesList;
