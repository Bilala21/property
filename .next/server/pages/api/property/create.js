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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const form = new (formidable__WEBPACK_IMPORTED_MODULE_0___default().IncomingForm)();\n    form.uploadDir = \"./\";\n    form.keepExtensions = true;\n    form.parse(req, (err, fields, files)=>{\n        if (err) {\n            return res.send(err);\n        }\n        console.log(fields.title);\n        return res.send(files);\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb3BlcnR5L2NyZWF0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9DO0FBRTdCLE1BQU1DLE1BQU0sR0FBRztJQUNwQkMsR0FBRyxFQUFFO1FBQ0hDLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0NBQ0YsQ0FBQztBQUVGLGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLE1BQU1DLElBQUksR0FBRyxJQUFJTixnRUFBdUIsRUFBRTtJQUMxQ00sSUFBSSxDQUFDRSxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3RCRixJQUFJLENBQUNHLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDM0JILElBQUksQ0FBQ0ksS0FBSyxDQUFDTixHQUFHLEVBQUUsQ0FBQ08sR0FBRyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssR0FBSztRQUN0QyxJQUFHRixHQUFHLEVBQUM7WUFDSCxPQUFPTixHQUFHLENBQUNTLElBQUksQ0FBQ0gsR0FBRyxDQUFDO1FBQ3hCLENBQUM7UUFDREksT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDLENBQUM7UUFDMUIsT0FBT1osR0FBRyxDQUFDUyxJQUFJLENBQUNELEtBQUssQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmRob3VzZS8uL3NyYy9wYWdlcy9hcGkvcHJvcGVydHkvY3JlYXRlLmpzPzM2NDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZvcm1pZGFibGUgZnJvbSAnZm9ybWlkYWJsZSc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaToge1xyXG4gICAgYm9keVBhcnNlcjogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBuZXcgZm9ybWlkYWJsZS5JbmNvbWluZ0Zvcm0oKTtcclxuICBmb3JtLnVwbG9hZERpciA9IFwiLi9cIjtcclxuICBmb3JtLmtlZXBFeHRlbnNpb25zID0gdHJ1ZTtcclxuICBmb3JtLnBhcnNlKHJlcSwgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xyXG4gICAgaWYoZXJyKXtcclxuICAgICAgICByZXR1cm4gcmVzLnNlbmQoZXJyKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZmllbGRzLnRpdGxlKTtcclxuICAgIHJldHVybiByZXMuc2VuZChmaWxlcylcclxuICB9KTtcclxufTsiXSwibmFtZXMiOlsiZm9ybWlkYWJsZSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJyZXEiLCJyZXMiLCJmb3JtIiwiSW5jb21pbmdGb3JtIiwidXBsb2FkRGlyIiwia2VlcEV4dGVuc2lvbnMiLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwic2VuZCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/property/create.js\n");

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