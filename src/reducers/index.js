import { combineReducers } from 'redux';
import users from './userReducer';
import employees from './employeeReducer';

export default combineReducers({
  users: users,
  employees: employees
});