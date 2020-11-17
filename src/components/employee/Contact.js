import React from 'react';

class Contact extends React.Component {
  state = {
		phone: ""
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
      <div className="contact-info">
        <div className="container-fluid">
          <form>
              <div class="form-group">
                <label for="contact-number">Phone</label>
                <input type="text" name="phone" class="form-control" placeholder="Phone Number" value={this.state.phone}  onChange={this.handleChange} id="contact-number"/>
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

export default Contact