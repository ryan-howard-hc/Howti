import React from 'react';
import icon from './Icon.png';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50px',
  borderBottom: '1px solid #E0E0E0', 
  padding: '0 20px', 
};

const titular = {
  paddingLeft: '300px',
  fontSize: '22px',
  fontWeight: 'bold',
};

const linkContainerStyle = {
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  paddingRight: '300px', 
};

const linkStyle = {
  color: '#9E9E9E',
  textDecoration: 'none',
  fontSize: '20px',
  margin: '0 10px',
};

export default function Navbar() {
  return (
    <nav style={navbarStyle}>
      <div style={titular}><img src={icon} style={{ width: '24px', height: '24px' }} />Howticulture</div>
      <ul style={linkContainerStyle}>
        <li><a href="#" style={linkStyle}>Home</a></li>
        <li><a href="#" style={linkStyle}>About</a></li>
        <li><a href="#" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
}