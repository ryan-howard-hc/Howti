import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleSearchClick } from '../../utils/api'; 
import styles from '../../styles/global.module.css';


// Add a hover effect by changing the link color on hover
// linkStyle[':hover'] = {
//   color: '#FF5733', // Change to the color you want on hover
// };


const Navbar = () => {


  const navbarStyle = {
    backgroundColor: ' #FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    borderBottom: '3px solid #E0E0E0',
    padding: '0 20px',
  };

  const titular = {
    fontSize: '28px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '300px',
    letterSpacing: '5px',
    fontFamily: 'ClimbingPlant ',
  };

  const linkContainerStyle = {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    marginRight: '300px',
    fontFamily:'KitchyRetro',
  };

  const linkStyle = {
    color: 'black',
    fontWeight:'bolder',
    letterSpacing:'3px',
    textDecoration: 'none',
    fontSize: '25px',
    margin: '0 20px',
    transition: 'color 0.3s ease',
    wordSpacing: '10px',
  };

  return (
    <nav style={navbarStyle}>
      <div className="howticulture-nav-title" style={titular}>
        <img src="/favicon.ico" style={{ width: '30px', height: '30px', marginRight: '10px' }} alt="Icon" />
        Howticulture
      </div>
        <div style = {{fontFamily: 'KitschyRetro'}}>

      <ul style={linkContainerStyle}>

        <li style={{fontFamily:'KitschyRetro'}}className='nav-link'><a href="/" style={linkStyle} >Home</a></li>
        <li style={{fontFamily:'KitschyRetro'}}className='nav-link'><a href="/about" style={linkStyle}>About</a></li>
        <li style={{fontFamily:'KitschyRetro'}}className='nav-link'><a href="/community" style={linkStyle}>Community</a></li>
        <li style={{fontFamily:'KitschyRetro'}}className='nav-link'><a href="/login" style={linkStyle}>Login</a></li>

      </ul>
      </div>
    </nav>


    
  );
}

export default Navbar;