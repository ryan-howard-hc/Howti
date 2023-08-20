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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PlantDetailPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const plantDataJson = router.query.plantData;\n    const plantData = plantDataJson ? JSON.parse(plantDataJson) : null;\n    const plantSlug = plantData ? plantData.slug : null;\n    const [leafImages, setLeafImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [flowerImages, setFlowerImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [barkImages, setBarkImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [fruitImages, setFruitImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const plantSlug = router.query.slug;\n        if (plantSlug) {\n            (0,_utils_api__WEBPACK_IMPORTED_MODULE_5__.fetchSlug)(plantSlug).then((images)=>{\n                setLeafImages(images.leaf || []);\n                setFlowerImages(images.flower || []);\n                setBarkImages(images.bark || []);\n                setFruitImages(images.fruit || []);\n            });\n        }\n    }, [\n        router.query.slug\n    ]);\n    console.log(plantData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Plant Details\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            plantData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: [\n                    leafImages.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Leaf Images\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                showArrows: true,\n                                infiniteLoop: true,\n                                children: leafImages.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: imageUrl.image_url,\n                                            alt: \"Leaf Image \".concat(index),\n                                            style: {\n                                                maxHeight: \"300px\",\n                                                maxWidth: \"300px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined),\n                    flowerImages.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Flower Images\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                showArrows: true,\n                                infiniteLoop: true,\n                                children: flowerImages.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: imageUrl.image_url,\n                                            alt: \"Flower Image \".concat(index),\n                                            style: {\n                                                maxHeight: \"300px\",\n                                                maxWidth: \"300px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined),\n                    barkImages.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Bark Images\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                showArrows: true,\n                                infiniteLoop: true,\n                                children: barkImages.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: imageUrl.image_url,\n                                            alt: \"Bark Image \".concat(index),\n                                            style: {\n                                                maxHeight: \"300px\",\n                                                maxWidth: \"300px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, undefined),\n                    fruitImages.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Fruit Images\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                showArrows: true,\n                                infiniteLoop: true,\n                                children: fruitImages.map((imageUrl, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: imageUrl.image_url,\n                                            alt: \"Fruit Image \".concat(index),\n                                            style: {\n                                                maxHeight: \"300px\",\n                                                maxWidth: \"300px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/[slug]/page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlantDetailPage, \"us9cu5syWkwerkqgcyCYKqTFa8I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PlantDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetailPage);\nvar _c;\n$RefreshReg$(_c, \"PlantDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UE1OOzs7Ozs7Ozs7Ozs7Ozs7O29CQWVqQnJCLFlBQVllLE1BQU0sR0FBRyxtQkFDcEIsOERBQUNMOzswQ0FDQyw4REFBQ007MENBQUc7Ozs7OzswQ0FDSiw4REFBQ2pDLCtEQUFRQTtnQ0FBQ2tDLFlBQVk7Z0NBQU1DLGNBQWM7MENBQ3ZDbEIsWUFBWW1CLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQyxzQkFDMUIsOERBQUNYO2tEQUNDLDRFQUFDWTs0Q0FDQ0MsS0FBS0gsU0FBU0ksU0FBUzs0Q0FDdkJDLEtBQUssZUFBcUIsT0FBTko7NENBQ3BCVixPQUFPO2dEQUNMZSxXQUFXO2dEQUNYQyxVQUFVOzRDQUNaOzs7Ozs7dUNBUE1OOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBZ0JwQiw4REFBQ087MEJBQUU7Ozs7Ozs7Ozs7OztBQUlYO0dBckhNM0M7O1FBQ1dILGtEQUFTQTs7O0tBRHBCRztBQXVITiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3NsdWddL3BhZ2UudHN4PzUwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XG5pbXBvcnQgJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzJztcbmltcG9ydCB7IGZldGNoU2x1ZyB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XG5cbmNvbnN0IFBsYW50RGV0YWlsUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgcGxhbnREYXRhSnNvbiA9IHJvdXRlci5xdWVyeS5wbGFudERhdGE7XG4gIGNvbnN0IHBsYW50RGF0YSA9IHBsYW50RGF0YUpzb24gPyBKU09OLnBhcnNlKHBsYW50RGF0YUpzb24pIDogbnVsbDtcbiAgY29uc3QgcGxhbnRTbHVnID0gcGxhbnREYXRhID8gcGxhbnREYXRhLnNsdWcgOiBudWxsO1xuXG4gIGNvbnN0IFtsZWFmSW1hZ2VzLCBzZXRMZWFmSW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Zsb3dlckltYWdlcywgc2V0Rmxvd2VySW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2JhcmtJbWFnZXMsIHNldEJhcmtJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZnJ1aXRJbWFnZXMsIHNldEZydWl0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBsYW50U2x1ZyA9IHJvdXRlci5xdWVyeS5zbHVnO1xuXG4gICAgaWYgKHBsYW50U2x1Zykge1xuICAgICAgZmV0Y2hTbHVnKHBsYW50U2x1ZykudGhlbigoaW1hZ2VzKSA9PiB7XG4gICAgICAgIHNldExlYWZJbWFnZXMoaW1hZ2VzLmxlYWYgfHwgW10pO1xuICAgICAgICBzZXRGbG93ZXJJbWFnZXMoaW1hZ2VzLmZsb3dlciB8fCBbXSk7XG4gICAgICAgIHNldEJhcmtJbWFnZXMoaW1hZ2VzLmJhcmsgfHwgW10pO1xuICAgICAgICBzZXRGcnVpdEltYWdlcyhpbWFnZXMuZnJ1aXQgfHwgW10pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcm91dGVyLnF1ZXJ5LnNsdWddKTtcblxuICBjb25zb2xlLmxvZyhwbGFudERhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgPGgxPlBsYW50IERldGFpbHM8L2gxPlxuICAgICAge3BsYW50RGF0YSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAge2xlYWZJbWFnZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+TGVhZiBJbWFnZXM8L2gyPlxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwgc2hvd0Fycm93cz17dHJ1ZX0gaW5maW5pdGVMb29wPXt0cnVlfT5cbiAgICAgICAgICAgICAgICB7bGVhZkltYWdlcy5tYXAoKGltYWdlVXJsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmwuaW1hZ2VfdXJsfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YExlYWYgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2Zsb3dlckltYWdlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj5GbG93ZXIgSW1hZ2VzPC9oMj5cbiAgICAgICAgICAgICAgPENhcm91c2VsIHNob3dBcnJvd3M9e3RydWV9IGluZmluaXRlTG9vcD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAge2Zsb3dlckltYWdlcy5tYXAoKGltYWdlVXJsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmwuaW1hZ2VfdXJsfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YEZsb3dlciBJbWFnZSAke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7YmFya0ltYWdlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj5CYXJrIEltYWdlczwvaDI+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbCBzaG93QXJyb3dzPXt0cnVlfSBpbmZpbml0ZUxvb3A9e3RydWV9PlxuICAgICAgICAgICAgICAgIHtiYXJrSW1hZ2VzLm1hcCgoaW1hZ2VVcmwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybC5pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtgQmFyayBJbWFnZSAke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7ZnJ1aXRJbWFnZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+RnJ1aXQgSW1hZ2VzPC9oMj5cbiAgICAgICAgICAgICAgPENhcm91c2VsIHNob3dBcnJvd3M9e3RydWV9IGluZmluaXRlTG9vcD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAge2ZydWl0SW1hZ2VzLm1hcCgoaW1hZ2VVcmwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybC5pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtgRnJ1aXQgSW1hZ2UgJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhbnREZXRhaWxQYWdlO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkNhcm91c2VsIiwiZmV0Y2hTbHVnIiwiUGxhbnREZXRhaWxQYWdlIiwicm91dGVyIiwicGxhbnREYXRhSnNvbiIsInF1ZXJ5IiwicGxhbnREYXRhIiwiSlNPTiIsInBhcnNlIiwicGxhbnRTbHVnIiwic2x1ZyIsImxlYWZJbWFnZXMiLCJzZXRMZWFmSW1hZ2VzIiwiZmxvd2VySW1hZ2VzIiwic2V0Rmxvd2VySW1hZ2VzIiwiYmFya0ltYWdlcyIsInNldEJhcmtJbWFnZXMiLCJmcnVpdEltYWdlcyIsInNldEZydWl0SW1hZ2VzIiwidGhlbiIsImltYWdlcyIsImxlYWYiLCJmbG93ZXIiLCJiYXJrIiwiZnJ1aXQiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJoMSIsImNsYXNzTmFtZSIsImxlbmd0aCIsImgyIiwic2hvd0Fycm93cyIsImluZmluaXRlTG9vcCIsIm1hcCIsImltYWdlVXJsIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[slug]/page.tsx\n"));

/***/ })

});