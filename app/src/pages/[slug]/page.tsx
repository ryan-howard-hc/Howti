import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchSlug } from '../../utils/api';
import Gallery from 'react-image-gallery'; 

const PlantDetailPage = () => {
  const router = useRouter();
  

  const plantDataJson = router.query.plantData;
  const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;
  const plantSlug = plantData ? plantData.slug : null; // Assuming you have a slug property in plantData

  const [plantImages, setPlantImages] = useState([]); // State to store plant images

  useEffect(() => {
    const plantSlug = router.query.slug;

    if (plantSlug) {
      fetchSlug(plantSlug).then((images) => {
        setPlantImages(images);
      });
    }
  }, [router.query.slug]);

  console.log(plantData);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Plant Details</h1>
      {plantData ? (
        <div className="card">
          {plantImages && plantImages.length > 0 ? (
            <Carousel showArrows={true} infiniteLoop={true}>
              {plantImages.map((imageUrl, index) => (
                <div key={index}>
                  {/* Apply fixed height and width here */}
                  <img
                    src={imageUrl}
                    alt={`Image ${index}`}
                    style={{
                      maxHeight: '300px', // Adjust the height as needed
                      maxWidth: '300px', // Adjust the width as needed
                    }}
                  />
                </div>
              ))}
            </Carousel>
          ) : (
            <p>No images available</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlantDetailPage;