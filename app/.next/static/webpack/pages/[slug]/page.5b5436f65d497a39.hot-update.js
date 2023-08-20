"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]/page",{

/***/ "./src/pages/[slug]/page.tsx":
/*!***********************************!*\
  !*** ./src/pages/[slug]/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PlantDetailPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Get the slug from the router query\n    const { slug } = router.query;\n    // State to store data fetched using fetchSlug\n    const [slugData, setSlugData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (slug) {\n            // Fetch data using fetchSlug and set it in the state\n            (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.fetchSlug)(slug, setSlugData);\n        }\n    }, [\n        slug\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Plant Details\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            slugData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"card-title\",\n                        children: slugData.name\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined),\n                    renderImageCarousels(slugData)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlantDetailPage, \"o/Gnq/N3IB2VH7LSeO1tzUZevm8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PlantDetailPage;\n// Helper function to render separate carousels for each image type\nconst renderImageCarousels = (slugData)=>{\n    const imageTypes = [\n        \"image_url\",\n        \"flower\",\n        \"habit\",\n        \"bark\",\n        \"fruit\",\n        \"other\"\n    ];\n    return imageTypes.map((type)=>{\n        if (Array.isArray(slugData[type])) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: type\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_image_gallery__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        items: getImages(slugData[type])\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, type, true, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined);\n        }\n        return null;\n    });\n};\n// Helper function to format images for the Gallery component\nconst getImages = (images)=>{\n    return images.map((image)=>({\n            original: image.image_url,\n            thumbnail: image.image_url,\n            description: image.copyright\n        }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetailPage); // const PlantDetailPage = () => {\n //   const router = useRouter();\n //   const plantDataJson = router.query.plantData;\n //   const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;\n //   const [flowerData, setFlowerData] = useState(null); \n //   const [foliageData, setFoliageData] = useState(null); \n //   const [growthData, setGrowthData] = useState(null);\n //   useEffect(() => {\n //     if (plantData) {\n //       fetchFlowerData(plantData.common_name, setFlowerData);\n //       fetchFoliageData(plantData.common_name, setFoliageData);\n //       fetchGrowthData(plantData.common_name, setGrowthData);\n //     }\n //   }, [plantData]);\n //   return (\n //     <div style={{ textAlign: 'center' }}>\n //       <h1>Plant Details</h1>\n //       {plantData ? (\n //         <div className=\"card\">\n //           <img\n //             src={plantData.image_url}\n //             alt={plantData.common_name}\n //             className=\"card-img-top\"\n //             style={{ maxHeight: '200px', objectFit: 'cover' }}\n //           />\n //           <div className=\"card-body\">\n //             <h3 className=\"card-title\">{plantData.common_name}</h3>\n //             <p className=\"card-text\">Family: {plantData.family}</p>\n //             {plantData.images && plantData.images.length > 0 ? (\n //               <div>\n //                 <Gallery items={plantData.images.map(imageUrl => ({ original: imageUrl, thumbnail: imageUrl }))} />\n //               </div>\n //             ) : (\n //               <p>No images available</p>\n //             )}\n //       ) : (\n //         <p>Loading...</p>\n //       )}\n //     </div>\n //   );\n // };\n // export default PlantDetailPage;\nvar _c;\n$RefreshReg$(_c, \"PlantDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3NsdWddL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFFdUI7QUFDbkI7QUFDRjtBQUUxQyxNQUFNSyxrQkFBa0I7O0lBQ3RCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUV4QixxQ0FBcUM7SUFDckMsTUFBTSxFQUFFSyxJQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUU3Qiw4Q0FBOEM7SUFDOUMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNSLElBQUlPLE1BQU07WUFDUixxREFBcUQ7WUFDckRKLHFEQUFTQSxDQUFDSSxNQUFNRztRQUNsQjtJQUNGLEdBQUc7UUFBQ0g7S0FBSztJQUVULHFCQUNFLDhEQUFDSTtRQUFJQyxPQUFPO1lBQUVDLFdBQVc7UUFBUzs7MEJBQ2hDLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hMLHlCQUNDLDhEQUFDRTtnQkFBSUksV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFjTixTQUFTUSxJQUFJOzs7Ozs7b0JBRXhDQyxxQkFBcUJUOzs7Ozs7MENBR3hCLDhEQUFDVTswQkFBRTs7Ozs7Ozs7Ozs7O0FBSVg7R0E5Qk1kOztRQUNXSCxrREFBU0E7OztLQURwQkc7QUFnQ04sbUVBQW1FO0FBQ25FLE1BQU1hLHVCQUF1QixDQUFDVDtJQUM1QixNQUFNVyxhQUFhO1FBQUM7UUFBYTtRQUFVO1FBQVM7UUFBUTtRQUFTO0tBQVE7SUFFN0UsT0FBT0EsV0FBV0MsR0FBRyxDQUFDLENBQUNDO1FBQ3JCLElBQUlDLE1BQU1DLE9BQU8sQ0FBQ2YsUUFBUSxDQUFDYSxLQUFLLEdBQUc7WUFDakMscUJBQ0UsOERBQUNYOztrQ0FDQyw4REFBQ2M7a0NBQUlIOzs7Ozs7a0NBQ0wsOERBQUNsQiw0REFBT0E7d0JBQUNzQixPQUFPQyxVQUFVbEIsUUFBUSxDQUFDYSxLQUFLOzs7Ozs7O2VBRmhDQTs7Ozs7UUFLZDtRQUNBLE9BQU87SUFDVDtBQUNGO0FBRUEsNkRBQTZEO0FBQzdELE1BQU1LLFlBQVksQ0FBQ0M7SUFDakIsT0FBT0EsT0FBT1AsR0FBRyxDQUFDLENBQUNRLFFBQVc7WUFDNUJDLFVBQVVELE1BQU1FLFNBQVM7WUFDekJDLFdBQVdILE1BQU1FLFNBQVM7WUFDMUJFLGFBQWFKLE1BQU1LLFNBQVM7UUFDOUI7QUFDRjtBQUVBLCtEQUFlN0IsZUFBZUEsRUFBQyxDQU0vQixrQ0FBa0M7Q0FDbEMsZ0NBQWdDO0NBRWhDLGtEQUFrRDtDQUNsRCx3RUFBd0U7Q0FFeEUseURBQXlEO0NBQ3pELDJEQUEyRDtDQUMzRCx3REFBd0Q7Q0FFeEQsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QiwrREFBK0Q7Q0FDL0QsaUVBQWlFO0NBQ2pFLCtEQUErRDtDQUMvRCxRQUFRO0NBQ1IscUJBQXFCO0NBRXJCLGFBQWE7Q0FDYiw0Q0FBNEM7Q0FDNUMsK0JBQStCO0NBQy9CLHVCQUF1QjtDQUN2QixpQ0FBaUM7Q0FDakMsaUJBQWlCO0NBQ2pCLHdDQUF3QztDQUN4QywwQ0FBMEM7Q0FDMUMsdUNBQXVDO0NBQ3ZDLGlFQUFpRTtDQUNqRSxlQUFlO0NBQ2Ysd0NBQXdDO0NBQ3hDLHNFQUFzRTtDQUN0RSxzRUFBc0U7Q0FFdEUsbUVBQW1FO0NBQ25FLHNCQUFzQjtDQUd0QixzSEFBc0g7Q0FDdEgsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQiwyQ0FBMkM7Q0FDM0MsaUJBQWlCO0NBR2pCLGNBQWM7Q0FDZCw0QkFBNEI7Q0FDNUIsV0FBVztDQUNYLGFBQWE7Q0FDYixPQUFPO0NBQ1AsS0FBSztDQUVMLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3NsdWddL3BhZ2UudHN4PzUwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XG5pbXBvcnQgJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzJztcbmltcG9ydCB7IGZldGNoU2x1ZyB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICdyZWFjdC1pbWFnZS1nYWxsZXJ5JzsgXG5cbmNvbnN0IFBsYW50RGV0YWlsUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gR2V0IHRoZSBzbHVnIGZyb20gdGhlIHJvdXRlciBxdWVyeVxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcblxuICAvLyBTdGF0ZSB0byBzdG9yZSBkYXRhIGZldGNoZWQgdXNpbmcgZmV0Y2hTbHVnXG4gIGNvbnN0IFtzbHVnRGF0YSwgc2V0U2x1Z0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2x1Zykge1xuICAgICAgLy8gRmV0Y2ggZGF0YSB1c2luZyBmZXRjaFNsdWcgYW5kIHNldCBpdCBpbiB0aGUgc3RhdGVcbiAgICAgIGZldGNoU2x1ZyhzbHVnLCBzZXRTbHVnRGF0YSk7XG4gICAgfVxuICB9LCBbc2x1Z10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgPGgxPlBsYW50IERldGFpbHM8L2gxPlxuICAgICAge3NsdWdEYXRhID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntzbHVnRGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgey8qIFJlbmRlciBzZXBhcmF0ZSBjYXJvdXNlbHMgZm9yIGVhY2ggaW1hZ2UgdHlwZSAqL31cbiAgICAgICAgICB7cmVuZGVySW1hZ2VDYXJvdXNlbHMoc2x1Z0RhdGEpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJlbmRlciBzZXBhcmF0ZSBjYXJvdXNlbHMgZm9yIGVhY2ggaW1hZ2UgdHlwZVxuY29uc3QgcmVuZGVySW1hZ2VDYXJvdXNlbHMgPSAoc2x1Z0RhdGEpID0+IHtcbiAgY29uc3QgaW1hZ2VUeXBlcyA9IFtcImltYWdlX3VybFwiLCBcImZsb3dlclwiLCBcImhhYml0XCIsIFwiYmFya1wiLCBcImZydWl0XCIsIFwib3RoZXJcIl07XG5cbiAgcmV0dXJuIGltYWdlVHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2x1Z0RhdGFbdHlwZV0pKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17dHlwZX0+XG4gICAgICAgICAgPGg0Pnt0eXBlfTwvaDQ+XG4gICAgICAgICAgPEdhbGxlcnkgaXRlbXM9e2dldEltYWdlcyhzbHVnRGF0YVt0eXBlXSl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0pO1xufTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZvcm1hdCBpbWFnZXMgZm9yIHRoZSBHYWxsZXJ5IGNvbXBvbmVudFxuY29uc3QgZ2V0SW1hZ2VzID0gKGltYWdlcykgPT4ge1xuICByZXR1cm4gaW1hZ2VzLm1hcCgoaW1hZ2UpID0+ICh7XG4gICAgb3JpZ2luYWw6IGltYWdlLmltYWdlX3VybCxcbiAgICB0aHVtYm5haWw6IGltYWdlLmltYWdlX3VybCxcbiAgICBkZXNjcmlwdGlvbjogaW1hZ2UuY29weXJpZ2h0LFxuICB9KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFudERldGFpbFBhZ2U7XG5cblxuXG5cblxuLy8gY29uc3QgUGxhbnREZXRhaWxQYWdlID0gKCkgPT4ge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuLy8gICBjb25zdCBwbGFudERhdGFKc29uID0gcm91dGVyLnF1ZXJ5LnBsYW50RGF0YTtcbi8vICAgY29uc3QgcGxhbnREYXRhID0gcGxhbnREYXRhSnNvbiA/IEpTT04ucGFyc2UocGxhbnREYXRhSnNvbikgOiBudWxsO1xuXG4vLyAgIGNvbnN0IFtmbG93ZXJEYXRhLCBzZXRGbG93ZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpOyBcbi8vICAgY29uc3QgW2ZvbGlhZ2VEYXRhLCBzZXRGb2xpYWdlRGF0YV0gPSB1c2VTdGF0ZShudWxsKTsgXG4vLyAgIGNvbnN0IFtncm93dGhEYXRhLCBzZXRHcm93dGhEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgaWYgKHBsYW50RGF0YSkge1xuLy8gICAgICAgZmV0Y2hGbG93ZXJEYXRhKHBsYW50RGF0YS5jb21tb25fbmFtZSwgc2V0Rmxvd2VyRGF0YSk7XG4vLyAgICAgICBmZXRjaEZvbGlhZ2VEYXRhKHBsYW50RGF0YS5jb21tb25fbmFtZSwgc2V0Rm9saWFnZURhdGEpO1xuLy8gICAgICAgZmV0Y2hHcm93dGhEYXRhKHBsYW50RGF0YS5jb21tb25fbmFtZSwgc2V0R3Jvd3RoRGF0YSk7XG4vLyAgICAgfVxuLy8gICB9LCBbcGxhbnREYXRhXSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4vLyAgICAgICA8aDE+UGxhbnQgRGV0YWlsczwvaDE+XG4vLyAgICAgICB7cGxhbnREYXRhID8gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbi8vICAgICAgICAgICA8aW1nXG4vLyAgICAgICAgICAgICBzcmM9e3BsYW50RGF0YS5pbWFnZV91cmx9XG4vLyAgICAgICAgICAgICBhbHQ9e3BsYW50RGF0YS5jb21tb25fbmFtZX1cbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG4vLyAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICcyMDBweCcsIG9iamVjdEZpdDogJ2NvdmVyJyB9fVxuLy8gICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbi8vICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3BsYW50RGF0YS5jb21tb25fbmFtZX08L2gzPlxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+RmFtaWx5OiB7cGxhbnREYXRhLmZhbWlseX08L3A+XG5cbi8vICAgICAgICAgICAgIHtwbGFudERhdGEuaW1hZ2VzICYmIHBsYW50RGF0YS5pbWFnZXMubGVuZ3RoID4gMCA/IChcbi8vICAgICAgICAgICAgICAgPGRpdj5cblxuXG4vLyAgICAgICAgICAgICAgICAgPEdhbGxlcnkgaXRlbXM9e3BsYW50RGF0YS5pbWFnZXMubWFwKGltYWdlVXJsID0+ICh7IG9yaWdpbmFsOiBpbWFnZVVybCwgdGh1bWJuYWlsOiBpbWFnZVVybCB9KSl9IC8+XG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgKSA6IChcbi8vICAgICAgICAgICAgICAgPHA+Tm8gaW1hZ2VzIGF2YWlsYWJsZTwvcD5cbi8vICAgICAgICAgICAgICl9XG5cblxuLy8gICAgICAgKSA6IChcbi8vICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbi8vICAgICAgICl9XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBQbGFudERldGFpbFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJmZXRjaFNsdWciLCJHYWxsZXJ5IiwiUGxhbnREZXRhaWxQYWdlIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5Iiwic2x1Z0RhdGEiLCJzZXRTbHVnRGF0YSIsImRpdiIsInN0eWxlIiwidGV4dEFsaWduIiwiaDEiLCJjbGFzc05hbWUiLCJoMyIsIm5hbWUiLCJyZW5kZXJJbWFnZUNhcm91c2VscyIsInAiLCJpbWFnZVR5cGVzIiwibWFwIiwidHlwZSIsIkFycmF5IiwiaXNBcnJheSIsImg0IiwiaXRlbXMiLCJnZXRJbWFnZXMiLCJpbWFnZXMiLCJpbWFnZSIsIm9yaWdpbmFsIiwiaW1hZ2VfdXJsIiwidGh1bWJuYWlsIiwiZGVzY3JpcHRpb24iLCJjb3B5cmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[slug]/page.tsx\n"));

/***/ })

});