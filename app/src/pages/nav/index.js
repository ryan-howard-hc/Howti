import React, { useState }  from 'react';
import icon from './Icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlantInfo from '../axios/index';
import Main from '../mainpage/index';
import axios from 'axios';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50px',
  borderBottom: '1px solid #E0E0E0', 
  padding: '0 20px', 
};

const titular = {
  paddingLeft: '350px',
  fontSize: '22px',
  fontWeight: 'bold',
};

const linkContainerStyle = {
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  paddingRight: '350px', 
};

const linkStyle = {
  color: '#9E9E9E',
  textDecoration: 'none',
  fontSize: '20px',
  margin: '0 10px',
  transition: 'color 0.3s ease', // Adding a transition for smooth color change
};

// Add a hover effect by changing the link color on hover
// linkStyle[':hover'] = {
//   color: '#FF5733', // Change to the color you want on hover
// };

export default function Navbar() {

  const [searchValue, setSearchValue] = useState('');
  const [plantData, setPlantData] = useState(null);
  console.log("handleSearchClick - searchValue:", searchValue);
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';
    const apiUrl = `https://trefle.io/api/v1/species?token=${API_KEY}&common_name=${searchValue}`;
    
    axios.get(apiUrl)
      .then(response => {
        if (response.data.length > 0) {
          setPlantData(response.data[0]);
          console.log("handleSearchClick - Fetched plantData:", response.data[0]);

        } else {
          setPlantData(null);
          console.log("handleSearchClick - No plant data found.");

        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <nav style={navbarStyle}>
      {/* ... rest of your code ... */}
      <div>
        <input
          type="text"
          placeholder="Search for plants..."
          value={searchValue}
          onChange={handleSearchChange}
          style={{
            fontSize: '16px',
            padding: '5px 10px',
            borderRadius: '4px',
            marginLeft: '10px',
          }}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div>
      <Main plantData={plantData} handleSearchClick={handleSearchClick} />
      </div>
    </nav>
  );
}
