import React from 'react';

const ShippingAddress = () => (
  <div>
    <h2>Form2: Shipping Address</h2>
    <form>
    <label>
      <div>
        Address Line1:
        <input type="text" name="line1" />
      </div>
      <div>
        Address Line2:
        <input type="text" name="line2" />
      </div>
      <div>
        City:
        <input type="text" name="city" />
      </div>
      <div>
        State:
        <input type="text" name="state" />
      </div>
      <div>
        Zip Code:
        <input type="text" name="zip" />
      </div>
      <div>
        Phone:
        <input type="text" name="phone" />
      </div>
    </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default ShippingAddress;
