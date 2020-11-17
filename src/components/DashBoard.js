import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions';

class DashBoard extends React.Component {
  
  componentDidMount() {
    this.props.fetchEmployees();
  }
  
  renderList() {
    return this.props.employees.map(employee => {
      let fullName = employee.firstName + " " + employee.lastName
      return (
        <div className="table" key={employee.id}>
          <div className="card">
              <div className="card-body">
                <div>{fullName}</div>
              </div>
          </div>
        </div>
      );
    })
  }

  render () {
    return (
      <div className="dash container-fluid">
        <div className="header text-center">
          <h5>Employee Home</h5>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Link to="/info" className="user-name" style={{textDecoration: 'none'}}><h4>Hi, Jeba</h4></Link>
              <p>A warm welcome to the Ramco System's Family!!</p>
            </div>
            <div className="col-md-4">
              <img src="./assets/images/user.png" alt="user" className="profile" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="jumbotron">
            <h5>About Ramco</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="container">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { employees: state.employees }
}

export default connect(mapStateToProps, { fetchEmployees })(DashBoard);
