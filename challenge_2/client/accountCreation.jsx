import React from 'react';

const AccountCreation = () => (
  <div>
    <h2>Form1: Account Creation</h2>

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
  </div>
);



export default AccountCreation;