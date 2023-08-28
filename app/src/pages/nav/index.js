import React, { useState, useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleSearchClick } from '../../utils/api'; 
import styles from '../../styles/global.module.css';
import { useGlobalState } from '../../context/GlobalState';
import jwtDecode from 'jwt-decode';
import AuthService from '../../services/auth.service';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

// Add a hover effect by changing the link color on hover
// linkStyle[':hover'] = {
//   color: '#FF5733', // Change to the color you want on hover
// };





const Navbar = () => {
  const { state, dispatch } = useGlobalState();
  const router = useRouter();

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
      }
    };
    getUserFromLocalStorage();
  }, []);

  useEffect(() => {
    getName();
    fetchUserLogs();
  }, [state.user]); 
  const { user } = state;

  const getName = async () => {
    try {
      console.log(state)
      const user_id = state.user.user_id
      const response = await axios.get('https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/' + user_id); 
      const newUser = state.user;
      newUser.data = response.data;
      await dispatch({
      currentUser: newUser
      });
      console.log(response.data)
      setFetchedData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    const fetchUserLogs = async () => {
    try {
      const user_id = state.user.user_id; 
      const response = await axios.get(`https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/${user_id}`);
      setUserLogs(response.data);
    } catch (error) {
      console.error('Error fetching user logs:', error);
    }
  };

  useEffect(() => {
    getName();
    fetchUserLogs(); 
  }, []);

  const navbarStyle = {
    backgroundColor: ' #FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    borderBottom: '3px solid #E0E0E0',
    padding: '0 5px',
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
    marginRight: '400px',
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
    wordSpacing: '8px',
  };

  const firstName = state.user && state.user.data
  ? state.user.data.first_name.charAt(0).toUpperCase() + state.user.data.first_name.slice(1)
  : 'Profile';

  const handleLogout = () => {
    AuthService.logout();
    dispatch({ type: 'LOGOUT_USER' });
    window.location.href = '/'; // Set the URL to the home page
  };

  return (
    
    <nav style={navbarStyle}>
    <Head>
    <title>Plant Database</title>
    <meta name="viewport" content="width=device-width, initial-scale=.3" />

  </Head>
      <div className="howticulture-nav-title" style={titular}>
        <img src="/favicon.ico" style={{ width: '30px', height: '30px', marginRight: '10px' }} alt="Icon" />
        Howticulture
      </div>
      <div style={{ fontFamily: 'KitschyRetro' }}>
        <ul style={linkContainerStyle}>
          <li style={{ fontFamily: 'KitschyRetro' }} className='nav-link'><a href="/" style={linkStyle} >Home</a></li>
          <li style={{ fontFamily: 'KitschyRetro' }} className='nav-link'><a href="/about" style={linkStyle}>About</a></li>
          <li style={{ fontFamily: 'KitschyRetro' }} className='nav-link'><a href="/community" style={linkStyle}>Community</a></li>
          {state.user ? (
            <>
              <li style={{ fontFamily: 'KitschyRetro' }} className='nav-link'>
                <a href="/profile" style={linkStyle}>{firstName}</a>
              </li>
              <li style={{ fontFamily: 'KitschyRetro' }} className='nav-link'>
                <button onClick={handleLogout} style={{ ...linkStyle, border: 'none', background: 'none', textDecoration: 'none' }}>Logout</button>
              </li>
            </>
          ) : (
            <li style={{ fontFamily: 'KitschyRetro' }} className='nav-link'><a href="/login" style={linkStyle}>Login</a></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;