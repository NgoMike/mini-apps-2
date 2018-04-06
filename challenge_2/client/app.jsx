import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AccountCreation from './accountCreation.jsx';
import ShippingAddress from './shippingAddress.jsx';
import BillingInfo from './billingInfo.jsx';
import Confirmation from './confirmation.jsx';
import Home from './home.jsx';

const App = () => (
  <div>
    <h1>Check It Out</h1>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Account" component={AccountCreation} />
        <Route path="/Shipping" component={ShippingAddress} />
        <Route path="/Billing" component={BillingInfo} />
        <Route path="/Confirm" component={Confirmation} />
      </div>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
