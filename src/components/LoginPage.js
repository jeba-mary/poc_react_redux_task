import React from 'react';
import { login } from '../actions';
import { connect } from 'react-redux';

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = (e) => {
    e.persist();
    this.setState(() => ({
        [e.target.name]: e.target.value 
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div class="container">
        <div className="heading text-center">
          <h4>ramco</h4>
          <p>Welcomes you onboard!</p>
        </div>
        <div className="jumbotron">
          <div class="user-form row text-black">
            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                  <div class="px-2">
                    <form onSubmit={this.handleSubmit} class="justify-content-center">
                      <div class="form-group">
                        <input name="email" value={this.state.email} onChange={this.handleChange} class="form-control" id="email" placeholder="Email" />
                      </div>
                      <div class="form-group">
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} class="form-control"  id="pwd" placeholder="Password" />
                      </div>
                      <button class="submit btn " type="submit">Sign In</button>
                    </form>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}
const mapStateToProps = { login }
export default connect(null, mapStateToProps)(LoginPage);