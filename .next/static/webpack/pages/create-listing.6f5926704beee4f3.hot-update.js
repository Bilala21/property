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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"property_for_sale\": function() { return /* binding */ property_for_sale; }\n/* harmony export */ });\nvar property_for_sale = {\n    \"property_type\": {\n        type: \"select\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ]\n    },\n    \"developer\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ]\n    },\n    \"property_reference\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ]\n    },\n    \"occupancy_statuce\": {\n        type: \"select\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ],\n        options: [\n            \"vacant\",\n            \"occupaid\"\n        ]\n    },\n    \"seller_type\": {\n        type: \"select\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ],\n        options: [\n            \"landlord\",\n            \"owner\"\n        ]\n    },\n    \"zoned_for\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ]\n    },\n    \"bedrooms\": {\n        type: \"select\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ],\n        options: [\n            1,\n            2,\n            3,\n            4,\n            5\n        ]\n    },\n    \"bathrooms\": {\n        type: \"select\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ],\n        options: [\n            1,\n            2,\n            3,\n            4,\n            5\n        ]\n    },\n    \"community_fees\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ]\n    },\n    \"buyer_transfer_fess\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ]\n    },\n    \"seller_transfer_fess\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ]\n    },\n    \"maintenance_fess\": {\n        type: \"input\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ]\n    },\n    \"freehold\": {\n        type: \"select\",\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ],\n        options: [\n            \"yes\",\n            \"no\"\n        ]\n    },\n    \"real_estate_agnet\": {\n        form_field: [\n            \"residential-for-sale\",\n            \"residential-for-rent\"\n        ],\n        type: \"input\"\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9mb3JtRmllbGRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxJQUFNQSxpQkFBaUIsR0FBRztJQUM3QixlQUFlLEVBQUU7UUFDYkMsSUFBSSxFQUFFLFFBQVE7UUFDZEMsVUFBVSxFQUFFO1lBQUMsc0JBQXNCO1lBQUUsc0JBQXNCO1NBQUM7S0FDL0Q7SUFDRCxXQUFXLEVBQUU7UUFDVEQsSUFBSSxFQUFFLE9BQU87UUFDYkMsVUFBVSxFQUFFO1lBQUMsc0JBQXNCO1lBQUUsc0JBQXNCO1NBQUM7S0FDL0Q7SUFDRCxvQkFBb0IsRUFBRTtRQUNsQkQsSUFBSSxFQUFFLE9BQU87UUFDYkMsVUFBVSxFQUFFO1lBQUMsc0JBQXNCO1lBQUUsc0JBQXNCO1NBQUM7S0FDL0Q7SUFDRCxtQkFBbUIsRUFBRTtRQUNqQkQsSUFBSSxFQUFFLFFBQVE7UUFDZEMsVUFBVSxFQUFFO1lBQUMsc0JBQXNCO1lBQUUsc0JBQXNCO1NBQUM7UUFDNURDLE9BQU8sRUFBRTtZQUFDLFFBQVE7WUFBRSxVQUFVO1NBQUM7S0FDbEM7SUFDRCxhQUFhLEVBQUU7UUFDWEYsSUFBSSxFQUFFLFFBQVE7UUFDZEMsVUFBVSxFQUFFO1lBQUMsc0JBQXNCO1lBQUUsc0JBQXNCO1NBQUM7UUFDNURDLE9BQU8sRUFBRTtZQUFDLFVBQVU7WUFBRSxPQUFPO1NBQUM7S0FDakM7SUFDRCxXQUFXLEVBQUU7UUFDVEYsSUFBSSxFQUFFLE9BQU87UUFDYkMsVUFBVSxFQUFFO1lBQUMsc0JBQXNCO1lBQUUsc0JBQXNCO1NBQUM7S0FDL0Q7SUFDRCxVQUFVLEVBQUU7UUFDUkQsSUFBSSxFQUFFLFFBQVE7UUFDZEMsVUFBVSxFQUFFO1lBQUMsc0JBQXNCO1lBQUUsc0JBQXNCO1NBQUM7UUFDNURDLE9BQU8sRUFBRTtBQUFDLGFBQUM7QUFBRSxhQUFDO0FBQUUsYUFBQztBQUFFLGFBQUM7QUFBRSxhQUFDO1NBQUM7S0FDM0I7SUFDRCxXQUFXLEVBQUU7UUFDVEYsSUFBSSxFQUFFLFFBQVE7UUFDZEMsVUFBVSxFQUFFO1lBQUMsc0JBQXNCO1lBQUUsc0JBQXNCO1NBQUM7UUFDNURDLE9BQU8sRUFBRTtBQUFDLGFBQUM7QUFBRSxhQUFDO0FBQUUsYUFBQztBQUFFLGFBQUM7QUFBRSxhQUFDO1NBQUM7S0FDM0I7SUFDRCxnQkFBZ0IsRUFBRTtRQUNkRixJQUFJLEVBQUUsT0FBTztRQUNiQyxVQUFVLEVBQUU7WUFBQyxzQkFBc0I7WUFBRSxzQkFBc0I7U0FBQztLQUMvRDtJQUNELHFCQUFxQixFQUFFO1FBQ25CRCxJQUFJLEVBQUUsT0FBTztRQUNiQyxVQUFVLEVBQUU7WUFBQyxzQkFBc0I7WUFBRSxzQkFBc0I7U0FBQztLQUMvRDtJQUNELHNCQUFzQixFQUFFO1FBQ3BCRCxJQUFJLEVBQUUsT0FBTztRQUNiQyxVQUFVLEVBQUU7WUFBQyxzQkFBc0I7WUFBRSxzQkFBc0I7U0FBQztLQUMvRDtJQUNELGtCQUFrQixFQUFFO1FBQ2hCRCxJQUFJLEVBQUUsT0FBTztRQUNiQyxVQUFVLEVBQUU7WUFBQyxzQkFBc0I7WUFBRSxzQkFBc0I7U0FBQztLQUMvRDtJQUNELFVBQVUsRUFBRTtRQUNSRCxJQUFJLEVBQUUsUUFBUTtRQUNkQyxVQUFVLEVBQUU7WUFBQyxzQkFBc0I7WUFBRSxzQkFBc0I7U0FBQztRQUM1REMsT0FBTyxFQUFFO1lBQUMsS0FBSztZQUFFLElBQUk7U0FBQztLQUN6QjtJQUNELG1CQUFtQixFQUFFO1FBQ2pCRCxVQUFVLEVBQUU7WUFBQyxzQkFBc0I7WUFBRSxzQkFBc0I7U0FBQztRQUM1REQsSUFBSSxFQUFFLE9BQU87S0FDaEI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZGF0YS9mb3JtRmllbGRzLmpzP2VjMWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb3BlcnR5X2Zvcl9zYWxlID0ge1xyXG4gICAgXCJwcm9wZXJ0eV90eXBlXCI6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwicmVzaWRlbnRpYWwtZm9yLXJlbnRcIl0sXHJcbiAgICB9LFxyXG4gICAgXCJkZXZlbG9wZXJcIjoge1xyXG4gICAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcInJlc2lkZW50aWFsLWZvci1yZW50XCJdLFxyXG4gICAgfSxcclxuICAgIFwicHJvcGVydHlfcmVmZXJlbmNlXCI6IHtcclxuICAgICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJyZXNpZGVudGlhbC1mb3ItcmVudFwiXSxcclxuICAgIH0sXHJcbiAgICBcIm9jY3VwYW5jeV9zdGF0dWNlXCI6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwicmVzaWRlbnRpYWwtZm9yLXJlbnRcIl0sXHJcbiAgICAgICAgb3B0aW9uczogW1widmFjYW50XCIsIFwib2NjdXBhaWRcIl1cclxuICAgIH0sXHJcbiAgICBcInNlbGxlcl90eXBlXCI6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwicmVzaWRlbnRpYWwtZm9yLXJlbnRcIl0sXHJcbiAgICAgICAgb3B0aW9uczogW1wibGFuZGxvcmRcIiwgXCJvd25lclwiXVxyXG4gICAgfSxcclxuICAgIFwiem9uZWRfZm9yXCI6IHtcclxuICAgICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJyZXNpZGVudGlhbC1mb3ItcmVudFwiXSxcclxuICAgIH0sXHJcbiAgICBcImJlZHJvb21zXCI6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwicmVzaWRlbnRpYWwtZm9yLXJlbnRcIl0sXHJcbiAgICAgICAgb3B0aW9uczogWzEsIDIsIDMsIDQsIDVdXHJcbiAgICB9LFxyXG4gICAgXCJiYXRocm9vbXNcIjoge1xyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJyZXNpZGVudGlhbC1mb3ItcmVudFwiXSxcclxuICAgICAgICBvcHRpb25zOiBbMSwgMiwgMywgNCwgNV1cclxuICAgIH0sXHJcbiAgICBcImNvbW11bml0eV9mZWVzXCI6IHtcclxuICAgICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJyZXNpZGVudGlhbC1mb3ItcmVudFwiXSxcclxuICAgIH0sXHJcbiAgICBcImJ1eWVyX3RyYW5zZmVyX2Zlc3NcIjoge1xyXG4gICAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcInJlc2lkZW50aWFsLWZvci1yZW50XCJdLFxyXG4gICAgfSxcclxuICAgIFwic2VsbGVyX3RyYW5zZmVyX2Zlc3NcIjoge1xyXG4gICAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcInJlc2lkZW50aWFsLWZvci1yZW50XCJdLFxyXG4gICAgfSxcclxuICAgIFwibWFpbnRlbmFuY2VfZmVzc1wiOiB7XHJcbiAgICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGZvcm1fZmllbGQ6IFtcInJlc2lkZW50aWFsLWZvci1zYWxlXCIsIFwicmVzaWRlbnRpYWwtZm9yLXJlbnRcIl0sXHJcbiAgICB9LFxyXG4gICAgXCJmcmVlaG9sZFwiOiB7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBmb3JtX2ZpZWxkOiBbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiLCBcInJlc2lkZW50aWFsLWZvci1yZW50XCJdLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcInllc1wiLCBcIm5vXCJdXHJcbiAgICB9LFxyXG4gICAgXCJyZWFsX2VzdGF0ZV9hZ25ldFwiOiB7XHJcbiAgICAgICAgZm9ybV9maWVsZDogW1wicmVzaWRlbnRpYWwtZm9yLXNhbGVcIiwgXCJyZXNpZGVudGlhbC1mb3ItcmVudFwiXSxcclxuICAgICAgICB0eXBlOiBcImlucHV0XCJcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJwcm9wZXJ0eV9mb3Jfc2FsZSIsInR5cGUiLCJmb3JtX2ZpZWxkIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/formFields.js\n"));

/***/ })

});