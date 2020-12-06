import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav>
      {/* <Link to='/'>
        <button className='nav_btn'>Home</button>
      </Link> */}
      <Link to='/students'>
        <button className='nav_btn'>Back to Student List</button>
      </Link>
    </nav>
  );
};

export default Nav;
