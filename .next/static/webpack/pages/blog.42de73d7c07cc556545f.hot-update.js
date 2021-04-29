webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/pages/blog/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/blog/index.tsx ***!
  \**********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/color-mode */ \"./node_modules/@chakra-ui/color-mode/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/image */ \"./node_modules/@chakra-ui/image/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/Users/keki/dev/websites/web/src/pages/blog/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction blog(props) {\n  _s();\n\n  var _this2 = this;\n\n  var _useColorMode = Object(_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var bgColor = {\n    light: \"gray.200\",\n    dark: \"gray.700\"\n  };\n  var textColor = {\n    light: \"gray.500\",\n    dark: \"gray.100\"\n  };\n  var badgeColor = {\n    light: \"whatsapp\",\n    dark: \"teal\"\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  var post = JSON.parse(props.post);\n  console.log(post);\n\n  function generatePost(data) {\n    var _this = this;\n\n    return (\n      /*#__PURE__*/\n      // create post\n      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n        width: \"300px\",\n        height: \"380px\",\n        maxHeight: \"400px\",\n        rounded: \"20px\",\n        overflow: \"hidden\",\n        boxShadow: \"sm\",\n        bg: bgColor[colorMode],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_image__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n          w: \"7xl\",\n          src: data.thumbnail,\n          alt: \"Image is not avaliable\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n          p: 5,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"], {\n            isInline: true,\n            align: \"baseline\",\n            children: [data.category.map(function (val) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Badge\"], {\n                rounded: \"full\",\n                colorScheme: \"whatsapp\",\n                children: val.toUpperCase()\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 15\n              }, _this);\n            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n              textTransform: \"uppercase\",\n              fontSize: \"sm\",\n              color: \"gray.500\",\n              children: [data.create_at.getMonth() + 1, \"/\", data.create_at.getDate(), \"/\", data.create_at.getFullYear()]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n            as: \"h2\",\n            fontWeight: \"semibold\",\n            fontSize: \"xl\",\n            my: 2,\n            children: data.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n            isTruncated: true,\n            fontWeight: \"light\",\n            fontSize: \"md\",\n            color: \"gray.500\",\n            children: data.content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n            fontWeight: \"semibold\",\n            fontSize: \"lg\",\n            color: textColor[colorMode],\n            children: [\"by \", data.author]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n            textAlign: \"center\",\n            mt: 4,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              onClick: function onClick() {\n                return router.push(\"/blog/\".concat(data.id));\n              },\n              children: \"See more\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, this)\n    );\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Blog - Untitled\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, {\n        whileHover: {\n          scale: 1.1\n        },\n        whileTap: {\n          scale: 1.3\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          m: 5,\n          colorScheme: \"teal\",\n          variant: \"outline\",\n          children: \"Write Post\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"SimpleGrid\"], {\n      minChildWidth: \"120px\",\n      spacing: \"40px\",\n      children: post.map(function (singlePost) {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n          onClick: function onClick() {\n            return router.push(\"/blog/\".concat(singlePost.id));\n          },\n          as: \"button\",\n          textAlign: \"start\",\n          m: 2,\n          children: generatePost(singlePost)\n        }, singlePost.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(blog, \"jVRnPhorGIGKAdQNabATntCDVO8=\", false, function () {\n  return [_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"], next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"]];\n});\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvaW5kZXgudHN4P2I2MTMiXSwibmFtZXMiOlsiYmxvZyIsInByb3BzIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiYmdDb2xvciIsImxpZ2h0IiwiZGFyayIsInRleHRDb2xvciIsImJhZGdlQ29sb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0IiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImdlbmVyYXRlUG9zdCIsImRhdGEiLCJ0aHVtYm5haWwiLCJjYXRlZ29yeSIsIm1hcCIsInZhbCIsInRvVXBwZXJDYXNlIiwiY3JlYXRlX2F0IiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJ0aXRsZSIsImNvbnRlbnQiLCJhdXRob3IiLCJwdXNoIiwiaWQiLCJzY2FsZSIsInNpbmdsZVBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBSUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0JBQ0dDLDBFQUFZLEVBRGY7QUFBQSxNQUNYQyxTQURXLGlCQUNYQSxTQURXOztBQUVuQixNQUFNQyxPQUFPLEdBQUc7QUFBRUMsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFFBQUksRUFBRTtBQUEzQixHQUFoQjtBQUNBLE1BQU1DLFNBQVMsR0FBRztBQUFFRixTQUFLLEVBQUUsVUFBVDtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBQWxCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHO0FBQUVILFNBQUssRUFBRSxVQUFUO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FBbkI7QUFDQSxNQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1osS0FBSyxDQUFDVSxJQUFqQixD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QXFHRlYsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9idXR0b25cIjtcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvbG9yLW1vZGVcIjtcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvaW1hZ2VcIjtcbmltcG9ydCB7XG4gIEJhZGdlLFxuICBCb3gsXG4gIENlbnRlcixcbiAgRmxleCxcbiAgR3JpZCxcbiAgR3JpZEl0ZW0sXG4gIEhTdGFjayxcbiAgU2ltcGxlR3JpZCxcbiAgU3BhY2VyLFxuICBTdGFjayxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi8uLi90eXBlcy9wb3N0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cywgZ2V0UG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9kYlwiO1xuXG5mdW5jdGlvbiBibG9nKHByb3BzKSB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgY29uc3QgYmdDb2xvciA9IHsgbGlnaHQ6IFwiZ3JheS4yMDBcIiwgZGFyazogXCJncmF5LjcwMFwiIH07XG4gIGNvbnN0IHRleHRDb2xvciA9IHsgbGlnaHQ6IFwiZ3JheS41MDBcIiwgZGFyazogXCJncmF5LjEwMFwiIH07XG4gIGNvbnN0IGJhZGdlQ29sb3IgPSB7IGxpZ2h0OiBcIndoYXRzYXBwXCIsIGRhcms6IFwidGVhbFwiIH07XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwb3N0ID0gSlNPTi5wYXJzZShwcm9wcy5wb3N0KTtcbiAgY29uc29sZS5sb2cocG9zdCk7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQb3N0KGRhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gY3JlYXRlIHBvc3RcbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgIGhlaWdodD1cIjM4MHB4XCJcbiAgICAgICAgbWF4SGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICByb3VuZGVkPVwiMjBweFwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgYm94U2hhZG93PVwic21cIlxuICAgICAgICBiZz17YmdDb2xvcltjb2xvck1vZGVdfVxuICAgICAgPlxuICAgICAgICA8SW1hZ2Ugdz1cIjd4bFwiIHNyYz17ZGF0YS50aHVtYm5haWx9IGFsdD1cIkltYWdlIGlzIG5vdCBhdmFsaWFibGVcIiAvPlxuICAgICAgICA8Qm94IHA9ezV9PlxuICAgICAgICAgIDxTdGFjayBpc0lubGluZSBhbGlnbj1cImJhc2VsaW5lXCI+XG4gICAgICAgICAgICB7ZGF0YS5jYXRlZ29yeS5tYXAoKHZhbCkgPT4gKFxuICAgICAgICAgICAgICA8QmFkZ2Ugcm91bmRlZD1cImZ1bGxcIiBjb2xvclNjaGVtZT1cIndoYXRzYXBwXCI+XG4gICAgICAgICAgICAgICAge3ZhbC50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8VGV4dCB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCIgZm9udFNpemU9XCJzbVwiIGNvbG9yPVwiZ3JheS41MDBcIj5cbiAgICAgICAgICAgICAge2RhdGEuY3JlYXRlX2F0LmdldE1vbnRoKCkgKyAxfS97ZGF0YS5jcmVhdGVfYXQuZ2V0RGF0ZSgpfS9cbiAgICAgICAgICAgICAge2RhdGEuY3JlYXRlX2F0LmdldEZ1bGxZZWFyKCl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8VGV4dCBhcz1cImgyXCIgZm9udFdlaWdodD1cInNlbWlib2xkXCIgZm9udFNpemU9XCJ4bFwiIG15PXsyfT5cbiAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBpc1RydW5jYXRlZCBmb250V2VpZ2h0PVwibGlnaHRcIiBmb250U2l6ZT1cIm1kXCIgY29sb3I9XCJncmF5LjUwMFwiPlxuICAgICAgICAgICAge2RhdGEuY29udGVudH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiXG4gICAgICAgICAgICBmb250U2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGNvbG9yPXt0ZXh0Q29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBieSB7ZGF0YS5hdXRob3J9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9ezR9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL2Jsb2cvJHtkYXRhLmlkfWApfT5cbiAgICAgICAgICAgICAgU2VlIG1vcmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJsb2cgLSBVbnRpdGxlZDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8RmxleD5cbiAgICAgICAgPG1vdGlvbi5kaXYgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19IHdoaWxlVGFwPXt7IHNjYWxlOiAxLjMgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBtPXs1fSBjb2xvclNjaGVtZT1cInRlYWxcIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgV3JpdGUgUG9zdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICA8L0ZsZXg+XG5cbiAgICAgIDxTaW1wbGVHcmlkIG1pbkNoaWxkV2lkdGg9XCIxMjBweFwiIHNwYWNpbmc9XCI0MHB4XCI+XG4gICAgICAgIHsvKiBnZXQgcG9zdHMgZnJvbSBmaXJlYmFzZSBhbmQgY2FsbCBmdW5jdGlvbiAqL31cbiAgICAgICAgey8qIFRPRE86IGdldCBkYXRhIGZyb20gZmlyZWJhc2UgYW5kIGRpc3BsYXkgZGF0YSAqL31cbiAgICAgICAge3Bvc3QubWFwKChzaW5nbGVQb3N0KSA9PiB7XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAga2V5PXtzaW5nbGVQb3N0LmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9ibG9nLyR7c2luZ2xlUG9zdC5pZH1gKX1cbiAgICAgICAgICAgIGFzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHRleHRBbGlnbj1cInN0YXJ0XCJcbiAgICAgICAgICAgIG09ezJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2dlbmVyYXRlUG9zdChzaW5nbGVQb3N0KX1cbiAgICAgICAgICA8L0JveD47XG4gICAgICAgIH0pfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IE5leHRQYWdlQ29udGV4dCkge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgY29uc3QgZGF0YSA9IHBvc3QubWFwKChzaW5nbGVQb3N0OiBhbnkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc2luZ2xlUG9zdCxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog/index.tsx\n");

/***/ })

})