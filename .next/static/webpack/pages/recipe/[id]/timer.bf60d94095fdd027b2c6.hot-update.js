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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "total left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: Object(_utils_parser__WEBPACK_IMPORTED_MODULE_4__["parseMillisecondsIntoTimeStamp"])(timer.remaining)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: _recipies_v60_json__WEBPACK_IMPORTED_MODULE_5__.steps.map(function (step, i) {
        var content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
            children: Object(_utils_parser__WEBPACK_IMPORTED_MODULE_4__["parseMillisecondsIntoTimeStamp"])(step.duration * 1000)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: step.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
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
          lineNumber: 45,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), timer.elapsed === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: timer.start,
      children: "Start"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }, _this), timer.elapsed > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: timer.toggle,
      children: timer.isRunning ? "Pause" : "Continue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/recipe/".concat(id),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Stop"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlLy90aW1lci50c3giXSwibmFtZXMiOlsiUmVjaXBlVGltZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidGltZXIiLCJ1c2VUaW1lciIsInJlY2lwZSIsInN0ZXBzIiwicGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wIiwicmVtYWluaW5nIiwibWFwIiwic3RlcCIsImkiLCJjb250ZW50IiwiZHVyYXRpb24iLCJkZXNjcmlwdGlvbiIsImVsYXBzZWQiLCJzdGFydCIsInRvZ2dsZSIsImlzUnVubmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHNCLE1BRWRDLEVBRmMsR0FFUEYsTUFBTSxDQUFDRyxLQUZBLENBRWRELEVBRmM7QUFJdEIsTUFBTUUsS0FBSyxHQUFHQyxpRUFBUSxDQUFDQywrQ0FBTSxDQUFDQyxLQUFSLENBQXRCO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBQSxnQkFBS0Msb0ZBQThCLENBQUNKLEtBQUssQ0FBQ0ssU0FBUDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosZUFRSTtBQUFBLGdCQUNLSCwrQ0FBTSxDQUFDQyxLQUFQLENBQWFHLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDM0IsWUFBTUMsT0FBTyxnQkFDVDtBQUFBLGtDQUNJO0FBQUEsc0JBQ0tMLG9GQUE4QixDQUMzQkcsSUFBSSxDQUFDRyxRQUFMLEdBQWdCLElBRFc7QUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBT0k7QUFBQSxzQkFBT0gsSUFBSSxDQUFDSTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQSx3QkFESixDQUQyQixDQWEzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLDRCQUFPO0FBQUEsb0JBQWFGO0FBQWIsV0FBU0QsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0gsT0FyQkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkosRUFnQ0tSLEtBQUssQ0FBQ1ksT0FBTixLQUFrQixDQUFsQixpQkFDRztBQUFRLGFBQU8sRUFBRVosS0FBSyxDQUFDYSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDUixFQW1DS2IsS0FBSyxDQUFDWSxPQUFOLEdBQWdCLENBQWhCLGlCQUNHO0FBQVEsYUFBTyxFQUFFWixLQUFLLENBQUNjLE1BQXZCO0FBQUEsZ0JBQ0tkLEtBQUssQ0FBQ2UsU0FBTixHQUFrQixPQUFsQixHQUE0QjtBQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcENSLGVBd0NJLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxvQkFBYWpCLEVBQWIsQ0FBVjtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQThDSCxDQXBERDs7R0FBTUgsVztVQUNhRSxxRCxFQUdESSx5RDs7O0tBSlpOLFc7QUFzRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZS9baWRdL3RpbWVyLmJmNjBkOTQwOTVmZGQwMjdiMmM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgdXNlVGltZXIgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlLXRpbWVyXCI7XG5pbXBvcnQgeyBwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGFyc2VyXCI7XG5cbmltcG9ydCByZWNpcGUgZnJvbSBcIi4uLy4uLy4uL3JlY2lwaWVzL3Y2MC5qc29uXCI7XG5cbmNvbnN0IFJlY2lwZVRpbWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICAgIGNvbnN0IHRpbWVyID0gdXNlVGltZXIocmVjaXBlLnN0ZXBzKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dGltZT48L3RpbWU+XG4gICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPnRvdGFsIGxlZnQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMT57cGFyc2VNaWxsaXNlY29uZHNJbnRvVGltZVN0YW1wKHRpbWVyLnJlbWFpbmluZyl9PC9oMT5cbiAgICAgICAgICAgIHsvKiA8aDI+PC9oMj4gKi99XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3JlY2lwZS5zdGVwcy5tYXAoKHN0ZXAsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZU1pbGxpc2Vjb25kc0ludG9UaW1lU3RhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwLmR1cmF0aW9uICogMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N0ZXAuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRpbWVyLmN1cnJlbnRTdGVwSW5kZXggPT09IGkpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8c3Ryb25nPntjb250ZW50fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT57Y29udGVudH08L2xpPjtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB7dGltZXIuZWxhcHNlZCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aW1lci5zdGFydH0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7dGltZXIuZWxhcHNlZCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGltZXIudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAge3RpbWVyLmlzUnVubmluZyA/IFwiUGF1c2VcIiA6IFwiQ29udGludWVcIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3JlY2lwZS8ke2lkfWB9PlxuICAgICAgICAgICAgICAgIDxidXR0b24+U3RvcDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZVRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==