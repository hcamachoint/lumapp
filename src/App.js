import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <RaisedButton label="Default" />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
