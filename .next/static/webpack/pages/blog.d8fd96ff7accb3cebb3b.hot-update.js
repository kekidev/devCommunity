webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/pages/blog/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/blog/index.tsx ***!
  \**********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/color-mode */ \"./node_modules/@chakra-ui/color-mode/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/image */ \"./node_modules/@chakra-ui/image/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/keki/dev/websites/web/src/pages/blog/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction blog(props) {\n  _s();\n\n  var _this2 = this;\n\n  var _useColorMode = Object(_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var bgColor = {\n    light: \"gray.200\",\n    dark: \"gray.700\"\n  };\n  var textColor = {\n    light: \"gray.500\",\n    dark: \"gray.100\"\n  };\n  var badgeColor = {\n    light: \"whatsapp\",\n    dark: \"teal\"\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n  var post = JSON.parse(props.post);\n\n  function generatePost(data) {\n    var _this = this;\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      width: \"300px\",\n      height: \"380px\",\n      maxHeight: \"400px\",\n      rounded: \"20px\",\n      overflow: \"hidden\",\n      boxShadow: \"sm\",\n      bg: bgColor[colorMode],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_image__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n        h: \"44\",\n        w: \"44\",\n        src: data.thumbnail,\n        alt: \"Image is not avaliable\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n        p: 5,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"], {\n          isInline: true,\n          align: \"baseline\",\n          children: [data.category.map(function (val) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Badge\"], {\n              rounded: \"full\",\n              colorScheme: \"whatsapp\",\n              children: val.toUpperCase()\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, _this);\n          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n            textTransform: \"uppercase\",\n            fontSize: \"sm\",\n            color: \"gray.500\",\n            children: [data.create_at, \"/\", data.create_at, \"/\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n          as: \"h2\",\n          fontWeight: \"semibold\",\n          fontSize: \"xl\",\n          my: 2,\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n          isTruncated: true,\n          fontWeight: \"light\",\n          fontSize: \"md\",\n          color: \"gray.500\",\n          children: data.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n          fontWeight: \"semibold\",\n          fontSize: \"lg\",\n          color: textColor[colorMode],\n          children: [\"by \", data.author]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n          textAlign: \"center\",\n          mt: 4,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n            onClick: function onClick() {\n              return router.push(\"/blog/\".concat(data.id));\n            },\n            children: \"See more\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, data.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Blog - Untitled\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"SimpleGrid\"], {\n      minChildWidth: \"120px\",\n      spacing: \"40px\",\n      children: post.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"SimpleGrid\"], {\n        minChildWidth: \"400px\",\n        children: post.map(function (singePost) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n            textAlign: \"start\",\n            m: 2,\n            children: generatePost(singePost)\n          }, singePost.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 15\n          }, _this2);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(blog, \"jVRnPhorGIGKAdQNabATntCDVO8=\", false, function () {\n  return [_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"], next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvaW5kZXgudHN4P2I2MTMiXSwibmFtZXMiOlsiYmxvZyIsInByb3BzIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiYmdDb2xvciIsImxpZ2h0IiwiZGFyayIsInRleHRDb2xvciIsImJhZGdlQ29sb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0IiwiSlNPTiIsInBhcnNlIiwiZ2VuZXJhdGVQb3N0IiwiZGF0YSIsInRodW1ibmFpbCIsImNhdGVnb3J5IiwibWFwIiwidmFsIiwidG9VcHBlckNhc2UiLCJjcmVhdGVfYXQiLCJ0aXRsZSIsImNvbnRlbnQiLCJhdXRob3IiLCJwdXNoIiwiaWQiLCJsZW5ndGgiLCJzaW5nZVBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUFBLHNCQUNHQywwRUFBWSxFQURmO0FBQUEsTUFDWEMsU0FEVyxpQkFDWEEsU0FEVzs7QUFFbkIsTUFBTUMsT0FBTyxHQUFHO0FBQUVDLFNBQUssRUFBRSxVQUFUO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FBaEI7QUFDQSxNQUFNQyxTQUFTLEdBQUc7QUFBRUYsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFFBQUksRUFBRTtBQUEzQixHQUFsQjtBQUNBLE1BQU1FLFVBQVUsR0FBRztBQUFFSCxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBQW5CO0FBQ0EsTUFBTUcsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdaLEtBQUssQ0FBQ1UsSUFBakIsQ0FBYjs7QUFFQSxXQUFTRyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUFBOztBQUMxQix3QkFD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O0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBU0UscUVBQUMsNERBQUQ7QUFBWSxtQkFBYSxFQUFDLE9BQTFCO0FBQWtDLGFBQU8sRUFBQyxNQUExQztBQUFBLGdCQUNHZixJQUFJLENBQUNnQixNQUFMLEdBQWMsQ0FBZCxpQkFDQyxxRUFBQyw0REFBRDtBQUFZLHFCQUFhLEVBQUMsT0FBMUI7QUFBQSxrQkFDR2hCLElBQUksQ0FBQ08sR0FBTCxDQUFTLFVBQUNVLFNBQUQ7QUFBQSw4QkFDUixxRUFBQyxxREFBRDtBQUF3QixxQkFBUyxFQUFDLE9BQWxDO0FBQTBDLGFBQUMsRUFBRSxDQUE3QztBQUFBLHNCQUNHZCxZQUFZLENBQUNjLFNBQUQ7QUFEZixhQUFVQSxTQUFTLENBQUNGLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRFE7QUFBQSxTQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBLGtCQURGO0FBdUJEOztHQXBGUTFCLEk7VUFDZUUsa0UsRUFJUFEscUQ7Ozs7QUErRkZWLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2Jsb2cvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb2xvci1tb2RlXCI7XG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJAY2hha3JhLXVpL2ltYWdlXCI7XG5pbXBvcnQge1xuICBCYWRnZSxcbiAgQm94LFxuICBDZW50ZXIsXG4gIERpdmlkZXIsXG4gIEZsZXgsXG4gIEdyaWQsXG4gIEdyaWRJdGVtLFxuICBIZWFkaW5nLFxuICBIU3RhY2ssXG4gIFNpbXBsZUdyaWQsXG4gIFNwYWNlcixcbiAgU3RhY2ssXG4gIFRleHQsXG59IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzLCBnZXRQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RiXCI7XG5cbmZ1bmN0aW9uIGJsb2cocHJvcHMpIHtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCBiZ0NvbG9yID0geyBsaWdodDogXCJncmF5LjIwMFwiLCBkYXJrOiBcImdyYXkuNzAwXCIgfTtcbiAgY29uc3QgdGV4dENvbG9yID0geyBsaWdodDogXCJncmF5LjUwMFwiLCBkYXJrOiBcImdyYXkuMTAwXCIgfTtcbiAgY29uc3QgYmFkZ2VDb2xvciA9IHsgbGlnaHQ6IFwid2hhdHNhcHBcIiwgZGFyazogXCJ0ZWFsXCIgfTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHBvc3QgPSBKU09OLnBhcnNlKHByb3BzLnBvc3QpO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUG9zdChkYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgIGhlaWdodD1cIjM4MHB4XCJcbiAgICAgICAgbWF4SGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICByb3VuZGVkPVwiMjBweFwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgYm94U2hhZG93PVwic21cIlxuICAgICAgICBiZz17YmdDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICBrZXk9e2RhdGEuaWR9XG4gICAgICA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGg9XCI0NFwiXG4gICAgICAgICAgdz1cIjQ0XCJcbiAgICAgICAgICBzcmM9e2RhdGEudGh1bWJuYWlsfVxuICAgICAgICAgIGFsdD1cIkltYWdlIGlzIG5vdCBhdmFsaWFibGVcIlxuICAgICAgICAvPlxuICAgICAgICA8Qm94IHA9ezV9PlxuICAgICAgICAgIDxTdGFjayBpc0lubGluZSBhbGlnbj1cImJhc2VsaW5lXCI+XG4gICAgICAgICAgICB7ZGF0YS5jYXRlZ29yeS5tYXAoKHZhbCkgPT4gKFxuICAgICAgICAgICAgICA8QmFkZ2Ugcm91bmRlZD1cImZ1bGxcIiBjb2xvclNjaGVtZT1cIndoYXRzYXBwXCI+XG4gICAgICAgICAgICAgICAge3ZhbC50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8VGV4dCB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCIgZm9udFNpemU9XCJzbVwiIGNvbG9yPVwiZ3JheS41MDBcIj5cbiAgICAgICAgICAgICAge2RhdGEuY3JlYXRlX2F0fS97ZGF0YS5jcmVhdGVfYXR9L1xuICAgICAgICAgICAgICB7Lyoge2RhdGEuY3JlYXRlX2F0LmdldEZ1bGxZZWFyKCl9ICovfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFRleHQgYXM9XCJoMlwiIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGZvbnRTaXplPVwieGxcIiBteT17Mn0+XG4gICAgICAgICAgICB7ZGF0YS50aXRsZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgaXNUcnVuY2F0ZWQgZm9udFdlaWdodD1cImxpZ2h0XCIgZm9udFNpemU9XCJtZFwiIGNvbG9yPVwiZ3JheS41MDBcIj5cbiAgICAgICAgICAgIHtkYXRhLmNvbnRlbnR9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBmb250V2VpZ2h0PVwic2VtaWJvbGRcIlxuICAgICAgICAgICAgZm9udFNpemU9XCJsZ1wiXG4gICAgICAgICAgICBjb2xvcj17dGV4dENvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgYnkge2RhdGEuYXV0aG9yfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiIG10PXs0fT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9ibG9nLyR7ZGF0YS5pZH1gKX0+XG4gICAgICAgICAgICAgIFNlZSBtb3JlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CbG9nIC0gVW50aXRsZWQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEZsZXg+XG4gICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgPC9GbGV4PlxuXG4gICAgICA8U2ltcGxlR3JpZCBtaW5DaGlsZFdpZHRoPVwiMTIwcHhcIiBzcGFjaW5nPVwiNDBweFwiPlxuICAgICAgICB7cG9zdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8U2ltcGxlR3JpZCBtaW5DaGlsZFdpZHRoPVwiNDAwcHhcIj5cbiAgICAgICAgICAgIHtwb3N0Lm1hcCgoc2luZ2VQb3N0KSA9PiAoXG4gICAgICAgICAgICAgIDxCb3gga2V5PXtzaW5nZVBvc3QuaWR9IHRleHRBbGlnbj1cInN0YXJ0XCIgbT17Mn0+XG4gICAgICAgICAgICAgICAge2dlbmVyYXRlUG9zdChzaW5nZVBvc3QpfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgICAgKX1cbiAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBOZXh0UGFnZUNvbnRleHQpIHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4gIGNvbnN0IGRhdGEgPSBwb3N0Lm1hcCgoc2luZ2xlUG9zdDogYW55KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNpbmdsZVBvc3QsXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/blog/index.tsx\n");

/***/ })

})