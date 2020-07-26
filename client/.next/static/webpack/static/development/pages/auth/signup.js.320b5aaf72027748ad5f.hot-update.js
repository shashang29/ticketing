webpackHotUpdate("static/development/pages/auth/signup.js",{

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/request */ \"./hooks/request.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button/Button */ \"./components/Button/Button.jsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/shashang/Projects/ticketing/client/pages/auth/signup.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useRequest = Object(_hooks_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n    url: \"/api/users/signup\",\n    method: \"post\",\n    body: {\n      email: email,\n      password: password\n    },\n    onSuccess: function onSuccess() {\n      return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(\"/\");\n    }\n  }),\n      sendRequest = _useRequest.sendRequest,\n      errors = _useRequest.errors;\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.next = 3;\n              return sendRequest();\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"article\", {\n    className: \"pa4 black-80\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    action: \"sign-up_submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: \"ph0 mh0 fw6 clip black\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, \"Sign Up\"), __jsx(\"fieldset\", {\n    id: \"sign_up\",\n    className: \"ba b--transparent ph0 mh0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"mt3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  }, __jsx(\"label\", {\n    className: \"db fw4 lh-copy f6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 25\n    }\n  }, \"Email address\"), __jsx(\"input\", {\n    className: \"pa2 input-reset ba bg-transparent w-100 measure\",\n    type: \"email\",\n    name: \"email-address\",\n    id: \"email-address\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    className: \"mt3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, __jsx(\"label\", {\n    className: \"db fw4 lh-copy f6\",\n    \"for\": \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 25\n    }\n  }, \"Password\"), __jsx(\"input\", {\n    className: \"b pa2 input-reset ba bg-transparent\",\n    type: \"password\",\n    name: \"password\",\n    id: \"password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 25\n    }\n  }))), __jsx(\"div\", {\n    className: \"mt3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Sign Up\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 21\n    }\n  }))));\n}, \"aHyJdESS1U926DlgCIWLBFzJdy4=\", false, function () {\n  return [_hooks_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL3NpZ251cC5qcz85YWM5Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VSZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsIm9uU3VjY2VzcyIsIlJvdXRlciIsInB1c2giLCJzZW5kUmVxdWVzdCIsImVycm9ycyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsOEVBQU07QUFBQTs7QUFBQSxrQkFDU0Esc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDVkMsS0FEVTtBQUFBLE1BQ0hDLFFBREc7O0FBQUEsbUJBRWVGLHNEQUFRLENBQUMsRUFBRCxDQUZ2QjtBQUFBLE1BRVZHLFFBRlU7QUFBQSxNQUVBQyxXQUZBOztBQUFBLG9CQUdlQyw4REFBVSxDQUFDO0FBQ3ZDQyxPQUFHLEVBQUUsbUJBRGtDO0FBRXZDQyxVQUFNLEVBQUUsTUFGK0I7QUFHdkNDLFFBQUksRUFBRTtBQUNGUCxXQUFLLEVBQUxBLEtBREU7QUFFRkUsY0FBUSxFQUFSQTtBQUZFLEtBSGlDO0FBT3ZDTSxhQUFTLEVBQUU7QUFBQSxhQUFNQyxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUFOO0FBQUE7QUFQNEIsR0FBRCxDQUh6QjtBQUFBLE1BR1RDLFdBSFMsZUFHVEEsV0FIUztBQUFBLE1BR0lDLE1BSEosZUFHSUEsTUFISjs7QUFhakIsTUFBTUMsUUFBUTtBQUFBLGdNQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYkEsbUJBQUssQ0FBQ0MsY0FBTjtBQURhO0FBQUEscUJBR1BKLFdBQVcsRUFISjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSRSxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBTUEsU0FDSTtBQUFTLGFBQVMsRUFBQyxjQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxVQUFNLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVJO0FBQVUsTUFBRSxFQUFDLFNBQWI7QUFBdUIsYUFBUyxFQUFDLDJCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxhQUFTLEVBQUMsbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFJSTtBQUNJLGFBQVMsRUFBQyxpREFEZDtBQUVJLFFBQUksRUFBQyxPQUZUO0FBR0ksUUFBSSxFQUFDLGVBSFQ7QUFJSSxNQUFFLEVBQUMsZUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixFQVlJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFDLG1CQUFqQjtBQUFxQyxXQUFJLFVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFJSTtBQUNJLGFBQVMsRUFBQyxxQ0FEZDtBQUVJLFFBQUksRUFBQyxVQUZUO0FBR0ksUUFBSSxFQUFDLFVBSFQ7QUFJSSxNQUFFLEVBQUMsVUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FaSixDQUZKLEVBMEJJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBUSxTQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0ExQkosQ0FESixDQURKO0FBa0NILENBckREO0FBQUEsVUFHb0NULHNEQUhwQztBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC9zaWdudXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VSZXF1ZXN0IGZyb20gXCIuLi8uLi9ob29rcy9yZXF1ZXN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCB7IHNlbmRSZXF1ZXN0LCBlcnJvcnMgfSA9IHVzZVJlcXVlc3Qoe1xuICAgICAgICB1cmw6IFwiL2FwaS91c2Vycy9zaWdudXBcIixcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiBSb3V0ZXIucHVzaChcIi9cIiksXG4gICAgfSk7XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGF3YWl0IHNlbmRSZXF1ZXN0KCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBhNCBibGFjay04MFwiPlxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwic2lnbi11cF9zdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGgwIG1oMCBmdzYgY2xpcCBibGFja1wiPlNpZ24gVXA8L2gxPlxuICAgICAgICAgICAgICAgIDxmaWVsZHNldCBpZD1cInNpZ25fdXBcIiBjbGFzc05hbWU9XCJiYSBiLS10cmFuc3BhcmVudCBwaDAgbWgwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZGIgZnc0IGxoLWNvcHkgZjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGEyIGlucHV0LXJlc2V0IGJhIGJnLXRyYW5zcGFyZW50IHctMTAwIG1lYXN1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsLWFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWwtYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkYiBmdzQgbGgtY29weSBmNlwiIGZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiIHBhMiBpbnB1dC1yZXNldCBiYSBiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10M1wiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiU2lnbiBVcFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ })

})