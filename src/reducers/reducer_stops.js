import { FETCH_STOPS } from '../actions/index';

export default function (state=[], action)  {
   switch(action.type) {
   case FETCH_STOPS: 
      if (action.error) {
         return {message: "That is not a valid address"};
      }
      if (action.payload.data.resultSet.location) {
         return action.payload.data.resultSet.location;
      } else {
         return {message: "There are no stops near that address."};
      }
   }

   return state;
}