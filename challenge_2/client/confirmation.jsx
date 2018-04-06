import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Home from './home.jsx';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.fetch = this.fetch.bind(this);
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

  render() {
    return (
      <div>
        <h2>Confirmation Summary</h2>
        <div>{this.state.data}</div>
        <button><Link to="/">Purchase</Link></button>
      </div>
    );
  }
}

export default Confirmation;
