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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout */ \"./src/pages/layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\"\n    });\n    const [fetchedData, setFetchedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userLogs, setUserLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    const handleFormSubmit = async (e)=>{\n        e.preventDefault(); // Prevent the default form submission behavior\n        // Assuming you have postData state that contains the form input values\n        const { title, content } = postData;\n        try {\n            // Validation logic (you can add more specific validation as needed)\n            if (!title || !content) {\n                alert(\"Please fill in all fields.\");\n                return;\n            }\n            // Make an API request or perform an action here (e.g., create a post)\n            // Example using axios:\n            const response1 = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://example.com/api/posts\", {\n                title,\n                content\n            });\n            // Handle success\n            console.log(\"Post created:\", response1.data);\n            // Clear the form inputs or reset the state as needed\n            setPostData({\n                title: \"\",\n                content: \"\"\n            });\n        // You can also update the UI or state to reflect the new post if needed\n        } catch (error) {\n            // Handle error\n            console.error(\"Error creating post:\", error);\n            alert(\"An error occurred while creating the post. Please try again later.\");\n        }\n    };\n    // useEffect(() => {\n    //   fetchPosts();\n    // }, []);\n    // ---------------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------------\n    const getName = async ()=>{\n        try {\n            console.log(state);\n            const user_id = state.user.user_id;\n            // const response = await axios.get('http://127.0.0.1:8000/api/huh/' + user_id); \n            const newUser = state.user;\n            newUser.data = response.data;\n            await dispatch({\n                currentUser: newUser\n            });\n            console.log(response.data);\n            setFetchedData(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const fetchUserLogs = async ()=>{\n        try {\n            const user_id = state.user.user_id;\n            // const response = await axios.get(`http://127.0.0.1:8000/api/user-logs/?user_id=${user_id}`);\n            setUserLogs(response.data);\n        } catch (error) {\n            console.error(\"Error fetching user logs:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, []);\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setPostData({\n            ...postData,\n            [name]: value\n        });\n    };\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"User Profile\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    state.user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Name: \",\n                                    state.user.username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Email: \",\n                                    state.user.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"User information is not available.\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n            lineNumber: 99,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"9aGmN0OqD4yKQRoD947lwYEH0TU=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7b0NBQVExQixNQUFNYyxJQUFJLENBQUNjLEtBQUs7Ozs7Ozs7O3FEQUc3Qiw4REFBQ0Y7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTYjtHQS9HTW5DOztRQUlzQk4sZ0VBQWNBOzs7S0FKcENNO0FBaUhOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9maWxlLmpzP2ViMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsU3RhdGUnO1xuaW1wb3J0IGF1dGhTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7IFxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XG5cbmNvbnN0IFByb2ZpbGVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcG9zdERhdGEsIHNldFBvc3REYXRhXSA9IHVzZVN0YXRlKHsgdGl0bGU6ICcnLCBjb250ZW50OiAnJyB9KTtcbiAgY29uc3QgW2ZldGNoZWREYXRhLCBzZXRGZXRjaGVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1c2VyTG9ncywgc2V0VXNlckxvZ3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUdsb2JhbFN0YXRlKCk7XG4gIFxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGJlaGF2aW9yXG4gIFxuICAgIC8vIEFzc3VtaW5nIHlvdSBoYXZlIHBvc3REYXRhIHN0YXRlIHRoYXQgY29udGFpbnMgdGhlIGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgY29uc3QgeyB0aXRsZSwgY29udGVudCB9ID0gcG9zdERhdGE7XG4gIFxuICAgIHRyeSB7XG4gICAgICAvLyBWYWxpZGF0aW9uIGxvZ2ljICh5b3UgY2FuIGFkZCBtb3JlIHNwZWNpZmljIHZhbGlkYXRpb24gYXMgbmVlZGVkKVxuICAgICAgaWYgKCF0aXRsZSB8fCAhY29udGVudCkge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkcy4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICBcbiAgICAgIC8vIE1ha2UgYW4gQVBJIHJlcXVlc3Qgb3IgcGVyZm9ybSBhbiBhY3Rpb24gaGVyZSAoZS5nLiwgY3JlYXRlIGEgcG9zdClcbiAgICAgIC8vIEV4YW1wbGUgdXNpbmcgYXhpb3M6XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9leGFtcGxlLmNvbS9hcGkvcG9zdHMnLCB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSk7XG4gIFxuICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3NcbiAgICAgIGNvbnNvbGUubG9nKCdQb3N0IGNyZWF0ZWQ6JywgcmVzcG9uc2UuZGF0YSk7XG4gIFxuICAgICAgLy8gQ2xlYXIgdGhlIGZvcm0gaW5wdXRzIG9yIHJlc2V0IHRoZSBzdGF0ZSBhcyBuZWVkZWRcbiAgICAgIHNldFBvc3REYXRhKHsgdGl0bGU6ICcnLCBjb250ZW50OiAnJyB9KTtcbiAgXG4gICAgICAvLyBZb3UgY2FuIGFsc28gdXBkYXRlIHRoZSBVSSBvciBzdGF0ZSB0byByZWZsZWN0IHRoZSBuZXcgcG9zdCBpZiBuZWVkZWRcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSGFuZGxlIGVycm9yXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwb3N0OicsIGVycm9yKTtcbiAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjcmVhdGluZyB0aGUgcG9zdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcbiAgICB9XG4gIH07XG5cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoUG9zdHMoKTtcbiAgLy8gfSwgW10pO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgZ2V0TmFtZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgICBjb25zdCB1c2VyX2lkID0gc3RhdGUudXNlci51c2VyX2lkXG4gICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9odWgvJyArIHVzZXJfaWQpOyBcbiAgICAgIGNvbnN0IG5ld1VzZXIgPSBzdGF0ZS51c2VyO1xuICAgICAgbmV3VXNlci5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKHtcbiAgICAgIGN1cnJlbnRVc2VyOiBuZXdVc2VyXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICBzZXRGZXRjaGVkRGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZldGNoVXNlckxvZ3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWQ7IFxuICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlci1sb2dzLz91c2VyX2lkPSR7dXNlcl9pZH1gKTtcbiAgICAgIHNldFVzZXJMb2dzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGxvZ3M6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5hbWUoKTtcbiAgICBmZXRjaFVzZXJMb2dzKCk7IFxuICB9LCBbXSk7XG5cblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0UG9zdERhdGEoe1xuICAgICAgLi4ucG9zdERhdGEsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pO1xuICB9O1xuICBcbiAgY29uc3QgW2Zhdm9yaXRlcywgc2V0RmF2b3JpdGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPGRpdj5cblxuXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlVzZXIgUHJvZmlsZTwvaDI+XG4gICAgICAgIHtzdGF0ZS51c2VyID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cD5OYW1lOiB7c3RhdGUudXNlci51c2VybmFtZX08L3A+XG4gICAgICAgICAgICA8cD5FbWFpbDoge3N0YXRlLnVzZXIuZW1haWx9PC9wPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPlVzZXIgaW5mb3JtYXRpb24gaXMgbm90IGF2YWlsYWJsZS48L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuXG5cbiAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlR2xvYmFsU3RhdGUiLCJhdXRoU2VydmljZSIsImp3dERlY29kZSIsIkxpbmsiLCJheGlvcyIsIkxheW91dCIsIlByb2ZpbGVQYWdlIiwicG9zdERhdGEiLCJzZXRQb3N0RGF0YSIsInRpdGxlIiwiY29udGVudCIsImZldGNoZWREYXRhIiwic2V0RmV0Y2hlZERhdGEiLCJ1c2VyTG9ncyIsInNldFVzZXJMb2dzIiwic3RhdGUiLCJkaXNwYXRjaCIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJnZXROYW1lIiwidXNlcl9pZCIsInVzZXIiLCJuZXdVc2VyIiwiY3VycmVudFVzZXIiLCJmZXRjaFVzZXJMb2dzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJmYXZvcml0ZXMiLCJzZXRGYXZvcml0ZXMiLCJkaXYiLCJoMiIsInAiLCJ1c2VybmFtZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});