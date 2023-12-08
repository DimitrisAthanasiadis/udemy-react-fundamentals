import logo from '../../logo.svg';
import './App.css';
import Intro from '../Intro';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: []
    };
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
          length of series array - {this.state.series.length}
        </header>
      </div>
    );
  }
}

export default App;
