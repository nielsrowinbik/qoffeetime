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
    return previousTick && setElapsed(function (elapsed) {
      return elapsed + (currentTick - previousTick);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXRpbWVyLnRzIl0sIm5hbWVzIjpbInVzZVRpbWVyIiwidXNlclN0ZXBzIiwidXNlU3RhdGUiLCJpc1J1bm5pbmciLCJzZXRJc1J1bm5pbmciLCJjdXJyZW50VGljayIsInNldEN1cnJlbnRUaWNrIiwicHJldmlvdXNUaWNrIiwidXNlUHJldmlvdXMiLCJlbGFwc2VkIiwic2V0RWxhcHNlZCIsInRpY2siLCJEYXRlIiwibm93IiwidXNlSW50ZXJ2YWwiLCJ1c2VFZmZlY3QiLCJzdGFydCIsInVzZUNhbGxiYWNrIiwic3RvcCIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFRTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxTQUFELEVBQXVCO0FBQUE7O0FBQzNDO0FBRDJDLGtCQUVUQyxzREFBUSxDQUFDLEtBQUQsQ0FGQztBQUFBLE1BRXBDQyxTQUZvQztBQUFBLE1BRXpCQyxZQUZ5QixpQkFJM0M7QUFDQTs7O0FBTDJDLG1CQU1MRixzREFBUSxDQUFDLENBQUQsQ0FOSDtBQUFBLE1BTXBDRyxXQU5vQztBQUFBLE1BTXZCQyxjQU51Qjs7QUFPM0MsTUFBTUMsWUFBWSxHQUFHQywrREFBVyxDQUFDSCxXQUFELENBQWhDLENBUDJDLENBUTNDO0FBRUE7O0FBVjJDLG1CQVdiSCxzREFBUSxDQUFDLENBQUQsQ0FYSztBQUFBLE1BV3BDTyxPQVhvQztBQUFBLE1BVzNCQyxVQVgyQixrQkFhM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxXQUFNTCxjQUFjLENBQUNNLElBQUksQ0FBQ0MsR0FBTCxFQUFELENBQXBCO0FBQUEsR0FBYixDQXZCMkMsQ0F5QjNDOzs7QUFDQUMseUVBQVcsQ0FBQ0gsSUFBRCxFQUFPUixTQUFTLEdBQUcsR0FBSCxHQUFTLElBQXpCLENBQVgsQ0ExQjJDLENBNEIzQztBQUNBOztBQUNBWSx5REFBUyxDQUNMO0FBQUEsV0FDSVIsWUFBWSxJQUNaRyxVQUFVLENBQUMsVUFBQ0QsT0FBRDtBQUFBLGFBQWFBLE9BQU8sSUFBSUosV0FBVyxHQUFHRSxZQUFsQixDQUFwQjtBQUFBLEtBQUQsQ0FGZDtBQUFBLEdBREssQ0FBVCxDQTlCMkMsQ0FvQzNDOztBQUNBLE1BQU1TLEtBQUssR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQzVCYixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBRSxrQkFBYyxDQUFDTSxJQUFJLENBQUNDLEdBQUwsRUFBRCxDQUFkO0FBQ0gsR0FId0IsRUFHdEIsRUFIc0IsQ0FBekIsQ0FyQzJDLENBMEMzQzs7QUFDQSxNQUFNSyxJQUFJLEdBQUdELHlEQUFXLENBQUMsWUFBTTtBQUMzQmIsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUUsa0JBQWMsQ0FBQ00sSUFBSSxDQUFDQyxHQUFMLEVBQUQsQ0FBZDtBQUNILEdBSHVCLEVBR3JCLEVBSHFCLENBQXhCLENBM0MyQyxDQWdEM0M7O0FBQ0EsTUFBTU0sS0FBSyxHQUFHRix5REFBVyxDQUFDLFlBQU07QUFDNUJiLGdCQUFZLENBQUMsS0FBRCxDQUFaLENBRDRCLENBRTVCO0FBQ0gsR0FId0IsRUFHdEIsRUFIc0IsQ0FBekIsQ0FqRDJDLENBc0QzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBTztBQUNIO0FBQ0FLLFdBQU8sRUFBUEEsT0FGRztBQUdITixhQUFTLEVBQVRBLFNBSEc7QUFJSDtBQUNBZ0IsU0FBSyxFQUFMQSxLQUxHO0FBTUhILFNBQUssRUFBTEEsS0FORztBQU9IRSxRQUFJLEVBQUpBO0FBUEcsR0FBUDtBQVNILENBcEpNOztHQUFNbEIsUTtVQU9ZUSx1RCxFQW1CckJNLCtEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZS9baWRdL3RpbWVyLmY0ZDcyYzA2ZmFiYTlhNmEyODg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGVsdGEsIHVzZVByZXZpb3VzIH0gZnJvbSBcInJlYWN0LWRlbHRhXCI7XG5cbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSBcIi4uL2hvb2tzL3VzZS1pbnRlcnZhbFwiO1xuaW1wb3J0IHsgc3VtLCB2YWx1ZXNGb3JLZXkgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyc1wiO1xuXG50eXBlIFN0ZXAgPSB7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVRpbWVyID0gKHVzZXJTdGVwczogU3RlcFtdKSA9PiB7XG4gICAgLy8gU3RvcmUgd2hldGhlciB0aGUgdGltZXIgaXMgcnVubmluZyBpbiBzdGF0ZTpcbiAgICBjb25zdCBbaXNSdW5uaW5nLCBzZXRJc1J1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gU3RvcmUgYm90aCBjdXJyZW50IGFuZCBwcmV2aW91cyB0aWNrIHRpbWVzdGFtcHMgc28gd2UgY2FuXG4gICAgLy8gY29tcHV0ZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZW06XG4gICAgY29uc3QgW2N1cnJlbnRUaWNrLCBzZXRDdXJyZW50VGlja10gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBwcmV2aW91c1RpY2sgPSB1c2VQcmV2aW91cyhjdXJyZW50VGljayk7XG4gICAgLy8gY29uc3QgZGVsdGEgPSB1c2VEZWx0YShjdXJyZW50VGljayk7XG5cbiAgICAvLyBTdG9yZSB0b3RhbCBlbGFwc2VkIHRpbWUgaW4gc3RhdGU6XG4gICAgY29uc3QgW2VsYXBzZWQsIHNldEVsYXBzZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSB0b3RhbCB0aW1lIG5lZWRlZCB0byBjb21wbGV0ZSB0aGlzIHRpbWVyOlxuICAgIC8vIGNvbnN0IHRvdGFsVGltZSA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+IHN1bSh2YWx1ZXNGb3JLZXkodXNlclN0ZXBzLCBcImR1cmF0aW9uXCIpKSAqIDEwMDAsXG4gICAgLy8gICAgIFt1c2VyU3RlcHMubGVuZ3RoXVxuICAgIC8vICk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSByZW1haW5pbmcgdGltZTpcbiAgICAvLyBjb25zdCByZW1haW5pbmcgPSB1c2VNZW1vKCgpID0+IHRvdGFsVGltZSAtIGVsYXBzZWQsIFtlbGFwc2VkXSk7XG5cbiAgICAvLyBFdmVyeSB0aWNrLCB1cGRhdGUgdGhlIGN1cnJlbnQgdGljayBpbiBzdGF0ZTpcbiAgICBjb25zdCB0aWNrID0gKCkgPT4gc2V0Q3VycmVudFRpY2soRGF0ZS5ub3coKSk7XG5cbiAgICAvLyBUaWNrIGV2ZXJ5IDEwMCBtaWxsaXNlY29ucyB3aGVuIHRpbWVyIGlzIHJ1bm5pbmc6XG4gICAgdXNlSW50ZXJ2YWwodGljaywgaXNSdW5uaW5nID8gMTAwIDogbnVsbCk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHRvdGFsIGVsYXBzZWQgdGltZSBieSBhZGRpbmcgdGhlIGRpZmZlcmVuY2VcbiAgICAvLyBiZXR3ZWVuIHRoZSBjdXJyZW50IGFuZCB0aGUgcHJldmlvdXMgdGljayB0byB0aGUgcHJldmlvdXMgdG90YWw6XG4gICAgdXNlRWZmZWN0KFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgcHJldmlvdXNUaWNrICYmXG4gICAgICAgICAgICBzZXRFbGFwc2VkKChlbGFwc2VkKSA9PiBlbGFwc2VkICsgKGN1cnJlbnRUaWNrIC0gcHJldmlvdXNUaWNrKSlcbiAgICApO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHN0YXJ0IHRoZSB0aW1lcjpcbiAgICBjb25zdCBzdGFydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKHRydWUpO1xuICAgICAgICBzZXRDdXJyZW50VGljayhEYXRlLm5vdygpKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBFeHBvc2UgYSBtZXRob2QgdG8gc3RvcCAocGF1c2UpIHRoZSB0aW1lcjpcbiAgICBjb25zdCBzdG9wID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xuICAgICAgICBzZXRDdXJyZW50VGljayhEYXRlLm5vdygpKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBFeHBvc2UgYSBtZXRob2QgdG8gcmVzZXQgdGhlIHRpbWVyOlxuICAgIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xuICAgICAgICAvLyBzZXRFbGFwc2VkKDApO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIC8vIEFkZCBhIFwic3RhcnRcIiBmaWVsZCB0byBldmVyeSBzdGVwIHRoYXQgd2FzIHBhc3NlZCBpbiBzbyB3ZVxuICAgIC8vIC8vIGNhbiBkZXRlcm1pbmUgd2hpY2ggc3RlcCBpcyB0aGUgY3VycmVudDpcbiAgICAvLyBjb25zdCBzdGVwcyA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+XG4gICAgLy8gICAgICAgICB1c2VyU3RlcHMubWFwKChzdGVwLCBpKSA9PiAoe1xuICAgIC8vICAgICAgICAgICAgIC8vIFdlIGNvcHkgdGhlIG9yaWdpbmFsIHN0ZXAgYXMgbm90IHRvIGxvc2UgYW55IG5mb3JtYXRpb24uXG4gICAgLy8gICAgICAgICAgICAgLi4uc3RlcCxcblxuICAgIC8vICAgICAgICAgICAgIC8vIFdlIGNvbnZlcnQgc3RlcCBkdXJhdGlvbiwgd2hpY2ggaXMgY29uZmlndXJlZCBpbiBzZWNvbmRzLFxuICAgIC8vICAgICAgICAgICAgIC8vIHRvIG1pbGxpc2Vjb25kcyBoZXJlLiBUaGlzIG92ZXJ3cml0ZXMgdGhlIG9yaWdpbmFsIGR1cmF0aW9uXG4gICAgLy8gICAgICAgICAgICAgLy8gdmFsdWUhXG4gICAgLy8gICAgICAgICAgICAgZHVyYXRpb246IHN0ZXAuZHVyYXRpb24gKiAxMDAwLFxuXG4gICAgLy8gICAgICAgICAgICAgLy8gVGhlIHN0YXJ0IGlzIGRldGVybWluZWQgYnkgdGhlIHN1bSBvZiBhbGwgZHVyYXRpb25zIG9mXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhlIHByZXZpb3VzIHN0ZXBzLiBPbmNlIHRoZXNlIGR1cmF0aW9ucyBoYXZlIHBhc3NlZCxcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBzdGVwIGlzIGFjdGl2ZS4gRmluYWxseSwgc3VidHJhY3QgMTAwMCBtaWxsaXNlY29uZHNcbiAgICAvLyAgICAgICAgICAgICAvLyB0byBhbHdheXMgc3RhcnQgYSByb3VuZCBcImVhcmx5XCIuXG4gICAgLy8gICAgICAgICAgICAgc3RhcnQ6XG4gICAgLy8gICAgICAgICAgICAgICAgIHVzZXJTdGVwc1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIGkpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAucmVkdWNlKFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICh0b3RhbCwgeyBkdXJhdGlvbiB9KSA9PiB0b3RhbCArIGR1cmF0aW9uICogMTAwMCxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICApIC0gMTAwMCxcbiAgICAvLyAgICAgICAgIH0pKSxcbiAgICAvLyAgICAgW3VzZXJTdGVwcy5sZW5ndGhdXG4gICAgLy8gKTtcblxuICAgIC8vIC8vIENvbXB1dGUgdGhlIHRvdGFsIHRpbWUsIHNvIHdlIGNhbiBkZXRlcm1pbmUgd2hldGhlciB0aGUgdGltZXIgaXMgZG9uZTpcbiAgICAvLyBjb25zdCB0b3RhbFRpbWUgPSB1c2VNZW1vKFxuICAgIC8vICAgICAoKSA9PlxuICAgIC8vICAgICAgICAgdXNlclN0ZXBzLnJlZHVjZShcbiAgICAvLyAgICAgICAgICAgICAodG90YWwsIHsgZHVyYXRpb24gfSkgPT4gdG90YWwgKyBkdXJhdGlvbiAqIDEwMDAsXG4gICAgLy8gICAgICAgICAgICAgMFxuICAgIC8vICAgICAgICAgKSxcbiAgICAvLyAgICAgW3VzZXJTdGVwcy5sZW5ndGhdXG4gICAgLy8gKTtcblxuICAgIC8vIC8vIEtlZXAgdGhlIGVsYXBzZWQgbWlsbGlzZWNvbmRzIGluIHN0YXRlOlxuICAgIC8vIGNvbnN0IFtlbGFwc2VkLCBzZXRFbGFwc2VkXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgLy8gLy8gS2VlcCB3aGV0aGVyIHRoZSB0aW1lciBpcyBydW5uaW5nIGluIHN0YXRlOlxuICAgIC8vIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyAvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIHRpbWUgcmVtYWluaW5nOlxuICAgIC8vIGNvbnN0IHJlbWFpbmluZyA9IHVzZU1lbW8oKCkgPT4gdG90YWxUaW1lIC0gZWxhcHNlZCwgW2VsYXBzZWRdKTtcblxuICAgIC8vIC8vIERldGVybWluZSB3aGV0aGVyIHRoZSB0aW1lciBpcyBjb21wbGV0ZTpcbiAgICAvLyBjb25zdCBpc0NvbXBsZXRlID0gdXNlTWVtbygoKSA9PiByZW1haW5pbmcgPT09IDAsIFtyZW1haW5pbmddKTtcblxuICAgIC8vIC8vIENvbXB1dGUgdGhlIGN1cnJlbnQgc3RlcCdzIGluZGV4LiBUaGlzIGluZGV4IGlzIGVxdWFsIHRvIHRoZVxuICAgIC8vIC8vIGluZGV4IG9mIHRoZSBmaXJzdCBzdGVwIHRoYXQgd2UgZmluZCBvZiB3aGljaCB3ZSBoYXZlIG5vdCB5ZXRcbiAgICAvLyAvLyBwYXNzZWQgdGhlIHN0YXJ0IG1vbWVudCwgbWludXMgb25lLlxuICAgIC8vIGNvbnN0IGN1cnJlbnRTdGVwSW5kZXggPSB1c2VNZW1vKFxuICAgIC8vICAgICAoKSA9PiBzdGVwcy5maW5kSW5kZXgoKHsgc3RhcnQgfSkgPT4gZWxhcHNlZCA8IHN0YXJ0KSAtIDEsXG4gICAgLy8gICAgIFtlbGFwc2VkXVxuICAgIC8vICk7XG5cbiAgICAvLyAvLyBDb21wdXRlIHRoZSBhY3R1YWwgY3VycmVudCBzdGVwOlxuICAgIC8vIGNvbnN0IGN1cnJlbnRTdGVwID0gdXNlTWVtbygoKSA9PiBzdGVwc1tjdXJyZW50U3RlcEluZGV4XSwgW1xuICAgIC8vICAgICBjdXJyZW50U3RlcEluZGV4LFxuICAgIC8vIF0pO1xuXG4gICAgLy8gLy8gQ29tcHV0ZSBob3cgbXVjaCB0aW1lIGlzIHJlbWFpbmluZyBpbiB0aGUgY3VycmVudCBzdGVwXG4gICAgLy8gY29uc3QgY3VycmVudFN0ZXBSZW1haW5pbmcgPSB1c2VNZW1vKFxuICAgIC8vICAgICAoKSA9PiBzdGVwc1tjdXJyZW50U3RlcEluZGV4XS5kdXJhdGlvbixcbiAgICAvLyAgICAgW2N1cnJlbnRTdGVwSW5kZXgsIGVsYXBzZWRdXG4gICAgLy8gKTtcblxuICAgIC8vIC8vIFJ1biB0aGUgdGltZXI6XG4gICAgLy8gY29uc3QgdGljayA9ICgpID0+IHNldEVsYXBzZWQoKGVsYXBzZWQpID0+IChlbGFwc2VkICs9IFNURVBTSVpFKSk7XG4gICAgLy8gdXNlSW50ZXJ2YWwodGljaywgaXNSdW5uaW5nICYmICFpc0NvbXBsZXRlID8gU1RFUFNJWkUgOiBudWxsKTtcblxuICAgIC8vIEV4cG9zZSBzb21lIGhlbHBlciBtZXRob2RzIHRvIG1hbmlwdWxhdGUgdGhlIHRpbWVyOlxuICAgIC8vIGNvbnN0IHBhdXNlID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0SXNSdW5uaW5nKGZhbHNlKSwgW10pO1xuICAgIC8vIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vICAgICBzZXRFbGFwc2VkKDApO1xuICAgIC8vICAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xuICAgIC8vIH0sIFtdKTtcbiAgICAvLyBjb25zdCBzdGFydCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldElzUnVubmluZyh0cnVlKSwgW10pO1xuICAgIC8vIGNvbnN0IHRvZ2dsZSA9IHVzZUNhbGxiYWNrKFxuICAgIC8vICAgICAoKSA9PiBzZXRJc1J1bm5pbmcoKGlzUnVubmluZykgPT4gIWlzUnVubmluZyksXG4gICAgLy8gICAgIFtdXG4gICAgLy8gKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIGRlbHRhOiBkZWx0YT8uY3VyciAtIGRlbHRhPy5wcmV2LFxuICAgICAgICBlbGFwc2VkLFxuICAgICAgICBpc1J1bm5pbmcsXG4gICAgICAgIC8vIHJlbWFpbmluZyxcbiAgICAgICAgcmVzZXQsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBzdG9wLFxuICAgIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==