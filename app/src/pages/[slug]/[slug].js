import { useRouter } from 'next/router';
import MainLayout from '../../layout';
import axios from 'axios';
import { handleSearchClick, fetchFlowerData, fetchFoliageData, fetchGrowthData } from '../../utils/api'; // Import the function from the utility file


const PlantDetailPage = ({ plantDetail }) => {
  return (
    <MainLayout>
      <div style={{ textAlign: 'center' }}>
        <h1>Plant Details</h1>
        <div className="card">
          <img
            src={plantDetail.image_url}
            alt={plantDetail.common_name}
            className="card-img-top"
            style={{ maxHeight: '200px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h3 className="card-title">{plantDetail.common_name}</h3>
            <p className="card-text">Family: {plantDetail.family}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Fetch plant details using slug
export async function getServerSideProps(context) {
  const { slug } = context.query;

  try {
    const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';
    const apiUrl = `https://trefle.io/api/v1/plants/${slug}?token=${API_KEY}`;

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