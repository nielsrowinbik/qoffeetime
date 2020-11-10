webpackHotUpdate_N_E("pages/recipe/[id]/timer",{

/***/ "./utils/helpers.ts":
/*!**************************!*\
  !*** ./utils/helpers.ts ***!
  \**************************/
/*! exports provided: sum, valuesForKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valuesForKey", function() { return valuesForKey; });
var sum = function sum(arr) {
  return arr.reduce(function (total, item) {
    return total += item;
  }, 0);
};
var valuesForKey = function valuesForKey(arr, key) {
  return arr.map(function (item) {
    return item[key];
  });
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaGVscGVycy50cyJdLCJuYW1lcyI6WyJzdW0iLCJhcnIiLCJyZWR1Y2UiLCJ0b3RhbCIsIml0ZW0iLCJ2YWx1ZXNGb3JLZXkiLCJrZXkiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxHQUFEO0FBQUEsU0FDZkEsR0FBRyxDQUFDQyxNQUFKLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSO0FBQUEsV0FBa0JELEtBQUssSUFBSUMsSUFBM0I7QUFBQSxHQUFYLEVBQTZDLENBQTdDLENBRGU7QUFBQSxDQUFaO0FBR0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0osR0FBRCxFQUFhSyxHQUFiO0FBQUEsU0FDeEJMLEdBQUcsQ0FBQ00sR0FBSixDQUFRLFVBQUNILElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNFLEdBQUQsQ0FBZDtBQUFBLEdBQVIsQ0FEd0I7QUFBQSxDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGUvW2lkXS90aW1lci45ZWJkOGYxODFiNzgyYTRhMWFiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHN1bSA9IChhcnI6IG51bWJlcltdKSA9PlxuICAgIGFyci5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiAodG90YWwgKz0gaXRlbSksIDApO1xuXG5leHBvcnQgY29uc3QgdmFsdWVzRm9yS2V5ID0gKGFycjogYW55W10sIGtleTogc3RyaW5nKSA9PlxuICAgIGFyci5tYXAoKGl0ZW0pID0+IGl0ZW1ba2V5XSk7XG4iXSwic291cmNlUm9vdCI6IiJ9