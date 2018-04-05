import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Routers from './router.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      value: '',
    };
    this.fetch = this.fetch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    $.ajax({
      url: '/shoppingCart',
      method: 'GET',
      success: (data) => {
        this.setState({
          data: data,
        });
      },
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log('Submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h1>Check It Out</h1>
        <Routers />
        <button>Check Out</button>

        <hr />

        <form onSubmit={this.handleSubmit}>
          <label>
            <div>
              Name:
              <input type="text" name={this.state.value} onChange={this.handleChange} />
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

        <hr />

        <form onSubmit={this.handleSubmit}>
          <label>
            <div>
              Address Line1:
              <input type="text" name={this.state.value} onChange={this.handleChange} />
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

        <hr />
        
        <form onSubmit={this.handleSubmit}>
          <label>
            <div>
              Credit Card Number:
              <input type="text" name={this.state.value} onChange={this.handleChange} />
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

        <hr />
          
        <button>Purchase</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
