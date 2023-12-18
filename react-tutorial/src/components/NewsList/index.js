import React from "react";
import "./index.css"
import NewsItem from "../NewsItem";


function NewsList(props) {
    return (
        <ul className="series-list" >
            {props.news.map((n, i) => <NewsItem newsItem={n} newsIndex={i} />)}
        </ul>
    )
}


export default NewsList;
