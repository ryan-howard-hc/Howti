// import { NextResponse } from "next/server";
// import axios from "axios";

// export async function GET(req) {
//   return NextResponse.json(
//     { error: "Method not allowed" },
//     {
//       status: 405,
//     }
//   );
// }

// export async function POST(req) {
//   try {
//     const { slug } = req.query;
//     const apiUrl = `https://trefle.io/api/v1/plants/${slug}?token=eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI`;

//     const response = await axios.get(apiUrl);
//     const plantDetail = response.data.data;

//     return NextResponse.json(plantDetail, {
//       status: 200,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to get plant details" },
//       {
//         status: 500,
//       }
//     );
//   }
// }
// export async function POST(req) {
//     try {
//       // Get plant details using Prisma
//       const { slug } = req.query;
//       const plantDetail = await prisma.plant.findUnique({
//         where: { slug },
//       });
  
//       return NextResponse.json(plantDetail, {
//         status: 200,
//       });
//     } catch (error) {
//       return NextResponse.json(
//         { error: "Failed to get plant details" },
//         {
//           status: 500,
//         }
//       );
//     }
//   }
