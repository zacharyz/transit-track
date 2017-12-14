import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStopsWithLocation, fetchStops } from '../actions/index';

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = { term: ''};
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.getCurrentLocation = this.getCurrentLocation.bind(this);
   }

   onInputChange(event) {
      this.setState({term: event.target.value})
   }
   onFormSubmit(event) {
      event.preventDefault();

      // fetch long/lat then fetch stops for that
      this.props.fetchStops(this.state.term);
      this.setState({term:''});
   }
   getCurrentLocation(event) {
      console.log("get current location called")
      if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition((success)=>{
         if (success.coords) {
            const lat = success.coords.latitude;
            const lng = success.coords.longitude;
            this.props.fetchStopsWithLocation(lat, lng);
         } 
        }, (error)=>{console.log("error", error)})
      } else {
        /* geolocation IS NOT available */
      }
   }
   render() {
      return (
         <div className="row">
            <form onSubmit={this.onFormSubmit} className="input-group">
               <input 
                  placeholder="Get arrival times for near by stops"
                  className="form-control"
                  value={this.state.term}
                  onChange={this.onInputChange}
               />
               <span className="input-group-btn">
                  <button type="submit" className="btn btn-secondary">Submit</button>
               </span>
            </form>
            <button className= "btn btn-link"onClick={this.getCurrentLocation}>Use Current Location</button>
         </div>
      );
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({fetchStops, fetchStopsWithLocation}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);