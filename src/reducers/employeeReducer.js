import { FETCH_EMPLOYEES, CREATE_EMPLOYEE} from '../actions';

export default function employeeReducer(state = [], action) {  
  switch (action.type) {
    case FETCH_EMPLOYEES:                                               
      return action.payload;

    case CREATE_EMPLOYEE:
      return [action.payload, ...state];
      
    default:                                                             
      return state;
  }
}