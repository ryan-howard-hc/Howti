import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../layout';
import axios from 'axios';
import Main from '../pages/mainpage/index';

const PlantDetailPage = ({ plantDetail }) => {
  const router = useRouter();

  if (router.isFallback) {
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