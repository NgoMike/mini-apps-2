import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import BillingInfo from './billingInfo.jsx';

class ShippingAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipCode: 0,
      phone: 0,
    };
    this.handleLine1Change = this.handleLine1Change.bind(this);
    this.handleLine2Change = this.handleLine2Change.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLine1Change(event) {
    this.setState({
      line1: event.target.value,
    });
  }

  handleLine2Change(event) {
    this.setState({
      line2: event.target.value,
    });
  }

  handleCityChange(event) {
    this.setState({
      city: event.target.value,
    });
  }

  handleStateChange(event) {
    this.setState({
      state: event.target.value,
    });
  }

  handleZipCodeChange(event) {
    this.setState({
      zipCode: event.target.value,
    });
  }

  handlePhoneChange(event) {
    this.setState({
      phone: event.target.value,
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
        <h2>Form 2: Shipping Address</h2>
        <form>
          <label>
            <div>
              Address Line1:
              <input type="text" onChange={this.handleLine1Change} />
            </div>
            <div>
              Address Line2:
              <input type="text" onChange={this.handleLine2Change} />
            </div>
            <div>
              City:
              <input type="text" onChange={this.handleCityChange} />
            </div>
            <div>
              State:
              <input type="text" onChange={this.handleStateChange} />
            </div>
            <div>
              Zip Code:
              <input type="text" onChange={this.handleZipCodeChange} />
            </div>
            <div>
              Phone:
              <input type="text" onChange={this.handlePhoneChange} />
              <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
            </div>
          </label>
        </form>
        <button><Link to="/Billing">Next</Link></button>
      </div>
    );
  }
}

export default ShippingAddress;
