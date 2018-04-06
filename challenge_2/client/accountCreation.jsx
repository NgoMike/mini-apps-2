import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class AccountCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: '/shoppingCart',
      method: 'POST',
      contentType: "application/json",
      data: data,
      success: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Form 1: Account Creation</h2>
        <form>
          <label>
            <div>
              Name:
              <input type="text" onChange={this.handleNameChange} />
            </div>
            <div>
              Email:
              <input type="text" onChange={this.handleEmailChange} />
            </div>
            <div>
              Password:
              <input type="text" onChange={this.handlePasswordChange} />
              <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
            </div>
          </label>
        </form>
        <button><Link to="/Shipping">Next</Link></button>
      </div>
    );
  }
}

export default AccountCreation;
