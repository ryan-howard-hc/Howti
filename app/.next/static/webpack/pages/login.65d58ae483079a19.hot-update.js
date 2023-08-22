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

/***/ "./src/services/api.request.js":
/*!*************************************!*\
  !*** ./src/services/api.request.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _auth_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.headers */ \"./src/services/auth.headers.js\");\n/* harmony import */ var _auth_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.constants */ \"./src/services/auth.constants.js\");\n\n\n\n/**\n * Create an Axios Client with defaults\n */ const client = axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n    baseURL: _auth_constants__WEBPACK_IMPORTED_MODULE_1__.API_URL\n});\nclient.interceptors.response.use((response)=>response, (error)=>{\n    const originalRequest = error.config;\n    // Prevent infinite loops\n    if (error.response.status === 401 && originalRequest.url === _auth_constants__WEBPACK_IMPORTED_MODULE_1__.API_URL + _auth_constants__WEBPACK_IMPORTED_MODULE_1__.REFRESH_ENDPOINT) {\n        window.location.href = \"/login/\";\n        return Promise.reject(error);\n    }\n    if (error.response.data.code === \"token_not_valid\" && error.response.status === 401 && error.response.statusText === \"Unauthorized\") {\n        const user = localStorage.getItem(\"user\");\n        if (user) {\n            const tokenParts = JSON.parse(atob(user.refresh.split(\".\")[1]));\n            // exp date in token is expressed in seconds, while now() returns milliseconds:\n            const now = Math.ceil(Date.now() / 1000);\n            console.log(tokenParts.exp);\n            if (tokenParts.exp > now) {\n                return client.post(_auth_constants__WEBPACK_IMPORTED_MODULE_1__.REFRESH_ENDPOINT, {\n                    refresh: user.refresh\n                }).then((response)=>{\n                    localStorage.setItem(\"user\", response.data);\n                    client.defaults.headers[\"Authorization\"] = \"Bearer \" + response.data.access;\n                    originalRequest.headers[\"Authorization\"] = \"Bearer \" + response.data.access;\n                    return client(originalRequest);\n                }).catch((err)=>{\n                    console.log(err);\n                });\n            } else {\n                console.log(\"Refresh token is expired\", tokenParts.exp, now);\n                window.location.href = \"/login/\";\n            }\n        } else {\n            console.log(\"Refresh token not available.\");\n            window.location.href = \"/login/\";\n        }\n    }\n    // specific error handling done elsewhere\n    return Promise.reject(error);\n});\n/**\n * Request Wrapper with default success/error actions\n */ const request = (opts)=>{\n    let options = {\n        ...opts,\n        headers: (0,_auth_headers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    };\n    const onSuccess = (response)=>{\n        console.debug(\"Request Successful!\", response);\n        return response;\n    };\n    const onError = (error)=>{\n        console.error(\"Request Failed:\", error.config);\n        if (error.response) {\n            // Request was made but server responded with something\n            // other than 2xx\n            console.error(\"Status:\", error.response.status);\n            console.error(\"Data:\", error.response.data);\n            console.error(\"Headers:\", error.response.headers);\n        } else {\n            // Something else happened while setting up the request\n            // triggered the error\n            console.error(\"Error Message:\", error.message);\n        }\n        return Promise.reject(error.response || error.message);\n    };\n    return client(options).then(onSuccess).catch(onError);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (request);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7WUFDMUNnQixRQUFRMUIsS0FBSyxDQUFDLFlBQVlBLE1BQU1GLFFBQVEsQ0FBQ21DLE9BQU87UUFFbEQsT0FBTztZQUNMLHVEQUF1RDtZQUN2RCxzQkFBc0I7WUFDdEJQLFFBQVExQixLQUFLLENBQUMsa0JBQWtCQSxNQUFNMkMsT0FBTztRQUMvQztRQUVBLE9BQU9uQyxRQUFRQyxNQUFNLENBQUNULE1BQU1GLFFBQVEsSUFBSUUsTUFBTTJDLE9BQU87SUFDdkQ7SUFFQSxPQUFPakQsT0FBTzZDLFNBQ1hULElBQUksQ0FBQ1UsV0FDTEwsS0FBSyxDQUFDTztBQUNYO0FBRUEsK0RBQWVMLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2FwaS5yZXF1ZXN0LmpzPzc0ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSAnLi9hdXRoLmhlYWRlcnMnO1xuaW1wb3J0IHsgQVBJX1VSTCwgUkVGUkVTSF9FTkRQT0lOVCwgQVBJX0FMVCB9IGZyb20gJy4vYXV0aC5jb25zdGFudHMnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBBeGlvcyBDbGllbnQgd2l0aCBkZWZhdWx0c1xuICovXG5jb25zdCBjbGllbnQgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBBUElfVVJMLFxufSk7XG5cbmNsaWVudC5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICByZXNwb25zZSA9PiByZXNwb25zZSxcbiAgZXJyb3IgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsUmVxdWVzdCA9IGVycm9yLmNvbmZpZztcblxuICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcHNcbiAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgJiYgb3JpZ2luYWxSZXF1ZXN0LnVybCA9PT0gQVBJX1VSTCArIFJFRlJFU0hfRU5EUE9JTlQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbi8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5jb2RlID09PSBcInRva2VuX25vdF92YWxpZFwiICYmXG4gICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSAmJlxuICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dCA9PT0gXCJVbmF1dGhvcml6ZWRcIikge1xuICAgICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG5cbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGNvbnN0IHRva2VuUGFydHMgPSBKU09OLnBhcnNlKGF0b2IodXNlci5yZWZyZXNoLnNwbGl0KCcuJylbMV0pKTtcblxuICAgICAgICAvLyBleHAgZGF0ZSBpbiB0b2tlbiBpcyBleHByZXNzZWQgaW4gc2Vjb25kcywgd2hpbGUgbm93KCkgcmV0dXJucyBtaWxsaXNlY29uZHM6XG4gICAgICAgIGNvbnN0IG5vdyA9IE1hdGguY2VpbChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuUGFydHMuZXhwKTtcblxuICAgICAgICBpZiAodG9rZW5QYXJ0cy5leHAgPiBub3cpIHtcbiAgICAgICAgICByZXR1cm4gY2xpZW50XG4gICAgICAgICAgICAucG9zdChSRUZSRVNIX0VORFBPSU5ULCB7IHJlZnJlc2g6IHVzZXIucmVmcmVzaCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCByZXNwb25zZS5kYXRhKTtcblxuICAgICAgICAgICAgICBjbGllbnQuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gXCJCZWFyZXIgXCIgKyByZXNwb25zZS5kYXRhLmFjY2VzcztcbiAgICAgICAgICAgICAgb3JpZ2luYWxSZXF1ZXN0LmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IFwiQmVhcmVyIFwiICsgcmVzcG9uc2UuZGF0YS5hY2Nlc3M7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudChvcmlnaW5hbFJlcXVlc3QpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZnJlc2ggdG9rZW4gaXMgZXhwaXJlZFwiLCB0b2tlblBhcnRzLmV4cCwgbm93KTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4vJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWZyZXNoIHRva2VuIG5vdCBhdmFpbGFibGUuXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbi8nO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gc3BlY2lmaWMgZXJyb3IgaGFuZGxpbmcgZG9uZSBlbHNld2hlcmVcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG4pO1xuXG5cbi8qKlxuICogUmVxdWVzdCBXcmFwcGVyIHdpdGggZGVmYXVsdCBzdWNjZXNzL2Vycm9yIGFjdGlvbnNcbiAqL1xuY29uc3QgcmVxdWVzdCA9IChvcHRzKSA9PiB7XG4gIGxldCBvcHRpb25zID0ge1xuICAgIC4uLm9wdHMsXG4gICAgaGVhZGVyczogYXV0aEhlYWRlcigpLFxuICB9XG5cbiAgY29uc3Qgb25TdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5kZWJ1ZygnUmVxdWVzdCBTdWNjZXNzZnVsIScsIHJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBjb25zdCBvbkVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcignUmVxdWVzdCBGYWlsZWQ6JywgZXJyb3IuY29uZmlnKTtcblxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgLy8gUmVxdWVzdCB3YXMgbWFkZSBidXQgc2VydmVyIHJlc3BvbmRlZCB3aXRoIHNvbWV0aGluZ1xuICAgICAgLy8gb3RoZXIgdGhhbiAyeHhcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YXR1czonLCBlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xuICAgICAgY29uc29sZS5lcnJvcignRGF0YTonLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0hlYWRlcnM6JywgZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgc2V0dGluZyB1cCB0aGUgcmVxdWVzdFxuICAgICAgLy8gdHJpZ2dlcmVkIHRoZSBlcnJvclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgTWVzc2FnZTonLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2UgfHwgZXJyb3IubWVzc2FnZSk7XG4gIH1cblxuICByZXR1cm4gY2xpZW50KG9wdGlvbnMpXG4gICAgLnRoZW4ob25TdWNjZXNzKVxuICAgIC5jYXRjaChvbkVycm9yKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDsiXSwibmFtZXMiOlsiYXhpb3MiLCJhdXRoSGVhZGVyIiwiQVBJX1VSTCIsIlJFRlJFU0hfRU5EUE9JTlQiLCJBUElfQUxUIiwiY2xpZW50IiwiY3JlYXRlIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJvcmlnaW5hbFJlcXVlc3QiLCJjb25maWciLCJzdGF0dXMiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJQcm9taXNlIiwicmVqZWN0IiwiZGF0YSIsImNvZGUiLCJzdGF0dXNUZXh0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlblBhcnRzIiwiSlNPTiIsInBhcnNlIiwiYXRvYiIsInJlZnJlc2giLCJzcGxpdCIsIm5vdyIsIk1hdGgiLCJjZWlsIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJleHAiLCJwb3N0IiwidGhlbiIsInNldEl0ZW0iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJhY2Nlc3MiLCJjYXRjaCIsImVyciIsInJlcXVlc3QiLCJvcHRzIiwib3B0aW9ucyIsIm9uU3VjY2VzcyIsImRlYnVnIiwib25FcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.request.js\n"));

/***/ })

});