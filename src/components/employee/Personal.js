import React from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addEmployee } from '../../actions';

class Personal extends React.Component {
	state = {
		firstName: "",
		middleName: "",
		lastName: "",
		dob: new Date(),
		gender: "male",
		nationality: "",
		ethenicity: "",
		status:"single",
		spouseName: ""
	}

	handleDateChange = (date) => {
    this.setState({
      dob: date
    });
	}

	handleChange = (evt) => {
		const value = evt.target.value;
		this.setState({
			...this.state,
			[evt.target.name]: value
		});
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addEmployee(this.state);
	}

  render() {
    return (
			<div className="personel-info">
				<div className="container-fluid">
						<form onSubmit={this.handleSubmit}>
							<div class="form-group">
								<label for="first-name">First Name</label>
								<input type="text" class="form-control"  id="first-name" value={this.state.firstName} name="firstName" onChange={this.handleChange}/>
							</div>
							<div class="form-group">
								<label for="middle-name">Middle Name</label>
								<input type="text" class="form-control"  id="middle-name" value={this.state.middleName} name="middleName" onChange={this.handleChange}/>
							</div>
							<div class="form-group">
								<label for="last-name">Last Name</label>
								<input type="text" class="form-control" id="last-name" value={this.state.lastName} name="lastName" onChange={this.handleChange}/>
							</div>
							<div className="myContainer">
								<label for="dob">Date of Birth</label>
								<DatePicker selected={this.state.dob} onChange={this.handleDateChange} id="dob"  dateFormat="MMMM d, yyyy" class="myDatePicker"/>                
							</div><br />
							<div class="gender">
								<label>Gender</label>
								<div className="form-group">
									<div class="form-check-inline">
										<label class="form-check-label">
											<input type="radio" class="form-check-input" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>Male
										</label>
									</div>
									<div class="form-check-inline">
										<label class="form-check-label">
											<input type="radio" class="form-check-input" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>Female
										</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="nationality">Nationality</label>
								<input type="text" class="form-control"  id="nationality" value={this.state.nationality} name="nationality" onChange={this.handleChange} />
							</div>
							<div class="form-group">
								<label for="ethenicity">Ethnicity</label>
								<input type="text" class="form-control" id="ethenicity" value={this.state.ethenicity} name="ethenicity" onChange={this.handleChange}/>
							</div>

							<div class="form-group">
								<label for="status">Marital Status</label>
								<select class="form-control" id="status" name="status" value={this.state.status} onChange={this.handleChange}>
									<option value="single">Single</option>
									<option value="married">Married</option>
									<option value="widow">Widow</option>
								</select>
							</div>

							<div class="form-group">
								<label for="spouse-name">Spouse Name</label>
								<input type="text" class="form-control" id="spouse-name" value={this.state.spouseName} name="spouseName" onChange={this.handleChange}/>
							</div>
							<div className="text-center">
								<button type="submit" className="btn btn-primary">Save</button>
							</div>
						</form>
					</div>
			</div>
    )
  }
}

const mapStateToProps = { addEmployee }

export default connect(null, mapStateToProps )(Personal);