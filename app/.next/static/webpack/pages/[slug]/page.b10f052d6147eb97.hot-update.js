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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PlantDetailPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const plantDataJson = router.query.plantData;\n    const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;\n    const plantSlug = plantData ? plantData.slug : null;\n    const [leafImages, setLeafImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [flowerImages, setFlowerImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [barkImages, setBarkImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [commonNames, setCommonNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [wikipediaDescription, setWikipediaDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const plantSlug = router.query.slug;\n        if (plantSlug) {\n            (0,_utils_api__WEBPACK_IMPORTED_MODULE_5__.fetchSlug)(plantSlug).then((data)=>{\n                setLeafImages(data.images.leaf || []);\n                setFlowerImages(data.images.flower || []);\n                setBarkImages(data.images.bark || []);\n                setCommonNames(data.common_names.eng || []);\n                const commonName = data.common_names.eng[0]; // Assuming the common name is the first one in the list\n                (0,_utils_api__WEBPACK_IMPORTED_MODULE_5__.fetchWikipediaDescription)(commonName).then((description)=>{\n                    setWikipediaDescription(description);\n                });\n            });\n        }\n    }, [\n        router.query.slug\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Plant Details\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            plantData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Common Names\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                style: {\n                                    listStyleType: \"none\"\n                                },\n                                children: [\n                                    \" \",\n                                    commonNames.map((name, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: name\n                                        }, index, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, undefined))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Wikipedia Description\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined),\n                            wikipediaDescription.split(\"\\n\\n\").map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: paragraph\n                                }, index, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"space-between\"\n                        },\n                        children: [\n                            leafImages.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Leaf Images\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                        showArrows: true,\n                                        infiniteLoop: true,\n                                        children: leafImages.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: imageUrl,\n                                                    alt: \"Leaf Image \".concat(index),\n                                                    style: {\n                                                        maxHeight: \"500px\",\n                                                        maxWidth: \"300px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, index, false, {\n                                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 21\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined),\n                            flowerImages.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Flower Images\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                        showArrows: true,\n                                        infiniteLoop: true,\n                                        children: flowerImages.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: imageUrl,\n                                                    alt: \"Flower Image \".concat(index),\n                                                    style: {\n                                                        maxHeight: \"300px\",\n                                                        maxWidth: \"300px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, index, false, {\n                                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 21\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, undefined),\n                            barkImages.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Bark Images\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                        showArrows: true,\n                                        infiniteLoop: true,\n                                        children: barkImages.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: imageUrl,\n                                                    alt: \"Bark Image \".concat(index),\n                                                    style: {\n                                                        maxHeight: \"300px\",\n                                                        maxWidth: \"300px\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, index, false, {\n                                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 21\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlantDetailPage, \"8xWZQywfvUgY/QomG4x7bHatJ+0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PlantDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetailPage);\nvar _c;\n$RefreshReg$(_c, \"PlantDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQiw4REFBQ2pCOztrREFDQyw4REFBQ0s7a0RBQUc7Ozs7OztrREFDSiw4REFBQ3JDLCtEQUFRQTt3Q0FBQ2tELFlBQVk7d0NBQU1DLGNBQWM7a0RBQ3ZDckMsYUFBYTBCLEdBQUcsQ0FBQyxDQUFDWSxVQUFVVixzQkFDM0IsOERBQUNWOzBEQUNDLDRFQUFDcUI7b0RBQ0NDLEtBQUtGO29EQUNMRyxLQUFLLGdCQUFzQixPQUFOYjtvREFDckJULE9BQU87d0RBQ0x1QixXQUFXO3dEQUNYQyxVQUFVO29EQUNaOzs7Ozs7K0NBUE1mOzs7Ozs7Ozs7Ozs7Ozs7OzRCQWdCakIxQixXQUFXaUMsTUFBTSxHQUFHLG1CQUNuQiw4REFBQ2pCOztrREFDQyw4REFBQ0s7a0RBQUc7Ozs7OztrREFDSiw4REFBQ3JDLCtEQUFRQTt3Q0FBQ2tELFlBQVk7d0NBQU1DLGNBQWM7a0RBQ3ZDbkMsV0FBV3dCLEdBQUcsQ0FBQyxDQUFDWSxVQUFVVixzQkFDekIsOERBQUNWOzBEQUNDLDRFQUFDcUI7b0RBQ0NDLEtBQUtGO29EQUNMRyxLQUFLLGNBQW9CLE9BQU5iO29EQUNuQlQsT0FBTzt3REFDTHVCLFdBQVc7d0RBQ1hDLFVBQVU7b0RBQ1o7Ozs7OzsrQ0FQTWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FpQnRCLDhEQUFDSTswQkFBRTs7Ozs7Ozs7Ozs7O0FBSVg7R0F6SE0zQzs7UUFDV0osa0RBQVNBOzs7S0FEcEJJO0FBMkhOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9bc2x1Z10vcGFnZS50c3g/NTA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcbmltcG9ydCAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3MnO1xuaW1wb3J0IHsgZmV0Y2hTbHVnLCBmZXRjaFdpa2lwZWRpYURlc2NyaXB0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBjaGVlcmlvIGZyb20gJ2NoZWVyaW8nO1xuXG5jb25zdCBQbGFudERldGFpbFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHBsYW50RGF0YUpzb24gPSByb3V0ZXIucXVlcnkucGxhbnREYXRhO1xuICBjb25zdCBwbGFudERhdGEgPSBwbGFudERhdGFKc29uID8gSlNPTi5wYXJzZShwbGFudERhdGFKc29uKSA6IG51bGw7XG4gIGNvbnN0IHBsYW50U2x1ZyA9IHBsYW50RGF0YSA/IHBsYW50RGF0YS5zbHVnIDogbnVsbDtcblxuICBjb25zdCBbbGVhZkltYWdlcywgc2V0TGVhZkltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmbG93ZXJJbWFnZXMsIHNldEZsb3dlckltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtiYXJrSW1hZ2VzLCBzZXRCYXJrSW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NvbW1vbk5hbWVzLCBzZXRDb21tb25OYW1lc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3aWtpcGVkaWFEZXNjcmlwdGlvbiwgc2V0V2lraXBlZGlhRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGxhbnRTbHVnID0gcm91dGVyLnF1ZXJ5LnNsdWc7XG5cbiAgICBpZiAocGxhbnRTbHVnKSB7XG4gICAgICBmZXRjaFNsdWcocGxhbnRTbHVnKS50aGVuKChkYXRhKSA9PiB7XG5cbiAgICAgICAgc2V0TGVhZkltYWdlcyhkYXRhLmltYWdlcy5sZWFmIHx8IFtdKTtcbiAgICAgICAgc2V0Rmxvd2VySW1hZ2VzKGRhdGEuaW1hZ2VzLmZsb3dlciB8fCBbXSk7XG4gICAgICAgIHNldEJhcmtJbWFnZXMoZGF0YS5pbWFnZXMuYmFyayB8fCBbXSk7XG5cbiAgICAgICAgc2V0Q29tbW9uTmFtZXMoZGF0YS5jb21tb25fbmFtZXMuZW5nIHx8IFtdKTtcbiAgICAgICAgY29uc3QgY29tbW9uTmFtZSA9IGRhdGEuY29tbW9uX25hbWVzLmVuZ1swXTsgLy8gQXNzdW1pbmcgdGhlIGNvbW1vbiBuYW1lIGlzIHRoZSBmaXJzdCBvbmUgaW4gdGhlIGxpc3RcbiAgICAgICAgZmV0Y2hXaWtpcGVkaWFEZXNjcmlwdGlvbihjb21tb25OYW1lKS50aGVuKChkZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgIHNldFdpa2lwZWRpYURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIucXVlcnkuc2x1Z10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgPGgxPlBsYW50IERldGFpbHM8L2gxPlxuICAgICAge3BsYW50RGF0YSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsvKiBDb21tb24gTmFtZXMgKi99XG4gICAgICAgICAgICA8aDI+Q29tbW9uIE5hbWVzPC9oMj5cbiAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiAnbm9uZScgfX0+IHsvKiBBcHBseSBDU1MgdG8gcmVtb3ZlIGJ1bGxldCBwb2ludHMgKi99XG4gICAgICAgICAgICAgIHtjb21tb25OYW1lcy5tYXAoKG5hbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntuYW1lfTwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIHsvKiBXaWtpcGVkaWEgRGVzY3JpcHRpb24gKi99XG4gICAgICAgICAgICA8aDI+V2lraXBlZGlhIERlc2NyaXB0aW9uPC9oMj5cbiAgICAgICAgICAgIHt3aWtpcGVkaWFEZXNjcmlwdGlvbi5zcGxpdCgnXFxuXFxuJykubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9PntwYXJhZ3JhcGh9PC9wPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XG5cbiAgICAgICAgICAgIHsvKiBMZWFmIENhcm91c2VsICovfVxuICAgICAgICAgICAge2xlYWZJbWFnZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkxlYWYgSW1hZ2VzPC9oMj5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgc2hvd0Fycm93cz17dHJ1ZX0gaW5maW5pdGVMb29wPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgIHtsZWFmSW1hZ2VzLm1hcCgoaW1hZ2VVcmwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YExlYWYgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnNTAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtmbG93ZXJJbWFnZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkZsb3dlciBJbWFnZXM8L2gyPlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBzaG93QXJyb3dzPXt0cnVlfSBpbmZpbml0ZUxvb3A9e3RydWV9PlxuICAgICAgICAgICAgICAgICAge2Zsb3dlckltYWdlcy5tYXAoKGltYWdlVXJsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BGbG93ZXIgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKiBCYXJrIENhcm91c2VsICovfVxuICAgICAgICAgICAge2JhcmtJbWFnZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkJhcmsgSW1hZ2VzPC9oMj5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgc2hvd0Fycm93cz17dHJ1ZX0gaW5maW5pdGVMb29wPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgIHtiYXJrSW1hZ2VzLm1hcCgoaW1hZ2VVcmwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YEJhcmsgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFudERldGFpbFBhZ2U7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ2Fyb3VzZWwiLCJmZXRjaFNsdWciLCJmZXRjaFdpa2lwZWRpYURlc2NyaXB0aW9uIiwiUGxhbnREZXRhaWxQYWdlIiwicm91dGVyIiwicGxhbnREYXRhSnNvbiIsInF1ZXJ5IiwicGxhbnREYXRhIiwiSlNPTiIsInBhcnNlIiwicGxhbnRTbHVnIiwic2x1ZyIsImxlYWZJbWFnZXMiLCJzZXRMZWFmSW1hZ2VzIiwiZmxvd2VySW1hZ2VzIiwic2V0Rmxvd2VySW1hZ2VzIiwiYmFya0ltYWdlcyIsInNldEJhcmtJbWFnZXMiLCJjb21tb25OYW1lcyIsInNldENvbW1vbk5hbWVzIiwid2lraXBlZGlhRGVzY3JpcHRpb24iLCJzZXRXaWtpcGVkaWFEZXNjcmlwdGlvbiIsInRoZW4iLCJkYXRhIiwiaW1hZ2VzIiwibGVhZiIsImZsb3dlciIsImJhcmsiLCJjb21tb25fbmFtZXMiLCJlbmciLCJjb21tb25OYW1lIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJzdHlsZSIsInRleHRBbGlnbiIsImgxIiwiY2xhc3NOYW1lIiwiaDIiLCJ1bCIsImxpc3RTdHlsZVR5cGUiLCJtYXAiLCJuYW1lIiwiaW5kZXgiLCJsaSIsInNwbGl0IiwicGFyYWdyYXBoIiwicCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImxlbmd0aCIsInNob3dBcnJvd3MiLCJpbmZpbml0ZUxvb3AiLCJpbWFnZVVybCIsImltZyIsInNyYyIsImFsdCIsIm1heEhlaWdodCIsIm1heFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[slug]/page.tsx\n"));

/***/ })

});