import axios from 'axios';

export const handleSearchClick = (searchValue, setPlantData, setFlowerData, setFoliageData, setGrowthData) => {
  const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';
  const apiUrl = `https://trefle.io/api/v1/plants/search?token=${API_KEY}&q=${searchValue}`;

  axios.get(apiUrl)
    .then(response => {
      setPlantData(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  fetchFlowerData(searchValue, setFlowerData);
  fetchFoliageData(searchValue, setFoliageData);
  fetchGrowthData(searchValue, setGrowthData);
};

export const fetchFlowerData = (searchValue, setFlowerData) => {
  const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';
  const apiUrl = `https://trefle.io/api/v1/plants/search?token=${API_KEY}&q=${searchValue}&fields=flower.color`;

  axios.get(apiUrl)
    .then(response => {
      setFlowerData(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching flower data:', error);
    });
};

export const fetchFoliageData = (searchValue, setFoliageData) => {
  const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';
  const apiUrl = `https://trefle.io/api/v1/plants/search?token=${API_KEY}&q=${searchValue}&fields=foliage.color`;

  axios.get(apiUrl)
    .then(response => {
      setFoliageData(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching foliage data:', error);
    });
};

export const fetchGrowthData = (searchValue, setGrowthData) => {
  const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';
  const apiUrl = `https://trefle.io/api/v1/plants/search?token=${API_KEY}&q=${searchValue}&fields=minimum_temperature,maximum_temperature,soil_nutriments,soil_salinity,soil_texture,soil_humidity,description`;

  axios.get(apiUrl)
    .then(response => {
      setGrowthData(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching growth data:', error);
    });
};

export const fetchSlug = async (slug) => {
  const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';
  const apiUrl = `https://trefle.io/api/v1/plants/${slug}?token=${API_KEY}`;

  try {
    const response = await axios.get(apiUrl);
    const plantData = response.data.data;

    // Extract images from the plantData object
    const images = [];

    if (plantData.main_species && plantData.main_species.images && plantData.main_species.images.leaf) {
      plantData.main_species.images.leaf.forEach((image) => {
        images.push(image.image_url);
      });
    }

    return images;
  } catch (error) {
    console.error('Error fetching plant data by slug:', error);
    return [];
  }
};