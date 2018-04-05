import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';
import $ from 'jquery';
import { chartData } from './chart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoData: [],
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    $.ajax({
      method: 'GET',
      url: '/coins',
      success: (data) => {
        this.setState({
          cryptoData: data,
        });
        chartData.datasets[0].data = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  render() {
    return (
      <div>
        <h2>CryptoCoinsTracker</h2>
        <Line data={chartData} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
