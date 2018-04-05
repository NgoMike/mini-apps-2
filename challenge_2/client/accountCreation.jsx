import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ShippingAddress from './shippingAddress.jsx';


const AccountCreation = () => (
  <div>
    <h2>Form 1: Account Creation</h2>
    <form>
      <label>
        <div>
          Name:
          <input type="text" name="name" />
        </div>
        <div>
          Email:
          <input type="text" name="email" />
        </div>
        <div>
          Password:
          <input type="text" name="password" />
        </div>
      </label>
      <input type="submit" value="Submit" />
    </form>
    <button>Next</button>
  </div>
);



export default AccountCreation;