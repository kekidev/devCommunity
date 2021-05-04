webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/pages/projects.tsx":
/*!********************************!*\
  !*** ./src/pages/projects.tsx ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/color-mode */ \"./node_modules/@chakra-ui/color-mode/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/image */ \"./node_modules/@chakra-ui/image/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/keki/dev/websites/web/src/pages/projects.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction blog() {\n  _s();\n\n  var _this = this;\n\n  var _useColorMode = Object(_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var bgColor = {\n    light: \"gray.200\",\n    dark: \"gray.700\"\n  };\n  var textColor = {\n    light: \"gray.500\",\n    dark: \"gray.100\"\n  };\n  var badgeColor = {\n    light: \"gray\",\n    dark: \"teal\"\n  };\n  var variant = {\n    light: \"outline\",\n    dark: null\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n\n  function PostGen(data) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      width: \"300px\",\n      height: \"380px\",\n      rounded: \"20px\",\n      m: 3,\n      overflow: \"hidden\",\n      boxShadow: \"xl\",\n      bg: bgColor[colorMode],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_image__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n        h: \"44\",\n        w: \"3xl\",\n        src: data.thumbnail,\n        alt: \"Image is not avaliable\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n        p: 5,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n          as: \"h2\",\n          fontWeight: \"semibold\",\n          fontSize: \"xl\",\n          my: 2,\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n          isTruncated: true,\n          fontWeight: \"light\",\n          fontSize: \"md\",\n          color: \"gray.500\",\n          children: data.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n          fontWeight: \"semibold\",\n          fontSize: \"lg\",\n          color: textColor[colorMode],\n          children: [\"by \", data.author]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n          textAlign: \"center\",\n          mt: 4,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n            leftIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__[\"FaGithub\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 31\n            }, this),\n            onClick: function onClick() {\n              return router.push(\"/blog/\".concat(data.id));\n            },\n            children: \"\\uC790\\uC138\\uD788 \\uBCF4\\uAE30\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, this), !!data.web ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n            leftIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__[\"FaStar\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 45\n            }, this),\n            onClick: function onClick() {\n              return router.push(data.web);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 27\n          }, this) : null]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Blog - Untitled\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n      maxW: \"6xl\",\n      children: post.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n        templateColumns: \"repeat(3, 1fr)\",\n        gap: 6,\n        children: post.map(function (singePost) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n            textAlign: \"start\",\n            m: 2,\n            children: PostGen(singePost)\n          }, singePost.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(blog, \"jVRnPhorGIGKAdQNabATntCDVO8=\", false, function () {\n  return [_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"], next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLnRzeD84MTk5Il0sIm5hbWVzIjpbImJsb2ciLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJiZ0NvbG9yIiwibGlnaHQiLCJkYXJrIiwidGV4dENvbG9yIiwiYmFkZ2VDb2xvciIsInZhcmlhbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJQb3N0R2VuIiwiZGF0YSIsInRodW1ibmFpbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJwdXNoIiwiaWQiLCJ3ZWIiLCJwb3N0IiwibGVuZ3RoIiwibWFwIiwic2luZ2VQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxzQkFDUUMsMEVBQVksRUFEcEI7QUFBQSxNQUNOQyxTQURNLGlCQUNOQSxTQURNOztBQUVkLE1BQU1DLE9BQU8sR0FBRztBQUFFQyxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBQWhCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHO0FBQUVGLFNBQUssRUFBRSxVQUFUO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FBbEI7QUFDQSxNQUFNRSxVQUFVLEdBQUc7QUFBRUgsU0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFFBQUksRUFBRTtBQUF2QixHQUFuQjtBQUNBLE1BQU1HLE9BQU8sR0FBRztBQUFFSixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsUUFBSSxFQUFFO0FBQTFCLEdBQWhCO0FBQ0EsTUFBTUksTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxXQUFTQyxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUNyQix3QkFDRSxxRUFBQyxxREFBRDtBQUNFLFdBQUssRUFBQyxPQURSO0FBRUUsWUFBTSxFQUFDLE9BRlQ7QUFHRSxh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d0IscUJBQVMsRUFBQyxPQUFsQztBQUEwQyxhQUFDLEVBQUUsQ0FBN0M7QUFBQSxzQkFDR1osT0FBTyxDQUFDWSxTQUFEO0FBRFYsYUFBVUEsU0FBUyxDQUFDTCxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQSxrQkFERjtBQXNCRDs7R0F2RVFsQixJO1VBQ2VDLGtFLEVBS1BTLHFEOzs7O0FBaUZGVixtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wcm9qZWN0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9idXR0b25cIjtcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvbG9yLW1vZGVcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvaW1hZ2VcIjtcbmltcG9ydCB7XG4gIEJhZGdlLFxuICBCb3gsXG4gIEZsZXgsXG4gIEdyaWQsXG4gIENvbnRhaW5lcixcbiAgU3BhY2VyLFxuICBTdGFjayxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7RmFHaXRodWIsIEZhU3Rhcn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmZ1bmN0aW9uIGJsb2coKSB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgY29uc3QgYmdDb2xvciA9IHsgbGlnaHQ6IFwiZ3JheS4yMDBcIiwgZGFyazogXCJncmF5LjcwMFwiIH07XG4gIGNvbnN0IHRleHRDb2xvciA9IHsgbGlnaHQ6IFwiZ3JheS41MDBcIiwgZGFyazogXCJncmF5LjEwMFwiIH07XG4gIGNvbnN0IGJhZGdlQ29sb3IgPSB7IGxpZ2h0OiBcImdyYXlcIiwgZGFyazogXCJ0ZWFsXCIgfTtcbiAgY29uc3QgdmFyaWFudCA9IHsgbGlnaHQ6IFwib3V0bGluZVwiLCBkYXJrOiBudWxsIH07XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBmdW5jdGlvbiBQb3N0R2VuKGRhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgaGVpZ2h0PVwiMzgwcHhcIlxuICAgICAgICByb3VuZGVkPVwiMjBweFwiXG4gICAgICAgIG09ezN9XG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgYm94U2hhZG93PVwieGxcIlxuICAgICAgICBiZz17YmdDb2xvcltjb2xvck1vZGVdfVxuICAgICAgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBoPVwiNDRcIlxuICAgICAgICAgIHc9XCIzeGxcIlxuICAgICAgICAgIHNyYz17ZGF0YS50aHVtYm5haWx9XG4gICAgICAgICAgYWx0PVwiSW1hZ2UgaXMgbm90IGF2YWxpYWJsZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggcD17NX0+XG4gICAgICAgICAgPFRleHQgYXM9XCJoMlwiIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGZvbnRTaXplPVwieGxcIiBteT17Mn0+XG4gICAgICAgICAgICB7ZGF0YS50aXRsZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgaXNUcnVuY2F0ZWQgZm9udFdlaWdodD1cImxpZ2h0XCIgZm9udFNpemU9XCJtZFwiIGNvbG9yPVwiZ3JheS41MDBcIj5cbiAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgZm9udFdlaWdodD1cInNlbWlib2xkXCJcbiAgICAgICAgICAgIGZvbnRTaXplPVwibGdcIlxuICAgICAgICAgICAgY29sb3I9e3RleHRDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGJ5IHtkYXRhLmF1dGhvcn1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD17NH0+XG4gICAgICAgICAgICA8QnV0dG9uIGxlZnRJY29uPXs8RmFHaXRodWIgLz59IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvYmxvZy8ke2RhdGEuaWR9YCl9PlxuICAgICAgICAgICAgICDsnpDshLjtnogg67O06riwXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIHshIWRhdGEud2ViID8gPEJ1dHRvbiBsZWZ0SWNvbj17PEZhU3RhciAvPn0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goZGF0YS53ZWIpfT48L0J1dHRvbj4gOiBudWxsfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmxvZyAtIFVudGl0bGVkPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxGbGV4PlxuICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxDb250YWluZXIgbWF4Vz1cIjZ4bFwiPlxuICAgICAgICB7cG9zdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoMywgMWZyKVwiIGdhcD17Nn0+XG4gICAgICAgICAgICB7cG9zdC5tYXAoKHNpbmdlUG9zdCkgPT4gKFxuICAgICAgICAgICAgICA8Qm94IGtleT17c2luZ2VQb3N0LmlkfSB0ZXh0QWxpZ249XCJzdGFydFwiIG09ezJ9PlxuICAgICAgICAgICAgICAgIHtQb3N0R2VuKHNpbmdlUG9zdCl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogTmV4dFBhZ2VDb250ZXh0KSB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICBjb25zdCBkYXRhID0gcG9zdC5tYXAoKHNpbmdsZVBvc3Q6IGFueSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zaW5nbGVQb3N0LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBibG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n");

/***/ })

})