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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"property_for_sale\": function() { return /* binding */ property_for_sale; }\n/* harmony export */ });\nvar property_for_sale = {\n    \"property_type\": {\n        type: \"select\"\n    },\n    \"developer\": {\n        type: \"input\"\n    },\n    \"property_reference\": {\n        type: \"input\"\n    },\n    \"occupancy_statuce\": {\n        type: \"select\",\n        options: [\n            \"vacant\",\n            \"occupaid\"\n        ]\n    },\n    \"seller_type\": {\n        type: \"select\",\n        options: [\n            \"landlord\",\n            \"owner\"\n        ]\n    },\n    \"zoned_for\": {\n        type: \"input\"\n    },\n    \"bedrooms\": {\n        type: \"select\",\n        options: [\n            1,\n            2,\n            3,\n            4,\n            5\n        ],\n        form_fi: [\n            \"residential-for-sale\"\n        ]\n    },\n    \"bathrooms\": {\n        type: \"select\",\n        options: [\n            1,\n            2,\n            3,\n            4,\n            5\n        ],\n        form_fi: [\n            \"residential-for-sale\"\n        ]\n    },\n    \"community_fees\": {\n        type: \"input\"\n    },\n    \"buyer_transfer_fess\": {\n        type: \"input\"\n    },\n    \"seller_transfer_fess\": {\n        type: \"input\"\n    },\n    \"maintenance_fess\": {\n        type: \"input\"\n    },\n    \"freehold\": {\n        type: \"select\",\n        options: [\n            \"yes\",\n            \"no\"\n        ]\n    },\n    \"real_estate_agnet\": {\n        type: \"input\"\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9mb3JtRmllbGRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxJQUFNQSxpQkFBaUIsR0FBRztJQUM3QixlQUFlLEVBQUU7UUFDYkMsSUFBSSxFQUFFLFFBQVE7S0FDakI7SUFDRCxXQUFXLEVBQUU7UUFDVEEsSUFBSSxFQUFFLE9BQU87S0FDaEI7SUFDRCxvQkFBb0IsRUFBRTtRQUNsQkEsSUFBSSxFQUFFLE9BQU87S0FDaEI7SUFDRCxtQkFBbUIsRUFBRTtRQUNqQkEsSUFBSSxFQUFFLFFBQVE7UUFDZEMsT0FBTyxFQUFDO1lBQUMsUUFBUTtZQUFDLFVBQVU7U0FBQztLQUNoQztJQUNELGFBQWEsRUFBRTtRQUNYRCxJQUFJLEVBQUUsUUFBUTtRQUNkQyxPQUFPLEVBQUM7WUFBQyxVQUFVO1lBQUMsT0FBTztTQUFDO0tBQy9CO0lBQ0QsV0FBVyxFQUFFO1FBQ1RELElBQUksRUFBRSxPQUFPO0tBQ2hCO0lBQ0QsVUFBVSxFQUFFO1FBQ1JBLElBQUksRUFBRSxRQUFRO1FBQ2RDLE9BQU8sRUFBQztBQUFDLGFBQUM7QUFBQyxhQUFDO0FBQUMsYUFBQztBQUFDLGFBQUM7QUFBQyxhQUFDO1NBQUM7UUFDbkJDLE9BQU8sRUFBQztZQUFDLHNCQUFzQjtTQUFDO0tBQ25DO0lBQ0QsV0FBVyxFQUFFO1FBQ1RGLElBQUksRUFBRSxRQUFRO1FBQ2RDLE9BQU8sRUFBQztBQUFDLGFBQUM7QUFBQyxhQUFDO0FBQUMsYUFBQztBQUFDLGFBQUM7QUFBQyxhQUFDO1NBQUM7UUFDbkJDLE9BQU8sRUFBQztZQUFDLHNCQUFzQjtTQUFDO0tBQ25DO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDZEYsSUFBSSxFQUFFLE9BQU87S0FDaEI7SUFDRCxxQkFBcUIsRUFBRTtRQUNuQkEsSUFBSSxFQUFFLE9BQU87S0FDaEI7SUFDRCxzQkFBc0IsRUFBRTtRQUNwQkEsSUFBSSxFQUFFLE9BQU87S0FDaEI7SUFDRCxrQkFBa0IsRUFBRTtRQUNoQkEsSUFBSSxFQUFFLE9BQU87S0FDaEI7SUFDRCxVQUFVLEVBQUU7UUFDUkEsSUFBSSxFQUFFLFFBQVE7UUFDZEMsT0FBTyxFQUFDO1lBQUMsS0FBSztZQUFDLElBQUk7U0FBQztLQUN2QjtJQUNELG1CQUFtQixFQUFFO1FBQ2pCRCxJQUFJLEVBQUUsT0FBTztLQUNoQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9kYXRhL2Zvcm1GaWVsZHMuanM/ZWMxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvcGVydHlfZm9yX3NhbGUgPSB7XHJcbiAgICBcInByb3BlcnR5X3R5cGVcIjoge1xyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCJcclxuICAgIH0sXHJcbiAgICBcImRldmVsb3BlclwiOiB7XHJcbiAgICAgICAgdHlwZTogXCJpbnB1dFwiXHJcbiAgICB9LFxyXG4gICAgXCJwcm9wZXJ0eV9yZWZlcmVuY2VcIjoge1xyXG4gICAgICAgIHR5cGU6IFwiaW5wdXRcIlxyXG4gICAgfSxcclxuICAgIFwib2NjdXBhbmN5X3N0YXR1Y2VcIjoge1xyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgb3B0aW9uczpbXCJ2YWNhbnRcIixcIm9jY3VwYWlkXCJdXHJcbiAgICB9LFxyXG4gICAgXCJzZWxsZXJfdHlwZVwiOiB7XHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBvcHRpb25zOltcImxhbmRsb3JkXCIsXCJvd25lclwiXVxyXG4gICAgfSxcclxuICAgIFwiem9uZWRfZm9yXCI6IHtcclxuICAgICAgICB0eXBlOiBcImlucHV0XCJcclxuICAgIH0sXHJcbiAgICBcImJlZHJvb21zXCI6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIG9wdGlvbnM6WzEsMiwzLDQsNV0sXHJcbiAgICAgICAgZm9ybV9maTpbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiXVxyXG4gICAgfSxcclxuICAgIFwiYmF0aHJvb21zXCI6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIG9wdGlvbnM6WzEsMiwzLDQsNV0sXHJcbiAgICAgICAgZm9ybV9maTpbXCJyZXNpZGVudGlhbC1mb3Itc2FsZVwiXVxyXG4gICAgfSxcclxuICAgIFwiY29tbXVuaXR5X2ZlZXNcIjoge1xyXG4gICAgICAgIHR5cGU6IFwiaW5wdXRcIlxyXG4gICAgfSxcclxuICAgIFwiYnV5ZXJfdHJhbnNmZXJfZmVzc1wiOiB7XHJcbiAgICAgICAgdHlwZTogXCJpbnB1dFwiXHJcbiAgICB9LFxyXG4gICAgXCJzZWxsZXJfdHJhbnNmZXJfZmVzc1wiOiB7XHJcbiAgICAgICAgdHlwZTogXCJpbnB1dFwiXHJcbiAgICB9LFxyXG4gICAgXCJtYWludGVuYW5jZV9mZXNzXCI6IHtcclxuICAgICAgICB0eXBlOiBcImlucHV0XCJcclxuICAgIH0sXHJcbiAgICBcImZyZWVob2xkXCI6IHtcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIG9wdGlvbnM6W1wieWVzXCIsXCJub1wiXVxyXG4gICAgfSxcclxuICAgIFwicmVhbF9lc3RhdGVfYWduZXRcIjoge1xyXG4gICAgICAgIHR5cGU6IFwiaW5wdXRcIlxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInByb3BlcnR5X2Zvcl9zYWxlIiwidHlwZSIsIm9wdGlvbnMiLCJmb3JtX2ZpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data/formFields.js\n"));

/***/ })

});