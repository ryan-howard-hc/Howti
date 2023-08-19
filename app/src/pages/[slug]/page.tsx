import { useRouter } from 'next/router';

const PlantDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Check if plantData is defined before parsing it
  const plantDataJson = router.query.plantData;
  const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;

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
            {/* Add more details as needed */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlantDetailPage;