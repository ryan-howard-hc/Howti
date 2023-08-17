// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { fetchPlantDetails } from '../utils/api'; 

// const PlantDetails = () => {
//   const { id } = useParams(); 
//   const [plantDetails, setPlantDetails] = useState({});

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//     const fetchPlantData = async () => {
//       try {
//         console.log('Fetching plant details for ID:', id);

//         const response = await fetchPlantDetails(id);
//         console.log('Response from API:', response);

//         setPlantDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching plant details:', error);
//       }
//     };

//     fetchPlantData();
// }
//   }, [id]);

//   console.log('PlantDetails Component - plantDetails:', plantDetails);

//   return (
//     <div>
//       <h2>{plantDetails.common_name}</h2>
//     </div>
//   );
// };

// export default PlantDetails;