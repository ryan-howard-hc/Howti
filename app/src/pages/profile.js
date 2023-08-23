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


  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
      const { title, content } = postData;
  
    try {
      if (!title || !content) {
        alert('Please fill in all fields.');
        return;
      }
  
      const response = await axios.post('http://example.com/api/posts', {
        title,
        content,
      });
      
        console.log('Post created:', response.data);
        setPostData({ title: '', content: '' });
        
      } catch (error) {
      // Handle error
      console.error('Error creating post:', error);
      alert('An error occurred while creating the post. Please try again later.');
    }
  };


  // useEffect(() => {
  //   fetchPosts();
  // }, []);
  // ---------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------
  const getName = async () => {
    try {
      console.log(state)
      const user_id = state.user.user_id
      // const response = await axios.get('http://127.0.0.1:8000/api/huh/' + user_id); 
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
      // const response = await axios.get(`http://127.0.0.1:8000/api/user-logs/?user_id=${user_id}`);
      setUserLogs(response.data);
    } catch (error) {
      console.error('Error fetching user logs:', error);
    }
  };

  useEffect(() => {
    getName();
    fetchUserLogs(); 
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  



  const { favorites } = router.query;

  const favoritePlants = JSON.parse(favorites || '[]');

  return (
    <Layout>
    <div>



        <div>
        <h2>User Profile</h2>
        {state.user ? (
          <>
            <p>Name: {state.user.username}</p>
            <p>Email: {state.user.email}</p>
          </>
        ) : (
          <p>User information is not available.</p>
        )}
      </div>
      
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