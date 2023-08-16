"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/mainpage/index.js":
/*!*************************************!*\
  !*** ./src/pages/mainpage/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axios/index */ \"./src/pages/axios/index.js\");\n/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_axios_index__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Main = (param)=>{\n    let { plantData } = param;\n    console.log(\"Main Component - plantData:\", plantData);\n    if (!plantData) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    borderBottom: \"1px solid #000\",\n                    borderTop: \"1px solid #000\",\n                    padding: \"10px 0\"\n                },\n                children: \"Plant Information\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/mainpage/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        flex: \"50%\"\n                    },\n                    children: plantData.slice(0, 8).map((plant)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"card-title\",\n                                    children: plant.common_name\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/mainpage/index.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"card-text\",\n                                    children: [\n                                        \"Scientific Name: \",\n                                        plant.scientific_name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/Howti/app/src/pages/mainpage/index.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: plant.image_url,\n                                    alt: plant.common_name,\n                                    style: {\n                                        maxWidth: \"100px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/mainpage/index.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, plant.id, true, {\n                            fileName: \"/workspace/Howti/app/src/pages/mainpage/index.js\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/mainpage/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/mainpage/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/mainpage/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main); // const PlantInfo = () => {\n //   const API_KEY = 'eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI';\n //   const COMMON_NAME = 'peace lily';\n //   const [plantData, setPlantData] = useState(null);\n //   useEffect(() => {\n //     // Construct the URL for the API query\n //     const apiUrl = `https://trefle.io/api/v1/species?token=${API_KEY}&common_name=${COMMON_NAME}`;\n //     // Make the API request using Axios\n //     axios.get(apiUrl)\n //       .then(response => {\n //         setPlantData(response.data);\n //       })\n //       .catch(error => {\n //         console.error('Error fetching data:', error);\n //       });\n //   }, []);\n //   return (\n //     <div>\n //       <h1>Plant Information</h1>\n //       {plantData ? (\n //         <pre>{JSON.stringify(plantData, null, 2)}</pre>\n //       ) : (\n //         <p>Loading plant information...</p>\n //       )}\n //     </div>\n //   );\n // };\n // export default PlantInfo;\n // import React from 'react';\n // const Main = () => {\n //   return (\n //     <div className=\"flex flex-row flex-wrap justify-left items-start px-2 sm:px-0\">\n //       <div className=\"plant-card\">\n //         <a className=\"cursor-pointer\" href=\"https://greg.app/plant-care/golden-pothos\">\n //           <img\n //             src=\"https://media.greg.app/cGxhbnQtZGItcGhvdG9zL2dvbGRlbl9wb3Rob3MuanBn?format=pjpeg&amp;optimize=medium&amp;auto=webp&amp;precrop=600:600,smart&amp;fit=cover&amp;width=600&amp;height=600\"\n //             width=\"200px\"\n //             height=\"200px\"\n //             className=\"rounded-2xl\"\n //             loading=\"lazy\"\n //             alt=\"Golden Pothos\"\n //           />\n //           <h3 className=\"text-sm font-medium pt-2 pb-1 hover-underline\">Golden Pothos</h3>\n //           <p className=\"text-xs flex flex-row items-center justify-center\">\n //             <img className=\"heart-icon\" src=\"/static/web/img/heart_5.png\" alt=\"Heart Icon\" />\n //             <span className=\"font-bold ml-1.5 mr-1\">4.8</span> \n //           </p>\n //         </a>\n //       </div>\n //     </div>\n //   );\n // };\n // export default Main;\n // import React from 'react';\n // const Main = () => {\n //   const plantData = [\n //     // Add multiple plant data objects here\n //     // Each object should contain image URL, title, and rating\n //   ];\n //   return (\n //     <div className=\"flex flex-col items-center\">\n //       {[...Array(5)].map((_, index) => (\n //         <div key={index} className=\"mb-4\">\n //           <div className=\"flex flex-row justify-center\">\n //             {plantData.map((plant, plantIndex) => (\n //               <div key={plantIndex} className=\"plant-card mx-2\">\n //                 <a className=\"cursor-pointer\" href=\"https://greg.app/plant-care/golden-pothos\">\n //                   <img\n //                     src={plant.imageUrl}\n //                     width=\"200px\"\n //                     height=\"200px\"\n //                     className=\"rounded-2xl\"\n //                     loading=\"lazy\"\n //                     alt={plant.title}\n //                   />\n //                   <h3 className=\"text-sm font-medium pt-2 pb-1 hover-underline\">{plant.title}</h3>\n //                   <p className=\"text-xs flex flex-row items-center justify-center\">\n //                     <img className=\"heart-icon\" src=\"/static/web/img/heart_5.png\" alt=\"Heart Icon\" />\n //                     <span className=\"font-bold ml-1.5 mr-1\">{plant.rating}</span>\n //                   </p>\n //                 </a>\n //               </div>\n //             ))}\n //           </div>\n //         </div>\n //       ))}\n //     </div>\n //   );\n // };\n // export default Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtDQUN2QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osYUFBYTtDQUNiLE9BQU87Q0FDUCxLQUFLO0NBRUwsdUJBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9tYWlucGFnZS9pbmRleC5qcz8zMGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBQbGFudEluZm8gZnJvbSAnLi4vYXhpb3MvaW5kZXgnO1xuXG5cblxuY29uc3QgTWFpbiA9ICh7IHBsYW50RGF0YSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiTWFpbiBDb21wb25lbnQgLSBwbGFudERhdGE6XCIsIHBsYW50RGF0YSk7XG5cbiAgaWYgKCFwbGFudERhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgPGgxIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjMDAwJywgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICMwMDAnLCBwYWRkaW5nOiAnMTBweCAwJyB9fT5QbGFudCBJbmZvcm1hdGlvbjwvaDE+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogJzUwJScgfX0+XG4gICAgICAgICAge3BsYW50RGF0YS5zbGljZSgwLCA4KS5tYXAocGxhbnQgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtwbGFudC5pZH0+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3BsYW50LmNvbW1vbl9uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlNjaWVudGlmaWMgTmFtZToge3BsYW50LnNjaWVudGlmaWNfbmFtZX08L3A+XG5cblxuXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwbGFudC5pbWFnZV91cmx9IGFsdD17cGxhbnQuY29tbW9uX25hbWV9IHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwcHgnIH19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgICAgICAgICB9XG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cblxuXG4vLyBjb25zdCBQbGFudEluZm8gPSAoKSA9PiB7XG4vLyAgIGNvbnN0IEFQSV9LRVkgPSAnZVlBRlBNcllUWVJVdkxUbGU4Y05hQmp5bk5tQWVxbWNmSS1pTkRjZndNSSc7XG4vLyAgIGNvbnN0IENPTU1PTl9OQU1FID0gJ3BlYWNlIGxpbHknO1xuXG4vLyAgIGNvbnN0IFtwbGFudERhdGEsIHNldFBsYW50RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIC8vIENvbnN0cnVjdCB0aGUgVVJMIGZvciB0aGUgQVBJIHF1ZXJ5XG4vLyAgICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vdHJlZmxlLmlvL2FwaS92MS9zcGVjaWVzP3Rva2VuPSR7QVBJX0tFWX0mY29tbW9uX25hbWU9JHtDT01NT05fTkFNRX1gO1xuXG4vLyAgICAgLy8gTWFrZSB0aGUgQVBJIHJlcXVlc3QgdXNpbmcgQXhpb3Ncbi8vICAgICBheGlvcy5nZXQoYXBpVXJsKVxuLy8gICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICBzZXRQbGFudERhdGEocmVzcG9uc2UuZGF0YSk7XG4vLyAgICAgICB9KVxuLy8gICAgICAgLmNhdGNoKGVycm9yID0+IHtcbi8vICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4vLyAgICAgICB9KTtcbi8vICAgfSwgW10pO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxoMT5QbGFudCBJbmZvcm1hdGlvbjwvaDE+XG4vLyAgICAgICB7cGxhbnREYXRhID8gKFxuLy8gICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShwbGFudERhdGEsIG51bGwsIDIpfTwvcHJlPlxuLy8gICAgICAgKSA6IChcbi8vICAgICAgICAgPHA+TG9hZGluZyBwbGFudCBpbmZvcm1hdGlvbi4uLjwvcD5cbi8vICAgICAgICl9XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBQbGFudEluZm87XG5cblxuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBjb25zdCBNYWluID0gKCkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1sZWZ0IGl0ZW1zLXN0YXJ0IHB4LTIgc206cHgtMFwiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFudC1jYXJkXCI+XG4vLyAgICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgaHJlZj1cImh0dHBzOi8vZ3JlZy5hcHAvcGxhbnQtY2FyZS9nb2xkZW4tcG90aG9zXCI+XG4vLyAgICAgICAgICAgPGltZ1xuLy8gICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tZWRpYS5ncmVnLmFwcC9jR3hoYm5RdFpHSXRjR2h2ZEc5ekwyZHZiR1JsYmw5d2IzUm9iM011YW5Cbj9mb3JtYXQ9cGpwZWcmYW1wO29wdGltaXplPW1lZGl1bSZhbXA7YXV0bz13ZWJwJmFtcDtwcmVjcm9wPTYwMDo2MDAsc21hcnQmYW1wO2ZpdD1jb3ZlciZhbXA7d2lkdGg9NjAwJmFtcDtoZWlnaHQ9NjAwXCJcbi8vICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuLy8gICAgICAgICAgICAgaGVpZ2h0PVwiMjAwcHhcIlxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGxcIlxuLy8gICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuLy8gICAgICAgICAgICAgYWx0PVwiR29sZGVuIFBvdGhvc1wiXG4vLyAgICAgICAgICAgLz5cbi8vICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSBwdC0yIHBiLTEgaG92ZXItdW5kZXJsaW5lXCI+R29sZGVuIFBvdGhvczwvaDM+XG4vLyAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuLy8gICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoZWFydC1pY29uXCIgc3JjPVwiL3N0YXRpYy93ZWIvaW1nL2hlYXJ0XzUucG5nXCIgYWx0PVwiSGVhcnQgSWNvblwiIC8+XG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgbWwtMS41IG1yLTFcIj40Ljg8L3NwYW4+IFxuLy8gICAgICAgICAgIDwvcD5cbi8vICAgICAgICAgPC9hPlxuLy8gICAgICAgPC9kaXY+XG5cblxuXG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBNYWluO1xuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBjb25zdCBNYWluID0gKCkgPT4ge1xuLy8gICBjb25zdCBwbGFudERhdGEgPSBbXG4vLyAgICAgLy8gQWRkIG11bHRpcGxlIHBsYW50IGRhdGEgb2JqZWN0cyBoZXJlXG4vLyAgICAgLy8gRWFjaCBvYmplY3Qgc2hvdWxkIGNvbnRhaW4gaW1hZ2UgVVJMLCB0aXRsZSwgYW5kIHJhdGluZ1xuLy8gICBdO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuLy8gICAgICAge1suLi5BcnJheSg1KV0ubWFwKChfLCBpbmRleCkgPT4gKFxuLy8gICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1iLTRcIj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cbi8vICAgICAgICAgICAgIHtwbGFudERhdGEubWFwKChwbGFudCwgcGxhbnRJbmRleCkgPT4gKFxuLy8gICAgICAgICAgICAgICA8ZGl2IGtleT17cGxhbnRJbmRleH0gY2xhc3NOYW1lPVwicGxhbnQtY2FyZCBteC0yXCI+XG4vLyAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBocmVmPVwiaHR0cHM6Ly9ncmVnLmFwcC9wbGFudC1jYXJlL2dvbGRlbi1wb3Rob3NcIj5cbi8vICAgICAgICAgICAgICAgICAgIDxpbWdcbi8vICAgICAgICAgICAgICAgICAgICAgc3JjPXtwbGFudC5pbWFnZVVybH1cbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4vLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMHB4XCJcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGxcIlxuLy8gICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4vLyAgICAgICAgICAgICAgICAgICAgIGFsdD17cGxhbnQudGl0bGV9XG4vLyAgICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gcHQtMiBwYi0xIGhvdmVyLXVuZGVybGluZVwiPntwbGFudC50aXRsZX08L2gzPlxuLy8gICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhlYXJ0LWljb25cIiBzcmM9XCIvc3RhdGljL3dlYi9pbWcvaGVhcnRfNS5wbmdcIiBhbHQ9XCJIZWFydCBJY29uXCIgLz5cbi8vICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1sLTEuNSBtci0xXCI+e3BsYW50LnJhdGluZ308L3NwYW4+XG4vLyAgICAgICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICkpfVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuXG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiUGxhbnRJbmZvIiwiTWFpbiIsInBsYW50RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzdHlsZSIsInRleHRBbGlnbiIsImgxIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyVG9wIiwicGFkZGluZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXgiLCJzbGljZSIsIm1hcCIsInBsYW50IiwiY2xhc3NOYW1lIiwiaDMiLCJjb21tb25fbmFtZSIsInAiLCJzY2llbnRpZmljX25hbWUiLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJtYXhXaWR0aCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/mainpage/index.js\n"));

/***/ })

});