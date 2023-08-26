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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Add a hover effect by changing the link color on hover\n// linkStyle[':hover'] = {\n//   color: '#FF5733', // Change to the color you want on hover\n// };\nconst Navbar = ()=>{\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, [\n        state.user\n    ]);\n    const { user } = state;\n    const getName = async ()=>{\n        try {\n            console.log(state);\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\" + user_id);\n            const newUser = state.user;\n            newUser.data = response.data;\n            await dispatch({\n                currentUser: newUser\n            });\n            console.log(response.data);\n            setFetchedData(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const fetchUserLogs = async ()=>{\n        try {\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\".concat(user_id));\n            setUserLogs(response.data);\n        } catch (error) {\n            console.error(\"Error fetching user logs:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, []);\n    const navbarStyle = {\n        backgroundColor: \" #FFFFFF\",\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        height: \"60px\",\n        borderBottom: \"3px solid #E0E0E0\",\n        padding: \"0 5px\"\n    };\n    const titular = {\n        fontSize: \"28px\",\n        fontWeight: \"bold\",\n        display: \"flex\",\n        alignItems: \"center\",\n        marginLeft: \"300px\",\n        letterSpacing: \"5px\",\n        fontFamily: \"ClimbingPlant \"\n    };\n    const linkContainerStyle = {\n        display: \"flex\",\n        listStyleType: \"none\",\n        margin: 0,\n        marginRight: \"300px\",\n        fontFamily: \"KitchyRetro\"\n    };\n    const linkStyle = {\n        color: \"black\",\n        fontWeight: \"bolder\",\n        letterSpacing: \"3px\",\n        textDecoration: \"none\",\n        fontSize: \"25px\",\n        margin: \"0 13px\",\n        transition: \"color 0.3s ease\",\n        wordSpacing: \"5px\",\n        borderRight: \"1px solid black\"\n    };\n    const firstName = state.user && state.user.data ? state.user.data.first_name.charAt(0).toUpperCase() + state.user.data.first_name.slice(1) : \"Profile\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"howticulture-nav-title\",\n                style: titular,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/favicon.ico\",\n                        style: {\n                            width: \"30px\",\n                            height: \"30px\",\n                            marginRight: \"10px\"\n                        },\n                        alt: \"Icon\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Howticulture\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"KitschyRetro\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: linkContainerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: linkStyle,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 130,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 130,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                style: linkStyle,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 131,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 131,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/community\",\n                                style: linkStyle,\n                                children: \"Community\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 132,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 132,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                style: linkStyle,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 133,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 133,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/profile\",\n                                style: linkStyle,\n                                children: firstName\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 134,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 134,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                    lineNumber: 128,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"oN38xLeYlanAsHqtURqwTcZrGJY=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eC5qcz80NTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IGhhbmRsZVNlYXJjaENsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJzsgXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gJy4uLy4uL2NvbnRleHQvR2xvYmFsU3RhdGUnO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcblxuXG4vLyBBZGQgYSBob3ZlciBlZmZlY3QgYnkgY2hhbmdpbmcgdGhlIGxpbmsgY29sb3Igb24gaG92ZXJcbi8vIGxpbmtTdHlsZVsnOmhvdmVyJ10gPSB7XG4vLyAgIGNvbG9yOiAnI0ZGNTczMycsIC8vIENoYW5nZSB0byB0aGUgY29sb3IgeW91IHdhbnQgb24gaG92ZXJcbi8vIH07XG5cblxuXG5cblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlR2xvYmFsU3RhdGUoKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IGp3dERlY29kZSh1c2VyRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRhdGE6JywgdXNlcik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXG4gICAgICAgICAgICBwYXlsb2FkOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TmFtZSgpO1xuICAgIGZldGNoVXNlckxvZ3MoKTtcbiAgfSwgW3N0YXRlLnVzZXJdKTsgXG4gIGNvbnN0IHsgdXNlciB9ID0gc3RhdGU7XG5cbiAgY29uc3QgZ2V0TmFtZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgICBjb25zdCB1c2VyX2lkID0gc3RhdGUudXNlci51c2VyX2lkXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly84MDAwLXJ5YW5ob3dhcmRoLWhvd3RpY3VsdHVyLXgyOGkwaHV6YTkxLndzLXVzMTA0LmdpdHBvZC5pby9hcGkvdXNlci8nICsgdXNlcl9pZCk7IFxuICAgICAgY29uc3QgbmV3VXNlciA9IHN0YXRlLnVzZXI7XG4gICAgICBuZXdVc2VyLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgY3VycmVudFVzZXI6IG5ld1VzZXJcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgIHNldEZldGNoZWREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgICBjb25zdCBmZXRjaFVzZXJMb2dzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyX2lkID0gc3RhdGUudXNlci51c2VyX2lkOyBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovLzgwMDAtcnlhbmhvd2FyZGgtaG93dGljdWx0dXIteDI4aTBodXphOTEud3MtdXMxMDQuZ2l0cG9kLmlvL2FwaS91c2VyLyR7dXNlcl9pZH1gKTtcbiAgICAgIHNldFVzZXJMb2dzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGxvZ3M6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5hbWUoKTtcbiAgICBmZXRjaFVzZXJMb2dzKCk7IFxuICB9LCBbXSk7XG5cbiAgY29uc3QgbmF2YmFyU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnICNGRkZGRkYnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzYwcHgnLFxuICAgIGJvcmRlckJvdHRvbTogJzNweCBzb2xpZCAjRTBFMEUwJyxcbiAgICBwYWRkaW5nOiAnMCA1cHgnLFxuICB9O1xuXG4gIGNvbnN0IHRpdHVsYXIgPSB7XG4gICAgZm9udFNpemU6ICcyOHB4JyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpbkxlZnQ6ICczMDBweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJzVweCcsXG4gICAgZm9udEZhbWlseTogJ0NsaW1iaW5nUGxhbnQgJyxcbiAgfTtcblxuICBjb25zdCBsaW5rQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luUmlnaHQ6ICczMDBweCcsXG4gICAgZm9udEZhbWlseTonS2l0Y2h5UmV0cm8nLFxuICB9O1xuXG4gIGNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICBmb250V2VpZ2h0Oidib2xkZXInLFxuICAgIGxldHRlclNwYWNpbmc6JzNweCcsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBmb250U2l6ZTogJzI1cHgnLFxuICAgIG1hcmdpbjogJzAgMTNweCcsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuM3MgZWFzZScsXG4gICAgd29yZFNwYWNpbmc6ICc1cHgnLFxuICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIGJsYWNrJyxcblxuICB9O1xuXG4gIGNvbnN0IGZpcnN0TmFtZSA9IHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5kYXRhXG4gID8gc3RhdGUudXNlci5kYXRhLmZpcnN0X25hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdGF0ZS51c2VyLmRhdGEuZmlyc3RfbmFtZS5zbGljZSgxKVxuICA6ICdQcm9maWxlJztcblxuICByZXR1cm4gKFxuICAgIDxuYXYgc3R5bGU9e25hdmJhclN0eWxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG93dGljdWx0dXJlLW5hdi10aXRsZVwiIHN0eWxlPXt0aXR1bGFyfT5cbiAgICAgICAgPGltZyBzcmM9XCIvZmF2aWNvbi5pY29cIiBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fSBhbHQ9XCJJY29uXCIgLz5cbiAgICAgICAgSG93dGljdWx0dXJlXG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZSA9IHt7Zm9udEZhbWlseTogJ0tpdHNjaHlSZXRybyd9fT5cblxuICAgICAgPHVsIHN0eWxlPXtsaW5rQ29udGFpbmVyU3R5bGV9PlxuXG4gICAgICAgIDxsaSBzdHlsZT17e2ZvbnRGYW1pbHk6J0tpdHNjaHlSZXRybyd9fWNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvXCIgc3R5bGU9e2xpbmtTdHlsZX0gPkhvbWU8L2E+PC9saT5cbiAgICAgICAgPGxpIHN0eWxlPXt7Zm9udEZhbWlseTonS2l0c2NoeVJldHJvJ319Y2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9hYm91dFwiIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPjwvbGk+XG4gICAgICAgIDxsaSBzdHlsZT17e2ZvbnRGYW1pbHk6J0tpdHNjaHlSZXRybyd9fWNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvY29tbXVuaXR5XCIgc3R5bGU9e2xpbmtTdHlsZX0+Q29tbXVuaXR5PC9hPjwvbGk+XG4gICAgICAgIDxsaSBzdHlsZT17e2ZvbnRGYW1pbHk6J0tpdHNjaHlSZXRybyd9fWNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvbG9naW5cIiBzdHlsZT17bGlua1N0eWxlfT5Mb2dpbjwvYT48L2xpPlxuICAgICAgICA8bGkgc3R5bGU9e3tmb250RmFtaWx5OidLaXRzY2h5UmV0cm8nfX1jbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL3Byb2ZpbGVcIiBzdHlsZT17bGlua1N0eWxlfT57Zmlyc3ROYW1lfTwvYT48L2xpPlxuXG4gICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG5cblxuICAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTZWFyY2hDbGljayIsInN0eWxlcyIsInVzZUdsb2JhbFN0YXRlIiwiand0RGVjb2RlIiwiTmF2YmFyIiwic3RhdGUiLCJkaXNwYXRjaCIsImdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIiwidXNlckRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImdldE5hbWUiLCJmZXRjaFVzZXJMb2dzIiwidXNlcl9pZCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJuZXdVc2VyIiwiZGF0YSIsImN1cnJlbnRVc2VyIiwic2V0RmV0Y2hlZERhdGEiLCJlcnJvciIsInNldFVzZXJMb2dzIiwibmF2YmFyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyQm90dG9tIiwicGFkZGluZyIsInRpdHVsYXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwibGV0dGVyU3BhY2luZyIsImZvbnRGYW1pbHkiLCJsaW5rQ29udGFpbmVyU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJsaW5rU3R5bGUiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwidHJhbnNpdGlvbiIsIndvcmRTcGFjaW5nIiwiYm9yZGVyUmlnaHQiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm5hdiIsInN0eWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJ1bCIsImxpIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});