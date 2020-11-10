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

    var res = steps[currentStepIndex].duration - progressCurrentStep;
    console.log(res);
    return res;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXRpbWVyLnRzIl0sIm5hbWVzIjpbInVzZVRpbWVyIiwidXNlclN0ZXBzIiwic3RlcHMiLCJ1c2VNZW1vIiwibWFwIiwic3RlcCIsImkiLCJkdXJhdGlvbiIsInN0YXJ0Iiwic2xpY2UiLCJyZWR1Y2UiLCJ0b3RhbCIsImxlbmd0aCIsInVzZVN0YXRlIiwiaXNSdW5uaW5nIiwic2V0SXNSdW5uaW5nIiwiY3VycmVudFRpY2siLCJzZXRDdXJyZW50VGljayIsInByZXZpb3VzVGljayIsInVzZVByZXZpb3VzIiwiZWxhcHNlZCIsInNldEVsYXBzZWQiLCJ0b3RhbFRpbWUiLCJzdW0iLCJ2YWx1ZXNGb3JLZXkiLCJyZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaXNDb21wbGV0ZSIsImN1cnJlbnRTdGVwSW5kZXgiLCJpbmRleCIsImZpbmRJbmRleCIsImN1cnJlbnRTdGVwUmVtYWluaW5nIiwidG90YWxQcmV2aW91c1N0ZXBzIiwicHJvZ3Jlc3NDdXJyZW50U3RlcCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ0aWNrIiwiRGF0ZSIsIm5vdyIsInVzZUludGVydmFsIiwidXNlRWZmZWN0IiwicmVzZXQiLCJ1c2VDYWxsYmFjayIsInN0b3AiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxTQUFELEVBQXVCO0FBQUE7O0FBQzNDO0FBQ0E7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHFEQUFPLENBQ2pCO0FBQUEsV0FDSUYsU0FBUyxDQUFDRyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsNkNBRVBELElBRk87QUFJVjtBQUNBO0FBQ0E7QUFDQUUsZ0JBQVEsRUFBRUYsSUFBSSxDQUFDRSxRQUFMLEdBQWdCLElBUGhCO0FBU1Y7QUFDQTtBQUNBO0FBQ0E7QUFD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QixDQUF4QixDQWhIMkMsQ0FzSDNDOztBQUNBLE1BQU02QixNQUFNLEdBQUdGLHlEQUFXLENBQUMsWUFBTTtBQUM3QixRQUFJOUIsU0FBSixFQUFlLE9BQU8rQixJQUFJLEVBQVg7QUFDZixXQUFPckMsS0FBSyxFQUFaO0FBQ0gsR0FIeUIsRUFHdkIsQ0FBQ00sU0FBRCxDQUh1QixDQUExQjtBQUtBLFNBQU87QUFDSGUsb0JBQWdCLEVBQWhCQSxnQkFERztBQUVIRyx3QkFBb0IsRUFBcEJBLG9CQUZHO0FBR0haLFdBQU8sRUFBUEEsT0FIRztBQUlIUSxjQUFVLEVBQVZBLFVBSkc7QUFLSGQsYUFBUyxFQUFUQSxTQUxHO0FBTUhXLGFBQVMsRUFBVEEsU0FORztBQU9Ia0IsU0FBSyxFQUFMQSxLQVBHO0FBUUhuQyxTQUFLLEVBQUxBLEtBUkc7QUFTSHFDLFFBQUksRUFBSkEsSUFURztBQVVIQyxVQUFNLEVBQU5BO0FBVkcsR0FBUDtBQVlILENBeElNOztHQUFNOUMsUTtVQW1DWW1CLCtELEVBaURyQnNCLCtEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZS9baWRdL3RpbWVyLjkzOGMwNThkMDExZTNhYWMzMjI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VJbnRlcnZhbCB9IGZyb20gXCIuLi9ob29rcy91c2UtaW50ZXJ2YWxcIjtcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSBcIi4uL2hvb2tzL3VzZS1wcmV2aW91c1wiO1xuaW1wb3J0IHsgc3VtLCB2YWx1ZXNGb3JLZXkgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyc1wiO1xuXG50eXBlIFN0ZXAgPSB7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVRpbWVyID0gKHVzZXJTdGVwczogU3RlcFtdKSA9PiB7XG4gICAgLy8gLy8gQWRkIGEgXCJzdGFydFwiIGZpZWxkIHRvIGV2ZXJ5IHN0ZXAgdGhhdCB3YXMgcGFzc2VkIGluIHNvIHdlXG4gICAgLy8gLy8gY2FuIGRldGVybWluZSB3aGljaCBzdGVwIGlzIHRoZSBjdXJyZW50OlxuICAgIGNvbnN0IHN0ZXBzID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICAgIHVzZXJTdGVwcy5tYXAoKHN0ZXAsIGkpID0+ICh7XG4gICAgICAgICAgICAgICAgLy8gV2UgY29weSB0aGUgb3JpZ2luYWwgc3RlcCBhcyBub3QgdG8gbG9zZSBhbnkgbmZvcm1hdGlvbi5cbiAgICAgICAgICAgICAgICAuLi5zdGVwLFxuXG4gICAgICAgICAgICAgICAgLy8gV2UgY29udmVydCBzdGVwIGR1cmF0aW9uLCB3aGljaCBpcyBjb25maWd1cmVkIGluIHNlY29uZHMsXG4gICAgICAgICAgICAgICAgLy8gdG8gbWlsbGlzZWNvbmRzIGhlcmUuIFRoaXMgb3ZlcndyaXRlcyB0aGUgb3JpZ2luYWwgZHVyYXRpb25cbiAgICAgICAgICAgICAgICAvLyB2YWx1ZSFcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogc3RlcC5kdXJhdGlvbiAqIDEwMDAsXG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgc3RhcnQgaXMgZGV0ZXJtaW5lZCBieSB0aGUgc3VtIG9mIGFsbCBkdXJhdGlvbnMgb2ZcbiAgICAgICAgICAgICAgICAvLyB0aGUgcHJldmlvdXMgc3RlcHMuIE9uY2UgdGhlc2UgZHVyYXRpb25zIGhhdmUgcGFzc2VkLFxuICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IHN0ZXAgaXMgYWN0aXZlLiBGaW5hbGx5LCBzdWJ0cmFjdCAxMDAwIG1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgICAgIC8vIHRvIGFsd2F5cyBzdGFydCBhIHJvdW5kIFwiZWFybHlcIi5cbiAgICAgICAgICAgICAgICBzdGFydDpcbiAgICAgICAgICAgICAgICAgICAgdXNlclN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRvdGFsLCB7IGR1cmF0aW9uIH0pID0+IHRvdGFsICsgZHVyYXRpb24gKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICkgLSAxMDAwLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICBbdXNlclN0ZXBzLmxlbmd0aF1cbiAgICApO1xuXG4gICAgLy8gU3RvcmUgd2hldGhlciB0aGUgdGltZXIgaXMgcnVubmluZyBpbiBzdGF0ZTpcbiAgICBjb25zdCBbaXNSdW5uaW5nLCBzZXRJc1J1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gU3RvcmUgYm90aCBjdXJyZW50IGFuZCBwcmV2aW91cyB0aWNrIHRpbWVzdGFtcHMgc28gd2UgY2FuXG4gICAgLy8gY29tcHV0ZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZW06XG4gICAgY29uc3QgW2N1cnJlbnRUaWNrLCBzZXRDdXJyZW50VGlja10gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBwcmV2aW91c1RpY2sgPSB1c2VQcmV2aW91cyhjdXJyZW50VGljayk7XG5cbiAgICAvLyBTdG9yZSB0b3RhbCBlbGFwc2VkIHRpbWUgaW4gc3RhdGU6XG4gICAgY29uc3QgW2VsYXBzZWQsIHNldEVsYXBzZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSB0b3RhbCB0aW1lIG5lZWRlZCB0byBjb21wbGV0ZSB0aGlzIHRpbWVyOlxuICAgIGNvbnN0IHRvdGFsVGltZSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IHN1bSh2YWx1ZXNGb3JLZXkodXNlclN0ZXBzLCBcImR1cmF0aW9uXCIpKSAqIDEwMDAsXG4gICAgICAgIFt1c2VyU3RlcHMubGVuZ3RoXVxuICAgICk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSByZW1haW5pbmcgdGltZTpcbiAgICBjb25zdCByZW1haW5pbmcgPSB1c2VNZW1vKCgpID0+IE1hdGgubWF4KHRvdGFsVGltZSAtIGVsYXBzZWQsIDApLCBbXG4gICAgICAgIGVsYXBzZWQsXG4gICAgXSk7XG5cbiAgICAvLyAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgdGltZXIgaXMgY29tcGxldGU6XG4gICAgY29uc3QgaXNDb21wbGV0ZSA9IHVzZU1lbW8oKCkgPT4gcmVtYWluaW5nID09PSAwLCBbcmVtYWluaW5nXSk7XG5cbiAgICAvLyAvLyBDb21wdXRlIHRoZSBjdXJyZW50IHN0ZXAncyBpbmRleDpcbiAgICBjb25zdCBjdXJyZW50U3RlcEluZGV4ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIC8vIGZpbmQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBzdGVwIHRoYXQgd2UgZmluZCBvZiB3aGljaCB3ZSBoYXZlIG5vdCB5ZXRcbiAgICAgICAgLy8gcGFzc2VkIHRoZSBzdGFydCBtb21lbnQ6XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc3RlcHMuZmluZEluZGV4KCh7IHN0YXJ0IH0pID0+IGVsYXBzZWQgPCBzdGFydCk7XG5cbiAgICAgICAgLy8gSWYgZm91bmQsIHRoZSBjdXJyZW50IHN0ZXAgaXMgdGhlIHN0ZXAgYmVmb3JlIHRoZSBvbmUgd2UgZm91bmQuXG4gICAgICAgIC8vIElmIG5vdCBmb3VuZCwgd2UncmUgb24gdGhlIGxhc3Qgc3RlcC5cbiAgICAgICAgcmV0dXJuIChpbmRleCA9PT0gLTEgPyBzdGVwcy5sZW5ndGggOiBpbmRleCkgLSAxO1xuICAgIH0sIFtlbGFwc2VkXSk7XG5cbiAgICAvLyAvLyBDb21wdXRlIGhvdyBtdWNoIHRpbWUgaXMgcmVtYWluaW5nIGluIHRoZSBjdXJyZW50IHN0ZXBcbiAgICBjb25zdCBjdXJyZW50U3RlcFJlbWFpbmluZyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAvLyBHZXQgdGhlIHN1bSBvZiBkdXJhdGlvbnMgb2YgYWxsIHByZXZpb3VzIHN0ZXBzIChleGNsdWRpbmcgY3VycmVudCk6XG4gICAgICAgIGNvbnN0IHRvdGFsUHJldmlvdXNTdGVwcyA9IHN1bShcbiAgICAgICAgICAgIHZhbHVlc0ZvcktleShzdGVwcy5zbGljZSgwLCBjdXJyZW50U3RlcEluZGV4KSwgXCJkdXJhdGlvblwiKVxuICAgICAgICApO1xuICAgICAgICAvLyBDb21wdXRlIHRoZSBwcm9ncmVzcyB3aXRoaW4gdGhlIGN1cnJlbnQgc3RlcDpcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NDdXJyZW50U3RlcCA9IGVsYXBzZWQgLSB0b3RhbFByZXZpb3VzU3RlcHM7XG5cbiAgICAgICAgLy8gU3VidHJhY3QgdGhlIHByb2dyZXNzIHdpdGhpbiB0aGlzIHN0ZXAgZnJvbSB0aGUgdG90YWwgZHVyYXRpb246XG4gICAgICAgIGNvbnN0IHJlcyA9IHN0ZXBzW2N1cnJlbnRTdGVwSW5kZXhdLmR1cmF0aW9uIC0gcHJvZ3Jlc3NDdXJyZW50U3RlcDtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCBbY3VycmVudFN0ZXBJbmRleCwgZWxhcHNlZF0pO1xuXG4gICAgLy8gRXZlcnkgdGljaywgdXBkYXRlIHRoZSBjdXJyZW50IHRpY2sgaW4gc3RhdGU6XG4gICAgY29uc3QgdGljayA9ICgpID0+IHNldEN1cnJlbnRUaWNrKERhdGUubm93KCkpO1xuXG4gICAgLy8gVGljayBldmVyeSAxMDAgbWlsbGlzZWNvbnMgd2hlbiB0aW1lciBpcyBydW5uaW5nOlxuICAgIHVzZUludGVydmFsKHRpY2ssIGlzUnVubmluZyAmJiAhaXNDb21wbGV0ZSA/IDEwMCA6IG51bGwpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBlbGFwc2VkIHRpbWUgYnkgYWRkaW5nIHRoZSBkaWZmZXJlbmNlXG4gICAgLy8gYmV0d2VlbiB0aGUgY3VycmVudCBhbmQgdGhlIHByZXZpb3VzIHRpY2sgdG8gdGhlIHByZXZpb3VzIHRvdGFsOlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIERvbid0IHVwZGF0ZSBpZiB3ZSdyZSBub3QgcnVubmluZzpcbiAgICAgICAgaWYgKCFpc1J1bm5pbmcpIHJldHVybjtcblxuICAgICAgICAvLyBEb24ndCB1cGRhdGUgaWYgdGhlIHByZXZpb3VzIHRpY2sgd2FzIDA6XG4gICAgICAgIGlmICghcHJldmlvdXNUaWNrIHx8IHByZXZpb3VzVGljayA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHNldEVsYXBzZWQoKGVsYXBzZWQpID0+IGVsYXBzZWQgKyAoY3VycmVudFRpY2sgLSBwcmV2aW91c1RpY2spKTtcbiAgICB9LCBbY3VycmVudFRpY2tdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byByZXNldCB0aGUgdGltZXI6XG4gICAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgIHNldEVsYXBzZWQoMCk7XG4gICAgICAgIHNldEN1cnJlbnRUaWNrKDApO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byBzdGFydCB0aGUgdGltZXI6XG4gICAgY29uc3Qgc3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRUaWNrKERhdGUubm93KCkpO1xuICAgICAgICBzZXRJc1J1bm5pbmcodHJ1ZSk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHN0b3AgKHBhdXNlKSB0aGUgdGltZXI6XG4gICAgY29uc3Qgc3RvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICAgICAgLy8gRklYTUU6IHRoaXMgZml4ZXMgcGF1c2UgZnVuY3Rpb25hbGl0eSwgYnV0IHdlIGRvbid0IGNvdW50IHRoZSB0aW1lIGJldHdlZW4gdGhlIGxhc3QgdGljayBhbmQgdXMgcGF1c2luZyB0aGUgdGltZXJcbiAgICAgICAgc2V0Q3VycmVudFRpY2soMCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHRvZ2dsZSB0aGUgdGltZXI6XG4gICAgY29uc3QgdG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAoaXNSdW5uaW5nKSByZXR1cm4gc3RvcCgpO1xuICAgICAgICByZXR1cm4gc3RhcnQoKTtcbiAgICB9LCBbaXNSdW5uaW5nXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3RlcEluZGV4LFxuICAgICAgICBjdXJyZW50U3RlcFJlbWFpbmluZyxcbiAgICAgICAgZWxhcHNlZCxcbiAgICAgICAgaXNDb21wbGV0ZSxcbiAgICAgICAgaXNSdW5uaW5nLFxuICAgICAgICByZW1haW5pbmcsXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3RvcCxcbiAgICAgICAgdG9nZ2xlLFxuICAgIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==