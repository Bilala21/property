"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-listing",{

/***/ "./src/data/formFields.js":
/*!********************************!*\
  !*** ./src/data/formFields.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"property_for_sale\": function() { return /* binding */ property_for_sale; }\n/* harmony export */ });\nvar property_for_sale = {\n    \"property_type\": {\n        type: \"select\",\n        label: \"\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"developer\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"property_reference\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"occupancy_statuce\": {\n        type: \"select\",\n        label: \"\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ],\n        options: [\n            \"vacant\",\n            \"occupaid\"\n        ]\n    },\n    \"seller_type\": {\n        type: \"select\",\n        label: \"\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ],\n        options: [\n            \"landlord\",\n            \"owner\"\n        ]\n    },\n    \"zoned_for\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"bedrooms\": {\n        type: \"select\",\n        field_label: \"Bedrooms\",\n        form_field: [\n            \"residential-for-sale\"\n        ],\n        options: [\n            1,\n            2,\n            3,\n            4,\n            5\n        ]\n    },\n    \"bathrooms\": {\n        type: \"select\",\n        field_label: \"Bathrooms\",\n        form_field: [\n            \"residential-for-sale\"\n        ],\n        options: [\n            1,\n            2,\n            3,\n            4,\n            5\n        ]\n    },\n    \"community_fees\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"buyer_transfer_fess\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"seller_transfer_fess\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"maintenance_fess\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"freehold\": {\n        type: \"select\",\n        label: \"\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ],\n        options: [\n            \"yes\",\n            \"no\"\n        ]\n    },\n    \"real_estate_agnet\": {\n        type: \"input\",\n        label: \"real_estate_agnet\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9wZXJ0eV9mb3Jfc2FsZSA9IHtcclxuICAgIFwicHJvcGVydHlfdHlwZVwiOiB7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBsYWJlbDpcIlwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwiY29tbWVyY2lhbC1mb3Itc2FsZVwiXSxcclxuICAgIH0sXHJcbiAgICBcImRldmVsb3BlclwiOiB7XHJcbiAgICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwiY29tbWVyY2lhbC1mb3Itc2FsZVwiXSxcclxuICAgIH0sXHJcbiAgICBcInByb3BlcnR5X3JlZmVyZW5jZVwiOiB7XHJcbiAgICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwiY29tbWVyY2lhbC1mb3Itc2FsZVwiXSxcclxuICAgIH0sXHJcbiAgICBcIm9jY3VwYW5jeV9zdGF0dWNlXCI6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGxhYmVsOlwiXCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJjb21tZXJjaWFsLWZvci1zYWxlXCJdLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcInZhY2FudFwiLCBcIm9jY3VwYWlkXCJdXHJcbiAgICB9LFxyXG4gICAgXCJzZWxsZXJfdHlwZVwiOiB7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBsYWJlbDpcIlwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwiY29tbWVyY2lhbC1mb3Itc2FsZVwiXSxcclxuICAgICAgICBvcHRpb25zOiBbXCJsYW5kbG9yZFwiLCBcIm93bmVyXCJdXHJcbiAgICB9LFxyXG4gICAgXCJ6b25lZF9mb3JcIjoge1xyXG4gICAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcImNvbW1lcmNpYWwtZm9yLXNhbGVcIl0sXHJcbiAgICB9LFxyXG4gICAgXCJiZWRyb29tc1wiOiB7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBmaWVsZF9sYWJlbDpcIkJlZHJvb21zXCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIl0sXHJcbiAgICAgICAgb3B0aW9uczogWzEsIDIsIDMsIDQsIDVdLFxyXG4gICAgfSxcclxuICAgIFwiYmF0aHJvb21zXCI6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGZpZWxkX2xhYmVsOlwiQmF0aHJvb21zXCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIl0sXHJcbiAgICAgICAgb3B0aW9uczogWzEsIDIsIDMsIDQsIDVdLFxyXG4gICAgfSxcclxuICAgIFwiY29tbXVuaXR5X2ZlZXNcIjoge1xyXG4gICAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcImNvbW1lcmNpYWwtZm9yLXNhbGVcIl0sXHJcbiAgICB9LFxyXG4gICAgXCJidXllcl90cmFuc2Zlcl9mZXNzXCI6IHtcclxuICAgICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJjb21tZXJjaWFsLWZvci1zYWxlXCJdLFxyXG4gICAgfSxcclxuICAgIFwic2VsbGVyX3RyYW5zZmVyX2Zlc3NcIjoge1xyXG4gICAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcImNvbW1lcmNpYWwtZm9yLXNhbGVcIl0sXHJcbiAgICB9LFxyXG4gICAgXCJtYWludGVuYW5jZV9mZXNzXCI6IHtcclxuICAgICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJjb21tZXJjaWFsLWZvci1zYWxlXCJdLFxyXG4gICAgfSxcclxuICAgIFwiZnJlZWhvbGRcIjoge1xyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgbGFiZWw6XCJcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcImNvbW1lcmNpYWwtZm9yLXNhbGVcIl0sXHJcbiAgICAgICAgb3B0aW9uczogW1wieWVzXCIsIFwibm9cIl1cclxuICAgIH0sXHJcbiAgICBcInJlYWxfZXN0YXRlX2FnbmV0XCI6IHtcclxuICAgICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgbGFiZWw6XCJyZWFsX2VzdGF0ZV9hZ25ldFwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwiY29tbWVyY2lhbC1mb3Itc2FsZVwiXSxcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJwcm9wZXJ0eV9mb3Jfc2FsZSIsInR5cGUiLCJsYWJlbCIsImZvcm1fZmllbGQiLCJvcHRpb25zIiwiZmllbGRfbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/formFields.js\n"));

/***/ })

});