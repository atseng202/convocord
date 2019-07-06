import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = ({}) => (
  <div>
    <h1>404</h1>
    <p>You look lost! Here is the home page.</p>
    <Link to="/">Home</Link>
  </div>
);

export default NoMatch;
