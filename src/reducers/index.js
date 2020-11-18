import { combineReducers } from 'redux';
import users from './userReducer';
import employees from './employeeReducer';
import profiles from './profileReducer';

export default combineReducers({
  users: users,
  employees: employees,
  profiles: profiles
});