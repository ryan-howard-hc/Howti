import axios from 'axios';
import cheerio from 'cheerio';


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
// ---------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------
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
// ---------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------
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
// ---------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------
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
// ---------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------
export const fetchSlug = async (slug) => {
  const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';
  const apiUrl = `https://trefle.io/api/v1/plants/${slug}?token=${API_KEY}`;

  try {
    const response = await axios.get(apiUrl);
    const plantData = response.data.data;

    const images = {
      leaf: [],
      flower: [],
      bark: [],
    };

    if (plantData.main_species) {
      if (plantData.main_species.images && plantData.main_species.images.leaf) {
        plantData.main_species.images.leaf.forEach((image) => {
          images.leaf.push(image.image_url);
        });
      }

      if (plantData.main_species.images && plantData.main_species.images.flower) {
        plantData.main_species.images.flower.forEach((image) => {
          images.flower.push(image.image_url);
        });
      }

      if (plantData.main_species.images && plantData.main_species.images.bark) {
        plantData.main_species.images.bark.forEach((image) => {
          images.bark.push(image.image_url);
        });
      }

      const commonNames = plantData.main_species.common_names
        ? plantData.main_species.common_names.eng || []
        : [];

      // Include genus and family information
      const genus = plantData.main_species.genus || '';
      const family = plantData.main_species.family || '';
      const scientific_name = plantData.main_species.scientific_name || '';

      const formattedData = {
        common_names: {
          eng: commonNames,
        },
        images,
        genus, 
        family, 
        scientific_name,
      };

      return formattedData;
    }
    
    return {
      common_names: {
        eng: [],
      },
      images: {
        leaf: [],
        flower: [],
        bark: [],
      },
      genus: '', 
      family: '', 
      scientific_name: '',
    };
  } catch (error) {
    console.error('Error fetching plant data by slug:', error);
    return {
      common_names: {
        eng: [],
      },
      images: {
        leaf: [],
        flower: [],
        bark: [],
      },
    };
  }
};
// ---------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------
export const fetchWikipediaDescription = async (commonName) => {
  try {
    const googleSearchUrl = `https://www.google.com/search?q=${commonName}+site:wikipedia.org`;
    const googleSearchResponse = await axios.get(googleSearchUrl);
    const googleSearchHtml = googleSearchResponse.data;

    const $ = cheerio.load(googleSearchHtml);
    const wikipediaLink = $('a[href^="https://en.wikipedia.org/wiki/"]').attr('href');

    if (!wikipediaLink) {
      return 'No Wikipedia page found';
    }

    const wikipediaResponse = await axios.get(wikipediaLink);
    const wikipediaHtml = wikipediaResponse.data;

    const $$ = cheerio.load(wikipediaHtml);
    let description = '';

    const excludeKeywords = ['media related to', 'references', 'external links'];

    $$('p').each((index, element) => {
      const text = $$(element).text();

      // Check if the text contains any exclude keywords
      const shouldExclude = excludeKeywords.some(keyword => text.toLowerCase().includes(keyword));

      if (!shouldExclude) {
        const textWithoutCitations = text.replace(/\[\d+\]/g, '');
        if (textWithoutCitations.trim() !== '') {
          description += textWithoutCitations + '\n\n'; // Insert double newline for paragraph breaks
        }
      }
    });

    return description.trim();
  } catch (error) {
    console.error('Error fetching description:', error);
    return 'Error fetching description';
  }
};