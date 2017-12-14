import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ArrivalsList from '../containers/arrivals_list';
import StopsList from '../containers/stops_list';
export default class App extends Component {
  render() {
    return (
      <div className="">
         <div className="jumbotron">
            <h1>Local Trimet Search</h1>
            <SearchBar />
         </div>


         <ArrivalsList />
         <StopsList />
      </div>
    );
  }
}
