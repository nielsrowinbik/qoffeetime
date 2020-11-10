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

  console.log(timer.currentStepIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlLy90aW1lci50c3giXSwibmFtZXMiOlsiUmVjaXBlVGltZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidGltZXIiLCJ1c2VUaW1lciIsInJlY2lwZSIsInN0ZXBzIiwib25TdG9wQ2xpY2siLCJjb25maXJtIiwic3RvcCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFN0ZXBJbmRleCIsInBhcnNlTWlsbGlzZWNvbmRzSW50b1RpbWVTdGFtcCIsInJlbWFpbmluZyIsImN1cnJlbnRTdGVwUmVtYWluaW5nIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJzdGVwIiwiaSIsImNvbnRlbnQiLCJkdXJhdGlvbiIsImVsYXBzZWQiLCJzdGFydCIsInRvZ2dsZSIsImlzUnVubmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHNCLE1BRWRDLEVBRmMsR0FFUEYsTUFBTSxDQUFDRyxLQUZBLENBRWRELEVBRmM7QUFJdEIsTUFBTUUsS0FBSyxHQUFHQyxpRUFBUSxDQUFDQywrQ0FBTSxDQUFDQyxLQUFSLENBQXRCOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBSUMsT0FBTyxDQUFDLGtDQUFELENBQVgsRUFBaUQ7QUFDN0NMLFdBQUssQ0FBQ00sSUFBTjtBQUNBVixZQUFNLENBQUNXLElBQVAsbUJBQXVCVCxFQUF2QjtBQUNIO0FBQ0osR0FMRDs7QUFPQVUsU0FBTyxDQUFDQyxHQUFSLENBQVlULEtBQUssQ0FBQ1UsZ0JBQWxCO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDZCQUNJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSTtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxvQkFDS0Msb0ZBQThCLENBQUNYLEtBQUssQ0FBQ1ksU0FBUDtBQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVFJO0FBQUEsa0JBQ0tELG9GQUE4QixDQUFDWCxLQUFLLENBQUNhLG9CQUFQO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixlQVdJO0FBQUEsa0JBQUtYLCtDQUFNLENBQUNDLEtBQVAsQ0FBYUgsS0FBSyxDQUFDVSxnQkFBbkIsRUFBcUNJO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSixlQVlJO0FBQUEsa0JBQ0taLCtDQUFNLENBQUNDLEtBQVAsQ0FBYVksR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUMzQixjQUFNQyxPQUFPLGdCQUNUO0FBQUEsb0NBQ0k7QUFBQSx3QkFDS1Asb0ZBQThCLENBQzNCSyxJQUFJLENBQUNHLFFBQUwsR0FBZ0IsSUFEVztBQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkosZUFPSTtBQUFBLHdCQUFPSCxJQUFJLENBQUNGO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSjtBQUFBLDBCQURKOztBQVlBLGNBQUlkLEtBQUssQ0FBQ1UsZ0JBQU4sS0FBMkJPLENBQS9CLEVBQ0ksb0JBQ0k7QUFBQSxtQ0FDSTtBQUFBLHdCQUFTQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUFTRCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFNSiw4QkFBTztBQUFBLHNCQUFhQztBQUFiLGFBQVNELENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILFNBckJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpKLEVBb0NLakIsS0FBSyxDQUFDb0IsT0FBTixLQUFrQixDQUFsQixpQkFDRztBQUFRLGVBQU8sRUFBRXBCLEtBQUssQ0FBQ3FCLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckNSLEVBdUNLckIsS0FBSyxDQUFDb0IsT0FBTixHQUFnQixDQUFoQixpQkFDRztBQUFRLGVBQU8sRUFBRXBCLEtBQUssQ0FBQ3NCLE1BQXZCO0FBQUEsa0JBQ0t0QixLQUFLLENBQUN1QixTQUFOLEdBQWtCLE9BQWxCLEdBQTRCO0FBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4Q1IsRUE0Q0t2QixLQUFLLENBQUNvQixPQUFOLEdBQWdCLENBQWhCLGlCQUNHO0FBQVEsZUFBTyxFQUFFaEIsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5REgsQ0F4RUQ7O0dBQU1ULFc7VUFDYUUscUQsRUFHREkseUQ7OztLQUpaTixXO0FBMEVTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGUvW2lkXS90aW1lci4zOThiMGRhZmM3ZTUwYTVkYWRiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IHVzZVRpbWVyIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZS10aW1lclwiO1xuaW1wb3J0IHsgcGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhcnNlclwiO1xuXG5pbXBvcnQgcmVjaXBlIGZyb20gXCIuLi8uLi8uLi9yZWNpcGllcy92NjAuanNvblwiO1xuXG5jb25zdCBSZWNpcGVUaW1lciA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICBjb25zdCB0aW1lciA9IHVzZVRpbWVyKHJlY2lwZS5zdGVwcyk7XG5cbiAgICBjb25zdCBvblN0b3BDbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJEbyB5b3Ugd2FudCB0byBjYW5jZWwgdGhlIHRpbWVyP1wiKSkge1xuICAgICAgICAgICAgdGltZXIuc3RvcCgpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZWNpcGUvJHtpZH1gKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyh0aW1lci5jdXJyZW50U3RlcEluZGV4KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPmJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlTWlsbGlzZWNvbmRzSW50b1RpbWVTdGFtcCh0aW1lci5yZW1haW5pbmcpfVxuICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+dG90YWwgbGVmdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgIHtwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAodGltZXIuY3VycmVudFN0ZXBSZW1haW5pbmcpfVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPGgyPntyZWNpcGUuc3RlcHNbdGltZXIuY3VycmVudFN0ZXBJbmRleF0uZGVzY3JpcHRpb259PC9oMj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtyZWNpcGUuc3RlcHMubWFwKChzdGVwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlTWlsbGlzZWNvbmRzSW50b1RpbWVTdGFtcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwLmR1cmF0aW9uICogMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdGVwLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lci5jdXJyZW50U3RlcEluZGV4ID09PSBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57Y29udGVudH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+e2NvbnRlbnR9PC9saT47XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAge3RpbWVyLmVsYXBzZWQgPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RpbWVyLnN0YXJ0fT5TdGFydDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3RpbWVyLmVsYXBzZWQgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aW1lci50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RpbWVyLmlzUnVubmluZyA/IFwiUGF1c2VcIiA6IFwiQ29udGludWVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7dGltZXIuZWxhcHNlZCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3RvcENsaWNrfT5TdG9wPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVUaW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=