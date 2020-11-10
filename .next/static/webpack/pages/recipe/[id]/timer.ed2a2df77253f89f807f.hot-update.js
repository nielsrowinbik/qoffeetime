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
/* harmony import */ var _hooks_use_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/use-timer */ "./hooks/use-timer.ts");
/* harmony import */ var _utils_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/parser */ "./utils/parser.ts");
/* harmony import */ var _recipies_v60_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../recipies/v60.json */ "./recipies/v60.json");
var _recipies_v60_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../recipies/v60.json */ "./recipies/v60.json", 1);



var _jsxFileName = "/home/niels/dev/nielsrowinbik/brewtime/pages/recipe/[id]/timer.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var RecipeTimer = function RecipeTimer() {
  _s();

  var timer = Object(_hooks_use_timer__WEBPACK_IMPORTED_MODULE_1__["useTimer"])(_recipies_v60_json__WEBPACK_IMPORTED_MODULE_3__.steps);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "total left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: Object(_utils_parser__WEBPACK_IMPORTED_MODULE_2__["parseMillisecondsIntoTimeStamp"])(timer.remaining)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: _recipies_v60_json__WEBPACK_IMPORTED_MODULE_3__.steps.map(function (step, i) {
        var content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
            children: Object(_utils_parser__WEBPACK_IMPORTED_MODULE_2__["parseMillisecondsIntoTimeStamp"])(step.duration * 1000)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: step.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 29
          }, _this)]
        }, void 0, true); // if (timer.currentStepIndex === i)
        //     return (
        //         <li key={i}>
        //             <strong>{content}</strong>
        //         </li>
        //     );


        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: content
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: timer.start,
      children: "Start"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: timer.stop,
      children: "Stop"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: timer.reset,
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(RecipeTimer, "HwFlJAPsY3sp8LUdGVJr45T4B2A=", false, function () {
  return [_hooks_use_timer__WEBPACK_IMPORTED_MODULE_1__["useTimer"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlLy90aW1lci50c3giXSwibmFtZXMiOlsiUmVjaXBlVGltZXIiLCJ0aW1lciIsInVzZVRpbWVyIiwicmVjaXBlIiwic3RlcHMiLCJwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAiLCJyZW1haW5pbmciLCJtYXAiLCJzdGVwIiwiaSIsImNvbnRlbnQiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwic3RhcnQiLCJzdG9wIiwicmVzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLEtBQUssR0FBR0MsaUVBQVEsQ0FBQ0MsK0NBQU0sQ0FBQ0MsS0FBUixDQUF0QjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUEsZ0JBQUtDLG9GQUE4QixDQUFDSixLQUFLLENBQUNLLFNBQVA7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLGVBUUk7QUFBQSxnQkFDS0gsK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhRyxHQUFiLENBQWlCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzNCLFlBQU1DLE9BQU8sZ0JBQ1Q7QUFBQSxrQ0FDSTtBQUFBLHNCQUNLTCxvRkFBOEIsQ0FDM0JHLElBQUksQ0FBQ0csUUFBTCxHQUFnQixJQURXO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQU9JO0FBQUEsc0JBQU9ILElBQUksQ0FBQ0k7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUEsd0JBREosQ0FEMkIsQ0FhM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSw0QkFBTztBQUFBLG9CQUFhRjtBQUFiLFdBQVNELENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNILE9BckJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBZ0NJO0FBQVEsYUFBTyxFQUFFUixLQUFLLENBQUNZLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaENKLGVBaUNJO0FBQVEsYUFBTyxFQUFFWixLQUFLLENBQUNhLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNKLGVBa0NJO0FBQVEsYUFBTyxFQUFFYixLQUFLLENBQUNjLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0NILENBekNEOztHQUFNZixXO1VBQ1lFLHlEOzs7S0FEWkYsVztBQTJDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlL1tpZF0vdGltZXIuZWQyYTJkZjc3MjUzZjg5ZjgwN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRpbWVyIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZS10aW1lclwiO1xuXG5pbXBvcnQgeyBwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGFyc2VyXCI7XG5cbmltcG9ydCByZWNpcGUgZnJvbSBcIi4uLy4uLy4uL3JlY2lwaWVzL3Y2MC5qc29uXCI7XG5cbmNvbnN0IFJlY2lwZVRpbWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gdXNlVGltZXIocmVjaXBlLnN0ZXBzKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dGltZT48L3RpbWU+XG4gICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPnRvdGFsIGxlZnQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMT57cGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wKHRpbWVyLnJlbWFpbmluZyl9PC9oMT5cbiAgICAgICAgICAgIHsvKiA8aDI+PC9oMj4gKi99XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3JlY2lwZS5zdGVwcy5tYXAoKHN0ZXAsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwLmR1cmF0aW9uICogMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N0ZXAuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRpbWVyLmN1cnJlbnRTdGVwSW5kZXggPT09IGkpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8c3Ryb25nPntjb250ZW50fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT57Y29udGVudH08L2xpPjtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RpbWVyLnN0YXJ0fT5TdGFydDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aW1lci5zdG9wfT5TdG9wPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RpbWVyLnJlc2V0fT5SZXNldDwvYnV0dG9uPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZVRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==