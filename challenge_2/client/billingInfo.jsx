import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Confirmation from './confirmation.jsx';

class BillingInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      exp: 0,
      cvv: 0,
      zipCode: 0,
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleExpChange = this.handleExpChange.bind(this);
    this.handleCvvChange = this.handleCvvChange.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNumberChange(event) {
    this.setState({
      number: event.target.value,
    });
  }

  handleExpChange(event) {
    this.setState({
      exp: event.target.value,
    });
  }

  handleCvvChange(event) {
    this.setState({
      cvv: event.target.value,
    });
  }

  handleZipCodeChange(event) {
    this.setState({
      zipCode: event.target.value,
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
        <h2>Form 3: Billing Info</h2>
        <form>
          <label>
            <div>
              Credit Card Number:
              <input type="text" onChange={this.handleNumberChange} />
            </div>
            <div>
              Expiration:
              <input type="text" onChange={this.handleExpChange} />
            </div>
            <div>
              CVV:
              <input type="text" onChange={this.handleCvvChange} />
            </div>
            <div>
              Zip Code:
              <input type="text" onChange={this.handleZipCodeChange} />
              <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
            </div>
          </label>
        </form>
        <button><Link to="/Confirm">Next</Link></button>
      </div>
    );
  }
}

export default BillingInfo;
