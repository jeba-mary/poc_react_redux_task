import { FETCH_PROFILES } from '../actions';

export default function profileReducer(state = [], action) {  
  switch (action.type) {
    case FETCH_PROFILES:                                               
      return action.payload;

    default:                                                             
      return state;
  }
}