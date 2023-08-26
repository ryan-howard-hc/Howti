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

/***/ "./src/pages/nav/index.js":
/*!********************************!*\
  !*** ./src/pages/nav/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Add a hover effect by changing the link color on hover\n// linkStyle[':hover'] = {\n//   color: '#FF5733', // Change to the color you want on hover\n// };\nconst Navbar = ()=>{\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, [\n        state.user\n    ]);\n    const { user } = state;\n    const getName = async ()=>{\n        try {\n            console.log(state);\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\" + user_id);\n            const newUser = state.user;\n            newUser.data = response.data;\n            await dispatch({\n                currentUser: newUser\n            });\n            console.log(response.data);\n            setFetchedData(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const fetchUserLogs = async ()=>{\n        try {\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\".concat(user_id));\n            setUserLogs(response.data);\n        } catch (error) {\n            console.error(\"Error fetching user logs:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, []);\n    const navbarStyle = {\n        backgroundColor: \" #FFFFFF\",\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        height: \"60px\",\n        borderBottom: \"3px solid #E0E0E0\",\n        padding: \"0 5px\"\n    };\n    const titular = {\n        fontSize: \"28px\",\n        fontWeight: \"bold\",\n        display: \"flex\",\n        alignItems: \"center\",\n        marginLeft: \"300px\",\n        letterSpacing: \"5px\",\n        fontFamily: \"ClimbingPlant \"\n    };\n    const linkContainerStyle = {\n        display: \"flex\",\n        listStyleType: \"none\",\n        margin: 0,\n        marginRight: \"300px\",\n        fontFamily: \"KitchyRetro\"\n    };\n    const linkStyle = {\n        color: \"black\",\n        fontWeight: \"bolder\",\n        letterSpacing: \"3px\",\n        textDecoration: \"none\",\n        fontSize: \"25px\",\n        margin: \"0 20px\",\n        transition: \"color 0.3s ease\",\n        wordSpacing: \"8px\"\n    };\n    const firstName = state.user && state.user.data ? state.user.data.first_name.charAt(0).toUpperCase() + state.user.data.first_name.slice(1) : \"Profile\";\n    const handleLogout = ()=>{\n        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__[\"default\"].logout();\n        dispatch({\n            type: \"LOGOUT_USER\"\n        });\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"howticulture-nav-title\",\n                style: titular,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/favicon.ico\",\n                        style: {\n                            width: \"30px\",\n                            height: \"30px\",\n                            marginRight: \"10px\"\n                        },\n                        alt: \"Icon\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Howticulture\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"KitschyRetro\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: linkContainerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: linkStyle,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 134,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                style: linkStyle,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 135,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/community\",\n                                style: linkStyle,\n                                children: \"Community\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 136,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, undefined),\n                        state.user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    style: {\n                                        fontFamily: \"KitschyRetro\"\n                                    },\n                                    className: \"nav-link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/profile\",\n                                        style: linkStyle,\n                                        children: firstName\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                        lineNumber: 140,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    style: {\n                                        fontFamily: \"KitschyRetro\"\n                                    },\n                                    className: \"nav-link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleLogout,\n                                        style: {\n                                            ...linkStyle,\n                                            border: \"none\",\n                                            background: \"none\",\n                                            textDecoration: \"none\"\n                                        },\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                    lineNumber: 142,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                style: linkStyle,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 147,\n                                columnNumber: 77\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 147,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"Qls56tJlJ0SngEH35+pMbeOTVdk=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tzs0Q0FBRSxHQUFHZCxTQUFTOzRDQUFFMkIsUUFBUTs0Q0FBUUMsWUFBWTs0Q0FBUTFCLGdCQUFnQjt3Q0FBTztrREFBRzs7Ozs7Ozs7Ozs7O3lEQUl4SCw4REFBQ29COzRCQUFHUixPQUFPO2dDQUFFbkIsWUFBWTs0QkFBZTs0QkFBR3FCLFdBQVU7c0NBQVcsNEVBQUNPO2dDQUFFQyxNQUFLO2dDQUFTVixPQUFPZDswQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0vRztHQXJJTTNDOztRQUN3QkosZ0VBQWNBO1FBQzNCRyxzREFBU0E7OztLQUZwQkM7QUF1SU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25hdi9pbmRleC5qcz80NTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IGhhbmRsZVNlYXJjaENsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJzsgXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gJy4uLy4uL2NvbnRleHQvR2xvYmFsU3RhdGUnO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuXG4vLyBBZGQgYSBob3ZlciBlZmZlY3QgYnkgY2hhbmdpbmcgdGhlIGxpbmsgY29sb3Igb24gaG92ZXJcbi8vIGxpbmtTdHlsZVsnOmhvdmVyJ10gPSB7XG4vLyAgIGNvbG9yOiAnI0ZGNTczMycsIC8vIENoYW5nZSB0byB0aGUgY29sb3IgeW91IHdhbnQgb24gaG92ZXJcbi8vIH07XG5cblxuXG5cblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlR2xvYmFsU3RhdGUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICBjb25zdCB1c2VyID0gand0RGVjb2RlKHVzZXJEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YTonLCB1c2VyKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ1NFVF9VU0VSJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHVzZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROYW1lKCk7XG4gICAgZmV0Y2hVc2VyTG9ncygpO1xuICB9LCBbc3RhdGUudXNlcl0pOyBcbiAgY29uc3QgeyB1c2VyIH0gPSBzdGF0ZTtcblxuICBjb25zdCBnZXROYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWRcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovLzgwMDAtcnlhbmhvd2FyZGgtaG93dGljdWx0dXIteDI4aTBodXphOTEud3MtdXMxMDQuZ2l0cG9kLmlvL2FwaS91c2VyLycgKyB1c2VyX2lkKTsgXG4gICAgICBjb25zdCBuZXdVc2VyID0gc3RhdGUudXNlcjtcbiAgICAgIG5ld1VzZXIuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBhd2FpdCBkaXNwYXRjaCh7XG4gICAgICBjdXJyZW50VXNlcjogbmV3VXNlclxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgc2V0RmV0Y2hlZERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAgIGNvbnN0IGZldGNoVXNlckxvZ3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWQ7IFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vODAwMC1yeWFuaG93YXJkaC1ob3d0aWN1bHR1ci14MjhpMGh1emE5MS53cy11czEwNC5naXRwb2QuaW8vYXBpL3VzZXIvJHt1c2VyX2lkfWApO1xuICAgICAgc2V0VXNlckxvZ3MocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgbG9nczonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TmFtZSgpO1xuICAgIGZldGNoVXNlckxvZ3MoKTsgXG4gIH0sIFtdKTtcblxuICBjb25zdCBuYXZiYXJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcgI0ZGRkZGRicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnNjBweCcsXG4gICAgYm9yZGVyQm90dG9tOiAnM3B4IHNvbGlkICNFMEUwRTAnLFxuICAgIHBhZGRpbmc6ICcwIDVweCcsXG4gIH07XG5cbiAgY29uc3QgdGl0dWxhciA9IHtcbiAgICBmb250U2l6ZTogJzI4cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luTGVmdDogJzMwMHB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnNXB4JyxcbiAgICBmb250RmFtaWx5OiAnQ2xpbWJpbmdQbGFudCAnLFxuICB9O1xuXG4gIGNvbnN0IGxpbmtDb250YWluZXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5SaWdodDogJzMwMHB4JyxcbiAgICBmb250RmFtaWx5OidLaXRjaHlSZXRybycsXG4gIH07XG5cbiAgY29uc3QgbGlua1N0eWxlID0ge1xuICAgIGNvbG9yOiAnYmxhY2snLFxuICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXG4gICAgbGV0dGVyU3BhY2luZzonM3B4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGZvbnRTaXplOiAnMjVweCcsXG4gICAgbWFyZ2luOiAnMCAyMHB4JyxcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4zcyBlYXNlJyxcbiAgICB3b3JkU3BhY2luZzogJzhweCcsXG4gIH07XG5cbiAgY29uc3QgZmlyc3ROYW1lID0gc3RhdGUudXNlciAmJiBzdGF0ZS51c2VyLmRhdGFcbiAgPyBzdGF0ZS51c2VyLmRhdGEuZmlyc3RfbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0YXRlLnVzZXIuZGF0YS5maXJzdF9uYW1lLnNsaWNlKDEpXG4gIDogJ1Byb2ZpbGUnO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBBdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdMT0dPVVRfVVNFUicgfSk7XG4gICAgcm91dGVyLnB1c2goJy8nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgc3R5bGU9e25hdmJhclN0eWxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG93dGljdWx0dXJlLW5hdi10aXRsZVwiIHN0eWxlPXt0aXR1bGFyfT5cbiAgICAgICAgPGltZyBzcmM9XCIvZmF2aWNvbi5pY29cIiBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fSBhbHQ9XCJJY29uXCIgLz5cbiAgICAgICAgSG93dGljdWx0dXJlXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogJ0tpdHNjaHlSZXRybycgfX0+XG4gICAgICAgIDx1bCBzdHlsZT17bGlua0NvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udEZhbWlseTogJ0tpdHNjaHlSZXRybycgfX0gY2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9cIiBzdHlsZT17bGlua1N0eWxlfSA+SG9tZTwvYT48L2xpPlxuICAgICAgICAgIDxsaSBzdHlsZT17eyBmb250RmFtaWx5OiAnS2l0c2NoeVJldHJvJyB9fSBjbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL2Fib3V0XCIgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udEZhbWlseTogJ0tpdHNjaHlSZXRybycgfX0gY2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9jb21tdW5pdHlcIiBzdHlsZT17bGlua1N0eWxlfT5Db21tdW5pdHk8L2E+PC9saT5cbiAgICAgICAgICB7c3RhdGUudXNlciA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBmb250RmFtaWx5OiAnS2l0c2NoeVJldHJvJyB9fSBjbGFzc05hbWU9J25hdi1saW5rJz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Byb2ZpbGVcIiBzdHlsZT17bGlua1N0eWxlfT57Zmlyc3ROYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nIH19IGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fSBzdHlsZT17eyAuLi5saW5rU3R5bGUsIGJvcmRlcjogJ25vbmUnLCBiYWNrZ3JvdW5kOiAnbm9uZScsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+TG9nb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nIH19IGNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvbG9naW5cIiBzdHlsZT17bGlua1N0eWxlfT5Mb2dpbjwvYT48L2xpPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJzdHlsZXMiLCJ1c2VHbG9iYWxTdGF0ZSIsImp3dERlY29kZSIsIkF1dGhTZXJ2aWNlIiwidXNlUm91dGVyIiwiTmF2YmFyIiwic3RhdGUiLCJkaXNwYXRjaCIsInJvdXRlciIsImdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIiwidXNlckRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImdldE5hbWUiLCJmZXRjaFVzZXJMb2dzIiwidXNlcl9pZCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJuZXdVc2VyIiwiZGF0YSIsImN1cnJlbnRVc2VyIiwic2V0RmV0Y2hlZERhdGEiLCJlcnJvciIsInNldFVzZXJMb2dzIiwibmF2YmFyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyQm90dG9tIiwicGFkZGluZyIsInRpdHVsYXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwibGV0dGVyU3BhY2luZyIsImZvbnRGYW1pbHkiLCJsaW5rQ29udGFpbmVyU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJsaW5rU3R5bGUiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwidHJhbnNpdGlvbiIsIndvcmRTcGFjaW5nIiwiZmlyc3ROYW1lIiwiZmlyc3RfbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJoYW5kbGVMb2dvdXQiLCJsb2dvdXQiLCJwdXNoIiwibmF2Iiwic3R5bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsInVsIiwibGkiLCJhIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJib3JkZXIiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});