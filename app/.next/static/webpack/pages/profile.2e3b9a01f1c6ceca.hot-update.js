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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout */ \"./src/pages/layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\"\n    });\n    const [fetchedData, setFetchedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userLogs, setUserLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    const handleFormSubmit = async (e)=>{\n        e.preventDefault(); // Prevent the default form submission behavior\n        const { title, content } = postData;\n        try {\n            if (!title || !content) {\n                alert(\"Please fill in all fields.\");\n                return;\n            }\n            const response1 = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"http://example.com/api/posts\", {\n                title,\n                content\n            });\n            console.log(\"Post created:\", response1.data);\n            setPostData({\n                title: \"\",\n                content: \"\"\n            });\n        } catch (error) {\n            // Handle error\n            console.error(\"Error creating post:\", error);\n            alert(\"An error occurred while creating the post. Please try again later.\");\n        }\n    };\n    // useEffect(() => {\n    //   fetchPosts();\n    // }, []);\n    // ---------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------\n    const fetchUserInfo = async ()=>{\n        try {\n            const response1 = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/users/\");\n            setUser(response1.data);\n        } catch (error) {\n            console.error(\"Error fetching user info:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchUserInfo();\n    }, []);\n    const fetchUserLogs = async ()=>{\n        try {\n            const user_id = state.user.user_id;\n            // const response = await axios.get(`http://127.0.0.1:8000/api/user-logs/?users=${user_id}`);\n            setUserLogs(response.data);\n        } catch (error) {\n            console.error(\"Error fetching user logs:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, []);\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setPostData({\n            ...postData,\n            [name]: value\n        });\n    };\n    const { favorites } = router.query;\n    const favoritePlants = JSON.parse(favorites || \"[]\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"User Profile\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 99,\n                            columnNumber: 9\n                        }, undefined),\n                        user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Name: \",\n                                        user.username\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Email: \",\n                                        user.email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"User information is not available.\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Favorite Plants\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                    lineNumber: 110,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: favoritePlants.map((plant, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: plant.common_name\n                        }, index, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                    lineNumber: 111,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n            lineNumber: 94,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"R0B18XxIFgJ/jzyhDmX8vq7LWWw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXpCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25CO0dBOUdNOUM7O1FBQ1dELGtEQUFTQTtRQUlFTixnRUFBY0E7OztLQUxwQ087QUFnSE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2ZpbGUuanM/ZWIzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxTdGF0ZSc7XG5pbXBvcnQgYXV0aFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgUHJvZmlsZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbcG9zdERhdGEsIHNldFBvc3REYXRhXSA9IHVzZVN0YXRlKHsgdGl0bGU6ICcnLCBjb250ZW50OiAnJyB9KTtcbiAgY29uc3QgW2ZldGNoZWREYXRhLCBzZXRGZXRjaGVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1c2VyTG9ncywgc2V0VXNlckxvZ3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUdsb2JhbFN0YXRlKCk7XG5cblxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGJlaGF2aW9yXG4gICAgICBjb25zdCB7IHRpdGxlLCBjb250ZW50IH0gPSBwb3N0RGF0YTtcbiAgXG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGl0bGUgfHwgIWNvbnRlbnQpIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBmaWxsIGluIGFsbCBmaWVsZHMuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9leGFtcGxlLmNvbS9hcGkvcG9zdHMnLCB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1Bvc3QgY3JlYXRlZDonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0UG9zdERhdGEoeyB0aXRsZTogJycsIGNvbnRlbnQ6ICcnIH0pO1xuICAgICAgICBcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBIYW5kbGUgZXJyb3JcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHBvc3Q6JywgZXJyb3IpO1xuICAgICAgYWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIHRoZSBwb3N0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgIH1cbiAgfTtcblxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZmV0Y2hQb3N0cygpO1xuICAvLyB9LCBbXSk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBmZXRjaFVzZXJJbmZvID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly84MDAwLXJ5YW5ob3dhcmRoLWhvd3RpY3VsdHVyLXgyOGkwaHV6YTkxLndzLXVzMTA0LmdpdHBvZC5pby9hcGkvdXNlcnMvJyk7XG4gICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGluZm86JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVXNlckluZm8oKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZldGNoVXNlckxvZ3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWQ7IFxuICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlci1sb2dzLz91c2Vycz0ke3VzZXJfaWR9YCk7XG4gICAgICBzZXRVc2VyTG9ncyhyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciBsb2dzOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROYW1lKCk7XG4gICAgZmV0Y2hVc2VyTG9ncygpOyBcbiAgfSwgW10pO1xuXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldFBvc3REYXRhKHtcbiAgICAgIC4uLnBvc3REYXRhLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfTtcbiAgXG5cblxuXG4gIGNvbnN0IHsgZmF2b3JpdGVzIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgZmF2b3JpdGVQbGFudHMgPSBKU09OLnBhcnNlKGZhdm9yaXRlcyB8fCAnW10nKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPGRpdj5cblxuXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlVzZXIgUHJvZmlsZTwvaDI+XG4gICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cD5OYW1lOiB7dXNlci51c2VybmFtZX08L3A+XG4gICAgICAgICAgICA8cD5FbWFpbDoge3VzZXIuZW1haWx9PC9wPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPlVzZXIgaW5mb3JtYXRpb24gaXMgbm90IGF2YWlsYWJsZS48L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGgyPkZhdm9yaXRlIFBsYW50czwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgIHtmYXZvcml0ZVBsYW50cy5tYXAoKHBsYW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57cGxhbnQuY29tbW9uX25hbWV9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuXG4gICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUdsb2JhbFN0YXRlIiwiYXV0aFNlcnZpY2UiLCJqd3REZWNvZGUiLCJMaW5rIiwiYXhpb3MiLCJMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJQcm9maWxlUGFnZSIsInJvdXRlciIsInBvc3REYXRhIiwic2V0UG9zdERhdGEiLCJ0aXRsZSIsImNvbnRlbnQiLCJmZXRjaGVkRGF0YSIsInNldEZldGNoZWREYXRhIiwidXNlckxvZ3MiLCJzZXRVc2VyTG9ncyIsInN0YXRlIiwiZGlzcGF0Y2giLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJyZXNwb25zZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiZmV0Y2hVc2VySW5mbyIsImdldCIsInNldFVzZXIiLCJmZXRjaFVzZXJMb2dzIiwidXNlcl9pZCIsInVzZXIiLCJnZXROYW1lIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJmYXZvcml0ZXMiLCJxdWVyeSIsImZhdm9yaXRlUGxhbnRzIiwiSlNPTiIsInBhcnNlIiwiZGl2IiwiaDIiLCJwIiwidXNlcm5hbWUiLCJlbWFpbCIsInVsIiwibWFwIiwicGxhbnQiLCJpbmRleCIsImxpIiwiY29tbW9uX25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});