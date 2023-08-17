import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../layout';

const PlantDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [plantDetail, setPlantDetail] = useState(null);

  useEffect(() => {
    // Fetch plant detail based on the ID from the route
    // Replace the following placeholder with actual fetching logic
    const fetchPlantDetail = async () => {
      try {
        // Fetch plant details using the ID
        // Example API call: axios.get(`/api/plants/${id}`)
        // Replace the following with actual API call
        const response = await axios.get(`/api/plants/${id}`);
        setPlantDetail(response.data);
      } catch (error) {
        console.error('Error fetching plant detail:', error);
      }
    };

    fetchPlantDetail();
  }, [id]);

  if (!plantDetail) {
    return <p>Loading...</p>;
  }

  return (
    <MainLayout>
      <div style={{ textAlign: 'center' }}>
        <h1>Plant Details</h1>
        <div className="card">
          <h3 className="card-title">{plantDetail.common_name}</h3>
          <p className="card-text">Family: {plantDetail.family}</p>
          {/* Display other details */}
        </div>
      </div>
    </MainLayout>
  );
}

export default PlantDetailPage;