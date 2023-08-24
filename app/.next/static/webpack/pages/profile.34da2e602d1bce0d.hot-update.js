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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout */ \"./src/pages/layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\"\n    });\n    const [fetchedData, setFetchedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userLogs, setUserLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFormSubmit = async (e)=>{\n        e.preventDefault(); // Prevent the default form submission behavior\n        const { title, content } = postData;\n        try {\n            if (!title || !content) {\n                alert(\"Please fill in all fields.\");\n                return;\n            }\n            const response1 = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"http://example.com/api/posts\", {\n                title,\n                content\n            });\n            console.log(\"Post created:\", response1.data);\n            setPostData({\n                title: \"\",\n                content: \"\"\n            });\n        } catch (error) {\n            // Handle error\n            console.error(\"Error creating post:\", error);\n            alert(\"An error occurred while creating the post. Please try again later.\");\n        }\n    };\n    // useEffect(() => {\n    //   fetchPosts();\n    // }, []);\n    // ---------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------\n    const getName = async ()=>{\n        try {\n            console.log(state);\n            const user_id = state.user.user_id;\n            // const response = await axios.get('http://127.0.0.1:8000/api/huh/' + user_id); \n            const newUser = state.user;\n            newUser.data = response.data;\n            await dispatch({\n                currentUser: newUser\n            });\n            console.log(response.data);\n            setFetchedData(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    // Function to fetch user information from the API\n    const fetchCurrentUser = async ()=>{\n        const token = localStorage.getItem(\"authToken\"); // Retrieve the authentication token from local storage\n        if (token) {\n            try {\n                // Make an authenticated request to get the user information\n                const response1 = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/users/\", {\n                    headers: {\n                        Authorization: \"Bearer \".concat(token)\n                    }\n                });\n                // Set the user state with the response data\n                setUser(response1.data);\n            } catch (error) {\n                console.error(\"Error fetching current user:\", error);\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCurrentUser();\n    }, []);\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setPostData({\n            ...postData,\n            [name]: value\n        });\n    };\n    const { favorites } = router.query;\n    const favoritePlants = JSON.parse(favorites || \"[]\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"User Profile\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined),\n                        user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Username: \",\n                                    user.username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                lineNumber: 116,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"User information is not available.\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Favorite Plants\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: favoritePlants.map((plant, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: plant.common_name\n                        }, index, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                    lineNumber: 125,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"xV9gWXywzl0XNA3ypQZT0QGZOfA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RS9DLHFCQUNFLDhEQUFDekMsK0NBQU1BO2tCQUNMLDRFQUFDOEM7OzhCQUNDLDhEQUFDQTs7c0NBQ0MsOERBQUNDO3NDQUFHOzs7Ozs7d0JBQ0hqQyxxQkFDQztzQ0FDRSw0RUFBQ2tDOztvQ0FBRTtvQ0FBV2xDLEtBQUttQyxRQUFROzs7Ozs7OzBEQUk3Qiw4REFBQ0Q7c0NBQUU7Ozs7Ozs7Ozs7Ozs4QkFJUCw4REFBQ0Q7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0c7OEJBQ0VQLGVBQWVRLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDMUIsOERBQUNDO3NDQUFnQkYsTUFBTUcsV0FBVzsyQkFBekJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckI7R0EzSE1uRDs7UUFDV0Qsa0RBQVNBO1FBSUVOLGdFQUFjQTs7O0tBTHBDTztBQTZITiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZmlsZS5qcz9lYjMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcbmltcG9ydCBhdXRoU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnOyBcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBQcm9maWxlUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtwb3N0RGF0YSwgc2V0UG9zdERhdGFdID0gdXNlU3RhdGUoeyB0aXRsZTogJycsIGNvbnRlbnQ6ICcnIH0pO1xuICBjb25zdCBbZmV0Y2hlZERhdGEsIHNldEZldGNoZWREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VzZXJMb2dzLCBzZXRVc2VyTG9nc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlR2xvYmFsU3RhdGUoKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cblxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGJlaGF2aW9yXG4gICAgICBjb25zdCB7IHRpdGxlLCBjb250ZW50IH0gPSBwb3N0RGF0YTtcbiAgXG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGl0bGUgfHwgIWNvbnRlbnQpIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBmaWxsIGluIGFsbCBmaWVsZHMuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9leGFtcGxlLmNvbS9hcGkvcG9zdHMnLCB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1Bvc3QgY3JlYXRlZDonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0UG9zdERhdGEoeyB0aXRsZTogJycsIGNvbnRlbnQ6ICcnIH0pO1xuICAgICAgICBcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBIYW5kbGUgZXJyb3JcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHBvc3Q6JywgZXJyb3IpO1xuICAgICAgYWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIHRoZSBwb3N0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZmV0Y2hQb3N0cygpO1xuICAvLyB9LCBbXSk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBnZXROYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWRcbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2h1aC8nICsgdXNlcl9pZCk7IFxuICAgICAgY29uc3QgbmV3VXNlciA9IHN0YXRlLnVzZXI7XG4gICAgICBuZXdVc2VyLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgY3VycmVudFVzZXI6IG5ld1VzZXJcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgIHNldEZldGNoZWREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gZmV0Y2ggdXNlciBpbmZvcm1hdGlvbiBmcm9tIHRoZSBBUElcbiAgY29uc3QgZmV0Y2hDdXJyZW50VXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoVG9rZW4nKTsgLy8gUmV0cmlldmUgdGhlIGF1dGhlbnRpY2F0aW9uIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZVxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBNYWtlIGFuIGF1dGhlbnRpY2F0ZWQgcmVxdWVzdCB0byBnZXQgdGhlIHVzZXIgaW5mb3JtYXRpb25cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vODAwMC1yeWFuaG93YXJkaC1ob3d0aWN1bHR1ci14MjhpMGh1emE5MS53cy11czEwNC5naXRwb2QuaW8vYXBpL3VzZXJzLycsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgSldUIHRva2VuIGluIHRoZSBoZWFkZXJcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgdGhlIHVzZXIgc3RhdGUgd2l0aCB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VycmVudCB1c2VyOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEN1cnJlbnRVc2VyKCk7XG4gIH0sIFtdKTtcblxuXG5cblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0UG9zdERhdGEoe1xuICAgICAgLi4ucG9zdERhdGEsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pO1xuICB9O1xuICBcblxuXG5cbiAgY29uc3QgeyBmYXZvcml0ZXMgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBmYXZvcml0ZVBsYW50cyA9IEpTT04ucGFyc2UoZmF2b3JpdGVzIHx8ICdbXScpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPlVzZXIgUHJvZmlsZTwvaDI+XG4gICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cD5Vc2VybmFtZToge3VzZXIudXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD5Vc2VyIGluZm9ybWF0aW9uIGlzIG5vdCBhdmFpbGFibGUuPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGgyPkZhdm9yaXRlIFBsYW50czwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZmF2b3JpdGVQbGFudHMubWFwKChwbGFudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57cGxhbnQuY29tbW9uX25hbWV9PC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VHbG9iYWxTdGF0ZSIsImF1dGhTZXJ2aWNlIiwiand0RGVjb2RlIiwiTGluayIsImF4aW9zIiwiTGF5b3V0IiwidXNlUm91dGVyIiwiUHJvZmlsZVBhZ2UiLCJyb3V0ZXIiLCJwb3N0RGF0YSIsInNldFBvc3REYXRhIiwidGl0bGUiLCJjb250ZW50IiwiZmV0Y2hlZERhdGEiLCJzZXRGZXRjaGVkRGF0YSIsInVzZXJMb2dzIiwic2V0VXNlckxvZ3MiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJyZXNwb25zZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiZ2V0TmFtZSIsInVzZXJfaWQiLCJuZXdVc2VyIiwiY3VycmVudFVzZXIiLCJmZXRjaEN1cnJlbnRVc2VyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJoYW5kbGVJbnB1dENoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImZhdm9yaXRlcyIsInF1ZXJ5IiwiZmF2b3JpdGVQbGFudHMiLCJKU09OIiwicGFyc2UiLCJkaXYiLCJoMiIsInAiLCJ1c2VybmFtZSIsInVsIiwibWFwIiwicGxhbnQiLCJpbmRleCIsImxpIiwiY29tbW9uX25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});