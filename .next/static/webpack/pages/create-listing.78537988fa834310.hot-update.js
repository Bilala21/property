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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"property_for_sale\": function() { return /* binding */ property_for_sale; }\n/* harmony export */ });\nvar property_for_sale = {\n    \"property_type\": {\n        element: \"select\",\n        label: \"property_type\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"size\": {\n        element: \"input\",\n        type: \"number\",\n        label: \"size\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"developer\": {\n        element: \"input\",\n        type: \"text\",\n        label: \"developer\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"property_reference\": {\n        element: \"input\",\n        type: \"text\",\n        label: \"property_reference\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"occupancy_statuce\": {\n        element: \"select\",\n        label: \"occupancy_statuce\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ],\n        options: [\n            \"vacant\",\n            \"occupaid\"\n        ]\n    },\n    \"seller_type\": {\n        element: \"select\",\n        label: \"seller_type\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ],\n        options: [\n            \"landlord\",\n            \"owner\"\n        ]\n    },\n    \"zoned_for\": {\n        element: \"input\",\n        type: \"text\",\n        label: \"zoned_for\",\n        form_field: [\n            \"land-for-sale\"\n        ]\n    },\n    \"bedrooms\": {\n        element: \"select\",\n        label: \"Bedrooms\",\n        form_field: [\n            \"residential-for-sale\"\n        ],\n        options: [\n            1,\n            2,\n            3,\n            4,\n            5\n        ]\n    },\n    \"bathrooms\": {\n        element: \"select\",\n        label: \"Bathrooms\",\n        form_field: [\n            \"residential-for-sale\"\n        ],\n        options: [\n            1,\n            2,\n            3,\n            4,\n            5\n        ]\n    },\n    \"community_fees\": {\n        element: \"input\",\n        type: \"number\",\n        label: \"community_fees\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"buyer_transfer_fees\": {\n        element: \"input\",\n        type: \"number\",\n        label: \"buyer_transfer_fess\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"seller_transfer_fess\": {\n        element: \"input\",\n        type: \"number\",\n        label: \"seller_transfer_fess\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"maintenance_fees\": {\n        element: \"input\",\n        type: \"number\",\n        label: \"maintenance_fees\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    },\n    \"freehold\": {\n        element: \"select\",\n        label: \"freehold\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ],\n        options: [\n            \"yes\",\n            \"no\"\n        ]\n    },\n    \"real_estate_agnet\": {\n        element: \"input\",\n        type: \"text\",\n        label: \"real_estate_agnet\",\n        form_field: [\n            \"residential-for-sale\",\n            \"commercial-for-sale\"\n        ]\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLE9BQU87UUFDaEJHLElBQUksRUFBQyxRQUFRO1FBQ2JGLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLFVBQVUsRUFBRTtZQUFDLHNCQUFzQjtZQUFFLHFCQUFxQjtTQUFDO0tBQzlEO0lBQ0QsVUFBVSxFQUFFO1FBQ1JGLE9BQU8sRUFBRSxRQUFRO1FBQ2pCQyxLQUFLLEVBQUMsVUFBVTtRQUNoQkMsVUFBVSxFQUFFO1lBQUMsc0JBQXNCO1lBQUUscUJBQXFCO1NBQUM7UUFDM0RFLE9BQU8sRUFBRTtZQUFDLEtBQUs7WUFBRSxJQUFJO1NBQUM7S0FDekI7SUFDRCxtQkFBbUIsRUFBRTtRQUNqQkosT0FBTyxFQUFFLE9BQU87UUFDaEJHLElBQUksRUFBQyxNQUFNO1FBQ1hGLEtBQUssRUFBQyxtQkFBbUI7UUFDekJDLFVBQVUsRUFBRTtZQUFDLHNCQUFzQjtZQUFFLHFCQUFxQjtTQUFDO0tBQzlEO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvZm9ybUZpZWxkcy5qcz9lYzFkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9wZXJ0eV9mb3Jfc2FsZSA9IHtcclxuICAgIFwicHJvcGVydHlfdHlwZVwiOiB7XHJcbiAgICAgICAgZWxlbWVudDogXCJzZWxlY3RcIixcclxuICAgICAgICBsYWJlbDpcInByb3BlcnR5X3R5cGVcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcImNvbW1lcmNpYWwtZm9yLXNhbGVcIl0sXHJcbiAgICB9LFxyXG4gICAgXCJzaXplXCI6IHtcclxuICAgICAgICBlbGVtZW50OiBcImlucHV0XCIsXHJcbiAgICAgICAgdHlwZTpcIm51bWJlclwiLFxyXG4gICAgICAgIGxhYmVsOlwic2l6ZVwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwiY29tbWVyY2lhbC1mb3Itc2FsZVwiXSxcclxuICAgIH0sXHJcbiAgICBcImRldmVsb3BlclwiOiB7XHJcbiAgICAgICAgZWxlbWVudDogXCJpbnB1dFwiLFxyXG4gICAgICAgIHR5cGU6XCJ0ZXh0XCIsXHJcbiAgICAgICAgbGFiZWw6XCJkZXZlbG9wZXJcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcImNvbW1lcmNpYWwtZm9yLXNhbGVcIl0sXHJcbiAgICB9LFxyXG4gICAgXCJwcm9wZXJ0eV9yZWZlcmVuY2VcIjoge1xyXG4gICAgICAgIGVsZW1lbnQ6IFwiaW5wdXRcIixcclxuICAgICAgICB0eXBlOlwidGV4dFwiLFxyXG4gICAgICAgIGxhYmVsOlwicHJvcGVydHlfcmVmZXJlbmNlXCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJjb21tZXJjaWFsLWZvci1zYWxlXCJdLFxyXG4gICAgfSxcclxuICAgIFwib2NjdXBhbmN5X3N0YXR1Y2VcIjoge1xyXG4gICAgICAgIGVsZW1lbnQ6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgbGFiZWw6XCJvY2N1cGFuY3lfc3RhdHVjZVwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwiY29tbWVyY2lhbC1mb3Itc2FsZVwiXSxcclxuICAgICAgICBvcHRpb25zOiBbXCJ2YWNhbnRcIiwgXCJvY2N1cGFpZFwiXVxyXG4gICAgfSxcclxuICAgIFwic2VsbGVyX3R5cGVcIjoge1xyXG4gICAgICAgIGVsZW1lbnQ6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgbGFiZWw6XCJzZWxsZXJfdHlwZVwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwiY29tbWVyY2lhbC1mb3Itc2FsZVwiXSxcclxuICAgICAgICBvcHRpb25zOiBbXCJsYW5kbG9yZFwiLCBcIm93bmVyXCJdXHJcbiAgICB9LFxyXG4gICAgXCJ6b25lZF9mb3JcIjoge1xyXG4gICAgICAgIGVsZW1lbnQ6IFwiaW5wdXRcIixcclxuICAgICAgICB0eXBlOlwidGV4dFwiLFxyXG4gICAgICAgIGxhYmVsOlwiem9uZWRfZm9yXCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wibGFuZC1mb3Itc2FsZVwiXSxcclxuICAgIH0sXHJcbiAgICBcImJlZHJvb21zXCI6IHtcclxuICAgICAgICBlbGVtZW50OiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGxhYmVsOlwiQmVkcm9vbXNcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiXSxcclxuICAgICAgICBvcHRpb25zOiBbMSwgMiwgMywgNCwgNV0sXHJcbiAgICB9LFxyXG4gICAgXCJiYXRocm9vbXNcIjoge1xyXG4gICAgICAgIGVsZW1lbnQ6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgbGFiZWw6XCJCYXRocm9vbXNcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiXSxcclxuICAgICAgICBvcHRpb25zOiBbMSwgMiwgMywgNCwgNV0sXHJcbiAgICB9LFxyXG4gICAgXCJjb21tdW5pdHlfZmVlc1wiOiB7XHJcbiAgICAgICAgZWxlbWVudDogXCJpbnB1dFwiLFxyXG4gICAgICAgIHR5cGU6XCJudW1iZXJcIixcclxuICAgICAgICBsYWJlbDpcImNvbW11bml0eV9mZWVzXCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJjb21tZXJjaWFsLWZvci1zYWxlXCJdLFxyXG4gICAgfSxcclxuICAgIFwiYnV5ZXJfdHJhbnNmZXJfZmVlc1wiOiB7XHJcbiAgICAgICAgZWxlbWVudDogXCJpbnB1dFwiLFxyXG4gICAgICAgIHR5cGU6XCJudW1iZXJcIixcclxuICAgICAgICBsYWJlbDpcImJ1eWVyX3RyYW5zZmVyX2Zlc3NcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcImNvbW1lcmNpYWwtZm9yLXNhbGVcIl0sXHJcbiAgICB9LFxyXG4gICAgXCJzZWxsZXJfdHJhbnNmZXJfZmVzc1wiOiB7XHJcbiAgICAgICAgZWxlbWVudDogXCJpbnB1dFwiLFxyXG4gICAgICAgIHR5cGU6XCJudW1iZXJcIixcclxuICAgICAgICBsYWJlbDpcInNlbGxlcl90cmFuc2Zlcl9mZXNzXCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJjb21tZXJjaWFsLWZvci1zYWxlXCJdLFxyXG4gICAgfSxcclxuICAgIFwibWFpbnRlbmFuY2VfZmVlc1wiOiB7XHJcbiAgICAgICAgZWxlbWVudDogXCJpbnB1dFwiLFxyXG4gICAgICAgIHR5cGU6XCJudW1iZXJcIixcclxuICAgICAgICBsYWJlbDpcIm1haW50ZW5hbmNlX2ZlZXNcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcImNvbW1lcmNpYWwtZm9yLXNhbGVcIl0sXHJcbiAgICB9LFxyXG4gICAgXCJmcmVlaG9sZFwiOiB7XHJcbiAgICAgICAgZWxlbWVudDogXCJzZWxlY3RcIixcclxuICAgICAgICBsYWJlbDpcImZyZWVob2xkXCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJjb21tZXJjaWFsLWZvci1zYWxlXCJdLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcInllc1wiLCBcIm5vXCJdXHJcbiAgICB9LFxyXG4gICAgXCJyZWFsX2VzdGF0ZV9hZ25ldFwiOiB7XHJcbiAgICAgICAgZWxlbWVudDogXCJpbnB1dFwiLFxyXG4gICAgICAgIHR5cGU6XCJ0ZXh0XCIsXHJcbiAgICAgICAgbGFiZWw6XCJyZWFsX2VzdGF0ZV9hZ25ldFwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwiY29tbWVyY2lhbC1mb3Itc2FsZVwiXSxcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJwcm9wZXJ0eV9mb3Jfc2FsZSIsImVsZW1lbnQiLCJsYWJlbCIsImZvcm1fZmllbGQiLCJ0eXBlIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/formFields.js\n"));

/***/ })

});