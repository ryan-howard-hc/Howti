import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchSlug, fetchWikipediaDescription } from '../../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../layout';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import '../../../public/heart.png';
import { useGlobalState } from '../../context/GlobalState';
import authHeader from '../../services/auth.headers';


const PlantDetailPage = () => {
  const router = useRouter();
  const { state, dispatch } = useGlobalState();

  const plantDataJson = router.query.plantData;
  const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;
  const plantSlug = plantData ? plantData.slug : null;

  const [leafImages, setLeafImages] = useState([]);
  const [flowerImages, setFlowerImages] = useState([]);
  const [barkImages, setBarkImages] = useState([]);
  const [commonNames, setCommonNames] = useState([]);
  const [wikipediaDescription, setWikipediaDescription] = useState('');
  const [genus, setGenus] = useState('');
  const [family, setFamily] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [favoritePlants, setFavoritePlants] = useState([]);

  
  useEffect(() => {
    const plantSlug = router.query.slug;

    if (plantSlug) {
      fetchSlug(plantSlug).then((data) => {
        console.log(data);
        setLeafImages(data.images.leaf || []);
        setFlowerImages(data.images.flower || []);
        setBarkImages(data.images.bark || []);
        setCommonNames(data.common_names.eng || []);
        setGenus(data.genus);
        setFamily(data.family);
        setScientificName(data.scientific_name);

        const commonName = data.scientific_name;
        fetchWikipediaDescription(commonName).then((description) => {
          setWikipediaDescription(description);
        });
      });
    }
  }, [router.query.slug]);


  const addToFavorites = async (id) => {
    const axios = require('axios');
    const userId = state.user.user_id;
    const header = authHeader();
    const favoriteInfo = {
      user: userId,
      plant_name: plantData.slug,
    }
    axios.post('https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/add-favorite-plant/', favoriteInfo, header)
    .then(response => {
      console.log('Successfully added to favorite plants', response.data);
  })
  .catch(error => {
      console.error('Error posting data:', error.response)
  })
  }




  // const handleAddToFavorites = async () => {
  //   try {
  //     const isFavorite = favoritePlants.some((plant) => plant.plant_name === plantData.common_name);
  
  //     if (isFavorite) {
  //       // Remove the plant from favorites
  //       const response = await axios.delete(
  //         `https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/add-favorite-plant/`,
  //         {
  //           data: {
  //             user_id: state.user.user_id,
  //             plant_name: plantData.common_name,
  //           },
  //         }
  //       );
  
  //       setFavoritePlants(favoritePlants.filter((plant) => plant.plant_name !== plantData.common_name));
  //     } else {
  //       // Add the plant to favorites
  //       const response = await axios.post(
  //         `https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/add-favorite-plant/`,
  //         {
  //           user_id: state.user.user_id,
  //           plant_name: plantData.common_name,
  //         }
  //       );
  
  //       setFavoritePlants([...favoritePlants, response.data]);
  //     }
  
  //     localStorage.setItem('favoritePlants', JSON.stringify([...favoritePlants]));
  //   } catch (error) {
  //     console.error('Error adding/removing plant from favorites:', error);
  //   }
  // };


  
  return (
    <Layout>

    <div style = {{marginTop: '50px'}}className="container col-12" >

    <div className="row">

    <div className="col-md-12 col-12">
      <div className="text-center">
        <h1 style={{ marginBottom: '30px', fontFamily: 'KitschyRetro', letterSpacing: '3px', fontSize: '80px' }}>
          {scientificName || 'Loading...'}
        </h1>
      </div>
    </div>
  </div>
      {plantData ? (
        <div className="card">
          <div className="row">

          <div className="col-md-6 col-12 text-center">
          {/* Leaf Carousel */}
          {leafImages.length > 0 && (
            <div>
            <div className="text-center">
            <h2 style={{marginBottom: '30px' , marginTop: '20px', fontFamily: 'ClimbingPlant', letterSpacing: "3px", fontWeight:'bold'}}>Foliage</h2>
          </div>
              <Carousel showArrows={true} infiniteLoop={true}>
                {leafImages.map((imageUrl, index) => (
                  <div key={index}>
                    <img
                      src={imageUrl}
                      alt={`Leaf Image ${index}`}
                      style={{
                        maxHeight: '500px',
                        maxWidth: '300px',
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          {commonNames.length > 0 && (
            <div className="rounded-xl py-2 px-4 m-2" style={{ backgroundColor: '#F5F4FC' }}>
              <label className="font-medium text-sm" style={{ fontWeight: 'bold', fontSize: '24px',marginBottom: '10px',fontFamily: 'KitschyRetro',letterSpacing:'2px' }}>Common Names:</label>
              <div>
                {commonNames.map((name, index) => (
                  <div key={index} style={{ fontSize: '18px', fontStyle: 'italic', textAlign: 'center' }}>
                    <span style={{ fontWeight: 'bold' }}>{index + 1}.</span> {name} {/* Add number before each entry */}
                  </div>
                ))}
              </div>
            </div>
          )}
        
          {/* Genus */}
          {genus && (
            <div className="rounded-xl py-2 px-4 m-2" style={{ backgroundColor: '#F5F4FC' }}>
              <label className="font-medium text-sm" style={{ fontWeight: 'bold', fontSize:'24px',marginBottom: '10px',fontFamily: 'KitschyRetro',letterSpacing:'2px' }}>Genus:</label>
              <h5 style={{ fontWeight: 'normal', fontSize:'18px', fontStyle: 'italic' }}>{genus}</h5>
            </div>
          )}
        
          {/* Family */}
          {family && (
            <div className="rounded-xl py-2 px-4 m-2" style={{ backgroundColor: '#F5F4FC' }}>
              <label className="font-medium text-sm" style={{ fontWeight: 'bold', fontSize:'24px',marginBottom: '10px',fontFamily: 'KitschyRetro',letterSpacing:'2px' }}>Family:</label>
              <h5 style={{ fontWeight: 'normal', fontSize:'18px', fontStyle: 'italic' }}>{family}</h5>
            </div>
          )}
        
          {/* Scientific Name */}
          {scientificName && (
            <div className="rounded-xl py-2 px-4 m-2" style={{ backgroundColor: '#F5F4FC' }}>
              <label className="font-medium text-sm" style={{ fontWeight: 'bold', fontSize:'24px',marginBottom: '10px',fontFamily: 'KitschyRetro',letterSpacing:'2px' }}>Scientific Name:</label>
              <h5 style={{ fontWeight: 'normal', fontSize:'18px', fontStyle: 'italic' }}>{scientificName}</h5>
            </div>
          )}

        </div>

        {/* Right Column */}
        <div style={{ marginTop: '20px'}}className="col-md-6">
          <div style={{marginBottom: '30px' }} className="row">


            {/* Flower Carousel */}
            <div className="col-md-6">
              {flowerImages.length > 0 && (
                <div>
                  <div className="text-center">
                    <h2 style={{marginBottom: '30px', fontFamily: 'ClimbingPlant', letterSpacing: "1px", fontWeight:'bold' }}>Flower/Seed</h2>
                  </div>
                  <Carousel showArrows={true} infiniteLoop={true}>
                    {flowerImages.map((imageUrl, index) => (
                      <div key={index}>
                        <img
                          src={imageUrl}
                          alt={`Flower Image ${index}`}
                          style={{
                            maxHeight: '300px',
                            maxWidth: '300px',
                          }}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
            </div>

            {/* Bark Carousel */}
            <div className="col-md-6">
              {barkImages.length > 0 && (
                <div>
                  <div className="text-center">
                    <h2 style={{marginBottom: '30px', fontFamily: 'ClimbingPlant', letterSpacing: "3px", fontWeight:'bold' }}>Bark/Stem</h2>
                  </div>
                  <Carousel showArrows={true} infiniteLoop={true}>
                    {barkImages.map((imageUrl, index) => (
                      <div key={index}>
                        <img
                          src={imageUrl}
                          alt={`Bark Image ${index}`}
                          style={{
                            maxHeight: '300px',
                            maxWidth: '300px',
                          }}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
            </div>


          </div>




          <div className="col-md-12 text-center">
            <h2 style={{marginBottom: '30px', fontFamily: 'ClimbingPlant', letterSpacing: "3px", fontWeight:'bold' }}>Description</h2>
            {wikipediaDescription.split('\n\n').map((paragraph, index) => (
              <p style={{ fontSize: '20px' }} key={index}>
                {paragraph}
              </p>
            ))}
          </div>

        </div>

      </div>
    </div>
  ) : (
    <p>Loading...</p>
  )}
</div>

</Layout>
);
};

export default PlantDetailPage;


// <div className="col-md-2">
// // <a  onClick={addToFavorites}style={{ cursor: 'pointer' }}>
// //   <Image src="/heart.png" alt="Heart" width={100} height={100} />
// //   <p>Click to like!</p>
// // </a>
// </div>