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
  // const totalTime = useMemo(
  //     () => sum(valuesForKey(userSteps, "duration")) * 1000,
  //     [userSteps.length]
  // );
  // Compute the remaining time:
  // const remaining = useMemo(() => totalTime - elapsed, [elapsed]);
  // Every tick, update the current tick in state:


  var tick = function tick() {
    return setCurrentTick(Date.now());
  }; // Tick every 100 millisecons when timer is running:


  Object(_hooks_use_interval__WEBPACK_IMPORTED_MODULE_2__["useInterval"])(tick, isRunning ? 100 : null); // Update the total elapsed time by adding the difference
  // between the current and the previous tick to the previous total:

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isRunning) return;
    setElapsed(function (elapsed) {
      return !previousTick ? 0 : elapsed + (currentTick - previousTick);
    });
  }); // Expose a method to start the timer:

  var start = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsRunning(true);
    setCurrentTick(Date.now());
  }, []); // Expose a method to stop (pause) the timer:

  var stop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsRunning(false);
    setCurrentTick(Date.now());
  }, []); // Expose a method to reset the timer:

  var reset = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsRunning(false); // setElapsed(0);
  }, []); // // Add a "start" field to every step that was passed in so we
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
    // delta: delta?.curr - delta?.prev,
    elapsed: elapsed,
    isRunning: isRunning,
    // remaining,
    reset: reset,
    start: start,
    stop: stop
  };
};

