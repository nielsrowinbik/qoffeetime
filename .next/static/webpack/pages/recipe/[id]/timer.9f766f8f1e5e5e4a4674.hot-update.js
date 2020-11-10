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

  console.log(timer.remaining, timer.isComplete);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlLy90aW1lci50c3giXSwibmFtZXMiOlsiUmVjaXBlVGltZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidGltZXIiLCJ1c2VUaW1lciIsInJlY2lwZSIsInN0ZXBzIiwib25TdG9wQ2xpY2siLCJjb25maXJtIiwic3RvcCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwicmVtYWluaW5nIiwiaXNDb21wbGV0ZSIsInBhcnNlTWlsbGlzZWNvbmRzSW50b1RpbWVTdGFtcCIsImN1cnJlbnRTdGVwUmVtYWluaW5nIiwiY3VycmVudFN0ZXBJbmRleCIsImRlc2NyaXB0aW9uIiwibWFwIiwic3RlcCIsImkiLCJjb250ZW50IiwiZHVyYXRpb24iLCJlbGFwc2VkIiwic3RhcnQiLCJ0b2dnbGUiLCJpc1J1bm5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURzQixNQUVkQyxFQUZjLEdBRVBGLE1BQU0sQ0FBQ0csS0FGQSxDQUVkRCxFQUZjO0FBSXRCLE1BQU1FLEtBQUssR0FBR0MsaUVBQVEsQ0FBQ0MsK0NBQU0sQ0FBQ0MsS0FBUixDQUF0Qjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUlDLE9BQU8sQ0FBQyxrQ0FBRCxDQUFYLEVBQWlEO0FBQzdDTCxXQUFLLENBQUNNLElBQU47QUFDQVYsWUFBTSxDQUFDVyxJQUFQLG1CQUF1QlQsRUFBdkI7QUFDSDtBQUNKLEdBTEQ7O0FBT0FVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxLQUFLLENBQUNVLFNBQWxCLEVBQTZCVixLQUFLLENBQUNXLFVBQW5DO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDZCQUNJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSTtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxvQkFDS0Msb0ZBQThCLENBQUNaLEtBQUssQ0FBQ1UsU0FBUDtBQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVFJO0FBQUEsa0JBQ0tFLG9GQUE4QixDQUFDWixLQUFLLENBQUNhLG9CQUFQO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixlQVdJO0FBQUEsa0JBQUtYLCtDQUFNLENBQUNDLEtBQVAsQ0FBYUgsS0FBSyxDQUFDYyxnQkFBbkIsRUFBcUNDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSixlQVlJO0FBQUEsa0JBQ0tiLCtDQUFNLENBQUNDLEtBQVAsQ0FBYWEsR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUMzQixjQUFNQyxPQUFPLGdCQUNUO0FBQUEsb0NBQ0k7QUFBQSx3QkFDS1Asb0ZBQThCLENBQzNCSyxJQUFJLENBQUNHLFFBQUwsR0FBZ0IsSUFEVztBQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkosZUFPSTtBQUFBLHdCQUFPSCxJQUFJLENBQUNGO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSjtBQUFBLDBCQURKOztBQVlBLGNBQUlmLEtBQUssQ0FBQ2MsZ0JBQU4sS0FBMkJJLENBQS9CLEVBQ0ksb0JBQ0k7QUFBQSxtQ0FDSTtBQUFBLHdCQUFTQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUFTRCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFNSiw4QkFBTztBQUFBLHNCQUFhQztBQUFiLGFBQVNELENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILFNBckJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpKLEVBb0NLbEIsS0FBSyxDQUFDcUIsT0FBTixLQUFrQixDQUFsQixpQkFDRztBQUFRLGVBQU8sRUFBRXJCLEtBQUssQ0FBQ3NCLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckNSLEVBdUNLdEIsS0FBSyxDQUFDcUIsT0FBTixHQUFnQixDQUFoQixpQkFDRztBQUFRLGVBQU8sRUFBRXJCLEtBQUssQ0FBQ3VCLE1BQXZCO0FBQUEsa0JBQ0t2QixLQUFLLENBQUN3QixTQUFOLEdBQWtCLE9BQWxCLEdBQTRCO0FBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4Q1IsRUE0Q0t4QixLQUFLLENBQUNxQixPQUFOLEdBQWdCLENBQWhCLGlCQUNHO0FBQVEsZUFBTyxFQUFFakIsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5REgsQ0F4RUQ7O0dBQU1ULFc7VUFDYUUscUQsRUFHREkseUQ7OztLQUpaTixXO0FBMEVTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGUvW2lkXS90aW1lci45Zjc2NmY4ZjFlNWU1ZTRhNDY3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IHVzZVRpbWVyIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZS10aW1lclwiO1xuaW1wb3J0IHsgcGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhcnNlclwiO1xuXG5pbXBvcnQgcmVjaXBlIGZyb20gXCIuLi8uLi8uLi9yZWNpcGllcy92NjAuanNvblwiO1xuXG5jb25zdCBSZWNpcGVUaW1lciA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICBjb25zdCB0aW1lciA9IHVzZVRpbWVyKHJlY2lwZS5zdGVwcyk7XG5cbiAgICBjb25zdCBvblN0b3BDbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJEbyB5b3Ugd2FudCB0byBjYW5jZWwgdGhlIHRpbWVyP1wiKSkge1xuICAgICAgICAgICAgdGltZXIuc3RvcCgpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZWNpcGUvJHtpZH1gKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyh0aW1lci5yZW1haW5pbmcsIHRpbWVyLmlzQ29tcGxldGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+YmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wKHRpbWVyLnJlbWFpbmluZyl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj50b3RhbCBsZWZ0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAge3BhcnNlTWlsbGlzZWNvbmRzSW50b1RpbWVTdGFtcCh0aW1lci5jdXJyZW50U3RlcFJlbWFpbmluZyl9XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8aDI+e3JlY2lwZS5zdGVwc1t0aW1lci5jdXJyZW50U3RlcEluZGV4XS5kZXNjcmlwdGlvbn08L2gyPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3JlY2lwZS5zdGVwcy5tYXAoKHN0ZXAsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAuZHVyYXRpb24gKiAxMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N0ZXAuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVyLmN1cnJlbnRTdGVwSW5kZXggPT09IGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntjb250ZW50fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT57Y29udGVudH08L2xpPjtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICB7dGltZXIuZWxhcHNlZCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGltZXIuc3RhcnR9PlN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7dGltZXIuZWxhcHNlZCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RpbWVyLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGltZXIuaXNSdW5uaW5nID8gXCJQYXVzZVwiIDogXCJDb250aW51ZVwifVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHt0aW1lci5lbGFwc2VkID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25TdG9wQ2xpY2t9PlN0b3A8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZVRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==