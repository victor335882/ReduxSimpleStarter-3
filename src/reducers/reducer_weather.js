import {FETCH_WEATHER} from '../actions/index';

//due to we want to list our data
//we initial our state as an array
export default function(state = [], action) {
  swith(action.type {
    case FETCH_WEATHER;
    //the rule in react is that only modify state by setState
    //the state will be modify, if we do
    //return state.push(action.payload.data);
    //so we use state.concat to replace it
    //to return a new state in following way
    //return state.concat([action.payload.data]);
    //we can write in ES6 syntax
    return [ action.payload.data, ...state];
    //make new array and put action.payload.data inside of it
    //as first item, and list our origin state in second itenm
    //and then return this new array to our state argument
  }
  return state;
}
