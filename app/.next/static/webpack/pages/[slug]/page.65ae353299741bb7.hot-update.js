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

/***/ "./src/pages/nav/index.js":
/*!********************************!*\
  !*** ./src/pages/nav/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n\n\n\n\n\n// Add a hover effect by changing the link color on hover\n// linkStyle[':hover'] = {\n//   color: '#FF5733', // Change to the color you want on hover\n// };\nconst Navbar = ()=>{\n    const navbarStyle = {\n        backgroundColor: \" #FFFFFF\",\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        height: \"60px\",\n        borderBottom: \"3px solid #E0E0E0\",\n        padding: \"0 20px\"\n    };\n    const titular = {\n        fontSize: \"28px\",\n        fontWeight: \"bold\",\n        display: \"flex\",\n        alignItems: \"center\",\n        marginLeft: \"300px\",\n        letterSpacing: \"5px\",\n        fontFamily: \"ClimbingPlant\"\n    };\n    const linkContainerStyle = {\n        display: \"flex\",\n        listStyleType: \"none\",\n        margin: 0,\n        marginRight: \"300px\",\n        fontFamily: \"KitchyRetro\"\n    };\n    const linkStyle = {\n        color: \"black\",\n        fontWeight: \"bolder\",\n        fontfamily: \"KitschyRetro\",\n        letterSpacing: \"1px\",\n        textDecoration: \"none\",\n        fontSize: \"25px\",\n        margin: \"0 10px\",\n        transition: \"color 0.3s ease\",\n        wordSpacing: \"10px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"howticulture-nav-title\",\n                style: titular,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/favicon.ico\",\n                        style: {\n                            width: \"30px\",\n                            height: \"30px\",\n                            marginRight: \"10px\"\n                        },\n                        alt: \"Icon\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Howticulture\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"Kitch\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: linkContainerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                style: linkStyle,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 34\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: linkStyle,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 34\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                style: linkStyle,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 34\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/community\",\n                                style: linkStyle,\n                                children: \"Community\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 34\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmF2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUNLO0FBQ007QUFDQTtBQUdwRCx5REFBeUQ7QUFDekQsMEJBQTBCO0FBQzFCLCtEQUErRDtBQUMvRCxLQUFLO0FBR0wsTUFBTUksU0FBUztJQUdiLE1BQU1DLGNBQWM7UUFDbEJDLGlCQUFpQjtRQUNqQkMsU0FBUztRQUNUQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLFVBQVU7UUFDZEMsVUFBVTtRQUNWQyxZQUFZO1FBQ1pSLFNBQVM7UUFDVEUsWUFBWTtRQUNaTyxZQUFZO1FBQ1pDLGVBQWU7UUFDZkMsWUFBWTtJQUNkO0lBRUEsTUFBTUMscUJBQXFCO1FBQ3pCWixTQUFTO1FBQ1RhLGVBQWU7UUFDZkMsUUFBUTtRQUNSQyxhQUFhO1FBQ2JKLFlBQVc7SUFDYjtJQUVBLE1BQU1LLFlBQVk7UUFDaEJDLE9BQU87UUFDUFQsWUFBVztRQUNYVSxZQUFZO1FBQ1pSLGVBQWM7UUFDZFMsZ0JBQWdCO1FBQ2hCWixVQUFVO1FBQ1ZPLFFBQVE7UUFDUk0sWUFBWTtRQUNaQyxhQUFhO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBT3pCOzswQkFDViw4REFBQzBCO2dCQUFJQyxXQUFVO2dCQUF5QkYsT0FBT2pCOztrQ0FDN0MsOERBQUNvQjt3QkFBSUMsS0FBSTt3QkFBZUosT0FBTzs0QkFBRUssT0FBTzs0QkFBUXpCLFFBQVE7NEJBQVFZLGFBQWE7d0JBQU87d0JBQUdjLEtBQUk7Ozs7OztvQkFBUzs7Ozs7OzswQkFHcEcsOERBQUNMO2dCQUFJRCxPQUFTO29CQUFDWixZQUFZO2dCQUFPOzBCQUNwQyw0RUFBQ21CO29CQUFHUCxPQUFPWDs7c0NBQ1QsOERBQUNtQjs0QkFBR04sV0FBVTtzQ0FBVyw0RUFBQ087Z0NBQUVDLE1BQUs7Z0NBQVNWLE9BQU9QOzBDQUFXOzs7Ozs7Ozs7OztzQ0FDNUQsOERBQUNlOzRCQUFHTixXQUFVO3NDQUFXLDRFQUFDTztnQ0FBRUMsTUFBSztnQ0FBSVYsT0FBT1A7MENBQVk7Ozs7Ozs7Ozs7O3NDQUN4RCw4REFBQ2U7NEJBQUdOLFdBQVU7c0NBQVcsNEVBQUNPO2dDQUFFQyxNQUFLO2dDQUFTVixPQUFPUDswQ0FBVzs7Ozs7Ozs7Ozs7c0NBQzVELDhEQUFDZTs0QkFBR04sV0FBVTtzQ0FBVyw0RUFBQ087Z0NBQUVDLE1BQUs7Z0NBQWFWLE9BQU9QOzBDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3hFO0tBL0RNbkI7QUFpRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25hdi9pbmRleC5qcz80NTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgeyBoYW5kbGVTZWFyY2hDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7IFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZ2xvYmFsLm1vZHVsZS5jc3MnO1xuXG5cbi8vIEFkZCBhIGhvdmVyIGVmZmVjdCBieSBjaGFuZ2luZyB0aGUgbGluayBjb2xvciBvbiBob3ZlclxuLy8gbGlua1N0eWxlWyc6aG92ZXInXSA9IHtcbi8vICAgY29sb3I6ICcjRkY1NzMzJywgLy8gQ2hhbmdlIHRvIHRoZSBjb2xvciB5b3Ugd2FudCBvbiBob3ZlclxuLy8gfTtcblxuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG5cblxuICBjb25zdCBuYXZiYXJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcgI0ZGRkZGRicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnNjBweCcsXG4gICAgYm9yZGVyQm90dG9tOiAnM3B4IHNvbGlkICNFMEUwRTAnLFxuICAgIHBhZGRpbmc6ICcwIDIwcHgnLFxuICB9O1xuXG4gIGNvbnN0IHRpdHVsYXIgPSB7XG4gICAgZm9udFNpemU6ICcyOHB4JyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpbkxlZnQ6ICczMDBweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJzVweCcsXG4gICAgZm9udEZhbWlseTogJ0NsaW1iaW5nUGxhbnQnLFxuICB9O1xuXG4gIGNvbnN0IGxpbmtDb250YWluZXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5SaWdodDogJzMwMHB4JyxcbiAgICBmb250RmFtaWx5OidLaXRjaHlSZXRybycsXG4gIH07XG5cbiAgY29uc3QgbGlua1N0eWxlID0ge1xuICAgIGNvbG9yOiAnYmxhY2snLFxuICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXG4gICAgZm9udGZhbWlseTogJ0tpdHNjaHlSZXRybycsXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGZvbnRTaXplOiAnMjVweCcsXG4gICAgbWFyZ2luOiAnMCAxMHB4JyxcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4zcyBlYXNlJyxcbiAgICB3b3JkU3BhY2luZzogJzEwcHgnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBzdHlsZT17bmF2YmFyU3R5bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3d0aWN1bHR1cmUtbmF2LXRpdGxlXCIgc3R5bGU9e3RpdHVsYXJ9PlxuICAgICAgICA8aW1nIHNyYz1cIi9mYXZpY29uLmljb1wiIHN0eWxlPXt7IHdpZHRoOiAnMzBweCcsIGhlaWdodDogJzMwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19IGFsdD1cIkljb25cIiAvPlxuICAgICAgICBIb3d0aWN1bHR1cmVcbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlID0ge3tmb250RmFtaWx5OiAnS2l0Y2gnfX0+XG4gICAgICA8dWwgc3R5bGU9e2xpbmtDb250YWluZXJTdHlsZX0+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL2xvZ2luXCIgc3R5bGU9e2xpbmtTdHlsZX0+TG9naW48L2E+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvXCIgc3R5bGU9e2xpbmtTdHlsZX0gPkhvbWU8L2E+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvYWJvdXRcIiBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT48L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9jb21tdW5pdHlcIiBzdHlsZT17bGlua1N0eWxlfT5Db21tdW5pdHk8L2E+PC9saT5cbiAgICAgICAgXG4gICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG5cblxuICAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2hDbGljayIsInN0eWxlcyIsIk5hdmJhciIsIm5hdmJhclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsInBhZGRpbmciLCJ0aXR1bGFyIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luTGVmdCIsImxldHRlclNwYWNpbmciLCJmb250RmFtaWx5IiwibGlua0NvbnRhaW5lclN0eWxlIiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwibGlua1N0eWxlIiwiY29sb3IiLCJmb250ZmFtaWx5IiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwid29yZFNwYWNpbmciLCJuYXYiLCJzdHlsZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwidWwiLCJsaSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});