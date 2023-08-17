import React, { useState }  from 'react';
import icon from '../../../public/favicon.ico';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleSearchClick } from '../../utils/api'; // Import the function from the utility file

// Add a hover effect by changing the link color on hover
// linkStyle[':hover'] = {
//   color: '#FF5733', // Change to the color you want on hover
// };

const Navbar = () => {

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
    borderBottom: '1px solid #E0E0E0',
    padding: '0 20px',
  };

  const titular = {
    fontSize: '22px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '300px',
  };

  const linkContainerStyle = {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    marginRight: '300px'
  };

  const linkStyle = {
    color: '#9E9E9E',
    textDecoration: 'none',
    fontSize: '20px',
    margin: '0 10px',
    transition: 'color 0.3s ease',
  };

  return (
    <nav style={navbarStyle}>
      <div style={titular}>
        <img src={icon} style={{ width: '24px', height: '24px', marginRight: '10px' }} />
        Howticulture
        </div>
        
      <ul style={linkContainerStyle}>
        <li><a href="/" style={linkStyle}>Home</a></li>
        <li><a href="/about" style={linkStyle}>About</a></li>
        <li><a href="/community" style={linkStyle}>Community</a></li>
        {/* Add more links if needed */}
      </ul>
    </nav>


    
  );
}

export default Navbar;