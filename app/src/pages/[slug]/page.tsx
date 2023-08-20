import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchSlug } from '../../utils/api';

const PlantDetailPage = () => {
  const router = useRouter();
  

  const plantDataJson = router.query.plantData;
  const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;
  const plantSlug = plantData ? plantData.slug : null; 

  const [plantImages, setPlantImages] = useState([]); 

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


// const PlantDetailPage = () => {
//   const router = useRouter();

//   const plantDataJson = router.query.plantData;
//   const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;
//   const plantSlug = plantData ? plantData.slug : null;

//   const [leafImages, setLeafImages] = useState([]);
//   const [flowerImages, setFlowerImages] = useState([]);
//   const [barkImages, setBarkImages] = useState([]);
//   const [fruitImages, setFruitImages] = useState([]);

//   useEffect(() => {
//     const plantSlug = router.query.slug;

//     if (plantSlug) {
//       fetchSlug(plantSlug).then((images) => {
//         setLeafImages(images.leaf || []);
//         setFlowerImages(images.flower || []);
//         setBarkImages(images.bark || []);
//         setFruitImages(images.fruit || []);
//       });
//     }
//   }, [router.query.slug]);

//   console.log(plantData);

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>Plant Details</h1>
//       {plantData ? (
//         <div className="card">
//           {leafImages.length > 0 && (
//             <div>
//               <h2>Leaf Images</h2>
//               <Carousel showArrows={true} infiniteLoop={true}>
//                 {leafImages.map((imageUrl, index) => (
//                   <div key={index}>
//                     <img
//                       src={imageUrl.image_url}
//                       alt={`Leaf Image ${index}`}
//                       style={{
//                         maxHeight: '300px',
//                         maxWidth: '300px',
//                       }}
//                     />
//                   </div>
//                 ))}
//               </Carousel>
//             </div>
//           )}

//           {flowerImages.length > 0 && (
//             <div>
//               <h2>Flower Images</h2>
//               <Carousel showArrows={true} infiniteLoop={true}>
//                 {flowerImages.map((imageUrl, index) => (
//                   <div key={index}>
//                     <img
//                       src={imageUrl.image_url}
//                       alt={`Flower Image ${index}`}
//                       style={{
//                         maxHeight: '300px',
//                         maxWidth: '300px',
//                       }}
//                     />
//                   </div>
//                 ))}
//               </Carousel>
//             </div>
//           )}

//           {barkImages.length > 0 && (
//             <div>
//               <h2>Bark Images</h2>
//               <Carousel showArrows={true} infiniteLoop={true}>
//                 {barkImages.map((imageUrl, index) => (
//                   <div key={index}>
//                     <img
//                       src={imageUrl.image_url}
//                       alt={`Bark Image ${index}`}
//                       style={{
//                         maxHeight: '300px',
//                         maxWidth: '300px',
//                       }}
//                     />
//                   </div>
//                 ))}
//               </Carousel>
//             </div>
//           )}

//           {fruitImages.length > 0 && (
//             <div>
//               <h2>Fruit Images</h2>
//               <Carousel showArrows={true} infiniteLoop={true}>
//                 {fruitImages.map((imageUrl, index) => (
//                   <div key={index}>
//                     <img
//                       src={imageUrl.image_url}
//                       alt={`Fruit Image ${index}`}
//                       style={{
//                         maxHeight: '300px',
//                         maxWidth: '300px',
//                       }}
//                     />
//                   </div>
//                 ))}
//               </Carousel>
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default PlantDetailPage;



// const PlantDetailPage = () => {
//   const router = useRouter();

//   const plantDataJson = router.query.plantData;
//   const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;
//   const plantSlug = plantData ? plantData.slug : null;

//   const [plantImages, setPlantImages] = useState([]);

//   useEffect(() => {
//     if (plantSlug) {
//       fetchSlug(plantSlug).then((images) => {
//         setPlantImages(images);
//       });
//     }
//   }, [plantSlug]);

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>Plant Details</h1>
//       {plantData ? (
//         <div className="card">
//           {plantImages && plantImages.length > 0 ? (
//             <Carousel showArrows={true} infiniteLoop={true}>
//               {plantImages.map((categoryImages, index) => (
//                 <div key={index}>
//                   {Array.isArray(categoryImages) ? (
//                     categoryImages.map((imageUrl, imageIndex) => (
//                       <div key={imageIndex}>
//                         <img
//                           src={imageUrl}
//                           alt={`Image ${index}-${imageIndex}`}
//                           style={{
//                             maxHeight: '300px',
//                             maxWidth: '300px',
//                           }}
//                         />
//                       </div>
//                     ))
//                   ) : (
//                     <div key={index}>No images available for this category</div>
//                   )}
//                 </div>
//               ))}
//             </Carousel>
//           ) : (
//             <p>No images available</p>
//           )}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default PlantDetailPage;