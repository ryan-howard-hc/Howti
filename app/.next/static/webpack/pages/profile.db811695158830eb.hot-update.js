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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout */ \"./src/pages/layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\"\n    });\n    const [fetchedData, setFetchedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userLogs, setUserLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, [\n        state.user\n    ]);\n    //----------------------\n    const getName = async ()=>{\n        try {\n            console.log(state);\n            const user_id = state.user.user_id;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://127.0.0.1:8000/api/huh/\" + user_id);\n            const newUser = state.user;\n            newUser.data = response.data;\n            await dispatch({\n                currentUser: newUser\n            });\n            console.log(response.data);\n            setFetchedData(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const fetchUserLogs = async ()=>{\n        try {\n            const user_id = state.user.user_id;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://127.0.0.1:8000/api/user-log/\".concat(user_id));\n            setUserLogs(response.data);\n        } catch (error) {\n            console.error(\"Error fetching user logs:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, []);\n    //-------------\n    const deleteLog = async (logId)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"][\"delete\"](\"http://127.0.0.1:8000/api/user-logs/\".concat(logId));\n            setUserLogs((prevLogs)=>prevLogs.filter((log)=>log.log_id !== logId));\n        } catch (error) {\n            console.error(\"Error deleting user log:\", error);\n        }\n    };\n    const { favorites } = router.query;\n    const favoritePlants = JSON.parse(favorites || \"[]\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: state.user && state.user.data ? \"\".concat(state.user.data.first_name, \", \").concat(state.user.data.last_name) : \"User\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                    lineNumber: 91,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Favorite Plants\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: favoritePlants.map((plant, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: plant.common_name\n                        }, index, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/Howti/app/src/pages/profile.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"2mf6+WJzccWZMidl2Ocs0CWScNI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxJQUFJLENBQUNrQixJQUFJLEdBQzFCLEdBQWtDcEIsT0FBL0JBLE1BQU1FLElBQUksQ0FBQ2tCLElBQUksQ0FBQ2UsVUFBVSxFQUFDLE1BQThCLE9BQTFCbkMsTUFBTUUsSUFBSSxDQUFDa0IsSUFBSSxDQUFDZ0IsU0FBUyxJQUMzRDs7Ozs7OzhCQUdGLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQzs4QkFDRVIsZUFBZVMsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUMxQiw4REFBQ0M7c0NBQWdCRixNQUFNRyxXQUFXOzJCQUF6QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQjtHQWhHTW5EOztRQUNXRCxrREFBU0E7UUFJRU4sZ0VBQWNBOzs7S0FMcENPO0FBa0dOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9maWxlLmpzP2ViMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsU3RhdGUnO1xuaW1wb3J0IGF1dGhTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7IFxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IFByb2ZpbGVQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Bvc3REYXRhLCBzZXRQb3N0RGF0YV0gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJywgY29udGVudDogJycgfSk7XG4gIGNvbnN0IFtmZXRjaGVkRGF0YSwgc2V0RmV0Y2hlZERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlckxvZ3MsIHNldFVzZXJMb2dzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICBjb25zdCB1c2VyID0gand0RGVjb2RlKHVzZXJEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YTonLCB1c2VyKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ1NFVF9VU0VSJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHVzZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROYW1lKCk7XG4gICAgZmV0Y2hVc2VyTG9ncygpO1xuICB9LCBbc3RhdGUudXNlcl0pOyBcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBnZXROYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWRcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2h1aC8nICsgdXNlcl9pZCk7IFxuICAgICAgY29uc3QgbmV3VXNlciA9IHN0YXRlLnVzZXI7XG4gICAgICBuZXdVc2VyLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgY3VycmVudFVzZXI6IG5ld1VzZXJcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgIHNldEZldGNoZWREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cblxuICBjb25zdCBmZXRjaFVzZXJMb2dzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyX2lkID0gc3RhdGUudXNlci51c2VyX2lkOyBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VzZXItbG9nLyR7dXNlcl9pZH1gKTtcbiAgICAgIHNldFVzZXJMb2dzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGxvZ3M6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5hbWUoKTtcbiAgICBmZXRjaFVzZXJMb2dzKCk7IFxuICB9LCBbXSk7XG5cbiAgLy8tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IGRlbGV0ZUxvZyA9IGFzeW5jIChsb2dJZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS91c2VyLWxvZ3MvJHtsb2dJZH1gKTtcbiAgICAgIHNldFVzZXJMb2dzKChwcmV2TG9ncykgPT4gcHJldkxvZ3MuZmlsdGVyKChsb2cpID0+IGxvZy5sb2dfaWQgIT09IGxvZ0lkKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHVzZXIgbG9nOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gIFxuXG5cblxuICBjb25zdCB7IGZhdm9yaXRlcyB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IGZhdm9yaXRlUGxhbnRzID0gSlNPTi5wYXJzZShmYXZvcml0ZXMgfHwgJ1tdJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgIDxwPlxuICAgICAge3N0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5kYXRhXG4gICAgICAgID8gYCR7c3RhdGUudXNlci5kYXRhLmZpcnN0X25hbWV9LCAke3N0YXRlLnVzZXIuZGF0YS5sYXN0X25hbWV9YFxuICAgICAgICA6ICdVc2VyJ31cbiAgICA8L3A+XG4gICAgICAgIFxuICAgICAgICA8aDI+RmF2b3JpdGUgUGxhbnRzPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtmYXZvcml0ZVBsYW50cy5tYXAoKHBsYW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntwbGFudC5jb21tb25fbmFtZX08L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUdsb2JhbFN0YXRlIiwiYXV0aFNlcnZpY2UiLCJqd3REZWNvZGUiLCJMaW5rIiwiYXhpb3MiLCJMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJQcm9maWxlUGFnZSIsInJvdXRlciIsInBvc3REYXRhIiwic2V0UG9zdERhdGEiLCJ0aXRsZSIsImNvbnRlbnQiLCJmZXRjaGVkRGF0YSIsInNldEZldGNoZWREYXRhIiwidXNlckxvZ3MiLCJzZXRVc2VyTG9ncyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic2V0VXNlciIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSIsInVzZXJEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImdldE5hbWUiLCJmZXRjaFVzZXJMb2dzIiwidXNlcl9pZCIsInJlc3BvbnNlIiwiZ2V0IiwibmV3VXNlciIsImRhdGEiLCJlcnJvciIsImRlbGV0ZUxvZyIsImxvZ0lkIiwiZGVsZXRlIiwicHJldkxvZ3MiLCJmaWx0ZXIiLCJsb2dfaWQiLCJmYXZvcml0ZXMiLCJxdWVyeSIsImZhdm9yaXRlUGxhbnRzIiwiSlNPTiIsInBhcnNlIiwiZGl2IiwicCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJoMiIsInVsIiwibWFwIiwicGxhbnQiLCJpbmRleCIsImxpIiwiY29tbW9uX25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});