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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-delta */ "./node_modules/react-delta/dist/index.es.js");
/* harmony import */ var _hooks_use_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-interval */ "./hooks/use-interval.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.ts");
var _s = $RefreshSig$();





var useTimer = function useTimer(userSteps) {
  _s();

  // Store whether the timer is running in state:
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isRunning = _useState[0],
      setIsRunning = _useState[1]; // Store both current and previous tick timestamps so we can
  // compute the difference between them:


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      currentTick = _useState2[0],
      setCurrentTick = _useState2[1];

  var previousTick = Object(react_delta__WEBPACK_IMPORTED_MODULE_1__["usePrevious"])(currentTick); // const delta = useDelta(currentTick);
  // Store total elapsed time in state:

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      elapsed = _useState3[0],
      setElapsed = _useState3[1]; // Compute the total time needed to complete this timer:


  var totalTime = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["sum"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_3__["valuesForKey"])(userSteps, "duration")) * 1000;
  }, [userSteps.length]); // Compute the remaining time:

  var remaining = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return totalTime - elapsed;
  }, [elapsed]); // Every tick, update the current tick in state:

  var tick = function tick() {
    return setCurrentTick(Date.now());
  }; // Tick every 100 millisecons when timer is running:


  Object(_hooks_use_interval__WEBPACK_IMPORTED_MODULE_2__["useInterval"])(tick, isRunning ? 100 : null); // Update the total elapsed time by adding the difference
  // between the current and the previous tick to the previous total:

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Don't update if we're not running:
    if (!isRunning) return; // Don't update if the previous tick was 0:

    if (!previousTick || previousTick === 0) return;
    setElapsed(function (elapsed) {
      return elapsed + (currentTick - previousTick);
    });
  }, [currentTick]); // Expose a method to reset the timer:

  var reset = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsRunning(false);
    setElapsed(0);
    setCurrentTick(0);
  }, []); // Expose a method to start the timer:

  var start = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCurrentTick(Date.now());
    setIsRunning(true);
  }, []); // Expose a method to stop (pause) the timer:

  var stop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsRunning(false); // FIXME: this fixes pause functionality, but we don't count the time between the last tick and us pausing the timer

    setCurrentTick(0);
  }, []); // Expose a method to toggle the timer:

  var toggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isRunning) {
      return stop();
    }

    return start();
  }, [isRunning]); // // Add a "start" field to every step that was passed in so we
  // // can determine which step is the current:
  // const steps = useMemo(
  //     () =>
  //         userSteps.map((step, i) => ({
  //             // We copy the original step as not to lose any nformation.
  //             ...step,
  //             // We convert step duration, which is configured in seconds,
  //             // to milliseconds here. This overwrites the original duration
  //             // value!
  //             duration: step.duration * 1000,
  //             // The start is determined by the sum of all durations of
  //             // the previous steps. Once these durations have passed,
  //             // the current step is active. Finally, subtract 1000 milliseconds
  //             // to always start a round "early".
  //             start:
  //                 userSteps
  //                     .slice(0, i)
  //                     .reduce(
  //                         (total, { duration }) => total + duration * 1000,
  //                         0
  //                     ) - 1000,
  //         })),
  //     [userSteps.length]
  // );
  // // Compute the total time, so we can determine whether the timer is done:
  // const totalTime = useMemo(
  //     () =>
  //         userSteps.reduce(
  //             (total, { duration }) => total + duration * 1000,
  //             0
  //         ),
  //     [userSteps.length]
  // );
  // // Keep the elapsed milliseconds in state:
  // const [elapsed, setElapsed] = useState(0);
  // // Keep whether the timer is running in state:
  // const [isRunning, setIsRunning] = useState(false);
  // // Calculate the total time remaining:
  // const remaining = useMemo(() => totalTime - elapsed, [elapsed]);
  // // Determine whether the timer is complete:
  // const isComplete = useMemo(() => remaining === 0, [remaining]);
  // // Compute the current step's index. This index is equal to the
  // // index of the first step that we find of which we have not yet
  // // passed the start moment, minus one.
  // const currentStepIndex = useMemo(
  //     () => steps.findIndex(({ start }) => elapsed < start) - 1,
  //     [elapsed]
  // );
  // // Compute the actual current step:
  // const currentStep = useMemo(() => steps[currentStepIndex], [
  //     currentStepIndex,
  // ]);
  // // Compute how much time is remaining in the current step
  // const currentStepRemaining = useMemo(
  //     () => steps[currentStepIndex].duration,
  //     [currentStepIndex, elapsed]
  // );
  // // Run the timer:
  // const tick = () => setElapsed((elapsed) => (elapsed += STEPSIZE));
  // useInterval(tick, isRunning && !isComplete ? STEPSIZE : null);
  // Expose some helper methods to manipulate the timer:
  // const pause = useCallback(() => setIsRunning(false), []);
  // const reset = useCallback(() => {
  //     setElapsed(0);
  //     setIsRunning(false);
  // }, []);
  // const start = useCallback(() => setIsRunning(true), []);
  // const toggle = useCallback(
  //     () => setIsRunning((isRunning) => !isRunning),
  //     []
  // );

  return {
    elapsed: elapsed,
    isRunning: isRunning,
    remaining: remaining,
    reset: reset,
    start: start,
    stop: stop,
    toggle: toggle
  };
};

