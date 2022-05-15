import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem 2rem',
        backgroundColor: 'rgb(92, 184, 200)',
      }}
    >
      <Link
        to='/'
        style={{
          color: 'white',
          fontWeight: 'bold',
          marginTop: '0.5rem',
        }}
      >
        <p
          style={{
            marginRight: '1rem',
          }}
        >
          Alkitab
        </p>
      </Link>

      <Link
        to='/about'
        style={{
          color: 'white',
          fontWeight: 'bold',
          marginTop: '0.5rem',
        }}
      >
        <p>About</p>
      </Link>
    </nav>
  );
};

export default Navigation;
