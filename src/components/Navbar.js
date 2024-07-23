import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/licenses">Licenses</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/customers">Customers</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;