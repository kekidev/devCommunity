module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase/firebase.ts":
/*!******************************!*\
  !*** ./firebase/firebase.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyAWYYIyqFSELax_sUiTwn_IPj6KOopujKA\",\n  authDomain: \"keki-edb8c.firebaseapp.com\",\n  projectId: \"keki-edb8c\"\n};\n\ntry {\n  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\n} catch (err) {\n  if (!/already exists/.test(err.message)) {\n    console.error(\"Firebase initialization error\", err.stack);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maXJlYmFzZS50cz8zYWQ1Il0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiZXJyIiwidGVzdCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUc7QUFDckJDLFFBQU0sRUFBRUMseUNBRGE7QUFFckJDLFlBQVUsRUFBRUQsNEJBRlM7QUFHckJFLFdBQVMsRUFBRUYsWUFBMkNHO0FBSGpDLENBQXZCOztBQU1BLElBQUk7QUFDRkMscURBQVEsQ0FBQ0MsYUFBVCxDQUF1QlAsY0FBdkI7QUFDRCxDQUZELENBRUUsT0FBT1EsR0FBUCxFQUFZO0FBQ1osTUFBSSxDQUFDLGlCQUFpQkMsSUFBakIsQ0FBc0JELEdBQUcsQ0FBQ0UsT0FBMUIsQ0FBTCxFQUF5QztBQUN2Q0MsV0FBTyxDQUFDQyxLQUFSLENBQWMsK0JBQWQsRUFBK0NKLEdBQUcsQ0FBQ0ssS0FBbkQ7QUFDRDtBQUNGOztBQUVjUCxrSEFBZiIsImZpbGUiOiIuL2ZpcmViYXNlL2ZpcmViYXNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lELFxufTtcblxudHJ5IHtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG59IGNhdGNoIChlcnIpIHtcbiAgaWYgKCEvYWxyZWFkeSBleGlzdHMvLnRlc3QoZXJyLm1lc3NhZ2UpKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yXCIsIGVyci5zdGFjayk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/firebase.ts\n");

/***/ }),

/***/ "./lib/auth.tsx":
/*!**********************!*\
  !*** ./lib/auth.tsx ***!
  \**********************/
