import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleSearchClick, fetchFlowerData, fetchFoliageData, fetchGrowthData } from '../utils/api'; // Import the function from the utility file
import Navbar from './nav';
import Link from 'next/link';



const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const [plantData, setPlantData] = useState([]);
  const [flowerData, setFlowerData] = useState([]);
  const [foliageData, setFoliageData] = useState([]);
  const [growthData, setGrowthData] = useState([]);

  const handleSearch = async () => {
    try {
      await handleSearchClick(searchValue, setPlantData);
      await fetchFlowerData(searchValue, setFlowerData);
      await fetchFoliageData(searchValue, setFoliageData);
      await fetchGrowthData(searchValue, setGrowthData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log("Main Component - plantData:", plantData);

  if (!plantData) {
    return null;
  }

  

  return (
    <div style={{ textAlign: 'center' }}>
    
    <h1
    style={{

      padding: '10px 0',
      fontFamily: 'JFWildWood, sans-serif',
    }}
  >
    Plant Database
  </h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', marginTop: '20px' }}>
      <div style={{ position: 'relative', maxWidth: '300px' }}>
      <input
      style={{
        padding: '10px 30px 10px 10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'sans-serif',
      }}
      type="text"
      placeholder="Search for plants..."
      value={searchValue}
      onChange={event => setSearchValue(event.target.value)} // Update the searchValue state
    />
    <svg
      style={{
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        width: '20px',
        height: '20px',
        fill: '#000',
      }}
      viewBox="0 0 512 512"
    >
      <path
        d="M507.515,474.485L377.332,344.309c-2.78-2.781-6.562-4.309-10.515-4.309c-11.046,0-20,8.954-20,20
        c0,3.953,1.528,7.735,4.309,10.515l130.176,130.176c4.093,4.093,10.729,4.093,14.823,0
        C511.608,485.214,511.608,478.578,507.515,474.485z"
      />
      <path
        d="M212.609,393.002c-66.035,0-128.972-25.695-176.554-72.277C-11.07,237.579-11.07,137.233,54.035,78.651
        c48.805-48.805,111.841-72.334,175.897-72.334c66.035,0,128.972,25.695,176.554,72.277
        c97.396,97.396,97.396,197.742,0,256.325C341.581,367.307,278.644,393.002,212.609,393.002z M67.894,67.878
        c-39.297,39.297-59.892,91.452-59.892,143.622s20.595,104.325,59.892,143.622c39.297,39.297,91.452,59.892,143.622,59.892
        s104.325-20.595,143.622-59.892c39.297-39.297,59.892-91.452,59.892-143.622s-20.595-104.325-59.892-143.622
        c-39.297-39.297-91.452-59.892-143.622-59.892S107.191,28.582,67.894,67.878z"
      />
    </svg>

    </div>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onClick={handleSearch}
        onMouseEnter={event => event.target.style.backgroundColor = '#0056b3'}
        onMouseLeave={event => event.target.style.backgroundColor = '#007bff'}
      >
        Search
      </button>
    </div>

      <div className="container">
        <div className="row justify-content-center">
          {plantData.map(plant => (
            <div className="col-md-4" key={plant.id}>

              <div className="card mb-4">
                <img src={plant.image_url} alt={plant.common_name} className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                <div className="card-body">

                  <Link href={`/plant/${plant.slug}`}>
                    <h3 className="card-title">{plant.common_name}</h3>
                  </Link>

                  <p className="card-text">Family: {plant.family}</p>
                  
                  <p className="card-text">Scientific Name: {plant.scientific_name}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// {/* Flower Data */}
// {flowerData.length > 0 && (
//   <div>
//     {flowerData.map(flower => (
//       <div key={flower.id}>
//         {flower.color && Array.isArray(flower.color) && (
//           <p className="card-text">Flower Color: {flower.color.join(', ')}</p>
//         )}
//         {flower.conspicuous !== undefined && (
//           <p className="card-text">Is Flower Conspicuous: {flower.conspicuous ? 'Yes' : 'No'}</p>
//         )}
//       </div>
//     ))}
//   </div>
// )}

// {/* Foliage Data */}
// {foliageData.length > 0 && (
//   <div>
//     {foliageData.map(foliage => (
//       <div key={foliage.id}>
//         <p className="card-text">Foliage Texture: {foliage.texture}</p>
//         {foliage.color && Array.isArray(foliage.color) && (
//           <p className="card-text">Foliage Color: {foliage.color.join(', ')}</p>
//         )}
//         <p className="card-text">Leaf Retention: {foliage.leaf_retention ? 'Yes' : 'No'}</p>
//       </div>
//     ))}
//   </div>
// )}

// {/* Growth Data */}
// {growthData.length > 0 && (
//   <div>
//     {growthData.map(growth => (
//       <div key={growth.id}>
//         <p className="card-text">Minimum Temperature: {growth.minimum_temperature}</p>
//         <p className="card-text">Maximum Temperature: {growth.maximum_temperature}</p>
//         <p className="card-text">Soil Nutriments: {growth.soil_nutriments}</p>
//         <p className="card-text">Soil Salinity: {growth.soil_salinity}</p>
//         <p className="card-text">Soil Texture: {growth.soil_texture}</p>
//         <p className="card-text">Soil Humidity: {growth.soil_humidity}</p>
//         <p className="card-text">Description: {growth.description}</p>
//       </div>
//     ))}
//   </div>
// )}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { handleSearchClick } from '../../utils/api'; 
// import Layout from '../layout';
// import React, { useState } from 'react';
// import { Link } from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

// const Main = () => {
//   const [searchValue, setSearchValue] = useState('');
//   const [plantData, setPlantData] = useState([]);
//   const [flowerData, setFlowerData] = useState([]);
//   const [foliageData, setFoliageData] = useState([]);
//   const [growthData, setGrowthData] = useState([]);

//   const handleSearch = async () => {
//     try {
//       console.log('Searching for:', searchValue);

//       await handleSearchClick(searchValue, setPlantData);
//       console.log('Plant data after search:', plantData);

//       await fetchFlowerData(searchValue, setFlowerData);
//       console.log('Flower data after search:', flowerData);

//       await fetchFoliageData(searchValue, setFoliageData);
//       console.log('Foliage data after search:', foliageData);

//       await fetchGrowthData(searchValue, setGrowthData);
//       console.log('Growth data after search:', growthData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   console.log('Main Component - plantData:', plantData);

//   if (!plantData) {
//     return null;
//   }

//   return (
//     <Layout>
//     <div style={{ textAlign: 'center' }}>
//       <h1 style={{ borderBottom: '1px solid #000', borderTop: '1px solid #000', padding: '10px 0' }}>Plant Information</h1>

//       <div>
//         <input
//           type="text"
//           placeholder="Search for plants..."
//           value={searchValue}
//           onChange={(event) => setSearchValue(event.target.value)} 
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <div style={{ flex: '50%' }}>
//           {plantData.map((plant) => (
//             <div className="card" key={plant.id}>
//             <Link href={`/plant/${plant.slug}`}>
//               <a>
//                 <h3 className="card-title">{plant.common_name}</h3>
//               </a>
//             </Link>
//               <p className="card-text">Family: {plant.family}</p>
//               <p className="card-text">Genus: {plant.genus}</p>
//               <p className="card-text">Scientific Name: {plant.scientific_name}</p>

//               {flowerData.length > 0 && (
//                 <>
//                   {flowerData.map((flower) => (
//                     <div key={flower.id}>
//                       {flower.color && Array.isArray(flower.color) && (
//                         <p className="card-text">Flower Color: {flower.color.join(', ')}</p>
//                       )}
//                       {flower.conspicuous !== undefined && (
//                         <p className="card-text">Is Flower Conspicuous: {flower.conspicuous ? 'Yes' : 'No'}</p>
//                       )}
//                     </div>
//                   ))}
//                 </>
//               )}

//               {foliageData.length > 0 && (
//                 <>
//                   {foliageData.map((foliage) => (
//                     <div key={foliage.id}>
//                       <p className="card-text">Foliage Texture: {foliage.texture}</p>
//                       {foliage.color && Array.isArray(foliage.color) && (
//                         <p className="card-text">Foliage Color: {foliage.color.join(', ')}</p>
//                       )}
//                       <p className="card-text">Leaf Retention: {foliage.leaf_retention ? 'Yes' : 'No'}</p>
//                     </div>
//                   ))}
//                 </>
//               )}

//               {growthData.length > 0 && (
//                 <>
//                   {growthData.map((growth) => (
//                     <div key={growth.id}>
//                       <p className="card-text">Minimum Temperature: {growth.minimum_temperature}</p>
//                       <p className="card-text">Maximum Temperature: {growth.maximum_temperature}</p>
//                       <p className="card-text">Soil Nutriments: {growth.soil_nutriments}</p>
//                       <p className="card-text">Soil Salinity: {growth.soil_salinity}</p>
//                       <p className="card-text">Soil Texture: {growth.soil_texture}</p>
//                       <p className="card-text">Soil Humidity: {growth.soil_humidity}</p>
//                       <p className="card-text">Description: {growth.description}</p>
//                     </div>
//                   ))}
//                 </>
//               )}

//               <img src={plant.image_url} alt={plant.common_name} style={{ maxWidth: '100px' }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </Layout>
//   );
// };
// export default Main;