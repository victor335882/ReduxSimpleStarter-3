import {FETCH_WEATHER} from '../actions/index';


export default function(state = [], action) {
  swith (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }
  return state;
}
