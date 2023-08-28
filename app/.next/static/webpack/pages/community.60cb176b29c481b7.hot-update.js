"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/community",{

/***/ "./src/pages/nav/index.js":
/*!********************************!*\
  !*** ./src/pages/nav/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// Add a hover effect by changing the link color on hover\n// linkStyle[':hover'] = {\n//   color: '#FF5733', // Change to the color you want on hover\n// };\nconst Navbar = ()=>{\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, [\n        state.user\n    ]);\n    const { user } = state;\n    const getName = async ()=>{\n        try {\n            console.log(state);\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\" + user_id);\n            const newUser = state.user;\n            newUser.data = response.data;\n            await dispatch({\n                currentUser: newUser\n            });\n            console.log(response.data);\n            setFetchedData(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const fetchUserLogs = async ()=>{\n        try {\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\".concat(user_id));\n            setUserLogs(response.data);\n        } catch (error) {\n            console.error(\"Error fetching user logs:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, []);\n    const navbarStyle = {\n        backgroundColor: \" #FFFFFF\",\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        height: \"60px\",\n        borderBottom: \"3px solid #E0E0E0\",\n        padding: \"0 5px\"\n    };\n    const titular = {\n        fontSize: \"28px\",\n        fontWeight: \"bold\",\n        display: \"flex\",\n        alignItems: \"center\",\n        marginLeft: \"300px\",\n        letterSpacing: \"5px\",\n        fontFamily: \"ClimbingPlant \"\n    };\n    const linkContainerStyle = {\n        listStyleType: \"none\",\n        margin: 0,\n        marginRight: \"400px\",\n        fontFamily: \"KitchyRetro\"\n    };\n    const linkStyle = {\n        color: \"black\",\n        fontWeight: \"bolder\",\n        letterSpacing: \"3px\",\n        textDecoration: \"none\",\n        fontSize: \"25px\",\n        margin: \"0 20px\",\n        transition: \"color 0.3s ease\",\n        wordSpacing: \"8px\"\n    };\n    const firstName = state.user && state.user.data ? state.user.data.first_name.charAt(0).toUpperCase() + state.user.data.first_name.slice(1) : \"Profile\";\n    const handleLogout = ()=>{\n        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__[\"default\"].logout();\n        dispatch({\n            type: \"LOGOUT_USER\"\n        });\n        window.location.href = \"/\"; // Set the URL to the home page\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Plant Database\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 130,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=.3\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 131,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 129,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"howticulture-nav-title\",\n                style: titular,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/favicon.ico\",\n                        style: {\n                            width: \"30px\",\n                            height: \"30px\",\n                            marginRight: \"10px\"\n                        },\n                        alt: \"Icon\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Howticulture\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"KitschyRetro\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: linkContainerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: linkStyle,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 140,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                style: linkStyle,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 141,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/community\",\n                                style: linkStyle,\n                                children: \"Community\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 142,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 142,\n                            columnNumber: 11\n                        }, undefined),\n                        state.user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    style: {\n                                        fontFamily: \"KitschyRetro\"\n                                    },\n                                    className: \"nav-link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/profile\",\n                                        style: linkStyle,\n                                        children: firstName\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                        lineNumber: 146,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                    lineNumber: 145,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    style: {\n                                        fontFamily: \"KitschyRetro\"\n                                    },\n                                    className: \"nav-link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleLogout,\n                                        style: {\n                                            ...linkStyle,\n                                            border: \"none\",\n                                            background: \"none\",\n                                            textDecoration: \"none\"\n                                        },\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                        lineNumber: 149,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                style: linkStyle,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 153,\n                                columnNumber: 77\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 153,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"Qls56tJlJ0SngEH35+pMbeOTVdk=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9oQjtrREFBWUs7Ozs7Ozs7Ozs7OzhDQUV4Qyw4REFBQ3VCO29DQUFHWixPQUFPO3dDQUFFckIsWUFBWTtvQ0FBZTtvQ0FBRzJCLFdBQVU7OENBQ25ELDRFQUFDUTt3Q0FBT0MsU0FBU3JCO3dDQUFjTSxPQUFPOzRDQUFFLEdBQUdoQixTQUFTOzRDQUFFZ0MsUUFBUTs0Q0FBUUMsWUFBWTs0Q0FBUS9CLGdCQUFnQjt3Q0FBTztrREFBRzs7Ozs7Ozs7Ozs7O3lEQUl4SCw4REFBQzBCOzRCQUFHWixPQUFPO2dDQUFFckIsWUFBWTs0QkFBZTs0QkFBRzJCLFdBQVU7c0NBQVcsNEVBQUNPO2dDQUFFZixNQUFLO2dDQUFTRSxPQUFPaEI7MENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0c7R0EzSU0zQzs7UUFDd0JMLGdFQUFjQTtRQUMzQkcsc0RBQVNBOzs7S0FGcEJFO0FBNklOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9uYXYvaW5kZXguanM/NDUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgeyBoYW5kbGVTZWFyY2hDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7IFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZ2xvYmFsLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tICcuLi8uLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG4vLyBBZGQgYSBob3ZlciBlZmZlY3QgYnkgY2hhbmdpbmcgdGhlIGxpbmsgY29sb3Igb24gaG92ZXJcbi8vIGxpbmtTdHlsZVsnOmhvdmVyJ10gPSB7XG4vLyAgIGNvbG9yOiAnI0ZGNTczMycsIC8vIENoYW5nZSB0byB0aGUgY29sb3IgeW91IHdhbnQgb24gaG92ZXJcbi8vIH07XG5cblxuXG5cblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlR2xvYmFsU3RhdGUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICBjb25zdCB1c2VyID0gand0RGVjb2RlKHVzZXJEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YTonLCB1c2VyKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ1NFVF9VU0VSJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHVzZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROYW1lKCk7XG4gICAgZmV0Y2hVc2VyTG9ncygpO1xuICB9LCBbc3RhdGUudXNlcl0pOyBcbiAgY29uc3QgeyB1c2VyIH0gPSBzdGF0ZTtcblxuICBjb25zdCBnZXROYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWRcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovLzgwMDAtcnlhbmhvd2FyZGgtaG93dGljdWx0dXIteDI4aTBodXphOTEud3MtdXMxMDQuZ2l0cG9kLmlvL2FwaS91c2VyLycgKyB1c2VyX2lkKTsgXG4gICAgICBjb25zdCBuZXdVc2VyID0gc3RhdGUudXNlcjtcbiAgICAgIG5ld1VzZXIuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBhd2FpdCBkaXNwYXRjaCh7XG4gICAgICBjdXJyZW50VXNlcjogbmV3VXNlclxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgc2V0RmV0Y2hlZERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAgIGNvbnN0IGZldGNoVXNlckxvZ3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJfaWQgPSBzdGF0ZS51c2VyLnVzZXJfaWQ7IFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vODAwMC1yeWFuaG93YXJkaC1ob3d0aWN1bHR1ci14MjhpMGh1emE5MS53cy11czEwNC5naXRwb2QuaW8vYXBpL3VzZXIvJHt1c2VyX2lkfWApO1xuICAgICAgc2V0VXNlckxvZ3MocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgbG9nczonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TmFtZSgpO1xuICAgIGZldGNoVXNlckxvZ3MoKTsgXG4gIH0sIFtdKTtcblxuICBjb25zdCBuYXZiYXJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcgI0ZGRkZGRicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnNjBweCcsXG4gICAgYm9yZGVyQm90dG9tOiAnM3B4IHNvbGlkICNFMEUwRTAnLFxuICAgIHBhZGRpbmc6ICcwIDVweCcsXG4gIH07XG5cbiAgY29uc3QgdGl0dWxhciA9IHtcbiAgICBmb250U2l6ZTogJzI4cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luTGVmdDogJzMwMHB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnNXB4JyxcbiAgICBmb250RmFtaWx5OiAnQ2xpbWJpbmdQbGFudCAnLFxuICB9O1xuXG4gIGNvbnN0IGxpbmtDb250YWluZXJTdHlsZSA9IHtcblxuICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luUmlnaHQ6ICc0MDBweCcsXG4gICAgZm9udEZhbWlseTonS2l0Y2h5UmV0cm8nLFxuICB9O1xuXG4gIGNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICBmb250V2VpZ2h0Oidib2xkZXInLFxuICAgIGxldHRlclNwYWNpbmc6JzNweCcsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBmb250U2l6ZTogJzI1cHgnLFxuICAgIG1hcmdpbjogJzAgMjBweCcsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuM3MgZWFzZScsXG4gICAgd29yZFNwYWNpbmc6ICc4cHgnLFxuICB9O1xuXG4gIGNvbnN0IGZpcnN0TmFtZSA9IHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5kYXRhXG4gID8gc3RhdGUudXNlci5kYXRhLmZpcnN0X25hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdGF0ZS51c2VyLmRhdGEuZmlyc3RfbmFtZS5zbGljZSgxKVxuICA6ICdQcm9maWxlJztcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgQXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9HT1VUX1VTRVInIH0pO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nOyAvLyBTZXQgdGhlIFVSTCB0byB0aGUgaG9tZSBwYWdlXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICBcbiAgICA8bmF2IHN0eWxlPXtuYXZiYXJTdHlsZX0+XG4gICAgPEhlYWQ+XG4gICAgPHRpdGxlPlBsYW50IERhdGFiYXNlPC90aXRsZT5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPS4zXCIgLz5cblxuICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvd3RpY3VsdHVyZS1uYXYtdGl0bGVcIiBzdHlsZT17dGl0dWxhcn0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2Zhdmljb24uaWNvXCIgc3R5bGU9e3sgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gYWx0PVwiSWNvblwiIC8+XG4gICAgICAgIEhvd3RpY3VsdHVyZVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nIH19PlxuICAgICAgICA8dWwgc3R5bGU9e2xpbmtDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgPGxpIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nIH19IGNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvXCIgc3R5bGU9e2xpbmtTdHlsZX0gPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udEZhbWlseTogJ0tpdHNjaHlSZXRybycgfX0gY2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9hYm91dFwiIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPjwvbGk+XG4gICAgICAgICAgPGxpIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nIH19IGNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvY29tbXVuaXR5XCIgc3R5bGU9e2xpbmtTdHlsZX0+Q29tbXVuaXR5PC9hPjwvbGk+XG4gICAgICAgICAge3N0YXRlLnVzZXIgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udEZhbWlseTogJ0tpdHNjaHlSZXRybycgfX0gY2xhc3NOYW1lPSduYXYtbGluayc+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9maWxlXCIgc3R5bGU9e2xpbmtTdHlsZX0+e2ZpcnN0TmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBmb250RmFtaWx5OiAnS2l0c2NoeVJldHJvJyB9fSBjbGFzc05hbWU9J25hdi1saW5rJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gc3R5bGU9e3sgLi4ubGlua1N0eWxlLCBib3JkZXI6ICdub25lJywgYmFja2dyb3VuZDogJ25vbmUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PkxvZ291dDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyBmb250RmFtaWx5OiAnS2l0c2NoeVJldHJvJyB9fSBjbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL2xvZ2luXCIgc3R5bGU9e2xpbmtTdHlsZX0+TG9naW48L2E+PC9saT5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZVNlYXJjaENsaWNrIiwic3R5bGVzIiwidXNlR2xvYmFsU3RhdGUiLCJqd3REZWNvZGUiLCJBdXRoU2VydmljZSIsInVzZVJvdXRlciIsIkhlYWQiLCJOYXZiYXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwicm91dGVyIiwiZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UiLCJ1c2VyRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiZ2V0TmFtZSIsImZldGNoVXNlckxvZ3MiLCJ1c2VyX2lkIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsIm5ld1VzZXIiLCJkYXRhIiwiY3VycmVudFVzZXIiLCJzZXRGZXRjaGVkRGF0YSIsImVycm9yIiwic2V0VXNlckxvZ3MiLCJuYXZiYXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nIiwidGl0dWxhciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udEZhbWlseSIsImxpbmtDb250YWluZXJTdHlsZSIsImxpc3RTdHlsZVR5cGUiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsImxpbmtTdHlsZSIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwid29yZFNwYWNpbmciLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImhhbmRsZUxvZ291dCIsImxvZ291dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm5hdiIsInN0eWxlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsInVsIiwibGkiLCJhIiwiYnV0dG9uIiwib25DbGljayIsImJvcmRlciIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});