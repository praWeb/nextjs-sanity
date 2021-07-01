/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/pokemon/[pokemon]";
exports.ids = ["pages/pokemon/[pokemon]"];
exports.modules = {

/***/ "./pages/pokemon/[pokemon].js":
/*!************************************!*\
  !*** ./pages/pokemon/[pokemon].js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pokemon.module.css */ \"./pages/pokemon/Pokemon.module.css\");\n/* harmony import */ var _Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/prasannagaddam/jamstack/nextjs-sanity/pages/pokemon/[pokemon].js\";\n\n\n\nfunction Pokemon({\n  pokemon\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [\" Pokemon \", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n      children: [\"Welcome, \", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name, \"!\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: pokemon === null || pokemon === void 0 ? void 0 : pokemon.sprites.front_default\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n} // Dynamic routing in nextjs\n\n\nasync function getStaticPaths() {\n  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');\n  const pokemons = await response.json();\n  let paths = pokemons.results.map(p => {\n    return `/pokemon/${p.name}`;\n  });\n  return {\n    paths,\n    fallback: false\n  };\n} // build time data\n\nasync function getStaticProps({\n  params\n}) {\n  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);\n  const pokemon = await response.json();\n  return {\n    props: {\n      pokemon\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc2FuaXR5Ly4vcGFnZXMvcG9rZW1vbi9bcG9rZW1vbl0uanM/OWRlNSJdLCJuYW1lcyI6WyJQb2tlbW9uIiwicG9rZW1vbiIsIm5hbWUiLCJzdHlsZXMiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsImdldFN0YXRpY1BhdGhzIiwicmVzcG9uc2UiLCJmZXRjaCIsInBva2Vtb25zIiwianNvbiIsInBhdGhzIiwicmVzdWx0cyIsIm1hcCIsInAiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCO0FBQUVDO0FBQUYsQ0FBakIsRUFBOEI7QUFDNUIsc0JBQVE7QUFBQSw0QkFDTiw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUEsZ0NBQWlCQSxPQUFqQixhQUFpQkEsT0FBakIsdUJBQWlCQSxPQUFPLENBQUVDLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGVBS047QUFBSyxlQUFTLEVBQUVDLHNFQUFoQjtBQUFBLDhCQUNZRixPQURaLGFBQ1lBLE9BRFosdUJBQ1lBLE9BQU8sQ0FBRUMsSUFEckIsb0JBRUU7QUFBSyxXQUFHLEVBQUVELE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFRyxPQUFULENBQWlCQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTE07QUFBQSxrQkFBUjtBQVdELEMsQ0FFRDs7O0FBQ08sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDZDQUFELENBQTVCO0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUF2QjtBQUNBLE1BQUlDLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxPQUFULENBQWlCQyxHQUFqQixDQUFxQkMsQ0FBQyxJQUFJO0FBQ3BDLFdBQVEsWUFBV0EsQ0FBQyxDQUFDWixJQUFLLEVBQTFCO0FBQ0QsR0FGVyxDQUFaO0FBSUEsU0FBTztBQUNMUyxTQURLO0FBRUxJLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRCxDLENBRUQ7O0FBQ08sZUFBZUMsY0FBZixDQUE4QjtBQUFFQztBQUFGLENBQTlCLEVBQTBDO0FBQy9DLFFBQU1WLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUscUNBQW9DUyxNQUFNLENBQUNoQixPQUFRLEVBQXJELENBQTVCO0FBRUEsUUFBTUEsT0FBTyxHQUFHLE1BQU1NLFFBQVEsQ0FBQ0csSUFBVCxFQUF0QjtBQUVBLFNBQU87QUFDTFEsU0FBSyxFQUFFO0FBQ0xqQjtBQURLO0FBREYsR0FBUDtBQUtEO0FBRUQsK0RBQWVELE9BQWYiLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1twb2tlbW9uXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qb2tlbW9uLm1vZHVsZS5jc3MnXG5cbmZ1bmN0aW9uIFBva2Vtb24oeyBwb2tlbW9uIH0pIHtcbiAgcmV0dXJuICg8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPiBQb2tlbW9uIHtwb2tlbW9uPy5uYW1lfTwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIFdlbGNvbWUsIHtwb2tlbW9uPy5uYW1lfSFcbiAgICAgIDxpbWcgc3JjPXtwb2tlbW9uPy5zcHJpdGVzLmZyb250X2RlZmF1bHR9Lz5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG4vLyBEeW5hbWljIHJvdXRpbmcgaW4gbmV4dGpzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0xNTEnKVxuXG4gIGNvbnN0IHBva2Vtb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIGxldCBwYXRocyA9IHBva2Vtb25zLnJlc3VsdHMubWFwKHAgPT4ge1xuICAgIHJldHVybiBgL3Bva2Vtb24vJHtwLm5hbWV9YFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cblxuLy8gYnVpbGQgdGltZSBkYXRhXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtwYXJhbXMucG9rZW1vbn1gKVxuXG4gIGNvbnN0IHBva2Vtb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb2tlbW9uXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokemon/[pokemon].js\n");

/***/ }),

/***/ "./pages/pokemon/Pokemon.module.css":
/*!******************************************!*\
  !*** ./pages/pokemon/Pokemon.module.css ***!
  \******************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Pokemon_container__1sVYt\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc2FuaXR5Ly4vcGFnZXMvcG9rZW1vbi9Qb2tlbW9uLm1vZHVsZS5jc3M/YTc5NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL3Bva2Vtb24vUG9rZW1vbi5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUG9rZW1vbl9jb250YWluZXJfXzFzVll0XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokemon/Pokemon.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/[pokemon].js"));
module.exports = __webpack_exports__;

})();