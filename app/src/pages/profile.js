import React, { useState, useEffect } from 'react';
import { useGlobalState } from '../context/GlobalState';
import authService from '../services/auth.service';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import axios from 'axios'; 
import Layout from './layout';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const router = useRouter();
  const [postData, setPostData] = useState({ title: '', content: '' });
  const [fetchedData, setFetchedData] = useState([]);
  const [userLogs, setUserLogs] = useState([]);
  const {state, dispatch} = useGlobalState();
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
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
//----------------------
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

  //-------------
  const deleteLog = async (logId) => {
    try {
      const response = await axios.delete(`https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user-logs/${logId}`);
      setUserLogs((prevLogs) => prevLogs.filter((log) => log.log_id !== logId));
    } catch (error) {
      console.error('Error deleting user log:', error);
    }
  };
  



  const { favorites } = router.query;

  const favoritePlants = JSON.parse(favorites || '[]');

  return (
    <Layout>
      <div>
      <p>
      {state.user && state.user.data
        ? `${state.user.data.first_name}, ${state.user.data.last_name}`
        : 'User'}
    </p>
        
        <h2>Favorite Plants</h2>
        <ul>
          {favoritePlants.map((plant, index) => (
            <li key={index}>{plant.common_name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ProfilePage;