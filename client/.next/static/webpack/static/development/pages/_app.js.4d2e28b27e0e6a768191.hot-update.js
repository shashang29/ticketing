webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/Header.jsx":
/*!**************************************!*\
  !*** ./components/Header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.css */ \"./components/Header/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/shashang/Projects/ticketing/client/components/Header/Header.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var currentUser = _ref.currentUser;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      windowWidth = _useState[0],\n      setWindowWidth = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      dropDownOpen = _useState2[0],\n      setDropDownOpen = _useState2[1];\n\n  function initMobileMenu(toggle, menu) {\n    menu.classList.add(_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.closed);\n    [\"click\", \"touchstart\"].forEach(function (eventName) {\n      toggle.addEventListener(eventName, function (evt) {\n        evt.preventDefault();\n        menu.classList.toggle(_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.open);\n        menu.classList.toggle(_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.closed);\n      });\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener(\"resize\", updateWindowSize);\n    var toggle = document.getElementById(\"mobile-menu-toggle\");\n    var menu = document.getElementById(\"main-nav-mobile\");\n    initMobileMenu(toggle, menu);\n  }, []);\n\n  var updateWindowSize = function updateWindowSize() {\n    setWindowWidth(window.innerWidth);\n  };\n\n  var links = [{\n    label: \"New Motors\",\n    href: \"/new\"\n  }, {\n    label: \"Used Motors\",\n    href: \"/used\"\n  }, {\n    label: \"Sell My Motor\",\n    href: \"/sell\"\n  }, !currentUser && {\n    label: \"Sign Up\",\n    href: \"/auth/signup\"\n  }, !currentUser && {\n    label: \"Sign In\",\n    href: \"/auth/signin\"\n  }, currentUser && {\n    label: \"Sell Tickets\",\n    href: \"/tickets/new\"\n  }, currentUser && {\n    label: \"My Orders\",\n    href: \"/orders\"\n  }, currentUser && {\n    label: \"Sign Out\",\n    href: \"/auth/signout\"\n  }].filter(function (linkConfig) {\n    return linkConfig;\n  }).map(function (_ref2) {\n    var label = _ref2.label,\n        href = _ref2.href;\n    return __jsx(\"li\", {\n      key: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      className: \"link db dib-l pa2 pv2 color-inherit\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 25\n      }\n    }, label)));\n  });\n  return __jsx(\"header\", {\n    className: \"pv3 ph2 relative bb\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: \"container\",\n    className: \"flex justify-between items-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    id: \"logo\",\n    className: \"overflow-hidden\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    className: \"link color-inherit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 21\n    }\n  }, \"Logo\")), __jsx(\"a\", {\n    href: \"#0\",\n    id: \"mobile-menu-toggle\",\n    className: \"link color-inherit pa3 dn-l\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, \"\\u2630\"), __jsx(\"nav\", {\n    id: \"main-nav\",\n    className: \"dn db-l\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"flex justify-between list pl0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  }, links)), __jsx(\"nav\", {\n    id: \"main-nav-mobile\",\n    className: \"dn absolute \".concat(_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.top100, \" tc right-0 w-100 w-40-ns pa2 bg-moon-gray ba\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"links\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 21\n    }\n  }, links))));\n}, \"v1/BsVR8nzYzI68kofPILOunypI=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4PzUwOGIiXSwibmFtZXMiOlsiY3VycmVudFVzZXIiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJkcm9wRG93bk9wZW4iLCJzZXREcm9wRG93bk9wZW4iLCJpbml0TW9iaWxlTWVudSIsInRvZ2dsZSIsIm1lbnUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZXMiLCJjbG9zZWQiLCJmb3JFYWNoIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0Iiwib3BlbiIsInVzZUVmZmVjdCIsIndpbmRvdyIsInVwZGF0ZVdpbmRvd1NpemUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJXaWR0aCIsImxpbmtzIiwibGFiZWwiLCJocmVmIiwiZmlsdGVyIiwibGlua0NvbmZpZyIsIm1hcCIsInRvcDEwMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLGtGQUFxQjtBQUFBOztBQUFBLE1BQWxCQSxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsRUFBRCxDQURkO0FBQUEsTUFDekJDLFdBRHlCO0FBQUEsTUFDWkMsY0FEWTs7QUFBQSxtQkFFUUYsc0RBQVEsQ0FBQyxLQUFELENBRmhCO0FBQUEsTUFFekJHLFlBRnlCO0FBQUEsTUFFWEMsZUFGVzs7QUFHaEMsV0FBU0MsY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0NDLElBQWhDLEVBQXNDO0FBQ2xDQSxRQUFJLENBQUNDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQkMseURBQU0sQ0FBQ0MsTUFBMUI7QUFDQSxLQUFDLE9BQUQsRUFBVSxZQUFWLEVBQXdCQyxPQUF4QixDQUFnQyxVQUFVQyxTQUFWLEVBQXFCO0FBQ2pEUCxZQUFNLENBQUNRLGdCQUFQLENBQXdCRCxTQUF4QixFQUFtQyxVQUFVRSxH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SSxhQUFTLEVBQUMsNkJBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLEVBZUk7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixhQUFTLEVBQUMsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0RELEtBQWhELENBREosQ0FmSixFQW1CSTtBQUNJLE1BQUUsRUFBQyxpQkFEUDtBQUVJLGFBQVMsd0JBQWlCZCx5REFBTSxDQUFDb0IsTUFBeEIsa0RBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Qk4sS0FBeEIsQ0FKSixDQW5CSixDQURKLENBREo7QUE4QkgsQ0E3RUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gICAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZHJvcERvd25PcGVuLCBzZXREcm9wRG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGZ1bmN0aW9uIGluaXRNb2JpbGVNZW51KHRvZ2dsZSwgbWVudSkge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoc3R5bGVzLmNsb3NlZCk7XG4gICAgICAgIFtcImNsaWNrXCIsIFwidG91Y2hzdGFydFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShzdHlsZXMub3Blbik7XG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKHN0eWxlcy5jbG9zZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVdpbmRvd1NpemUpO1xuICAgICAgICB2YXIgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGUtbWVudS10b2dnbGVcIik7XG4gICAgICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdi1tb2JpbGVcIik7XG4gICAgICAgIGluaXRNb2JpbGVNZW51KHRvZ2dsZSwgbWVudSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgdXBkYXRlV2luZG93U2l6ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIH07XG4gICAgY29uc3QgbGlua3MgPSBbXG4gICAgICAgIHsgbGFiZWw6IFwiTmV3IE1vdG9yc1wiLCBocmVmOiBcIi9uZXdcIiB9LFxuICAgICAgICB7IGxhYmVsOiBcIlVzZWQgTW90b3JzXCIsIGhyZWY6IFwiL3VzZWRcIiB9LFxuICAgICAgICB7IGxhYmVsOiBcIlNlbGwgTXkgTW90b3JcIiwgaHJlZjogXCIvc2VsbFwiIH0sXG4gICAgICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiBcIlNpZ24gVXBcIiwgaHJlZjogXCIvYXV0aC9zaWdudXBcIiB9LFxuICAgICAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogXCJTaWduIEluXCIsIGhyZWY6IFwiL2F1dGgvc2lnbmluXCIgfSxcbiAgICAgICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogXCJTZWxsIFRpY2tldHNcIiwgaHJlZjogXCIvdGlja2V0cy9uZXdcIiB9LFxuICAgICAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiBcIk15IE9yZGVyc1wiLCBocmVmOiBcIi9vcmRlcnNcIiB9LFxuICAgICAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiBcIlNpZ24gT3V0XCIsIGhyZWY6IFwiL2F1dGgvc2lnbm91dFwiIH0sXG4gICAgXVxuICAgICAgICAuZmlsdGVyKChsaW5rQ29uZmlnKSA9PiBsaW5rQ29uZmlnKVxuICAgICAgICAubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aHJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBkYiBkaWItbCBwYTIgcHYyIGNvbG9yLWluaGVyaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInB2MyBwaDIgcmVsYXRpdmUgYmJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9nb1wiIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpbmsgY29sb3ItaW5oZXJpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nb1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiIzBcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIm1vYmlsZS1tZW51LXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmsgY29sb3ItaW5oZXJpdCBwYTMgZG4tbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDimLBcbiAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICA8bmF2IGlkPVwibWFpbi1uYXZcIiBjbGFzc05hbWU9XCJkbiBkYi1sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbGlzdCBwbDBcIj57bGlua3N9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgICAgICA8bmF2XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibWFpbi1uYXYtbW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZG4gYWJzb2x1dGUgJHtzdHlsZXMudG9wMTAwfSB0YyByaWdodC0wIHctMTAwIHctNDAtbnMgcGEyIGJnLW1vb24tZ3JheSBiYWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+e2xpbmtzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/Header.jsx\n");

/***/ })

})