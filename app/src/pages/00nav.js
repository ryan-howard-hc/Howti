import React from 'react';
import icon from './Icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50px',
  borderBottom: '1px solid #E0E0E0', 
  padding: '0 20px', 
};

const titular = {
  paddingLeft: '350px',
  fontSize: '22px',
  fontWeight: 'bold',
};

const linkContainerStyle = {
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  paddingRight: '350px', 
};

const linkStyle = {
  color: '#9E9E9E',
  textDecoration: 'none',
  fontSize: '20px',
  margin: '0 10px',
  transition: 'color 0.3s ease', // Adding a transition for smooth color change
};

// Add a hover effect by changing the link color on hover
linkStyle[':hover'] = {
  color: '#FF5733', // Change to the color you want on hover
};

export default function Navbar() {
  return (
    <nav style={navbarStyle}>
      <div style={titular}><img src={icon} style={{ width: '24px', height: '24px' }} />Howticulture</div>
      <ul style={linkContainerStyle}>
        <li><a href="/mainpage" style={linkStyle}>Home</a></li>
        <li><a href="/about" style={linkStyle}>About</a></li>
        <li><a href="/community" style={linkStyle}>Community</a></li>
      </ul>
    </nav>
  );
}