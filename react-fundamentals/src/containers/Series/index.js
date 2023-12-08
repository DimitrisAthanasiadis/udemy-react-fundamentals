import React, {Component} from "react";


class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
          series: ["Vikings"]
        };
    }
    
    componentDidMount() {
        fetch("https://api.tvmaze.com/search/shows?q=Vikings")
        .then(response => response.json())
        .then(json => this.setState({ "series": json.map(show => show.show) }))
    }

    render() {
        return (
            <div>
                <p>length of series array - {this.state.series.length}</p>
                <ul>
                    {this.state.series.map((show) => (
                    <li key={show.id}>
                        <h2>{show.name}</h2>
                        <p>{show.summary}</p>
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default Series