_s(useTimer, "mms5khJiAFSpQCDqv27myLcZTVY=", false, function () {
  return [react_delta__WEBPACK_IMPORTED_MODULE_1__["usePrevious"], _hooks_use_interval__WEBPACK_IMPORTED_MODULE_2__["useInterval"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXRpbWVyLnRzIl0sIm5hbWVzIjpbInVzZVRpbWVyIiwidXNlclN0ZXBzIiwidXNlU3RhdGUiLCJpc1J1bm5pbmciLCJzZXRJc1J1bm5pbmciLCJjdXJyZW50VGljayIsInNldEN1cnJlbnRUaWNrIiwicHJldmlvdXNUaWNrIiwidXNlUHJldmlvdXMiLCJlbGFwc2VkIiwic2V0RWxhcHNlZCIsInRvdGFsVGltZSIsInVzZU1lbW8iLCJzdW0iLCJ2YWx1ZXNGb3JLZXkiLCJsZW5ndGgiLCJyZW1haW5pbmciLCJ0aWNrIiwiRGF0ZSIsIm5vdyIsInVzZUludGVydmFsIiwidXNlRWZmZWN0IiwicmVzZXQiLCJ1c2VDYWxsYmFjayIsInN0YXJ0Iiwic3RvcCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBT08sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsU0FBRCxFQUF1QjtBQUFBOztBQUMzQztBQUQyQyxrQkFFVEMsc0RBQVEsQ0FBQyxLQUFELENBRkM7QUFBQSxNQUVwQ0MsU0FGb0M7QUFBQSxNQUV6QkMsWUFGeUIsaUJBSTNDO0FBQ0E7OztBQUwyQyxtQkFNTEYsc0RBQVEsQ0FBQyxDQUFELENBTkg7QUFBQSxNQU1wQ0csV0FOb0M7QUFBQSxNQU12QkMsY0FOdUI7O0FBTzNDLE1BQU1DLFlBQVksR0FBR0MsK0RBQVcsQ0FBQ0gsV0FBRCxDQUFoQyxDQVAyQyxDQVEzQztBQUVBOztBQVYyQyxtQkFXYkgsc0RBQVEsQ0FBQyxDQUFELENBWEs7QUFBQSxNQVdwQ08sT0FYb0M7QUFBQSxNQVczQkMsVUFYMkIsa0JBYTNDOzs7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLHFEQUFPLENBQ3JCO0FBQUEsV0FBTUMsMERBQUcsQ0FBQ0MsbUVBQVksQ0FBQ2IsU0FBRCxFQUFZLFVBQVosQ0FBYixDQUFILEdBQTJDLElBQWpEO0FBQUEsR0FEcUIs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WVEsdUQsRUFtQnJCWSwrRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGUvW2lkXS90aW1lci43NGJjYTQyZjgyMTVlNjlhYjE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURlbHRhLCB1c2VQcmV2aW91cyB9IGZyb20gXCJyZWFjdC1kZWx0YVwiO1xuXG5pbXBvcnQgeyB1c2VJbnRlcnZhbCB9IGZyb20gXCIuLi9ob29rcy91c2UtaW50ZXJ2YWxcIjtcbmltcG9ydCB7IHN1bSwgdmFsdWVzRm9yS2V5IH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIjtcblxudHlwZSBTdGVwID0ge1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VUaW1lciA9ICh1c2VyU3RlcHM6IFN0ZXBbXSkgPT4ge1xuICAgIC8vIFN0b3JlIHdoZXRoZXIgdGhlIHRpbWVyIGlzIHJ1bm5pbmcgaW4gc3RhdGU6XG4gICAgY29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vIFN0b3JlIGJvdGggY3VycmVudCBhbmQgcHJldmlvdXMgdGljayB0aW1lc3RhbXBzIHNvIHdlIGNhblxuICAgIC8vIGNvbXB1dGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGVtOlxuICAgIGNvbnN0IFtjdXJyZW50VGljaywgc2V0Q3VycmVudFRpY2tdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgcHJldmlvdXNUaWNrID0gdXNlUHJldmlvdXMoY3VycmVudFRpY2spO1xuICAgIC8vIGNvbnN0IGRlbHRhID0gdXNlRGVsdGEoY3VycmVudFRpY2spO1xuXG4gICAgLy8gU3RvcmUgdG90YWwgZWxhcHNlZCB0aW1lIGluIHN0YXRlOlxuICAgIGNvbnN0IFtlbGFwc2VkLCBzZXRFbGFwc2VkXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgdG90YWwgdGltZSBuZWVkZWQgdG8gY29tcGxldGUgdGhpcyB0aW1lcjpcbiAgICBjb25zdCB0b3RhbFRpbWUgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiBzdW0odmFsdWVzRm9yS2V5KHVzZXJTdGVwcywgXCJkdXJhdGlvblwiKSkgKiAxMDAwLFxuICAgICAgICBbdXNlclN0ZXBzLmxlbmd0aF1cbiAgICApO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgcmVtYWluaW5nIHRpbWU6XG4gICAgY29uc3QgcmVtYWluaW5nID0gdXNlTWVtbygoKSA9PiB0b3RhbFRpbWUgLSBlbGFwc2VkLCBbZWxhcHNlZF0pO1xuXG4gICAgLy8gRXZlcnkgdGljaywgdXBkYXRlIHRoZSBjdXJyZW50IHRpY2sgaW4gc3RhdGU6XG4gICAgY29uc3QgdGljayA9ICgpID0+IHNldEN1cnJlbnRUaWNrKERhdGUubm93KCkpO1xuXG4gICAgLy8gVGljayBldmVyeSAxMDAgbWlsbGlzZWNvbnMgd2hlbiB0aW1lciBpcyBydW5uaW5nOlxuICAgIHVzZUludGVydmFsKHRpY2ssIGlzUnVubmluZyA/IDEwMCA6IG51bGwpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBlbGFwc2VkIHRpbWUgYnkgYWRkaW5nIHRoZSBkaWZmZXJlbmNlXG4gICAgLy8gYmV0d2VlbiB0aGUgY3VycmVudCBhbmQgdGhlIHByZXZpb3VzIHRpY2sgdG8gdGhlIHByZXZpb3VzIHRvdGFsOlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIERvbid0IHVwZGF0ZSBpZiB3ZSdyZSBub3QgcnVubmluZzpcbiAgICAgICAgaWYgKCFpc1J1bm5pbmcpIHJldHVybjtcblxuICAgICAgICAvLyBEb24ndCB1cGRhdGUgaWYgdGhlIHByZXZpb3VzIHRpY2sgd2FzIDA6XG4gICAgICAgIGlmICghcHJldmlvdXNUaWNrIHx8IHByZXZpb3VzVGljayA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHNldEVsYXBzZWQoKGVsYXBzZWQpID0+IGVsYXBzZWQgKyAoY3VycmVudFRpY2sgLSBwcmV2aW91c1RpY2spKTtcbiAgICB9LCBbY3VycmVudFRpY2tdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byByZXNldCB0aGUgdGltZXI6XG4gICAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgIHNldEVsYXBzZWQoMCk7XG4gICAgICAgIHNldEN1cnJlbnRUaWNrKDApO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byBzdGFydCB0aGUgdGltZXI6XG4gICAgY29uc3Qgc3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRUaWNrKERhdGUubm93KCkpO1xuICAgICAgICBzZXRJc1J1bm5pbmcodHJ1ZSk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHN0b3AgKHBhdXNlKSB0aGUgdGltZXI6XG4gICAgY29uc3Qgc3RvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICAgICAgLy8gRklYTUU6IHRoaXMgZml4ZXMgcGF1c2UgZnVuY3Rpb25hbGl0eSwgYnV0IHdlIGRvbid0IGNvdW50IHRoZSB0aW1lIGJldHdlZW4gdGhlIGxhc3QgdGljayBhbmQgdXMgcGF1c2luZyB0aGUgdGltZXJcbiAgICAgICAgc2V0Q3VycmVudFRpY2soMCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHRvZ2dsZSB0aGUgdGltZXI6XG4gICAgY29uc3QgdG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0KCk7XG4gICAgfSwgW2lzUnVubmluZ10pO1xuXG4gICAgLy8gLy8gQWRkIGEgXCJzdGFydFwiIGZpZWxkIHRvIGV2ZXJ5IHN0ZXAgdGhhdCB3YXMgcGFzc2VkIGluIHNvIHdlXG4gICAgLy8gLy8gY2FuIGRldGVybWluZSB3aGljaCBzdGVwIGlzIHRoZSBjdXJyZW50OlxuICAgIC8vIGNvbnN0IHN0ZXBzID0gdXNlTWVtbyhcbiAgICAvLyAgICAgKCkgPT5cbiAgICAvLyAgICAgICAgIHVzZXJTdGVwcy5tYXAoKHN0ZXAsIGkpID0+ICh7XG4gICAgLy8gICAgICAgICAgICAgLy8gV2UgY29weSB0aGUgb3JpZ2luYWwgc3RlcCBhcyBub3QgdG8gbG9zZSBhbnkgbmZvcm1hdGlvbi5cbiAgICAvLyAgICAgICAgICAgICAuLi5zdGVwLFxuXG4gICAgLy8gICAgICAgICAgICAgLy8gV2UgY29udmVydCBzdGVwIGR1cmF0aW9uLCB3aGljaCBpcyBjb25maWd1cmVkIGluIHNlY29uZHMsXG4gICAgLy8gICAgICAgICAgICAgLy8gdG8gbWlsbGlzZWNvbmRzIGhlcmUuIFRoaXMgb3ZlcndyaXRlcyB0aGUgb3JpZ2luYWwgZHVyYXRpb25cbiAgICAvLyAgICAgICAgICAgICAvLyB2YWx1ZSFcbiAgICAvLyAgICAgICAgICAgICBkdXJhdGlvbjogc3RlcC5kdXJhdGlvbiAqIDEwMDAsXG5cbiAgICAvLyAgICAgICAgICAgICAvLyBUaGUgc3RhcnQgaXMgZGV0ZXJtaW5lZCBieSB0aGUgc3VtIG9mIGFsbCBkdXJhdGlvbnMgb2ZcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGUgcHJldmlvdXMgc3RlcHMuIE9uY2UgdGhlc2UgZHVyYXRpb25zIGhhdmUgcGFzc2VkLFxuICAgIC8vICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IHN0ZXAgaXMgYWN0aXZlLiBGaW5hbGx5LCBzdWJ0cmFjdCAxMDAwIG1pbGxpc2Vjb25kc1xuICAgIC8vICAgICAgICAgICAgIC8vIHRvIGFsd2F5cyBzdGFydCBhIHJvdW5kIFwiZWFybHlcIi5cbiAgICAvLyAgICAgICAgICAgICBzdGFydDpcbiAgICAvLyAgICAgICAgICAgICAgICAgdXNlclN0ZXBzXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKHRvdGFsLCB7IGR1cmF0aW9uIH0pID0+IHRvdGFsICsgZHVyYXRpb24gKiAxMDAwLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICkgLSAxMDAwLFxuICAgIC8vICAgICAgICAgfSkpLFxuICAgIC8vICAgICBbdXNlclN0ZXBzLmxlbmd0aF1cbiAgICAvLyApO1xuXG4gICAgLy8gLy8gQ29tcHV0ZSB0aGUgdG90YWwgdGltZSwgc28gd2UgY2FuIGRldGVybWluZSB3aGV0aGVyIHRoZSB0aW1lciBpcyBkb25lOlxuICAgIC8vIGNvbnN0IHRvdGFsVGltZSA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+XG4gICAgLy8gICAgICAgICB1c2VyU3RlcHMucmVkdWNlKFxuICAgIC8vICAgICAgICAgICAgICh0b3RhbCwgeyBkdXJhdGlvbiB9KSA9PiB0b3RhbCArIGR1cmF0aW9uICogMTAwMCxcbiAgICAvLyAgICAgICAgICAgICAwXG4gICAgLy8gICAgICAgICApLFxuICAgIC8vICAgICBbdXNlclN0ZXBzLmxlbmd0aF1cbiAgICAvLyApO1xuXG4gICAgLy8gLy8gS2VlcCB0aGUgZWxhcHNlZCBtaWxsaXNlY29uZHMgaW4gc3RhdGU6XG4gICAgLy8gY29uc3QgW2VsYXBzZWQsIHNldEVsYXBzZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICAvLyAvLyBLZWVwIHdoZXRoZXIgdGhlIHRpbWVyIGlzIHJ1bm5pbmcgaW4gc3RhdGU6XG4gICAgLy8gY29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgdGltZSByZW1haW5pbmc6XG4gICAgLy8gY29uc3QgcmVtYWluaW5nID0gdXNlTWVtbygoKSA9PiB0b3RhbFRpbWUgLSBlbGFwc2VkLCBbZWxhcHNlZF0pO1xuXG4gICAgLy8gLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHRpbWVyIGlzIGNvbXBsZXRlOlxuICAgIC8vIGNvbnN0IGlzQ29tcGxldGUgPSB1c2VNZW1vKCgpID0+IHJlbWFpbmluZyA9PT0gMCwgW3JlbWFpbmluZ10pO1xuXG4gICAgLy8gLy8gQ29tcHV0ZSB0aGUgY3VycmVudCBzdGVwJ3MgaW5kZXguIFRoaXMgaW5kZXggaXMgZXF1YWwgdG8gdGhlXG4gICAgLy8gLy8gaW5kZXggb2YgdGhlIGZpcnN0IHN0ZXAgdGhhdCB3ZSBmaW5kIG9mIHdoaWNoIHdlIGhhdmUgbm90IHlldFxuICAgIC8vIC8vIHBhc3NlZCB0aGUgc3RhcnQgbW9tZW50LCBtaW51cyBvbmUuXG4gICAgLy8gY29uc3QgY3VycmVudFN0ZXBJbmRleCA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+IHN0ZXBzLmZpbmRJbmRleCgoeyBzdGFydCB9KSA9PiBlbGFwc2VkIDwgc3RhcnQpIC0gMSxcbiAgICAvLyAgICAgW2VsYXBzZWRdXG4gICAgLy8gKTtcblxuICAgIC8vIC8vIENvbXB1dGUgdGhlIGFjdHVhbCBjdXJyZW50IHN0ZXA6XG4gICAgLy8gY29uc3QgY3VycmVudFN0ZXAgPSB1c2VNZW1vKCgpID0+IHN0ZXBzW2N1cnJlbnRTdGVwSW5kZXhdLCBbXG4gICAgLy8gICAgIGN1cnJlbnRTdGVwSW5kZXgsXG4gICAgLy8gXSk7XG5cbiAgICAvLyAvLyBDb21wdXRlIGhvdyBtdWNoIHRpbWUgaXMgcmVtYWluaW5nIGluIHRoZSBjdXJyZW50IHN0ZXBcbiAgICAvLyBjb25zdCBjdXJyZW50U3RlcFJlbWFpbmluZyA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+IHN0ZXBzW2N1cnJlbnRTdGVwSW5kZXhdLmR1cmF0aW9uLFxuICAgIC8vICAgICBbY3VycmVudFN0ZXBJbmRleCwgZWxhcHNlZF1cbiAgICAvLyApO1xuXG4gICAgLy8gLy8gUnVuIHRoZSB0aW1lcjpcbiAgICAvLyBjb25zdCB0aWNrID0gKCkgPT4gc2V0RWxhcHNlZCgoZWxhcHNlZCkgPT4gKGVsYXBzZWQgKz0gU1RFUFNJWkUpKTtcbiAgICAvLyB1c2VJbnRlcnZhbCh0aWNrLCBpc1J1bm5pbmcgJiYgIWlzQ29tcGxldGUgPyBTVEVQU0laRSA6IG51bGwpO1xuXG4gICAgLy8gRXhwb3NlIHNvbWUgaGVscGVyIG1ldGhvZHMgdG8gbWFuaXB1bGF0ZSB0aGUgdGltZXI6XG4gICAgLy8gY29uc3QgcGF1c2UgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRJc1J1bm5pbmcoZmFsc2UpLCBbXSk7XG4gICAgLy8gY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgLy8gICAgIHNldEVsYXBzZWQoMCk7XG4gICAgLy8gICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgLy8gfSwgW10pO1xuICAgIC8vIGNvbnN0IHN0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0SXNSdW5uaW5nKHRydWUpLCBbXSk7XG4gICAgLy8gY29uc3QgdG9nZ2xlID0gdXNlQ2FsbGJhY2soXG4gICAgLy8gICAgICgpID0+IHNldElzUnVubmluZygoaXNSdW5uaW5nKSA9PiAhaXNSdW5uaW5nKSxcbiAgICAvLyAgICAgW11cbiAgICAvLyApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWxhcHNlZCxcbiAgICAgICAgaXNSdW5uaW5nLFxuICAgICAgICByZW1haW5pbmcsXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3RvcCxcbiAgICAgICAgdG9nZ2xlLFxuICAgIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==