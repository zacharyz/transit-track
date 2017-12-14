import { combineReducers } from 'redux';
import StopsReducer from './reducer_stops';
import ArrivalsReducer from './reducer_arrivals';

const rootReducer = combineReducers({
  stops: StopsReducer,
  arrivals: ArrivalsReducer
});

export default rootReducer;
