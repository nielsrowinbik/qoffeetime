webpackHotUpdate_N_E("pages/recipe/[id]/timer",{

/***/ "./pages/recipe/[id]/timer.tsx":
/*!*************************************!*\
  !*** ./pages/recipe/[id]/timer.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/use-timer */ "./hooks/use-timer.ts");
/* harmony import */ var _utils_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/parser */ "./utils/parser.ts");
/* harmony import */ var _recipies_v60_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../recipies/v60.json */ "./recipies/v60.json");
var _recipies_v60_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../recipies/v60.json */ "./recipies/v60.json", 1);



var _jsxFileName = "/home/niels/dev/nielsrowinbik/brewtime/pages/recipe/[id]/timer.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var RecipeTimer = function RecipeTimer() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var timer = Object(_hooks_use_timer__WEBPACK_IMPORTED_MODULE_3__["useTimer"])(_recipies_v60_json__WEBPACK_IMPORTED_MODULE_5__.steps);

  var onStopClick = function onStopClick() {
    if (confirm("Do you want to cancel the timer?")) {
      timer.stop();
      router.push("/recipe/".concat(id));
    }
  };

  console.log(timer.remaining);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
          children: Object(_utils_parser__WEBPACK_IMPORTED_MODULE_4__["parseMillisecondsIntoTimeStamp"])(timer.remaining)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "total left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: Object(_utils_parser__WEBPACK_IMPORTED_MODULE_4__["parseMillisecondsIntoTimeStamp"])(timer.currentStepRemaining)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: _recipies_v60_json__WEBPACK_IMPORTED_MODULE_5__.steps[timer.currentStepIndex].description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: _recipies_v60_json__WEBPACK_IMPORTED_MODULE_5__.steps.map(function (step, i) {
          var content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
              children: Object(_utils_parser__WEBPACK_IMPORTED_MODULE_4__["parseMillisecondsIntoTimeStamp"])(step.duration * 1000)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: step.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 33
            }, _this)]
          }, void 0, true);

          if (timer.currentStepIndex === i) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 37
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 33
          }, _this);
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: content
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), timer.elapsed === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: timer.start,
        children: "Start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }, _this), timer.elapsed > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: timer.toggle,
        children: timer.isRunning ? "Pause" : "Continue"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, _this), timer.elapsed > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onStopClick,
        children: "Stop"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(RecipeTimer, "WdT0OCkrntqY7tE3LTwMwvCZ1ow=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], _hooks_use_timer__WEBPACK_IMPORTED_MODULE_3__["useTimer"]];
});

_c = RecipeTimer;
/* harmony default export */ __webpack_exports__["default"] = (RecipeTimer);

var _c;

