import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleSearchClick } from '../../utils/api'; 
import styles from '../../styles/global.module.css'

// Add a hover effect by changing the link color on hover
// linkStyle[':hover'] = {
//   color: '#FF5733', // Change to the color you want on hover
// };


const Navbar = () => {
  const fontStyles = `
  @font-face {
    font-family: 'ClimbingPlant ' !important;
    src: url('./pete.ttf') format('truetype');
  }
`;

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
    letterSpacing: '5px',
    fontFamily: 'ClimbingPlant',
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
      <div className="howticulture-nav-title" style={titular}>
        <img src="/favicon.ico" style={{ width: '24px', height: '24px', marginRight: '10px' }} alt="Icon" />
        Howticulture
      </div>
        
      <ul style={linkContainerStyle}>
        <li className='nav-link'><a href="/" style={linkStyle}>Home</a></li>
        <li className='nav-link'><a href="/about" style={linkStyle}>About</a></li>
        <li className='nav-link'><a href="/community" style={linkStyle}>Community</a></li>
      </ul>
    </nav>


    
  );
}

export default Navbar;