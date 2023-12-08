import logo from '../../logo.svg';
import './App.css';
import Intro from '../Intro';
import { Component } from 'react';
import "whatwg-fetch";
import Series from '../../containers/Series';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Intro message="Here you can find all of your most loved series" />
          <Series/>
        </header>
      </div>
    );
  }
}

export default App;
