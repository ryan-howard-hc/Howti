import React from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../layout';
import axios from 'axios';


const PlantDetailPage = ({ plantDetail }) => {
  return (
    <MainLayout>
      <div style={{ textAlign: 'center' }}>
        <h1>Plant Details</h1>
        <div className="card">
          <img src={plantDetail.image_url} alt={plantDetail.common_name} className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h3 className="card-title">{plantDetail.common_name}</h3>
            <p className="card-text">Family: {plantDetail.family}</p>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';
  const apiUrl = `https://trefle.io/api/v1/plants/${slug}?token=${API_KEY}`;

  try {
    const response = await axios.get(apiUrl);
    const plantDetail = response.data.data;
    return {
      props: {
        plantDetail,
      },
    };
  } catch (error) {
    console.error('Error fetching plant detail:', error);
    return {
      notFound: true,
    };
  }
}

export default PlantDetailPage;