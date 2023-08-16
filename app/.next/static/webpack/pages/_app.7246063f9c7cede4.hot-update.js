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

/***/ "./src/pages/nav/index.js":
/*!********************************!*\
  !*** ./src/pages/nav/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.png */ \"./src/pages/nav/Icon.png\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axios/index */ \"./src/pages/axios/index.js\");\n/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_axios_index__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mainpage_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mainpage/index */ \"./src/pages/mainpage/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst navbarStyle = {\n    display: \"flex\",\n    justifyContent: \"space-between\",\n    alignItems: \"center\",\n    height: \"50px\",\n    borderBottom: \"1px solid #E0E0E0\",\n    padding: \"0 20px\"\n};\nconst titular = {\n    paddingLeft: \"350px\",\n    fontSize: \"22px\",\n    fontWeight: \"bold\"\n};\nconst linkContainerStyle = {\n    display: \"flex\",\n    listStyleType: \"none\",\n    margin: 0,\n    paddingRight: \"350px\"\n};\nconst linkStyle = {\n    color: \"#9E9E9E\",\n    textDecoration: \"none\",\n    fontSize: \"20px\",\n    margin: \"0 10px\",\n    transition: \"color 0.3s ease\"\n};\n// Add a hover effect by changing the link color on hover\n// linkStyle[':hover'] = {\n//   color: '#FF5733', // Change to the color you want on hover\n// };\nfunction Navbar() {\n    _s();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [plantData, setPlantData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    console.log(\"handleSearchClick - searchValue:\", searchValue);\n    const handleSearchChange = (event)=>{\n        setSearchValue(event.target.value);\n        console.log(\"Search value:\", event.target.value);\n    };\n    const handleSearchClick = ()=>{\n        const API_KEY = \"eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI\";\n        const apiUrl = \"https://trefle.io/api/v1/plants/search?token=\".concat(API_KEY, \"&q=\").concat(searchValue);\n        console.log(\"API URL:\", apiUrl);\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(apiUrl).then((response)=>{\n            if (response.data.length > 0) {\n                setPlantData(response.data);\n                console.log(\"handleSearchClick - Fetched plantData:\", response.data[0]);\n            } else {\n                setPlantData(null);\n                console.log(\"handleSearchClick - No plant data found.\");\n            }\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search for plants...\",\n                        value: searchValue,\n                        onChange: handleSearchChange,\n                        style: {\n                            fontSize: \"16px\",\n                            padding: \"5px 10px\",\n                            borderRadius: \"4px\",\n                            marginLeft: \"10px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSearchClick,\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mainpage_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    plantData: plantData,\n                    handleSearchClick: handleSearchClick\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                    lineNumber: 97,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"g1rDR9Unk/TGtsaq7Q7ye0DOSOY=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmF2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1g7QUFDZ0I7QUFDUDtBQUNGO0FBQ1g7QUFFMUIsTUFBTU0sY0FBYztJQUNsQkMsU0FBUztJQUNUQyxnQkFBZ0I7SUFDaEJDLFlBQVk7SUFDWkMsUUFBUTtJQUNSQyxjQUFjO0lBQ2RDLFNBQVM7QUFDWDtBQUVBLE1BQU1DLFVBQVU7SUFDZEMsYUFBYTtJQUNiQyxVQUFVO0lBQ1ZDLFlBQVk7QUFDZDtBQUVBLE1BQU1DLHFCQUFxQjtJQUN6QlYsU0FBUztJQUNUVyxlQUFlO0lBQ2ZDLFFBQVE7SUFDUkMsY0FBYztBQUNoQjtBQUVBLE1BQU1DLFlBQVk7SUFDaEJDLE9BQU87SUFDUEMsZ0JBQWdCO0lBQ2hCUixVQUFVO0lBQ1ZJLFFBQVE7SUFDUkssWUFBWTtBQUNkO0FBRUEseURBQXlEO0FBQ3pELDBCQUEwQjtBQUMxQiwrREFBK0Q7QUFDL0QsS0FBSztBQUVVLFNBQVNDOztJQUV0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQzJCLFdBQVdDLGFBQWEsR0FBRzVCLCtDQUFRQSxDQUFDO0lBQzNDNkIsUUFBUUMsR0FBRyxDQUFDLG9DQUFvQ0w7SUFDaEQsTUFBTU0scUJBQXFCLENBQUNDO1FBQzFCTixlQUFlTSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7UUFDakNMLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJFLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUVqRDtJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QixNQUFNQyxVQUFVO1FBQ2hCLE1BQU1DLFNBQVMsZ0RBQTZEWixPQUFiVyxTQUFRLE9BQWlCLE9BQVpYO1FBQzVFSSxRQUFRQyxHQUFHLENBQUMsWUFBWU87UUFJeEJqQyxpREFBUyxDQUFDaUMsUUFDUEUsSUFBSSxDQUFDQyxDQUFBQTtZQUNKLElBQUlBLFNBQVNDLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7Z0JBQzVCZCxhQUFhWSxTQUFTQyxJQUFJO2dCQUMxQlosUUFBUUMsR0FBRyxDQUFDLDBDQUEwQ1UsU0FBU0MsSUFBSSxDQUFDLEVBQUU7WUFFeEUsT0FBTztnQkFDTGIsYUFBYTtnQkFDYkMsUUFBUUMsR0FBRyxDQUFDO1lBRWQ7UUFDRixHQUNDYSxLQUFLLENBQUNDLENBQUFBO1lBQ0xmLFFBQVFlLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBT3pDOzswQkFFViw4REFBQzBDOztrQ0FDQyw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1poQixPQUFPVDt3QkFDUDBCLFVBQVVwQjt3QkFDVmUsT0FBTzs0QkFDTGhDLFVBQVU7NEJBQ1ZILFNBQVM7NEJBQ1R5QyxjQUFjOzRCQUNkQyxZQUFZO3dCQUNkOzs7Ozs7a0NBRUYsOERBQUNDO3dCQUFPQyxTQUFTcEI7a0NBQW1COzs7Ozs7Ozs7Ozs7MEJBRXRDLDhEQUFDWTswQkFDRCw0RUFBQzVDLHVEQUFJQTtvQkFBQ3dCLFdBQVdBO29CQUFXUSxtQkFBbUJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlyRDtHQTFEd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9uYXYvaW5kZXguanM/NDUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGljb24gZnJvbSAnLi9JY29uLnBuZyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgUGxhbnRJbmZvIGZyb20gJy4uL2F4aW9zL2luZGV4JztcbmltcG9ydCBNYWluIGZyb20gJy4uL21haW5wYWdlL2luZGV4JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IG5hdmJhclN0eWxlID0ge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBoZWlnaHQ6ICc1MHB4JyxcbiAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNFMEUwRTAnLCBcbiAgcGFkZGluZzogJzAgMjBweCcsIFxufTtcblxuY29uc3QgdGl0dWxhciA9IHtcbiAgcGFkZGluZ0xlZnQ6ICczNTBweCcsXG4gIGZvbnRTaXplOiAnMjJweCcsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbn07XG5cbmNvbnN0IGxpbmtDb250YWluZXJTdHlsZSA9IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZ1JpZ2h0OiAnMzUwcHgnLCBcbn07XG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgY29sb3I6ICcjOUU5RTlFJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgZm9udFNpemU6ICcyMHB4JyxcbiAgbWFyZ2luOiAnMCAxMHB4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuM3MgZWFzZScsIC8vIEFkZGluZyBhIHRyYW5zaXRpb24gZm9yIHNtb290aCBjb2xvciBjaGFuZ2Vcbn07XG5cbi8vIEFkZCBhIGhvdmVyIGVmZmVjdCBieSBjaGFuZ2luZyB0aGUgbGluayBjb2xvciBvbiBob3ZlclxuLy8gbGlua1N0eWxlWyc6aG92ZXInXSA9IHtcbi8vICAgY29sb3I6ICcjRkY1NzMzJywgLy8gQ2hhbmdlIHRvIHRoZSBjb2xvciB5b3Ugd2FudCBvbiBob3ZlclxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGxhbnREYXRhLCBzZXRQbGFudERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnNvbGUubG9nKFwiaGFuZGxlU2VhcmNoQ2xpY2sgLSBzZWFyY2hWYWx1ZTpcIiwgc2VhcmNoVmFsdWUpO1xuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTZWFyY2hWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoIHZhbHVlOlwiLCBldmVudC50YXJnZXQudmFsdWUpO1xuXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgQVBJX0tFWSA9ICdlWUFGUE1yWVRZUlV2TFRsZThjTmFCanluTm1BZXFtY2ZJLWlORGNmd01JJztcbiAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly90cmVmbGUuaW8vYXBpL3YxL3BsYW50cy9zZWFyY2g/dG9rZW49JHtBUElfS0VZfSZxPSR7c2VhcmNoVmFsdWV9YDtcbiAgICBjb25zb2xlLmxvZyhcIkFQSSBVUkw6XCIsIGFwaVVybCk7XG5cblxuXG4gICAgYXhpb3MuZ2V0KGFwaVVybClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNldFBsYW50RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVNlYXJjaENsaWNrIC0gRmV0Y2hlZCBwbGFudERhdGE6XCIsIHJlc3BvbnNlLmRhdGFbMF0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0UGxhbnREYXRhKG51bGwpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlU2VhcmNoQ2xpY2sgLSBObyBwbGFudCBkYXRhIGZvdW5kLlwiKTtcblxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgc3R5bGU9e25hdmJhclN0eWxlfT5cbiAgICAgIHsvKiAuLi4gcmVzdCBvZiB5b3VyIGNvZGUgLi4uICovfVxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwbGFudHMuLi5cIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzVweCAxMHB4JyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZWFyY2hDbGlja30+U2VhcmNoPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8TWFpbiBwbGFudERhdGE9e3BsYW50RGF0YX0gaGFuZGxlU2VhcmNoQ2xpY2s9e2hhbmRsZVNlYXJjaENsaWNrfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImljb24iLCJQbGFudEluZm8iLCJNYWluIiwiYXhpb3MiLCJuYXZiYXJTdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nIiwidGl0dWxhciIsInBhZGRpbmdMZWZ0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGlua0NvbnRhaW5lclN0eWxlIiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbiIsInBhZGRpbmdSaWdodCIsImxpbmtTdHlsZSIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwiTmF2YmFyIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInBsYW50RGF0YSIsInNldFBsYW50RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJBUElfS0VZIiwiYXBpVXJsIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImxlbmd0aCIsImNhdGNoIiwiZXJyb3IiLCJuYXYiLCJzdHlsZSIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5MZWZ0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});