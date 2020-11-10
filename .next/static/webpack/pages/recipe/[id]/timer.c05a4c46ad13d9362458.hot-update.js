webpackHotUpdate_N_E("pages/recipe/[id]/timer",{

/***/ "./hooks/use-timer.ts":
/*!****************************!*\
  !*** ./hooks/use-timer.ts ***!
  \****************************/
/*! exports provided: useTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTimer", function() { return useTimer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-interval */ "./hooks/use-interval.ts");
/* harmony import */ var _hooks_use_previous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-previous */ "./hooks/use-previous.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.ts");


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var useTimer = function useTimer(userSteps) {
  _s();

  // // Add a "start" field to every step that was passed in so we
  // // can determine which step is the current:
  var steps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return userSteps.map(function (step, i) {
      return _objectSpread(_objectSpread({}, step), {}, {
        // We convert step duration, which is configured in seconds,
        // to milliseconds here. This overwrites the original duration
        // value!
        duration: step.duration * 1000,
        // The start is determined by the sum of all durations of
        // the previous steps. Once these durations have passed,
        // the current step is active. Finally, subtract 1000 milliseconds
        // to always start a round "early".
        start: userSteps.slice(0, i).reduce(function (total, _ref) {
          var duration = _ref.duration;
          return total + duration * 1000;
        }, 0) - 1000
      });
    });
  }, [userSteps.length]); // Store whether the timer is running in state:

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isRunning = _useState[0],
      setIsRunning = _useState[1]; // Store both current and previous tick timestamps so we can
  // compute the difference between them:


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentTick = _useState2[0],
      setCurrentTick = _useState2[1];

  var previousTick = Object(_hooks_use_previous__WEBPACK_IMPORTED_MODULE_3__["usePrevious"])(currentTick); // Store total elapsed time in state:

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      elapsed = _useState3[0],
      setElapsed = _useState3[1]; // Compute the total time needed to complete this timer:


  var totalTime = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["sum"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["valuesForKey"])(userSteps, "duration")) * 1000;
  }, [userSteps.length]); // Compute the remaining time:

  var remaining = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Math.max(totalTime - elapsed, 0);
  }, [elapsed]); // // Determine whether the timer is complete:

  var isComplete = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return remaining === 0;
  }, [remaining]); // // Compute the current step's index:

  var currentStepIndex = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    // find the index of the first step that we find of which we have not yet
    // passed the start moment:
    var index = steps.findIndex(function (_ref2) {
      var start = _ref2.start;
      return elapsed < start;
    }); // If found, the current step is the step before the one we found.
    // If not found, we're on the last step.

    return (index === -1 ? steps.length : index) - 1;
  }, [elapsed]); // // Compute how much time is remaining in the current step

  var currentStepRemaining = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    // Get the sum of durations of all previous steps (excluding current):
    var totalPreviousSteps = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["sum"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["valuesForKey"])(steps.slice(0, currentStepIndex), "duration")); // Compute the progress within the current step:

    var progressCurrentStep = elapsed - totalPreviousSteps; // Subtract the progress within this step from the total duration:

    return steps[currentStepIndex].duration - progressCurrentStep;
  }, [currentStepIndex, elapsed]); // Every tick, update the current tick in state:

  var tick = function tick() {
    return setCurrentTick(Date.now());
  }; // Tick every 100 millisecons when timer is running:


  Object(_hooks_use_interval__WEBPACK_IMPORTED_MODULE_2__["useInterval"])(tick, isRunning && !isComplete ? 100 : null); // Update the total elapsed time by adding the difference
  // between the current and the previous tick to the previous total:

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Don't update if we're not running:
    if (!isRunning) return; // Don't update if the previous tick was 0:

    if (!previousTick || previousTick === 0) return;
    setElapsed(function (elapsed) {
      return elapsed + (currentTick - previousTick);
    });
  }, [currentTick]); // Expose a method to reset the timer:

  var reset = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIsRunning(false);
    setElapsed(0);
    setCurrentTick(0);
  }, []); // Expose a method to start the timer:

  var start = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setCurrentTick(Date.now());
    setIsRunning(true);
  }, []); // Expose a method to stop (pause) the timer:

  var stop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIsRunning(false); // FIXME: this fixes pause functionality, but we don't count the time between the last tick and us pausing the timer

    setCurrentTick(0);
  }, []); // Expose a method to toggle the timer:

  var toggle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (isRunning) return stop();
    return start();
  }, [isRunning]);
  return {
    currentStepIndex: currentStepIndex,
    currentStepRemaining: currentStepRemaining,
    elapsed: elapsed,
    isComplete: isComplete,
    isRunning: isRunning,
    remaining: remaining,
    reset: reset,
    start: start,
    stop: stop,
    toggle: toggle
  };
};

