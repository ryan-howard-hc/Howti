import axios from 'axios';

export const handleSearchClick = (searchValue, setPlantData) => {
  const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';
  const apiUrl = `https://trefle.io/api/v1/plants/search?token=${API_KEY}&q=${searchValue}`;

  axios.get(apiUrl)
    .then(response => {
      setPlantData(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};