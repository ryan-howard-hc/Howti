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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// const PlantDetailPage = () => {\n//   const router = useRouter();\n//   const plantDataJson = router.query.plantData;\n//   const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;\n//   const plantSlug = plantData ? plantData.slug : null; // Assuming you have a slug property in plantData\n//   const [plantImages, setPlantImages] = useState([]); // State to store plant images\n//   useEffect(() => {\n//     const plantSlug = router.query.slug;\n//     if (plantSlug) {\n//       fetchSlug(plantSlug).then((images) => {\n//         setPlantImages(images);\n//       });\n//     }\n//   }, [router.query.slug]);\n//   console.log(plantData);\n//   return (\n//     <div style={{ textAlign: 'center' }}>\n//       <h1>Plant Details</h1>\n//       {plantData ? (\n//         <div className=\"card\">\n//           {plantImages && plantImages.length > 0 ? (\n//             <Carousel showArrows={true} infiniteLoop={true}>\n//               {plantImages.map((imageUrl, index) => (\n//                 <div key={index}>\n//                   {/* Apply fixed height and width here */}\n//                   <img\n//                     src={imageUrl}\n//                     alt={`Image ${index}`}\n//                     style={{\n//                       maxHeight: '300px', // Adjust the height as needed\n//                       maxWidth: '300px', // Adjust the width as needed\n//                     }}\n//                   />\n//                 </div>\n//               ))}\n//             </Carousel>\n//           ) : (\n//             <p>No images available</p>\n//           )}\n//         </div>\n//       ) : (\n//         <p>Loading...</p>\n//       )}\n//     </div>\n//   );\n// };\n// export default PlantDetailPage;\nconst PlantDetailPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const plantDataJson = router.query.plantData;\n    const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;\n    const plantSlug = plantData ? plantData.slug : null;\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const plantSlug = router.query.slug;\n        if (plantSlug) {\n            (0,_utils_api__WEBPACK_IMPORTED_MODULE_5__.fetchSlug)(plantSlug).then((data)=>{\n                setImages(data.images || {});\n                setLoading(false);\n            }).catch((error)=>{\n                console.error(\"Error fetching images:\", error);\n                setLoading(false);\n            });\n        }\n    }, [\n        router.query.slug\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Plant Details\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: [\n                    images.leaf && images.leaf.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Leaf Images\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                showArrows: true,\n                                infiniteLoop: true,\n                                children: images.leaf.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image.image_url,\n                                            alt: \"Leaf Image \".concat(index),\n                                            style: {\n                                                maxHeight: \"300px\",\n                                                maxWidth: \"300px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 13\n                    }, undefined),\n                    images.flower && images.flower.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Flower Images\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                showArrows: true,\n                                infiniteLoop: true,\n                                children: images.flower.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image.image_url,\n                                            alt: \"Flower Image \".concat(index),\n                                            style: {\n                                                maxHeight: \"300px\",\n                                                maxWidth: \"300px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, undefined),\n                    images.bark && images.bark.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Bark Images\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                showArrows: true,\n                                infiniteLoop: true,\n                                children: images.bark.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image.image_url,\n                                            alt: \"Bark Image \".concat(index),\n                                            style: {\n                                                maxHeight: \"300px\",\n                                                maxWidth: \"300px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                            lineNumber: 143,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 13\n                    }, undefined),\n                    images.fruit && images.fruit.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Fruit Images\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                showArrows: true,\n                                infiniteLoop: true,\n                                children: images.fruit.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image.image_url,\n                                            alt: \"Fruit Image \".concat(index),\n                                            style: {\n                                                maxHeight: \"300px\",\n                                                maxWidth: \"300px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                            lineNumber: 163,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 162,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 160,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlantDetailPage, \"wN+Lzp7Kbki9cj3EAPjMH6FrSgk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PlantDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetailPage);\nvar _c;\n$RefreshReg$(_c, \"PlantDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjVCO0dBcEhNL0I7O1FBQ1dILGtEQUFTQTs7O0tBRHBCRztBQXNITiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3NsdWddL3BhZ2UudHN4PzUwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XG5pbXBvcnQgJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzJztcbmltcG9ydCB7IGZldGNoU2x1ZyB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICdyZWFjdC1pbWFnZS1nYWxsZXJ5JzsgXG5cbi8vIGNvbnN0IFBsYW50RGV0YWlsUGFnZSA9ICgpID0+IHtcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuXG4vLyAgIGNvbnN0IHBsYW50RGF0YUpzb24gPSByb3V0ZXIucXVlcnkucGxhbnREYXRhO1xuLy8gICBjb25zdCBwbGFudERhdGEgPSBwbGFudERhdGFKc29uID8gSlNPTi5wYXJzZShwbGFudERhdGFKc29uKSA6IG51bGw7XG4vLyAgIGNvbnN0IHBsYW50U2x1ZyA9IHBsYW50RGF0YSA/IHBsYW50RGF0YS5zbHVnIDogbnVsbDsgLy8gQXNzdW1pbmcgeW91IGhhdmUgYSBzbHVnIHByb3BlcnR5IGluIHBsYW50RGF0YVxuXG4vLyAgIGNvbnN0IFtwbGFudEltYWdlcywgc2V0UGxhbnRJbWFnZXNdID0gdXNlU3RhdGUoW10pOyAvLyBTdGF0ZSB0byBzdG9yZSBwbGFudCBpbWFnZXNcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGNvbnN0IHBsYW50U2x1ZyA9IHJvdXRlci5xdWVyeS5zbHVnO1xuXG4vLyAgICAgaWYgKHBsYW50U2x1Zykge1xuLy8gICAgICAgZmV0Y2hTbHVnKHBsYW50U2x1ZykudGhlbigoaW1hZ2VzKSA9PiB7XG4vLyAgICAgICAgIHNldFBsYW50SW1hZ2VzKGltYWdlcyk7XG4vLyAgICAgICB9KTtcbi8vICAgICB9XG4vLyAgIH0sIFtyb3V0ZXIucXVlcnkuc2x1Z10pO1xuXG4vLyAgIGNvbnNvbGUubG9nKHBsYW50RGF0YSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4vLyAgICAgICA8aDE+UGxhbnQgRGV0YWlsczwvaDE+XG4vLyAgICAgICB7cGxhbnREYXRhID8gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbi8vICAgICAgICAgICB7cGxhbnRJbWFnZXMgJiYgcGxhbnRJbWFnZXMubGVuZ3RoID4gMCA/IChcbi8vICAgICAgICAgICAgIDxDYXJvdXNlbCBzaG93QXJyb3dzPXt0cnVlfSBpbmZpbml0ZUxvb3A9e3RydWV9PlxuLy8gICAgICAgICAgICAgICB7cGxhbnRJbWFnZXMubWFwKChpbWFnZVVybCwgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuLy8gICAgICAgICAgICAgICAgICAgey8qIEFwcGx5IGZpeGVkIGhlaWdodCBhbmQgd2lkdGggaGVyZSAqL31cbi8vICAgICAgICAgICAgICAgICAgIDxpbWdcbi8vICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybH1cbi8vICAgICAgICAgICAgICAgICAgICAgYWx0PXtgSW1hZ2UgJHtpbmRleH1gfVxuLy8gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuLy8gICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzMwMHB4JywgLy8gQWRqdXN0IHRoZSBoZWlnaHQgYXMgbmVlZGVkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICczMDBweCcsIC8vIEFkanVzdCB0aGUgd2lkdGggYXMgbmVlZGVkXG4vLyAgICAgICAgICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4vLyAgICAgICAgICAgKSA6IChcbi8vICAgICAgICAgICAgIDxwPk5vIGltYWdlcyBhdmFpbGFibGU8L3A+XG4vLyAgICAgICAgICAgKX1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICApIDogKFxuLy8gICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuLy8gICAgICAgKX1cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFBsYW50RGV0YWlsUGFnZTtcblxuY29uc3QgUGxhbnREZXRhaWxQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBwbGFudERhdGFKc29uID0gcm91dGVyLnF1ZXJ5LnBsYW50RGF0YTtcbiAgY29uc3QgcGxhbnREYXRhID0gcGxhbnREYXRhSnNvbiA/IEpTT04ucGFyc2UocGxhbnREYXRhSnNvbikgOiBudWxsO1xuICBjb25zdCBwbGFudFNsdWcgPSBwbGFudERhdGEgPyBwbGFudERhdGEuc2x1ZyA6IG51bGw7XG5cbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwbGFudFNsdWcgPSByb3V0ZXIucXVlcnkuc2x1ZztcblxuICAgIGlmIChwbGFudFNsdWcpIHtcbiAgICAgIGZldGNoU2x1ZyhwbGFudFNsdWcpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0SW1hZ2VzKGRhdGEuaW1hZ2VzIHx8IHt9KTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGltYWdlczonLCBlcnJvcik7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3JvdXRlci5xdWVyeS5zbHVnXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICA8aDE+UGxhbnQgRGV0YWlsczwvaDE+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIHtpbWFnZXMubGVhZiAmJiBpbWFnZXMubGVhZi5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj5MZWFmIEltYWdlczwvaDI+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbCBzaG93QXJyb3dzPXt0cnVlfSBpbmZpbml0ZUxvb3A9e3RydWV9PlxuICAgICAgICAgICAgICAgIHtpbWFnZXMubGVhZi5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2UuaW1hZ2VfdXJsfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YExlYWYgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2ltYWdlcy5mbG93ZXIgJiYgaW1hZ2VzLmZsb3dlci5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj5GbG93ZXIgSW1hZ2VzPC9oMj5cbiAgICAgICAgICAgICAgPENhcm91c2VsIHNob3dBcnJvd3M9e3RydWV9IGluZmluaXRlTG9vcD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAge2ltYWdlcy5mbG93ZXIubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLmltYWdlX3VybH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BGbG93ZXIgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2ltYWdlcy5iYXJrICYmIGltYWdlcy5iYXJrLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyPkJhcmsgSW1hZ2VzPC9oMj5cbiAgICAgICAgICAgICAgPENhcm91c2VsIHNob3dBcnJvd3M9e3RydWV9IGluZmluaXRlTG9vcD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAge2ltYWdlcy5iYXJrLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZS5pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtgQmFyayBJbWFnZSAke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7aW1hZ2VzLmZydWl0ICYmIGltYWdlcy5mcnVpdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj5GcnVpdCBJbWFnZXM8L2gyPlxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwgc2hvd0Fycm93cz17dHJ1ZX0gaW5maW5pdGVMb29wPXt0cnVlfT5cbiAgICAgICAgICAgICAgICB7aW1hZ2VzLmZydWl0Lm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZS5pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtgRnJ1aXQgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFudERldGFpbFBhZ2U7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ2Fyb3VzZWwiLCJmZXRjaFNsdWciLCJQbGFudERldGFpbFBhZ2UiLCJyb3V0ZXIiLCJwbGFudERhdGFKc29uIiwicXVlcnkiLCJwbGFudERhdGEiLCJKU09OIiwicGFyc2UiLCJwbGFudFNsdWciLCJzbHVnIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJoMSIsInAiLCJjbGFzc05hbWUiLCJsZWFmIiwibGVuZ3RoIiwiaDIiLCJzaG93QXJyb3dzIiwiaW5maW5pdGVMb29wIiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImltZyIsInNyYyIsImltYWdlX3VybCIsImFsdCIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwiZmxvd2VyIiwiYmFyayIsImZydWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[slug]/page.tsx\n"));

/***/ })

});