import logo from '../../logo.svg';
import './App.css';
import Intro from '../Intro';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: ["Vikings"]
    };
  }

  componentDidMount() {
    const series = ["Peaky Blinders", "Supernatural"];
    setTimeout(() => {
      this.setState({series});
    }, 5000);
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
          <p>series contains - {this.state.series}</p>
          <p>length of series array - {this.state.series.length}</p>
        </header>
      </div>
    );
  }
}

export default App;
