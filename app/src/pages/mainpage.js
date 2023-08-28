import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleSearchClick, fetchFlowerData, fetchFoliageData, fetchGrowthData } from '../utils/api';
import Navbar from './nav';
import Link from 'next/link';
import Layout from './layout';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const [plantData, setPlantData] = useState([]);
  const [flowerData, setFlowerData] = useState([]);
  const [foliageData, setFoliageData] = useState([]);
  const [growthData, setGrowthData] = useState([]);
  const [showCenteredText, setShowCenteredText] = useState(true); 

  const handleSearch = async () => {
    try {
      await handleSearchClick(searchValue, setPlantData);
      await fetchFlowerData(searchValue, setFlowerData);
      await fetchFoliageData(searchValue, setFoliageData);
      await fetchGrowthData(searchValue, setGrowthData);

      const updatedPlantData = await Promise.all(
        Object.values(plantData).map(async (plant) => {
          const description = await fetchWikipediaDescription(plant.common_name);
          return { ...plant, description };
        })
      );
      console.log(updatedPlantData);

      setPlantData(updatedPlantData);
      setShowCenteredText(false); // Hide centered text after data fetching
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log(handleSearch);

  const plantDataArray = Object.values(plantData);
  console.log(plantDataArray);
  if (!plantData) {
    return null;
  }

  return (
    <Layout>
      <div style={{ backgroundColor: '#ECFAF5' }}></div>
      <div style={{ textAlign: 'center', backgroundColor: '#ECFAF5', minHeight: '93vh' }}>
        <h1
          style={{
            letterSpacing: '8px',
            fontSize: '80px',
            padding: '8px 0',
            fontFamily: 'JFWildWood, sans-serif',
            borderBottom: '2px solid #000',
          }}
        >
          Plant Database
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
          <div style={{ position: 'relative', maxWidth: '300px' }}>
            <input
              style={{
                padding: '10px 30px 10px 10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '100%',
                boxSizing: 'border-box',
                fontFamily: 'sans-serif',
                backgroundColor: '#DEDEDE',
                color: 'black',
                fontWeight: 'bolder',
              }}
              className="btn btn-primary btn-lg rounded-pill"
              type="text"
              placeholder="Search for plants..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
          <button
            style={{
              backgroundColor: '#8B4510',
              color: '#fff',
              borderColor: '#8B4513',
              letterSpacing: '8px',
              fontFamily: 'ClimbingPlant',
              marginTop: '20px',
              fontSize: '25px',
            }}
            className="btn btn-lg rounded-pill"
            onClick={handleSearch}
            onMouseEnter={(event) => event.target.style.backgroundColor = '#753a08'}
            onMouseLeave={(event) => event.target.style.backgroundColor = '#8B4510'}
          >
            Search
          </button>
          {/* Conditional rendering of centered text */}
          {showCenteredText && (
            <div>
              <i><p style={{ fontSize: '24px', fontWeight: 'bold', marginTop:'175px', fontSize: '120px',fontFamily:'KitschyRetro',letterSpacing:'10px' }}>Start Searchin'!</p></i>
            </div>
          )}
        </div>

        <div className="container">
          <div className="row justify-content-center">
            {plantDataArray.map((plant, index) => (
              <div className="col-md-4" key={plant.id} style={{ marginTop: '20px' }}>
                <Link
                  href={{
                    pathname: '/[slug]/page',
                    query: { slug: plant.slug, plantData: JSON.stringify(plant) },
                  }}
                  as={`/${plant.slug}/page`}
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <div className="card mb-4" style={{ display: 'flex', flexDirection: 'column', height: '100%', border: 'none', boxShadow: 'none' }}>
                    <img src={plant.image_url} alt={plant.common_name} className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover', height: '200px' }} />

                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <h3 style={{ fontSize: '40px', fontWeight: 'bold' }} className="card-title">{plant.common_name}</h3>
                      <div style={{ marginTop: 'auto' }}>
                        <p className="card-text" style={{ margin: '0', marginBottom: '1px', fontWeight: 'bold', fontSize: '28px', letterSpacing: '1px' }}>Scientific Name:</p>
                        <p className="card-text" style={{ margin: '0', fontSize: '25px', marginBottom: '20px' }}><i>{plant.scientific_name}</i></p>
                        <p className="card-text" style={{ margin: '0', marginBottom: '1px', fontWeight: 'bold', fontSize: '28px', letterSpacing: '1px' }}>Family:</p>
                        <p className="card-text" style={{ margin: '0', fontSize: '25px', marginBottom: '1px' }}><i>{plant.family}</i></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
