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
    }, _this), timer.elapsed === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: timer.start,
      children: "Start"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }, _this), timer.elapsed > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: timer.toggle,
      children: timer.isRunning ? "Pause" : "Continue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }, _this), timer.elapsed > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: timer.reset,
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 35
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlLy90aW1lci50c3giXSwibmFtZXMiOlsiUmVjaXBlVGltZXIiLCJ0aW1lciIsInVzZVRpbWVyIiwicmVjaXBlIiwic3RlcHMiLCJwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAiLCJyZW1haW5pbmciLCJtYXAiLCJzdGVwIiwiaSIsImNvbnRlbnQiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwiZWxhcHNlZCIsInN0YXJ0IiwidG9nZ2xlIiwiaXNSdW5uaW5nIiwicmVzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLEtBQUssR0FBR0MsaUVBQVEsQ0FBQ0MsK0NBQU0sQ0FBQ0MsS0FBUixDQUF0QjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUEsZ0JBQUtDLG9GQUE4QixDQUFDSixLQUFLLENBQUNLLFNBQVA7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLGVBUUk7QUFBQSxnQkFDS0gsK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhRyxHQUFiLENBQWlCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzNCLFlBQU1DLE9BQU8sZ0JBQ1Q7QUFBQSxrQ0FDSTtBQUFBLHNCQUNLTCxvRkFBOEIsQ0FDM0JHLElBQUksQ0FBQ0csUUFBTCxHQUFnQixJQURXO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQU9JO0FBQUEsc0JBQU9ILElBQUksQ0FBQ0k7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUEsd0JBREosQ0FEMkIsQ0FhM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSw0QkFBTztBQUFBLG9CQUFhRjtBQUFiLFdBQVNELENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNILE9BckJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLEVBZ0NLUixLQUFLLENBQUNZLE9BQU4sS0FBa0IsQ0FBbEIsaUJBQ0c7QUFBUSxhQUFPLEVBQUVaLEtBQUssQ0FBQ2EsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ1IsRUFtQ0tiLEtBQUssQ0FBQ1ksT0FBTixHQUFnQixDQUFoQixpQkFDRztBQUFRLGFBQU8sRUFBRVosS0FBSyxDQUFDYyxNQUF2QjtBQUFBLGdCQUNLZCxLQUFLLENBQUNlLFNBQU4sR0FBa0IsT0FBbEIsR0FBNEI7QUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBDUixFQXdDS2YsS0FBSyxDQUFDWSxPQUFOLEdBQWdCLENBQWhCLGlCQUFxQjtBQUFRLGFBQU8sRUFBRVosS0FBSyxDQUFDZ0IsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNENILENBL0NEOztHQUFNakIsVztVQUNZRSx5RDs7O0tBRFpGLFc7QUFpRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZS9baWRdL3RpbWVyLjk1ZmRlNGM2MTdlZWZkNjgyNDk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUaW1lciB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2UtdGltZXJcIjtcblxuaW1wb3J0IHsgcGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhcnNlclwiO1xuXG5pbXBvcnQgcmVjaXBlIGZyb20gXCIuLi8uLi8uLi9yZWNpcGllcy92NjAuanNvblwiO1xuXG5jb25zdCBSZWNpcGVUaW1lciA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHVzZVRpbWVyKHJlY2lwZS5zdGVwcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHRpbWU+PC90aW1lPlxuICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj50b3RhbCBsZWZ0PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDE+e3BhcnNlTWlsbGlzZWNvbmRzSW50b1RpbWVTdGFtcCh0aW1lci5yZW1haW5pbmcpfTwvaDE+XG4gICAgICAgICAgICB7LyogPGgyPjwvaDI+ICovfVxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtyZWNpcGUuc3RlcHMubWFwKChzdGVwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcC5kdXJhdGlvbiAqIDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdGVwLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aW1lci5jdXJyZW50U3RlcEluZGV4ID09PSBpKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPHN0cm9uZz57Y29udGVudH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+e2NvbnRlbnR9PC9saT47XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAge3RpbWVyLmVsYXBzZWQgPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGltZXIuc3RhcnR9PlN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RpbWVyLmVsYXBzZWQgPiAwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RpbWVyLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aW1lci5pc1J1bm5pbmcgPyBcIlBhdXNlXCIgOiBcIkNvbnRpbnVlXCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RpbWVyLmVsYXBzZWQgPiAwICYmIDxidXR0b24gb25DbGljaz17dGltZXIucmVzZXR9PlJlc2V0PC9idXR0b24+fVxuICAgICAgICA8L2FydGljbGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZVRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==