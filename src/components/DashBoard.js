import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchEmployees, fetchProfiles } from '../actions';
const columnHeader =["Id","FirstName", "LastName", "Dob", "Gender", "Nationality", "Ethenicity", "Status"];

class DashBoard extends React.Component {
  
  componentDidMount() {
    this.props.fetchEmployees();
    this.props.fetchProfiles();
  }


  renderHeader = () => {
    let res=[];
    for(var i =0; i < columnHeader.length; i++){
      res.push(<th key={columnHeader[i]}>{columnHeader[i]}</th>)
    }
    return res;
  }
  renderTableData = () => {
    let res=[];
    let tableData = this.props.employees;
    for(var i =0; i < tableData.length; i++){
        res.push(
         <tr >
          <td key={tableData[i].id}>{tableData[i].id}</td>
          <td key={tableData[i].firstName}>{tableData[i].firstName}</td>
          <td key={tableData[i].lastName}>{tableData[i].lastName}</td>
          <td key= {tableData[i].dob}>{tableData[i].dob}</td>
          <td key={tableData[i].gender}>{tableData[i].gender}</td>
          <td key={tableData[i].nationality}>{tableData[i].nationality}</td>
          <td key={tableData[i].ethenicity}>{tableData[i].ethenicity}</td>
          <td key={tableData[i].status}>{tableData[i].status}</td>

        </tr>
        )
    }
    return res;
  }

 
  renderProfiles() {
    return this.props.profiles.map(profile => {
      return (
        <div>
          <div className="row" key={profile.id}>
            <div className="col-md-8">
              <Link to="/info" className="user-name" style={{textDecoration: 'none'}}><h4>Hi, {profile.name}</h4></Link>
              <p>{profile.description}</p>
            </div>
            <div className="col-md-4">
              <img src={profile.profile_image} alt="user" className="profile"/>
            </div>
          </div>
          <div className="jumbotron">
            <h5>About Ramco</h5>
            <p>{profile.company_description}</p>
          </div>
        </div>
      );
    });
  }



  render () {
    return (
      <div className="dashboard container-fluid">
        <div className="header text-center">
          <h5>Employee Home</h5>
        </div>
        <div className="user-info container">
          {this.renderProfiles()}
        </div>
        <div className="container">
          <h5>Videos</h5>
          <div className="videos_info row">
            <div className="col-md-12">
              <div id="blogCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#blogCarousel" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                        {this.props.profiles.map((item, index) => (
                          <>
                          {item.videos.map((v, i) => (
                          <div className="col-sm-3 col-xs-6" key={i}>
                            <img src={v.img} alt="slider_image" className="slider_img" />
                          </div>
                          ))}
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="todo container">
        <h4>ToDo</h4>
            <div className="container text-center">
              <div class="row">
                <div class="col-sm-3">
                  <i class="fa fa-lock" aria-hidden="true" ></i>              
                  <p >Confidentiality Agreement</p>
                </div>
                <div class="col-sm-3">
                  <i class="fa fa-address-card-o" aria-hidden="true"></i>              
                  <p >GDPR</p>
                </div>
                <div class="col-sm-3">
                  <i class="fa fa-shield" aria-hidden="true"></i>             
                  <p>Desktop Security Agreement</p>
                </div>
                <div class="col-sm-3">
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                  <p>Code Of Conduct</p>
                </div>
              </div>
            </div>
        </div>

        <div className="footer container">
            <div className="row">
              <div className="col-sm-12">
                <ul className="row list-unstyled">
                  <li class="col-sm-12">
                  {this.props.profiles.map((item, index) => (
                            <>
                            {item.data.map((d, i) => (
                            <div className="row content">
                              <div className="col-sm-3" key={i}>
                                <img src={d.image} alt="check" className="check" />
                              </div>
                              <div className="col-sm-6">
                                <p>{d.text}</p>
                              </div>
                              <div className="col-sm-3">
                                <span className="details">0%</span>
                              </div>
                            </div>
                            ))}
                          </>
                        ))}    
                    
                  </li>
                </ul>
            </div>
            </div>
        </div>    
        
        <div className="employee-list container"> 
          <h5>Employee Data</h5>
          <table className="table table-bordered">
            <thead>
                <tr>
                {this.renderHeader()}
                </tr>
            </thead>
            <tbody>
                {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    employees: state.employees,
    profiles: state.profiles
   }
}

export default connect(mapStateToProps, { fetchEmployees, fetchProfiles })(DashBoard);