/*! exports provided: AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/db */ \"./utils/db.ts\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/firebase */ \"./firebase/firebase.ts\");\n\nvar _jsxFileName = \"/Users/keki/dev/websites/web/lib/auth.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({\n  auth: null,\n  loading: true,\n  siginWithGoogle: async () => {},\n  signOut: async () => {}\n});\n\nconst formatAuthState = user => ({\n  uid: user.uid,\n  email: user.email,\n  name: user.displayName,\n  photoUrl: user.photoURL,\n  token: null\n});\n\nfunction useProvideAuth() {\n  const {\n    0: auth,\n    1: setAuth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n\n  const handleAuthChange = async authState => {\n    if (!authState) {\n      setLoading(false);\n      return;\n    }\n\n    const formattedAuth = formatAuthState(authState);\n    formattedAuth.token = await authState.getIdToken();\n    setAuth(formattedAuth);\n    setLoading(false);\n  };\n\n  const signedIn = async (response, provider = \"google\") => {\n    if (!response.user) {\n      throw new Error(\"No User\");\n    }\n\n    const authUser = formatAuthState(response.user);\n    await Object(_utils_db__WEBPACK_IMPORTED_MODULE_2__[\"addUser\"])(_objectSpread(_objectSpread({}, authUser), {}, {\n      provider\n    }));\n  };\n\n  const clear = () => {\n    setAuth(null);\n    setLoading(true);\n  };\n\n  const siginWithGoogle = async () => {\n    setLoading(true);\n    return _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().signInWithPopup(new _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth.GoogleAuthProvider()).then(signedIn);\n  };\n\n  const signOut = async () => {\n    return _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().signOut().then(clear);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const unsubscribe = _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().onAuthStateChanged(handleAuthChange);\n    return () => unsubscribe();\n  }, []);\n  return {\n    auth,\n    loading,\n    siginWithGoogle,\n    signOut\n  };\n}\n\nfunction AuthProvider({\n  children\n}) {\n  const auth = useProvideAuth();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: auth,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 10\n  }, this);\n}\nconst useAuth = () => Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXV0aC50c3g/OWQ3YiJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJhdXRoIiwibG9hZGluZyIsInNpZ2luV2l0aEdvb2dsZSIsInNpZ25PdXQiLCJmb3JtYXRBdXRoU3RhdGUiLCJ1c2VyIiwidWlkIiwiZW1haWwiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJwaG90b1VybCIsInBob3RvVVJMIiwidG9rZW4iLCJ1c2VQcm92aWRlQXV0aCIsInNldEF1dGgiLCJ1c2VTdGF0ZSIsInNldExvYWRpbmciLCJoYW5kbGVBdXRoQ2hhbmdlIiwiYXV0aFN0YXRlIiwiZm9ybWF0dGVkQXV0aCIsImdldElkVG9rZW4iLCJzaWduZWRJbiIsInJlc3BvbnNlIiwicHJvdmlkZXIiLCJFcnJvciIsImF1dGhVc2VyIiwiYWRkVXNlciIsImNsZWFyIiwiZmlyZWJhc2UiLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJ0aGVuIiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZUF1dGgiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFpQkEsTUFBTUEsV0FBa0MsZ0JBQUdDLDJEQUFhLENBQWU7QUFDckVDLE1BQUksRUFBRSxJQUQrRDtBQUVyRUMsU0FBTyxFQUFFLElBRjREO0FBR3JFQyxpQkFBZSxFQUFFLFlBQVksQ0FBRSxDQUhzQztBQUlyRUMsU0FBTyxFQUFFLFlBQVksQ0FBRTtBQUo4QyxDQUFmLENBQXhEOztBQU9BLE1BQU1DLGVBQWUsR0FBSUMsSUFBRCxLQUFnQztBQUN0REMsS0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBRDRDO0FBRXREQyxPQUFLLEVBQUVGLElBQUksQ0FBQ0UsS0FGMEM7QUFHdERDLE1BQUksRUFBRUgsSUFBSSxDQUFDSSxXQUgyQztBQUl0REMsVUFBUSxFQUFFTCxJQUFJLENBQUNNLFFBSnVDO0FBS3REQyxPQUFLLEVBQUU7QUFMK0MsQ0FBaEMsQ0FBeEI7O0FBUUEsU0FBU0MsY0FBVCxHQUEwQjtBQUN4QixRQUFNO0FBQUEsT0FBQ2IsSUFBRDtBQUFBLE9BQU9jO0FBQVAsTUFBa0JDLHNEQUFRLENBQWMsSUFBZCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDZCxPQUFEO0FBQUEsT0FBVWU7QUFBVixNQUF3QkQsc0RBQVEsQ0FBVSxJQUFWLENBQXRDOztBQUVBLFFBQU1FLGdCQUFnQixHQUFHLE1BQU9DLFNBQVAsSUFBMkM7QUFDbEUsUUFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ2RGLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0E7QUFDRDs7QUFDRCxVQUFNRyxhQUFhLEdBQUdmLGVBQWUsQ0FBQ2MsU0FBRCxDQUFyQztBQUNBQyxpQkFBYSxDQUFDUCxLQUFkLEdBQXNCLE1BQU1NLFNBQVMsQ0FBQ0UsVUFBVixFQUE1QjtBQUNBTixXQUFPLENBQUNLLGFBQUQsQ0FBUDtBQUNBSCxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsR0FURDs7QUFXQSxRQUFNSyxRQUFRLEdBQUcsT0FDZkMsUUFEZSxFQUVmQyxRQUFnQixHQUFHLFFBRkosS0FHWjtBQUNILFFBQUksQ0FBQ0QsUUFBUSxDQUFDakIsSUFBZCxFQUFvQjtBQUNsQixZQUFNLElBQUltQixLQUFKLENBQVUsU0FBVixDQUFOO0FBQ0Q7O0FBQ0QsVUFBTUMsUUFBUSxHQUFHckIsZUFBZSxDQUFDa0IsUUFBUSxDQUFDakIsSUFBVixDQUFoQztBQUNBLFVBQU1xQix5REFBTyxpQ0FBTUQsUUFBTjtBQUFnQkY7QUFBaEIsT0FBYjtBQUNELEdBVEQ7O0FBV0EsUUFBTUksS0FBSyxHQUFHLE1BQU07QUFDbEJiLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUUsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBSEQ7O0FBS0EsUUFBTWQsZUFBZSxHQUFHLFlBQVk7QUFDbENjLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxXQUFPWSwwREFBUSxDQUNaNUIsSUFESSxHQUVKNkIsZUFGSSxDQUVZLElBQUlELDBEQUFRLENBQUM1QixJQUFULENBQWM4QixrQkFBbEIsRUFGWixFQUdKQyxJQUhJLENBR0NWLFFBSEQsQ0FBUDtBQUlELEdBTkQ7O0FBT0EsUUFBTWxCLE9BQU8sR0FBRyxZQUFZO0FBQzFCLFdBQU95QiwwREFBUSxDQUFDNUIsSUFBVCxHQUFnQkcsT0FBaEIsR0FBMEI0QixJQUExQixDQUErQkosS0FBL0IsQ0FBUDtBQUNELEdBRkQ7O0FBSUFLLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFdBQVcsR0FBR0wsMERBQVEsQ0FBQzVCLElBQVQsR0FBZ0JrQyxrQkFBaEIsQ0FBbUNqQixnQkFBbkMsQ0FBcEI7QUFDQSxXQUFPLE1BQU1nQixXQUFXLEVBQXhCO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLFNBQU87QUFDTGpDLFFBREs7QUFFTEMsV0FGSztBQUdMQyxtQkFISztBQUlMQztBQUpLLEdBQVA7QUFNRDs7QUFFTSxTQUFTZ0MsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQXlDO0FBQzlDLFFBQU1wQyxJQUFJLEdBQUdhLGNBQWMsRUFBM0I7QUFDQSxzQkFBTyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUViLElBQTdCO0FBQUEsY0FBb0NvQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtBQUVNLE1BQU1DLE9BQU8sR0FBRyxNQUFNQyx3REFBVSxDQUFDeEMsV0FBRCxDQUFoQyIsImZpbGUiOiIuL2xpYi9hdXRoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFkZFVzZXIgfSBmcm9tIFwiLi4vdXRpbHMvZGJcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcblxuaW50ZXJmYWNlIEF1dGgge1xuICB1aWQ6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZyB8IG51bGw7XG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gIHBob3RvVXJsOiBzdHJpbmcgfCBudWxsO1xuICB0b2tlbjogc3RyaW5nIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIElBdXRoQ29udGV4dCB7XG4gIGF1dGg6IEF1dGggfCBudWxsO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBzaWdpbldpdGhHb29nbGU6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIHNpZ25PdXQ6ICgpID0+IFByb21pc2U8dm9pZD47XG59XG5cbmNvbnN0IEF1dGhDb250ZXh0OiBDb250ZXh0PElBdXRoQ29udGV4dD4gPSBjcmVhdGVDb250ZXh0PElBdXRoQ29udGV4dD4oe1xuICBhdXRoOiBudWxsLFxuICBsb2FkaW5nOiB0cnVlLFxuICBzaWdpbldpdGhHb29nbGU6IGFzeW5jICgpID0+IHt9LFxuICBzaWduT3V0OiBhc3luYyAoKSA9PiB7fSxcbn0pO1xuXG5jb25zdCBmb3JtYXRBdXRoU3RhdGUgPSAodXNlcjogZmlyZWJhc2UuVXNlcik6IEF1dGggPT4gKHtcbiAgdWlkOiB1c2VyLnVpZCxcbiAgZW1haWw6IHVzZXIuZW1haWwsXG4gIG5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXG4gIHBob3RvVXJsOiB1c2VyLnBob3RvVVJMLFxuICB0b2tlbjogbnVsbCxcbn0pO1xuXG5mdW5jdGlvbiB1c2VQcm92aWRlQXV0aCgpIHtcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGU8QXV0aCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCBoYW5kbGVBdXRoQ2hhbmdlID0gYXN5bmMgKGF1dGhTdGF0ZTogZmlyZWJhc2UuVXNlciB8IG51bGwpID0+IHtcbiAgICBpZiAoIWF1dGhTdGF0ZSkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvcm1hdHRlZEF1dGggPSBmb3JtYXRBdXRoU3RhdGUoYXV0aFN0YXRlKTtcbiAgICBmb3JtYXR0ZWRBdXRoLnRva2VuID0gYXdhaXQgYXV0aFN0YXRlLmdldElkVG9rZW4oKTtcbiAgICBzZXRBdXRoKGZvcm1hdHRlZEF1dGgpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHNpZ25lZEluID0gYXN5bmMgKFxuICAgIHJlc3BvbnNlOiBmaXJlYmFzZS5hdXRoLlVzZXJDcmVkZW50aWFsLFxuICAgIHByb3ZpZGVyOiBTdHJpbmcgPSBcImdvb2dsZVwiXG4gICkgPT4ge1xuICAgIGlmICghcmVzcG9uc2UudXNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gVXNlclwiKTtcbiAgICB9XG4gICAgY29uc3QgYXV0aFVzZXIgPSBmb3JtYXRBdXRoU3RhdGUocmVzcG9uc2UudXNlcik7XG4gICAgYXdhaXQgYWRkVXNlcih7IC4uLmF1dGhVc2VyLCBwcm92aWRlciB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBzZXRBdXRoKG51bGwpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgc2lnaW5XaXRoR29vZ2xlID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgcmV0dXJuIGZpcmViYXNlXG4gICAgICAuYXV0aCgpXG4gICAgICAuc2lnbkluV2l0aFBvcHVwKG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpKVxuICAgICAgLnRoZW4oc2lnbmVkSW4pO1xuICB9O1xuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpLnRoZW4oY2xlYXIpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKGhhbmRsZUF1dGhDaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdXRoLFxuICAgIGxvYWRpbmcsXG4gICAgc2lnaW5XaXRoR29vZ2xlLFxuICAgIHNpZ25PdXQsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBhbnkpIHtcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.tsx\");\n\nvar _jsxFileName = \"/Users/keki/dev/websites/web/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ChakraProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_auth__WEBPACK_IMPORTED_MODULE_2__[\"AuthProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUFtRDtBQUNqRCxzQkFDRSxxRUFBQywrREFBRDtBQUFBLDJCQUNFLHFFQUFDLHNEQUFEO0FBQUEsNkJBQ0UscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9saWIvYXV0aFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/db.ts":
/*!*********************!*\
  !*** ./utils/db.ts ***!
  \*********************/
