webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/pages/blog/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/blog/index.tsx ***!
  \**********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/color-mode */ \"./node_modules/@chakra-ui/color-mode/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/keki/dev/websites/web/src/pages/blog/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction blog(props) {\n  _s();\n\n  var _this = this;\n\n  var _useColorMode = Object(_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var bgColor = {\n    light: \"gray.200\",\n    dark: \"gray.700\"\n  };\n  var textColor = {\n    light: \"gray.500\",\n    dark: \"gray.100\"\n  };\n  var badgeColor = {\n    light: \"whatsapp\",\n    dark: \"teal\"\n  };\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n  var post = JSON.parse(props.post);\n\n  function test(data) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 12\n    }, this);\n  }\n\n  function generatePost(data) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this) // create post\n    // <Box\n    //   width=\"300px\"\n    //   height=\"380px\"\n    //   maxHeight=\"400px\"\n    //   rounded=\"20px\"\n    //   overflow=\"hidden\"\n    //   boxShadow=\"sm\"\n    //   bg={bgColor[colorMode]}\n    // >\n    //   <Image w=\"7xl\" src={data.thumbnail} alt=\"Image is not avaliable\" />\n    //   <Box p={5}>\n    //     <Stack isInline align=\"baseline\">\n    //       {data.category.map((val) => (\n    //         <Badge rounded=\"full\" colorScheme=\"whatsapp\">\n    //           {val.toUpperCase()}\n    //         </Badge>\n    //       ))}\n    //       <Text textTransform=\"uppercase\" fontSize=\"sm\" color=\"gray.500\">\n    //         {data.create_at}/{data.create_at}/\n    //         {/* {data.create_at.getFullYear()} */}\n    //       </Text>\n    //     </Stack>\n    //     <Text as=\"h2\" fontWeight=\"semibold\" fontSize=\"xl\" my={2}>\n    //       {data.title}\n    //     </Text>\n    //     <Text isTruncated fontWeight=\"light\" fontSize=\"md\" color=\"gray.500\">\n    //       {data.content}\n    //     </Text>\n    //     <Text\n    //       fontWeight=\"semibold\"\n    //       fontSize=\"lg\"\n    //       color={textColor[colorMode]}\n    //     >\n    //       by {data.author}\n    //     </Text>\n    //     <Box textAlign=\"center\" mt={4}>\n    //       <Button onClick={() => router.push(`/blog/${data.id}`)}>\n    //         See more\n    //       </Button>\n    //     </Box>\n    //   </Box>\n    // </Box>\n    ;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Blog - Untitled\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        whileHover: {\n          scale: 1.1\n        },\n        whileTap: {\n          scale: 1.3\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          m: 5,\n          colorScheme: \"teal\",\n          variant: \"outline\",\n          children: \"Write Post\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Spacer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"SimpleGrid\"], {\n      minChildWidth: \"120px\",\n      spacing: \"40px\",\n      children: post.map(function (singlePost) {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          onClick: function onClick() {\n            return router.push(\"/blog/\".concat(singlePost.id));\n          },\n          as: \"button\",\n          textAlign: \"start\",\n          m: 2,\n          children: test(singlePost)\n        }, singlePost.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(blog, \"jVRnPhorGIGKAdQNabATntCDVO8=\", false, function () {\n  return [_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__[\"useColorMode\"], next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvaW5kZXgudHN4P2I2MTMiXSwibmFtZXMiOlsiYmxvZyIsInByb3BzIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiYmdDb2xvciIsImxpZ2h0IiwiZGFyayIsInRleHRDb2xvciIsImJhZGdlQ29sb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0IiwiSlNPTiIsInBhcnNlIiwidGVzdCIsImRhdGEiLCJ0aXRsZSIsImdlbmVyYXRlUG9zdCIsInNjYWxlIiwibWFwIiwic2luZ2xlUG9zdCIsInB1c2giLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFJQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQkFDR0MsMEVBQVksRUFEZjtBQUFBLE1BQ1hDLFNBRFcsaUJBQ1hBLFNBRFc7O0FBRW5CLE1BQU1DLE9BQU8sR0FBRztBQUFFQyxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBQWhCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHO0FBQUVGLFNBQUssRUFBRSxVQUFUO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FBbEI7QUFDQSxNQUFNRSxVQUFVLEdBQUc7QUFBRUgsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFFBQUksRUFBRTtBQUEzQixHQUFuQjtBQUNBLE1BQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXWixLQUFLLENBQUNVLElBQWpCLENBQWI7O0FBRUEsV0FBU0csSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ2xCLHdCQUFPO0FBQUEsZ0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxXQUFTQyxZQUFULENBQXNCRixJQUF0QixFQUE0QjtBQUMxQix3QkFDRTtBQUFBLGdCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1Q0Y7QUE4Q0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsc0RBQUQ7QUFBQSw4QkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxrQkFBVSxFQUFFO0FBQUVFLGVBQUssRUFBRTtBQUFULFNBQXhCO0FBQXdDLGdCQUFRLEVBQUU7QUFBRUEsZUFBSyxFQUFFO0FBQVQsU0FBbEQ7QUFBQSwrQkFDRSxxRUFBQyx3REFBRDtBQUFRLFdBQUMsRUFBRSxDQUFYO0FBQWMscUJBQVcsRUFBQyxNQUExQjtBQUFpQyxpQkFBTyxFQUFDLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBZUUscUVBQUMsNERBQUQ7QUFBWSxtQkFBYSxFQUFDLE9BQTFCO0FBQWtDLGFBQU8sRUFBQyxNQUExQztBQUFBLGdCQUdHUCxJQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFDQyxVQUFELEVBQWdCO0FBQ3hCO0FBQUEsNkVBQUMscURBQUQ7QUFFRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1YLE1BQU0sQ0FBQ1ksSUFBUCxpQkFBcUJELFVBQVUsQ0FBQ0UsRUFBaEMsRUFBTjtBQUFBLFdBRlg7QUFHRSxZQUFFLEVBQUMsUUFITDtBQUlFLG1CQUFTLEVBQUMsT0FKWjtBQUtFLFdBQUMsRUFBRSxDQUxMO0FBQUEsb0JBT0dSLElBQUksQ0FBQ00sVUFBRDtBQVBQLFdBQ09BLFVBQVUsQ0FBQ0UsRUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVELE9BWEE7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkY7QUFBQSxrQkFERjtBQWtDRDs7R0EvRlF0QixJO1VBQ2VFLGtFLEVBSVBRLHFEOzs7O0FBMEdGVixtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9ibG9nL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2J1dHRvblwiO1xuaW1wb3J0IHsgdXNlQ29sb3JNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29sb3ItbW9kZVwiO1xuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgQmFkZ2UsXG4gIEJveCxcbiAgQ2VudGVyLFxuICBGbGV4LFxuICBHcmlkLFxuICBHcmlkSXRlbSxcbiAgSFN0YWNrLFxuICBTaW1wbGVHcmlkLFxuICBTcGFjZXIsXG4gIFN0YWNrLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4uLy4uL3R5cGVzL3Bvc3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzLCBnZXRQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RiXCI7XG5cbmZ1bmN0aW9uIGJsb2cocHJvcHMpIHtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCBiZ0NvbG9yID0geyBsaWdodDogXCJncmF5LjIwMFwiLCBkYXJrOiBcImdyYXkuNzAwXCIgfTtcbiAgY29uc3QgdGV4dENvbG9yID0geyBsaWdodDogXCJncmF5LjUwMFwiLCBkYXJrOiBcImdyYXkuMTAwXCIgfTtcbiAgY29uc3QgYmFkZ2VDb2xvciA9IHsgbGlnaHQ6IFwid2hhdHNhcHBcIiwgZGFyazogXCJ0ZWFsXCIgfTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHBvc3QgPSBKU09OLnBhcnNlKHByb3BzLnBvc3QpO1xuXG4gIGZ1bmN0aW9uIHRlc3QoZGF0YSkge1xuICAgIHJldHVybiA8aDE+e2RhdGEudGl0bGV9PC9oMT47XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVBvc3QoZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgIC8vIGNyZWF0ZSBwb3N0XG4gICAgICAvLyA8Qm94XG4gICAgICAvLyAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgLy8gICBoZWlnaHQ9XCIzODBweFwiXG4gICAgICAvLyAgIG1heEhlaWdodD1cIjQwMHB4XCJcbiAgICAgIC8vICAgcm91bmRlZD1cIjIwcHhcIlxuICAgICAgLy8gICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAvLyAgIGJveFNoYWRvdz1cInNtXCJcbiAgICAgIC8vICAgYmc9e2JnQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgIC8vID5cbiAgICAgIC8vICAgPEltYWdlIHc9XCI3eGxcIiBzcmM9e2RhdGEudGh1bWJuYWlsfSBhbHQ9XCJJbWFnZSBpcyBub3QgYXZhbGlhYmxlXCIgLz5cbiAgICAgIC8vICAgPEJveCBwPXs1fT5cbiAgICAgIC8vICAgICA8U3RhY2sgaXNJbmxpbmUgYWxpZ249XCJiYXNlbGluZVwiPlxuICAgICAgLy8gICAgICAge2RhdGEuY2F0ZWdvcnkubWFwKCh2YWwpID0+IChcbiAgICAgIC8vICAgICAgICAgPEJhZGdlIHJvdW5kZWQ9XCJmdWxsXCIgY29sb3JTY2hlbWU9XCJ3aGF0c2FwcFwiPlxuICAgICAgLy8gICAgICAgICAgIHt2YWwudG9VcHBlckNhc2UoKX1cbiAgICAgIC8vICAgICAgICAgPC9CYWRnZT5cbiAgICAgIC8vICAgICAgICkpfVxuICAgICAgLy8gICAgICAgPFRleHQgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiIGZvbnRTaXplPVwic21cIiBjb2xvcj1cImdyYXkuNTAwXCI+XG4gICAgICAvLyAgICAgICAgIHtkYXRhLmNyZWF0ZV9hdH0ve2RhdGEuY3JlYXRlX2F0fS9cbiAgICAgIC8vICAgICAgICAgey8qIHtkYXRhLmNyZWF0ZV9hdC5nZXRGdWxsWWVhcigpfSAqL31cbiAgICAgIC8vICAgICAgIDwvVGV4dD5cbiAgICAgIC8vICAgICA8L1N0YWNrPlxuICAgICAgLy8gICAgIDxUZXh0IGFzPVwiaDJcIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIiBmb250U2l6ZT1cInhsXCIgbXk9ezJ9PlxuICAgICAgLy8gICAgICAge2RhdGEudGl0bGV9XG4gICAgICAvLyAgICAgPC9UZXh0PlxuICAgICAgLy8gICAgIDxUZXh0IGlzVHJ1bmNhdGVkIGZvbnRXZWlnaHQ9XCJsaWdodFwiIGZvbnRTaXplPVwibWRcIiBjb2xvcj1cImdyYXkuNTAwXCI+XG4gICAgICAvLyAgICAgICB7ZGF0YS5jb250ZW50fVxuICAgICAgLy8gICAgIDwvVGV4dD5cbiAgICAgIC8vICAgICA8VGV4dFxuICAgICAgLy8gICAgICAgZm9udFdlaWdodD1cInNlbWlib2xkXCJcbiAgICAgIC8vICAgICAgIGZvbnRTaXplPVwibGdcIlxuICAgICAgLy8gICAgICAgY29sb3I9e3RleHRDb2xvcltjb2xvck1vZGVdfVxuICAgICAgLy8gICAgID5cbiAgICAgIC8vICAgICAgIGJ5IHtkYXRhLmF1dGhvcn1cbiAgICAgIC8vICAgICA8L1RleHQ+XG4gICAgICAvLyAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD17NH0+XG4gICAgICAvLyAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvYmxvZy8ke2RhdGEuaWR9YCl9PlxuICAgICAgLy8gICAgICAgICBTZWUgbW9yZVxuICAgICAgLy8gICAgICAgPC9CdXR0b24+XG4gICAgICAvLyAgICAgPC9Cb3g+XG4gICAgICAvLyAgIDwvQm94PlxuICAgICAgLy8gPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmxvZyAtIFVudGl0bGVkPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxGbGV4PlxuICAgICAgICA8bW90aW9uLmRpdiB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX0gd2hpbGVUYXA9e3sgc2NhbGU6IDEuMyB9fT5cbiAgICAgICAgICA8QnV0dG9uIG09ezV9IGNvbG9yU2NoZW1lPVwidGVhbFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICBXcml0ZSBQb3N0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDwvRmxleD5cblxuICAgICAgPFNpbXBsZUdyaWQgbWluQ2hpbGRXaWR0aD1cIjEyMHB4XCIgc3BhY2luZz1cIjQwcHhcIj5cbiAgICAgICAgey8qIGdldCBwb3N0cyBmcm9tIGZpcmViYXNlIGFuZCBjYWxsIGZ1bmN0aW9uICovfVxuICAgICAgICB7LyogVE9ETzogZ2V0IGRhdGEgZnJvbSBmaXJlYmFzZSBhbmQgZGlzcGxheSBkYXRhICovfVxuICAgICAgICB7cG9zdC5tYXAoKHNpbmdsZVBvc3QpID0+IHtcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBrZXk9e3NpbmdsZVBvc3QuaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL2Jsb2cvJHtzaW5nbGVQb3N0LmlkfWApfVxuICAgICAgICAgICAgYXM9XCJidXR0b25cIlxuICAgICAgICAgICAgdGV4dEFsaWduPVwic3RhcnRcIlxuICAgICAgICAgICAgbT17Mn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGVzdChzaW5nbGVQb3N0KX1cbiAgICAgICAgICAgIHsvKiB7Z2VuZXJhdGVQb3N0KHNpbmdsZVBvc3QpfSAqL31cbiAgICAgICAgICA8L0JveD47XG4gICAgICAgIH0pfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IE5leHRQYWdlQ29udGV4dCkge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgY29uc3QgZGF0YSA9IHBvc3QubWFwKChzaW5nbGVQb3N0OiBhbnkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc2luZ2xlUG9zdCxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog/index.tsx\n");

/***/ })

})