_s(useTimer, "BGqtAGUMXs+yNAH84oP19zy1tUw=", false, function () {
  return [_hooks_use_previous__WEBPACK_IMPORTED_MODULE_3__["usePrevious"], _hooks_use_interval__WEBPACK_IMPORTED_MODULE_2__["useInterval"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXRpbWVyLnRzIl0sIm5hbWVzIjpbInVzZVRpbWVyIiwidXNlclN0ZXBzIiwic3RlcHMiLCJ1c2VNZW1vIiwibWFwIiwic3RlcCIsImkiLCJkdXJhdGlvbiIsInN0YXJ0Iiwic2xpY2UiLCJyZWR1Y2UiLCJ0b3RhbCIsImxlbmd0aCIsInVzZVN0YXRlIiwiaXNSdW5uaW5nIiwic2V0SXNSdW5uaW5nIiwiY3VycmVudFRpY2siLCJzZXRDdXJyZW50VGljayIsInByZXZpb3VzVGljayIsInVzZVByZXZpb3VzIiwiZWxhcHNlZCIsInNldEVsYXBzZWQiLCJ0b3RhbFRpbWUiLCJzdW0iLCJ2YWx1ZXNGb3JLZXkiLCJyZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaXNDb21wbGV0ZSIsImN1cnJlbnRTdGVwSW5kZXgiLCJpbmRleCIsImZpbmRJbmRleCIsImN1cnJlbnRTdGVwUmVtYWluaW5nIiwidG90YWxQcmV2aW91c1N0ZXBzIiwicHJvZ3Jlc3NDdXJyZW50U3RlcCIsInRpY2siLCJEYXRlIiwibm93IiwidXNlSW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJyZXNldCIsInVzZUNhbGxiYWNrIiwic3RvcCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQU9PLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFNBQUQsRUFBdUI7QUFBQTs7QUFDM0M7QUFDQTtBQUNBLE1BQU1DLEtBQUssR0FBR0MscURBQU8sQ0FDakI7QUFBQSxXQUNJRixTQUFTLENBQUNHLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSw2Q0FFUEQsSUFGTztBQUlWO0FBQ0E7QUFDQTtBQUNBRSxnQkFBUSxFQUFFRixJQUFJLENBQUNFLFFBQUwsR0FBZ0IsSUFQaEI7QUFTVjtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxhQUFLLEVBQ0RQLFNBQVMsQ0FD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ZSxPQUFPNEIsSUFBSSxFQUFYO0FBQ2YsV0FBT2xDLEtBQUssRUFBWjtBQUNILEdBSHlCLEVBR3ZCLENBQUNNLFNBQUQsQ0FIdUIsQ0FBMUI7QUFLQSxTQUFPO0FBQ0hlLG9CQUFnQixFQUFoQkEsZ0JBREc7QUFFSEcsd0JBQW9CLEVBQXBCQSxvQkFGRztBQUdIWixXQUFPLEVBQVBBLE9BSEc7QUFJSFEsY0FBVSxFQUFWQSxVQUpHO0FBS0hkLGFBQVMsRUFBVEEsU0FMRztBQU1IVyxhQUFTLEVBQVRBLFNBTkc7QUFPSGUsU0FBSyxFQUFMQSxLQVBHO0FBUUhoQyxTQUFLLEVBQUxBLEtBUkc7QUFTSGtDLFFBQUksRUFBSkEsSUFURztBQVVIQyxVQUFNLEVBQU5BO0FBVkcsR0FBUDtBQVlILENBdElNOztHQUFNM0MsUTtVQW1DWW1CLCtELEVBK0NyQm1CLCtEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZS9baWRdL3RpbWVyLmMwNWE0YzQ2YWQxM2Q5MzYyNDU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VJbnRlcnZhbCB9IGZyb20gXCIuLi9ob29rcy91c2UtaW50ZXJ2YWxcIjtcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSBcIi4uL2hvb2tzL3VzZS1wcmV2aW91c1wiO1xuaW1wb3J0IHsgc3VtLCB2YWx1ZXNGb3JLZXkgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyc1wiO1xuXG50eXBlIFN0ZXAgPSB7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVRpbWVyID0gKHVzZXJTdGVwczogU3RlcFtdKSA9PiB7XG4gICAgLy8gLy8gQWRkIGEgXCJzdGFydFwiIGZpZWxkIHRvIGV2ZXJ5IHN0ZXAgdGhhdCB3YXMgcGFzc2VkIGluIHNvIHdlXG4gICAgLy8gLy8gY2FuIGRldGVybWluZSB3aGljaCBzdGVwIGlzIHRoZSBjdXJyZW50OlxuICAgIGNvbnN0IHN0ZXBzID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICAgIHVzZXJTdGVwcy5tYXAoKHN0ZXAsIGkpID0+ICh7XG4gICAgICAgICAgICAgICAgLy8gV2UgY29weSB0aGUgb3JpZ2luYWwgc3RlcCBhcyBub3QgdG8gbG9zZSBhbnkgbmZvcm1hdGlvbi5cbiAgICAgICAgICAgICAgICAuLi5zdGVwLFxuXG4gICAgICAgICAgICAgICAgLy8gV2UgY29udmVydCBzdGVwIGR1cmF0aW9uLCB3aGljaCBpcyBjb25maWd1cmVkIGluIHNlY29uZHMsXG4gICAgICAgICAgICAgICAgLy8gdG8gbWlsbGlzZWNvbmRzIGhlcmUuIFRoaXMgb3ZlcndyaXRlcyB0aGUgb3JpZ2luYWwgZHVyYXRpb25cbiAgICAgICAgICAgICAgICAvLyB2YWx1ZSFcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogc3RlcC5kdXJhdGlvbiAqIDEwMDAsXG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgc3RhcnQgaXMgZGV0ZXJtaW5lZCBieSB0aGUgc3VtIG9mIGFsbCBkdXJhdGlvbnMgb2ZcbiAgICAgICAgICAgICAgICAvLyB0aGUgcHJldmlvdXMgc3RlcHMuIE9uY2UgdGhlc2UgZHVyYXRpb25zIGhhdmUgcGFzc2VkLFxuICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IHN0ZXAgaXMgYWN0aXZlLiBGaW5hbGx5LCBzdWJ0cmFjdCAxMDAwIG1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgICAgIC8vIHRvIGFsd2F5cyBzdGFydCBhIHJvdW5kIFwiZWFybHlcIi5cbiAgICAgICAgICAgICAgICBzdGFydDpcbiAgICAgICAgICAgICAgICAgICAgdXNlclN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRvdGFsLCB7IGR1cmF0aW9uIH0pID0+IHRvdGFsICsgZHVyYXRpb24gKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICkgLSAxMDAwLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICBbdXNlclN0ZXBzLmxlbmd0aF1cbiAgICApO1xuXG4gICAgLy8gU3RvcmUgd2hldGhlciB0aGUgdGltZXIgaXMgcnVubmluZyBpbiBzdGF0ZTpcbiAgICBjb25zdCBbaXNSdW5uaW5nLCBzZXRJc1J1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gU3RvcmUgYm90aCBjdXJyZW50IGFuZCBwcmV2aW91cyB0aWNrIHRpbWVzdGFtcHMgc28gd2UgY2FuXG4gICAgLy8gY29tcHV0ZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZW06XG4gICAgY29uc3QgW2N1cnJlbnRUaWNrLCBzZXRDdXJyZW50VGlja10gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBwcmV2aW91c1RpY2sgPSB1c2VQcmV2aW91cyhjdXJyZW50VGljayk7XG5cbiAgICAvLyBTdG9yZSB0b3RhbCBlbGFwc2VkIHRpbWUgaW4gc3RhdGU6XG4gICAgY29uc3QgW2VsYXBzZWQsIHNldEVsYXBzZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSB0b3RhbCB0aW1lIG5lZWRlZCB0byBjb21wbGV0ZSB0aGlzIHRpbWVyOlxuICAgIGNvbnN0IHRvdGFsVGltZSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IHN1bSh2YWx1ZXNGb3JLZXkodXNlclN0ZXBzLCBcImR1cmF0aW9uXCIpKSAqIDEwMDAsXG4gICAgICAgIFt1c2VyU3RlcHMubGVuZ3RoXVxuICAgICk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSByZW1haW5pbmcgdGltZTpcbiAgICBjb25zdCByZW1haW5pbmcgPSB1c2VNZW1vKCgpID0+IE1hdGgubWF4KHRvdGFsVGltZSAtIGVsYXBzZWQsIDApLCBbXG4gICAgICAgIGVsYXBzZWQsXG4gICAgXSk7XG5cbiAgICAvLyAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgdGltZXIgaXMgY29tcGxldGU6XG4gICAgY29uc3QgaXNDb21wbGV0ZSA9IHVzZU1lbW8oKCkgPT4gcmVtYWluaW5nID09PSAwLCBbcmVtYWluaW5nXSk7XG5cbiAgICAvLyAvLyBDb21wdXRlIHRoZSBjdXJyZW50IHN0ZXAncyBpbmRleDpcbiAgICBjb25zdCBjdXJyZW50U3RlcEluZGV4ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIC8vIGZpbmQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBzdGVwIHRoYXQgd2UgZmluZCBvZiB3aGljaCB3ZSBoYXZlIG5vdCB5ZXRcbiAgICAgICAgLy8gcGFzc2VkIHRoZSBzdGFydCBtb21lbnQ6XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc3RlcHMuZmluZEluZGV4KCh7IHN0YXJ0IH0pID0+IGVsYXBzZWQgPCBzdGFydCk7XG5cbiAgICAgICAgLy8gSWYgZm91bmQsIHRoZSBjdXJyZW50IHN0ZXAgaXMgdGhlIHN0ZXAgYmVmb3JlIHRoZSBvbmUgd2UgZm91bmQuXG4gICAgICAgIC8vIElmIG5vdCBmb3VuZCwgd2UncmUgb24gdGhlIGxhc3Qgc3RlcC5cbiAgICAgICAgcmV0dXJuIChpbmRleCA9PT0gLTEgPyBzdGVwcy5sZW5ndGggOiBpbmRleCkgLSAxO1xuICAgIH0sIFtlbGFwc2VkXSk7XG5cbiAgICAvLyAvLyBDb21wdXRlIGhvdyBtdWNoIHRpbWUgaXMgcmVtYWluaW5nIGluIHRoZSBjdXJyZW50IHN0ZXBcbiAgICBjb25zdCBjdXJyZW50U3RlcFJlbWFpbmluZyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAvLyBHZXQgdGhlIHN1bSBvZiBkdXJhdGlvbnMgb2YgYWxsIHByZXZpb3VzIHN0ZXBzIChleGNsdWRpbmcgY3VycmVudCk6XG4gICAgICAgIGNvbnN0IHRvdGFsUHJldmlvdXNTdGVwcyA9IHN1bShcbiAgICAgICAgICAgIHZhbHVlc0ZvcktleShzdGVwcy5zbGljZSgwLCBjdXJyZW50U3RlcEluZGV4KSwgXCJkdXJhdGlvblwiKVxuICAgICAgICApO1xuICAgICAgICAvLyBDb21wdXRlIHRoZSBwcm9ncmVzcyB3aXRoaW4gdGhlIGN1cnJlbnQgc3RlcDpcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NDdXJyZW50U3RlcCA9IGVsYXBzZWQgLSB0b3RhbFByZXZpb3VzU3RlcHM7XG5cbiAgICAgICAgLy8gU3VidHJhY3QgdGhlIHByb2dyZXNzIHdpdGhpbiB0aGlzIHN0ZXAgZnJvbSB0aGUgdG90YWwgZHVyYXRpb246XG4gICAgICAgIHJldHVybiBzdGVwc1tjdXJyZW50U3RlcEluZGV4XS5kdXJhdGlvbiAtIHByb2dyZXNzQ3VycmVudFN0ZXA7XG4gICAgfSwgW2N1cnJlbnRTdGVwSW5kZXgsIGVsYXBzZWRdKTtcblxuICAgIC8vIEV2ZXJ5IHRpY2ssIHVwZGF0ZSB0aGUgY3VycmVudCB0aWNrIGluIHN0YXRlOlxuICAgIGNvbnN0IHRpY2sgPSAoKSA9PiBzZXRDdXJyZW50VGljayhEYXRlLm5vdygpKTtcblxuICAgIC8vIFRpY2sgZXZlcnkgMTAwIG1pbGxpc2Vjb25zIHdoZW4gdGltZXIgaXMgcnVubmluZzpcbiAgICB1c2VJbnRlcnZhbCh0aWNrLCBpc1J1bm5pbmcgJiYgIWlzQ29tcGxldGUgPyAxMDAgOiBudWxsKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgdG90YWwgZWxhcHNlZCB0aW1lIGJ5IGFkZGluZyB0aGUgZGlmZmVyZW5jZVxuICAgIC8vIGJldHdlZW4gdGhlIGN1cnJlbnQgYW5kIHRoZSBwcmV2aW91cyB0aWNrIHRvIHRoZSBwcmV2aW91cyB0b3RhbDpcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBEb24ndCB1cGRhdGUgaWYgd2UncmUgbm90IHJ1bm5pbmc6XG4gICAgICAgIGlmICghaXNSdW5uaW5nKSByZXR1cm47XG5cbiAgICAgICAgLy8gRG9uJ3QgdXBkYXRlIGlmIHRoZSBwcmV2aW91cyB0aWNrIHdhcyAwOlxuICAgICAgICBpZiAoIXByZXZpb3VzVGljayB8fCBwcmV2aW91c1RpY2sgPT09IDApIHJldHVybjtcblxuICAgICAgICBzZXRFbGFwc2VkKChlbGFwc2VkKSA9PiBlbGFwc2VkICsgKGN1cnJlbnRUaWNrIC0gcHJldmlvdXNUaWNrKSk7XG4gICAgfSwgW2N1cnJlbnRUaWNrXSk7XG5cbiAgICAvLyBFeHBvc2UgYSBtZXRob2QgdG8gcmVzZXQgdGhlIHRpbWVyOlxuICAgIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xuICAgICAgICBzZXRFbGFwc2VkKDApO1xuICAgICAgICBzZXRDdXJyZW50VGljaygwKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBFeHBvc2UgYSBtZXRob2QgdG8gc3RhcnQgdGhlIHRpbWVyOlxuICAgIGNvbnN0IHN0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50VGljayhEYXRlLm5vdygpKTtcbiAgICAgICAgc2V0SXNSdW5uaW5nKHRydWUpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byBzdG9wIChwYXVzZSkgdGhlIHRpbWVyOlxuICAgIGNvbnN0IHN0b3AgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgIC8vIEZJWE1FOiB0aGlzIGZpeGVzIHBhdXNlIGZ1bmN0aW9uYWxpdHksIGJ1dCB3ZSBkb24ndCBjb3VudCB0aGUgdGltZSBiZXR3ZWVuIHRoZSBsYXN0IHRpY2sgYW5kIHVzIHBhdXNpbmcgdGhlIHRpbWVyXG4gICAgICAgIHNldEN1cnJlbnRUaWNrKDApO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byB0b2dnbGUgdGhlIHRpbWVyOlxuICAgIGNvbnN0IHRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKGlzUnVubmluZykgcmV0dXJuIHN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0KCk7XG4gICAgfSwgW2lzUnVubmluZ10pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFN0ZXBJbmRleCxcbiAgICAgICAgY3VycmVudFN0ZXBSZW1haW5pbmcsXG4gICAgICAgIGVsYXBzZWQsXG4gICAgICAgIGlzQ29tcGxldGUsXG4gICAgICAgIGlzUnVubmluZyxcbiAgICAgICAgcmVtYWluaW5nLFxuICAgICAgICByZXNldCxcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHN0b3AsXG4gICAgICAgIHRvZ2dsZSxcbiAgICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=