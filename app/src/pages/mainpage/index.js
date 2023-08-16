import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlantInfo from '../axios/index';



const Main = ({ plantData }) => {
  console.log("Main Component - plantData:", plantData);

  if (!plantData) {
    return null;
  }

  return (
    <div className="flex flex-row justify-center">
      <div className="plant-card mx-2">
      <h3 className="text-sm font-medium pt-2 pb-1 hover-underline">
          {plantData.common_name}
        </h3>
        <p>Scientific Name: {plantData.scientific_name}</p>
        {/* Display other plant information here */}
      </div>
    </div>
  );
};

export default Main;




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





