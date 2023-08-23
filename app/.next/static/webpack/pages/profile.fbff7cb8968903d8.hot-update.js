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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout */ \"./src/pages/layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\"\n    });\n    const [fetchedData, setFetchedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userLogs, setUserLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    const handleFormSubmit = async (e)=>{\n        e.preventDefault(); // Prevent the default form submission behavior\n        // Assuming you have postData state that contains the form input values\n        const { title, content } = postData;\n        try {\n            // Validation logic (you can add more specific validation as needed)\n            if (!title || !content) {\n                alert(\"Please fill in all fields.\");\n                return;\n            }\n            // Make an API request or perform an action here (e.g., create a post)\n            // Example using axios:\n            const response1 = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://example.com/api/posts\", {\n                title,\n                content\n            });\n            // Handle success\n            console.log(\"Post created:\", response1.data);\n            // Clear the form inputs or reset the state as needed\n            setPostData({\n                title: \"\",\n                content: \"\"\n            });\n        // You can also update the UI or state to reflect the new post if needed\n        } catch (error) {\n            // Handle error\n            console.error(\"Error creating post:\", error);\n            alert(\"An error occurred while creating the post. Please try again later.\");\n        }\n    };\n    // useEffect(() => {\n    //   fetchPosts();\n    // }, []);\n    // ---------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------\n    const getName = async ()=>{\n        try {\n            console.log(state);\n            const user_id = state.user.user_id;\n            // const response = await axios.get('http://127.0.0.1:8000/api/huh/' + user_id); \n            const newUser = state.user;\n            newUser.data = response.data;\n            await dispatch({\n                currentUser: newUser\n            });\n            console.log(response.data);\n            setFetchedData(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const fetchUserLogs = async ()=>{\n        try {\n            const user_id = state.user.user_id;\n            // const response = await axios.get(`http://127.0.0.1:8000/api/user-logs/?user_id=${user_id}`);\n            setUserLogs(response.data);\n        } catch (error) {\n            console.error(\"Error fetching user logs:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, []);\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setPostData({\n            ...postData,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Create a New Post\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                    lineNumber: 98,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleFormSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"title\",\n                                    children: \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"title\",\n                                    name: \"title\",\n                                    value: postData.title,\n                                    onChange: handleInputChange\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 100,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"content\",\n                                    children: \"Content\"\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    id: \"content\",\n                                    name: \"content\",\n                                    value: postData.content,\n                                    onChange: handleInputChange\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 110,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Create Post\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 119,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"User Profile\"\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Name: \",\n                                        state.user.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Email: \",\n                                        state.user.email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 121,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                    lineNumber: 99,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n            lineNumber: 97,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"R+uOwdErdLfhgimpuqAEpBmzJzw=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVYjs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDSTs7OENBQ0MsOERBQUNJO29DQUFNQyxTQUFROzhDQUFVOzs7Ozs7OENBQ3pCLDhEQUFDSztvQ0FDQ0YsSUFBRztvQ0FDSFgsTUFBSztvQ0FDTEMsT0FBTzVCLFNBQVNHLE9BQU87b0NBQ3ZCb0MsVUFBVWI7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ2U7NEJBQU9KLE1BQUs7c0NBQVM7Ozs7OztzQ0FFdEIsOERBQUNQOzs4Q0FDQyw4REFBQ0M7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ1c7O3dDQUFFO3dDQUFPbEMsTUFBTWMsSUFBSSxDQUFDSyxJQUFJOzs7Ozs7OzhDQUN6Qiw4REFBQ2U7O3dDQUFFO3dDQUFRbEMsTUFBTWMsSUFBSSxDQUFDcUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JDO0dBMUhNNUM7O1FBSXNCTixnRUFBY0E7OztLQUpwQ007QUE0SE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2ZpbGUuanM/ZWIzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxTdGF0ZSc7XG5pbXBvcnQgYXV0aFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcblxuY29uc3QgUHJvZmlsZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb3N0RGF0YSwgc2V0UG9zdERhdGFdID0gdXNlU3RhdGUoeyB0aXRsZTogJycsIGNvbnRlbnQ6ICcnIH0pO1xuICBjb25zdCBbZmV0Y2hlZERhdGEsIHNldEZldGNoZWREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VzZXJMb2dzLCBzZXRVc2VyTG9nc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlR2xvYmFsU3RhdGUoKTtcbiAgXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcbiAgXG4gICAgLy8gQXNzdW1pbmcgeW91IGhhdmUgcG9zdERhdGEgc3RhdGUgdGhhdCBjb250YWlucyB0aGUgZm9ybSBpbnB1dCB2YWx1ZXNcbiAgICBjb25zdCB7IHRpdGxlLCBjb250ZW50IH0gPSBwb3N0RGF0YTtcbiAgXG4gICAgdHJ5IHtcbiAgICAgIC8vIFZhbGlkYXRpb24gbG9naWMgKHlvdSBjYW4gYWRkIG1vcmUgc3BlY2lmaWMgdmFsaWRhdGlvbiBhcyBuZWVkZWQpXG4gICAgICBpZiAoIXRpdGxlIHx8ICFjb250ZW50KSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIFxuICAgICAgLy8gTWFrZSBhbiBBUEkgcmVxdWVzdCBvciBwZXJmb3JtIGFuIGFjdGlvbiBoZXJlIChlLmcuLCBjcmVhdGUgYSBwb3N0KVxuICAgICAgLy8gRXhhbXBsZSB1c2luZyBheGlvczpcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2V4YW1wbGUuY29tL2FwaS9wb3N0cycsIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9KTtcbiAgXG4gICAgICAvLyBIYW5kbGUgc3VjY2Vzc1xuICAgICAgY29uc29sZS5sb2coJ1Bvc3QgY3JlYXRlZDonLCByZXNwb25zZS5kYXRhKTtcbiAgXG4gICAgICAvLyBDbGVhciB0aGUgZm9ybSBpbnB1dHMgb3IgcmVzZXQgdGhlIHN0YXRlIGFzIG5lZWRlZFxuICAgICAgc2V0UG9zdERhdGEoeyB0aXRsZTogJycsIGNvbnRlbnQ6ICcnIH0pO1xuICBcbiAgICAgIC8vIFlvdSBjYW4gYWxzbyB1cGRhdGUgdGhlIFVJIG9yIHN0YXRlIHRvIHJlZmxlY3QgdGhlIG5ldyBwb3N0IGlmIG5lZWRlZFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBIYW5kbGUgZXJyb3JcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHBvc3Q6JywgZXJyb3IpO1xuICAgICAgYWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIHRoZSBwb3N0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZmV0Y2hQb3N0cygpO1xuICAvLyB9LCBbXSk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBnZXROYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWRcbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2h1aC8nICsgdXNlcl9pZCk7IFxuICAgICAgY29uc3QgbmV3VXNlciA9IHN0YXRlLnVzZXI7XG4gICAgICBuZXdVc2VyLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgY3VycmVudFVzZXI6IG5ld1VzZXJcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgIHNldEZldGNoZWREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hVc2VyTG9ncyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlcl9pZCA9IHN0YXRlLnVzZXIudXNlcl9pZDsgXG4gICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS91c2VyLWxvZ3MvP3VzZXJfaWQ9JHt1c2VyX2lkfWApO1xuICAgICAgc2V0VXNlckxvZ3MocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgbG9nczonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TmFtZSgpO1xuICAgIGZldGNoVXNlckxvZ3MoKTsgXG4gIH0sIFtdKTtcblxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRQb3N0RGF0YSh7XG4gICAgICAuLi5wb3N0RGF0YSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgIDxkaXY+XG4gICAgICA8aDI+Q3JlYXRlIGEgTmV3IFBvc3Q8L2gyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICB2YWx1ZT17cG9zdERhdGEudGl0bGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgdmFsdWU9e3Bvc3REYXRhLmNvbnRlbnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBQb3N0PC9idXR0b24+XG4gICAgICAgIHsvKiBVc2VyIFByb2ZpbGUgU2VjdGlvbiAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+VXNlciBQcm9maWxlPC9oMj5cbiAgICAgICAgICA8cD5OYW1lOiB7c3RhdGUudXNlci5uYW1lfTwvcD5cbiAgICAgICAgICA8cD5FbWFpbDoge3N0YXRlLnVzZXIuZW1haWx9PC9wPlxuICAgICAgICAgIHsvKiBBZGQgbW9yZSB1c2VyIGluZm9ybWF0aW9uIGZpZWxkcyBhcyBuZWVkZWQgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VHbG9iYWxTdGF0ZSIsImF1dGhTZXJ2aWNlIiwiand0RGVjb2RlIiwiTGluayIsImF4aW9zIiwiTGF5b3V0IiwiUHJvZmlsZVBhZ2UiLCJwb3N0RGF0YSIsInNldFBvc3REYXRhIiwidGl0bGUiLCJjb250ZW50IiwiZmV0Y2hlZERhdGEiLCJzZXRGZXRjaGVkRGF0YSIsInVzZXJMb2dzIiwic2V0VXNlckxvZ3MiLCJzdGF0ZSIsImRpc3BhdGNoIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImdldE5hbWUiLCJ1c2VyX2lkIiwidXNlciIsIm5ld1VzZXIiLCJjdXJyZW50VXNlciIsImZldGNoVXNlckxvZ3MiLCJoYW5kbGVJbnB1dENoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImRpdiIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwiYnV0dG9uIiwicCIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});