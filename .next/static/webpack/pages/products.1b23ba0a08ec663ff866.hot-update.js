/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/prasannagaddam/jamstack/nextjs-sanity/pages/products/index.js\";\n\nvar __N_SSG = true;\nfunction Products(_ref) {\n  var _this = this;\n\n  var data = _ref.data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: data.product.map(function (product, index) {\n      var _pokemon;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"indent\",\n        children: [product.title, \" -\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: (_pokemon = pokemon) === null || _pokemon === void 0 ? void 0 : _pokemon.sprites.front_default\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"/products/\".concat(product.slug.current),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \" See Details \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, _this)]\n      }, index, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false);\n}\n_c = Products;\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanM/OWIyZSJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsImRhdGEiLCJwcm9kdWN0IiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsInBva2Vtb24iLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsInNsdWciLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0E7O0FBWWUsU0FBU0EsUUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUN4QyxzQkFDRTtBQUFBLGNBQ0lBLElBQUksQ0FBQ0MsT0FBTCxDQUFhQyxHQUFiLENBQWlCLFVBQUNELE9BQUQsRUFBVUUsS0FBVjtBQUFBOztBQUFBLDBCQUNqQjtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLG1CQUNLRixPQUFPLENBQUNHLEtBRGIscUJBRUk7QUFBSyxhQUFHLGNBQUVDLE9BQUYsNkNBQUUsU0FBU0MsT0FBVCxDQUFpQkM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxzQkFBZU4sT0FBTyxDQUFDTyxJQUFSLENBQWFDLE9BQTVCLENBQVY7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQSxTQUE2Qk4sS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURpQjtBQUFBLEtBQWpCO0FBREosbUJBREY7QUFhRDtLQWR1QkosUSIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncm9xfSBmcm9tICduZXh0LXNhbml0eSdcbmltcG9ydCB7Z2V0Q2xpZW50fSBmcm9tICcuLi8uLi9saWIvc2FuaXR5LnNlcnZlcidcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBwcm9kdWN0UXVlcnkgPSBncm9xYFxuICAqW190eXBlID09IFwicHJvZHVjdFwiXSB7XG4gICAgdGl0bGUsXG4gICAgc2x1ZyxcbiAgICBfaWQsXG4gICAgXCJwcmljZVwiOiBkZWZhdWx0UHJvZHVjdFZhcmlhbnQucHJpY2UsXG4gICAgXCJpbWFnZVVybFwiOiBkZWZhdWx0UHJvZHVjdFZhcmlhbnQuaW1hZ2VzWzBdLmFzc2V0LT51cmxcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cyAoe2RhdGF9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsgZGF0YS5wcm9kdWN0Lm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRlbnRcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfSAtIFxuICAgICAgICAgICAgPGltZyBzcmM9e3Bva2Vtb24/LnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0vPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3Quc2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICAgICAgICA8YT4gU2VlIERldGFpbHMgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpIH1cbiAgICA8Lz5cbiAgKSBcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtcywgcHJldmlldyA9IGZhbHNlfSkge1xuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKHByb2R1Y3RRdWVyeSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJldmlldyxcbiAgICAgIGRhdGE6IHtwcm9kdWN0fSxcbiAgICB9LFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/index.js\n");

/***/ })

});