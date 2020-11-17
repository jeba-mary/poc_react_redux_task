import React from 'react';

class Family extends React.Component {

  state = {
    fatherName: "",
    motherName: ""
  }
  

	handleChange = (evt) => {
		const value = evt.target.value;
		this.setState({
			...this.state,
			[evt.target.name]: value
		});
  }

  render() {
    return (
      <div className="family-info">
        <div className="container-fluid">
          <form>
              <div class="form-group">
                <label for="father_name">Father Name</label>
                <input type="text" name="fatherName" class="form-control" value={this.state.fatherName} onChange={this.handleChange} id="father_name"/>
              </div>
              <div class="form-group">
                <label for="mother_name">Mother Name</label>
                <input type="text" name="motherName" class="form-control" value={this.state.motherName} onChange={this.handleChange} id="mother_name"/>
              </div>
              <div className="text-center">
								<button type="submit" className="btn">Save</button>
							</div>
          </form>
        </div>
      </div>
    )
  }
}

export default Family;