exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 5999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": function() { return /* binding */ config; }
/* harmony export */ });
const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'f2jgfozh',
  apiVersion: '2021-03-25',

  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: true
};

/***/ }),

/***/ 7474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s3": function() { return /* binding */ getClient; }
/* harmony export */ });
/* unused harmony exports sanityClient, previewClient */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7585);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5999);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// lib/sanity.server.js

 // Set up the client for fetching data in the getProps page functions

const sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v); // Set up a preview client with serverless authentication for drafts

const previewClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(_objectSpread(_objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v), {}, {
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || 'sk7hkdL3eIH1tteoKJk0xkmVbzR7vbcS5kC7O0SGEQc3C8kkmUvnD9RT1Kim1Jo6uIOIlcHWptOLmZS3DSgJWAZHLLsAxtUHZbLWXbdnyfU1KVEb3SJ5XfE4W8rP8A8ScODRoKUzjJYwF81NGf3Dy9CTVOW1iomvfZUKgYqt1gm6ZmHRTnF7'
})); // Helper function for easily switching between normal client and preview client

const getClient = usePreview => usePreview ? previewClient : sanityClient;

/***/ })

};
;