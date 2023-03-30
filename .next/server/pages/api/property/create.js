"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/property/create";
exports.ids = ["pages/api/property/create"];
exports.modules = {

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "(api)/./src/pages/api/property/create.js":
/*!******************************************!*\
  !*** ./src/pages/api/property/create.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const form = new (formidable__WEBPACK_IMPORTED_MODULE_0___default().IncomingForm)();\n    form.uploadDir = \"./\";\n    form.keepExtensions = true;\n    form.parse(req, (err, fields, files)=>{\n        if (err) {\n            return res.send(err);\n        }\n        console.log(err, fields, files);\n        return res.send(files.images);\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb3BlcnR5L2NyZWF0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9DO0FBRTdCLE1BQU1DLE1BQU0sR0FBRztJQUNwQkMsR0FBRyxFQUFFO1FBQ0hDLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0NBQ0YsQ0FBQztBQUVGLGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLE1BQU1DLElBQUksR0FBRyxJQUFJTixnRUFBdUIsRUFBRTtJQUMxQ00sSUFBSSxDQUFDRSxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3RCRixJQUFJLENBQUNHLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDM0JILElBQUksQ0FBQ0ksS0FBSyxDQUFDTixHQUFHLEVBQUUsQ0FBQ08sR0FBRyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssR0FBSztRQUN0QyxJQUFHRixHQUFHLEVBQUM7WUFDSCxPQUFPTixHQUFHLENBQUNTLElBQUksQ0FBQ0gsR0FBRyxDQUFDO1FBQ3hCLENBQUM7UUFDREksT0FBTyxDQUFDQyxHQUFHLENBQUNMLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxPQUFPUixHQUFHLENBQUNTLElBQUksQ0FBQ0QsS0FBSyxDQUFDSSxNQUFNLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kaG91c2UvLi9zcmMvcGFnZXMvYXBpL3Byb3BlcnR5L2NyZWF0ZS5qcz8zNjQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JtaWRhYmxlIGZyb20gJ2Zvcm1pZGFibGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBmb3JtID0gbmV3IGZvcm1pZGFibGUuSW5jb21pbmdGb3JtKCk7XHJcbiAgZm9ybS51cGxvYWREaXIgPSBcIi4vXCI7XHJcbiAgZm9ybS5rZWVwRXh0ZW5zaW9ucyA9IHRydWU7XHJcbiAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcclxuICAgIGlmKGVycil7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKGVycilcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGVyciwgZmllbGRzLCBmaWxlcyk7XHJcbiAgICByZXR1cm4gcmVzLnNlbmQoZmlsZXMuaW1hZ2VzKVxyXG4gIH0pO1xyXG59OyJdLCJuYW1lcyI6WyJmb3JtaWRhYmxlIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlcSIsInJlcyIsImZvcm0iLCJJbmNvbWluZ0Zvcm0iLCJ1cGxvYWREaXIiLCJrZWVwRXh0ZW5zaW9ucyIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsImltYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/property/create.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/property/create.js"));
module.exports = __webpack_exports__;

})();