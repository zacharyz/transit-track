import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

class ArrivalsList extends Component {
   renderArrival(arrivalData) {
      return (
         <tr key={arrivalData.block}>
            <td>{`Arriving ${moment(arrivalData.estimated).fromNow()}`}</td>
            <td>{arrivalData.fullSign}</td>
         </tr>
      )

   }
   render() {
      // 
      if (this.props.arrivals.length == 0) {
         return <div />;
      }
      return(
         <div className="row">
         <h2>Arrivals</h2>
         <table className="table table-hover">
            <thead>
               <tr>
                  <th>eta</th>
                  <th>description</th>
               </tr>
            </thead>
            <tbody>
               {this.props.arrivals.map(this.renderArrival)}
            </tbody>
         </table>
         </div>
      );
   }
}

function mapStateToProps({arrivals}) {
   return {arrivals};

}

export default connect(mapStateToProps)(ArrivalsList);