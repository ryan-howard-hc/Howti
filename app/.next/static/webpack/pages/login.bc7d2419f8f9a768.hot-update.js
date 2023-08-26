"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/nav/index.js":
/*!********************************!*\
  !*** ./src/pages/nav/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_5__.useGlobalState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n                setIsLoggedIn(true); // Set the user as logged in\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    let profileLinkText = \"Profile\";\n    if (isLoggedIn && state.user && state.user.data && state.user.data.first_name) {\n        const firstName = state.user.data.first_name;\n        profileLinkText = firstName;\n    }\n    const navbarStyle = {\n        backgroundColor: \" #FFFFFF\",\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        height: \"60px\",\n        borderBottom: \"3px solid #E0E0E0\",\n        padding: \"0 20px\"\n    };\n    const titular = {\n        fontSize: \"28px\",\n        fontWeight: \"bold\",\n        display: \"flex\",\n        alignItems: \"center\",\n        marginLeft: \"300px\",\n        letterSpacing: \"5px\",\n        fontFamily: \"ClimbingPlant \"\n    };\n    const linkContainerStyle = {\n        display: \"flex\",\n        listStyleType: \"none\",\n        margin: 0,\n        marginRight: \"300px\",\n        fontFamily: \"KitchyRetro\"\n    };\n    const linkStyle = {\n        color: \"black\",\n        fontWeight: \"bolder\",\n        letterSpacing: \"3px\",\n        textDecoration: \"none\",\n        fontSize: \"25px\",\n        margin: \"0 20px\",\n        transition: \"color 0.3s ease\",\n        wordSpacing: \"10px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"howticulture-nav-title\",\n                style: titular,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/favicon.ico\",\n                        style: {\n                            width: \"30px\",\n                            height: \"30px\",\n                            marginRight: \"10px\"\n                        },\n                        alt: \"Icon\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Howticulture\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"KitschyRetro\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: linkContainerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: linkStyle,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                style: linkStyle,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/community\",\n                                style: linkStyle,\n                                children: \"Community\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 91,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/profile\",\n                                style: linkStyle,\n                                children: profileLinkText\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                style: linkStyle,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"cE83ManbFTS3iJBMPLSwaczOkVI=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_5__.useGlobalState,\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7c0RBR3hDLDhEQUFDb0M7NEJBQUdSLE9BQU87Z0NBQUVYLFlBQVk7NEJBQWU7NEJBQUdhLFdBQVU7c0NBQ25ELDRFQUFDTztnQ0FBRUMsTUFBSztnQ0FBU1YsT0FBT047MENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakQ7R0FoR01yQzs7UUFDd0JILGdFQUFjQTtRQUMzQkUsa0RBQVNBOzs7S0FGcEJDO0FBa0dOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9uYXYvaW5kZXguanM/NDUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IGhhbmRsZVNlYXJjaENsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJzsgXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwubW9kdWxlLmNzcyc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tICcuLi8uLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7IFxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuICAgICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBqd3REZWNvZGUodXNlckRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBkYXRhOicsIHVzZXIpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NFVF9VU0VSJyxcbiAgICAgICAgICBwYXlsb2FkOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRJc0xvZ2dlZEluKHRydWUpOyAvLyBTZXQgdGhlIHVzZXIgYXMgbG9nZ2VkIGluXG4gICAgICB9XG4gICAgfTtcbiAgICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xuICB9LCBbXSk7XG5cbiAgbGV0IHByb2ZpbGVMaW5rVGV4dCA9ICdQcm9maWxlJztcblxuICBpZiAoaXNMb2dnZWRJbiAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIuZGF0YSAmJiBzdGF0ZS51c2VyLmRhdGEuZmlyc3RfbmFtZSkge1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IHN0YXRlLnVzZXIuZGF0YS5maXJzdF9uYW1lO1xuICAgIHByb2ZpbGVMaW5rVGV4dCA9IGZpcnN0TmFtZTtcbiAgfVxuICBcblxuXG4gIGNvbnN0IG5hdmJhclN0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyAjRkZGRkZGJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICc2MHB4JyxcbiAgICBib3JkZXJCb3R0b206ICczcHggc29saWQgI0UwRTBFMCcsXG4gICAgcGFkZGluZzogJzAgMjBweCcsXG4gIH07XG5cbiAgY29uc3QgdGl0dWxhciA9IHtcbiAgICBmb250U2l6ZTogJzI4cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luTGVmdDogJzMwMHB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnNXB4JyxcbiAgICBmb250RmFtaWx5OiAnQ2xpbWJpbmdQbGFudCAnLFxuICB9O1xuXG4gIGNvbnN0IGxpbmtDb250YWluZXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5SaWdodDogJzMwMHB4JyxcbiAgICBmb250RmFtaWx5OidLaXRjaHlSZXRybycsXG4gIH07XG5cbiAgY29uc3QgbGlua1N0eWxlID0ge1xuICAgIGNvbG9yOiAnYmxhY2snLFxuICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXG4gICAgbGV0dGVyU3BhY2luZzonM3B4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGZvbnRTaXplOiAnMjVweCcsXG4gICAgbWFyZ2luOiAnMCAyMHB4JyxcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4zcyBlYXNlJyxcbiAgICB3b3JkU3BhY2luZzogJzEwcHgnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBzdHlsZT17bmF2YmFyU3R5bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3d0aWN1bHR1cmUtbmF2LXRpdGxlXCIgc3R5bGU9e3RpdHVsYXJ9PlxuICAgICAgICA8aW1nIHNyYz1cIi9mYXZpY29uLmljb1wiIHN0eWxlPXt7IHdpZHRoOiAnMzBweCcsIGhlaWdodDogJzMwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19IGFsdD1cIkljb25cIiAvPlxuICAgICAgICBIb3d0aWN1bHR1cmVcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnS2l0c2NoeVJldHJvJyB9fT5cbiAgICAgICAgPHVsIHN0eWxlPXtsaW5rQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgIDxsaSBzdHlsZT17eyBmb250RmFtaWx5OiAnS2l0c2NoeVJldHJvJyB9fSBjbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL1wiIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+PC9saT5cbiAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udEZhbWlseTogJ0tpdHNjaHlSZXRybycgfX0gY2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9hYm91dFwiIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPjwvbGk+XG4gICAgICAgICAgPGxpIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nIH19IGNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvY29tbXVuaXR5XCIgc3R5bGU9e2xpbmtTdHlsZX0+Q29tbXVuaXR5PC9hPjwvbGk+XG4gICAgICAgICAgXG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udEZhbWlseTogJ0tpdHNjaHlSZXRybycgfX0gY2xhc3NOYW1lPSduYXYtbGluayc+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZmlsZVwiIHN0eWxlPXtsaW5rU3R5bGV9Pntwcm9maWxlTGlua1RleHR9PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nIH19IGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCIgc3R5bGU9e2xpbmtTdHlsZX0+TG9naW48L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJzdHlsZXMiLCJqd3REZWNvZGUiLCJ1c2VHbG9iYWxTdGF0ZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwicm91dGVyIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSIsInVzZXJEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInBheWxvYWQiLCJwcm9maWxlTGlua1RleHQiLCJkYXRhIiwiZmlyc3RfbmFtZSIsImZpcnN0TmFtZSIsIm5hdmJhclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsInBhZGRpbmciLCJ0aXR1bGFyIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luTGVmdCIsImxldHRlclNwYWNpbmciLCJmb250RmFtaWx5IiwibGlua0NvbnRhaW5lclN0eWxlIiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwibGlua1N0eWxlIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsInRyYW5zaXRpb24iLCJ3b3JkU3BhY2luZyIsIm5hdiIsInN0eWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJ1bCIsImxpIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});