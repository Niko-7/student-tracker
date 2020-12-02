import React from 'react';
import { Router, Link } from '@reach/router';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/api/students'>
        <button>Students</button>
      </Link>
      <button>Blocks</button>
    </nav>
  );
};

export default Nav;