/*! exports provided: addUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addUser\", function() { return addUser; });\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase/firebase */ \"./firebase/firebase.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst addUser = async authUser => {\n  const resp = await _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firestore().collection(\"users\").doc(authUser.uid).set(_objectSpread({}, authUser), {\n    merge: true\n  });\n  return resp;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYi50cz85MWI4Il0sIm5hbWVzIjpbImFkZFVzZXIiLCJhdXRoVXNlciIsInJlc3AiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJzZXQiLCJtZXJnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxPQUFPLEdBQUcsTUFBT0MsUUFBUCxJQUF5QjtBQUM5QyxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsMERBQVEsQ0FDeEJDLFNBRGdCLEdBRWhCQyxVQUZnQixDQUVMLE9BRkssRUFHaEJDLEdBSGdCLENBR1pMLFFBQVEsQ0FBQ00sR0FIRyxFQUloQkMsR0FKZ0IsbUJBSVBQLFFBSk8sR0FJSztBQUFFUSxTQUFLLEVBQUU7QUFBVCxHQUpMLENBQW5CO0FBS0EsU0FBT1AsSUFBUDtBQUNELENBUE0iLCJmaWxlIjoiLi91dGlscy9kYi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcblxuZXhwb3J0IGNvbnN0IGFkZFVzZXIgPSBhc3luYyAoYXV0aFVzZXI6IGFueSkgPT4ge1xuICBjb25zdCByZXNwID0gYXdhaXQgZmlyZWJhc2VcbiAgICAuZmlyZXN0b3JlKClcbiAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXG4gICAgLmRvYyhhdXRoVXNlci51aWQgYXMgc3RyaW5nKVxuICAgIC5zZXQoeyAuLi5hdXRoVXNlciB9LCB7IG1lcmdlOiB0cnVlIH0pO1xuICByZXR1cm4gcmVzcDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/db.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/firestore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIj8wNjI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2ZpcmVzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/firestore\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });