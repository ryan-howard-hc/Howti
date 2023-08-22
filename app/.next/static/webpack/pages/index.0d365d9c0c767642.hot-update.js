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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav */ \"./src/pages/nav/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import the function from the utility file\n\n\nconst Main = ()=>{\n    _s();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [plantData, setPlantData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [flowerData, setFlowerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [foliageData, setFoliageData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [growthData, setGrowthData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // Initialize the useRouter hook\n    const handleSearch = async ()=>{\n        try {\n            await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.handleSearchClick)(searchValue, setPlantData);\n            await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.fetchFlowerData)(searchValue, setFlowerData);\n            await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.fetchFoliageData)(searchValue, setFoliageData);\n            await (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.fetchGrowthData)(searchValue, setGrowthData);\n            // Fetch Wikipedia descriptions and add them to the plant data\n            const updatedPlantData = await Promise.all(Object.values(plantData).map(async (plant)=>{\n                const description = await fetchWikipediaDescription(plant.common_name);\n                return {\n                    ...plant,\n                    description\n                };\n            }));\n            setPlantData(updatedPlantData);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    console.log(\"Main Component - plantData:\", plantData);\n    const plantDataArray = Object.values(plantData);\n    if (!plantData) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    letterSpacing: \"5px\",\n                    fontSize: \"80px\",\n                    padding: \"8px 0\",\n                    fontFamily: \"JFWildWood, sans-serif\",\n                    borderBottom: \"1px solid #000\",\n                    borderTop: \"1px solid #000\"\n                },\n                children: \"Plant Database\"\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    marginBottom: \"40px\",\n                    marginTop: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: \"relative\",\n                            maxWidth: \"300px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            style: {\n                                padding: \"10px 30px 10px 10px\",\n                                border: \"1px solid #ccc\",\n                                borderRadius: \"5px\",\n                                width: \"100%\",\n                                boxSizing: \"border-box\",\n                                fontFamily: \"sans-serif\",\n                                backgroundColor: \"#DEDEDE\",\n                                fontWeight: \"bolder\"\n                            },\n                            className: \"btn btn-primary btn-lg rounded-pill\",\n                            type: \"text\",\n                            placeholder: \"Search for plants...\",\n                            value: searchValue,\n                            onChange: (event)=>setSearchValue(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                            lineNumber: 64,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            backgroundColor: \"#8B4510\",\n                            color: \"#fff\",\n                            borderColor: \"#8B4513\",\n                            letterSpacing: \"5px\",\n                            fontFamily: \"ClimbingPlant\",\n                            marginTop: \"10px\",\n                            fontWeight: \"bold\",\n                            fontSize: \"25px\"\n                        },\n                        className: \"btn btn-lg rounded-pill\",\n                        onClick: handleSearch,\n                        onMouseEnter: (event)=>event.target.style.backgroundColor = \"#753a08\",\n                        onMouseLeave: (event)=>event.target.style.backgroundColor = \"#8B4510\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                        lineNumber: 84,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: plantDataArray.map((plant, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-4\",\n                            style: {\n                                marginTop: \"20px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: {\n                                    pathname: \"/[slug]/page\",\n                                    query: {\n                                        slug: plant.slug,\n                                        plantData: JSON.stringify(plant)\n                                    }\n                                },\n                                as: \"/\".concat(plant.slug, \"/page\"),\n                                passHref: true,\n                                style: {\n                                    textDecoration: \"none\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card mb-4\",\n                                    style: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        height: \"100%\",\n                                        border: \"none\",\n                                        boxShadow: \"none\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: plant.image_url,\n                                            alt: plant.common_name,\n                                            className: \"card-img-top\",\n                                            style: {\n                                                maxHeight: \"200px\",\n                                                objectFit: \"cover\",\n                                                height: \"200px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                            lineNumber: 119,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"card-body\",\n                                            style: {\n                                                display: \"flex\",\n                                                flexDirection: \"column\",\n                                                flexGrow: 1\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"card-title\",\n                                                    children: plant.common_name\n                                                }, void 0, false, {\n                                                    fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                    lineNumber: 122,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    style: {\n                                                        marginTop: \"auto\"\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"card-text\",\n                                                            style: {\n                                                                margin: \"0\",\n                                                                marginBottom: \"0px\",\n                                                                fontWeight: \"bold\"\n                                                            },\n                                                            children: \"Scientific Name:\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                            lineNumber: 124,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"card-text\",\n                                                            style: {\n                                                                margin: \"0\"\n                                                            },\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                children: plant.scientific_name\n                                                            }, void 0, false, {\n                                                                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                                lineNumber: 125,\n                                                                columnNumber: 68\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                            lineNumber: 125,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"card-text\",\n                                                            style: {\n                                                                margin: \"0\",\n                                                                marginBottom: \"0px\",\n                                                                fontWeight: \"bold\"\n                                                            },\n                                                            children: \"Family:\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                            lineNumber: 126,\n                                                            columnNumber: 19\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"card-text\",\n                                                            style: {\n                                                                margin: \"0\"\n                                                            },\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                children: plant.family\n                                                            }, void 0, false, {\n                                                                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                                lineNumber: 127,\n                                                                columnNumber: 68\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                            lineNumber: 127,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                                    lineNumber: 123,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                            lineNumber: 121,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, undefined)\n                        }, plant.id, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                            lineNumber: 108,\n                            columnNumber: 9\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                    lineNumber: 106,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n                lineNumber: 105,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/mainpage.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"4y79V+0d+sNlQjsJ2ZH0CAkRE9c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZOzREQUFPO3NFQUFHOzs7Ozs7c0VBQzFGLDhEQUFDa0M7NERBQUVqQyxXQUFVOzREQUFZdkIsT0FBTztnRUFBRXlELFFBQVE7NERBQUk7c0VBQUcsNEVBQUNDOzBFQUFHbkUsTUFBTW9FLGVBQWU7Ozs7Ozs7Ozs7O3NFQUMxRSw4REFBQ0g7NERBQUVqQyxXQUFVOzREQUFZdkIsT0FBTztnRUFBRXlELFFBQVE7Z0VBQUs3QyxjQUFjO2dFQUFPVSxZQUFZOzREQUFPO3NFQUFHOzs7Ozs7c0VBQzFGLDhEQUFDa0M7NERBQUVqQyxXQUFVOzREQUFZdkIsT0FBTztnRUFBRXlELFFBQVE7NERBQUk7c0VBQUcsNEVBQUNDOzBFQUFHbkUsTUFBTXFFLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBbkI1Q3JFLE1BQU1zRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQy9DO0dBcElNekY7O1FBT1dSLGtEQUFTQTs7O0tBUHBCUTtBQXNJTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbWFpbnBhZ2UuanM/NTAwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHsgaGFuZGxlU2VhcmNoQ2xpY2ssIGZldGNoRmxvd2VyRGF0YSwgZmV0Y2hGb2xpYWdlRGF0YSwgZmV0Y2hHcm93dGhEYXRhIH0gZnJvbSAnLi4vdXRpbHMvYXBpJzsgLy8gSW1wb3J0IHRoZSBmdW5jdGlvbiBmcm9tIHRoZSB1dGlsaXR5IGZpbGVcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXYnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwbGFudERhdGEsIHNldFBsYW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmbG93ZXJEYXRhLCBzZXRGbG93ZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZvbGlhZ2VEYXRhLCBzZXRGb2xpYWdlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtncm93dGhEYXRhLCBzZXRHcm93dGhEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyAvLyBJbml0aWFsaXplIHRoZSB1c2VSb3V0ZXIgaG9va1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgaGFuZGxlU2VhcmNoQ2xpY2soc2VhcmNoVmFsdWUsIHNldFBsYW50RGF0YSk7XG4gICAgICBhd2FpdCBmZXRjaEZsb3dlckRhdGEoc2VhcmNoVmFsdWUsIHNldEZsb3dlckRhdGEpO1xuICAgICAgYXdhaXQgZmV0Y2hGb2xpYWdlRGF0YShzZWFyY2hWYWx1ZSwgc2V0Rm9saWFnZURhdGEpO1xuICAgICAgYXdhaXQgZmV0Y2hHcm93dGhEYXRhKHNlYXJjaFZhbHVlLCBzZXRHcm93dGhEYXRhKTtcbiAgXG4gICAgICAvLyBGZXRjaCBXaWtpcGVkaWEgZGVzY3JpcHRpb25zIGFuZCBhZGQgdGhlbSB0byB0aGUgcGxhbnQgZGF0YVxuICAgICAgY29uc3QgdXBkYXRlZFBsYW50RGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBPYmplY3QudmFsdWVzKHBsYW50RGF0YSkubWFwKGFzeW5jIChwbGFudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYXdhaXQgZmV0Y2hXaWtpcGVkaWFEZXNjcmlwdGlvbihwbGFudC5jb21tb25fbmFtZSk7XG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGxhbnQsIGRlc2NyaXB0aW9uIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICBcbiAgICAgIHNldFBsYW50RGF0YSh1cGRhdGVkUGxhbnREYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnNvbGUubG9nKFwiTWFpbiBDb21wb25lbnQgLSBwbGFudERhdGE6XCIsIHBsYW50RGF0YSk7XG5cbiAgY29uc3QgcGxhbnREYXRhQXJyYXkgPSBPYmplY3QudmFsdWVzKHBsYW50RGF0YSk7XG5cbiAgaWYgKCFwbGFudERhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgIFxuICAgIDxoMVxuICAgIHN0eWxlPXt7XG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnODBweCcsXG4gICAgICBwYWRkaW5nOiAnOHB4IDAnLFxuICAgICAgZm9udEZhbWlseTogJ0pGV2lsZFdvb2QsIHNhbnMtc2VyaWYnLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICMwMDAnLFxuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICMwMDAnLFxuICAgIH19XG4gID5cbiAgICBQbGFudCBEYXRhYmFzZVxuICA8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnNDBweCcsIG1hcmdpblRvcDogJzIwcHgnIH19PlxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWF4V2lkdGg6ICczMDBweCcgfX0+XG4gICAgICA8aW5wdXRcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDMwcHggMTBweCAxMHB4JyxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjREVERURFJywgXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInLFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGcgcm91bmRlZC1waWxsXCJcblxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHBsYW50cy4uLlwiXG4gICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0U2VhcmNoVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gXG4gICAgLz5cblxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzhCNDUxMCcsXG4gICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyM4QjQ1MTMnLFxuICAgICAgICAgIGxldHRlclNwYWNpbmc6ICc1cHgnLFxuICAgICAgICAgIGZvbnRGYW1pbHk6ICdDbGltYmluZ1BsYW50JyxcbiAgICAgICAgICBtYXJnaW5Ub3A6JzEwcHgnLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICBmb250U2l6ZTogJzI1cHgnXG4gICAgICAgIH19XG5cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyByb3VuZGVkLXBpbGxcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgIG9uTW91c2VFbnRlcj17ZXZlbnQgPT4gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNzUzYTA4J30gLy8gRGFya2VyIGNvbG9yIG9uIGVudGVyXG4gIG9uTW91c2VMZWF2ZT17ZXZlbnQgPT4gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOEI0NTEwJ30gLy8gT3JpZ2luYWwgY29sb3Igb24gbGVhdmVcbiAgICAgID5cbiAgICAgICAgU2VhcmNoXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAge3BsYW50RGF0YUFycmF5Lm1hcCgocGxhbnQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIiBrZXk9e3BsYW50LmlkfSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICBwYXRobmFtZTogJy9bc2x1Z10vcGFnZScsXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IHNsdWc6IHBsYW50LnNsdWcsIHBsYW50RGF0YTogSlNPTi5zdHJpbmdpZnkocGxhbnQpIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXM9e2AvJHtwbGFudC5zbHVnfS9wYWdlYH1cbiAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTRcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBoZWlnaHQ6ICcxMDAlJywgYm9yZGVyOiAnbm9uZScsIGJveFNoYWRvdzogJ25vbmUnIH19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17cGxhbnQuaW1hZ2VfdXJsfSBhbHQ9e3BsYW50LmNvbW1vbl9uYW1lfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzdHlsZT17eyBtYXhIZWlnaHQ6ICcyMDBweCcsIG9iamVjdEZpdDogJ2NvdmVyJywgaGVpZ2h0OiAnMjAwcHgnIH19IC8+XG4gICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cGxhbnQuY29tbW9uX25hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIgc3R5bGU9e3sgbWFyZ2luOiAnMCcsIG1hcmdpbkJvdHRvbTogJzBweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5TY2llbnRpZmljIE5hbWU6PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIgc3R5bGU9e3sgbWFyZ2luOiAnMCcgfX0+PGk+e3BsYW50LnNjaWVudGlmaWNfbmFtZX08L2k+PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIgc3R5bGU9e3sgbWFyZ2luOiAnMCcsIG1hcmdpbkJvdHRvbTogJzBweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5GYW1pbHk6PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIgc3R5bGU9e3sgbWFyZ2luOiAnMCcgfX0+PGk+e3BsYW50LmZhbWlseX08L2k+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIFxuICBcblxuICA8L2Rpdj5cbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsImhhbmRsZVNlYXJjaENsaWNrIiwiZmV0Y2hGbG93ZXJEYXRhIiwiZmV0Y2hGb2xpYWdlRGF0YSIsImZldGNoR3Jvd3RoRGF0YSIsIk5hdmJhciIsIkxpbmsiLCJNYWluIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInBsYW50RGF0YSIsInNldFBsYW50RGF0YSIsImZsb3dlckRhdGEiLCJzZXRGbG93ZXJEYXRhIiwiZm9saWFnZURhdGEiLCJzZXRGb2xpYWdlRGF0YSIsImdyb3d0aERhdGEiLCJzZXRHcm93dGhEYXRhIiwicm91dGVyIiwiaGFuZGxlU2VhcmNoIiwidXBkYXRlZFBsYW50RGF0YSIsIlByb21pc2UiLCJhbGwiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwbGFudCIsImRlc2NyaXB0aW9uIiwiZmV0Y2hXaWtpcGVkaWFEZXNjcmlwdGlvbiIsImNvbW1vbl9uYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicGxhbnREYXRhQXJyYXkiLCJkaXYiLCJzdHlsZSIsInRleHRBbGlnbiIsImgxIiwibGV0dGVyU3BhY2luZyIsImZvbnRTaXplIiwicGFkZGluZyIsImZvbnRGYW1pbHkiLCJib3JkZXJCb3R0b20iLCJib3JkZXJUb3AiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJwb3NpdGlvbiIsIm1heFdpZHRoIiwiaW5wdXQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImJveFNpemluZyIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJidXR0b24iLCJjb2xvciIsImJvcmRlckNvbG9yIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImluZGV4IiwiaHJlZiIsInBhdGhuYW1lIiwicXVlcnkiLCJzbHVnIiwiSlNPTiIsInN0cmluZ2lmeSIsImFzIiwicGFzc0hyZWYiLCJ0ZXh0RGVjb3JhdGlvbiIsImhlaWdodCIsImJveFNoYWRvdyIsImltZyIsInNyYyIsImltYWdlX3VybCIsImFsdCIsIm1heEhlaWdodCIsIm9iamVjdEZpdCIsImZsZXhHcm93IiwiaDMiLCJwIiwibWFyZ2luIiwiaSIsInNjaWVudGlmaWNfbmFtZSIsImZhbWlseSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/mainpage.js\n"));

/***/ })

});