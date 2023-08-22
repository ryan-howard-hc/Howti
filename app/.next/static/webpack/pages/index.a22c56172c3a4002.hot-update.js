"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/mainpage.js":
/*!*******************************!*\
  !*** ./src/pages/mainpage.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav */ \"./src/pages/nav/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import the function from the utility file\n\n\nconst Main = ()=>{\n    _s();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [plantData, setPlantData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [flowerData, setFlowerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [foliageData, setFoliageData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [growthData, setGrowthData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // Initialize the useRouter hook\n    const handleSearch = async ()=>{\n        try {\n            await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.handleSearchClick)(searchValue, setPlantData);\n            await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.fetchFlowerData)(searchValue, setFlowerData);\n            await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.fetchFoliageData)(searchValue, setFoliageData);\n            await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.fetchGrowthData)(searchValue, setGrowthData);\n            // Fetch Wikipedia descriptions and add them to the plant data\n            const updatedPlantData = await Promise.all(Object.values(plantData).map(async (plant)=>{\n                const description = await fetchWikipediaDescription(plant.common_name);\n                return {\n                    ...plant,\n                    description\n                };\n            }));\n            setPlantData(updatedPlantData);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    console.log(\"Main Component - plantData:\", plantData);\n    const plantDataArray = Object.values(plantData);\n    if (!plantData) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    letterSpacing: \"5px\",\n                    fontSize: \"50px\",\n                    padding: \"8px 0\",\n                    fontFamily: \"JFWildWood, sans-serif\"\n                },\n                children: \"Plant Database\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    marginBottom: \"40px\",\n                    marginTop: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: \"relative\",\n                            maxWidth: \"300px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            style: {\n                                padding: \"10px 30px 10px 10px\",\n                                border: \"1px solid #ccc\",\n                                borderRadius: \"5px\",\n                                width: \"100%\",\n                                boxSizing: \"border-box\",\n                                fontFamily: \"sans-serif\",\n                                backgroundColor: \"#999\",\n                                fontWeight: \"bolder\"\n                            },\n                            type: \"text\",\n                            placeholder: \"Search for plants...\",\n                            value: searchValue,\n                            onChange: (event)=>setSearchValue(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                            lineNumber: 62,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            backgroundColor: \"#8B4510\",\n                            color: \"#fff\",\n                            borderColor: \"#8B4513\",\n                            letterSpacing: \"5px\"\n                        },\n                        className: \"btn btn-lg rounded-pill\",\n                        onClick: handleSearch,\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: plantDataArray.map((plant, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-4\",\n                            style: {\n                                marginTop: \"20px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: {\n                                    pathname: \"/[slug]/page\",\n                                    query: {\n                                        slug: plant.slug,\n                                        plantData: JSON.stringify(plant)\n                                    }\n                                },\n                                as: \"/\".concat(plant.slug, \"/page\"),\n                                passHref: true,\n                                style: {\n                                    textDecoration: \"none\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card mb-4\",\n                                    style: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        height: \"100%\",\n                                        border: \"none\",\n                                        boxShadow: \"none\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: plant.image_url,\n                                            alt: plant.common_name,\n                                            className: \"card-img-top\",\n                                            style: {\n                                                maxHeight: \"200px\",\n                                                objectFit: \"cover\",\n                                                height: \"200px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"card-body\",\n                                            style: {\n                                                display: \"flex\",\n                                                flexDirection: \"column\",\n                                                flexGrow: 1\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"card-title\",\n                                                    children: plant.common_name\n                                                }, void 0, false, {\n                                                    fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        marginTop: \"auto\"\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"card-text\",\n                                                            style: {\n                                                                margin: \"0\",\n                                                                marginBottom: \"0px\",\n                                                                fontWeight: \"bold\"\n                                                            },\n                                                            children: \"Scientific Name:\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                            lineNumber: 114,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"card-text\",\n                                                            style: {\n                                                                margin: \"0\"\n                                                            },\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                children: plant.scientific_name\n                                                            }, void 0, false, {\n                                                                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                                lineNumber: 115,\n                                                                columnNumber: 68\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                            lineNumber: 115,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"card-text\",\n                                                            style: {\n                                                                margin: \"0\",\n                                                                marginBottom: \"0px\",\n                                                                fontWeight: \"bold\"\n                                                            },\n                                                            children: \"Family:\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                            lineNumber: 116,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"card-text\",\n                                                            style: {\n                                                                margin: \"0\"\n                                                            },\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                children: plant.family\n                                                            }, void 0, false, {\n                                                                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                                lineNumber: 117,\n                                                                columnNumber: 68\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                            lineNumber: 117,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, undefined)\n                        }, plant.id, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                            lineNumber: 98,\n                            columnNumber: 9\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                    lineNumber: 96,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                lineNumber: 95,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"4y79V+0d+sNlQjsJ2ZH0CAkRE9c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7c0VBQzFGLDhEQUFDZ0M7NERBQUV0QixXQUFVOzREQUFZOUIsT0FBTztnRUFBRXFELFFBQVE7NERBQUk7c0VBQUcsNEVBQUNDOzBFQUFHL0QsTUFBTWlFLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBbkI1Q2pFLE1BQU1rRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQy9DO0dBMUhNckY7O1FBT1dSLGtEQUFTQTs7O0tBUHBCUTtBQTRITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbWFpbnBhZ2UuanM/NTAwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHsgaGFuZGxlU2VhcmNoQ2xpY2ssIGZldGNoRmxvd2VyRGF0YSwgZmV0Y2hGb2xpYWdlRGF0YSwgZmV0Y2hHcm93dGhEYXRhIH0gZnJvbSAnLi4vdXRpbHMvYXBpJzsgLy8gSW1wb3J0IHRoZSBmdW5jdGlvbiBmcm9tIHRoZSB1dGlsaXR5IGZpbGVcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXYnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwbGFudERhdGEsIHNldFBsYW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmbG93ZXJEYXRhLCBzZXRGbG93ZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZvbGlhZ2VEYXRhLCBzZXRGb2xpYWdlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtncm93dGhEYXRhLCBzZXRHcm93dGhEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyAvLyBJbml0aWFsaXplIHRoZSB1c2VSb3V0ZXIgaG9va1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgaGFuZGxlU2VhcmNoQ2xpY2soc2VhcmNoVmFsdWUsIHNldFBsYW50RGF0YSk7XG4gICAgICBhd2FpdCBmZXRjaEZsb3dlckRhdGEoc2VhcmNoVmFsdWUsIHNldEZsb3dlckRhdGEpO1xuICAgICAgYXdhaXQgZmV0Y2hGb2xpYWdlRGF0YShzZWFyY2hWYWx1ZSwgc2V0Rm9saWFnZURhdGEpO1xuICAgICAgYXdhaXQgZmV0Y2hHcm93dGhEYXRhKHNlYXJjaFZhbHVlLCBzZXRHcm93dGhEYXRhKTtcbiAgXG4gICAgICAvLyBGZXRjaCBXaWtpcGVkaWEgZGVzY3JpcHRpb25zIGFuZCBhZGQgdGhlbSB0byB0aGUgcGxhbnQgZGF0YVxuICAgICAgY29uc3QgdXBkYXRlZFBsYW50RGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBPYmplY3QudmFsdWVzKHBsYW50RGF0YSkubWFwKGFzeW5jIChwbGFudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYXdhaXQgZmV0Y2hXaWtpcGVkaWFEZXNjcmlwdGlvbihwbGFudC5jb21tb25fbmFtZSk7XG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGxhbnQsIGRlc2NyaXB0aW9uIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICBcbiAgICAgIHNldFBsYW50RGF0YSh1cGRhdGVkUGxhbnREYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnNvbGUubG9nKFwiTWFpbiBDb21wb25lbnQgLSBwbGFudERhdGE6XCIsIHBsYW50RGF0YSk7XG5cbiAgY29uc3QgcGxhbnREYXRhQXJyYXkgPSBPYmplY3QudmFsdWVzKHBsYW50RGF0YSk7XG5cbiAgaWYgKCFwbGFudERhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgIFxuICAgIDxoMVxuICAgIHN0eWxlPXt7XG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnNXB4JyxcbiAgICAgIGZvbnRTaXplOic1MHB4JyxcbiAgICAgIHBhZGRpbmc6ICc4cHggMCcsXG4gICAgICBmb250RmFtaWx5OiAnSkZXaWxkV29vZCwgc2Fucy1zZXJpZicsXG4gICAgfX1cbiAgPlxuICAgIFBsYW50IERhdGFiYXNlXG4gIDwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICc0MHB4JywgbWFyZ2luVG9wOiAnMjBweCcgfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXhXaWR0aDogJzMwMHB4JyB9fT5cbiAgICAgIDxpbnB1dFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogJzEwcHggMzBweCAxMHB4IDEwcHgnLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM5OTknLCBcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGRlcicsXG4gICAgICB9fVxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHBsYW50cy4uLlwiXG4gICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0U2VhcmNoVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gXG4gICAgLz5cblxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzhCNDUxMCcsXG4gICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyM4QjQ1MTMnLFxuICAgICAgICAgIGxldHRlclNwYWNpbmc6ICc1cHgnXG4gICAgICAgIH19XG5cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyByb3VuZGVkLXBpbGxcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9XG4gICAgICA+XG4gICAgICAgIFNlYXJjaFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIHtwbGFudERhdGFBcnJheS5tYXAoKHBsYW50LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCIga2V5PXtwbGFudC5pZH0gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcgfX0+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvW3NsdWddL3BhZ2UnLFxuICAgICAgICAgICAgICBxdWVyeTogeyBzbHVnOiBwbGFudC5zbHVnLCBwbGFudERhdGE6IEpTT04uc3RyaW5naWZ5KHBsYW50KSB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzPXtgLyR7cGxhbnQuc2x1Z30vcGFnZWB9XG4gICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi00XCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgaGVpZ2h0OiAnMTAwJScsIGJvcmRlcjogJ25vbmUnLCBib3hTaGFkb3c6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW50LmltYWdlX3VybH0gYWx0PXtwbGFudC5jb21tb25fbmFtZX0gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMjAwcHgnLCBvYmplY3RGaXQ6ICdjb3ZlcicsIGhlaWdodDogJzIwMHB4JyB9fSAvPlxuICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3BsYW50LmNvbW1vbl9uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIHN0eWxlPXt7IG1hcmdpbjogJzAnLCBtYXJnaW5Cb3R0b206ICcwcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+U2NpZW50aWZpYyBOYW1lOjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIHN0eWxlPXt7IG1hcmdpbjogJzAnIH19PjxpPntwbGFudC5zY2llbnRpZmljX25hbWV9PC9pPjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIHN0eWxlPXt7IG1hcmdpbjogJzAnLCBtYXJnaW5Cb3R0b206ICcwcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+RmFtaWx5OjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIHN0eWxlPXt7IG1hcmdpbjogJzAnIH19PjxpPntwbGFudC5mYW1pbHl9PC9pPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcbiAgXG5cbiAgPC9kaXY+XG4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXhpb3MiLCJoYW5kbGVTZWFyY2hDbGljayIsImZldGNoRmxvd2VyRGF0YSIsImZldGNoRm9saWFnZURhdGEiLCJmZXRjaEdyb3d0aERhdGEiLCJOYXZiYXIiLCJMaW5rIiwiTWFpbiIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJwbGFudERhdGEiLCJzZXRQbGFudERhdGEiLCJmbG93ZXJEYXRhIiwic2V0Rmxvd2VyRGF0YSIsImZvbGlhZ2VEYXRhIiwic2V0Rm9saWFnZURhdGEiLCJncm93dGhEYXRhIiwic2V0R3Jvd3RoRGF0YSIsInJvdXRlciIsImhhbmRsZVNlYXJjaCIsInVwZGF0ZWRQbGFudERhdGEiLCJQcm9taXNlIiwiYWxsIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicGxhbnQiLCJkZXNjcmlwdGlvbiIsImZldGNoV2lraXBlZGlhRGVzY3JpcHRpb24iLCJjb21tb25fbmFtZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInBsYW50RGF0YUFycmF5IiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJoMSIsImxldHRlclNwYWNpbmciLCJmb250U2l6ZSIsInBhZGRpbmciLCJmb250RmFtaWx5IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwicG9zaXRpb24iLCJtYXhXaWR0aCIsImlucHV0IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJib3hTaXppbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiYnV0dG9uIiwiY29sb3IiLCJib3JkZXJDb2xvciIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpbmRleCIsImhyZWYiLCJwYXRobmFtZSIsInF1ZXJ5Iiwic2x1ZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcyIsInBhc3NIcmVmIiwidGV4dERlY29yYXRpb24iLCJoZWlnaHQiLCJib3hTaGFkb3ciLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJtYXhIZWlnaHQiLCJvYmplY3RGaXQiLCJmbGV4R3JvdyIsImgzIiwicCIsIm1hcmdpbiIsImkiLCJzY2llbnRpZmljX25hbWUiLCJmYW1pbHkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/mainpage.js\n"));

/***/ })

});