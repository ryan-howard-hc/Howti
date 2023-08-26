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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Add a hover effect by changing the link color on hover\n// linkStyle[':hover'] = {\n//   color: '#FF5733', // Change to the color you want on hover\n// };\nconst Navbar = ()=>{\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, [\n        state.user\n    ]);\n    //----------------------\n    const getName = async ()=>{\n        try {\n            console.log(state);\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\" + user_id);\n            const newUser = state.user;\n            newUser.data = response.data;\n            await dispatch({\n                currentUser: newUser\n            });\n            console.log(response.data);\n            setFetchedData(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const fetchUserLogs = async ()=>{\n        try {\n            const user_id = state.user.user_id;\n            const response = await axios.get(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user/\".concat(user_id));\n            setUserLogs(response.data);\n        } catch (error) {\n            console.error(\"Error fetching user logs:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getName();\n        fetchUserLogs();\n    }, []);\n    //-------------\n    const deleteLog = async (logId)=>{\n        try {\n            const response = await axios.delete(\"https://8000-ryanhowardh-howticultur-x28i0huza91.ws-us104.gitpod.io/api/user-logs/\".concat(logId));\n            setUserLogs((prevLogs)=>prevLogs.filter((log)=>log.log_id !== logId));\n        } catch (error) {\n            console.error(\"Error deleting user log:\", error);\n        }\n    };\n    const navigateToPlantDetail = async (slug)=>{\n        try {\n            const plantData = await fetchSlug(slug);\n            const plantDataParam = encodeURIComponent(JSON.stringify(plantData));\n            const plantDetailUrl = \"/plant-detail?plantData=\".concat(plantDataParam);\n            router.push(plantDetailUrl);\n        } catch (error) {\n            console.error(\"Error fetching plant data:\", error);\n        }\n    };\n    const favoritePlants = JSON.parse(favorites || \"[]\");\n    const firstName = state.user && state.user.data ? state.user.data.first_name.charAt(0).toUpperCase() + state.user.data.first_name.slice(1) : \"User\";\n    const lastName = state.user && state.user.data ? state.user.data.last_name.charAt(0).toUpperCase() + state.user.data.last_name.slice(1) : \"\";\n    const fullName = \"\".concat(firstName, \" \").concat(lastName);\n    const navbarStyle = {\n        backgroundColor: \" #FFFFFF\",\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\",\n        height: \"60px\",\n        borderBottom: \"3px solid #E0E0E0\",\n        padding: \"0 20px\"\n    };\n    const titular = {\n        fontSize: \"28px\",\n        fontWeight: \"bold\",\n        display: \"flex\",\n        alignItems: \"center\",\n        marginLeft: \"300px\",\n        letterSpacing: \"5px\",\n        fontFamily: \"ClimbingPlant \"\n    };\n    const linkContainerStyle = {\n        display: \"flex\",\n        listStyleType: \"none\",\n        margin: 0,\n        marginRight: \"300px\",\n        fontFamily: \"KitchyRetro\"\n    };\n    const linkStyle = {\n        color: \"black\",\n        fontWeight: \"bolder\",\n        letterSpacing: \"3px\",\n        textDecoration: \"none\",\n        fontSize: \"25px\",\n        margin: \"0 20px\",\n        transition: \"color 0.3s ease\",\n        wordSpacing: \"10px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: navbarStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"howticulture-nav-title\",\n                style: titular,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/favicon.ico\",\n                        style: {\n                            width: \"30px\",\n                            height: \"30px\",\n                            marginRight: \"10px\"\n                        },\n                        alt: \"Icon\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                        lineNumber: 156,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Howticulture\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"KitschyRetro\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: linkContainerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                style: linkStyle,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 163,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 163,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                style: linkStyle,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 164,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 164,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/community\",\n                                style: linkStyle,\n                                children: \"Community\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 165,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 165,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                style: linkStyle,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 166,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 166,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            style: {\n                                fontFamily: \"KitschyRetro\"\n                            },\n                            className: \"nav-link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/profile\",\n                                style: linkStyle,\n                                children: state.user ? state.user.name : \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                                lineNumber: 167,\n                                columnNumber: 69\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                            lineNumber: 167,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                    lineNumber: 161,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n                lineNumber: 159,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Howti/app/src/pages/nav/index.js\",\n        lineNumber: 154,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"oN38xLeYlanAsHqtURqwTcZrGJY=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9WOztzQ0FFVCw4REFBQ2tCOzRCQUFHUixPQUFPO2dDQUFDWCxZQUFXOzRCQUFjOzRCQUFFYSxXQUFVO3NDQUFXLDRFQUFDTztnQ0FBRUMsTUFBSztnQ0FBSVYsT0FBT047MENBQVk7Ozs7Ozs7Ozs7O3NDQUMzRiw4REFBQ2M7NEJBQUdSLE9BQU87Z0NBQUNYLFlBQVc7NEJBQWM7NEJBQUVhLFdBQVU7c0NBQVcsNEVBQUNPO2dDQUFFQyxNQUFLO2dDQUFTVixPQUFPTjswQ0FBVzs7Ozs7Ozs7Ozs7c0NBQy9GLDhEQUFDYzs0QkFBR1IsT0FBTztnQ0FBQ1gsWUFBVzs0QkFBYzs0QkFBRWEsV0FBVTtzQ0FBVyw0RUFBQ087Z0NBQUVDLE1BQUs7Z0NBQWFWLE9BQU9OOzBDQUFXOzs7Ozs7Ozs7OztzQ0FDbkcsOERBQUNjOzRCQUFHUixPQUFPO2dDQUFDWCxZQUFXOzRCQUFjOzRCQUFFYSxXQUFVO3NDQUFXLDRFQUFDTztnQ0FBRUMsTUFBSztnQ0FBU1YsT0FBT047MENBQVc7Ozs7Ozs7Ozs7O3NDQUMvRiw4REFBQ2M7NEJBQUdSLE9BQU87Z0NBQUNYLFlBQVc7NEJBQWM7NEJBQUVhLFdBQVU7c0NBQVcsNEVBQUNPO2dDQUFFQyxNQUFLO2dDQUFXVixPQUFPTjswQ0FBWXJFLE1BQU1NLElBQUksR0FBR04sTUFBTU0sSUFBSSxDQUFDZ0YsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3pJO0dBOUpNdkY7O1FBQ3dCRixnRUFBY0E7OztLQUR0Q0U7QUFnS04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25hdi9pbmRleC5qcz80NTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IGhhbmRsZVNlYXJjaENsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJzsgXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gJy4uLy4uL2NvbnRleHQvR2xvYmFsU3RhdGUnO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcblxuXG4vLyBBZGQgYSBob3ZlciBlZmZlY3QgYnkgY2hhbmdpbmcgdGhlIGxpbmsgY29sb3Igb24gaG92ZXJcbi8vIGxpbmtTdHlsZVsnOmhvdmVyJ10gPSB7XG4vLyAgIGNvbG9yOiAnI0ZGNTczMycsIC8vIENoYW5nZSB0byB0aGUgY29sb3IgeW91IHdhbnQgb24gaG92ZXJcbi8vIH07XG5cblxuXG5cblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlR2xvYmFsU3RhdGUoKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IGp3dERlY29kZSh1c2VyRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRhdGE6JywgdXNlcik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXG4gICAgICAgICAgICBwYXlsb2FkOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TmFtZSgpO1xuICAgIGZldGNoVXNlckxvZ3MoKTtcbiAgfSwgW3N0YXRlLnVzZXJdKTsgXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgZ2V0TmFtZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgICBjb25zdCB1c2VyX2lkID0gc3RhdGUudXNlci51c2VyX2lkXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly84MDAwLXJ5YW5ob3dhcmRoLWhvd3RpY3VsdHVyLXgyOGkwaHV6YTkxLndzLXVzMTA0LmdpdHBvZC5pby9hcGkvdXNlci8nICsgdXNlcl9pZCk7IFxuICAgICAgY29uc3QgbmV3VXNlciA9IHN0YXRlLnVzZXI7XG4gICAgICBuZXdVc2VyLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgY3VycmVudFVzZXI6IG5ld1VzZXJcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgIHNldEZldGNoZWREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cblxuICBjb25zdCBmZXRjaFVzZXJMb2dzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyX2lkID0gc3RhdGUudXNlci51c2VyX2lkOyBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovLzgwMDAtcnlhbmhvd2FyZGgtaG93dGljdWx0dXIteDI4aTBodXphOTEud3MtdXMxMDQuZ2l0cG9kLmlvL2FwaS91c2VyLyR7dXNlcl9pZH1gKTtcbiAgICAgIHNldFVzZXJMb2dzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGxvZ3M6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5hbWUoKTtcbiAgICBmZXRjaFVzZXJMb2dzKCk7IFxuICB9LCBbXSk7XG5cbiAgLy8tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IGRlbGV0ZUxvZyA9IGFzeW5jIChsb2dJZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cHM6Ly84MDAwLXJ5YW5ob3dhcmRoLWhvd3RpY3VsdHVyLXgyOGkwaHV6YTkxLndzLXVzMTA0LmdpdHBvZC5pby9hcGkvdXNlci1sb2dzLyR7bG9nSWR9YCk7XG4gICAgICBzZXRVc2VyTG9ncygocHJldkxvZ3MpID0+IHByZXZMb2dzLmZpbHRlcigobG9nKSA9PiBsb2cubG9nX2lkICE9PSBsb2dJZCkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyB1c2VyIGxvZzonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgbmF2aWdhdGVUb1BsYW50RGV0YWlsID0gYXN5bmMgKHNsdWcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGxhbnREYXRhID0gYXdhaXQgZmV0Y2hTbHVnKHNsdWcpO1xuICBcbiAgICAgIGNvbnN0IHBsYW50RGF0YVBhcmFtID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHBsYW50RGF0YSkpO1xuICBcbiAgICAgIGNvbnN0IHBsYW50RGV0YWlsVXJsID0gYC9wbGFudC1kZXRhaWw/cGxhbnREYXRhPSR7cGxhbnREYXRhUGFyYW19YDtcbiAgXG4gICAgICByb3V0ZXIucHVzaChwbGFudERldGFpbFVybCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHBsYW50IGRhdGE6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuXG4gIGNvbnN0IGZhdm9yaXRlUGxhbnRzID0gSlNPTi5wYXJzZShmYXZvcml0ZXMgfHwgJ1tdJyk7XG5cbiAgY29uc3QgZmlyc3ROYW1lID0gc3RhdGUudXNlciAmJiBzdGF0ZS51c2VyLmRhdGFcbiAgICA/IHN0YXRlLnVzZXIuZGF0YS5maXJzdF9uYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RhdGUudXNlci5kYXRhLmZpcnN0X25hbWUuc2xpY2UoMSlcbiAgICA6ICdVc2VyJztcblxuICBjb25zdCBsYXN0TmFtZSA9IHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5kYXRhXG4gICAgPyBzdGF0ZS51c2VyLmRhdGEubGFzdF9uYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RhdGUudXNlci5kYXRhLmxhc3RfbmFtZS5zbGljZSgxKVxuICAgIDogJyc7XG5cbiAgY29uc3QgZnVsbE5hbWUgPSBgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YDtcblxuXG4gIGNvbnN0IG5hdmJhclN0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyAjRkZGRkZGJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICc2MHB4JyxcbiAgICBib3JkZXJCb3R0b206ICczcHggc29saWQgI0UwRTBFMCcsXG4gICAgcGFkZGluZzogJzAgMjBweCcsXG4gIH07XG5cbiAgY29uc3QgdGl0dWxhciA9IHtcbiAgICBmb250U2l6ZTogJzI4cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luTGVmdDogJzMwMHB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnNXB4JyxcbiAgICBmb250RmFtaWx5OiAnQ2xpbWJpbmdQbGFudCAnLFxuICB9O1xuXG4gIGNvbnN0IGxpbmtDb250YWluZXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5SaWdodDogJzMwMHB4JyxcbiAgICBmb250RmFtaWx5OidLaXRjaHlSZXRybycsXG4gIH07XG5cbiAgY29uc3QgbGlua1N0eWxlID0ge1xuICAgIGNvbG9yOiAnYmxhY2snLFxuICAgIGZvbnRXZWlnaHQ6J2JvbGRlcicsXG4gICAgbGV0dGVyU3BhY2luZzonM3B4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGZvbnRTaXplOiAnMjVweCcsXG4gICAgbWFyZ2luOiAnMCAyMHB4JyxcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4zcyBlYXNlJyxcbiAgICB3b3JkU3BhY2luZzogJzEwcHgnLFxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IHN0eWxlPXtuYXZiYXJTdHlsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvd3RpY3VsdHVyZS1uYXYtdGl0bGVcIiBzdHlsZT17dGl0dWxhcn0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2Zhdmljb24uaWNvXCIgc3R5bGU9e3sgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gYWx0PVwiSWNvblwiIC8+XG4gICAgICAgIEhvd3RpY3VsdHVyZVxuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGUgPSB7e2ZvbnRGYW1pbHk6ICdLaXRzY2h5UmV0cm8nfX0+XG5cbiAgICAgIDx1bCBzdHlsZT17bGlua0NvbnRhaW5lclN0eWxlfT5cblxuICAgICAgICA8bGkgc3R5bGU9e3tmb250RmFtaWx5OidLaXRzY2h5UmV0cm8nfX1jbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL1wiIHN0eWxlPXtsaW5rU3R5bGV9ID5Ib21lPC9hPjwvbGk+XG4gICAgICAgIDxsaSBzdHlsZT17e2ZvbnRGYW1pbHk6J0tpdHNjaHlSZXRybyd9fWNsYXNzTmFtZT0nbmF2LWxpbmsnPjxhIGhyZWY9XCIvYWJvdXRcIiBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT48L2xpPlxuICAgICAgICA8bGkgc3R5bGU9e3tmb250RmFtaWx5OidLaXRzY2h5UmV0cm8nfX1jbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL2NvbW11bml0eVwiIHN0eWxlPXtsaW5rU3R5bGV9PkNvbW11bml0eTwvYT48L2xpPlxuICAgICAgICA8bGkgc3R5bGU9e3tmb250RmFtaWx5OidLaXRzY2h5UmV0cm8nfX1jbGFzc05hbWU9J25hdi1saW5rJz48YSBocmVmPVwiL2xvZ2luXCIgc3R5bGU9e2xpbmtTdHlsZX0+TG9naW48L2E+PC9saT5cbiAgICAgICAgPGxpIHN0eWxlPXt7Zm9udEZhbWlseTonS2l0c2NoeVJldHJvJ319Y2xhc3NOYW1lPSduYXYtbGluayc+PGEgaHJlZj1cIi9wcm9maWxlXCIgc3R5bGU9e2xpbmtTdHlsZX0+e3N0YXRlLnVzZXIgPyBzdGF0ZS51c2VyLm5hbWUgOiBcIkxvZ2luXCJ9PC9hPlxuICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cblxuXG4gICAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZVNlYXJjaENsaWNrIiwic3R5bGVzIiwidXNlR2xvYmFsU3RhdGUiLCJqd3REZWNvZGUiLCJOYXZiYXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UiLCJ1c2VyRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiZ2V0TmFtZSIsImZldGNoVXNlckxvZ3MiLCJ1c2VyX2lkIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsIm5ld1VzZXIiLCJkYXRhIiwiY3VycmVudFVzZXIiLCJzZXRGZXRjaGVkRGF0YSIsImVycm9yIiwic2V0VXNlckxvZ3MiLCJkZWxldGVMb2ciLCJsb2dJZCIsImRlbGV0ZSIsInByZXZMb2dzIiwiZmlsdGVyIiwibG9nX2lkIiwibmF2aWdhdGVUb1BsYW50RGV0YWlsIiwic2x1ZyIsInBsYW50RGF0YSIsImZldGNoU2x1ZyIsInBsYW50RGF0YVBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInBsYW50RGV0YWlsVXJsIiwicm91dGVyIiwicHVzaCIsImZhdm9yaXRlUGxhbnRzIiwicGFyc2UiLCJmYXZvcml0ZXMiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImxhc3ROYW1lIiwibGFzdF9uYW1lIiwiZnVsbE5hbWUiLCJuYXZiYXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nIiwidGl0dWxhciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udEZhbWlseSIsImxpbmtDb250YWluZXJTdHlsZSIsImxpc3RTdHlsZVR5cGUiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsImxpbmtTdHlsZSIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwid29yZFNwYWNpbmciLCJuYXYiLCJzdHlsZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwidWwiLCJsaSIsImEiLCJocmVmIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/nav/index.js\n"));

/***/ })

});