$RefreshReg$(_c, "RecipeTimer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlLy90aW1lci50c3giXSwibmFtZXMiOlsiUmVjaXBlVGltZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidGltZXIiLCJ1c2VUaW1lciIsInJlY2lwZSIsInN0ZXBzIiwib25TdG9wQ2xpY2siLCJjb25maXJtIiwic3RvcCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwicmVtYWluaW5nIiwicGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wIiwiY3VycmVudFN0ZXBSZW1haW5pbmciLCJjdXJyZW50U3RlcEluZGV4IiwiZGVzY3JpcHRpb24iLCJtYXAiLCJzdGVwIiwiaSIsImNvbnRlbnQiLCJkdXJhdGlvbiIsImVsYXBzZWQiLCJzdGFydCIsInRvZ2dsZSIsImlzUnVubmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHNCLE1BRWRDLEVBRmMsR0FFUEYsTUFBTSxDQUFDRyxLQUZBLENBRWRELEVBRmM7QUFJdEIsTUFBTUUsS0FBSyxHQUFHQyxpRUFBUSxDQUFDQywrQ0FBTSxDQUFDQyxLQUFSLENBQXRCOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBSUMsT0FBTyxDQUFDLGtDQUFELENBQVgsRUFBaUQ7QUFDN0NMLFdBQUssQ0FBQ00sSUFBTjtBQUNBVixZQUFNLENBQUNXLElBQVAsbUJBQXVCVCxFQUF2QjtBQUNIO0FBQ0osR0FMRDs7QUFPQVUsU0FBTyxDQUFDQyxHQUFSLENBQVlULEtBQUssQ0FBQ1UsU0FBbEI7QUFFQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsNkJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUEsOEJBQ0k7QUFBQSxnQ0FDSTtBQUFBLG9CQUNLQyxvRkFBOEIsQ0FBQ1gsS0FBSyxDQUFDVSxTQUFQO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBUUk7QUFBQSxrQkFDS0Msb0ZBQThCLENBQUNYLEtBQUssQ0FBQ1ksb0JBQVA7QUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKLGVBV0k7QUFBQSxrQkFBS1YsK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhSCxLQUFLLENBQUNhLGdCQUFuQixFQUFxQ0M7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKLGVBWUk7QUFBQSxrQkFDS1osK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhWSxHQUFiLENBQWlCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzNCLGNBQU1DLE9BQU8sZ0JBQ1Q7QUFBQSxvQ0FDSTtBQUFBLHdCQUNLUCxvRkFBOEIsQ0FDM0JLLElBQUksQ0FBQ0csUUFBTCxHQUFnQixJQURXO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSixlQU9JO0FBQUEsd0JBQU9ILElBQUksQ0FBQ0Y7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKO0FBQUEsMEJBREo7O0FBWUEsY0FBSWQsS0FBSyxDQUFDYSxnQkFBTixLQUEyQkksQ0FBL0IsRUFDSSxvQkFDSTtBQUFBLG1DQUNJO0FBQUEsd0JBQVNDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBQVNELENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQU1KLDhCQUFPO0FBQUEsc0JBQWFDO0FBQWIsYUFBU0QsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsU0FyQkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkosRUFvQ0tqQixLQUFLLENBQUNvQixPQUFOLEtBQWtCLENBQWxCLGlCQUNHO0FBQVEsZUFBTyxFQUFFcEIsS0FBSyxDQUFDcUIsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQ1IsRUF1Q0tyQixLQUFLLENBQUNvQixPQUFOLEdBQWdCLENBQWhCLGlCQUNHO0FBQVEsZUFBTyxFQUFFcEIsS0FBSyxDQUFDc0IsTUFBdkI7QUFBQSxrQkFDS3RCLEtBQUssQ0FBQ3VCLFNBQU4sR0FBa0IsT0FBbEIsR0FBNEI7QUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhDUixFQTRDS3ZCLEtBQUssQ0FBQ29CLE9BQU4sR0FBZ0IsQ0FBaEIsaUJBQ0c7QUFBUSxlQUFPLEVBQUVoQixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXlESCxDQXhFRDs7R0FBTVQsVztVQUNhRSxxRCxFQUdESSx5RDs7O0tBSlpOLFc7QUEwRVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZS9baWRdL3RpbWVyLjc1Y2E2NzIzOTdmMDFjM2QzMDY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgdXNlVGltZXIgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlLXRpbWVyXCI7XG5pbXBvcnQgeyBwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGFyc2VyXCI7XG5cbmltcG9ydCByZWNpcGUgZnJvbSBcIi4uLy4uLy4uL3JlY2lwaWVzL3Y2MC5qc29uXCI7XG5cbmNvbnN0IFJlY2lwZVRpbWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICAgIGNvbnN0IHRpbWVyID0gdXNlVGltZXIocmVjaXBlLnN0ZXBzKTtcblxuICAgIGNvbnN0IG9uU3RvcENsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29uZmlybShcIkRvIHlvdSB3YW50IHRvIGNhbmNlbCB0aGUgdGltZXI/XCIpKSB7XG4gICAgICAgICAgICB0aW1lci5zdG9wKCk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL3JlY2lwZS8ke2lkfWApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKHRpbWVyLnJlbWFpbmluZyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5iYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGltZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAodGltZXIucmVtYWluaW5nKX1cbiAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnRvdGFsIGxlZnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICB7cGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wKHRpbWVyLmN1cnJlbnRTdGVwUmVtYWluaW5nKX1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxoMj57cmVjaXBlLnN0ZXBzW3RpbWVyLmN1cnJlbnRTdGVwSW5kZXhdLmRlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7cmVjaXBlLnN0ZXBzLm1hcCgoc3RlcCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcC5kdXJhdGlvbiAqIDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3RlcC5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZXIuY3VycmVudFN0ZXBJbmRleCA9PT0gaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2NvbnRlbnR9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9Pntjb250ZW50fTwvbGk+O1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIHt0aW1lci5lbGFwc2VkID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aW1lci5zdGFydH0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHt0aW1lci5lbGFwc2VkID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGltZXIudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lci5pc1J1bm5pbmcgPyBcIlBhdXNlXCIgOiBcIkNvbnRpbnVlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3RpbWVyLmVsYXBzZWQgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN0b3BDbGlja30+U3RvcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvbWFpbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlVGltZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9