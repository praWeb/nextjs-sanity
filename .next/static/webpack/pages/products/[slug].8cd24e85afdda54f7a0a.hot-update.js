/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/[slug]",{

/***/ "./pages/products/[slug].js":
/*!**********************************!*\
  !*** ./pages/products/[slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_prasannagaddam_jamstack_nextjs_sanity_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-sanity */ \"./node_modules/next-sanity/dist/next-sanity.esm.js\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/sanity */ \"./lib/sanity.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/prasannagaddam/jamstack/nextjs-sanity/pages/products/[slug].js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_prasannagaddam_jamstack_nextjs_sanity_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  *[_type == \\\"product\\\" && slug.current == $slug][0] {\\n    _id,\\n    title,\\n    body,\\n    mainImage,\\n    categories[]->{\\n      _id,\\n      title\\n    },\\n    \\\"slug\\\": slug.current\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar productQuery = (0,next_sanity__WEBPACK_IMPORTED_MODULE_5__.groq)(_templateObject());\nvar __N_SSG = true;\nfunction Post(_ref) {\n  _s();\n\n  var _data$post, _data$post2, _data$post3;\n\n  var data = _ref.data,\n      preview = _ref.preview;\n  console.log(data);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _usePreviewSubscripti = (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_4__.usePreviewSubscription)(productQuery, {\n    params: {\n      slug: (_data$post = data.post) === null || _data$post === void 0 ? void 0 : _data$post.slug\n    },\n    initialData: data.post,\n    enabled: preview && ((_data$post2 = data.post) === null || _data$post2 === void 0 ? void 0 : _data$post2.slug)\n  }),\n      post = _usePreviewSubscripti.data;\n\n  if (!router.isFallback && !((_data$post3 = data.post) !== null && _data$post3 !== void 0 && _data$post3.slug)) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {\n      statusCode: 404\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 12\n    }, this);\n  }\n\n  var title = post.title,\n      mainImage = post.mainImage,\n      body = post.body;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_4__.urlFor)(mainImage).url()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_sanity__WEBPACK_IMPORTED_MODULE_4__.PortableText, {\n      blocks: body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Post, \"YbEqRco+wr2xj15fhlhqpyblSR4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, _lib_sanity__WEBPACK_IMPORTED_MODULE_4__.usePreviewSubscription];\n});\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzP2I5NGYiXSwibmFtZXMiOlsicHJvZHVjdFF1ZXJ5IiwiZ3JvcSIsIlBvc3QiLCJkYXRhIiwicHJldmlldyIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VQcmV2aWV3U3Vic2NyaXB0aW9uIiwicGFyYW1zIiwic2x1ZyIsInBvc3QiLCJpbml0aWFsRGF0YSIsImVuYWJsZWQiLCJpc0ZhbGxiYWNrIiwidGl0bGUiLCJtYWluSW1hZ2UiLCJib2R5IiwidXJsRm9yIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxZQUFZLEdBQUdDLGlEQUFILG1CQUFsQjs7QUFjZSxTQUFTQyxJQUFULE9BQStCO0FBQUE7O0FBQUE7O0FBQUEsTUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjtBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUM1Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUY0Qyw4QkFJdkJDLG1FQUFzQixDQUFDVCxZQUFELEVBQWU7QUFDeERVLFVBQU0sRUFBRTtBQUFDQyxVQUFJLGdCQUFFUixJQUFJLENBQUNTLElBQVAsK0NBQUUsV0FBV0Q7QUFBbEIsS0FEZ0Q7QUFFeERFLGVBQVcsRUFBRVYsSUFBSSxDQUFDUyxJQUZzQztBQUd4REUsV0FBTyxFQUFFVixPQUFPLG9CQUFJRCxJQUFJLENBQUNTLElBQVQsZ0RBQUksWUFBV0QsSUFBZjtBQUh3QyxHQUFmLENBSkM7QUFBQSxNQUkvQkMsSUFKK0IseUJBSXJDVCxJQUpxQzs7QUFVNUMsTUFBSSxDQUFDSSxNQUFNLENBQUNRLFVBQVIsSUFBc0IsaUJBQUNaLElBQUksQ0FBQ1MsSUFBTix3Q0FBQyxZQUFXRCxJQUFaLENBQTFCLEVBQTRDO0FBQzFDLHdCQUFPLDhEQUFDLG1EQUFEO0FBQVcsZ0JBQVUsRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFaMkMsTUFjckNLLEtBZHFDLEdBY1hKLElBZFcsQ0FjckNJLEtBZHFDO0FBQUEsTUFjOUJDLFNBZDhCLEdBY1hMLElBZFcsQ0FjOUJLLFNBZDhCO0FBQUEsTUFjbkJDLElBZG1CLEdBY1hOLElBZFcsQ0FjbkJNLElBZG1CO0FBZ0I1QyxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUcsbURBQU0sQ0FBQ0YsU0FBRCxDQUFOLENBQWtCRyxHQUFsQjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFLRSw4REFBQyxxREFBRDtBQUFjLFlBQU0sRUFBRUY7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBekJ1QmhCLEk7VUFFUE0sa0QsRUFFTUMsK0Q7OztLQUpDUCxJIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVycm9yUGFnZSBmcm9tICduZXh0L2Vycm9yJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtncm9xfSBmcm9tICduZXh0LXNhbml0eSdcbmltcG9ydCB7dXNlUHJldmlld1N1YnNjcmlwdGlvbiwgdXJsRm9yLCBQb3J0YWJsZVRleHR9IGZyb20gJy4uLy4uL2xpYi9zYW5pdHknXG5pbXBvcnQge2dldENsaWVudH0gZnJvbSAnLi4vLi4vbGliL3Nhbml0eS5zZXJ2ZXInXG5cbmNvbnN0IHByb2R1Y3RRdWVyeSA9IGdyb3FgXG4gICpbX3R5cGUgPT0gXCJwcm9kdWN0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXSB7XG4gICAgX2lkLFxuICAgIHRpdGxlLFxuICAgIGJvZHksXG4gICAgbWFpbkltYWdlLFxuICAgIGNhdGVnb3JpZXNbXS0+e1xuICAgICAgX2lkLFxuICAgICAgdGl0bGVcbiAgICB9LFxuICAgIFwic2x1Z1wiOiBzbHVnLmN1cnJlbnRcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtkYXRhLCBwcmV2aWV3fSkge1xuICBjb25zb2xlLmxvZyhkYXRhKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHtkYXRhOiBwb3N0fSA9IHVzZVByZXZpZXdTdWJzY3JpcHRpb24ocHJvZHVjdFF1ZXJ5LCB7XG4gICAgcGFyYW1zOiB7c2x1ZzogZGF0YS5wb3N0Py5zbHVnfSxcbiAgICBpbml0aWFsRGF0YTogZGF0YS5wb3N0LFxuICAgIGVuYWJsZWQ6IHByZXZpZXcgJiYgZGF0YS5wb3N0Py5zbHVnLFxuICB9KVxuXG4gIGlmICghcm91dGVyLmlzRmFsbGJhY2sgJiYgIWRhdGEucG9zdD8uc2x1Zykge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgfVxuXG4gIGNvbnN0IHt0aXRsZSwgbWFpbkltYWdlLCBib2R5fSA9IHBvc3RcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgPGZpZ3VyZT5cbiAgICAgICAgPGltZyBzcmM9e3VybEZvcihtYWluSW1hZ2UpLnVybCgpfSAvPlxuICAgICAgPC9maWd1cmU+XG4gICAgICA8UG9ydGFibGVUZXh0IGJsb2Nrcz17Ym9keX0gLz5cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXMsIHByZXZpZXcgPSBmYWxzZX0pIHtcbiAgY29uc29sZS5sb2cocGFyYW1zKVxuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKHBvc3RRdWVyeSwge1xuICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICB9KVxuICBjb25zb2xlLmxvZyhwb3N0KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByZXZpZXcsXG4gICAgICBkYXRhOiB7cG9zdH0sXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgZ3JvcWAqW190eXBlID09IFwicHJvZHVjdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gIClcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7cGFyYW1zOiB7c2x1Z319KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

/***/ })

});