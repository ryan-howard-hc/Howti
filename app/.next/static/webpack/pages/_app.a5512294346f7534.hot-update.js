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

/***/ "./src/components/PlantDetails.js":
/*!****************************************!*\
  !*** ./src/components/PlantDetails.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ \"./src/utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n // Assuming you put the utility functions in a file named \"api.js\"\nconst PlantDetails = ()=>{\n    _s();\n    const { id } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const [plantDetails, setPlantDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPlantData = async ()=>{\n            try {\n                const response = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.fetchPlantDetails)(id);\n                setPlantDetails(response.data);\n            } catch (error) {\n                console.error(\"Error fetching plant details:\", error);\n            }\n        };\n        fetchPlantData();\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: plantDetails.common_name\n        }, void 0, false, {\n            fileName: \"/workspace/Howti/app/src/components/PlantDetails.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/Howti/app/src/components/PlantDetails.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlantDetails, \"VFEoTPvvCGph1cPg1h5N71h0u34=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams\n    ];\n});\n_c = PlantDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetails);\nvar _c;\n$RefreshReg$(_c, \"PlantDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGFudERldGFpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBQ21CO0FBQ0ksQ0FBQyxrRUFBa0U7QUFFcEgsTUFBTU0sZUFBZTs7SUFDbkIsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR0gsMkRBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ksY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDLENBQUM7SUFFbERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsaUJBQWlCO1lBQ3JCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNTiw2REFBaUJBLENBQUNFO2dCQUN6Q0UsZ0JBQWdCRSxTQUFTQyxJQUFJO1lBQy9CLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7WUFDakQ7UUFDRjtRQUVBSDtJQUNGLEdBQUc7UUFBQ0g7S0FBRztJQUVQLHFCQUNFLDhEQUFDUTtrQkFDQyw0RUFBQ0M7c0JBQUlSLGFBQWFTLFdBQVc7Ozs7Ozs7Ozs7O0FBSW5DO0dBdkJNWDs7UUFDV0YsdURBQVNBOzs7S0FEcEJFO0FBeUJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYW50RGV0YWlscy5qcz83MGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgZmV0Y2hQbGFudERldGFpbHMgfSBmcm9tICcuLi91dGlscy9hcGknOyAvLyBBc3N1bWluZyB5b3UgcHV0IHRoZSB1dGlsaXR5IGZ1bmN0aW9ucyBpbiBhIGZpbGUgbmFtZWQgXCJhcGkuanNcIlxuXG5jb25zdCBQbGFudERldGFpbHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpOyBcbiAgY29uc3QgW3BsYW50RGV0YWlscywgc2V0UGxhbnREZXRhaWxzXSA9IHVzZVN0YXRlKHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUGxhbnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFBsYW50RGV0YWlscyhpZCk7XG4gICAgICAgIHNldFBsYW50RGV0YWlscyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHBsYW50IGRldGFpbHM6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFBsYW50RGF0YSgpO1xuICB9LCBbaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+e3BsYW50RGV0YWlscy5jb21tb25fbmFtZX08L2gyPlxuICAgICAgey8qIFJlbmRlciBvdGhlciBwbGFudCBkZXRhaWxzIGhlcmUgKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFudERldGFpbHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVBhcmFtcyIsImZldGNoUGxhbnREZXRhaWxzIiwiUGxhbnREZXRhaWxzIiwiaWQiLCJwbGFudERldGFpbHMiLCJzZXRQbGFudERldGFpbHMiLCJmZXRjaFBsYW50RGF0YSIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImgyIiwiY29tbW9uX25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PlantDetails.js\n"));

/***/ })

});