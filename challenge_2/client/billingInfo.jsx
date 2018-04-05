import React from 'react';

const BillingInfo = () => (
  <div>
    <h2>Form3: Billing Info</h2>
    <form>
      <label>
        <div>
          Credit Card Number:
          <input type="text" name="name" />
        </div>
        <div>
          Expiration:
          <input type="text" name="exp" />
        </div>
        <div>
          CVV:
          <input type="text" name="cvv" />
        </div>
        <div>
          Zip Code:
          <input type="text" name="zip" />
        </div>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default BillingInfo;
