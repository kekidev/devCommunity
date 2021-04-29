webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/pages/blog/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/blog/index.tsx ***!
  \**********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/color-mode */ \"./node_modules/@chakra-ui/color-mode/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/keki/dev/websites/web/src/pages/blog/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction blog(props) {\n  _s();\n\n  var _this2 = this;\n\n  var _useColorMode = Object(_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var bgColor = {\n    light: \"gray.200\",\n    dark: \"gray.700\"\n  };\n  var textColor = {\n    light: \"gray.500\",\n    dark: \"gray.100\"\n  };\n  var badgeColor = {\n    light: \"whatsapp\",\n    dark: \"teal\"\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n  var post = JSON.parse(props.post);\n\n  function generatePost(data) {\n    var _this = this;\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      width: \"300px\",\n      height: \"380px\",\n      maxHeight: \"400px\",\n      rounded: \"20px\",\n      overflow: \"hidden\",\n      boxShadow: \"sm\",\n      bg: bgColor[colorMode],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        p: 5,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n          isInline: true,\n          align: \"baseline\",\n          children: [data.category.map(function (val) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n              rounded: \"full\",\n              colorScheme: \"whatsapp\",\n              children: val.toUpperCase()\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 15\n            }, _this);\n          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n            textTransform: \"uppercase\",\n            fontSize: \"sm\",\n            color: \"gray.500\",\n            children: [data.create_at, \"/\", data.create_at, \"/\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n          as: \"h2\",\n          fontWeight: \"semibold\",\n          fontSize: \"xl\",\n          my: 2,\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n          isTruncated: true,\n          fontWeight: \"light\",\n          fontSize: \"md\",\n          color: \"gray.500\",\n          children: data.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n          fontWeight: \"semibold\",\n          fontSize: \"lg\",\n          color: textColor[colorMode],\n          children: [\"by \", data.author]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          textAlign: \"center\",\n          mt: 4,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n            onClick: function onClick() {\n              return router.push(\"/blog/\".concat(data.id));\n            },\n            children: \"See more\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)\n    }, data.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this);\n  } // const generateQuizCard = (singleQuiz) => {\n  //   return (\n  //     <Box m={3} borderWidth=\"1px\" borderRadius=\"lg\" p={6} boxShadow=\"xl\">\n  //       <Heading as=\"h3\" size=\"lg\">\n  //         {singleQuiz.title}\n  //       </Heading>\n  //       <Text color=\"gray.500\" mt={2}>\n  //         작성자: {singleQuiz.author}\n  //       </Text>\n  //       <Text color=\"gray.500\" mt={2}>\n  //         맞춘 사람 수: {singleQuiz.description}\n  //       </Text>\n  //       <Divider mt={3} mb={3} />\n  //       <Text noOfLines={[1, 2, 3]}>{singleQuiz.description}</Text>\n  //     </Box>\n  //   );\n  // };\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Blog - Untitled\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        whileHover: {\n          scale: 1.1\n        },\n        whileTap: {\n          scale: 1.3\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          m: 5,\n          colorScheme: \"teal\",\n          variant: \"outline\",\n          children: \"Write Post\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"SimpleGrid\"], {\n      minChildWidth: \"120px\",\n      spacing: \"40px\",\n      children: post.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"SimpleGrid\"], {\n        minChildWidth: \"400px\",\n        children: post.map(function (singleQuiz) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n            onClick: function onClick() {\n              return router.push(\"/quiz/\".concat(singleQuiz.id));\n            },\n            as: \"button\",\n            textAlign: \"start\",\n            m: 2,\n            children: generatePost(singleQuiz)\n          }, singleQuiz.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 15\n          }, _this2);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(blog, \"jVRnPhorGIGKAdQNabATntCDVO8=\", false, function () {\n  return [_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"], next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvaW5kZXgudHN4P2I2MTMiXSwibmFtZXMiOlsiYmxvZyIsInByb3BzIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiYmdDb2xvciIsImxpZ2h0IiwiZGFyayIsInRleHRDb2xvciIsImJhZGdlQ29sb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0IiwiSlNPTiIsInBhcnNlIiwiZ2VuZXJhdGVQb3N0IiwiZGF0YSIsImNhdGVnb3J5IiwibWFwIiwidmFsIiwidG9VcHBlckNhc2UiLCJjcmVhdGVfYXQiLCJ0aXRsZSIsImNvbnRlbnQiLCJhdXRob3IiLCJwdXNoIiwiaWQiLCJzY2FsZSIsImxlbmd0aCIsInNpbmdsZVF1aXoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQWVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBSUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0JBQ0dDLDBFQUFZLEVBRGY7QUFBQSxNQUNYQyxTQURXLGlCQUNYQSxTQURXOztBQUVuQixNQUFNQyxPQUFPLEdBQUc7QUFBRUMsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFFBQUksRUFBRTtBQUEzQixHQUFoQjtBQUNBLE1BQU1DLFNBQVMsR0FBRztBQUFFRixTQUFLLEVBQUUsVUFBVDtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBQWxCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHO0FBQUVILFNBQUssRUFBRSxVQUFUO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FBbkI7QUFDQSxNQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1osS0FBSyxDQUFDVSxJQUFqQixDQUFiOztBQUVBLFdBQVNHLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQUE7O0FBQzFCLHdCQUNFLHFF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QkFDRSxxRUFBQyx3REFBRDtBQUFRLFdBQUMsRUFBRSxDQUFYO0FBQWMscUJBQVcsRUFBQyxNQUExQjtBQUFpQyxpQkFBTyxFQUFDLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBZUUscUVBQUMsNERBQUQ7QUFBWSxtQkFBYSxFQUFDLE9BQTFCO0FBQWtDLGFBQU8sRUFBQyxNQUExQztBQUFBLGdCQUNHZixJQUFJLENBQUNnQixNQUFMLEdBQWMsQ0FBZCxpQkFDQyxxRUFBQyw0REFBRDtBQUFZLHFCQUFhLEVBQUMsT0FBMUI7QUFBQSxrQkFDR2hCLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNXLFVBQUQ7QUFBQSw4QkFDUixxRUFBQyxxREFBRDtBQUVFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTW5CLE1BQU0sQ0FBQ2UsSUFBUCxpQkFBcUJJLFVBQVUsQ0FBQ0gsRUFBaEMsRUFBTjtBQUFBLGFBRlg7QUFHRSxjQUFFLEVBQUMsUUFITDtBQUlFLHFCQUFTLEVBQUMsT0FKWjtBQUtFLGFBQUMsRUFBRSxDQUxMO0FBQUEsc0JBT0dYLFlBQVksQ0FBQ2MsVUFBRDtBQVBmLGFBQ09BLFVBQVUsQ0FBQ0gsRUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEUTtBQUFBLFNBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUEsa0JBREY7QUFtQ0Q7O0dBL0dRekIsSTtVQUNlRSxrRSxFQUlQUSxxRDs7OztBQTBIRlYsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9idXR0b25cIjtcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvbG9yLW1vZGVcIjtcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvaW1hZ2VcIjtcbmltcG9ydCB7XG4gIEJhZGdlLFxuICBCb3gsXG4gIENlbnRlcixcbiAgRGl2aWRlcixcbiAgRmxleCxcbiAgR3JpZCxcbiAgR3JpZEl0ZW0sXG4gIEhlYWRpbmcsXG4gIEhTdGFjayxcbiAgU2ltcGxlR3JpZCxcbiAgU3BhY2VyLFxuICBTdGFjayxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi8uLi90eXBlcy9wb3N0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cywgZ2V0UG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9kYlwiO1xuXG5mdW5jdGlvbiBibG9nKHByb3BzKSB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgY29uc3QgYmdDb2xvciA9IHsgbGlnaHQ6IFwiZ3JheS4yMDBcIiwgZGFyazogXCJncmF5LjcwMFwiIH07XG4gIGNvbnN0IHRleHRDb2xvciA9IHsgbGlnaHQ6IFwiZ3JheS41MDBcIiwgZGFyazogXCJncmF5LjEwMFwiIH07XG4gIGNvbnN0IGJhZGdlQ29sb3IgPSB7IGxpZ2h0OiBcIndoYXRzYXBwXCIsIGRhcms6IFwidGVhbFwiIH07XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwb3N0ID0gSlNPTi5wYXJzZShwcm9wcy5wb3N0KTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZVBvc3QoZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICBoZWlnaHQ9XCIzODBweFwiXG4gICAgICAgIG1heEhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgcm91bmRlZD1cIjIwcHhcIlxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIGJveFNoYWRvdz1cInNtXCJcbiAgICAgICAgYmc9e2JnQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAga2V5PXtkYXRhLmlkfVxuICAgICAgPlxuICAgICAgICB7LyogPEltYWdlIHc9XCI3eGxcIiBzcmM9e2RhdGEudGh1bWJuYWlsfSBhbHQ9XCJJbWFnZSBpcyBub3QgYXZhbGlhYmxlXCIgLz4gKi99XG4gICAgICAgIDxCb3ggcD17NX0+XG4gICAgICAgICAgPFN0YWNrIGlzSW5saW5lIGFsaWduPVwiYmFzZWxpbmVcIj5cbiAgICAgICAgICAgIHtkYXRhLmNhdGVnb3J5Lm1hcCgodmFsKSA9PiAoXG4gICAgICAgICAgICAgIDxCYWRnZSByb3VuZGVkPVwiZnVsbFwiIGNvbG9yU2NoZW1lPVwid2hhdHNhcHBcIj5cbiAgICAgICAgICAgICAgICB7dmFsLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxUZXh0IHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIiBmb250U2l6ZT1cInNtXCIgY29sb3I9XCJncmF5LjUwMFwiPlxuICAgICAgICAgICAgICB7ZGF0YS5jcmVhdGVfYXR9L3tkYXRhLmNyZWF0ZV9hdH0vXG4gICAgICAgICAgICAgIHsvKiB7ZGF0YS5jcmVhdGVfYXQuZ2V0RnVsbFllYXIoKX0gKi99XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8VGV4dCBhcz1cImgyXCIgZm9udFdlaWdodD1cInNlbWlib2xkXCIgZm9udFNpemU9XCJ4bFwiIG15PXsyfT5cbiAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBpc1RydW5jYXRlZCBmb250V2VpZ2h0PVwibGlnaHRcIiBmb250U2l6ZT1cIm1kXCIgY29sb3I9XCJncmF5LjUwMFwiPlxuICAgICAgICAgICAge2RhdGEuY29udGVudH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiXG4gICAgICAgICAgICBmb250U2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGNvbG9yPXt0ZXh0Q29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBieSB7ZGF0YS5hdXRob3J9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9ezR9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL2Jsb2cvJHtkYXRhLmlkfWApfT5cbiAgICAgICAgICAgICAgU2VlIG1vcmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cblxuICAvLyBjb25zdCBnZW5lcmF0ZVF1aXpDYXJkID0gKHNpbmdsZVF1aXopID0+IHtcbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgPEJveCBtPXszfSBib3JkZXJXaWR0aD1cIjFweFwiIGJvcmRlclJhZGl1cz1cImxnXCIgcD17Nn0gYm94U2hhZG93PVwieGxcIj5cbiAgLy8gICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHNpemU9XCJsZ1wiPlxuICAvLyAgICAgICAgIHtzaW5nbGVRdWl6LnRpdGxlfVxuICAvLyAgICAgICA8L0hlYWRpbmc+XG5cbiAgLy8gICAgICAgPFRleHQgY29sb3I9XCJncmF5LjUwMFwiIG10PXsyfT5cbiAgLy8gICAgICAgICDsnpHshLHsnpA6IHtzaW5nbGVRdWl6LmF1dGhvcn1cbiAgLy8gICAgICAgPC9UZXh0PlxuICAvLyAgICAgICA8VGV4dCBjb2xvcj1cImdyYXkuNTAwXCIgbXQ9ezJ9PlxuICAvLyAgICAgICAgIOunnuy2mCDsgqzrnowg7IiYOiB7c2luZ2xlUXVpei5kZXNjcmlwdGlvbn1cbiAgLy8gICAgICAgPC9UZXh0PlxuXG4gIC8vICAgICAgIDxEaXZpZGVyIG10PXszfSBtYj17M30gLz5cbiAgLy8gICAgICAgPFRleHQgbm9PZkxpbmVzPXtbMSwgMiwgM119PntzaW5nbGVRdWl6LmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgLy8gICAgIDwvQm94PlxuICAvLyAgICk7XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CbG9nIC0gVW50aXRsZWQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEZsZXg+XG4gICAgICAgIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fSB3aGlsZVRhcD17eyBzY2FsZTogMS4zIH19PlxuICAgICAgICAgIDxCdXR0b24gbT17NX0gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIFdyaXRlIFBvc3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgPC9GbGV4PlxuXG4gICAgICA8U2ltcGxlR3JpZCBtaW5DaGlsZFdpZHRoPVwiMTIwcHhcIiBzcGFjaW5nPVwiNDBweFwiPlxuICAgICAgICB7cG9zdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8U2ltcGxlR3JpZCBtaW5DaGlsZFdpZHRoPVwiNDAwcHhcIj5cbiAgICAgICAgICAgIHtwb3N0Lm1hcCgoc2luZ2xlUXVpeikgPT4gKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAga2V5PXtzaW5nbGVRdWl6LmlkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcXVpei8ke3NpbmdsZVF1aXouaWR9YCl9XG4gICAgICAgICAgICAgICAgYXM9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICBtPXsyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2dlbmVyYXRlUG9zdChzaW5nbGVRdWl6KX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgICl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogTmV4dFBhZ2VDb250ZXh0KSB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICBjb25zdCBkYXRhID0gcG9zdC5tYXAoKHNpbmdsZVBvc3Q6IGFueSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zaW5nbGVQb3N0LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBibG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog/index.tsx\n");

/***/ })

})