import { FETCH_ARRIVALS } from '../actions/index';

export default function (state=[], action)  {
   switch(action.type) {
   case FETCH_ARRIVALS: 
      if (action.payload.data.resultSet.arrival) {
         return action.payload.data.resultSet.arrival;
      } else {
         return [];
      }
   }

   return state;
}