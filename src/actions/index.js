import axios from 'axios';
import history from '../history';

export const SIGN_IN = 'SIGN_IN';
export const FETCH_PROFILES = 'FETCH_PROFILES';
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';

export const login = (data) => {
  return dispatch => {
    dispatch({
      type: SIGN_IN,
      user: data
    })
    history.push('/dashboard');
  }
}

export const fetchProfiles = () => {
  return dispatch => {
    return axios.get("http://localhost:3002/profiles").then((response) => {
      console.log(response);
      dispatch({ 
        type: FETCH_PROFILES, 
        payload: response.data 
      });
    })
  }
}

export const fetchEmployees = () => {
  return dispatch => {
    return axios.get("http://localhost:3001/employees").then((response) => {
      console.log(response);
      dispatch({ 
        type: FETCH_EMPLOYEES, 
        payload: response.data 
      });
    })
  }
}

export const addEmployee = ({firstName, middleName, lastName, dob, gender, nationality, ethenicity, status,spouseName }) => {
  return dispatch => {
    return axios.post("http://localhost:3001/employees", {firstName, middleName, lastName, dob, gender, nationality, ethenicity, status,spouseName})
    .then(response => {
      let data = response.data;
      dispatch({
        type: CREATE_EMPLOYEE, 
        payload: {
          id: data.id, 
          firstName: data.firstName, 
          middleName: data.middleName,
          lastName: data.lastName,
          dob: data.dob,
          gender: data.gender,
          nationality: data.nationality,
          ethenicity: data.ethenicity,
          status: data.status,
          spouseName: data.spouseName
        }
      })
    })
    .then(() => {
      history.push("/dashboard")
    })
    .catch(error => { throw(error)});
  };
};