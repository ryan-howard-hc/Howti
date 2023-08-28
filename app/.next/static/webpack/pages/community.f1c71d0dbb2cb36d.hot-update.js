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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// Add a hover effect by changing the link color on hover\n// linkStyle[':hover'] = {\n//   color: '#FF5733', // Change to the color you want on hover\n// };\nconst Navbar = ()=>{\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, [\n        state.user\n    ]);\n    const { user } = state;\n    const getName = async ()=>{\n        try {\n            console.log(state);\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\" + user_id);\n            const newUser = state.user;\n            newUser.data = response.data;\n            await dispatch({\n                currentUser: newUser\n            });\n            console.log(response.data);\n            setFetchedData(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const fetchUserLogs = async ()=>{\n        try {\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\".concat(user_id));\n            setUserLogs(response.data);\n        } catch (error) {\n            console.error(\"Error fetching user logs:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, []);\n    const navbarStyle = {\n        backgroundColor: \" #FFFFFF\",\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        height: \"60px\",\n        borderBottom: \"3px solid #E0E0E0\",\n        padding: \"0 5px\"\n    };\n    const titular = {\n        fontSize: \"28px\",\n        fontWeight: \"bold\",\n        display: \"flex\",\n        alignItems: \"center\",\n        marginLeft: \"300px\",\n        letterSpacing: \"5px\",\n        fontFamily: \"ClimbingPlant \"\n    };\n    const linkContainerStyle = {\n        display: \"flex\",\n        listStyleType: \"none\",\n        margin: 0,\n        marginRight: \"400px\",\n        fontFamily: \"KitchyRetro\"\n    };\n    const linkStyle = {\n        color: \"black\",\n        fontWeight: \"bolder\",\n        letterSpacing: \"3px\",\n        textDecoration: \"none\",\n        fontSize: \"25px\",\n        margin: \"0 20px\",\n        transition: \"color 0.3s ease\",\n        wordSpacing: \"8px\"\n    };\n    const firstName = state.user && state.user.data ? state.user.data.first_name.charAt(0).toUpperCase() + state.user.data.first_name.slice(1) : \"Profile\";\n    const handleLogout = ()=>{\n        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__[\"default\"].logout();\n        dispatch({\n            type: \"LOGOUT_USER\"\n        });\n        window.location.href = \"/\"; // Set the URL to the home page\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Plant Database\"\n                }, void 0, false, {\n                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                    lineNumber: 130,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 129,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"howticulture-nav-title\",\n                style: titular,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/favicon.ico\",\n                        style: {\n                            width: \"30px\",\n                            height: \"30px\",\n                            marginRight: \"10px\"\n                        },\n                        alt: \"Icon\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Howticulture\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"KitschyRetro\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: linkContainerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: linkStyle,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 140,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                style: linkStyle,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 141,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/community\",\n                                style: linkStyle,\n                                children: \"Community\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 142,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 142,\n                            columnNumber: 11\n                        }, undefined),\n                        state.user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    style: {\n                                        fontFamily: \"KitschyRetro\"\n                                    },\n                                    className: \"nav-link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/profile\",\n                                        style: linkStyle,\n                                        children: firstName\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                        lineNumber: 146,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                    lineNumber: 145,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    style: {\n                                        fontFamily: \"KitschyRetro\"\n                                    },\n                                    className: \"nav-link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleLogout,\n                                        style: {\n                                            ...linkStyle,\n                                            border: \"none\",\n                                            background: \"none\",\n                                            textDecoration: \"none\"\n                                        },\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                        lineNumber: 149,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                style: linkStyle,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 153,\n                                columnNumber: 77\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 153,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"Qls56tJlJ0SngEH35+pMbeOTVdk=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0I7b0NBQUdULE9BQU87d0NBQUVyQixZQUFZO29DQUFlO29DQUFHd0IsV0FBVTs4Q0FDbkQsNEVBQUNRO3dDQUFPQyxTQUFTbEI7d0NBQWNNLE9BQU87NENBQUUsR0FBR2hCLFNBQVM7NENBQUU2QixRQUFROzRDQUFRQyxZQUFZOzRDQUFRNUIsZ0JBQWdCO3dDQUFPO2tEQUFHOzs7Ozs7Ozs7Ozs7eURBSXhILDhEQUFDdUI7NEJBQUdULE9BQU87Z0NBQUVyQixZQUFZOzRCQUFlOzRCQUFHd0IsV0FBVTtzQ0FBVyw0RUFBQ087Z0NBQUVaLE1BQUs7Z0NBQVNFLE9BQU9oQjswQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0vRztHQTNJTTNDOztRQUN3QkwsZ0VBQWNBO1FBQzNCRyxzREFBU0E7OztLQUZwQkU7QUE2SU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25hdi9pbmRleC5qcz80NTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IGhhbmRsZVNlYXJjaENsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJzsgXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gJy4uLy4uL2NvbnRleHQvR2xvYmFsU3RhdGUnO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbi8vIEFkZCBhIGhvdmVyIGVmZmVjdCBieSBjaGFuZ2luZyB0aGUgbGluayBjb2xvciBvbiBob3ZlclxuLy8gbGlua1N0eWxlWyc6aG92ZXInXSA9IHtcbi8vICAgY29sb3I6ICcjRkY1NzMzJywgLy8gQ2hhbmdlIHRvIHRoZSBjb2xvciB5b3Ugd2FudCBvbiBob3ZlclxuLy8gfTtcblxuXG5cblxuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuICAgICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBqd3REZWNvZGUodXNlckRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBkYXRhOicsIHVzZXIpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAnU0VUX1VTRVInLFxuICAgICAgICAgICAgcGF5bG9hZDogdXNlclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5hbWUoKTtcbiAgICBmZXRjaFVzZXJMb2dzKCk7XG4gIH0sIFtzdGF0ZS51c2VyXSk7IFxuICBjb25zdCB7IHVzZXIgfSA9IHN0YXRlO1xuXG4gIGNvbnN0IGdldE5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgICAgY29uc3QgdXNlcl9pZCA9IHN0YXRlLnVzZXIudXNlcl9pZFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vODAwMC1yeWFuaG93YXJkaC1ob3d0aWN1bHR1ci14MjhpMGh1emE5MS53cy11czEwNC5naXRwb2QuaW8vYXBpL3VzZXIvJyArIHVzZXJfaWQpOyBcbiAgICAgIGNvbnN0IG5ld1VzZXIgPSBzdGF0ZS51c2VyO1xuICAgICAgbmV3VXNlci5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKHtcbiAgICAgIGN1cnJlbnRVc2VyOiBuZXdVc2VyXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICBzZXRGZXRjaGVkRGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gICAgY29uc3QgZmV0Y2hVc2VyTG9ncyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlcl9pZCA9IHN0YXRlLnVzZXIudXNlcl9pZDsgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly84MDAwLXJ5YW5ob3dhcmRoLWhvd3RpY3VsdHVyLXgyOGkwaHV6YTkxLndzLXVzMTA0LmdpdHBvZC5pby9hcGkvdXNlci8ke3VzZXJfaWR9YCk7XG4gICAgICBzZXRVc2VyTG9ncyhyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciBsb2dzOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROYW1lKCk7XG4gICAgZmV0Y2hVc2VyTG9ncygpOyBcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG5hdmJhclN0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyAjRkZGRkZGJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICc2MHB4JyxcbiAgICBib3JkZXJCb3R0b206ICczcHggc29saWQgI0UwRTBFMCcsXG4gICAgcGFkZGluZzogJzAgNXB4JyxcbiAgfTtcblxuICBjb25zdCB0aXR1bGFyID0ge1xuICAgIGZvbnRTaXplOiAnMjhweCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5MZWZ0OiAnMzAwcHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICc1cHgnLFxuICAgIGZvbnRGYW1pbHk6ICdDbGltYmluZ1BsYW50ICcsXG4gIH07XG5cbiAgY29uc3QgbGlua0NvbnRhaW5lclN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXG4gICAgbWFyZ2luOiAwLFxuICAgIG1hcmdpblJpZ2h0OiAnNDAwcHgnLFxuICAgIGZvbnRGYW1pbHk6J0tpdGNoeVJldHJvJyxcbiAgfTtcblxuICBjb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgY29sb3I6ICdibGFjaycsXG4gICAgZm9udFdlaWdodDonYm9sZGVyJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiczcHgnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgZm9udFNpemU6ICcyNXB4JyxcbiAgICBtYXJnaW46ICcwIDIwcHgnLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjNzIGVhc2UnLFxuICAgIHdvcmRTcGFjaW5nOiAnOHB4JyxcbiAgfTtcblxuICBjb25zdCBmaXJzdE5hbWUgPSBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIuZGF0YVxuICA/IHN0YXRlLnVzZXIuZGF0YS5maXJzdF9uYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RhdGUudXNlci5kYXRhLmZpcnN0X25hbWUuc2xpY2UoMSlcbiAgOiAnUHJvZmlsZSc7XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIEF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPR09VVF9VU0VSJyB9KTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJzsgLy8gU2V0IHRoZSBVUkwgdG8gdGhlIGhvbWUgcGFnZVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgXG4gICAgPG5hdiBzdHlsZT17bmF2YmFyU3R5bGV9PlxuICAgIDxIZWFkPlxuICAgIDx0aXRsZT5QbGFudCBEYXRhYmFzZTwvdGl0bGU+XG4gICAgXG5cbiAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3d0aWN1bHR1cmUtbmF2LXRpdGxlXCIgc3R5bGU9e3RpdHVsYXJ9PlxuICAgICAgICA8aW1nIHNyYz1cIi9mYXZpY29uLmljb1wiIHN0eWxlPXt7IHdpZHRoOiAnMzBweCcsIGhlaWdodDogJzMwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19IGFsdD1cIkljb25cIiAvPlxuICAgICAgICBIb3d0aWN1bHR1cmVcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnS2l0c2NoeVJldHJvJyB9fT5cbiAgICAgICAgPHVsIHN0eWxlPXtsaW5rQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgIDxsaSBzdHlsZT17eyBmb250RmFtaWx5OiAnS2l0c2NoeVJldHJvJyB9fSBjbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL1wiIHN0eWxlPXtsaW5rU3R5bGV9ID5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nIH19IGNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvYWJvdXRcIiBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT48L2xpPlxuICAgICAgICAgIDxsaSBzdHlsZT17eyBmb250RmFtaWx5OiAnS2l0c2NoeVJldHJvJyB9fSBjbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL2NvbW11bml0eVwiIHN0eWxlPXtsaW5rU3R5bGV9PkNvbW11bml0eTwvYT48L2xpPlxuICAgICAgICAgIHtzdGF0ZS51c2VyID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nIH19IGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZmlsZVwiIHN0eWxlPXtsaW5rU3R5bGV9PntmaXJzdE5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udEZhbWlseTogJ0tpdHNjaHlSZXRybycgfX0gY2xhc3NOYW1lPSduYXYtbGluayc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IHN0eWxlPXt7IC4uLmxpbmtTdHlsZSwgYm9yZGVyOiAnbm9uZScsIGJhY2tncm91bmQ6ICdub25lJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udEZhbWlseTogJ0tpdHNjaHlSZXRybycgfX0gY2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9sb2dpblwiIHN0eWxlPXtsaW5rU3R5bGV9PkxvZ2luPC9hPjwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTZWFyY2hDbGljayIsInN0eWxlcyIsInVzZUdsb2JhbFN0YXRlIiwiand0RGVjb2RlIiwiQXV0aFNlcnZpY2UiLCJ1c2VSb3V0ZXIiLCJIZWFkIiwiTmF2YmFyIiwic3RhdGUiLCJkaXNwYXRjaCIsInJvdXRlciIsImdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIiwidXNlckRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImdldE5hbWUiLCJmZXRjaFVzZXJMb2dzIiwidXNlcl9pZCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJuZXdVc2VyIiwiZGF0YSIsImN1cnJlbnRVc2VyIiwic2V0RmV0Y2hlZERhdGEiLCJlcnJvciIsInNldFVzZXJMb2dzIiwibmF2YmFyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyQm90dG9tIiwicGFkZGluZyIsInRpdHVsYXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwibGV0dGVyU3BhY2luZyIsImZvbnRGYW1pbHkiLCJsaW5rQ29udGFpbmVyU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJsaW5rU3R5bGUiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwidHJhbnNpdGlvbiIsIndvcmRTcGFjaW5nIiwiZmlyc3ROYW1lIiwiZmlyc3RfbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJoYW5kbGVMb2dvdXQiLCJsb2dvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJuYXYiLCJzdHlsZSIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJ1bCIsImxpIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJib3JkZXIiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});