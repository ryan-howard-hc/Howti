import React, { useState, useEffect } from 'react';
import { useGlobalState } from '../context/GlobalState';
import authService from '../services/auth.service';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import axios from 'axios'; 
import Layout from './layout';
import { useRouter } from 'next/router';
import { fetchSlug } from '../utils/api'; // Import the fetchSlug function


const ProfilePage = () => {
  const router = useRouter();
  const [postData, setPostData] = useState({ title: '', content: '' });
  const [fetchedData, setFetchedData] = useState([]);
  const [userLogs, setUserLogs] = useState([]);
  const {state, dispatch} = useGlobalState();
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check if the query parameter 'slug' exists in the URL
    const { slug } = router.query;
    if (slug) {
      // Use the fetchSlug function to fetch the plant data
      fetchSlug(slug)
        .then((data) => {
          // Use the data as needed, for example, you can set it in state
          setFetchedData(data);
        })
        .catch((error) => {
          console.error('Error fetching plant data:', error);
        });
    }
  }, [router.query.slug]);








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
  
  const navigateToPlantDetail = async (slug) => {
    try {
      // Fetch the plant data using fetchSlug
      const plantData = await fetchSlug(slug);

      // Encode the plant data and navigate to the plant detail page
      const plantDataParam = encodeURIComponent(JSON.stringify(plantData));
      router.push(`/plant-detail?plantData=${plantDataParam}`);
    } catch (error) {
      console.error('Error fetching plant data:', error);
    }
  };

  const { favorites, slug } = router.query;

  const favoritePlants = JSON.parse(favorites || '[]');

  const firstName = state.user && state.user.data
    ? state.user.data.first_name.charAt(0).toUpperCase() + state.user.data.first_name.slice(1)
    : 'User';

  const lastName = state.user && state.user.data
    ? state.user.data.last_name.charAt(0).toUpperCase() + state.user.data.last_name.slice(1)
    : '';

  const fullName = `${firstName} ${lastName}`;

  return (
    <div style={{ backgroundImage: `url(./background.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <Layout>
      <div className="row" style ={{marginTop:'20px'}}>
      <div className="col-12 mx-auto text-center">
        <div className="name-container" style={{ background: 'white', borderRadius: '50px', padding: '20px', border: '20px solid black', display: 'inline-block' }}>
          <h1 style={{ fontFamily: 'ClimbingPlant', fontWeight: 'bold' }}>{fullName}</h1>
        </div>
      </div>
    </div>
        
  
        <div className="container" style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', background: 'white', borderRadius: '50px', padding: '20px', border: '20px solid black' }}>
          <div className="row">
          <div className="col-12 mx-auto text-center">
          <h1 style={{ fontFamily: 'ClimbingPlant', fontWeight: 'bold' }}>Favorite Plants</h1>
          <ul className="list-unstyled" style={{ fontSize: '30px' }}>
          {favoritePlants.map((plant, index) => (
            <li key={index} className="text-center" style={{ cursor: 'pointer' }} onClick={() => navigateToPlantDetail(plant)}>
              {plant.common_name}
              {/* Modify this part to trigger navigation to the plant detail page */}
              <Link
                href={{
                  pathname: '/[slug]/page', // Adjust the pathname as needed
                  query: { slug: fetchedData.slug, plantData: JSON.stringify(fetchedData) },
                }}
                as={`/${fetchedData.slug}/page`} // Adjust the 'as' value as needed
                passHref
                style={{ textDecoration: 'none' }}
              >
                <button>View Plant Detail</button>
              </Link>
            </li>
            
          ))}
        </ul>

        </div>
          </div>
  
          <div className="row">
            <div className="col-9 mx-auto">
              <div style={{ background: 'black', height: '2px', width: '800px', margin: '0 auto', marginTop: '30px' }}></div>
              <h1 className="text-center" style={{ fontFamily: 'ClimbingPlant', marginTop: '30px', fontWeight: 'bold' }}>Community</h1>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProfilePage;