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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
          children: Object(_utils_parser__WEBPACK_IMPORTED_MODULE_4__["parseMillisecondsIntoTimeStamp"])(timer.remaining)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "total left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: _recipies_v60_json__WEBPACK_IMPORTED_MODULE_5__.steps.map(function (step, i) {
          var content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
              children: Object(_utils_parser__WEBPACK_IMPORTED_MODULE_4__["parseMillisecondsIntoTimeStamp"])(step.duration * 1000)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: step.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 33
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
            lineNumber: 60,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), timer.elapsed === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: timer.start,
        children: "Start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, _this), timer.elapsed > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: timer.toggle,
        children: timer.isRunning ? "Pause" : "Continue"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }, _this), timer.elapsed > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onStopClick,
        children: "Stop"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlLy90aW1lci50c3giXSwibmFtZXMiOlsiUmVjaXBlVGltZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidGltZXIiLCJ1c2VUaW1lciIsInJlY2lwZSIsInN0ZXBzIiwib25TdG9wQ2xpY2siLCJjb25maXJtIiwic3RvcCIsInB1c2giLCJwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAiLCJyZW1haW5pbmciLCJtYXAiLCJzdGVwIiwiaSIsImNvbnRlbnQiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwiZWxhcHNlZCIsInN0YXJ0IiwidG9nZ2xlIiwiaXNSdW5uaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEc0IsTUFFZEMsRUFGYyxHQUVQRixNQUFNLENBQUNHLEtBRkEsQ0FFZEQsRUFGYztBQUl0QixNQUFNRSxLQUFLLEdBQUdDLGlFQUFRLENBQUNDLCtDQUFNLENBQUNDLEtBQVIsQ0FBdEI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFJQyxPQUFPLENBQUMsa0NBQUQsQ0FBWCxFQUFpRDtBQUM3Q0wsV0FBSyxDQUFDTSxJQUFOO0FBQ0FWLFlBQU0sQ0FBQ1csSUFBUCxtQkFBdUJULEVBQXZCO0FBQ0g7QUFDSixHQUxEOztBQU9BLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBQSw4QkFDSTtBQUFBLGdDQUNJO0FBQUEsb0JBQ0tVLG9GQUE4QixDQUFDUixLQUFLLENBQUNTLFNBQVA7QUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFVSTtBQUFBLGtCQUNLUCwrQ0FBTSxDQUFDQyxLQUFQLENBQWFPLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDM0IsY0FBTUMsT0FBTyxnQkFDVDtBQUFBLG9DQUNJO0FBQUEsd0JBQ0tMLG9GQUE4QixDQUMzQkcsSUFBSSxDQUFDRyxRQUFMLEdBQWdCLElBRFc7QUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KLGVBT0k7QUFBQSx3QkFBT0gsSUFBSSxDQUFDSTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEo7QUFBQSwwQkFESixDQUQyQixDQWEzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLDhCQUFPO0FBQUEsc0JBQWFGO0FBQWIsYUFBU0QsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsU0FyQkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkosRUFrQ0taLEtBQUssQ0FBQ2dCLE9BQU4sS0FBa0IsQ0FBbEIsaUJBQ0c7QUFBUSxlQUFPLEVBQUVoQixLQUFLLENBQUNpQixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DUixFQXFDS2pCLEtBQUssQ0FBQ2dCLE9BQU4sR0FBZ0IsQ0FBaEIsaUJBQ0c7QUFBUSxlQUFPLEVBQUVoQixLQUFLLENBQUNrQixNQUF2QjtBQUFBLGtCQUNLbEIsS0FBSyxDQUFDbUIsU0FBTixHQUFrQixPQUFsQixHQUE0QjtBQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdENSLEVBMENLbkIsS0FBSyxDQUFDZ0IsT0FBTixHQUFnQixDQUFoQixpQkFDRztBQUFRLGVBQU8sRUFBRVosV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1REgsQ0FwRUQ7O0dBQU1ULFc7VUFDYUUscUQsRUFHREkseUQ7OztLQUpaTixXO0FBc0VTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGUvW2lkXS90aW1lci4zNDViMTFlOGYyMDM0ZjQ1NzU2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IHVzZVRpbWVyIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZS10aW1lclwiO1xuaW1wb3J0IHsgcGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhcnNlclwiO1xuXG5pbXBvcnQgcmVjaXBlIGZyb20gXCIuLi8uLi8uLi9yZWNpcGllcy92NjAuanNvblwiO1xuXG5jb25zdCBSZWNpcGVUaW1lciA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICBjb25zdCB0aW1lciA9IHVzZVRpbWVyKHJlY2lwZS5zdGVwcyk7XG5cbiAgICBjb25zdCBvblN0b3BDbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJEbyB5b3Ugd2FudCB0byBjYW5jZWwgdGhlIHRpbWVyP1wiKSkge1xuICAgICAgICAgICAgdGltZXIuc3RvcCgpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZWNpcGUvJHtpZH1gKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5iYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGltZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAodGltZXIucmVtYWluaW5nKX1cbiAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnRvdGFsIGxlZnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxoMT48L2gxPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPGgyPjwvaDI+ICovfVxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3JlY2lwZS5zdGVwcy5tYXAoKHN0ZXAsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAuZHVyYXRpb24gKiAxMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N0ZXAuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRpbWVyLmN1cnJlbnRTdGVwSW5kZXggPT09IGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8c3Ryb25nPntjb250ZW50fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT57Y29udGVudH08L2xpPjtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICB7dGltZXIuZWxhcHNlZCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGltZXIuc3RhcnR9PlN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7dGltZXIuZWxhcHNlZCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RpbWVyLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGltZXIuaXNSdW5uaW5nID8gXCJQYXVzZVwiIDogXCJDb250aW51ZVwifVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHt0aW1lci5lbGFwc2VkID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25TdG9wQ2xpY2t9PlN0b3A8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZVRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==