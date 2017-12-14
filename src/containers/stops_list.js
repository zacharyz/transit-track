import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArrivals } from '../actions/index';

class StopsList extends Component {
   constructor(props) {
      super(props);
      this.state = { selectedStop: ''};
      this.onStopSelect = this.onStopSelect.bind(this);
      this.renderStop = this.renderStop.bind(this);
   }
   onStopSelect(locID) {
      this.setState({selectedStop: locID})
      this.props.fetchArrivals(locID);
   }
   renderStop(stopData) {
      return (
         <tr key={stopData.locid}
            onClick={() => this.onStopSelect(stopData.locid)}
         >
            <td>{stopData.dir}</td>
            <td>{stopData.desc}</td>
         </tr>
      )

   }
   renderStopsTable() {

   }
   render() {
      if (this.props.stops.message) {
         return <div>{this.props.stops.message}</div>;
      }
      if (this.props.stops.length > 0) {
         return (
            <div className="row">
         <h2>Stops</h2>
            <table className="table table-hover">
               <thead>
                  <tr>
                     <th>direction</th>
                     <th>name</th>
                  </tr>
               </thead>
               <tbody>
                  {this.props.stops.map(this.renderStop)}
               </tbody>
            </table>
            </div>
         );   
      } else {
         return <div /> 
      }
   }
}


function mapDispatchToProps(dispatch) {
   return bindActionCreators({fetchArrivals}, dispatch);
}


function mapStateToProps({stops}) {
   return {stops};

}

export default connect(mapStateToProps, mapDispatchToProps)(StopsList);