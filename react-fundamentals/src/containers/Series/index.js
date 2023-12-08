import React, {Component} from "react";
import SeriesList from "../../components/SeriesList";


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
                <SeriesList list={this.state.series} />
            </div>
        )
    }
}


export default Series
