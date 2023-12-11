import React, {Component} from "react";
import SeriesList from "../../components/SeriesList";


class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
          series: []
        };
    }

    onSeriesInputChange = e => {
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({ "series": json.map(show => show.show) }))
    }

    render() {
        return (
            <div>
                <p>length of series array - {this.state.series.length}</p>
                <input type="text" onChange={this.onSeriesInputChange} />
                <SeriesList list={this.state.series} />
            </div>
        )
    }
}


export default Series
