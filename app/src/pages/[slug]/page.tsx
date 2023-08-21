import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchSlug, fetchWikipediaDescription } from '../../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import cheerio from 'cheerio';

const PlantDetailPage = () => {
  const router = useRouter();

  const plantDataJson = router.query.plantData;
  const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;
  const plantSlug = plantData ? plantData.slug : null;

  const [leafImages, setLeafImages] = useState([]);
  const [flowerImages, setFlowerImages] = useState([]);
  const [barkImages, setBarkImages] = useState([]);
  const [commonNames, setCommonNames] = useState([]);
  const [wikipediaDescription, setWikipediaDescription] = useState('');
  const [genus, setGenus] = useState('');
  const [family, setFamily] = useState('');
  const [scientificName, setScientificName] = useState(''); // Initialize scientificName state

  useEffect(() => {
    const plantSlug = router.query.slug;

    if (plantSlug) {
      fetchSlug(plantSlug).then((data) => {
        setLeafImages(data.images.leaf || []);
        setFlowerImages(data.images.flower || []);
        setBarkImages(data.images.bark || []);
        setCommonNames(data.common_names.eng || []);
        setGenus(data.genus); // Set the genus
        setFamily(data.family); // Set the family
        setScientificName(data.scientific_name); // Set the scientific_name

        const commonName = data.common_names.eng[0];
        fetchWikipediaDescription(commonName).then((description) => {
          setWikipediaDescription(description);
        });
      });
    }
  }, [router.query.slug]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Plant Details</h1>
      {plantData ? (
        <div className="card">
          <div>
            {/* Common Names */}
            <h2>Common Names</h2>
            <ul style={{ listStyleType: 'none' }}>
              {commonNames.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
            {/* Wikipedia Description */}
            <h2>Wikipedia Description</h2>
            {wikipediaDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div>
            {/* Genus */}
            {genus && (
              <div>
                <h2>Genus</h2>
                <p>{genus}</p>
              </div>
            )}
            {/* Family */}
            {family && (
              <div>
                <h2>Family</h2>
                <p>{family}</p>
              </div>
            )}
            {/* Scientific Name */}
            {scientificName && (
              <div>
                <h2>Scientific Name</h2>
                <p>{scientificName}</p>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Leaf Carousel */}
            {leafImages.length > 0 && (
              <div>
                <h2>Leaf Images</h2>
                <Carousel showArrows={true} infiniteLoop={true}>
                  {leafImages.map((imageUrl, index) => (
                    <div key={index}>
                      <img
                        src={imageUrl}
                        alt={`Leaf Image ${index}`}
                        style={{
                          maxHeight: '500px',
                          maxWidth: '300px',
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}

            {flowerImages.length > 0 && (
              <div>
                <h2>Flower Images</h2>
                <Carousel showArrows={true} infiniteLoop={true}>
                  {flowerImages.map((imageUrl, index) => (
                    <div key={index}>
                      <img
                        src={imageUrl}
                        alt={`Flower Image ${index}`}
                        style={{
                          maxHeight: '300px',
                          maxWidth: '300px',
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}

            {/* Bark Carousel */}
            {barkImages.length > 0 && (
              <div>
                <h2>Bark Images</h2>
                <Carousel showArrows={true} infiniteLoop={true}>
                  {barkImages.map((imageUrl, index) => (
                    <div key={index}>
                      <img
                        src={imageUrl}
                        alt={`Bark Image ${index}`}
                        style={{
                          maxHeight: '300px',
                          maxWidth: '300px',
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlantDetailPage;