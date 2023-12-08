import logo from '../../logo.svg';
import './App.css';
import Intro from '../Intro';
import { Component } from 'react';
import "whatwg-fetch";


class App extends Component {
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Intro message="Here you can find all of your most loved series" />
          <ul>
            {this.state.series.map((show) => (
              <li key={show.id}>
                <h2>{show.name}</h2>
                <p>{show.summary}</p>
              </li>
            ))}
          </ul>
          <p>length of series array - {this.state.series.length}</p>
        </header>
      </div>
    );
  }
}

export default App;