_s(useTimer, "nd5c/lagfsgLd5MVNdTOfV/1uFU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXRpbWVyLnRzIl0sIm5hbWVzIjpbInVzZVRpbWVyIiwidXNlclN0ZXBzIiwidXNlU3RhdGUiLCJpc1J1bm5pbmciLCJzZXRJc1J1bm5pbmciLCJjdXJyZW50VGljayIsInNldEN1cnJlbnRUaWNrIiwicHJldmlvdXNUaWNrIiwidXNlUHJldmlvdXMiLCJlbGFwc2VkIiwic2V0RWxhcHNlZCIsInRpY2siLCJEYXRlIiwibm93IiwidXNlSW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJzdGFydCIsInVzZUNhbGxiYWNrIiwic3RvcCIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFRTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxTQUFELEVBQXVCO0FBQUE7O0FBQzNDO0FBRDJDLGtCQUVUQyxzREFBUSxDQUFDLEtBQUQsQ0FGQztBQUFBLE1BRXBDQyxTQUZvQztBQUFBLE1BRXpCQyxZQUZ5QixpQkFJM0M7QUFDQTs7O0FBTDJDLG1CQU1MRixzREFBUSxDQUFDLENBQUQsQ0FOSDtBQUFBLE1BTXBDRyxXQU5vQztBQUFBLE1BTXZCQyxjQU51Qjs7QUFPM0MsTUFBTUMsWUFBWSxHQUFHQywrREFBVyxDQUFDSCxXQUFELENBQWhDLENBUDJDLENBUTNDO0FBRUE7O0FBVjJDLG1CQVdiSCxzREFBUSxDQUFDLENBQUQsQ0FYSztBQUFBLE1BV3BDTyxPQVhvQztBQUFBLE1BVzNCQyxVQVgyQixrQkFhM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxXQUFNTCxjQUFjLENBQUNNLElBQUksQ0FBQ0MsR0FBTCxFQUFELENBQXBCO0FBQUEsR0FBYixDQXZCMkMsQ0F5QjNDOzs7QUFDQUMseUVBQVcsQ0FBQ0gsSUFBRCxFQUFPUixTQUFTLEdBQUcsR0FBSCxHQUFTLElBQXpCLENBQVgsQ0ExQjJDLENBNEIzQztBQUNBOztBQUNBWSx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLENBQUNaLFNBQUwsRUFBZ0I7QUFFaEJPLGNBQVUsQ0FBQyxVQUFDRCxPQUFEO0FBQUEsYUFDUCxDQUFDRixZQUFELEdBQWdCLENBQWhCLEdBQW9CRSxPQUFPLElBQUlKLFdBQVcsR0FBR0UsWUFBbEIsQ0FEcEI7QUFBQSxLQUFELENBQVY7QUFHSCxHQU5RLENBQVQsQ0E5QjJDLENBc0MzQzs7QUFDQSxNQUFNUyxLQUFLLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUM1QmIsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDQUUsa0JBQWMsQ0FBQ00sSUFBSSxDQUFDQyxHQUFMLEVBQUQsQ0FBZDtBQUNILEdBSHdCLEVBR3RCLEVBSHNCLENBQXpCLENBdkMyQyxDQTRDM0M7O0FBQ0EsTUFBTUssSUFBSSxHQUFHRCx5REFBVyxDQUFDLFlBQU07QUFDM0JiLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FFLGtCQUFjLENBQUNNLElBQUksQ0FBQ0MsR0FBTCxFQUFELENBQWQ7QUFDSCxHQUh1QixFQUdyQixFQUhxQixDQUF4QixDQTdDMkMsQ0FrRDNDOztBQUNBLE1BQU1NLEtBQUssR0FBR0YseURBQVcsQ0FBQyxZQUFNO0FBQzVCYixnQkFBWSxDQUFDLEtBQUQsQ0FBWixDQUQ0QixDQUU1QjtBQUNILEdBSHdCLEVBR3RCLEVBSHNCLENBQXpCLENBbkQyQyxDQXdEM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQU87QUFDSDtBQUNBSyxXQUFPLEVBQVBBLE9BRkc7QUFHSE4sYUFBUyxFQUFUQSxTQUhHO0FBSUg7QUFDQWdCLFNBQUssRUFBTEEsS0FMRztBQU1ISCxTQUFLLEVBQUxBLEtBTkc7QUFPSEUsUUFBSSxFQUFKQTtBQVBHLEdBQVA7QUFTSCxDQXRKTTs7R0FBTWxCLFE7VUFPWVEsdUQsRUFtQnJCTSwrRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGUvW2lkXS90aW1lci5mNjBkNDYzZjE1MTRkYWJkNjA4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURlbHRhLCB1c2VQcmV2aW91cyB9IGZyb20gXCJyZWFjdC1kZWx0YVwiO1xuXG5pbXBvcnQgeyB1c2VJbnRlcnZhbCB9IGZyb20gXCIuLi9ob29rcy91c2UtaW50ZXJ2YWxcIjtcbmltcG9ydCB7IHN1bSwgdmFsdWVzRm9yS2V5IH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIjtcblxudHlwZSBTdGVwID0ge1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VUaW1lciA9ICh1c2VyU3RlcHM6IFN0ZXBbXSkgPT4ge1xuICAgIC8vIFN0b3JlIHdoZXRoZXIgdGhlIHRpbWVyIGlzIHJ1bm5pbmcgaW4gc3RhdGU6XG4gICAgY29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vIFN0b3JlIGJvdGggY3VycmVudCBhbmQgcHJldmlvdXMgdGljayB0aW1lc3RhbXBzIHNvIHdlIGNhblxuICAgIC8vIGNvbXB1dGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGVtOlxuICAgIGNvbnN0IFtjdXJyZW50VGljaywgc2V0Q3VycmVudFRpY2tdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgcHJldmlvdXNUaWNrID0gdXNlUHJldmlvdXMoY3VycmVudFRpY2spO1xuICAgIC8vIGNvbnN0IGRlbHRhID0gdXNlRGVsdGEoY3VycmVudFRpY2spO1xuXG4gICAgLy8gU3RvcmUgdG90YWwgZWxhcHNlZCB0aW1lIGluIHN0YXRlOlxuICAgIGNvbnN0IFtlbGFwc2VkLCBzZXRFbGFwc2VkXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgdG90YWwgdGltZSBuZWVkZWQgdG8gY29tcGxldGUgdGhpcyB0aW1lcjpcbiAgICAvLyBjb25zdCB0b3RhbFRpbWUgPSB1c2VNZW1vKFxuICAgIC8vICAgICAoKSA9PiBzdW0odmFsdWVzRm9yS2V5KHVzZXJTdGVwcywgXCJkdXJhdGlvblwiKSkgKiAxMDAwLFxuICAgIC8vICAgICBbdXNlclN0ZXBzLmxlbmd0aF1cbiAgICAvLyApO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgcmVtYWluaW5nIHRpbWU6XG4gICAgLy8gY29uc3QgcmVtYWluaW5nID0gdXNlTWVtbygoKSA9PiB0b3RhbFRpbWUgLSBlbGFwc2VkLCBbZWxhcHNlZF0pO1xuXG4gICAgLy8gRXZlcnkgdGljaywgdXBkYXRlIHRoZSBjdXJyZW50IHRpY2sgaW4gc3RhdGU6XG4gICAgY29uc3QgdGljayA9ICgpID0+IHNldEN1cnJlbnRUaWNrKERhdGUubm93KCkpO1xuXG4gICAgLy8gVGljayBldmVyeSAxMDAgbWlsbGlzZWNvbnMgd2hlbiB0aW1lciBpcyBydW5uaW5nOlxuICAgIHVzZUludGVydmFsKHRpY2ssIGlzUnVubmluZyA/IDEwMCA6IG51bGwpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBlbGFwc2VkIHRpbWUgYnkgYWRkaW5nIHRoZSBkaWZmZXJlbmNlXG4gICAgLy8gYmV0d2VlbiB0aGUgY3VycmVudCBhbmQgdGhlIHByZXZpb3VzIHRpY2sgdG8gdGhlIHByZXZpb3VzIHRvdGFsOlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghaXNSdW5uaW5nKSByZXR1cm47XG5cbiAgICAgICAgc2V0RWxhcHNlZCgoZWxhcHNlZCkgPT5cbiAgICAgICAgICAgICFwcmV2aW91c1RpY2sgPyAwIDogZWxhcHNlZCArIChjdXJyZW50VGljayAtIHByZXZpb3VzVGljaylcbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byBzdGFydCB0aGUgdGltZXI6XG4gICAgY29uc3Qgc3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyh0cnVlKTtcbiAgICAgICAgc2V0Q3VycmVudFRpY2soRGF0ZS5ub3coKSk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHN0b3AgKHBhdXNlKSB0aGUgdGltZXI6XG4gICAgY29uc3Qgc3RvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0Q3VycmVudFRpY2soRGF0ZS5ub3coKSk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHJlc2V0IHRoZSB0aW1lcjpcbiAgICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICAgICAgLy8gc2V0RWxhcHNlZCgwKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyAvLyBBZGQgYSBcInN0YXJ0XCIgZmllbGQgdG8gZXZlcnkgc3RlcCB0aGF0IHdhcyBwYXNzZWQgaW4gc28gd2VcbiAgICAvLyAvLyBjYW4gZGV0ZXJtaW5lIHdoaWNoIHN0ZXAgaXMgdGhlIGN1cnJlbnQ6XG4gICAgLy8gY29uc3Qgc3RlcHMgPSB1c2VNZW1vKFxuICAgIC8vICAgICAoKSA9PlxuICAgIC8vICAgICAgICAgdXNlclN0ZXBzLm1hcCgoc3RlcCwgaSkgPT4gKHtcbiAgICAvLyAgICAgICAgICAgICAvLyBXZSBjb3B5IHRoZSBvcmlnaW5hbCBzdGVwIGFzIG5vdCB0byBsb3NlIGFueSBuZm9ybWF0aW9uLlxuICAgIC8vICAgICAgICAgICAgIC4uLnN0ZXAsXG5cbiAgICAvLyAgICAgICAgICAgICAvLyBXZSBjb252ZXJ0IHN0ZXAgZHVyYXRpb24sIHdoaWNoIGlzIGNvbmZpZ3VyZWQgaW4gc2Vjb25kcyxcbiAgICAvLyAgICAgICAgICAgICAvLyB0byBtaWxsaXNlY29uZHMgaGVyZS4gVGhpcyBvdmVyd3JpdGVzIHRoZSBvcmlnaW5hbCBkdXJhdGlvblxuICAgIC8vICAgICAgICAgICAgIC8vIHZhbHVlIVxuICAgIC8vICAgICAgICAgICAgIGR1cmF0aW9uOiBzdGVwLmR1cmF0aW9uICogMTAwMCxcblxuICAgIC8vICAgICAgICAgICAgIC8vIFRoZSBzdGFydCBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBzdW0gb2YgYWxsIGR1cmF0aW9ucyBvZlxuICAgIC8vICAgICAgICAgICAgIC8vIHRoZSBwcmV2aW91cyBzdGVwcy4gT25jZSB0aGVzZSBkdXJhdGlvbnMgaGF2ZSBwYXNzZWQsXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgc3RlcCBpcyBhY3RpdmUuIEZpbmFsbHksIHN1YnRyYWN0IDEwMDAgbWlsbGlzZWNvbmRzXG4gICAgLy8gICAgICAgICAgICAgLy8gdG8gYWx3YXlzIHN0YXJ0IGEgcm91bmQgXCJlYXJseVwiLlxuICAgIC8vICAgICAgICAgICAgIHN0YXJ0OlxuICAgIC8vICAgICAgICAgICAgICAgICB1c2VyU3RlcHNcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBpKVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAodG90YWwsIHsgZHVyYXRpb24gfSkgPT4gdG90YWwgKyBkdXJhdGlvbiAqIDEwMDAsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgKSAtIDEwMDAsXG4gICAgLy8gICAgICAgICB9KSksXG4gICAgLy8gICAgIFt1c2VyU3RlcHMubGVuZ3RoXVxuICAgIC8vICk7XG5cbiAgICAvLyAvLyBDb21wdXRlIHRoZSB0b3RhbCB0aW1lLCBzbyB3ZSBjYW4gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHRpbWVyIGlzIGRvbmU6XG4gICAgLy8gY29uc3QgdG90YWxUaW1lID0gdXNlTWVtbyhcbiAgICAvLyAgICAgKCkgPT5cbiAgICAvLyAgICAgICAgIHVzZXJTdGVwcy5yZWR1Y2UoXG4gICAgLy8gICAgICAgICAgICAgKHRvdGFsLCB7IGR1cmF0aW9uIH0pID0+IHRvdGFsICsgZHVyYXRpb24gKiAxMDAwLFxuICAgIC8vICAgICAgICAgICAgIDBcbiAgICAvLyAgICAgICAgICksXG4gICAgLy8gICAgIFt1c2VyU3RlcHMubGVuZ3RoXVxuICAgIC8vICk7XG5cbiAgICAvLyAvLyBLZWVwIHRoZSBlbGFwc2VkIG1pbGxpc2Vjb25kcyBpbiBzdGF0ZTpcbiAgICAvLyBjb25zdCBbZWxhcHNlZCwgc2V0RWxhcHNlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIC8vIC8vIEtlZXAgd2hldGhlciB0aGUgdGltZXIgaXMgcnVubmluZyBpbiBzdGF0ZTpcbiAgICAvLyBjb25zdCBbaXNSdW5uaW5nLCBzZXRJc1J1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gLy8gQ2FsY3VsYXRlIHRoZSB0b3RhbCB0aW1lIHJlbWFpbmluZzpcbiAgICAvLyBjb25zdCByZW1haW5pbmcgPSB1c2VNZW1vKCgpID0+IHRvdGFsVGltZSAtIGVsYXBzZWQsIFtlbGFwc2VkXSk7XG5cbiAgICAvLyAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgdGltZXIgaXMgY29tcGxldGU6XG4gICAgLy8gY29uc3QgaXNDb21wbGV0ZSA9IHVzZU1lbW8oKCkgPT4gcmVtYWluaW5nID09PSAwLCBbcmVtYWluaW5nXSk7XG5cbiAgICAvLyAvLyBDb21wdXRlIHRoZSBjdXJyZW50IHN0ZXAncyBpbmRleC4gVGhpcyBpbmRleCBpcyBlcXVhbCB0byB0aGVcbiAgICAvLyAvLyBpbmRleCBvZiB0aGUgZmlyc3Qgc3RlcCB0aGF0IHdlIGZpbmQgb2Ygd2hpY2ggd2UgaGF2ZSBub3QgeWV0XG4gICAgLy8gLy8gcGFzc2VkIHRoZSBzdGFydCBtb21lbnQsIG1pbnVzIG9uZS5cbiAgICAvLyBjb25zdCBjdXJyZW50U3RlcEluZGV4ID0gdXNlTWVtbyhcbiAgICAvLyAgICAgKCkgPT4gc3RlcHMuZmluZEluZGV4KCh7IHN0YXJ0IH0pID0+IGVsYXBzZWQgPCBzdGFydCkgLSAxLFxuICAgIC8vICAgICBbZWxhcHNlZF1cbiAgICAvLyApO1xuXG4gICAgLy8gLy8gQ29tcHV0ZSB0aGUgYWN0dWFsIGN1cnJlbnQgc3RlcDpcbiAgICAvLyBjb25zdCBjdXJyZW50U3RlcCA9IHVzZU1lbW8oKCkgPT4gc3RlcHNbY3VycmVudFN0ZXBJbmRleF0sIFtcbiAgICAvLyAgICAgY3VycmVudFN0ZXBJbmRleCxcbiAgICAvLyBdKTtcblxuICAgIC8vIC8vIENvbXB1dGUgaG93IG11Y2ggdGltZSBpcyByZW1haW5pbmcgaW4gdGhlIGN1cnJlbnQgc3RlcFxuICAgIC8vIGNvbnN0IGN1cnJlbnRTdGVwUmVtYWluaW5nID0gdXNlTWVtbyhcbiAgICAvLyAgICAgKCkgPT4gc3RlcHNbY3VycmVudFN0ZXBJbmRleF0uZHVyYXRpb24sXG4gICAgLy8gICAgIFtjdXJyZW50U3RlcEluZGV4LCBlbGFwc2VkXVxuICAgIC8vICk7XG5cbiAgICAvLyAvLyBSdW4gdGhlIHRpbWVyOlxuICAgIC8vIGNvbnN0IHRpY2sgPSAoKSA9PiBzZXRFbGFwc2VkKChlbGFwc2VkKSA9PiAoZWxhcHNlZCArPSBTVEVQU0laRSkpO1xuICAgIC8vIHVzZUludGVydmFsKHRpY2ssIGlzUnVubmluZyAmJiAhaXNDb21wbGV0ZSA/IFNURVBTSVpFIDogbnVsbCk7XG5cbiAgICAvLyBFeHBvc2Ugc29tZSBoZWxwZXIgbWV0aG9kcyB0byBtYW5pcHVsYXRlIHRoZSB0aW1lcjpcbiAgICAvLyBjb25zdCBwYXVzZSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldElzUnVubmluZyhmYWxzZSksIFtdKTtcbiAgICAvLyBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAvLyAgICAgc2V0RWxhcHNlZCgwKTtcbiAgICAvLyAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICAvLyB9LCBbXSk7XG4gICAgLy8gY29uc3Qgc3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRJc1J1bm5pbmcodHJ1ZSksIFtdKTtcbiAgICAvLyBjb25zdCB0b2dnbGUgPSB1c2VDYWxsYmFjayhcbiAgICAvLyAgICAgKCkgPT4gc2V0SXNSdW5uaW5nKChpc1J1bm5pbmcpID0+ICFpc1J1bm5pbmcpLFxuICAgIC8vICAgICBbXVxuICAgIC8vICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBkZWx0YTogZGVsdGE/LmN1cnIgLSBkZWx0YT8ucHJldixcbiAgICAgICAgZWxhcHNlZCxcbiAgICAgICAgaXNSdW5uaW5nLFxuICAgICAgICAvLyByZW1haW5pbmcsXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3RvcCxcbiAgICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=