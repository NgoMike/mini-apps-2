import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AccountCreation from './accountCreation.jsx';
import ShippingAddress from './shippingAddress.jsx';
import BillingInfo from './billingInfo.jsx';
import Confirmation from './confirmation.jsx';
import Home from './home.jsx';

const Routers = () => (
  <Router>
    <div>
      <ul>
        <span><Link to="/">Home | </Link></span>
        <span><Link to="/AccountCreation">AccountCreation | </Link></span>
        <span><Link to="/ShippingAddress">ShippingAddress | </Link></span>
        <span><Link to="/BillingInfo">BillingInfo | </Link></span>
        <span><Link to="/Confirmation">Confirmation</Link></span>
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
