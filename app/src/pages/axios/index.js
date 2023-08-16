// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PlantInfo = ({ commonName }) => {
//   const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';

//   const [plantData, setPlantData] = useState(null);

//   useEffect(() => {
//     const apiUrl = `https://trefle.io/api/v1/species?token=${API_KEY}&common_name=${commonName}`;

//     axios.get(apiUrl)
//       .then(response => {
//         setPlantData(response.data[0]); // first result
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, [commonName]);

//   if (!plantData) {
//     return <p>Loading plant information...</p>;
//   }

//   return (
//     <div>
//       <h1>Plant Information</h1>
//       <p>Common Name: {plantData.common_name}</p>
//       <p>Scientific Name: {plantData.scientific_name}</p>
//       {/* Display other plant information here */}
//     </div>
//   );
// };

// export default PlantInfo;
