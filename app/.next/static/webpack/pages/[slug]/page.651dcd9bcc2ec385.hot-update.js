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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst PlantDetailPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const plantDataJson = router.query.plantData;\n    const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;\n    console.log(plantData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Plant Details\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            plantData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: plantData.image_url,\n                        alt: plantData.common_name,\n                        className: \"card-img-top\",\n                        style: {\n                            maxHeight: \"200px\",\n                            objectFit: \"cover\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"card-title\",\n                                children: plantData.common_name\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text\",\n                                children: [\n                                    \"Family: \",\n                                    plantData.family\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined),\n                            plantData.images && plantData.images.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: plantData.images.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: imageUrl,\n                                            alt: \"Image \".concat(index)\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No images available\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlantDetailPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PlantDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetailPage);\nvar _c;\n$RefreshReg$(_c, \"PlantDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3NsdWddL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUV1QjtBQUcvRCxNQUFNQyxrQkFBa0I7O0lBQ3RCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNRyxnQkFBZ0JELE9BQU9FLEtBQUssQ0FBQ0MsU0FBUztJQUM1QyxNQUFNQSxZQUFZRixnQkFBZ0JHLEtBQUtDLEtBQUssQ0FBQ0osaUJBQWlCO0lBRTlESyxRQUFRQyxHQUFHLENBQUNKO0lBSVoscUJBQ0UsOERBQUNLO1FBQUlDLE9BQU87WUFBRUMsV0FBVztRQUFTOzswQkFDaEMsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSFIsMEJBQ0MsOERBQUNLO2dCQUFJSSxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NDLEtBQUtYLFVBQVVZLFNBQVM7d0JBQ3hCQyxLQUFLYixVQUFVYyxXQUFXO3dCQUMxQkwsV0FBVTt3QkFDVkgsT0FBTzs0QkFBRVMsV0FBVzs0QkFBU0MsV0FBVzt3QkFBUTs7Ozs7O2tDQUVsRCw4REFBQ1g7d0JBQUlJLFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FBY1QsVUFBVWMsV0FBVzs7Ozs7OzBDQUNqRCw4REFBQ0k7Z0NBQUVULFdBQVU7O29DQUFZO29DQUFTVCxVQUFVbUIsTUFBTTs7Ozs7Ozs0QkFFakRuQixVQUFVb0IsTUFBTSxJQUFJcEIsVUFBVW9CLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLGtCQUM3Qyw4REFBQ2hCOzBDQUNBTCxVQUFVb0IsTUFBTSxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsVUFBVUMsc0JBQzdCLDhEQUFDbkI7a0RBQ0MsNEVBQUNLOzRDQUFJQyxLQUFLWTs0Q0FBVVYsS0FBSyxTQUFlLE9BQU5XOzs7Ozs7dUNBRDFCQTs7Ozs7Ozs7OzBEQU9kLDhEQUFDTjswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBTVQsOERBQUNBOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFJWDtHQTdDTXRCOztRQUNXRCxrREFBU0E7OztLQURwQkM7QUErQ04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tzbHVnXS9wYWdlLnRzeD81MDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XG5pbXBvcnQgJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzJztcbmltcG9ydCB7IGhhbmRsZVNlYXJjaENsaWNrLCBmZXRjaEZsb3dlckRhdGEsIGZldGNoRm9saWFnZURhdGEsIGZldGNoR3Jvd3RoRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBQbGFudERldGFpbFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHBsYW50RGF0YUpzb24gPSByb3V0ZXIucXVlcnkucGxhbnREYXRhO1xuICBjb25zdCBwbGFudERhdGEgPSBwbGFudERhdGFKc29uID8gSlNPTi5wYXJzZShwbGFudERhdGFKc29uKSA6IG51bGw7XG5cbiAgY29uc29sZS5sb2cocGxhbnREYXRhKTtcbiAgXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgIDxoMT5QbGFudCBEZXRhaWxzPC9oMT5cbiAgICAgIHtwbGFudERhdGEgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17cGxhbnREYXRhLmltYWdlX3VybH1cbiAgICAgICAgICAgIGFsdD17cGxhbnREYXRhLmNvbW1vbl9uYW1lfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogJzIwMHB4Jywgb2JqZWN0Rml0OiAnY292ZXInIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cGxhbnREYXRhLmNvbW1vbl9uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5GYW1pbHk6IHtwbGFudERhdGEuZmFtaWx5fTwvcD5cblxuICAgICAgICAgICAge3BsYW50RGF0YS5pbWFnZXMgJiYgcGxhbnREYXRhLmltYWdlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7cGxhbnREYXRhLmltYWdlcy5tYXAoKGltYWdlVXJsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9e2BJbWFnZSAke2luZGV4fWB9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwPk5vIGltYWdlcyBhdmFpbGFibGU8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIEFkZCBtb3JlIGRldGFpbHMgYXMgbmVlZGVkICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbnREZXRhaWxQYWdlOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJQbGFudERldGFpbFBhZ2UiLCJyb3V0ZXIiLCJwbGFudERhdGFKc29uIiwicXVlcnkiLCJwbGFudERhdGEiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJoMSIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlX3VybCIsImFsdCIsImNvbW1vbl9uYW1lIiwibWF4SGVpZ2h0Iiwib2JqZWN0Rml0IiwiaDMiLCJwIiwiZmFtaWx5IiwiaW1hZ2VzIiwibGVuZ3RoIiwibWFwIiwiaW1hZ2VVcmwiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[slug]/page.tsx\n"));

/***/ })

});