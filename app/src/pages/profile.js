import React, { useState, useEffect } from 'react';
import { useGlobalState } from '../context/GlobalState';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import axios from 'axios'; 
import Layout from './layout';
import { useRouter } from 'next/router';
import { fetchSlug, fetchWikipediaDescription } from '../utils/api'; 

const ProfilePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [plantData, setPlantData] = useState({});
  const [wikipediaDescription, setWikipediaDescription] = useState({});
  const { state, dispatch } = useGlobalState();
  const [fetchedData, setFetchedData] = useState([]);
  const [userLogs, setUserLogs] = useState([]);
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
  
  useEffect(() => {
    const fetchFavoritePlants = async () => {
      try {
        const response = await axios.get(`/api/user-favorite-plants/${state.user.user_id}/`);
        setFavoritePlants(response.data);
      } catch (error) {
        console.error('Error fetching favorite plants:', error);
      }
    };
  
    // Call the function to fetch favorite plants
    fetchFavoritePlants();
  }, [state.user]);

  const [favoritePlants, setFavoritePlants] = useState([]);

  useEffect(() => {
    // Retrieve the list of favorite plants from local storage
    const storedFavorites = localStorage.getItem('favoritePlants');
    if (storedFavorites) {
      setFavoritePlants(JSON.parse(storedFavorites));
    }
  }, []);


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
              <Link
                href={{
                  pathname: '/[slug]/page',
                  query: { slug: plant.slug }, // Pass the slug of the plant
                }}
                as={`/${plant.slug}/page`} 
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


// useEffect(() => {
  //   if (!state.user) {
  //     router.push('/login');
  //   } else {
  //     getName();
  //     fetchUserLogs();
  //   }
  // }, [state.user]);

  // useEffect(() => {
  //   if (!state.user) {
  //     router.push('/login');
  //   } else {
  //     getName();
  //     fetchUserLogs();
  //   }
  // }, [state.user]);
  
  // useEffect(() => {
  //   if (slug) {
  //     fetchSlug(slug)
  //       .then((data) => {
  //         setPlantData(data);

  //         fetchWikipediaDescription(data.scientific_name)
  //           .then((description) => {
  //             setWikipediaDescription(description);
  //           })
  //           .catch((error) => {
  //             console.error('Error fetching Wikipedia description:', error);
  //           });
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching plant data:', error);
  //       });
  //   }
  // }, [slug]);