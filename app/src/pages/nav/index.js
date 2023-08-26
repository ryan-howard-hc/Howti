import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleSearchClick } from '../../utils/api'; 
import styles from '../../styles/global.module.css';
import jwtDecode from 'jwt-decode';
import { useGlobalState } from '../../context/GlobalState';
import Link from 'next/link'; // Import Link from Next.js
import { useRouter } from 'next/router'; // Import useRouter from Next.js

const Navbar = () => {
  const { state, dispatch } = useGlobalState();
  const router = useRouter(); // Use the useRouter hook from Next.js

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user);
        dispatch({
          type: 'SET_USER',
          payload: user
        });
        setIsLoggedIn(true); // Set the user as logged in
      }
    };
    getUserFromLocalStorage();
  }, []);

  let profileLinkText = 'Profile';

  if (isLoggedIn && state.user && state.user.data && state.user.data.first_name) {
    const firstName = state.user.data.first_name;
    profileLinkText = firstName;
  }
  


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
      <div style={{ fontFamily: 'KitschyRetro' }}>
        <ul style={linkContainerStyle}>
          <li style={{ fontFamily: 'KitschyRetro' }} className='nav-link'><a href="/" style={linkStyle}>Home</a></li>
          <li style={{ fontFamily: 'KitschyRetro' }} className='nav-link'><a href="/about" style={linkStyle}>About</a></li>
          <li style={{ fontFamily: 'KitschyRetro' }} className='nav-link'><a href="/community" style={linkStyle}>Community</a></li>
          
          {isLoggedIn ? (
            <li style={{ fontFamily: 'KitschyRetro' }} className='nav-link'>
              <a href="/profile" style={linkStyle}>{profileLinkText}</a>
            </li>
          ) : (
            <li style={{ fontFamily: 'KitschyRetro' }} className='nav-link'>
              <a href="/login" style={linkStyle}>Login</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;





