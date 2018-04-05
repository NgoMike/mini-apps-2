import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const AccountCreation = () => (
  <div>
    <h2>Form1: Account Creation</h2>
  </div>
);

const ShippingAddress = () => (
  <div>
    <h2>Form2: Shipping Address</h2>
  </div>
);

const BillingInfo = () => (
  <div>
    <h2>Form3: Billing Info</h2>
  </div>
);

const Confirmation = () => (
  <div>
    <h2>Confirmation Summary</h2>
  </div>
);

const Routers = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AccountCreation">AccountCreation</Link></li>
        <li><Link to="/ShippingAddress">ShippingAddress</Link></li>
        <li><Link to="/BillingInfo">BillingInfo</Link></li>
        <li><Link to="/Confirmation">Confirmation</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/AccountCreation" component={AccountCreation} />
      <Route path="/ShippingAddress" component={ShippingAddress} />
      <Route path="/BillingInfo" component={BillingInfo} />
      <Route path="/Confirmation" component={Confirmation} />
    </div>
  </Router>
);

export default Routers;
