import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/students">
        <button>Students</button>
      </Link>
      <button>Blocks</button>
    </nav>
  );
};

export default Nav;
