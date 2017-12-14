import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import SearchBar from './containers/search_bar';
import ArrivalsList from './containers/arrivals_list';
import StopsList from './containers/stops_list';
class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Trimet Transit</h1>
        </header>
        <SearchBar />
        <ArrivalsList />
       <StopsList />
      </div>
    );
  }
}

export default App;
