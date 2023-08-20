import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchSlug,handleSearchClick, fetchFlowerData, fetchFoliageData, fetchGrowthData } from '../../utils/api';
import Gallery from 'react-image-gallery'; 

const PlantDetailPage = () => {
  const router = useRouter();

  const plantDataJson = router.query.plantData;
  const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;

  const [flowerData, setFlowerData] = useState(null); 
  const [foliageData, setFoliageData] = useState(null); 
  const [growthData, setGrowthData] = useState(null);

  useEffect(() => {
    if (plantData) {
      fetchFlowerData(plantData.common_name, setFlowerData);
      fetchFoliageData(plantData.common_name, setFoliageData);
      fetchGrowthData(plantData.common_name, setGrowthData);
    }
  }, [plantData]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Plant Details</h1>
      {plantData ? (
        <div className="card">
          <img
            src={plantData.image_url}
            alt={plantData.common_name}
            className="card-img-top"
            style={{ maxHeight: '200px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h3 className="card-title">{plantData.common_name}</h3>
            <p className="card-text">Family: {plantData.family}</p>

            {plantData.images && plantData.images.length > 0 ? (
              <div>


                <Gallery items={plantData.images.map(imageUrl => ({ original: imageUrl, thumbnail: imageUrl }))} />
              </div>
            ) : (
              <p>No images available</p>
            )}

            {/* {flowerData && (
              <div>
                <h3>Flower Data</h3>
                <p>Color: {flowerData.flower.color}</p>
            {/* </div>
            )} */}

            {/* {foliageData && (
              <div>
                <h3>Foliage Data</h3>
                <p>Color: {foliageData.foliage.color}</p>
              </div>
            )} */}

            {/* {growthData && (
              <div>
                <h3>Growth Data</h3>
                <p>Description: {growthData.description}</p>
              </div>
            )} */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlantDetailPage;
