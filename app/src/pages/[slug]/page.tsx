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

  const [leafImages, setLeafImages] = useState([]);
  const [flowerImages, setFlowerImages] = useState([]);
  const [barkImages, setBarkImages] = useState([]);

  useEffect(() => {
    const plantSlug = router.query.slug;

    if (plantSlug) {
      fetchSlug(plantSlug).then((images) => {
        // Separate images into leaf, flower, and bark arrays
        setLeafImages(images.leaf || []);
        setFlowerImages(images.flower || []);
        setBarkImages(images.bark || []);
      });
    }
  }, [router.query.slug]);

  console.log(plantData);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Plant Details</h1>
      {plantData ? (
        <div className="card">
          {/* Display Leaf Images */}
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
                        maxHeight: '300px',
                        maxWidth: '300px',
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          )}

          {/* Display Flower Images */}
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

          {/* Display Bark Images */}
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlantDetailPage;



// const PlantDetailPage = () => {
//   const router = useRouter();
//   const [plantImages, setPlantImages] = useState({ leaf: [], flower: [], bark: [] }); // Store images for different parts
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     const plantSlug = router.query.slug;

//     if (plantSlug) {
//       fetchSlug(plantSlug).then((images) => {
//         setPlantImages(images);
//         setLoading(false); // Set loading to false when images are fetched
//       }).catch((error) => {
//         console.error('Error fetching plant images:', error);
//         setLoading(false); // Set loading to false in case of an error
//       });
//     }
//   }, [router.query.slug]);

//   console.log(plantImages);

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>Plant Details</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="card">
//           {plantImages.leaf.length > 0 && (
//             <div>
//               <h2>Leaf Images</h2>
//               <Carousel showArrows={true} infiniteLoop={true}>
//                 {plantImages.leaf.map((imageUrl, index) => (
//                   <div key={index}>
//                     <img
//                       src={imageUrl}
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

//           {plantImages.flower.length > 0 && (
//             <div>
//               <h2>Flower Images</h2>
//               <Carousel showArrows={true} infiniteLoop={true}>
//                 {plantImages.flower.map((imageUrl, index) => (
//                   <div key={index}>
//                     <img
//                       src={imageUrl}
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

//           {plantImages.bark.length > 0 && (
//             <div>
//               <h2>Bark Images</h2>
//               <Carousel showArrows={true} infiniteLoop={true}>
//                 {plantImages.bark.map((imageUrl, index) => (
//                   <div key={index}>
//                     <img
//                       src={imageUrl}
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
//         </div>
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