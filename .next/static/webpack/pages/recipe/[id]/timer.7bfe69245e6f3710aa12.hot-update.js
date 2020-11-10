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
  // const [elapsed, setElapsed] = useState(0);

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0),
      elapsed = _useRef.current; // Compute the total time needed to complete this timer:
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
    if (previousTick) {
      console.log("increased elapsed with ", currentTick - previousTick);
      elapsed += currentTick - previousTick;
    }
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

_s(useTimer, "kmvk45hyn+hCk2jfjI4HFNIlW/o=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXRpbWVyLnRzIl0sIm5hbWVzIjpbInVzZVRpbWVyIiwidXNlclN0ZXBzIiwidXNlU3RhdGUiLCJpc1J1bm5pbmciLCJzZXRJc1J1bm5pbmciLCJjdXJyZW50VGljayIsInNldEN1cnJlbnRUaWNrIiwicHJldmlvdXNUaWNrIiwidXNlUHJldmlvdXMiLCJ1c2VSZWYiLCJlbGFwc2VkIiwiY3VycmVudCIsInRpY2siLCJEYXRlIiwibm93IiwidXNlSW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJ1c2VDYWxsYmFjayIsInN0b3AiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBUU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsU0FBRCxFQUF1QjtBQUFBOztBQUMzQztBQUQyQyxrQkFFVEMsc0RBQVEsQ0FBQyxLQUFELENBRkM7QUFBQSxNQUVwQ0MsU0FGb0M7QUFBQSxNQUV6QkMsWUFGeUIsaUJBSTNDO0FBQ0E7OztBQUwyQyxtQkFNTEYsc0RBQVEsQ0FBQyxDQUFELENBTkg7QUFBQSxNQU1wQ0csV0FOb0M7QUFBQSxNQU12QkMsY0FOdUI7O0FBTzNDLE1BQU1DLFlBQVksR0FBR0MsK0RBQVcsQ0FBQ0gsV0FBRCxDQUFoQyxDQVAyQyxDQVEzQztBQUVBO0FBQ0E7O0FBWDJDLGdCQVloQkksb0RBQU0sQ0FBQyxDQUFELENBWlU7QUFBQSxNQVk1QkMsT0FaNEIsV0FZckNDLE9BWnFDLEVBYzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUNBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsV0FBTU4sY0FBYyxDQUFDTyxJQUFJLENBQUNDLEdBQUwsRUFBRCxDQUFwQjtBQUFBLEdBQWIsQ0F4QjJDLENBMEIzQzs7O0FBQ0FDLHlFQUFXLENBQUNILElBQUQsRUFBT1QsU0FBUyxHQUFHLEdBQUgsR0FBUyxJQUF6QixDQUFYLENBM0IyQyxDQTZCM0M7QUFDQTs7QUFDQWEseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVQsWUFBSixFQUFrQjtBQUNkVSxhQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q2IsV0FBVyxHQUFHRSxZQUFyRDtBQUNBRyxhQUFPLElBQUlMLFdBQVcsR0FBR0UsWUFBekI7QUFDSDtBQUNKLEdBTFEsQ0FBVCxDQS9CMkMsQ0FzQzNDOztBQUNBLE1BQU1ZLEtBQUssR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQzVCaEIsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDQUUsa0JBQWMsQ0FBQ08sSUFBSSxDQUFDQyxHQUFMLEVBQUQsQ0FBZDtBQUNILEdBSHdCLEVBR3RCLEVBSHNCLENBQXpCLENBdkMyQyxDQTRDM0M7O0FBQ0EsTUFBTU8sSUFBSSxHQUFHRCx5REFBVyxDQUFDLFlBQU07QUFDM0JoQixnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBRSxrQkFBYyxDQUFDTyxJQUFJLENBQUNDLEdBQUwsRUFBRCxDQUFkO0FBQ0gsR0FIdUIsRUFHckIsRUFIcUIsQ0FBeEIsQ0E3QzJDLENBa0QzQzs7QUFDQSxNQUFNUSxLQUFLLEdBQUdGLHlEQUFXLENBQUMsWUFBTTtBQUM1QmhCLGdCQUFZLENBQUMsS0FBRCxDQUFaLENBRDRCLENBRTVCO0FBQ0gsR0FId0IsRUFHdEIsRUFIc0IsQ0FBekIsQ0FuRDJDLENBd0QzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBTztBQUNIO0FBQ0FNLFdBQU8sRUFBUEEsT0FGRztBQUdIUCxhQUFTLEVBQVRBLFNBSEc7QUFJSDtBQUNBbUIsU0FBSyxFQUFMQSxLQUxHO0FBTUhILFNBQUssRUFBTEEsS0FORztBQU9IRSxRQUFJLEVBQUpBO0FBUEcsR0FBUDtBQVNILENBdEpNOztHQUFNckIsUTtVQU9ZUSx1RCxFQW9CckJPLCtEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZS9baWRdL3RpbWVyLjdiZmU2OTI0NWU2ZjM3MTBhYTEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEZWx0YSwgdXNlUHJldmlvdXMgfSBmcm9tIFwicmVhY3QtZGVsdGFcIjtcblxuaW1wb3J0IHsgdXNlSW50ZXJ2YWwgfSBmcm9tIFwiLi4vaG9va3MvdXNlLWludGVydmFsXCI7XG5pbXBvcnQgeyBzdW0sIHZhbHVlc0ZvcktleSB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJzXCI7XG5cbnR5cGUgU3RlcCA9IHtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGltZXIgPSAodXNlclN0ZXBzOiBTdGVwW10pID0+IHtcbiAgICAvLyBTdG9yZSB3aGV0aGVyIHRoZSB0aW1lciBpcyBydW5uaW5nIGluIHN0YXRlOlxuICAgIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyBTdG9yZSBib3RoIGN1cnJlbnQgYW5kIHByZXZpb3VzIHRpY2sgdGltZXN0YW1wcyBzbyB3ZSBjYW5cbiAgICAvLyBjb21wdXRlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlbTpcbiAgICBjb25zdCBbY3VycmVudFRpY2ssIHNldEN1cnJlbnRUaWNrXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHByZXZpb3VzVGljayA9IHVzZVByZXZpb3VzKGN1cnJlbnRUaWNrKTtcbiAgICAvLyBjb25zdCBkZWx0YSA9IHVzZURlbHRhKGN1cnJlbnRUaWNrKTtcblxuICAgIC8vIFN0b3JlIHRvdGFsIGVsYXBzZWQgdGltZSBpbiBzdGF0ZTpcbiAgICAvLyBjb25zdCBbZWxhcHNlZCwgc2V0RWxhcHNlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBsZXQgeyBjdXJyZW50OiBlbGFwc2VkIH0gPSB1c2VSZWYoMCk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSB0b3RhbCB0aW1lIG5lZWRlZCB0byBjb21wbGV0ZSB0aGlzIHRpbWVyOlxuICAgIC8vIGNvbnN0IHRvdGFsVGltZSA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+IHN1bSh2YWx1ZXNGb3JLZXkodXNlclN0ZXBzLCBcImR1cmF0aW9uXCIpKSAqIDEwMDAsXG4gICAgLy8gICAgIFt1c2VyU3RlcHMubGVuZ3RoXVxuICAgIC8vICk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSByZW1haW5pbmcgdGltZTpcbiAgICAvLyBjb25zdCByZW1haW5pbmcgPSB1c2VNZW1vKCgpID0+IHRvdGFsVGltZSAtIGVsYXBzZWQsIFtlbGFwc2VkXSk7XG5cbiAgICAvLyBFdmVyeSB0aWNrLCB1cGRhdGUgdGhlIGN1cnJlbnQgdGljayBpbiBzdGF0ZTpcbiAgICBjb25zdCB0aWNrID0gKCkgPT4gc2V0Q3VycmVudFRpY2soRGF0ZS5ub3coKSk7XG5cbiAgICAvLyBUaWNrIGV2ZXJ5IDEwMCBtaWxsaXNlY29ucyB3aGVuIHRpbWVyIGlzIHJ1bm5pbmc6XG4gICAgdXNlSW50ZXJ2YWwodGljaywgaXNSdW5uaW5nID8gMTAwIDogbnVsbCk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHRvdGFsIGVsYXBzZWQgdGltZSBieSBhZGRpbmcgdGhlIGRpZmZlcmVuY2VcbiAgICAvLyBiZXR3ZWVuIHRoZSBjdXJyZW50IGFuZCB0aGUgcHJldmlvdXMgdGljayB0byB0aGUgcHJldmlvdXMgdG90YWw6XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByZXZpb3VzVGljaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmNyZWFzZWQgZWxhcHNlZCB3aXRoIFwiLCBjdXJyZW50VGljayAtIHByZXZpb3VzVGljayk7XG4gICAgICAgICAgICBlbGFwc2VkICs9IGN1cnJlbnRUaWNrIC0gcHJldmlvdXNUaWNrO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBFeHBvc2UgYSBtZXRob2QgdG8gc3RhcnQgdGhlIHRpbWVyOlxuICAgIGNvbnN0IHN0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRJc1J1bm5pbmcodHJ1ZSk7XG4gICAgICAgIHNldEN1cnJlbnRUaWNrKERhdGUubm93KCkpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byBzdG9wIChwYXVzZSkgdGhlIHRpbWVyOlxuICAgIGNvbnN0IHN0b3AgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgIHNldEN1cnJlbnRUaWNrKERhdGUubm93KCkpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byByZXNldCB0aGUgdGltZXI6XG4gICAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgIC8vIHNldEVsYXBzZWQoMCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gLy8gQWRkIGEgXCJzdGFydFwiIGZpZWxkIHRvIGV2ZXJ5IHN0ZXAgdGhhdCB3YXMgcGFzc2VkIGluIHNvIHdlXG4gICAgLy8gLy8gY2FuIGRldGVybWluZSB3aGljaCBzdGVwIGlzIHRoZSBjdXJyZW50OlxuICAgIC8vIGNvbnN0IHN0ZXBzID0gdXNlTWVtbyhcbiAgICAvLyAgICAgKCkgPT5cbiAgICAvLyAgICAgICAgIHVzZXJTdGVwcy5tYXAoKHN0ZXAsIGkpID0+ICh7XG4gICAgLy8gICAgICAgICAgICAgLy8gV2UgY29weSB0aGUgb3JpZ2luYWwgc3RlcCBhcyBub3QgdG8gbG9zZSBhbnkgbmZvcm1hdGlvbi5cbiAgICAvLyAgICAgICAgICAgICAuLi5zdGVwLFxuXG4gICAgLy8gICAgICAgICAgICAgLy8gV2UgY29udmVydCBzdGVwIGR1cmF0aW9uLCB3aGljaCBpcyBjb25maWd1cmVkIGluIHNlY29uZHMsXG4gICAgLy8gICAgICAgICAgICAgLy8gdG8gbWlsbGlzZWNvbmRzIGhlcmUuIFRoaXMgb3ZlcndyaXRlcyB0aGUgb3JpZ2luYWwgZHVyYXRpb25cbiAgICAvLyAgICAgICAgICAgICAvLyB2YWx1ZSFcbiAgICAvLyAgICAgICAgICAgICBkdXJhdGlvbjogc3RlcC5kdXJhdGlvbiAqIDEwMDAsXG5cbiAgICAvLyAgICAgICAgICAgICAvLyBUaGUgc3RhcnQgaXMgZGV0ZXJtaW5lZCBieSB0aGUgc3VtIG9mIGFsbCBkdXJhdGlvbnMgb2ZcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGUgcHJldmlvdXMgc3RlcHMuIE9uY2UgdGhlc2UgZHVyYXRpb25zIGhhdmUgcGFzc2VkLFxuICAgIC8vICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IHN0ZXAgaXMgYWN0aXZlLiBGaW5hbGx5LCBzdWJ0cmFjdCAxMDAwIG1pbGxpc2Vjb25kc1xuICAgIC8vICAgICAgICAgICAgIC8vIHRvIGFsd2F5cyBzdGFydCBhIHJvdW5kIFwiZWFybHlcIi5cbiAgICAvLyAgICAgICAgICAgICBzdGFydDpcbiAgICAvLyAgICAgICAgICAgICAgICAgdXNlclN0ZXBzXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKHRvdGFsLCB7IGR1cmF0aW9uIH0pID0+IHRvdGFsICsgZHVyYXRpb24gKiAxMDAwLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICkgLSAxMDAwLFxuICAgIC8vICAgICAgICAgfSkpLFxuICAgIC8vICAgICBbdXNlclN0ZXBzLmxlbmd0aF1cbiAgICAvLyApO1xuXG4gICAgLy8gLy8gQ29tcHV0ZSB0aGUgdG90YWwgdGltZSwgc28gd2UgY2FuIGRldGVybWluZSB3aGV0aGVyIHRoZSB0aW1lciBpcyBkb25lOlxuICAgIC8vIGNvbnN0IHRvdGFsVGltZSA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+XG4gICAgLy8gICAgICAgICB1c2VyU3RlcHMucmVkdWNlKFxuICAgIC8vICAgICAgICAgICAgICh0b3RhbCwgeyBkdXJhdGlvbiB9KSA9PiB0b3RhbCArIGR1cmF0aW9uICogMTAwMCxcbiAgICAvLyAgICAgICAgICAgICAwXG4gICAgLy8gICAgICAgICApLFxuICAgIC8vICAgICBbdXNlclN0ZXBzLmxlbmd0aF1cbiAgICAvLyApO1xuXG4gICAgLy8gLy8gS2VlcCB0aGUgZWxhcHNlZCBtaWxsaXNlY29uZHMgaW4gc3RhdGU6XG4gICAgLy8gY29uc3QgW2VsYXBzZWQsIHNldEVsYXBzZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICAvLyAvLyBLZWVwIHdoZXRoZXIgdGhlIHRpbWVyIGlzIHJ1bm5pbmcgaW4gc3RhdGU6XG4gICAgLy8gY29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgdGltZSByZW1haW5pbmc6XG4gICAgLy8gY29uc3QgcmVtYWluaW5nID0gdXNlTWVtbygoKSA9PiB0b3RhbFRpbWUgLSBlbGFwc2VkLCBbZWxhcHNlZF0pO1xuXG4gICAgLy8gLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHRpbWVyIGlzIGNvbXBsZXRlOlxuICAgIC8vIGNvbnN0IGlzQ29tcGxldGUgPSB1c2VNZW1vKCgpID0+IHJlbWFpbmluZyA9PT0gMCwgW3JlbWFpbmluZ10pO1xuXG4gICAgLy8gLy8gQ29tcHV0ZSB0aGUgY3VycmVudCBzdGVwJ3MgaW5kZXguIFRoaXMgaW5kZXggaXMgZXF1YWwgdG8gdGhlXG4gICAgLy8gLy8gaW5kZXggb2YgdGhlIGZpcnN0IHN0ZXAgdGhhdCB3ZSBmaW5kIG9mIHdoaWNoIHdlIGhhdmUgbm90IHlldFxuICAgIC8vIC8vIHBhc3NlZCB0aGUgc3RhcnQgbW9tZW50LCBtaW51cyBvbmUuXG4gICAgLy8gY29uc3QgY3VycmVudFN0ZXBJbmRleCA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+IHN0ZXBzLmZpbmRJbmRleCgoeyBzdGFydCB9KSA9PiBlbGFwc2VkIDwgc3RhcnQpIC0gMSxcbiAgICAvLyAgICAgW2VsYXBzZWRdXG4gICAgLy8gKTtcblxuICAgIC8vIC8vIENvbXB1dGUgdGhlIGFjdHVhbCBjdXJyZW50IHN0ZXA6XG4gICAgLy8gY29uc3QgY3VycmVudFN0ZXAgPSB1c2VNZW1vKCgpID0+IHN0ZXBzW2N1cnJlbnRTdGVwSW5kZXhdLCBbXG4gICAgLy8gICAgIGN1cnJlbnRTdGVwSW5kZXgsXG4gICAgLy8gXSk7XG5cbiAgICAvLyAvLyBDb21wdXRlIGhvdyBtdWNoIHRpbWUgaXMgcmVtYWluaW5nIGluIHRoZSBjdXJyZW50IHN0ZXBcbiAgICAvLyBjb25zdCBjdXJyZW50U3RlcFJlbWFpbmluZyA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+IHN0ZXBzW2N1cnJlbnRTdGVwSW5kZXhdLmR1cmF0aW9uLFxuICAgIC8vICAgICBbY3VycmVudFN0ZXBJbmRleCwgZWxhcHNlZF1cbiAgICAvLyApO1xuXG4gICAgLy8gLy8gUnVuIHRoZSB0aW1lcjpcbiAgICAvLyBjb25zdCB0aWNrID0gKCkgPT4gc2V0RWxhcHNlZCgoZWxhcHNlZCkgPT4gKGVsYXBzZWQgKz0gU1RFUFNJWkUpKTtcbiAgICAvLyB1c2VJbnRlcnZhbCh0aWNrLCBpc1J1bm5pbmcgJiYgIWlzQ29tcGxldGUgPyBTVEVQU0laRSA6IG51bGwpO1xuXG4gICAgLy8gRXhwb3NlIHNvbWUgaGVscGVyIG1ldGhvZHMgdG8gbWFuaXB1bGF0ZSB0aGUgdGltZXI6XG4gICAgLy8gY29uc3QgcGF1c2UgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRJc1J1bm5pbmcoZmFsc2UpLCBbXSk7XG4gICAgLy8gY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgLy8gICAgIHNldEVsYXBzZWQoMCk7XG4gICAgLy8gICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgLy8gfSwgW10pO1xuICAgIC8vIGNvbnN0IHN0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0SXNSdW5uaW5nKHRydWUpLCBbXSk7XG4gICAgLy8gY29uc3QgdG9nZ2xlID0gdXNlQ2FsbGJhY2soXG4gICAgLy8gICAgICgpID0+IHNldElzUnVubmluZygoaXNSdW5uaW5nKSA9PiAhaXNSdW5uaW5nKSxcbiAgICAvLyAgICAgW11cbiAgICAvLyApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gZGVsdGE6IGRlbHRhPy5jdXJyIC0gZGVsdGE/LnByZXYsXG4gICAgICAgIGVsYXBzZWQsXG4gICAgICAgIGlzUnVubmluZyxcbiAgICAgICAgLy8gcmVtYWluaW5nLFxuICAgICAgICByZXNldCxcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHN0b3AsXG4gICAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9