"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Services/Slider/Slider.tsx":
/*!***************************************************!*\
  !*** ./src/components/Services/Slider/Slider.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slider: function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var _Slider_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Slider.data */ \"(app-pages-browser)/./src/components/Services/Slider/Slider.data.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction Slider() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n        slidesPerView: 2.5,\n        spaceBetween: 15,\n        freeMode: true,\n        navigation: true,\n        pagination: {\n            clickable: true\n        },\n        scrollbar: {\n            draggable: true\n        },\n        modules: [\n            swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation,\n            swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Scrollbar\n        ],\n        className: \"h-[240px] md:h-[320px] w-[300px] md:w-[500px]\",\n        children: _Slider_data__WEBPACK_IMPORTED_MODULE_5__.sliderDataImages.map((param)=>/*#__PURE__*/ {\n            let { id, urlImage } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    src: \"/assets/houses/\".concat(urlImage),\n                    alt: \"Houses\",\n                    width: 200,\n                    height: 700,\n                    className: \"w-auto h-auto rounded-xl cursor-pointer\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Services\\\\Slider\\\\Slider.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, this)\n            }, id, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Services\\\\Slider\\\\Slider.tsx\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Services\\\\Slider\\\\Slider.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlcnZpY2VzL1NsaWRlci9TbGlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDSjtBQUMvQjtBQUNXO0FBQ2tCO0FBQ2xCO0FBR3ZCLFNBQVNNO0lBQ1oscUJBQ0ksOERBQUNKLGdEQUFNQTtRQUNISyxlQUFlO1FBQ2ZDLGNBQWM7UUFDZEMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFlBQVk7WUFBQ0MsV0FBVztRQUFJO1FBQzVCQyxXQUFXO1lBQUNDLFdBQVc7UUFBSTtRQUMzQkMsU0FBUztZQUFDZixzREFBVUE7WUFBRUMscURBQVNBO1NBQUM7UUFDaENlLFdBQVU7a0JBRVRaLDBEQUFnQkEsQ0FBQ2EsR0FBRyxDQUFDO2dCQUFDLEVBQUNDLEVBQUUsRUFBRUMsUUFBUSxFQUFDO21CQUNqQyw4REFBQ2hCLHFEQUFXQTswQkFDUiw0RUFBQ0UsbURBQUtBO29CQUFDZSxLQUFLLGtCQUEyQixPQUFURDtvQkFBWUUsS0FBSTtvQkFBU0MsT0FBTztvQkFBS0MsUUFBUTtvQkFBS1AsV0FBVTs7Ozs7O2VBRDVFRTs7Ozs7UUFFTDs7Ozs7O0FBSTdCO0tBbkJnQloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VydmljZXMvU2xpZGVyL1NsaWRlci50c3g/MzI2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZpZ2F0aW9uLCBTY3JvbGxiYXIgfSBmcm9tIFwic3dpcGVyL21vZHVsZXNcIlxyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiXHJcbmltcG9ydCBcInN3aXBlci9jc3NcIlxyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIlxyXG5pbXBvcnQgeyBzbGlkZXJEYXRhSW1hZ2VzIH0gZnJvbSBcIi4vU2xpZGVyLmRhdGFcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTbGlkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17Mi41fVxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW49ezE1fVxyXG4gICAgICAgICAgICBmcmVlTW9kZT17dHJ1ZX1cclxuICAgICAgICAgICAgbmF2aWdhdGlvblxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uPXt7Y2xpY2thYmxlOiB0cnVlfX1cclxuICAgICAgICAgICAgc2Nyb2xsYmFyPXt7ZHJhZ2dhYmxlOiB0cnVlfX1cclxuICAgICAgICAgICAgbW9kdWxlcz17W05hdmlnYXRpb24sIFNjcm9sbGJhcl19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzI0MHB4XSBtZDpoLVszMjBweF0gdy1bMzAwcHhdIG1kOnctWzUwMHB4XVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2xpZGVyRGF0YUltYWdlcy5tYXAoKHtpZCwgdXJsSW1hZ2V9KT0+IChcclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtgL2Fzc2V0cy9ob3VzZXMvJHt1cmxJbWFnZX1gfSBhbHQ9XCJIb3VzZXNcIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezcwMH0gY2xhc3NOYW1lPVwidy1hdXRvIGgtYXV0byByb3VuZGVkLXhsIGN1cnNvci1wb2ludGVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Td2lwZXI+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJTY3JvbGxiYXIiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsInNsaWRlckRhdGFJbWFnZXMiLCJJbWFnZSIsIlNsaWRlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJmcmVlTW9kZSIsIm5hdmlnYXRpb24iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwic2Nyb2xsYmFyIiwiZHJhZ2dhYmxlIiwibW9kdWxlcyIsImNsYXNzTmFtZSIsIm1hcCIsImlkIiwidXJsSW1hZ2UiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Services/Slider/Slider.tsx\n"));

/***/ })

});