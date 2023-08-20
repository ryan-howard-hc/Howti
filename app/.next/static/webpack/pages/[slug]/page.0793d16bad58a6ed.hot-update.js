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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PlantDetailPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const plantDataJson = router.query.plantData;\n    const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;\n    const plantSlug = plantData ? plantData.slug : null;\n    const [plantImages, setPlantImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State to store plant images\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const plantSlug = router.query.slug;\n        if (plantSlug) {\n            (0,_utils_api__WEBPACK_IMPORTED_MODULE_5__.fetchSlug)(plantSlug).then((images)=>{\n                setPlantImages(images);\n            });\n        }\n    }, [\n        router.query.slug\n    ]);\n    console.log(plantData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Plant Details\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            plantData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: plantImages && plantImages.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                    showArrows: true,\n                    infiniteLoop: true,\n                    children: plantImages.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageUrl,\n                                alt: \"Image \".concat(index),\n                                style: {\n                                    maxHeight: \"300px\",\n                                    maxWidth: \"300px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 19\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No images available\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlantDetailPage, \"GZOeTdrOSWEfo1EUiJC1k+Iq9wI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PlantDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetailPage); // const PlantDetailPage = () => {\n //   const router = useRouter();\n //   const plantDataJson = router.query.plantData;\n //   const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;\n //   const plantSlug = plantData ? plantData.slug : null;\n //   const [leafImages, setLeafImages] = useState([]);\n //   const [flowerImages, setFlowerImages] = useState([]);\n //   const [barkImages, setBarkImages] = useState([]);\n //   const [fruitImages, setFruitImages] = useState([]);\n //   useEffect(() => {\n //     const plantSlug = router.query.slug;\n //     if (plantSlug) {\n //       fetchSlug(plantSlug).then((images) => {\n //         setLeafImages(images.leaf || []);\n //         setFlowerImages(images.flower || []);\n //         setBarkImages(images.bark || []);\n //         setFruitImages(images.fruit || []);\n //       });\n //     }\n //   }, [router.query.slug]);\n //   console.log(plantData);\n //   return (\n //     <div style={{ textAlign: 'center' }}>\n //       <h1>Plant Details</h1>\n //       {plantData ? (\n //         <div className=\"card\">\n //           {leafImages.length > 0 && (\n //             <div>\n //               <h2>Leaf Images</h2>\n //               <Carousel showArrows={true} infiniteLoop={true}>\n //                 {leafImages.map((imageUrl, index) => (\n //                   <div key={index}>\n //                     <img\n //                       src={imageUrl.image_url}\n //                       alt={`Leaf Image ${index}`}\n //                       style={{\n //                         maxHeight: '300px',\n //                         maxWidth: '300px',\n //                       }}\n //                     />\n //                   </div>\n //                 ))}\n //               </Carousel>\n //             </div>\n //           )}\n //           {flowerImages.length > 0 && (\n //             <div>\n //               <h2>Flower Images</h2>\n //               <Carousel showArrows={true} infiniteLoop={true}>\n //                 {flowerImages.map((imageUrl, index) => (\n //                   <div key={index}>\n //                     <img\n //                       src={imageUrl.image_url}\n //                       alt={`Flower Image ${index}`}\n //                       style={{\n //                         maxHeight: '300px',\n //                         maxWidth: '300px',\n //                       }}\n //                     />\n //                   </div>\n //                 ))}\n //               </Carousel>\n //             </div>\n //           )}\n //           {barkImages.length > 0 && (\n //             <div>\n //               <h2>Bark Images</h2>\n //               <Carousel showArrows={true} infiniteLoop={true}>\n //                 {barkImages.map((imageUrl, index) => (\n //                   <div key={index}>\n //                     <img\n //                       src={imageUrl.image_url}\n //                       alt={`Bark Image ${index}`}\n //                       style={{\n //                         maxHeight: '300px',\n //                         maxWidth: '300px',\n //                       }}\n //                     />\n //                   </div>\n //                 ))}\n //               </Carousel>\n //             </div>\n //           )}\n //           {fruitImages.length > 0 && (\n //             <div>\n //               <h2>Fruit Images</h2>\n //               <Carousel showArrows={true} infiniteLoop={true}>\n //                 {fruitImages.map((imageUrl, index) => (\n //                   <div key={index}>\n //                     <img\n //                       src={imageUrl.image_url}\n //                       alt={`Fruit Image ${index}`}\n //                       style={{\n //                         maxHeight: '300px',\n //                         maxWidth: '300px',\n //                       }}\n //                     />\n //                   </div>\n //                 ))}\n //               </Carousel>\n //             </div>\n //           )}\n //         </div>\n //       ) : (\n //         <p>Loading...</p>\n //       )}\n //     </div>\n //   );\n // };\n // export default PlantDetailPage;\nvar _c;\n$RefreshReg$(_c, \"PlantDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0NBQzVCLHFCQUFxQjtDQUNyQixlQUFlO0NBRWYsd0NBQXdDO0NBQ3hDLG9CQUFvQjtDQUNwQixxQ0FBcUM7Q0FDckMsaUVBQWlFO0NBQ2pFLHlEQUF5RDtDQUN6RCxzQ0FBc0M7Q0FDdEMsMkJBQTJCO0NBQzNCLGlEQUFpRDtDQUNqRCxvREFBb0Q7Q0FDcEQsaUNBQWlDO0NBQ2pDLDhDQUE4QztDQUM5Qyw2Q0FBNkM7Q0FDN0MsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6QiwyQkFBMkI7Q0FDM0Isc0JBQXNCO0NBQ3RCLDRCQUE0QjtDQUM1QixxQkFBcUI7Q0FDckIsZUFBZTtDQUVmLHlDQUF5QztDQUN6QyxvQkFBb0I7Q0FDcEIsc0NBQXNDO0NBQ3RDLGlFQUFpRTtDQUNqRSwwREFBMEQ7Q0FDMUQsc0NBQXNDO0NBQ3RDLDJCQUEyQjtDQUMzQixpREFBaUQ7Q0FDakQscURBQXFEO0NBQ3JELGlDQUFpQztDQUNqQyw4Q0FBOEM7Q0FDOUMsNkNBQTZDO0NBQzdDLDJCQUEyQjtDQUMzQix5QkFBeUI7Q0FDekIsMkJBQTJCO0NBQzNCLHNCQUFzQjtDQUN0Qiw0QkFBNEI7Q0FDNUIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLDRCQUE0QjtDQUM1QixXQUFXO0NBQ1gsYUFBYTtDQUNiLE9BQU87Q0FDUCxLQUFLO0NBRUwsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9bc2x1Z10vcGFnZS50c3g/NTA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcbmltcG9ydCAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3MnO1xuaW1wb3J0IHsgZmV0Y2hTbHVnIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcblxuY29uc3QgUGxhbnREZXRhaWxQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG5cbiAgY29uc3QgcGxhbnREYXRhSnNvbiA9IHJvdXRlci5xdWVyeS5wbGFudERhdGE7XG4gIGNvbnN0IHBsYW50RGF0YSA9IHBsYW50RGF0YUpzb24gPyBKU09OLnBhcnNlKHBsYW50RGF0YUpzb24pIDogbnVsbDtcbiAgY29uc3QgcGxhbnRTbHVnID0gcGxhbnREYXRhID8gcGxhbnREYXRhLnNsdWcgOiBudWxsOyBcblxuICBjb25zdCBbcGxhbnRJbWFnZXMsIHNldFBsYW50SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTsgLy8gU3RhdGUgdG8gc3RvcmUgcGxhbnQgaW1hZ2VzXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwbGFudFNsdWcgPSByb3V0ZXIucXVlcnkuc2x1ZztcblxuICAgIGlmIChwbGFudFNsdWcpIHtcbiAgICAgIGZldGNoU2x1ZyhwbGFudFNsdWcpLnRoZW4oKGltYWdlcykgPT4ge1xuICAgICAgICBzZXRQbGFudEltYWdlcyhpbWFnZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcm91dGVyLnF1ZXJ5LnNsdWddKTtcblxuICBjb25zb2xlLmxvZyhwbGFudERhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgPGgxPlBsYW50IERldGFpbHM8L2gxPlxuICAgICAge3BsYW50RGF0YSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAge3BsYW50SW1hZ2VzICYmIHBsYW50SW1hZ2VzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgc2hvd0Fycm93cz17dHJ1ZX0gaW5maW5pdGVMb29wPXt0cnVlfT5cbiAgICAgICAgICAgICAge3BsYW50SW1hZ2VzLm1hcCgoaW1hZ2VVcmwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHsvKiBBcHBseSBmaXhlZCBoZWlnaHQgYW5kIHdpZHRoIGhlcmUgKi99XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17YEltYWdlICR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMDBweCcsIC8vIEFkanVzdCB0aGUgaGVpZ2h0IGFzIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzAwcHgnLCAvLyBBZGp1c3QgdGhlIHdpZHRoIGFzIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD5ObyBpbWFnZXMgYXZhaWxhYmxlPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFudERldGFpbFBhZ2U7XG5cblxuLy8gY29uc3QgUGxhbnREZXRhaWxQYWdlID0gKCkgPT4ge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuLy8gICBjb25zdCBwbGFudERhdGFKc29uID0gcm91dGVyLnF1ZXJ5LnBsYW50RGF0YTtcbi8vICAgY29uc3QgcGxhbnREYXRhID0gcGxhbnREYXRhSnNvbiA/IEpTT04ucGFyc2UocGxhbnREYXRhSnNvbikgOiBudWxsO1xuLy8gICBjb25zdCBwbGFudFNsdWcgPSBwbGFudERhdGEgPyBwbGFudERhdGEuc2x1ZyA6IG51bGw7XG5cbi8vICAgY29uc3QgW2xlYWZJbWFnZXMsIHNldExlYWZJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuLy8gICBjb25zdCBbZmxvd2VySW1hZ2VzLCBzZXRGbG93ZXJJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuLy8gICBjb25zdCBbYmFya0ltYWdlcywgc2V0QmFya0ltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4vLyAgIGNvbnN0IFtmcnVpdEltYWdlcywgc2V0RnJ1aXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgY29uc3QgcGxhbnRTbHVnID0gcm91dGVyLnF1ZXJ5LnNsdWc7XG5cbi8vICAgICBpZiAocGxhbnRTbHVnKSB7XG4vLyAgICAgICBmZXRjaFNsdWcocGxhbnRTbHVnKS50aGVuKChpbWFnZXMpID0+IHtcbi8vICAgICAgICAgc2V0TGVhZkltYWdlcyhpbWFnZXMubGVhZiB8fCBbXSk7XG4vLyAgICAgICAgIHNldEZsb3dlckltYWdlcyhpbWFnZXMuZmxvd2VyIHx8IFtdKTtcbi8vICAgICAgICAgc2V0QmFya0ltYWdlcyhpbWFnZXMuYmFyayB8fCBbXSk7XG4vLyAgICAgICAgIHNldEZydWl0SW1hZ2VzKGltYWdlcy5mcnVpdCB8fCBbXSk7XG4vLyAgICAgICB9KTtcbi8vICAgICB9XG4vLyAgIH0sIFtyb3V0ZXIucXVlcnkuc2x1Z10pO1xuXG4vLyAgIGNvbnNvbGUubG9nKHBsYW50RGF0YSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4vLyAgICAgICA8aDE+UGxhbnQgRGV0YWlsczwvaDE+XG4vLyAgICAgICB7cGxhbnREYXRhID8gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbi8vICAgICAgICAgICB7bGVhZkltYWdlcy5sZW5ndGggPiAwICYmIChcbi8vICAgICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICAgIDxoMj5MZWFmIEltYWdlczwvaDI+XG4vLyAgICAgICAgICAgICAgIDxDYXJvdXNlbCBzaG93QXJyb3dzPXt0cnVlfSBpbmZpbml0ZUxvb3A9e3RydWV9PlxuLy8gICAgICAgICAgICAgICAgIHtsZWFmSW1hZ2VzLm1hcCgoaW1hZ2VVcmwsIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuLy8gICAgICAgICAgICAgICAgICAgICA8aW1nXG4vLyAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybC5pbWFnZV91cmx9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgTGVhZiBJbWFnZSAke2luZGV4fWB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzMwMHB4Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzAwcHgnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICl9XG5cbi8vICAgICAgICAgICB7Zmxvd2VySW1hZ2VzLmxlbmd0aCA+IDAgJiYgKFxuLy8gICAgICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgICAgPGgyPkZsb3dlciBJbWFnZXM8L2gyPlxuLy8gICAgICAgICAgICAgICA8Q2Fyb3VzZWwgc2hvd0Fycm93cz17dHJ1ZX0gaW5maW5pdGVMb29wPXt0cnVlfT5cbi8vICAgICAgICAgICAgICAgICB7Zmxvd2VySW1hZ2VzLm1hcCgoaW1hZ2VVcmwsIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuLy8gICAgICAgICAgICAgICAgICAgICA8aW1nXG4vLyAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybC5pbWFnZV91cmx9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgRmxvd2VyIEltYWdlICR7aW5kZXh9YH1cbi8vICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzAwcHgnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICczMDBweCcsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgfX1cbi8vICAgICAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgKX1cblxuLy8gICAgICAgICAgIHtiYXJrSW1hZ2VzLmxlbmd0aCA+IDAgJiYgKFxuLy8gICAgICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgICAgPGgyPkJhcmsgSW1hZ2VzPC9oMj5cbi8vICAgICAgICAgICAgICAgPENhcm91c2VsIHNob3dBcnJvd3M9e3RydWV9IGluZmluaXRlTG9vcD17dHJ1ZX0+XG4vLyAgICAgICAgICAgICAgICAge2JhcmtJbWFnZXMubWFwKChpbWFnZVVybCwgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxpbWdcbi8vICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsLmltYWdlX3VybH1cbi8vICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BCYXJrIEltYWdlICR7aW5kZXh9YH1cbi8vICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzAwcHgnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICczMDBweCcsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgfX1cbi8vICAgICAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgKX1cblxuLy8gICAgICAgICAgIHtmcnVpdEltYWdlcy5sZW5ndGggPiAwICYmIChcbi8vICAgICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICAgIDxoMj5GcnVpdCBJbWFnZXM8L2gyPlxuLy8gICAgICAgICAgICAgICA8Q2Fyb3VzZWwgc2hvd0Fycm93cz17dHJ1ZX0gaW5maW5pdGVMb29wPXt0cnVlfT5cbi8vICAgICAgICAgICAgICAgICB7ZnJ1aXRJbWFnZXMubWFwKChpbWFnZVVybCwgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxpbWdcbi8vICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsLmltYWdlX3VybH1cbi8vICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BGcnVpdCBJbWFnZSAke2luZGV4fWB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzMwMHB4Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzAwcHgnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICl9XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgKSA6IChcbi8vICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbi8vICAgICAgICl9XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBQbGFudERldGFpbFBhZ2U7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ2Fyb3VzZWwiLCJmZXRjaFNsdWciLCJQbGFudERldGFpbFBhZ2UiLCJyb3V0ZXIiLCJwbGFudERhdGFKc29uIiwicXVlcnkiLCJwbGFudERhdGEiLCJKU09OIiwicGFyc2UiLCJwbGFudFNsdWciLCJzbHVnIiwicGxhbnRJbWFnZXMiLCJzZXRQbGFudEltYWdlcyIsInRoZW4iLCJpbWFnZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJoMSIsImNsYXNzTmFtZSIsImxlbmd0aCIsInNob3dBcnJvd3MiLCJpbmZpbml0ZUxvb3AiLCJtYXAiLCJpbWFnZVVybCIsImluZGV4IiwiaW1nIiwic3JjIiwiYWx0IiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[slug]/page.tsx\n"));

/***/ })

});