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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Add a hover effect by changing the link color on hover\n// linkStyle[':hover'] = {\n//   color: '#FF5733', // Change to the color you want on hover\n// };\nconst Navbar = ()=>{\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, [\n        state.user\n    ]);\n    const { user } = state;\n    const navbarStyle = {\n        backgroundColor: \" #FFFFFF\",\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        height: \"60px\",\n        borderBottom: \"3px solid #E0E0E0\",\n        padding: \"0 20px\"\n    };\n    const titular = {\n        fontSize: \"28px\",\n        fontWeight: \"bold\",\n        display: \"flex\",\n        alignItems: \"center\",\n        marginLeft: \"300px\",\n        letterSpacing: \"5px\",\n        fontFamily: \"ClimbingPlant \"\n    };\n    const linkContainerStyle = {\n        display: \"flex\",\n        listStyleType: \"none\",\n        margin: 0,\n        marginRight: \"300px\",\n        fontFamily: \"KitchyRetro\"\n    };\n    const linkStyle = {\n        color: \"black\",\n        fontWeight: \"bolder\",\n        letterSpacing: \"3px\",\n        textDecoration: \"none\",\n        fontSize: \"25px\",\n        margin: \"0 20px\",\n        transition: \"color 0.3s ease\",\n        wordSpacing: \"10px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"howticulture-nav-title\",\n                style: titular,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/favicon.ico\",\n                        style: {\n                            width: \"30px\",\n                            height: \"30px\",\n                            marginRight: \"10px\"\n                        },\n                        alt: \"Icon\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Howticulture\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"KitschyRetro\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: linkContainerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: linkStyle,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 94,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                style: linkStyle,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/community\",\n                                style: linkStyle,\n                                children: \"Community\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                style: linkStyle,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 97,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/profile\",\n                                style: linkStyle,\n                                children: state.user.first_name\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 98,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                    lineNumber: 92,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"p3bne05fs2ry/xPzX24AeUT9qAc=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDd0JGLGdFQUFjQTs7O0tBRHRDRTtBQTJGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbmF2L2luZGV4LmpzPzQ1MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHsgaGFuZGxlU2VhcmNoQ2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9hcGknOyBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2dsb2JhbC5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vLi4vY29udGV4dC9HbG9iYWxTdGF0ZSc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuXG5cbi8vIEFkZCBhIGhvdmVyIGVmZmVjdCBieSBjaGFuZ2luZyB0aGUgbGluayBjb2xvciBvbiBob3ZlclxuLy8gbGlua1N0eWxlWyc6aG92ZXInXSA9IHtcbi8vICAgY29sb3I6ICcjRkY1NzMzJywgLy8gQ2hhbmdlIHRvIHRoZSBjb2xvciB5b3Ugd2FudCBvbiBob3ZlclxuLy8gfTtcblxuXG5cblxuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICBjb25zdCB1c2VyID0gand0RGVjb2RlKHVzZXJEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YTonLCB1c2VyKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ1NFVF9VU0VSJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHVzZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROYW1lKCk7XG4gICAgZmV0Y2hVc2VyTG9ncygpO1xuICB9LCBbc3RhdGUudXNlcl0pOyBcbiAgY29uc3QgeyB1c2VyIH0gPSBzdGF0ZTtcblxuICBjb25zdCBuYXZiYXJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcgI0ZGRkZGRicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnNjBweCcsXG4gICAgYm9yZGVyQm90dG9tOiAnM3B4IHNvbGlkICNFMEUwRTAnLFxuICAgIHBhZGRpbmc6ICcwIDIwcHgnLFxuICB9O1xuXG4gIGNvbnN0IHRpdHVsYXIgPSB7XG4gICAgZm9udFNpemU6ICcyOHB4JyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpbkxlZnQ6ICczMDBweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJzVweCcsXG4gICAgZm9udEZhbWlseTogJ0NsaW1iaW5nUGxhbnQgJyxcbiAgfTtcblxuICBjb25zdCBsaW5rQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luUmlnaHQ6ICczMDBweCcsXG4gICAgZm9udEZhbWlseTonS2l0Y2h5UmV0cm8nLFxuICB9O1xuXG4gIGNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICBmb250V2VpZ2h0Oidib2xkZXInLFxuICAgIGxldHRlclNwYWNpbmc6JzNweCcsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBmb250U2l6ZTogJzI1cHgnLFxuICAgIG1hcmdpbjogJzAgMjBweCcsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuM3MgZWFzZScsXG4gICAgd29yZFNwYWNpbmc6ICcxMHB4JyxcbiAgfTtcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxuYXYgc3R5bGU9e25hdmJhclN0eWxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG93dGljdWx0dXJlLW5hdi10aXRsZVwiIHN0eWxlPXt0aXR1bGFyfT5cbiAgICAgICAgPGltZyBzcmM9XCIvZmF2aWNvbi5pY29cIiBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fSBhbHQ9XCJJY29uXCIgLz5cbiAgICAgICAgSG93dGljdWx0dXJlXG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZSA9IHt7Zm9udEZhbWlseTogJ0tpdHNjaHlSZXRybyd9fT5cblxuICAgICAgPHVsIHN0eWxlPXtsaW5rQ29udGFpbmVyU3R5bGV9PlxuXG4gICAgICAgIDxsaSBzdHlsZT17e2ZvbnRGYW1pbHk6J0tpdHNjaHlSZXRybyd9fWNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvXCIgc3R5bGU9e2xpbmtTdHlsZX0gPkhvbWU8L2E+PC9saT5cbiAgICAgICAgPGxpIHN0eWxlPXt7Zm9udEZhbWlseTonS2l0c2NoeVJldHJvJ319Y2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9hYm91dFwiIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPjwvbGk+XG4gICAgICAgIDxsaSBzdHlsZT17e2ZvbnRGYW1pbHk6J0tpdHNjaHlSZXRybyd9fWNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvY29tbXVuaXR5XCIgc3R5bGU9e2xpbmtTdHlsZX0+Q29tbXVuaXR5PC9hPjwvbGk+XG4gICAgICAgIDxsaSBzdHlsZT17e2ZvbnRGYW1pbHk6J0tpdHNjaHlSZXRybyd9fWNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvbG9naW5cIiBzdHlsZT17bGlua1N0eWxlfT5Mb2dpbjwvYT48L2xpPlxuICAgICAgICA8bGkgc3R5bGU9e3tmb250RmFtaWx5OidLaXRzY2h5UmV0cm8nfX1jbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL3Byb2ZpbGVcIiBzdHlsZT17bGlua1N0eWxlfT57c3RhdGUudXNlci5maXJzdF9uYW1lfTwvYT48L2xpPlxuXG4gICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG5cblxuICAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTZWFyY2hDbGljayIsInN0eWxlcyIsInVzZUdsb2JhbFN0YXRlIiwiand0RGVjb2RlIiwiTmF2YmFyIiwic3RhdGUiLCJkaXNwYXRjaCIsImdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIiwidXNlckRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImdldE5hbWUiLCJmZXRjaFVzZXJMb2dzIiwibmF2YmFyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyQm90dG9tIiwicGFkZGluZyIsInRpdHVsYXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwibGV0dGVyU3BhY2luZyIsImZvbnRGYW1pbHkiLCJsaW5rQ29udGFpbmVyU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJsaW5rU3R5bGUiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwidHJhbnNpdGlvbiIsIndvcmRTcGFjaW5nIiwibmF2Iiwic3R5bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsInVsIiwibGkiLCJhIiwiaHJlZiIsImZpcnN0X25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});