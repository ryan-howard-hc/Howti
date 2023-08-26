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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Import Link from Next.js\n // Import useRouter from Next.js\nconst Navbar = ()=>{\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_5__.useGlobalState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)(); // Use the useRouter hook from Next.js\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, [\n        state.user\n    ]);\n    //----------------------\n    const getName = async ()=>{\n        try {\n            console.log(state);\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\" + user_id);\n            const newUser = state.user;\n            newUser.data = response.data;\n            await dispatch({\n                currentUser: newUser\n            });\n            console.log(response.data);\n            setFetchedData(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const fetchUserLogs = async ()=>{\n        try {\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\".concat(user_id));\n            setUserLogs(response.data);\n        } catch (error) {\n            console.error(\"Error fetching user logs:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, []);\n    let profileLinkText = \"Profile\";\n    const firstName = state.user && state.user.data ? state.user.data.first_name.charAt(0).toUpperCase() + state.user.data.first_name.slice(1) : \"User\";\n    const lastName = state.user && state.user.data ? state.user.data.last_name.charAt(0).toUpperCase() + state.user.data.last_name.slice(1) : \"\";\n    const fullName = \"\".concat(firstName, \" \").concat(lastName);\n    const navbarStyle = {\n        backgroundColor: \" #FFFFFF\",\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        height: \"60px\",\n        borderBottom: \"3px solid #E0E0E0\",\n        padding: \"0 20px\"\n    };\n    const titular = {\n        fontSize: \"28px\",\n        fontWeight: \"bold\",\n        display: \"flex\",\n        alignItems: \"center\",\n        marginLeft: \"300px\",\n        letterSpacing: \"5px\",\n        fontFamily: \"ClimbingPlant \"\n    };\n    const linkContainerStyle = {\n        display: \"flex\",\n        listStyleType: \"none\",\n        margin: 0,\n        marginRight: \"300px\",\n        fontFamily: \"KitchyRetro\"\n    };\n    const linkStyle = {\n        color: \"black\",\n        fontWeight: \"bolder\",\n        letterSpacing: \"3px\",\n        textDecoration: \"none\",\n        fontSize: \"25px\",\n        margin: \"0 20px\",\n        transition: \"color 0.3s ease\",\n        wordSpacing: \"10px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"howticulture-nav-title\",\n                style: titular,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/favicon.ico\",\n                        style: {\n                            width: \"30px\",\n                            height: \"30px\",\n                            marginRight: \"10px\"\n                        },\n                        alt: \"Icon\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Howticulture\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"KitschyRetro\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: linkContainerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: linkStyle,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 130,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                style: linkStyle,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 131,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/community\",\n                                style: linkStyle,\n                                children: \"Community\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 132,\n                                columnNumber: 75\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, undefined),\n                        isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/profile\",\n                                style: linkStyle,\n                                children: profileLinkText\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 136,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 135,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                style: linkStyle,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 140,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 139,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"x/DThq1R+86tolYKWcPLw9EXzq8=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_5__.useGlobalState,\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmF2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUNNO0FBQ0E7QUFDakI7QUFDd0I7QUFDOUIsQ0FBQywyQkFBMkI7QUFDakIsQ0FBQyxnQ0FBZ0M7QUFFekUsTUFBTVMsU0FBUzs7SUFDYixNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdMLG9FQUFjQTtJQUMxQyxNQUFNTSxTQUFTSixzREFBU0EsSUFBSSxzQ0FBc0M7SUFFbEUsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzdDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1hLDBCQUEwQjtZQUM5QixNQUFNQyxXQUFXQyxhQUFhQyxPQUFPLENBQUM7WUFDdEMsSUFBSUYsVUFBVTtnQkFDWixNQUFNRyxPQUFPZCxzREFBU0EsQ0FBQ1c7Z0JBQ3ZCSSxRQUFRQyxHQUFHLENBQUMsY0FBY0Y7Z0JBQzFCUixTQUFTO29CQUNMVyxNQUFNO29CQUNOQyxTQUFTSjtnQkFDYjtZQUNGO1FBQ0Y7UUFDQUo7SUFDRixHQUFHLEVBQUU7SUFFTGIsZ0RBQVNBLENBQUM7UUFDUnNCO1FBQ0FDO0lBQ0YsR0FBRztRQUFDZixNQUFNUyxJQUFJO0tBQUM7SUFDakIsd0JBQXdCO0lBQ3RCLE1BQU1LLFVBQVU7UUFDZCxJQUFJO1lBQ0ZKLFFBQVFDLEdBQUcsQ0FBQ1g7WUFDWixNQUFNZ0IsVUFBVWhCLE1BQU1TLElBQUksQ0FBQ08sT0FBTztZQUNsQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU1DLEdBQUcsQ0FBQyxrRkFBa0ZIO1lBQ25ILE1BQU1JLFVBQVVwQixNQUFNUyxJQUFJO1lBQzFCVyxRQUFRQyxJQUFJLEdBQUdKLFNBQVNJLElBQUk7WUFDNUIsTUFBTXBCLFNBQVM7Z0JBQ2ZxQixhQUFhRjtZQUNiO1lBQ0FWLFFBQVFDLEdBQUcsQ0FBQ00sU0FBU0ksSUFBSTtZQUN6QkUsZUFBZU4sU0FBU0ksSUFBSTtRQUM5QixFQUFFLE9BQU9HLE9BQU87WUFDZGQsUUFBUWMsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUdBLE1BQU1ULGdCQUFnQjtRQUNwQixJQUFJO1lBQ0YsTUFBTUMsVUFBVWhCLE1BQU1TLElBQUksQ0FBQ08sT0FBTztZQUNsQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU1DLEdBQUcsQ0FBQyxnRkFBd0YsT0FBUkg7WUFDakhTLFlBQVlSLFNBQVNJLElBQUk7UUFDM0IsRUFBRSxPQUFPRyxPQUFPO1lBQ2RkLFFBQVFjLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzdDO0lBQ0Y7SUFFQWhDLGdEQUFTQSxDQUFDO1FBQ1JzQjtRQUNBQztJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlXLGtCQUFrQjtJQUd0QixNQUFNQyxZQUFZM0IsTUFBTVMsSUFBSSxJQUFJVCxNQUFNUyxJQUFJLENBQUNZLElBQUksR0FDM0NyQixNQUFNUyxJQUFJLENBQUNZLElBQUksQ0FBQ08sVUFBVSxDQUFDQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLOUIsTUFBTVMsSUFBSSxDQUFDWSxJQUFJLENBQUNPLFVBQVUsQ0FBQ0csS0FBSyxDQUFDLEtBQ3RGO0lBRUosTUFBTUMsV0FBV2hDLE1BQU1TLElBQUksSUFBSVQsTUFBTVMsSUFBSSxDQUFDWSxJQUFJLEdBQzFDckIsTUFBTVMsSUFBSSxDQUFDWSxJQUFJLENBQUNZLFNBQVMsQ0FBQ0osTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBSzlCLE1BQU1TLElBQUksQ0FBQ1ksSUFBSSxDQUFDWSxTQUFTLENBQUNGLEtBQUssQ0FBQyxLQUNwRjtJQUVKLE1BQU1HLFdBQVcsR0FBZ0JGLE9BQWJMLFdBQVUsS0FBWSxPQUFUSztJQUlqQyxNQUFNRyxjQUFjO1FBQ2xCQyxpQkFBaUI7UUFDakJDLFNBQVM7UUFDVEMsZ0JBQWdCO1FBQ2hCQyxZQUFZO1FBQ1pDLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxTQUFTO0lBQ1g7SUFFQSxNQUFNQyxVQUFVO1FBQ2RDLFVBQVU7UUFDVkMsWUFBWTtRQUNaUixTQUFTO1FBQ1RFLFlBQVk7UUFDWk8sWUFBWTtRQUNaQyxlQUFlO1FBQ2ZDLFlBQVk7SUFDZDtJQUVBLE1BQU1DLHFCQUFxQjtRQUN6QlosU0FBUztRQUNUYSxlQUFlO1FBQ2ZDLFFBQVE7UUFDUkMsYUFBYTtRQUNiSixZQUFXO0lBQ2I7SUFFQSxNQUFNSyxZQUFZO1FBQ2hCQyxPQUFPO1FBQ1BULFlBQVc7UUFDWEUsZUFBYztRQUNkUSxnQkFBZ0I7UUFDaEJYLFVBQVU7UUFDVk8sUUFBUTtRQUNSSyxZQUFZO1FBQ1pDLGFBQWE7SUFDZjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPeEI7OzBCQUNWLDhEQUFDeUI7Z0JBQUlDLFdBQVU7Z0JBQXlCRixPQUFPaEI7O2tDQUM3Qyw4REFBQ21CO3dCQUFJQyxLQUFJO3dCQUFlSixPQUFPOzRCQUFFSyxPQUFPOzRCQUFReEIsUUFBUTs0QkFBUVksYUFBYTt3QkFBTzt3QkFBR2EsS0FBSTs7Ozs7O29CQUFTOzs7Ozs7OzBCQUd0Ryw4REFBQ0w7Z0JBQUlELE9BQU87b0JBQUVYLFlBQVk7Z0JBQWU7MEJBQ3ZDLDRFQUFDa0I7b0JBQUdQLE9BQU9WOztzQ0FDVCw4REFBQ2tCOzRCQUFHUixPQUFPO2dDQUFFWCxZQUFZOzRCQUFlOzRCQUFHYSxXQUFVO3NDQUFXLDRFQUFDTztnQ0FBRUMsTUFBSztnQ0FBSVYsT0FBT047MENBQVc7Ozs7Ozs7Ozs7O3NDQUM5Riw4REFBQ2M7NEJBQUdSLE9BQU87Z0NBQUVYLFlBQVk7NEJBQWU7NEJBQUdhLFdBQVU7c0NBQVcsNEVBQUNPO2dDQUFFQyxNQUFLO2dDQUFTVixPQUFPTjswQ0FBVzs7Ozs7Ozs7Ozs7c0NBQ25HLDhEQUFDYzs0QkFBR1IsT0FBTztnQ0FBRVgsWUFBWTs0QkFBZTs0QkFBR2EsV0FBVTtzQ0FBVyw0RUFBQ087Z0NBQUVDLE1BQUs7Z0NBQWFWLE9BQU9OOzBDQUFXOzs7Ozs7Ozs7Ozt3QkFFdEdsRCwyQkFDQyw4REFBQ2dFOzRCQUFHUixPQUFPO2dDQUFFWCxZQUFZOzRCQUFlOzRCQUFHYSxXQUFVO3NDQUNuRCw0RUFBQ087Z0NBQUVDLE1BQUs7Z0NBQVdWLE9BQU9OOzBDQUFZM0I7Ozs7Ozs7Ozs7c0RBR3hDLDhEQUFDeUM7NEJBQUdSLE9BQU87Z0NBQUVYLFlBQVk7NEJBQWU7NEJBQUdhLFdBQVU7c0NBQ25ELDRFQUFDTztnQ0FBRUMsTUFBSztnQ0FBU1YsT0FBT047MENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakQ7R0F6SU10RDs7UUFDd0JILGdFQUFjQTtRQUMzQkUsa0RBQVNBOzs7S0FGcEJDO0FBMklOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9uYXYvaW5kZXguanM/NDUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IGhhbmRsZVNlYXJjaENsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJzsgXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwubW9kdWxlLmNzcyc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tICcuLi8uLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7IC8vIEltcG9ydCBMaW5rIGZyb20gTmV4dC5qc1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInOyAvLyBJbXBvcnQgdXNlUm91dGVyIGZyb20gTmV4dC5qc1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgLy8gVXNlIHRoZSB1c2VSb3V0ZXIgaG9vayBmcm9tIE5leHQuanNcblxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IGp3dERlY29kZSh1c2VyRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRhdGE6JywgdXNlcik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXG4gICAgICAgICAgICBwYXlsb2FkOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TmFtZSgpO1xuICAgIGZldGNoVXNlckxvZ3MoKTtcbiAgfSwgW3N0YXRlLnVzZXJdKTsgXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgZ2V0TmFtZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgICBjb25zdCB1c2VyX2lkID0gc3RhdGUudXNlci51c2VyX2lkXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly84MDAwLXJ5YW5ob3dhcmRoLWhvd3RpY3VsdHVyLXgyOGkwaHV6YTkxLndzLXVzMTA0LmdpdHBvZC5pby9hcGkvdXNlci8nICsgdXNlcl9pZCk7IFxuICAgICAgY29uc3QgbmV3VXNlciA9IHN0YXRlLnVzZXI7XG4gICAgICBuZXdVc2VyLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgY3VycmVudFVzZXI6IG5ld1VzZXJcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgIHNldEZldGNoZWREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cblxuICBjb25zdCBmZXRjaFVzZXJMb2dzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyX2lkID0gc3RhdGUudXNlci51c2VyX2lkOyBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovLzgwMDAtcnlhbmhvd2FyZGgtaG93dGljdWx0dXIteDI4aTBodXphOTEud3MtdXMxMDQuZ2l0cG9kLmlvL2FwaS91c2VyLyR7dXNlcl9pZH1gKTtcbiAgICAgIHNldFVzZXJMb2dzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGxvZ3M6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5hbWUoKTtcbiAgICBmZXRjaFVzZXJMb2dzKCk7IFxuICB9LCBbXSk7XG5cbiAgbGV0IHByb2ZpbGVMaW5rVGV4dCA9ICdQcm9maWxlJztcblxuXG4gIGNvbnN0IGZpcnN0TmFtZSA9IHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5kYXRhXG4gICAgPyBzdGF0ZS51c2VyLmRhdGEuZmlyc3RfbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0YXRlLnVzZXIuZGF0YS5maXJzdF9uYW1lLnNsaWNlKDEpXG4gICAgOiAnVXNlcic7XG5cbiAgY29uc3QgbGFzdE5hbWUgPSBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIuZGF0YVxuICAgID8gc3RhdGUudXNlci5kYXRhLmxhc3RfbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0YXRlLnVzZXIuZGF0YS5sYXN0X25hbWUuc2xpY2UoMSlcbiAgICA6ICcnO1xuXG4gIGNvbnN0IGZ1bGxOYW1lID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWA7XG4gIFxuXG5cbiAgY29uc3QgbmF2YmFyU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnICNGRkZGRkYnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzYwcHgnLFxuICAgIGJvcmRlckJvdHRvbTogJzNweCBzb2xpZCAjRTBFMEUwJyxcbiAgICBwYWRkaW5nOiAnMCAyMHB4JyxcbiAgfTtcblxuICBjb25zdCB0aXR1bGFyID0ge1xuICAgIGZvbnRTaXplOiAnMjhweCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5MZWZ0OiAnMzAwcHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICc1cHgnLFxuICAgIGZvbnRGYW1pbHk6ICdDbGltYmluZ1BsYW50ICcsXG4gIH07XG5cbiAgY29uc3QgbGlua0NvbnRhaW5lclN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXG4gICAgbWFyZ2luOiAwLFxuICAgIG1hcmdpblJpZ2h0OiAnMzAwcHgnLFxuICAgIGZvbnRGYW1pbHk6J0tpdGNoeVJldHJvJyxcbiAgfTtcblxuICBjb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgY29sb3I6ICdibGFjaycsXG4gICAgZm9udFdlaWdodDonYm9sZGVyJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiczcHgnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgZm9udFNpemU6ICcyNXB4JyxcbiAgICBtYXJnaW46ICcwIDIwcHgnLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjNzIGVhc2UnLFxuICAgIHdvcmRTcGFjaW5nOiAnMTBweCcsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IHN0eWxlPXtuYXZiYXJTdHlsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvd3RpY3VsdHVyZS1uYXYtdGl0bGVcIiBzdHlsZT17dGl0dWxhcn0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2Zhdmljb24uaWNvXCIgc3R5bGU9e3sgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gYWx0PVwiSWNvblwiIC8+XG4gICAgICAgIEhvd3RpY3VsdHVyZVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nIH19PlxuICAgICAgICA8dWwgc3R5bGU9e2xpbmtDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgPGxpIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nIH19IGNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvXCIgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT48L2xpPlxuICAgICAgICAgIDxsaSBzdHlsZT17eyBmb250RmFtaWx5OiAnS2l0c2NoeVJldHJvJyB9fSBjbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL2Fib3V0XCIgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udEZhbWlseTogJ0tpdHNjaHlSZXRybycgfX0gY2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9jb21tdW5pdHlcIiBzdHlsZT17bGlua1N0eWxlfT5Db21tdW5pdHk8L2E+PC9saT5cbiAgICAgICAgICBcbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyBmb250RmFtaWx5OiAnS2l0c2NoeVJldHJvJyB9fSBjbGFzc05hbWU9J25hdi1saW5rJz5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9maWxlXCIgc3R5bGU9e2xpbmtTdHlsZX0+e3Byb2ZpbGVMaW5rVGV4dH08L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udEZhbWlseTogJ0tpdHNjaHlSZXRybycgfX0gY2xhc3NOYW1lPSduYXYtbGluayc+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9naW5cIiBzdHlsZT17bGlua1N0eWxlfT5Mb2dpbjwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTZWFyY2hDbGljayIsInN0eWxlcyIsImp3dERlY29kZSIsInVzZUdsb2JhbFN0YXRlIiwiTGluayIsInVzZVJvdXRlciIsIk5hdmJhciIsInN0YXRlIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsImdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIiwidXNlckRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImdldE5hbWUiLCJmZXRjaFVzZXJMb2dzIiwidXNlcl9pZCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJuZXdVc2VyIiwiZGF0YSIsImN1cnJlbnRVc2VyIiwic2V0RmV0Y2hlZERhdGEiLCJlcnJvciIsInNldFVzZXJMb2dzIiwicHJvZmlsZUxpbmtUZXh0IiwiZmlyc3ROYW1lIiwiZmlyc3RfbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJsYXN0TmFtZSIsImxhc3RfbmFtZSIsImZ1bGxOYW1lIiwibmF2YmFyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyQm90dG9tIiwicGFkZGluZyIsInRpdHVsYXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwibGV0dGVyU3BhY2luZyIsImZvbnRGYW1pbHkiLCJsaW5rQ29udGFpbmVyU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJsaW5rU3R5bGUiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwidHJhbnNpdGlvbiIsIndvcmRTcGFjaW5nIiwibmF2Iiwic3R5bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsInVsIiwibGkiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});