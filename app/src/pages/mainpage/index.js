import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleSearchClick, fetchFlowerData, fetchFoliageData, fetchGrowthData } from '../../utils/api'; // Import the function from the utility file
import Navbar from '../nav/index';

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
      <h1 style={{ borderBottom: '1px solid #000', borderTop: '1px solid #000', padding: '10px 0' }}>Plant Information</h1>

      <div>
        <input
          type="text"
          placeholder="Search for plants..."
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)} // Update the searchValue state
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ flex: '50%' }}>
        {plantData.map(plant => (
          <div className="card" key={plant.id}>
            <h3 className="card-title">{plant.common_name}</h3>
            <p className="card-text">Family: {plant.family}</p>
            <p className="card-text">Genus: {plant.genus}</p>
            <p className="card-text">Scientific Name: {plant.scientific_name}</p>
    
            {/* Check if the flower object exists before accessing its properties */}
            {flowerData.length > 0 && (
              <>
                {flowerData.map(flower => (
                  <div key={flower.id}>
                  {flower.color && Array.isArray(flower.color) && (
                    <p className="card-text">Flower Color: {flower.color.join(', ')}</p>
                  )}
                  {flower.conspicuous !== undefined && (
                    <p className="card-text">Is Flower Conspicuous: {flower.conspicuous ? 'Yes' : 'No'}</p>
                  )}
                </div>
                ))}
              </>
            )}
            
            {foliageData.length > 0 && (
              <>
                {foliageData.map(foliage => (
                  <div key={foliage.id}>
                  <p className="card-text">Foliage Texture: {foliage.texture}</p>
                  {foliage.color && Array.isArray(foliage.color) && (
                    <p className="card-text">Foliage Color: {foliage.color.join(', ')}</p>
                  )}
                  <p className="card-text">Leaf Retention: {foliage.leaf_retention ? 'Yes' : 'No'}</p>
                </div>
                ))}
              </>
            )}
            
            {growthData.length > 0 && (
              <>
                {growthData.map(growth => (
                  <div key={growth.id}>
                    <p className="card-text">Minimum Temperature: {growth.minimum_temperature}</p>
                    <p className="card-text">Maximum Temperature: {growth.maximum_temperature}</p>
                    <p className="card-text">Soil Nutriments: {growth.soil_nutriments}</p>
                    <p className="card-text">Soil Salinity: {growth.soil_salinity}</p>
                    <p className="card-text">Soil Texture: {growth.soil_texture}</p>
                    <p className="card-text">Soil Humidity: {growth.soil_humidity}</p>
                    <p className="card-text">Description: {growth.description}</p>
                  </div>
                ))}
              </>
            )}
    
            <img src={plant.image_url} alt={plant.common_name} style={{ maxWidth: '100px' }} />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
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
//               <Link to={`/plant/${plant.id}`}>
//                 <h3 className="card-title">{plant.common_name}</h3>
//               </Link>
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
//   );
// };

// export default Main;

// const PlantInfo = () => {
//   const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';
//   const COMMON_NAME = 'peace lily';

//   const [plantData, setPlantData] = useState(null);

//   useEffect(() => {
//     // Construct the URL for the API query
//     const apiUrl = `https://trefle.io/api/v1/species?token=${API_KEY}&common_name=${COMMON_NAME}`;

//     // Make the API request using Axios
//     axios.get(apiUrl)
//       .then(response => {
//         setPlantData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Plant Information</h1>
//       {plantData ? (
//         <pre>{JSON.stringify(plantData, null, 2)}</pre>
//       ) : (
//         <p>Loading plant information...</p>
//       )}
//     </div>
//   );
// };

// export default PlantInfo;



// import React from 'react';

// const Main = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-left items-start px-2 sm:px-0">
//       <div className="plant-card">
//         <a className="cursor-pointer" href="https://greg.app/plant-care/golden-pothos">
//           <img
//             src="https://media.greg.app/cGxhbnQtZGItcGhvdG9zL2dvbGRlbl9wb3Rob3MuanBn?format=pjpeg&amp;optimize=medium&amp;auto=webp&amp;precrop=600:600,smart&amp;fit=cover&amp;width=600&amp;height=600"
//             width="200px"
//             height="200px"
//             className="rounded-2xl"
//             loading="lazy"
//             alt="Golden Pothos"
//           />
//           <h3 className="text-sm font-medium pt-2 pb-1 hover-underline">Golden Pothos</h3>
//           <p className="text-xs flex flex-row items-center justify-center">
//             <img className="heart-icon" src="/static/web/img/heart_5.png" alt="Heart Icon" />
//             <span className="font-bold ml-1.5 mr-1">4.8</span> 
//           </p>
//         </a>
//       </div>



//     </div>
//   );
// };

// export default Main;

// import React from 'react';

// const Main = () => {
//   const plantData = [
//     // Add multiple plant data objects here
//     // Each object should contain image URL, title, and rating
//   ];

//   return (
//     <div className="flex flex-col items-center">
//       {[...Array(5)].map((_, index) => (
//         <div key={index} className="mb-4">
//           <div className="flex flex-row justify-center">
//             {plantData.map((plant, plantIndex) => (
//               <div key={plantIndex} className="plant-card mx-2">
//                 <a className="cursor-pointer" href="https://greg.app/plant-care/golden-pothos">
//                   <img
//                     src={plant.imageUrl}
//                     width="200px"
//                     height="200px"
//                     className="rounded-2xl"
//                     loading="lazy"
//                     alt={plant.title}
//                   />
//                   <h3 className="text-sm font-medium pt-2 pb-1 hover-underline">{plant.title}</h3>
//                   <p className="text-xs flex flex-row items-center justify-center">
//                     <img className="heart-icon" src="/static/web/img/heart_5.png" alt="Heart Icon" />
//                     <span className="font-bold ml-1.5 mr-1">{plant.rating}</span>
//                   </p>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Main;





