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

    var res = Math.max(steps[currentStepIndex].duration - progressCurrentStep, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXRpbWVyLnRzIl0sIm5hbWVzIjpbInVzZVRpbWVyIiwidXNlclN0ZXBzIiwic3RlcHMiLCJ1c2VNZW1vIiwibWFwIiwic3RlcCIsImkiLCJkdXJhdGlvbiIsInN0YXJ0Iiwic2xpY2UiLCJyZWR1Y2UiLCJ0b3RhbCIsImxlbmd0aCIsInVzZVN0YXRlIiwiaXNSdW5uaW5nIiwic2V0SXNSdW5uaW5nIiwiY3VycmVudFRpY2siLCJzZXRDdXJyZW50VGljayIsInByZXZpb3VzVGljayIsInVzZVByZXZpb3VzIiwiZWxhcHNlZCIsInNldEVsYXBzZWQiLCJ0b3RhbFRpbWUiLCJzdW0iLCJ2YWx1ZXNGb3JLZXkiLCJyZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaXNDb21wbGV0ZSIsImN1cnJlbnRTdGVwSW5kZXgiLCJpbmRleCIsImZpbmRJbmRleCIsImN1cnJlbnRTdGVwUmVtYWluaW5nIiwidG90YWxQcmV2aW91c1N0ZXBzIiwicHJvZ3Jlc3NDdXJyZW50U3RlcCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ0aWNrIiwiRGF0ZSIsIm5vdyIsInVzZUludGVydmFsIiwidXNlRWZmZWN0IiwicmVzZXQiLCJ1c2VDYWxsYmFjayIsInN0b3AiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxTQUFELEVBQXVCO0FBQUE7O0FBQzNDO0FBQ0E7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHFEQUFPLENBQ2pCO0FBQUEsV0FDSUYsU0FBUyxDQUFDRyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsNkNBRVBELElBRk87QUFJVjtBQUNBO0FBQ0E7QUFDQUUsZ0JBQVEsRUFBRUYsSUFBSSxDQUFDRSxRQUFMLEdBQWdCLElBUGhCO0FBU1Y7QUFDQTtBQUNBO0FBQ0E7QUFD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LENBQUMsQ0FBRCxDQUFkO0FBQ0gsR0FKdUIsRUFJckIsRUFKcUIsQ0FBeEIsQ0FuSDJDLENBeUgzQzs7QUFDQSxNQUFNNkIsTUFBTSxHQUFHRix5REFBVyxDQUFDLFlBQU07QUFDN0IsUUFBSTlCLFNBQUosRUFBZSxPQUFPK0IsSUFBSSxFQUFYO0FBQ2YsV0FBT3JDLEtBQUssRUFBWjtBQUNILEdBSHlCLEVBR3ZCLENBQUNNLFNBQUQsQ0FIdUIsQ0FBMUI7QUFLQSxTQUFPO0FBQ0hlLG9CQUFnQixFQUFoQkEsZ0JBREc7QUFFSEcsd0JBQW9CLEVBQXBCQSxvQkFGRztBQUdIWixXQUFPLEVBQVBBLE9BSEc7QUFJSFEsY0FBVSxFQUFWQSxVQUpHO0FBS0hkLGFBQVMsRUFBVEEsU0FMRztBQU1IVyxhQUFTLEVBQVRBLFNBTkc7QUFPSGtCLFNBQUssRUFBTEEsS0FQRztBQVFIbkMsU0FBSyxFQUFMQSxLQVJHO0FBU0hxQyxRQUFJLEVBQUpBLElBVEc7QUFVSEMsVUFBTSxFQUFOQTtBQVZHLEdBQVA7QUFZSCxDQTNJTTs7R0FBTTlDLFE7VUFtQ1ltQiwrRCxFQW9EckJzQiwrRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGUvW2lkXS90aW1lci5jNTY2ODY1NDBjODkyYjNhYzY2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlSW50ZXJ2YWwgfSBmcm9tIFwiLi4vaG9va3MvdXNlLWludGVydmFsXCI7XG5pbXBvcnQgeyB1c2VQcmV2aW91cyB9IGZyb20gXCIuLi9ob29rcy91c2UtcHJldmlvdXNcIjtcbmltcG9ydCB7IHN1bSwgdmFsdWVzRm9yS2V5IH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIjtcblxudHlwZSBTdGVwID0ge1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VUaW1lciA9ICh1c2VyU3RlcHM6IFN0ZXBbXSkgPT4ge1xuICAgIC8vIC8vIEFkZCBhIFwic3RhcnRcIiBmaWVsZCB0byBldmVyeSBzdGVwIHRoYXQgd2FzIHBhc3NlZCBpbiBzbyB3ZVxuICAgIC8vIC8vIGNhbiBkZXRlcm1pbmUgd2hpY2ggc3RlcCBpcyB0aGUgY3VycmVudDpcbiAgICBjb25zdCBzdGVwcyA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+XG4gICAgICAgICAgICB1c2VyU3RlcHMubWFwKChzdGVwLCBpKSA9PiAoe1xuICAgICAgICAgICAgICAgIC8vIFdlIGNvcHkgdGhlIG9yaWdpbmFsIHN0ZXAgYXMgbm90IHRvIGxvc2UgYW55IG5mb3JtYXRpb24uXG4gICAgICAgICAgICAgICAgLi4uc3RlcCxcblxuICAgICAgICAgICAgICAgIC8vIFdlIGNvbnZlcnQgc3RlcCBkdXJhdGlvbiwgd2hpY2ggaXMgY29uZmlndXJlZCBpbiBzZWNvbmRzLFxuICAgICAgICAgICAgICAgIC8vIHRvIG1pbGxpc2Vjb25kcyBoZXJlLiBUaGlzIG92ZXJ3cml0ZXMgdGhlIG9yaWdpbmFsIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgLy8gdmFsdWUhXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHN0ZXAuZHVyYXRpb24gKiAxMDAwLFxuXG4gICAgICAgICAgICAgICAgLy8gVGhlIHN0YXJ0IGlzIGRldGVybWluZWQgYnkgdGhlIHN1bSBvZiBhbGwgZHVyYXRpb25zIG9mXG4gICAgICAgICAgICAgICAgLy8gdGhlIHByZXZpb3VzIHN0ZXBzLiBPbmNlIHRoZXNlIGR1cmF0aW9ucyBoYXZlIHBhc3NlZCxcbiAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBzdGVwIGlzIGFjdGl2ZS4gRmluYWxseSwgc3VidHJhY3QgMTAwMCBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgICAgICAvLyB0byBhbHdheXMgc3RhcnQgYSByb3VuZCBcImVhcmx5XCIuXG4gICAgICAgICAgICAgICAgc3RhcnQ6XG4gICAgICAgICAgICAgICAgICAgIHVzZXJTdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0b3RhbCwgeyBkdXJhdGlvbiB9KSA9PiB0b3RhbCArIGR1cmF0aW9uICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICApIC0gMTAwMCxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgW3VzZXJTdGVwcy5sZW5ndGhdXG4gICAgKTtcblxuICAgIC8vIFN0b3JlIHdoZXRoZXIgdGhlIHRpbWVyIGlzIHJ1bm5pbmcgaW4gc3RhdGU6XG4gICAgY29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vIFN0b3JlIGJvdGggY3VycmVudCBhbmQgcHJldmlvdXMgdGljayB0aW1lc3RhbXBzIHNvIHdlIGNhblxuICAgIC8vIGNvbXB1dGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGVtOlxuICAgIGNvbnN0IFtjdXJyZW50VGljaywgc2V0Q3VycmVudFRpY2tdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgcHJldmlvdXNUaWNrID0gdXNlUHJldmlvdXMoY3VycmVudFRpY2spO1xuXG4gICAgLy8gU3RvcmUgdG90YWwgZWxhcHNlZCB0aW1lIGluIHN0YXRlOlxuICAgIGNvbnN0IFtlbGFwc2VkLCBzZXRFbGFwc2VkXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgdG90YWwgdGltZSBuZWVkZWQgdG8gY29tcGxldGUgdGhpcyB0aW1lcjpcbiAgICBjb25zdCB0b3RhbFRpbWUgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiBzdW0odmFsdWVzRm9yS2V5KHVzZXJTdGVwcywgXCJkdXJhdGlvblwiKSkgKiAxMDAwLFxuICAgICAgICBbdXNlclN0ZXBzLmxlbmd0aF1cbiAgICApO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgcmVtYWluaW5nIHRpbWU6XG4gICAgY29uc3QgcmVtYWluaW5nID0gdXNlTWVtbygoKSA9PiBNYXRoLm1heCh0b3RhbFRpbWUgLSBlbGFwc2VkLCAwKSwgW1xuICAgICAgICBlbGFwc2VkLFxuICAgIF0pO1xuXG4gICAgLy8gLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHRpbWVyIGlzIGNvbXBsZXRlOlxuICAgIGNvbnN0IGlzQ29tcGxldGUgPSB1c2VNZW1vKCgpID0+IHJlbWFpbmluZyA9PT0gMCwgW3JlbWFpbmluZ10pO1xuXG4gICAgLy8gLy8gQ29tcHV0ZSB0aGUgY3VycmVudCBzdGVwJ3MgaW5kZXg6XG4gICAgY29uc3QgY3VycmVudFN0ZXBJbmRleCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAvLyBmaW5kIHRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgc3RlcCB0aGF0IHdlIGZpbmQgb2Ygd2hpY2ggd2UgaGF2ZSBub3QgeWV0XG4gICAgICAgIC8vIHBhc3NlZCB0aGUgc3RhcnQgbW9tZW50OlxuICAgICAgICBjb25zdCBpbmRleCA9IHN0ZXBzLmZpbmRJbmRleCgoeyBzdGFydCB9KSA9PiBlbGFwc2VkIDwgc3RhcnQpO1xuXG4gICAgICAgIC8vIElmIGZvdW5kLCB0aGUgY3VycmVudCBzdGVwIGlzIHRoZSBzdGVwIGJlZm9yZSB0aGUgb25lIHdlIGZvdW5kLlxuICAgICAgICAvLyBJZiBub3QgZm91bmQsIHdlJ3JlIG9uIHRoZSBsYXN0IHN0ZXAuXG4gICAgICAgIHJldHVybiAoaW5kZXggPT09IC0xID8gc3RlcHMubGVuZ3RoIDogaW5kZXgpIC0gMTtcbiAgICB9LCBbZWxhcHNlZF0pO1xuXG4gICAgLy8gLy8gQ29tcHV0ZSBob3cgbXVjaCB0aW1lIGlzIHJlbWFpbmluZyBpbiB0aGUgY3VycmVudCBzdGVwXG4gICAgY29uc3QgY3VycmVudFN0ZXBSZW1haW5pbmcgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgLy8gR2V0IHRoZSBzdW0gb2YgZHVyYXRpb25zIG9mIGFsbCBwcmV2aW91cyBzdGVwcyAoZXhjbHVkaW5nIGN1cnJlbnQpOlxuICAgICAgICBjb25zdCB0b3RhbFByZXZpb3VzU3RlcHMgPSBzdW0oXG4gICAgICAgICAgICB2YWx1ZXNGb3JLZXkoc3RlcHMuc2xpY2UoMCwgY3VycmVudFN0ZXBJbmRleCksIFwiZHVyYXRpb25cIilcbiAgICAgICAgKTtcbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgcHJvZ3Jlc3Mgd2l0aGluIHRoZSBjdXJyZW50IHN0ZXA6XG4gICAgICAgIGNvbnN0IHByb2dyZXNzQ3VycmVudFN0ZXAgPSBlbGFwc2VkIC0gdG90YWxQcmV2aW91c1N0ZXBzO1xuXG4gICAgICAgIC8vIFN1YnRyYWN0IHRoZSBwcm9ncmVzcyB3aXRoaW4gdGhpcyBzdGVwIGZyb20gdGhlIHRvdGFsIGR1cmF0aW9uOlxuICAgICAgICBjb25zdCByZXMgPSBNYXRoLm1heChcbiAgICAgICAgICAgIHN0ZXBzW2N1cnJlbnRTdGVwSW5kZXhdLmR1cmF0aW9uIC0gcHJvZ3Jlc3NDdXJyZW50U3RlcCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCBbY3VycmVudFN0ZXBJbmRleCwgZWxhcHNlZF0pO1xuXG4gICAgLy8gRXZlcnkgdGljaywgdXBkYXRlIHRoZSBjdXJyZW50IHRpY2sgaW4gc3RhdGU6XG4gICAgY29uc3QgdGljayA9ICgpID0+IHNldEN1cnJlbnRUaWNrKERhdGUubm93KCkpO1xuXG4gICAgLy8gVGljayBldmVyeSAxMDAgbWlsbGlzZWNvbnMgd2hlbiB0aW1lciBpcyBydW5uaW5nOlxuICAgIHVzZUludGVydmFsKHRpY2ssIGlzUnVubmluZyAmJiAhaXNDb21wbGV0ZSA/IDEwMCA6IG51bGwpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBlbGFwc2VkIHRpbWUgYnkgYWRkaW5nIHRoZSBkaWZmZXJlbmNlXG4gICAgLy8gYmV0d2VlbiB0aGUgY3VycmVudCBhbmQgdGhlIHByZXZpb3VzIHRpY2sgdG8gdGhlIHByZXZpb3VzIHRvdGFsOlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIERvbid0IHVwZGF0ZSBpZiB3ZSdyZSBub3QgcnVubmluZzpcbiAgICAgICAgaWYgKCFpc1J1bm5pbmcpIHJldHVybjtcblxuICAgICAgICAvLyBEb24ndCB1cGRhdGUgaWYgdGhlIHByZXZpb3VzIHRpY2sgd2FzIDA6XG4gICAgICAgIGlmICghcHJldmlvdXNUaWNrIHx8IHByZXZpb3VzVGljayA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHNldEVsYXBzZWQoKGVsYXBzZWQpID0+IGVsYXBzZWQgKyAoY3VycmVudFRpY2sgLSBwcmV2aW91c1RpY2spKTtcbiAgICB9LCBbY3VycmVudFRpY2tdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byByZXNldCB0aGUgdGltZXI6XG4gICAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgIHNldEVsYXBzZWQoMCk7XG4gICAgICAgIHNldEN1cnJlbnRUaWNrKDApO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byBzdGFydCB0aGUgdGltZXI6XG4gICAgY29uc3Qgc3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRUaWNrKERhdGUubm93KCkpO1xuICAgICAgICBzZXRJc1J1bm5pbmcodHJ1ZSk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHN0b3AgKHBhdXNlKSB0aGUgdGltZXI6XG4gICAgY29uc3Qgc3RvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICAgICAgLy8gRklYTUU6IHRoaXMgZml4ZXMgcGF1c2UgZnVuY3Rpb25hbGl0eSwgYnV0IHdlIGRvbid0IGNvdW50IHRoZSB0aW1lIGJldHdlZW4gdGhlIGxhc3QgdGljayBhbmQgdXMgcGF1c2luZyB0aGUgdGltZXJcbiAgICAgICAgc2V0Q3VycmVudFRpY2soMCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHRvZ2dsZSB0aGUgdGltZXI6XG4gICAgY29uc3QgdG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAoaXNSdW5uaW5nKSByZXR1cm4gc3RvcCgpO1xuICAgICAgICByZXR1cm4gc3RhcnQoKTtcbiAgICB9LCBbaXNSdW5uaW5nXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3RlcEluZGV4LFxuICAgICAgICBjdXJyZW50U3RlcFJlbWFpbmluZyxcbiAgICAgICAgZWxhcHNlZCxcbiAgICAgICAgaXNDb21wbGV0ZSxcbiAgICAgICAgaXNSdW5uaW5nLFxuICAgICAgICByZW1haW5pbmcsXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3RvcCxcbiAgICAgICAgdG9nZ2xlLFxuICAgIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==