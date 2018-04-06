import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <button><Link to="/Account">Check Out</Link></button>
  </div>
);

export default Home;
