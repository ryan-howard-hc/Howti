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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n\n\n\n\n\n// Add a hover effect by changing the link color on hover\n// linkStyle[':hover'] = {\n//   color: '#FF5733', // Change to the color you want on hover\n// };\nconst Navbar = ()=>{\n    const fontStyles = \"\\n  @font-face {\\n    font-family: 'ClimbingPlant ' !important;\\n    src: url('./pete.ttf') format('truetype');\\n  }\\n\";\n    const navbarStyle = {\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        height: \"50px\",\n        borderBottom: \"1px solid #E0E0E0\",\n        padding: \"0 20px\"\n    };\n    const titular = {\n        fontSize: \"22px\",\n        fontWeight: \"bold\",\n        display: \"flex\",\n        alignItems: \"center\",\n        marginLeft: \"300px\",\n        letterSpacing: \"5px\",\n        fontFamily: \"ClimbingPlant\"\n    };\n    const linkContainerStyle = {\n        display: \"flex\",\n        listStyleType: \"none\",\n        margin: 0,\n        marginRight: \"300px\"\n    };\n    const linkStyle = {\n        color: \"#9E9E9E\",\n        textDecoration: \"none\",\n        fontSize: \"20px\",\n        margin: \"0 10px\",\n        transition: \"color 0.3s ease\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"howticulture-nav-title\",\n                style: titular,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/favicon.ico\",\n                        style: {\n                            width: \"24px\",\n                            height: \"24px\",\n                            marginRight: \"10px\"\n                        },\n                        alt: \"Icon\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Howticulture\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: linkContainerStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"nav-link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            style: linkStyle,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"nav-link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            style: linkStyle,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"nav-link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/about\",\n                            style: linkStyle,\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"nav-link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/community\",\n                            style: linkStyle,\n                            children: \"Community\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 34\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmF2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUNLO0FBQ007QUFDRDtBQUVuRCx5REFBeUQ7QUFDekQsMEJBQTBCO0FBQzFCLCtEQUErRDtBQUMvRCxLQUFLO0FBR0wsTUFBTUksU0FBUztJQUNiLE1BQU1DLGFBQWM7SUFPcEIsTUFBTUMsY0FBYztRQUNsQkMsU0FBUztRQUNUQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLFVBQVU7UUFDZEMsVUFBVTtRQUNWQyxZQUFZO1FBQ1pSLFNBQVM7UUFDVEUsWUFBWTtRQUNaTyxZQUFZO1FBQ1pDLGVBQWU7UUFDZkMsWUFBWTtJQUNkO0lBRUEsTUFBTUMscUJBQXFCO1FBQ3pCWixTQUFTO1FBQ1RhLGVBQWU7UUFDZkMsUUFBUTtRQUNSQyxhQUFhO0lBQ2Y7SUFFQSxNQUFNQyxZQUFZO1FBQ2hCQyxPQUFPO1FBQ1BDLGdCQUFnQjtRQUNoQlgsVUFBVTtRQUNWTyxRQUFRO1FBQ1JLLFlBQVk7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPdEI7OzBCQUNWLDhEQUFDdUI7Z0JBQUlDLFdBQVU7Z0JBQXlCRixPQUFPZjs7a0NBQzdDLDhEQUFDa0I7d0JBQUlDLEtBQUk7d0JBQWVKLE9BQU87NEJBQUVLLE9BQU87NEJBQVF2QixRQUFROzRCQUFRWSxhQUFhO3dCQUFPO3dCQUFHWSxLQUFJOzs7Ozs7b0JBQVM7Ozs7Ozs7MEJBSXRHLDhEQUFDQztnQkFBR1AsT0FBT1Q7O2tDQUNULDhEQUFDaUI7d0JBQUdOLFdBQVU7a0NBQVcsNEVBQUNPOzRCQUFFQyxNQUFLOzRCQUFJVixPQUFPTDtzQ0FBVzs7Ozs7Ozs7Ozs7a0NBQ3ZELDhEQUFDYTt3QkFBR04sV0FBVTtrQ0FBVyw0RUFBQ087NEJBQUVDLE1BQUs7NEJBQUlWLE9BQU9MO3NDQUFXOzs7Ozs7Ozs7OztrQ0FDdkQsOERBQUNhO3dCQUFHTixXQUFVO2tDQUFXLDRFQUFDTzs0QkFBRUMsTUFBSzs0QkFBU1YsT0FBT0w7c0NBQVc7Ozs7Ozs7Ozs7O2tDQUM1RCw4REFBQ2E7d0JBQUdOLFdBQVU7a0NBQVcsNEVBQUNPOzRCQUFFQyxNQUFLOzRCQUFhVixPQUFPTDtzQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEU7S0E1RE1uQjtBQThETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbmF2L2luZGV4LmpzPzQ1MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IGhhbmRsZVNlYXJjaENsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJzsgXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwubW9kdWxlLmNzcydcblxuLy8gQWRkIGEgaG92ZXIgZWZmZWN0IGJ5IGNoYW5naW5nIHRoZSBsaW5rIGNvbG9yIG9uIGhvdmVyXG4vLyBsaW5rU3R5bGVbJzpob3ZlciddID0ge1xuLy8gICBjb2xvcjogJyNGRjU3MzMnLCAvLyBDaGFuZ2UgdG8gdGhlIGNvbG9yIHlvdSB3YW50IG9uIGhvdmVyXG4vLyB9O1xuXG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgZm9udFN0eWxlcyA9IGBcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDbGltYmluZ1BsYW50ICcgIWltcG9ydGFudDtcbiAgICBzcmM6IHVybCgnLi9wZXRlLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgfVxuYDtcblxuICBjb25zdCBuYXZiYXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICc1MHB4JyxcbiAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0UwRTBFMCcsXG4gICAgcGFkZGluZzogJzAgMjBweCcsXG4gIH07XG5cbiAgY29uc3QgdGl0dWxhciA9IHtcbiAgICBmb250U2l6ZTogJzIycHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luTGVmdDogJzMwMHB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnNXB4JyxcbiAgICBmb250RmFtaWx5OiAnQ2xpbWJpbmdQbGFudCcsXG4gIH07XG5cbiAgY29uc3QgbGlua0NvbnRhaW5lclN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXG4gICAgbWFyZ2luOiAwLFxuICAgIG1hcmdpblJpZ2h0OiAnMzAwcHgnXG4gIH07XG5cbiAgY29uc3QgbGlua1N0eWxlID0ge1xuICAgIGNvbG9yOiAnIzlFOUU5RScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIG1hcmdpbjogJzAgMTBweCcsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuM3MgZWFzZScsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IHN0eWxlPXtuYXZiYXJTdHlsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvd3RpY3VsdHVyZS1uYXYtdGl0bGVcIiBzdHlsZT17dGl0dWxhcn0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2Zhdmljb24uaWNvXCIgc3R5bGU9e3sgd2lkdGg6ICcyNHB4JywgaGVpZ2h0OiAnMjRweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gYWx0PVwiSWNvblwiIC8+XG4gICAgICAgIEhvd3RpY3VsdHVyZVxuICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPHVsIHN0eWxlPXtsaW5rQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9cIiBzdHlsZT17bGlua1N0eWxlfT5Ib21lPC9hPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL1wiIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvYWJvdXRcIiBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT48L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9jb21tdW5pdHlcIiBzdHlsZT17bGlua1N0eWxlfT5Db21tdW5pdHk8L2E+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG5cblxuICAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2hDbGljayIsInN0eWxlcyIsIk5hdmJhciIsImZvbnRTdHlsZXMiLCJuYXZiYXJTdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nIiwidGl0dWxhciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udEZhbWlseSIsImxpbmtDb250YWluZXJTdHlsZSIsImxpc3RTdHlsZVR5cGUiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsImxpbmtTdHlsZSIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwibmF2Iiwic3R5bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsInVsIiwibGkiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});