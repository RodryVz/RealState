"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_Location_index_ts",{

/***/ "(app-pages-browser)/./src/components/Location/Location.tsx":
/*!**********************************************!*\
  !*** ./src/components/Location/Location.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Location: function() { return /* binding */ Location; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Transition */ \"(app-pages-browser)/./src/components/Transition/index.ts\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var _MarkerHouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkerHouse */ \"(app-pages-browser)/./src/components/Location/MarkerHouse/index.ts\");\n/* __next_internal_client_entry_do_not_use__ Location auto */ \n\n\n\n\nfunction Location() {\n    const coordinatePoint = {\n        lat: 40.463667,\n        lng: -3.74922\n    };\n    const centerMarker = (position, fnMap)=>{\n        fnMap.flyTo({\n            lat: position.lat,\n            lng: position.lng\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Transition__WEBPACK_IMPORTED_MODULE_1__.Transition, {\n        className: \"px-4 py-12 md:py-24 lg:py-32 max-w-7xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mb-8 md:mb-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-secondary font-semibold text-lg mb-2\",\n                        id: \"location\",\n                        children: \"Localizaci\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Location\\\\Location.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl md:text-4xl font-bold text-gray-800 max-w-3xl mx-auto\",\n                        children: \"Disponible en todas partes del mundo, con la comunidad de propiedades m\\xe1s grande.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Location\\\\Location.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Location\\\\Location.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative rounded-lg overflow-hidden shadow-xl mb-12 md:mb-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_4__.MapContainer, {\n                    center: coordinatePoint,\n                    zoom: 6,\n                    scrollWheelZoom: false,\n                    className: \"h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.TileLayer, {\n                            url: \"https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Location\\\\Location.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MarkerHouse__WEBPACK_IMPORTED_MODULE_3__.MarkerHouse, {\n                            selectMarker: centerMarker\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Location\\\\Location.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Location\\\\Location.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Location\\\\Location.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-b border-gray-200 w-full max-w-4xl mx-auto opacity-50\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Location\\\\Location.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\rodry\\\\Archivos Programacion\\\\Proyecto Real State\\\\real-state-youtube\\\\src\\\\components\\\\Location\\\\Location.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = Location;\nvar _c;\n$RefreshReg$(_c, \"Location\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xvY2F0aW9uL0xvY2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUwQztBQUVhO0FBQ3RCO0FBQ1U7QUFFcEMsU0FBU0k7SUFDWixNQUFNQyxrQkFBa0I7UUFDcEJDLEtBQUs7UUFDTEMsS0FBSyxDQUFDO0lBQ1Y7SUFFQSxNQUFNQyxlQUFlLENBQUNDLFVBQXNDQztRQUN4REEsTUFBTUMsS0FBSyxDQUFDO1lBQ1JMLEtBQUtHLFNBQVNILEdBQUc7WUFDakJDLEtBQUtFLFNBQVNGLEdBQUc7UUFDckI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDUCxtREFBVUE7UUFBQ1ksV0FBVTs7MEJBQ2xCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFHRixXQUFVO3dCQUE0Q0csSUFBRztrQ0FBVzs7Ozs7O2tDQUN4RSw4REFBQ0M7d0JBQUdKLFdBQVU7a0NBQWlFOzs7Ozs7Ozs7Ozs7MEJBS25GLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ1gsdURBQVlBO29CQUNUZ0IsUUFBUVo7b0JBQ1JhLE1BQU07b0JBQ05DLGlCQUFpQjtvQkFDakJQLFdBQVU7O3NDQUVWLDhEQUFDVixvREFBU0E7NEJBQUNrQixLQUFJOzs7Ozs7c0NBQ2YsOERBQUNqQixxREFBV0E7NEJBQUNrQixjQUFjYjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSW5DLDhEQUFDSztnQkFBSUQsV0FBVTs7Ozs7Ozs7Ozs7O0FBRzNCO0tBckNnQlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9jYXRpb24vTG9jYXRpb24udHN4PzQ4MzQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwiLi4vVHJhbnNpdGlvblwiXHJcbmltcG9ydCB7IE1hcCB9IGZyb20gXCJsZWFmbGV0XCJcclxuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIgfSBmcm9tIFwicmVhY3QtbGVhZmxldFwiXHJcbmltcG9ydCBcImxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzc1wiXHJcbmltcG9ydCB7IE1hcmtlckhvdXNlIH0gZnJvbSBcIi4vTWFya2VySG91c2VcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvY2F0aW9uKCkge1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZVBvaW50ID0ge1xyXG4gICAgICAgIGxhdDogNDAuNDYzNjY3LFxyXG4gICAgICAgIGxuZzogLTMuNzQ5MjJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjZW50ZXJNYXJrZXIgPSAocG9zaXRpb246IHtsYXQ6IG51bWJlciwgbG5nOiBudW1iZXJ9LCBmbk1hcDogTWFwKSA9PiB7XHJcbiAgICAgICAgZm5NYXAuZmx5VG8oe1xyXG4gICAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmxhdCxcclxuICAgICAgICAgICAgbG5nOiBwb3NpdGlvbi5sbmdcclxuICAgICAgICB9KVxyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUcmFuc2l0aW9uIGNsYXNzTmFtZT1cInB4LTQgcHktMTIgbWQ6cHktMjQgbGc6cHktMzIgbWF4LXctN3hsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi04IG1kOm1iLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIG1iLTJcIiBpZD1cImxvY2F0aW9uXCI+TG9jYWxpemFjacOzbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWF4LXctM3hsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICBEaXNwb25pYmxlIGVuIHRvZGFzIHBhcnRlcyBkZWwgbXVuZG8sIGNvbiBsYSBjb211bmlkYWQgZGUgcHJvcGllZGFkZXMgbcOhcyBncmFuZGUuXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsIG1iLTEyIG1kOm1iLTE2XCI+XHJcbiAgICAgICAgICAgICAgICA8TWFwQ29udGFpbmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcj17Y29vcmRpbmF0ZVBvaW50fSBcclxuICAgICAgICAgICAgICAgICAgICB6b29tPXs2fSBcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxXaGVlbFpvb209e2ZhbHNlfSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLVs0MDBweF0gc206aC1bNTAwcHhdIG1kOmgtWzYwMHB4XSBsZzpoLVs3MDBweF0gdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGlsZUxheWVyIHVybD1cImh0dHBzOi8ve3N9LmJhc2VtYXBzLmNhcnRvY2RuLmNvbS9yYXN0ZXJ0aWxlcy92b3lhZ2VyX2xhYmVsc191bmRlci97en0ve3h9L3t5fS5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtlckhvdXNlIHNlbGVjdE1hcmtlcj17Y2VudGVyTWFya2VyfS8+XHJcbiAgICAgICAgICAgICAgICA8L01hcENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCB3LWZ1bGwgbWF4LXctNHhsIG14LWF1dG8gb3BhY2l0eS01MFwiPjwvZGl2PlxyXG4gICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiVHJhbnNpdGlvbiIsIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIk1hcmtlckhvdXNlIiwiTG9jYXRpb24iLCJjb29yZGluYXRlUG9pbnQiLCJsYXQiLCJsbmciLCJjZW50ZXJNYXJrZXIiLCJwb3NpdGlvbiIsImZuTWFwIiwiZmx5VG8iLCJjbGFzc05hbWUiLCJkaXYiLCJoNCIsImlkIiwiaDIiLCJjZW50ZXIiLCJ6b29tIiwic2Nyb2xsV2hlZWxab29tIiwidXJsIiwic2VsZWN0TWFya2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Location/Location.tsx\n"));

/***/ })

});