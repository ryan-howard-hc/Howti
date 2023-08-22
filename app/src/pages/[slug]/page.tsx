import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchSlug, fetchWikipediaDescription } from '../../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../layout';


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
  const [scientificName, setScientificName] = useState('');

  
  useEffect(() => {
    const plantSlug = router.query.slug;

    if (plantSlug) {
      fetchSlug(plantSlug).then((data) => {
        setLeafImages(data.images.leaf || []);
        setFlowerImages(data.images.flower || []);
        setBarkImages(data.images.bark || []);
        setCommonNames(data.common_names.eng || []);
        setGenus(data.genus);
        setFamily(data.family);
        setScientificName(data.scientific_name);

        const commonName = data.scientific_name;
        fetchWikipediaDescription(commonName).then((description) => {
          setWikipediaDescription(description);
        });
      });
    }
  }, [router.query.slug]);

  const descriptionThreshold = 500;

  return (
    <Layout>
      <div className="container">
        <div className="text-center">
          <h1>{scientificName || 'Loading...'}</h1>
        </div>

        {plantData ? (
          <div className="card">
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6">
                {/* Leaf Carousel */}
                {leafImages.length > 0 && (
                  <div className="col-md-12">
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

                {/* Flower and Bark Images */}
                {wikipediaDescription.length > descriptionThreshold && (
                  <>
                    <div className="col-md-12">
                      {/* Flower Carousel */}
                      {flowerImages.length > 0 && (
                        <div>
                          <div className="text-center">
                            <h2>Flower Images</h2>
                          </div>
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
                    </div>
                    <div className="col-md-12">
                      {/* Bark Carousel */}
                      {barkImages.length > 0 && (
                        <div>
                          <div className="text-center">
                            <h2>Bark Images</h2>
                          </div>
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
                  </>
                )}
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                {/* Description */}
                <h2>Description</h2>
                {wikipediaDescription.split('\n\n').map((paragraph, index) => (
                  <p style={{ fontSize: '20px' }} key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
};

export default PlantDetailPage;