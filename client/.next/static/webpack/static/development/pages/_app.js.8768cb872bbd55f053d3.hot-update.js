webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/Header.jsx":
/*!**************************************!*\
  !*** ./components/Header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.css */ \"./components/Header/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/shashang/Projects/ticketing/client/components/Header/Header.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var currentUser = _ref.currentUser;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      windowWidth = _useState[0],\n      setWindowWidth = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      dropDownOpen = _useState2[0],\n      setDropDownOpen = _useState2[1];\n\n  function initMobileMenu(toggle, menu) {\n    menu.classList.add(_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.closed);\n    [\"click\", \"touchstart\"].forEach(function (eventName) {\n      toggle.addEventListener(eventName, function (evt) {\n        evt.preventDefault();\n        menu.classList.toggle(\"mobile-menu-open\");\n        menu.classList.toggle(\"mobile-menu-closed\");\n      });\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener(\"resize\", updateWindowSize);\n    var toggle = document.getElementById(\"mobile-menu-toggle\");\n    var menu = document.getElementById(\"main-nav-mobile\");\n    initMobileMenu(toggle, menu);\n  }, []);\n\n  var updateWindowSize = function updateWindowSize() {\n    setWindowWidth(window.innerWidth);\n  };\n\n  var links = [{\n    label: \"New Motors\",\n    href: \"/new\"\n  }, {\n    label: \"Used Motors\",\n    href: \"/used\"\n  }, {\n    label: \"Sell My Motor\",\n    href: \"/sell\"\n  }, !currentUser && {\n    label: \"Sign Up\",\n    href: \"/auth/signup\"\n  }, !currentUser && {\n    label: \"Sign In\",\n    href: \"/auth/signin\"\n  }, currentUser && {\n    label: \"Sell Tickets\",\n    href: \"/tickets/new\"\n  }, currentUser && {\n    label: \"My Orders\",\n    href: \"/orders\"\n  }, currentUser && {\n    label: \"Sign Out\",\n    href: \"/auth/signout\"\n  }].filter(function (linkConfig) {\n    return linkConfig;\n  }).map(function (_ref2) {\n    var label = _ref2.label,\n        href = _ref2.href;\n    return __jsx(\"li\", {\n      key: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      className: \"f6 link dib  dim mr3 mr4-ns \".concat(windowWidth < 750 ? \"pa3 black\" : \"white\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 25\n      }\n    }, label)));\n  });\n  return __jsx(\"header\", {\n    \"class\": \"pv3 ph2 relative bb\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: \"container\",\n    \"class\": \"flex justify-between items-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    id: \"logo\",\n    \"class\": \"overflow-hidden\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    \"class\": \"link color-inherit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 21\n    }\n  }, \"Logo\")), __jsx(\"a\", {\n    href: \"#0\",\n    id: \"mobile-menu-toggle\",\n    \"class\": \"link color-inherit pa3 dn-l\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, \"\\u2630 Menu\"), __jsx(\"nav\", {\n    id: \"main-nav\",\n    \"class\": \"dn db-l\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    \"class\": \"link db dib-l pa2 pv2 color-inherit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 21\n    }\n  }, \"Features\"), __jsx(\"a\", {\n    href: \"#\",\n    \"class\": \"link db dib-l pa2 pv2 color-inherit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 21\n    }\n  }, \"Pricing\"), __jsx(\"a\", {\n    href: \"#\",\n    \"class\": \"link dib pa2 pv2 color-inherit ba br2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 21\n    }\n  }, \"Sign up\")), __jsx(\"nav\", {\n    id: \"main-nav-mobile\",\n    \"class\": \"dn absolute top-100 tc right-0 w-100 w-40-ns pa2 bg-moon-gray ba\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    \"class\": \"link db ph2 pv3 color-inherit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 21\n    }\n  }, \"Features\"), __jsx(\"a\", {\n    href: \"#\",\n    \"class\": \"link db ph2 pv3 color-inherit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 21\n    }\n  }, \"Pricing\"), __jsx(\"a\", {\n    href: \"#\",\n    \"class\": \"link db ph2 pv3 color-inherit ba br2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 21\n    }\n  }, \"Sign up\"))));\n}, \"v1/BsVR8nzYzI68kofPILOunypI=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4PzUwOGIiXSwibmFtZXMiOlsiY3VycmVudFVzZXIiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJkcm9wRG93bk9wZW4iLCJzZXREcm9wRG93bk9wZW4iLCJpbml0TW9iaWxlTWVudSIsInRvZ2dsZSIsIm1lbnUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZXMiLCJjbG9zZWQiLCJmb3JFYWNoIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0Iiwid2luZG93IiwidXBkYXRlV2luZG93U2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lcldpZHRoIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rQ29uZmlnIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsa0ZBQXFCO0FBQUE7O0FBQUEsTUFBbEJBLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUN6QkMsV0FEeUI7QUFBQSxNQUNaQyxjQURZOztBQUFBLG1CQUVRRixzREFBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUV6QkcsWUFGeUI7QUFBQSxNQUVYQyxlQUZXOztBQUdoQyxXQUFTQyxjQUFULENBQXdCQyxNQUF4QixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFDbENBLFFBQUksQ0FBQ0MsU0FBTCxDQUFlQyxHQUFmLENBQW1CQyx5REFBTSxDQUFDQyxNQUExQjtBQUNBLEtBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0JDLE9BQXhCLENBQWdDLFVBQVVDLFNBQVYsRUFBcUI7QUFDakRQLFlBQU0sQ0FBQ1EsZ0JBQVAsQ0FBd0JELFNBQXhCLEVBQW1DLFVBQVVFLEdBQVYsRUFBZTtBQUM5Q0Es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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSixFQWVJO0FBQUssTUFBRSxFQUFDLFVBQVI7QUFBbUIsYUFBTSxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQU0scUNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFJSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBTSxxQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLEVBT0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQU0sdUNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixDQWZKLEVBMkJJO0FBQ0ksTUFBRSxFQUFDLGlCQURQO0FBRUksYUFBTSxrRUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUk7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQU0sK0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosRUFPSTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBTSwrQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLEVBVUk7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQU0sc0NBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSixDQTNCSixDQURKLENBREo7QUE4Q0gsQ0FqR0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gICAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZHJvcERvd25PcGVuLCBzZXREcm9wRG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGZ1bmN0aW9uIGluaXRNb2JpbGVNZW51KHRvZ2dsZSwgbWVudSkge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoc3R5bGVzLmNsb3NlZCk7XG4gICAgICAgIFtcImNsaWNrXCIsIFwidG91Y2hzdGFydFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm1vYmlsZS1tZW51LW9wZW5cIik7XG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwibW9iaWxlLW1lbnUtY2xvc2VkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVdpbmRvd1NpemUpO1xuICAgICAgICB2YXIgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGUtbWVudS10b2dnbGVcIik7XG4gICAgICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdi1tb2JpbGVcIik7XG4gICAgICAgIGluaXRNb2JpbGVNZW51KHRvZ2dsZSwgbWVudSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgdXBkYXRlV2luZG93U2l6ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIH07XG4gICAgY29uc3QgbGlua3MgPSBbXG4gICAgICAgIHsgbGFiZWw6IFwiTmV3IE1vdG9yc1wiLCBocmVmOiBcIi9uZXdcIiB9LFxuICAgICAgICB7IGxhYmVsOiBcIlVzZWQgTW90b3JzXCIsIGhyZWY6IFwiL3VzZWRcIiB9LFxuICAgICAgICB7IGxhYmVsOiBcIlNlbGwgTXkgTW90b3JcIiwgaHJlZjogXCIvc2VsbFwiIH0sXG4gICAgICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiBcIlNpZ24gVXBcIiwgaHJlZjogXCIvYXV0aC9zaWdudXBcIiB9LFxuICAgICAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogXCJTaWduIEluXCIsIGhyZWY6IFwiL2F1dGgvc2lnbmluXCIgfSxcbiAgICAgICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogXCJTZWxsIFRpY2tldHNcIiwgaHJlZjogXCIvdGlja2V0cy9uZXdcIiB9LFxuICAgICAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiBcIk15IE9yZGVyc1wiLCBocmVmOiBcIi9vcmRlcnNcIiB9LFxuICAgICAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiBcIlNpZ24gT3V0XCIsIGhyZWY6IFwiL2F1dGgvc2lnbm91dFwiIH0sXG4gICAgXVxuICAgICAgICAuZmlsdGVyKChsaW5rQ29uZmlnKSA9PiBsaW5rQ29uZmlnKVxuICAgICAgICAubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aHJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmNiBsaW5rIGRpYiAgZGltIG1yMyBtcjQtbnMgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93V2lkdGggPCA3NTAgPyBcInBhMyBibGFja1wiIDogXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cInB2MyBwaDIgcmVsYXRpdmUgYmJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvXCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpbmsgY29sb3ItaW5oZXJpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nb1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiIzBcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIm1vYmlsZS1tZW51LXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluayBjb2xvci1pbmhlcml0IHBhMyBkbi1sXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOKYsCBNZW51XG4gICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgPG5hdiBpZD1cIm1haW4tbmF2XCIgY2xhc3M9XCJkbiBkYi1sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsaW5rIGRiIGRpYi1sIHBhMiBwdjIgY29sb3ItaW5oZXJpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZXNcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGluayBkYiBkaWItbCBwYTIgcHYyIGNvbG9yLWluaGVyaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByaWNpbmdcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGluayBkaWIgcGEyIHB2MiBjb2xvci1pbmhlcml0IGJhIGJyMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgICAgICA8bmF2XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibWFpbi1uYXYtbW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkbiBhYnNvbHV0ZSB0b3AtMTAwIHRjIHJpZ2h0LTAgdy0xMDAgdy00MC1ucyBwYTIgYmctbW9vbi1ncmF5IGJhXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsaW5rIGRiIHBoMiBwdjMgY29sb3ItaW5oZXJpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZXNcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGluayBkYiBwaDIgcHYzIGNvbG9yLWluaGVyaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByaWNpbmdcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGluayBkYiBwaDIgcHYzIGNvbG9yLWluaGVyaXQgYmEgYnIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/Header.jsx\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Header/Header.module.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/Header/Header.module.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Header_closed__20j-A {\\n    display: none;\\n}\\n\\n.Header_mobile-menu-open__1t4FW {\\n    display: block;\\n}\\n\\n.Header_navbar__5LFOZ {\\n    background-color: #06A69E\\n}\\n\\n.Header_top-100__28HpX {\\n    top: 100%;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/shashang/Projects/ticketing/client/components/Header/Header.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI;AACJ;;AAEA;IACI,SAAS;AACb\",\"file\":\"Header.module.css\",\"sourcesContent\":[\".closed {\\n    display: none;\\n}\\n\\n.mobile-menu-open {\\n    display: block;\\n}\\n\\n.navbar {\\n    background-color: #06A69E\\n}\\n\\n.top-100 {\\n    top: 100%;\\n}\"]}]);\n// Exports\nexports.locals = {\n\t\"closed\": \"Header_closed__20j-A\",\n\t\"mobile-menu-open\": \"Header_mobile-menu-open__1t4FW\",\n\t\"navbar\": \"Header_navbar__5LFOZ\",\n\t\"top-100\": \"Header_top-100__28HpX\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcz9lZDM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLG9CQUFvQixHQUFHLHFDQUFxQyxxQkFBcUIsR0FBRywyQkFBMkIsa0NBQWtDLDRCQUE0QixnQkFBZ0IsR0FBRyxPQUFPLG9JQUFvSSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLDZEQUE2RCxvQkFBb0IsR0FBRyx1QkFBdUIscUJBQXFCLEdBQUcsYUFBYSxrQ0FBa0MsY0FBYyxnQkFBZ0IsR0FBRyxHQUFHO0FBQ3hwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5IZWFkZXJfY2xvc2VkX18yMGotQSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5IZWFkZXJfbW9iaWxlLW1lbnUtb3Blbl9fMXQ0Rlcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLkhlYWRlcl9uYXZiYXJfXzVMRk9aIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2QTY5RVxcbn1cXG5cXG4uSGVhZGVyX3RvcC0xMDBfXzI4SHBYIHtcXG4gICAgdG9wOiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc2hhc2hhbmcvUHJvamVjdHMvdGlja2V0aW5nL2NsaWVudC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFNBQVM7QUFDYlwiLFwiZmlsZVwiOlwiSGVhZGVyLm1vZHVsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNsb3NlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2JpbGUtbWVudS1vcGVuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZBNjlFXFxufVxcblxcbi50b3AtMTAwIHtcXG4gICAgdG9wOiAxMDAlO1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjbG9zZWRcIjogXCJIZWFkZXJfY2xvc2VkX18yMGotQVwiLFxuXHRcIm1vYmlsZS1tZW51LW9wZW5cIjogXCJIZWFkZXJfbW9iaWxlLW1lbnUtb3Blbl9fMXQ0RldcIixcblx0XCJuYXZiYXJcIjogXCJIZWFkZXJfbmF2YmFyX181TEZPWlwiLFxuXHRcInRvcC0xMDBcIjogXCJIZWFkZXJfdG9wLTEwMF9fMjhIcFhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Header/Header.module.css\n");

/***/ })

})