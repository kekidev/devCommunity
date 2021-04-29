webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/pages/blog/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/blog/index.tsx ***!
  \**********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/color-mode */ \"./node_modules/@chakra-ui/color-mode/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/image */ \"./node_modules/@chakra-ui/image/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/keki/dev/websites/web/src/pages/blog/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction blog(props) {\n  _s();\n\n  var _this2 = this;\n\n  var _useColorMode = Object(_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var bgColor = {\n    light: \"gray.200\",\n    dark: \"gray.700\"\n  };\n  var textColor = {\n    light: \"gray.500\",\n    dark: \"gray.100\"\n  };\n  var badgeColor = {\n    light: \"purple\",\n    dark: \"teal\"\n  };\n  var variant = {\n    light: \"outline\",\n    dark: null\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n  var post = JSON.parse(props.post);\n\n  function generatePost(data) {\n    var _this = this;\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      width: \"300px\",\n      height: \"380px\",\n      maxHeight: \"400px\",\n      rounded: \"20px\",\n      overflow: \"hidden\",\n      boxShadow: \"sm\",\n      bg: bgColor[colorMode],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_image__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n        h: \"44\",\n        w: \"3xl\",\n        src: data.thumbnail,\n        alt: \"Image is not avaliable\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n        p: 5,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"], {\n          isInline: true,\n          direction: \"row\",\n          align: \"baseline\",\n          children: [data.category.map(function (val) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Badge\"], {\n              rounded: \"full\",\n              variant: variant[colorMode],\n              colorScheme: badgeColor[colorMode],\n              children: val.toUpperCase()\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, _this);\n          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n            textTransform: \"uppercase\",\n            fontSize: \"sm\",\n            color: \"gray.500\",\n            children: [data.create_at, \"/\", data.create_at, \"/\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n          as: \"h2\",\n          fontWeight: \"semibold\",\n          fontSize: \"xl\",\n          my: 2,\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n          isTruncated: true,\n          fontWeight: \"light\",\n          fontSize: \"md\",\n          color: \"gray.500\",\n          children: data.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n          fontWeight: \"semibold\",\n          fontSize: \"lg\",\n          color: textColor[colorMode],\n          children: [\"by \", data.author]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n          textAlign: \"center\",\n          mt: 4,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n            onClick: function onClick() {\n              return router.push(\"/blog/\".concat(data.id));\n            },\n            children: \"See more\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this)]\n    }, data.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Blog - Untitled\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"SimpleGrid\"], {\n      minChildWidth: \"120px\",\n      spacing: \"40px\",\n      children: post.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"SimpleGrid\"], {\n        minChildWidth: \"400px\",\n        children: post.map(function (singePost) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n            textAlign: \"start\",\n            m: 2,\n            children: generatePost(singePost)\n          }, singePost.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 15\n          }, _this2);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(blog, \"jVRnPhorGIGKAdQNabATntCDVO8=\", false, function () {\n  return [_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"], next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvaW5kZXgudHN4P2I2MTMiXSwibmFtZXMiOlsiYmxvZyIsInByb3BzIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiYmdDb2xvciIsImxpZ2h0IiwiZGFyayIsInRleHRDb2xvciIsImJhZGdlQ29sb3IiLCJ2YXJpYW50Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsIkpTT04iLCJwYXJzZSIsImdlbmVyYXRlUG9zdCIsImRhdGEiLCJ0aHVtYm5haWwiLCJjYXRlZ29yeSIsIm1hcCIsInZhbCIsInRvVXBwZXJDYXNlIiwiY3JlYXRlX2F0IiwidGl0bGUiLCJjb250ZW50IiwiYXV0aG9yIiwicHVzaCIsImlkIiwibGVuZ3RoIiwic2luZ2VQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQkFDR0MsMEVBQVksRUFEZjtBQUFBLE1BQ1hDLFNBRFcsaUJBQ1hBLFNBRFc7O0FBRW5CLE1BQU1DLE9BQU8sR0FBRztBQUFFQyxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBQWhCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHO0FBQUVGLFNBQUssRUFBRSxVQUFUO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FBbEI7QUFDQSxNQUFNRSxVQUFVLEdBQUc7QUFBRUgsU0FBSyxFQUFFLFFBQVQ7QUFBbUJDLFFBQUksRUFBRTtBQUF6QixHQUFuQjtBQUNBLE1BQU1HLE9BQU8sR0FBRztBQUFFSixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsUUFBSSxFQUFFO0FBQTFCLEdBQWhCO0FBQ0EsTUFBTUksTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFM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RDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsc0RBQUQ7QUFBQSw4QkFDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFTRSxxRUFBQyw0REFBRDtBQUFZLG1CQUFhLEVBQUMsT0FBMUI7QUFBa0MsYUFBTyxFQUFDLE1BQTFDO0FBQUEsZ0JBQ0dmLElBQUksQ0FBQ2dCLE1BQUwsR0FBYyxDQUFkLGlCQUNDLHFFQUFDLDREQUFEO0FBQVkscUJBQWEsRUFBQyxPQUExQjtBQUFBLGtCQUNHaEIsSUFBSSxDQUFDTyxHQUFMLENBQVMsVUFBQ1UsU0FBRDtBQUFBLDhCQUNSLHFFQUFDLHFEQUFEO0FBQXdCLHFCQUFTLEVBQUMsT0FBbEM7QUFBMEMsYUFBQyxFQUFFLENBQTdDO0FBQUEsc0JBQ0dkLFlBQVksQ0FBQ2MsU0FBRDtBQURmLGFBQVVBLFNBQVMsQ0FBQ0YsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEUTtBQUFBLFNBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUEsa0JBREY7QUF1QkQ7O0dBekZRM0IsSTtVQUNlRSxrRSxFQUtQUyxxRDs7OztBQW1HRlgsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9idXR0b25cIjtcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvbG9yLW1vZGVcIjtcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvaW1hZ2VcIjtcbmltcG9ydCB7XG4gIEJhZGdlLFxuICBCb3gsXG4gIENlbnRlcixcbiAgRGl2aWRlcixcbiAgRmxleCxcbiAgR3JpZCxcbiAgR3JpZEl0ZW0sXG4gIEhlYWRpbmcsXG4gIEhTdGFjayxcbiAgU2ltcGxlR3JpZCxcbiAgU3BhY2VyLFxuICBTdGFjayxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMsIGdldFBvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGJcIjtcblxuZnVuY3Rpb24gYmxvZyhwcm9wcykge1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG4gIGNvbnN0IGJnQ29sb3IgPSB7IGxpZ2h0OiBcImdyYXkuMjAwXCIsIGRhcms6IFwiZ3JheS43MDBcIiB9O1xuICBjb25zdCB0ZXh0Q29sb3IgPSB7IGxpZ2h0OiBcImdyYXkuNTAwXCIsIGRhcms6IFwiZ3JheS4xMDBcIiB9O1xuICBjb25zdCBiYWRnZUNvbG9yID0geyBsaWdodDogXCJwdXJwbGVcIiwgZGFyazogXCJ0ZWFsXCIgfTtcbiAgY29uc3QgdmFyaWFudCA9IHsgbGlnaHQ6IFwib3V0bGluZVwiLCBkYXJrOiBudWxsIH07XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwb3N0ID0gSlNPTi5wYXJzZShwcm9wcy5wb3N0KTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZVBvc3QoZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICBoZWlnaHQ9XCIzODBweFwiXG4gICAgICAgIG1heEhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgcm91bmRlZD1cIjIwcHhcIlxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIGJveFNoYWRvdz1cInNtXCJcbiAgICAgICAgYmc9e2JnQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAga2V5PXtkYXRhLmlkfVxuICAgICAgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBoPVwiNDRcIlxuICAgICAgICAgIHc9XCIzeGxcIlxuICAgICAgICAgIHNyYz17ZGF0YS50aHVtYm5haWx9XG4gICAgICAgICAgYWx0PVwiSW1hZ2UgaXMgbm90IGF2YWxpYWJsZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggcD17NX0+XG4gICAgICAgICAgPFN0YWNrIGlzSW5saW5lIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduPVwiYmFzZWxpbmVcIj5cbiAgICAgICAgICAgIHtkYXRhLmNhdGVnb3J5Lm1hcCgodmFsKSA9PiAoXG4gICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PXt2YXJpYW50W2NvbG9yTW9kZV19XG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9e2JhZGdlQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt2YWwudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPFRleHQgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiIGZvbnRTaXplPVwic21cIiBjb2xvcj1cImdyYXkuNTAwXCI+XG4gICAgICAgICAgICAgIHtkYXRhLmNyZWF0ZV9hdH0ve2RhdGEuY3JlYXRlX2F0fS9cbiAgICAgICAgICAgICAgey8qIHtkYXRhLmNyZWF0ZV9hdC5nZXRGdWxsWWVhcigpfSAqL31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDxUZXh0IGFzPVwiaDJcIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIiBmb250U2l6ZT1cInhsXCIgbXk9ezJ9PlxuICAgICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGlzVHJ1bmNhdGVkIGZvbnRXZWlnaHQ9XCJsaWdodFwiIGZvbnRTaXplPVwibWRcIiBjb2xvcj1cImdyYXkuNTAwXCI+XG4gICAgICAgICAgICB7ZGF0YS5jb250ZW50fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgZm9udFdlaWdodD1cInNlbWlib2xkXCJcbiAgICAgICAgICAgIGZvbnRTaXplPVwibGdcIlxuICAgICAgICAgICAgY29sb3I9e3RleHRDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGJ5IHtkYXRhLmF1dGhvcn1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD17NH0+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvYmxvZy8ke2RhdGEuaWR9YCl9PlxuICAgICAgICAgICAgICBTZWUgbW9yZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmxvZyAtIFVudGl0bGVkPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxGbGV4PlxuICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDwvRmxleD5cblxuICAgICAgPFNpbXBsZUdyaWQgbWluQ2hpbGRXaWR0aD1cIjEyMHB4XCIgc3BhY2luZz1cIjQwcHhcIj5cbiAgICAgICAge3Bvc3QubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPFNpbXBsZUdyaWQgbWluQ2hpbGRXaWR0aD1cIjQwMHB4XCI+XG4gICAgICAgICAgICB7cG9zdC5tYXAoKHNpbmdlUG9zdCkgPT4gKFxuICAgICAgICAgICAgICA8Qm94IGtleT17c2luZ2VQb3N0LmlkfSB0ZXh0QWxpZ249XCJzdGFydFwiIG09ezJ9PlxuICAgICAgICAgICAgICAgIHtnZW5lcmF0ZVBvc3Qoc2luZ2VQb3N0KX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgICl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogTmV4dFBhZ2VDb250ZXh0KSB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICBjb25zdCBkYXRhID0gcG9zdC5tYXAoKHNpbmdsZVBvc3Q6IGFueSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zaW5nbGVQb3N0LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBibG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog/index.tsx\n");

/***/ })

})