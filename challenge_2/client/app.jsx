import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Routers from './router.jsx';
// import AccountCreation from './accountCreation.jsx';

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
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Check It Out</h1>
        <Routers />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
