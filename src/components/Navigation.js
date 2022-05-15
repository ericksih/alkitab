import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='nav-wrapper'>
      <Link to='/' className='nav-link'>
        <p>Alkitab</p>
      </Link>

      <Link to='/about' className='nav-link'>
        <p>About</p>
      </Link>
    </nav>
  );
};

export default Navigation;
