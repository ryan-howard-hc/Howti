"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./src/pages/profile.js":
/*!******************************!*\
  !*** ./src/pages/profile.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout */ \"./src/pages/layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\"\n    });\n    const [fetchedData, setFetchedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userLogs, setUserLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    const handleFormSubmit = async (e)=>{\n        e.preventDefault(); // Prevent the default form submission behavior\n        // Assuming you have postData state that contains the form input values\n        const { title, content } = postData;\n        try {\n            // Validation logic (you can add more specific validation as needed)\n            if (!title || !content) {\n                alert(\"Please fill in all fields.\");\n                return;\n            }\n            // Make an API request or perform an action here (e.g., create a post)\n            // Example using axios:\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://example.com/api/posts\", {\n                title,\n                content\n            });\n            // Handle success\n            console.log(\"Post created:\", response.data);\n            // Clear the form inputs or reset the state as needed\n            setPostData({\n                title: \"\",\n                content: \"\"\n            });\n        // You can also update the UI or state to reflect the new post if needed\n        } catch (error) {\n            // Handle error\n            console.error(\"Error creating post:\", error);\n            alert(\"An error occurred while creating the post. Please try again later.\");\n        }\n    };\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setPostData({\n            ...postData,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Create a New Post\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleFormSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Create Post\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"User Profile\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Name: \",\n                            state.user.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Email: \",\n                            state.user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"BmDXTfxvO4NvY9/uotBzJKsdaok=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNLO0FBQ0w7QUFDaEI7QUFDTjtBQUNIO0FBQ0k7QUFFOUIsTUFBTVMsY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO1FBQUVXLE9BQU87UUFBSUMsU0FBUztJQUFHO0lBQ2xFLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ2UsVUFBVUMsWUFBWSxHQUFHaEIsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLEVBQUVpQixLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHaEIsb0VBQWNBO0lBRTFDLE1BQU1pQixtQkFBbUIsT0FBT0M7UUFDOUJBLEVBQUVDLGNBQWMsSUFBSSwrQ0FBK0M7UUFFbkUsdUVBQXVFO1FBQ3ZFLE1BQU0sRUFBRVYsS0FBSyxFQUFFQyxPQUFPLEVBQUUsR0FBR0g7UUFFM0IsSUFBSTtZQUNGLG9FQUFvRTtZQUNwRSxJQUFJLENBQUNFLFNBQVMsQ0FBQ0MsU0FBUztnQkFDdEJVLE1BQU07Z0JBQ047WUFDRjtZQUVBLHNFQUFzRTtZQUN0RSx1QkFBdUI7WUFDdkIsTUFBTUMsV0FBVyxNQUFNakIsa0RBQVUsQ0FBQyxnQ0FBZ0M7Z0JBQ2hFSztnQkFDQUM7WUFDRjtZQUVBLGlCQUFpQjtZQUNqQmEsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkgsU0FBU0ksSUFBSTtZQUUxQyxxREFBcUQ7WUFDckRqQixZQUFZO2dCQUFFQyxPQUFPO2dCQUFJQyxTQUFTO1lBQUc7UUFFckMsd0VBQXdFO1FBQzFFLEVBQUUsT0FBT2dCLE9BQU87WUFDZCxlQUFlO1lBQ2ZILFFBQVFHLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDTixNQUNFO1FBRUo7SUFDRjtJQUVBLE1BQU1PLG9CQUFvQixDQUFDVDtRQUN6QixNQUFNLEVBQUVVLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdYLEVBQUVZLE1BQU07UUFDaEN0QixZQUFZO1lBQ1YsR0FBR0QsUUFBUTtZQUNYLENBQUNxQixLQUFLLEVBQUVDO1FBQ1Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDeEIsK0NBQU1BOzswQkFDTCw4REFBQzBCOztrQ0FDQyw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQUtDLFVBQVVqQjtrQ0FFZCw0RUFBQ2tCOzRCQUFPQyxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLMUIsOERBQUNMOztrQ0FDQyw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0s7OzRCQUFFOzRCQUFPdEIsTUFBTXVCLElBQUksQ0FBQ1YsSUFBSTs7Ozs7OztrQ0FDekIsOERBQUNTOzs0QkFBRTs0QkFBUXRCLE1BQU11QixJQUFJLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkM7R0FyRU1qQzs7UUFJd0JOLGdFQUFjQTs7O0tBSnRDTTtBQXVFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZmlsZS5qcz9lYjMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcbmltcG9ydCBhdXRoU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnOyBcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuXG5jb25zdCBQcm9maWxlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Bvc3REYXRhLCBzZXRQb3N0RGF0YV0gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJywgY29udGVudDogJycgfSk7XG4gIGNvbnN0IFtmZXRjaGVkRGF0YSwgc2V0RmV0Y2hlZERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlckxvZ3MsIHNldFVzZXJMb2dzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUdsb2JhbFN0YXRlKCk7XG5cbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuXG4gICAgLy8gQXNzdW1pbmcgeW91IGhhdmUgcG9zdERhdGEgc3RhdGUgdGhhdCBjb250YWlucyB0aGUgZm9ybSBpbnB1dCB2YWx1ZXNcbiAgICBjb25zdCB7IHRpdGxlLCBjb250ZW50IH0gPSBwb3N0RGF0YTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBWYWxpZGF0aW9uIGxvZ2ljICh5b3UgY2FuIGFkZCBtb3JlIHNwZWNpZmljIHZhbGlkYXRpb24gYXMgbmVlZGVkKVxuICAgICAgaWYgKCF0aXRsZSB8fCAhY29udGVudCkge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkcy4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIGFuIEFQSSByZXF1ZXN0IG9yIHBlcmZvcm0gYW4gYWN0aW9uIGhlcmUgKGUuZy4sIGNyZWF0ZSBhIHBvc3QpXG4gICAgICAvLyBFeGFtcGxlIHVzaW5nIGF4aW9zOlxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vZXhhbXBsZS5jb20vYXBpL3Bvc3RzJywge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIYW5kbGUgc3VjY2Vzc1xuICAgICAgY29uc29sZS5sb2coJ1Bvc3QgY3JlYXRlZDonLCByZXNwb25zZS5kYXRhKTtcblxuICAgICAgLy8gQ2xlYXIgdGhlIGZvcm0gaW5wdXRzIG9yIHJlc2V0IHRoZSBzdGF0ZSBhcyBuZWVkZWRcbiAgICAgIHNldFBvc3REYXRhKHsgdGl0bGU6ICcnLCBjb250ZW50OiAnJyB9KTtcblxuICAgICAgLy8gWW91IGNhbiBhbHNvIHVwZGF0ZSB0aGUgVUkgb3Igc3RhdGUgdG8gcmVmbGVjdCB0aGUgbmV3IHBvc3QgaWYgbmVlZGVkXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIEhhbmRsZSBlcnJvclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcG9zdDonLCBlcnJvcik7XG4gICAgICBhbGVydChcbiAgICAgICAgJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIHRoZSBwb3N0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLidcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRQb3N0RGF0YSh7XG4gICAgICAuLi5wb3N0RGF0YSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkNyZWF0ZSBhIE5ldyBQb3N0PC9oMj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9PlxuICAgICAgICAgIHsvKiAuLi4gZm9ybSBpbnB1dCBmaWVsZHMgLi4uICovfVxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBQb3N0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogVXNlciBQcm9maWxlIFNlY3Rpb24gKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+VXNlciBQcm9maWxlPC9oMj5cbiAgICAgICAgPHA+TmFtZToge3N0YXRlLnVzZXIubmFtZX08L3A+XG4gICAgICAgIDxwPkVtYWlsOiB7c3RhdGUudXNlci5lbWFpbH08L3A+XG4gICAgICAgIHsvKiBBZGQgbW9yZSB1c2VyIGluZm9ybWF0aW9uIGZpZWxkcyBhcyBuZWVkZWQgKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlR2xvYmFsU3RhdGUiLCJhdXRoU2VydmljZSIsImp3dERlY29kZSIsIkxpbmsiLCJheGlvcyIsIkxheW91dCIsIlByb2ZpbGVQYWdlIiwicG9zdERhdGEiLCJzZXRQb3N0RGF0YSIsInRpdGxlIiwiY29udGVudCIsImZldGNoZWREYXRhIiwic2V0RmV0Y2hlZERhdGEiLCJ1c2VyTG9ncyIsInNldFVzZXJMb2dzIiwic3RhdGUiLCJkaXNwYXRjaCIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImRpdiIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiYnV0dG9uIiwidHlwZSIsInAiLCJ1c2VyIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});