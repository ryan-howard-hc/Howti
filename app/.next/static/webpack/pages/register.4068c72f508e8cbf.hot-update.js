"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/pages/nav/index.js":
/*!********************************!*\
  !*** ./src/pages/nav/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n\n\n\n\n\n// Add a hover effect by changing the link color on hover\n// linkStyle[':hover'] = {\n//   color: '#FF5733', // Change to the color you want on hover\n// };\nconst Navbar = ()=>{\n    const navbarStyle = {\n        backgroundColor: \" #FFFFFF\",\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        height: \"50px\",\n        borderBottom: \"3px solid black\",\n        padding: \"0 20px\"\n    };\n    const titular = {\n        fontSize: \"22px\",\n        fontWeight: \"bold\",\n        display: \"flex\",\n        alignItems: \"center\",\n        marginLeft: \"300px\",\n        letterSpacing: \"5px\",\n        fontFamily: \"ClimbingPlant\"\n    };\n    const linkContainerStyle = {\n        display: \"flex\",\n        listStyleType: \"none\",\n        margin: 0,\n        marginRight: \"300px\"\n    };\n    const linkStyle = {\n        color: \"black\",\n        fontWeight: \"bolder\",\n        letterSpacing: \"1px\",\n        textDecoration: \"none\",\n        fontSize: \"20px\",\n        margin: \"0 10px\",\n        transition: \"color 0.3s ease\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"howticulture-nav-title\",\n                style: titular,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/favicon.ico\",\n                        style: {\n                            width: \"24px\",\n                            height: \"24px\",\n                            marginRight: \"10px\"\n                        },\n                        alt: \"Icon\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Howticulture\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: linkContainerStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"nav-link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/login\",\n                            style: linkStyle,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"nav-link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            style: linkStyle,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"nav-link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/about\",\n                            style: linkStyle,\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"nav-link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/community\",\n                            style: linkStyle,\n                            children: \"Community\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmF2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUNLO0FBQ007QUFDQTtBQUdwRCx5REFBeUQ7QUFDekQsMEJBQTBCO0FBQzFCLCtEQUErRDtBQUMvRCxLQUFLO0FBR0wsTUFBTUksU0FBUztJQUdiLE1BQU1DLGNBQWM7UUFDbEJDLGlCQUFpQjtRQUNqQkMsU0FBUztRQUNUQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLFVBQVU7UUFDZEMsVUFBVTtRQUNWQyxZQUFZO1FBQ1pSLFNBQVM7UUFDVEUsWUFBWTtRQUNaTyxZQUFZO1FBQ1pDLGVBQWU7UUFDZkMsWUFBWTtJQUNkO0lBRUEsTUFBTUMscUJBQXFCO1FBQ3pCWixTQUFTO1FBQ1RhLGVBQWU7UUFDZkMsUUFBUTtRQUNSQyxhQUFhO0lBQ2Y7SUFFQSxNQUFNQyxZQUFZO1FBQ2hCQyxPQUFPO1FBQ1BULFlBQVc7UUFDWEUsZUFBYztRQUNkUSxnQkFBZ0I7UUFDaEJYLFVBQVU7UUFDVk8sUUFBUTtRQUNSSyxZQUFZO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBT3ZCOzswQkFDViw4REFBQ3dCO2dCQUFJQyxXQUFVO2dCQUF5QkYsT0FBT2Y7O2tDQUM3Qyw4REFBQ2tCO3dCQUFJQyxLQUFJO3dCQUFlSixPQUFPOzRCQUFFSyxPQUFPOzRCQUFRdkIsUUFBUTs0QkFBUVksYUFBYTt3QkFBTzt3QkFBR1ksS0FBSTs7Ozs7O29CQUFTOzs7Ozs7OzBCQUl0Ryw4REFBQ0M7Z0JBQUdQLE9BQU9UOztrQ0FDVCw4REFBQ2lCO3dCQUFHTixXQUFVO2tDQUFXLDRFQUFDTzs0QkFBRUMsTUFBSzs0QkFBU1YsT0FBT0w7c0NBQVc7Ozs7Ozs7Ozs7O2tDQUM1RCw4REFBQ2E7d0JBQUdOLFdBQVU7a0NBQVcsNEVBQUNPOzRCQUFFQyxNQUFLOzRCQUFJVixPQUFPTDtzQ0FBWTs7Ozs7Ozs7Ozs7a0NBQ3hELDhEQUFDYTt3QkFBR04sV0FBVTtrQ0FBVyw0RUFBQ087NEJBQUVDLE1BQUs7NEJBQVNWLE9BQU9MO3NDQUFXOzs7Ozs7Ozs7OztrQ0FDNUQsOERBQUNhO3dCQUFHTixXQUFVO2tDQUFXLDRFQUFDTzs0QkFBRUMsTUFBSzs0QkFBYVYsT0FBT0w7c0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hFO0tBMURNbkI7QUE0RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25hdi9pbmRleC5qcz80NTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgeyBoYW5kbGVTZWFyY2hDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7IFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZ2xvYmFsLm1vZHVsZS5jc3MnO1xuXG5cbi8vIEFkZCBhIGhvdmVyIGVmZmVjdCBieSBjaGFuZ2luZyB0aGUgbGluayBjb2xvciBvbiBob3ZlclxuLy8gbGlua1N0eWxlWyc6aG92ZXInXSA9IHtcbi8vICAgY29sb3I6ICcjRkY1NzMzJywgLy8gQ2hhbmdlIHRvIHRoZSBjb2xvciB5b3Ugd2FudCBvbiBob3ZlclxuLy8gfTtcblxuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG5cblxuICBjb25zdCBuYXZiYXJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcgI0ZGRkZGRicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgYm9yZGVyQm90dG9tOiAnM3B4IHNvbGlkIGJsYWNrJyxcbiAgICBwYWRkaW5nOiAnMCAyMHB4JyxcbiAgfTtcblxuICBjb25zdCB0aXR1bGFyID0ge1xuICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5MZWZ0OiAnMzAwcHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICc1cHgnLFxuICAgIGZvbnRGYW1pbHk6ICdDbGltYmluZ1BsYW50JyxcbiAgfTtcblxuICBjb25zdCBsaW5rQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luUmlnaHQ6ICczMDBweCdcbiAgfTtcblxuICBjb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgY29sb3I6ICdibGFjaycsXG4gICAgZm9udFdlaWdodDonYm9sZGVyJyxcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICBtYXJnaW46ICcwIDEwcHgnLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjNzIGVhc2UnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBzdHlsZT17bmF2YmFyU3R5bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3d0aWN1bHR1cmUtbmF2LXRpdGxlXCIgc3R5bGU9e3RpdHVsYXJ9PlxuICAgICAgICA8aW1nIHNyYz1cIi9mYXZpY29uLmljb1wiIHN0eWxlPXt7IHdpZHRoOiAnMjRweCcsIGhlaWdodDogJzI0cHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19IGFsdD1cIkljb25cIiAvPlxuICAgICAgICBIb3d0aWN1bHR1cmVcbiAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDx1bCBzdHlsZT17bGlua0NvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvbG9naW5cIiBzdHlsZT17bGlua1N0eWxlfT5Mb2dpbjwvYT48L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9cIiBzdHlsZT17bGlua1N0eWxlfSA+SG9tZTwvYT48L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9hYm91dFwiIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL2NvbW11bml0eVwiIHN0eWxlPXtsaW5rU3R5bGV9PkNvbW11bml0eTwvYT48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cblxuXG4gICAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZVNlYXJjaENsaWNrIiwic3R5bGVzIiwiTmF2YmFyIiwibmF2YmFyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyQm90dG9tIiwicGFkZGluZyIsInRpdHVsYXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwibGV0dGVyU3BhY2luZyIsImZvbnRGYW1pbHkiLCJsaW5rQ29udGFpbmVyU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJsaW5rU3R5bGUiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwidHJhbnNpdGlvbiIsIm5hdiIsInN0eWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJ1bCIsImxpIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});