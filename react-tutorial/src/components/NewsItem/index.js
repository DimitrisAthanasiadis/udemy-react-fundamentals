import React from "react";


function NewsItem(props) {
    return (
        <li key={props.newsIndex}>{props.newsItem.title}</li>
    )
}


export default NewsItem;
