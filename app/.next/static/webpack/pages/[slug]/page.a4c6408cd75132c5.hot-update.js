"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]/page",{

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchFlowerData: function() { return /* binding */ fetchFlowerData; },\n/* harmony export */   fetchFoliageData: function() { return /* binding */ fetchFoliageData; },\n/* harmony export */   fetchGrowthData: function() { return /* binding */ fetchGrowthData; },\n/* harmony export */   fetchSlug: function() { return /* binding */ fetchSlug; },\n/* harmony export */   fetchWikipediaDescription: function() { return /* binding */ fetchWikipediaDescription; },\n/* harmony export */   handleSearchClick: function() { return /* binding */ handleSearchClick; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cheerio */ \"./node_modules/cheerio/lib/esm/index.js\");\n\n\nconst handleSearchClick = (searchValue, setPlantData, setFlowerData, setFoliageData, setGrowthData)=>{\n    const API_KEY = \"eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI\";\n    const apiUrl = \"https://trefle.io/api/v1/plants/search?token=\".concat(API_KEY, \"&q=\").concat(searchValue);\n    axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(apiUrl).then((response)=>{\n        setPlantData(response.data.data);\n    }).catch((error)=>{\n        console.error(\"Error fetching data:\", error);\n    });\n    fetchFlowerData(searchValue, setFlowerData);\n    fetchFoliageData(searchValue, setFoliageData);\n    fetchGrowthData(searchValue, setGrowthData);\n};\nconst fetchFlowerData = (searchValue, setFlowerData)=>{\n    const API_KEY = \"eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI\";\n    const apiUrl = \"https://trefle.io/api/v1/plants/search?token=\".concat(API_KEY, \"&q=\").concat(searchValue, \"&fields=flower.color\");\n    axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(apiUrl).then((response)=>{\n        setFlowerData(response.data.data);\n    }).catch((error)=>{\n        console.error(\"Error fetching flower data:\", error);\n    });\n};\nconst fetchFoliageData = (searchValue, setFoliageData)=>{\n    const API_KEY = \"eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI\";\n    const apiUrl = \"https://trefle.io/api/v1/plants/search?token=\".concat(API_KEY, \"&q=\").concat(searchValue, \"&fields=foliage.color\");\n    axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(apiUrl).then((response)=>{\n        setFoliageData(response.data.data);\n    }).catch((error)=>{\n        console.error(\"Error fetching foliage data:\", error);\n    });\n};\nconst fetchGrowthData = (searchValue, setGrowthData)=>{\n    const API_KEY = \"eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI\";\n    const apiUrl = \"https://trefle.io/api/v1/plants/search?token=\".concat(API_KEY, \"&q=\").concat(searchValue, \"&fields=minimum_temperature,maximum_temperature,soil_nutriments,soil_salinity,soil_texture,soil_humidity,description\");\n    axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(apiUrl).then((response)=>{\n        setGrowthData(response.data.data);\n    }).catch((error)=>{\n        console.error(\"Error fetching growth data:\", error);\n    });\n};\nconst fetchSlug = async (slug)=>{\n    const API_KEY = \"eYAFPMrYTYRUvLTle8cNaBjynNmAeqmcfI-iNDcfwMI\";\n    const apiUrl = \"https://trefle.io/api/v1/plants/\".concat(slug, \"?token=\").concat(API_KEY);\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(apiUrl);\n        const plantData = response.data.data;\n        const images = {\n            leaf: [],\n            flower: [],\n            bark: []\n        };\n        if (plantData.main_species) {\n            if (plantData.main_species.images && plantData.main_species.images.leaf) {\n                plantData.main_species.images.leaf.forEach((image)=>{\n                    images.leaf.push(image.image_url);\n                });\n            }\n            if (plantData.main_species.images && plantData.main_species.images.flower) {\n                plantData.main_species.images.flower.forEach((image)=>{\n                    images.flower.push(image.image_url);\n                });\n            }\n            if (plantData.main_species.images && plantData.main_species.images.bark) {\n                plantData.main_species.images.bark.forEach((image)=>{\n                    images.bark.push(image.image_url);\n                });\n            }\n            const commonNames = plantData.main_species.common_names ? plantData.main_species.common_names.eng || [] : [];\n            const formattedData = {\n                common_names: {\n                    eng: commonNames\n                },\n                images\n            };\n            return formattedData;\n        }\n        return {\n            common_names: {\n                eng: []\n            },\n            images: {\n                leaf: [],\n                flower: [],\n                bark: []\n            }\n        };\n    } catch (error) {\n        console.error(\"Error fetching plant data by slug:\", error);\n        return {\n            common_names: {\n                eng: []\n            },\n            images: {\n                leaf: [],\n                flower: [],\n                bark: []\n            }\n        };\n    }\n};\nconst fetchWikipediaDescription = async (commonName)=>{\n    try {\n        // Step 1: Perform a Google search to find the Wikipedia link\n        const googleSearchUrl = \"https://www.google.com/search?q=\".concat(commonName, \"+site:wikipedia.org\");\n        const googleSearchResponse = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(googleSearchUrl);\n        const googleSearchHtml = googleSearchResponse.data;\n        // Step 2: Extract the Wikipedia link from the search results\n        const $ = cheerio__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load(googleSearchHtml);\n        const wikipediaLink = $('a[href^=\"https://en.wikipedia.org/wiki/\"]').attr(\"href\");\n        if (!wikipediaLink) {\n            return \"No Wikipedia page found\";\n        }\n        // Step 3: Make an HTTP request to the Wikipedia page\n        const wikipediaResponse = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(wikipediaLink);\n        const wikipediaHtml = wikipediaResponse.data;\n        // Step 4: Parse the Wikipedia page and extract the description\n        const $$ = cheerio__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load(wikipediaHtml);\n        let description = \"\";\n        // Find the first paragraph that doesn't contain a gallery link\n        $$(\"p\").each((index, element)=>{\n            const text = $$(element).text();\n            if (!text.includes(\"Gallery\") && text.trim() !== \"\") {\n                description += text + \" \";\n            }\n        });\n        return description.trim();\n    } catch (error) {\n        console.error(\"Error fetching Wikipedia description:\", error);\n        return \"Error fetching Wikipedia description\";\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdUM7UUFDdkIsTUFBTUcsZ0JBQWdCRixFQUFFLDZDQUE2Q0csSUFBSSxDQUFDO1FBRTFFLElBQUksQ0FBQ0QsZUFBZTtZQUNsQixPQUFPO1FBQ1Q7UUFFQSxxREFBcUQ7UUFDckQsTUFBTUUsb0JBQW9CLE1BQU03QyxpREFBUyxDQUFDMkM7UUFDMUMsTUFBTUcsZ0JBQWdCRCxrQkFBa0JoQyxJQUFJO1FBRTVDLCtEQUErRDtRQUMvRCxNQUFNa0MsS0FBSzlDLG9EQUFZLENBQUM2QztRQUN4QixJQUFJRSxjQUFjO1FBRWxCLCtEQUErRDtRQUMvREQsR0FBRyxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsT0FBT0M7WUFDbkIsTUFBTUMsT0FBT0wsR0FBR0ksU0FBU0MsSUFBSTtZQUU3QixJQUFJLENBQUNBLEtBQUtDLFFBQVEsQ0FBQyxjQUFjRCxLQUFLRSxJQUFJLE9BQU8sSUFBSTtnQkFDbkROLGVBQWVJLE9BQU87WUFDeEI7UUFDRjtRQUVBLE9BQU9KLFlBQVlNLElBQUk7SUFDekIsRUFBRSxPQUFPdkMsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMseUNBQXlDQTtRQUN2RCxPQUFPO0lBQ1Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9hcGkuanM/ZTI4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNoZWVyaW8gZnJvbSAnY2hlZXJpbyc7XG5cblxuZXhwb3J0IGNvbnN0IGhhbmRsZVNlYXJjaENsaWNrID0gKHNlYXJjaFZhbHVlLCBzZXRQbGFudERhdGEsIHNldEZsb3dlckRhdGEsIHNldEZvbGlhZ2VEYXRhLCBzZXRHcm93dGhEYXRhKSA9PiB7XG4gIGNvbnN0IEFQSV9LRVkgPSAnZVlBRlBNcllUWVJVdkxUbGU4Y05hQmp5bk5tQWVxbWNmSS1pTkRjZndNSSc7XG4gIGNvbnN0IGFwaVVybCA9IGBodHRwczovL3RyZWZsZS5pby9hcGkvdjEvcGxhbnRzL3NlYXJjaD90b2tlbj0ke0FQSV9LRVl9JnE9JHtzZWFyY2hWYWx1ZX1gO1xuXG4gIGF4aW9zLmdldChhcGlVcmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgc2V0UGxhbnREYXRhKHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgfSk7XG5cbiAgZmV0Y2hGbG93ZXJEYXRhKHNlYXJjaFZhbHVlLCBzZXRGbG93ZXJEYXRhKTtcbiAgZmV0Y2hGb2xpYWdlRGF0YShzZWFyY2hWYWx1ZSwgc2V0Rm9saWFnZURhdGEpO1xuICBmZXRjaEdyb3d0aERhdGEoc2VhcmNoVmFsdWUsIHNldEdyb3d0aERhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRmxvd2VyRGF0YSA9IChzZWFyY2hWYWx1ZSwgc2V0Rmxvd2VyRGF0YSkgPT4ge1xuICBjb25zdCBBUElfS0VZID0gJ2VZQUZQTXJZVFlSVXZMVGxlOGNOYUJqeW5ObUFlcW1jZkktaU5EY2Z3TUknO1xuICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly90cmVmbGUuaW8vYXBpL3YxL3BsYW50cy9zZWFyY2g/dG9rZW49JHtBUElfS0VZfSZxPSR7c2VhcmNoVmFsdWV9JmZpZWxkcz1mbG93ZXIuY29sb3JgO1xuXG4gIGF4aW9zLmdldChhcGlVcmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgc2V0Rmxvd2VyRGF0YShyZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGZsb3dlciBkYXRhOicsIGVycm9yKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEZvbGlhZ2VEYXRhID0gKHNlYXJjaFZhbHVlLCBzZXRGb2xpYWdlRGF0YSkgPT4ge1xuICBjb25zdCBBUElfS0VZID0gJ2VZQUZQTXJZVFlSVXZMVGxlOGNOYUJqeW5ObUFlcW1jZkktaU5EY2Z3TUknO1xuICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly90cmVmbGUuaW8vYXBpL3YxL3BsYW50cy9zZWFyY2g/dG9rZW49JHtBUElfS0VZfSZxPSR7c2VhcmNoVmFsdWV9JmZpZWxkcz1mb2xpYWdlLmNvbG9yYDtcblxuICBheGlvcy5nZXQoYXBpVXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHNldEZvbGlhZ2VEYXRhKHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZm9saWFnZSBkYXRhOicsIGVycm9yKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEdyb3d0aERhdGEgPSAoc2VhcmNoVmFsdWUsIHNldEdyb3d0aERhdGEpID0+IHtcbiAgY29uc3QgQVBJX0tFWSA9ICdlWUFGUE1yWVRZUlV2TFRsZThjTmFCanluTm1BZXFtY2ZJLWlORGNmd01JJztcbiAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vdHJlZmxlLmlvL2FwaS92MS9wbGFudHMvc2VhcmNoP3Rva2VuPSR7QVBJX0tFWX0mcT0ke3NlYXJjaFZhbHVlfSZmaWVsZHM9bWluaW11bV90ZW1wZXJhdHVyZSxtYXhpbXVtX3RlbXBlcmF0dXJlLHNvaWxfbnV0cmltZW50cyxzb2lsX3NhbGluaXR5LHNvaWxfdGV4dHVyZSxzb2lsX2h1bWlkaXR5LGRlc2NyaXB0aW9uYDtcblxuICBheGlvcy5nZXQoYXBpVXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHNldEdyb3d0aERhdGEocmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBncm93dGggZGF0YTonLCBlcnJvcik7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTbHVnID0gYXN5bmMgKHNsdWcpID0+IHtcbiAgY29uc3QgQVBJX0tFWSA9ICdlWUFGUE1yWVRZUlV2TFRsZThjTmFCanluTm1BZXFtY2ZJLWlORGNmd01JJztcbiAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vdHJlZmxlLmlvL2FwaS92MS9wbGFudHMvJHtzbHVnfT90b2tlbj0ke0FQSV9LRVl9YDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGFwaVVybCk7XG4gICAgY29uc3QgcGxhbnREYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuXG4gICAgY29uc3QgaW1hZ2VzID0ge1xuICAgICAgbGVhZjogW10sXG4gICAgICBmbG93ZXI6IFtdLFxuICAgICAgYmFyazogW10sXG4gICAgfTtcblxuICAgIGlmIChwbGFudERhdGEubWFpbl9zcGVjaWVzKSB7XG4gICAgICBpZiAocGxhbnREYXRhLm1haW5fc3BlY2llcy5pbWFnZXMgJiYgcGxhbnREYXRhLm1haW5fc3BlY2llcy5pbWFnZXMubGVhZikge1xuICAgICAgICBwbGFudERhdGEubWFpbl9zcGVjaWVzLmltYWdlcy5sZWFmLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgICAgaW1hZ2VzLmxlYWYucHVzaChpbWFnZS5pbWFnZV91cmwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYW50RGF0YS5tYWluX3NwZWNpZXMuaW1hZ2VzICYmIHBsYW50RGF0YS5tYWluX3NwZWNpZXMuaW1hZ2VzLmZsb3dlcikge1xuICAgICAgICBwbGFudERhdGEubWFpbl9zcGVjaWVzLmltYWdlcy5mbG93ZXIuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICBpbWFnZXMuZmxvd2VyLnB1c2goaW1hZ2UuaW1hZ2VfdXJsKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbGFudERhdGEubWFpbl9zcGVjaWVzLmltYWdlcyAmJiBwbGFudERhdGEubWFpbl9zcGVjaWVzLmltYWdlcy5iYXJrKSB7XG4gICAgICAgIHBsYW50RGF0YS5tYWluX3NwZWNpZXMuaW1hZ2VzLmJhcmsuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICBpbWFnZXMuYmFyay5wdXNoKGltYWdlLmltYWdlX3VybCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21tb25OYW1lcyA9IHBsYW50RGF0YS5tYWluX3NwZWNpZXMuY29tbW9uX25hbWVzXG4gICAgICAgID8gcGxhbnREYXRhLm1haW5fc3BlY2llcy5jb21tb25fbmFtZXMuZW5nIHx8IFtdXG4gICAgICAgIDogW107XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSB7XG4gICAgICAgIGNvbW1vbl9uYW1lczoge1xuICAgICAgICAgIGVuZzogY29tbW9uTmFtZXMsXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlcyxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRhO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgY29tbW9uX25hbWVzOiB7XG4gICAgICAgIGVuZzogW10sXG4gICAgICB9LFxuICAgICAgaW1hZ2VzOiB7XG4gICAgICAgIGxlYWY6IFtdLFxuICAgICAgICBmbG93ZXI6IFtdLFxuICAgICAgICBiYXJrOiBbXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwbGFudCBkYXRhIGJ5IHNsdWc6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBjb21tb25fbmFtZXM6IHtcbiAgICAgICAgZW5nOiBbXSxcbiAgICAgIH0sXG4gICAgICBpbWFnZXM6IHtcbiAgICAgICAgbGVhZjogW10sXG4gICAgICAgIGZsb3dlcjogW10sXG4gICAgICAgIGJhcms6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5cbmV4cG9ydCBjb25zdCBmZXRjaFdpa2lwZWRpYURlc2NyaXB0aW9uID0gYXN5bmMgKGNvbW1vbk5hbWUpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBTdGVwIDE6IFBlcmZvcm0gYSBHb29nbGUgc2VhcmNoIHRvIGZpbmQgdGhlIFdpa2lwZWRpYSBsaW5rXG4gICAgY29uc3QgZ29vZ2xlU2VhcmNoVXJsID0gYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9JHtjb21tb25OYW1lfStzaXRlOndpa2lwZWRpYS5vcmdgO1xuICAgIGNvbnN0IGdvb2dsZVNlYXJjaFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGdvb2dsZVNlYXJjaFVybCk7XG4gICAgY29uc3QgZ29vZ2xlU2VhcmNoSHRtbCA9IGdvb2dsZVNlYXJjaFJlc3BvbnNlLmRhdGE7XG5cbiAgICAvLyBTdGVwIDI6IEV4dHJhY3QgdGhlIFdpa2lwZWRpYSBsaW5rIGZyb20gdGhlIHNlYXJjaCByZXN1bHRzXG4gICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChnb29nbGVTZWFyY2hIdG1sKTtcbiAgICBjb25zdCB3aWtpcGVkaWFMaW5rID0gJCgnYVtocmVmXj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1wiXScpLmF0dHIoJ2hyZWYnKTtcblxuICAgIGlmICghd2lraXBlZGlhTGluaykge1xuICAgICAgcmV0dXJuICdObyBXaWtpcGVkaWEgcGFnZSBmb3VuZCc7XG4gICAgfVxuXG4gICAgLy8gU3RlcCAzOiBNYWtlIGFuIEhUVFAgcmVxdWVzdCB0byB0aGUgV2lraXBlZGlhIHBhZ2VcbiAgICBjb25zdCB3aWtpcGVkaWFSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh3aWtpcGVkaWFMaW5rKTtcbiAgICBjb25zdCB3aWtpcGVkaWFIdG1sID0gd2lraXBlZGlhUmVzcG9uc2UuZGF0YTtcblxuICAgIC8vIFN0ZXAgNDogUGFyc2UgdGhlIFdpa2lwZWRpYSBwYWdlIGFuZCBleHRyYWN0IHRoZSBkZXNjcmlwdGlvblxuICAgIGNvbnN0ICQkID0gY2hlZXJpby5sb2FkKHdpa2lwZWRpYUh0bWwpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9ICcnO1xuICAgIFxuICAgIC8vIEZpbmQgdGhlIGZpcnN0IHBhcmFncmFwaCB0aGF0IGRvZXNuJ3QgY29udGFpbiBhIGdhbGxlcnkgbGlua1xuICAgICQkKCdwJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSAkJChlbGVtZW50KS50ZXh0KCk7XG4gICAgICBcbiAgICAgIGlmICghdGV4dC5pbmNsdWRlcygnR2FsbGVyeScpICYmIHRleHQudHJpbSgpICE9PSAnJykge1xuICAgICAgICBkZXNjcmlwdGlvbiArPSB0ZXh0ICsgJyAnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uLnRyaW0oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBXaWtpcGVkaWEgZGVzY3JpcHRpb246JywgZXJyb3IpO1xuICAgIHJldHVybiAnRXJyb3IgZmV0Y2hpbmcgV2lraXBlZGlhIGRlc2NyaXB0aW9uJztcbiAgfVxufTsiXSwibmFtZXMiOlsiYXhpb3MiLCJjaGVlcmlvIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJzZWFyY2hWYWx1ZSIsInNldFBsYW50RGF0YSIsInNldEZsb3dlckRhdGEiLCJzZXRGb2xpYWdlRGF0YSIsInNldEdyb3d0aERhdGEiLCJBUElfS0VZIiwiYXBpVXJsIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hGbG93ZXJEYXRhIiwiZmV0Y2hGb2xpYWdlRGF0YSIsImZldGNoR3Jvd3RoRGF0YSIsImZldGNoU2x1ZyIsInNsdWciLCJwbGFudERhdGEiLCJpbWFnZXMiLCJsZWFmIiwiZmxvd2VyIiwiYmFyayIsIm1haW5fc3BlY2llcyIsImZvckVhY2giLCJpbWFnZSIsInB1c2giLCJpbWFnZV91cmwiLCJjb21tb25OYW1lcyIsImNvbW1vbl9uYW1lcyIsImVuZyIsImZvcm1hdHRlZERhdGEiLCJmZXRjaFdpa2lwZWRpYURlc2NyaXB0aW9uIiwiY29tbW9uTmFtZSIsImdvb2dsZVNlYXJjaFVybCIsImdvb2dsZVNlYXJjaFJlc3BvbnNlIiwiZ29vZ2xlU2VhcmNoSHRtbCIsIiQiLCJsb2FkIiwid2lraXBlZGlhTGluayIsImF0dHIiLCJ3aWtpcGVkaWFSZXNwb25zZSIsIndpa2lwZWRpYUh0bWwiLCIkJCIsImRlc2NyaXB0aW9uIiwiZWFjaCIsImluZGV4IiwiZWxlbWVudCIsInRleHQiLCJpbmNsdWRlcyIsInRyaW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/api.js\n"));

/***/ })

});