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
  }, [elapsed]); // // Determine whether the timer is complete:

  var isComplete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return remaining === 0;
  }, [remaining]); // Every tick, update the current tick in state:

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
    if (isRunning) return stop();
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
    isComplete: isComplete,
    isRunning: isRunning,
    remaining: remaining,
    reset: reset,
    start: start,
    stop: stop,
    toggle: toggle
  };
};

_s(useTimer, "DLFFq6rJHauWnID8e7ZzUBh/eLc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXRpbWVyLnRzIl0sIm5hbWVzIjpbInVzZVRpbWVyIiwidXNlclN0ZXBzIiwidXNlU3RhdGUiLCJpc1J1bm5pbmciLCJzZXRJc1J1bm5pbmciLCJjdXJyZW50VGljayIsInNldEN1cnJlbnRUaWNrIiwicHJldmlvdXNUaWNrIiwidXNlUHJldmlvdXMiLCJlbGFwc2VkIiwic2V0RWxhcHNlZCIsInRvdGFsVGltZSIsInVzZU1lbW8iLCJzdW0iLCJ2YWx1ZXNGb3JLZXkiLCJsZW5ndGgiLCJyZW1haW5pbmciLCJpc0NvbXBsZXRlIiwidGljayIsIkRhdGUiLCJub3ciLCJ1c2VJbnRlcnZhbCIsInVzZUVmZmVjdCIsInJlc2V0IiwidXNlQ2FsbGJhY2siLCJzdGFydCIsInN0b3AiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU9PLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFNBQUQsRUFBdUI7QUFBQTs7QUFDM0M7QUFEMkMsa0JBRVRDLHNEQUFRLENBQUMsS0FBRCxDQUZDO0FBQUEsTUFFcENDLFNBRm9DO0FBQUEsTUFFekJDLFlBRnlCLGlCQUkzQztBQUNBOzs7QUFMMkMsbUJBTUxGLHNEQUFRLENBQUMsQ0FBRCxDQU5IO0FBQUEsTUFNcENHLFdBTm9DO0FBQUEsTUFNdkJDLGNBTnVCOztBQU8zQyxNQUFNQyxZQUFZLEdBQUdDLCtEQUFXLENBQUNILFdBQUQsQ0FBaEMsQ0FQMkMsQ0FRM0M7QUFFQTs7QUFWMkMsbUJBV2JILHNEQUFRLENBQUMsQ0FBRCxDQVhLO0FBQUEsTUFXcENPLE9BWG9DO0FBQUEsTUFXM0JDLFVBWDJCLGtCQWEzQzs7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyxxREFBTyxDQUNyQjtBQUFBLFdBQU1DLDBEQUFHLENBQUNDLG1FQUFZLENBQUNiLFNBQUQsRUFBWSxVQUFaLENBQWIsQ0FBSCxHQUEyQyxJQUFqRDtBQUFBLEdBRHFCLEVBRXJCLENBQUNBLFNBQVMsQ0FBQ2MsTUFBWCxDQUZxQixDQUF6QixDQWQyQyxDQW1CM0M7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHSixxREFBTyxDQUFDO0FBQUEsV0FBTUQsU0FBUyxHQUFHRixPQUFsQjtBQUFBLEdBQUQsRUFBNEIsQ0FBQ0EsT0FBRCxDQUE1QixDQUF6QixDQXBCMkMsQ0FzQjNDOztBQUNBLE1BQU1RLFVBQVUsR0FBR0wscURBQU8sQ0FBQztBQUFBLFdBQU1JLFNBQVMsS0FBSyxDQUFwQjtBQUFBLEdBQUQsRUFBd0IsQ0FBQ0EsU0FBRCxDQUF4QixDQUExQixDQXZCMkMsQ0F5QjNDOztBQUNBLE1BQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsV0FBTVosY0FBYyxDQUFDYSxJQUFJLENBQUNDLEdBQUwsRUFBRCxDQUFwQjtBQUFBLEdBQWIsQ0ExQjJDLENBNEIzQzs7O0FBQ0FDLHlFQUFXLENBQUNILElBQUQsRUFBT2YsU0FBUyxHQUFHLEdBQUgsR0FBUyxJQUF6QixDQUFYLENBN0IyQyxDQStCM0M7QUFDQTs7QUFDQW1CLHlEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0EsUUFBSSxDQUFDbkIsU0FBTCxFQUFnQixPQUZKLENBSVo7O0FBQ0EsUUFBSSxDQUFDSSxZQUFELElBQWlCQSxZQUFZLEtBQUssQ0FBdEMsRUFBeUM7QUFFekNHLGNBQVUsQ0FBQyxVQUFDRCxPQUFEO0FBQUEsYUFBYUEsT0FBTyxJQUFJSixXQUFXLEdBQUdFLFlBQWxCLENBQXBCO0FBQUEsS0FBRCxDQUFWO0FBQ0gsR0FSUSxFQVFOLENBQUNGLFdBQUQsQ0FSTSxDQUFULENBakMyQyxDQTJDM0M7O0FBQ0EsTUFBTWtCLEtBQUssR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQzVCcEIsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQU0sY0FBVSxDQUFDLENBQUQsQ0FBVjtBQUNBSixrQkFBYyxDQUFDLENBQUQsQ0FBZDtBQUNILEdBSndCLEVBSXRCLEVBSnNCLENBQXpCLENBNUMyQyxDQWtEM0M7O0FBQ0EsTUFBTW1CLEtBQUssR0FBR0QseURBQVcsQ0FBQyxZQUFNO0FBQzVCbEIsa0JBQWMsQ0FBQ2EsSUFBSSxDQUFDQyxHQUFMLEVBQUQsQ0FBZDtBQUNBaEIsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxHQUh3QixFQUd0QixFQUhzQixDQUF6QixDQW5EMkMsQ0F3RDNDOztBQUNBLE1BQU1zQixJQUFJLEdBQUdGLHlEQUFXLENBQUMsWUFBTTtBQUMzQnBCLGdCQUFZLENBQUMsS0FBRCxDQUFaLENBRDJCLENBRTNCOztBQUNBRSxrQkFBYyxDQUFDLENBQUQsQ0FBZDtBQUNILEdBSnVCLEVBSXJCLEVBSnFCLENBQXhCLENBekQyQyxDQStEM0M7O0FBQ0EsTUFBTXFCLE1BQU0sR0FBR0gseURBQVcsQ0FBQyxZQUFNO0FBQzdCLFFBQUlyQixTQUFKLEVBQWUsT0FBT3VCLElBQUksRUFBWDtBQUNmLFdBQU9ELEtBQUssRUFBWjtBQUNILEdBSHlCLEVBR3ZCLENBQUN0QixTQUFELENBSHVCLENBQTFCLENBaEUyQyxDQXFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQU87QUFDSE0sV0FBTyxFQUFQQSxPQURHO0FBRUhRLGNBQVUsRUFBVkEsVUFGRztBQUdIZCxhQUFTLEVBQVRBLFNBSEc7QUFJSGEsYUFBUyxFQUFUQSxTQUpHO0FBS0hPLFNBQUssRUFBTEEsS0FMRztBQU1IRSxTQUFLLEVBQUxBLEtBTkc7QUFPSEMsUUFBSSxFQUFKQSxJQVBHO0FBUUhDLFVBQU0sRUFBTkE7QUFSRyxHQUFQO0FBVUgsQ0EzSk07O0dBQU0zQixRO1VBT1lRLHVELEVBc0JyQmEsK0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlL1tpZF0vdGltZXIuZTZkYjZjNzNjMjI2NTAxNDQ4YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEZWx0YSwgdXNlUHJldmlvdXMgfSBmcm9tIFwicmVhY3QtZGVsdGFcIjtcblxuaW1wb3J0IHsgdXNlSW50ZXJ2YWwgfSBmcm9tIFwiLi4vaG9va3MvdXNlLWludGVydmFsXCI7XG5pbXBvcnQgeyBzdW0sIHZhbHVlc0ZvcktleSB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJzXCI7XG5cbnR5cGUgU3RlcCA9IHtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGltZXIgPSAodXNlclN0ZXBzOiBTdGVwW10pID0+IHtcbiAgICAvLyBTdG9yZSB3aGV0aGVyIHRoZSB0aW1lciBpcyBydW5uaW5nIGluIHN0YXRlOlxuICAgIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyBTdG9yZSBib3RoIGN1cnJlbnQgYW5kIHByZXZpb3VzIHRpY2sgdGltZXN0YW1wcyBzbyB3ZSBjYW5cbiAgICAvLyBjb21wdXRlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlbTpcbiAgICBjb25zdCBbY3VycmVudFRpY2ssIHNldEN1cnJlbnRUaWNrXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHByZXZpb3VzVGljayA9IHVzZVByZXZpb3VzKGN1cnJlbnRUaWNrKTtcbiAgICAvLyBjb25zdCBkZWx0YSA9IHVzZURlbHRhKGN1cnJlbnRUaWNrKTtcblxuICAgIC8vIFN0b3JlIHRvdGFsIGVsYXBzZWQgdGltZSBpbiBzdGF0ZTpcbiAgICBjb25zdCBbZWxhcHNlZCwgc2V0RWxhcHNlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIC8vIENvbXB1dGUgdGhlIHRvdGFsIHRpbWUgbmVlZGVkIHRvIGNvbXBsZXRlIHRoaXMgdGltZXI6XG4gICAgY29uc3QgdG90YWxUaW1lID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gc3VtKHZhbHVlc0ZvcktleSh1c2VyU3RlcHMsIFwiZHVyYXRpb25cIikpICogMTAwMCxcbiAgICAgICAgW3VzZXJTdGVwcy5sZW5ndGhdXG4gICAgKTtcblxuICAgIC8vIENvbXB1dGUgdGhlIHJlbWFpbmluZyB0aW1lOlxuICAgIGNvbnN0IHJlbWFpbmluZyA9IHVzZU1lbW8oKCkgPT4gdG90YWxUaW1lIC0gZWxhcHNlZCwgW2VsYXBzZWRdKTtcblxuICAgIC8vIC8vIERldGVybWluZSB3aGV0aGVyIHRoZSB0aW1lciBpcyBjb21wbGV0ZTpcbiAgICBjb25zdCBpc0NvbXBsZXRlID0gdXNlTWVtbygoKSA9PiByZW1haW5pbmcgPT09IDAsIFtyZW1haW5pbmddKTtcblxuICAgIC8vIEV2ZXJ5IHRpY2ssIHVwZGF0ZSB0aGUgY3VycmVudCB0aWNrIGluIHN0YXRlOlxuICAgIGNvbnN0IHRpY2sgPSAoKSA9PiBzZXRDdXJyZW50VGljayhEYXRlLm5vdygpKTtcblxuICAgIC8vIFRpY2sgZXZlcnkgMTAwIG1pbGxpc2Vjb25zIHdoZW4gdGltZXIgaXMgcnVubmluZzpcbiAgICB1c2VJbnRlcnZhbCh0aWNrLCBpc1J1bm5pbmcgPyAxMDAgOiBudWxsKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgdG90YWwgZWxhcHNlZCB0aW1lIGJ5IGFkZGluZyB0aGUgZGlmZmVyZW5jZVxuICAgIC8vIGJldHdlZW4gdGhlIGN1cnJlbnQgYW5kIHRoZSBwcmV2aW91cyB0aWNrIHRvIHRoZSBwcmV2aW91cyB0b3RhbDpcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBEb24ndCB1cGRhdGUgaWYgd2UncmUgbm90IHJ1bm5pbmc6XG4gICAgICAgIGlmICghaXNSdW5uaW5nKSByZXR1cm47XG5cbiAgICAgICAgLy8gRG9uJ3QgdXBkYXRlIGlmIHRoZSBwcmV2aW91cyB0aWNrIHdhcyAwOlxuICAgICAgICBpZiAoIXByZXZpb3VzVGljayB8fCBwcmV2aW91c1RpY2sgPT09IDApIHJldHVybjtcblxuICAgICAgICBzZXRFbGFwc2VkKChlbGFwc2VkKSA9PiBlbGFwc2VkICsgKGN1cnJlbnRUaWNrIC0gcHJldmlvdXNUaWNrKSk7XG4gICAgfSwgW2N1cnJlbnRUaWNrXSk7XG5cbiAgICAvLyBFeHBvc2UgYSBtZXRob2QgdG8gcmVzZXQgdGhlIHRpbWVyOlxuICAgIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xuICAgICAgICBzZXRFbGFwc2VkKDApO1xuICAgICAgICBzZXRDdXJyZW50VGljaygwKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBFeHBvc2UgYSBtZXRob2QgdG8gc3RhcnQgdGhlIHRpbWVyOlxuICAgIGNvbnN0IHN0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50VGljayhEYXRlLm5vdygpKTtcbiAgICAgICAgc2V0SXNSdW5uaW5nKHRydWUpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byBzdG9wIChwYXVzZSkgdGhlIHRpbWVyOlxuICAgIGNvbnN0IHN0b3AgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgIC8vIEZJWE1FOiB0aGlzIGZpeGVzIHBhdXNlIGZ1bmN0aW9uYWxpdHksIGJ1dCB3ZSBkb24ndCBjb3VudCB0aGUgdGltZSBiZXR3ZWVuIHRoZSBsYXN0IHRpY2sgYW5kIHVzIHBhdXNpbmcgdGhlIHRpbWVyXG4gICAgICAgIHNldEN1cnJlbnRUaWNrKDApO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byB0b2dnbGUgdGhlIHRpbWVyOlxuICAgIGNvbnN0IHRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKGlzUnVubmluZykgcmV0dXJuIHN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0KCk7XG4gICAgfSwgW2lzUnVubmluZ10pO1xuXG4gICAgLy8gLy8gQWRkIGEgXCJzdGFydFwiIGZpZWxkIHRvIGV2ZXJ5IHN0ZXAgdGhhdCB3YXMgcGFzc2VkIGluIHNvIHdlXG4gICAgLy8gLy8gY2FuIGRldGVybWluZSB3aGljaCBzdGVwIGlzIHRoZSBjdXJyZW50OlxuICAgIC8vIGNvbnN0IHN0ZXBzID0gdXNlTWVtbyhcbiAgICAvLyAgICAgKCkgPT5cbiAgICAvLyAgICAgICAgIHVzZXJTdGVwcy5tYXAoKHN0ZXAsIGkpID0+ICh7XG4gICAgLy8gICAgICAgICAgICAgLy8gV2UgY29weSB0aGUgb3JpZ2luYWwgc3RlcCBhcyBub3QgdG8gbG9zZSBhbnkgbmZvcm1hdGlvbi5cbiAgICAvLyAgICAgICAgICAgICAuLi5zdGVwLFxuXG4gICAgLy8gICAgICAgICAgICAgLy8gV2UgY29udmVydCBzdGVwIGR1cmF0aW9uLCB3aGljaCBpcyBjb25maWd1cmVkIGluIHNlY29uZHMsXG4gICAgLy8gICAgICAgICAgICAgLy8gdG8gbWlsbGlzZWNvbmRzIGhlcmUuIFRoaXMgb3ZlcndyaXRlcyB0aGUgb3JpZ2luYWwgZHVyYXRpb25cbiAgICAvLyAgICAgICAgICAgICAvLyB2YWx1ZSFcbiAgICAvLyAgICAgICAgICAgICBkdXJhdGlvbjogc3RlcC5kdXJhdGlvbiAqIDEwMDAsXG5cbiAgICAvLyAgICAgICAgICAgICAvLyBUaGUgc3RhcnQgaXMgZGV0ZXJtaW5lZCBieSB0aGUgc3VtIG9mIGFsbCBkdXJhdGlvbnMgb2ZcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGUgcHJldmlvdXMgc3RlcHMuIE9uY2UgdGhlc2UgZHVyYXRpb25zIGhhdmUgcGFzc2VkLFxuICAgIC8vICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IHN0ZXAgaXMgYWN0aXZlLiBGaW5hbGx5LCBzdWJ0cmFjdCAxMDAwIG1pbGxpc2Vjb25kc1xuICAgIC8vICAgICAgICAgICAgIC8vIHRvIGFsd2F5cyBzdGFydCBhIHJvdW5kIFwiZWFybHlcIi5cbiAgICAvLyAgICAgICAgICAgICBzdGFydDpcbiAgICAvLyAgICAgICAgICAgICAgICAgdXNlclN0ZXBzXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKHRvdGFsLCB7IGR1cmF0aW9uIH0pID0+IHRvdGFsICsgZHVyYXRpb24gKiAxMDAwLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICkgLSAxMDAwLFxuICAgIC8vICAgICAgICAgfSkpLFxuICAgIC8vICAgICBbdXNlclN0ZXBzLmxlbmd0aF1cbiAgICAvLyApO1xuXG4gICAgLy8gLy8gQ29tcHV0ZSB0aGUgdG90YWwgdGltZSwgc28gd2UgY2FuIGRldGVybWluZSB3aGV0aGVyIHRoZSB0aW1lciBpcyBkb25lOlxuICAgIC8vIGNvbnN0IHRvdGFsVGltZSA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+XG4gICAgLy8gICAgICAgICB1c2VyU3RlcHMucmVkdWNlKFxuICAgIC8vICAgICAgICAgICAgICh0b3RhbCwgeyBkdXJhdGlvbiB9KSA9PiB0b3RhbCArIGR1cmF0aW9uICogMTAwMCxcbiAgICAvLyAgICAgICAgICAgICAwXG4gICAgLy8gICAgICAgICApLFxuICAgIC8vICAgICBbdXNlclN0ZXBzLmxlbmd0aF1cbiAgICAvLyApO1xuXG4gICAgLy8gLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHRpbWVyIGlzIGNvbXBsZXRlOlxuICAgIC8vIGNvbnN0IGlzQ29tcGxldGUgPSB1c2VNZW1vKCgpID0+IHJlbWFpbmluZyA9PT0gMCwgW3JlbWFpbmluZ10pO1xuXG4gICAgLy8gLy8gQ29tcHV0ZSB0aGUgY3VycmVudCBzdGVwJ3MgaW5kZXguIFRoaXMgaW5kZXggaXMgZXF1YWwgdG8gdGhlXG4gICAgLy8gLy8gaW5kZXggb2YgdGhlIGZpcnN0IHN0ZXAgdGhhdCB3ZSBmaW5kIG9mIHdoaWNoIHdlIGhhdmUgbm90IHlldFxuICAgIC8vIC8vIHBhc3NlZCB0aGUgc3RhcnQgbW9tZW50LCBtaW51cyBvbmUuXG4gICAgLy8gY29uc3QgY3VycmVudFN0ZXBJbmRleCA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+IHN0ZXBzLmZpbmRJbmRleCgoeyBzdGFydCB9KSA9PiBlbGFwc2VkIDwgc3RhcnQpIC0gMSxcbiAgICAvLyAgICAgW2VsYXBzZWRdXG4gICAgLy8gKTtcblxuICAgIC8vIC8vIENvbXB1dGUgdGhlIGFjdHVhbCBjdXJyZW50IHN0ZXA6XG4gICAgLy8gY29uc3QgY3VycmVudFN0ZXAgPSB1c2VNZW1vKCgpID0+IHN0ZXBzW2N1cnJlbnRTdGVwSW5kZXhdLCBbXG4gICAgLy8gICAgIGN1cnJlbnRTdGVwSW5kZXgsXG4gICAgLy8gXSk7XG5cbiAgICAvLyAvLyBDb21wdXRlIGhvdyBtdWNoIHRpbWUgaXMgcmVtYWluaW5nIGluIHRoZSBjdXJyZW50IHN0ZXBcbiAgICAvLyBjb25zdCBjdXJyZW50U3RlcFJlbWFpbmluZyA9IHVzZU1lbW8oXG4gICAgLy8gICAgICgpID0+IHN0ZXBzW2N1cnJlbnRTdGVwSW5kZXhdLmR1cmF0aW9uLFxuICAgIC8vICAgICBbY3VycmVudFN0ZXBJbmRleCwgZWxhcHNlZF1cbiAgICAvLyApO1xuXG4gICAgLy8gLy8gUnVuIHRoZSB0aW1lcjpcbiAgICAvLyBjb25zdCB0aWNrID0gKCkgPT4gc2V0RWxhcHNlZCgoZWxhcHNlZCkgPT4gKGVsYXBzZWQgKz0gU1RFUFNJWkUpKTtcbiAgICAvLyB1c2VJbnRlcnZhbCh0aWNrLCBpc1J1bm5pbmcgJiYgIWlzQ29tcGxldGUgPyBTVEVQU0laRSA6IG51bGwpO1xuXG4gICAgLy8gRXhwb3NlIHNvbWUgaGVscGVyIG1ldGhvZHMgdG8gbWFuaXB1bGF0ZSB0aGUgdGltZXI6XG4gICAgLy8gY29uc3QgcGF1c2UgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRJc1J1bm5pbmcoZmFsc2UpLCBbXSk7XG4gICAgLy8gY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgLy8gICAgIHNldEVsYXBzZWQoMCk7XG4gICAgLy8gICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgLy8gfSwgW10pO1xuICAgIC8vIGNvbnN0IHN0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0SXNSdW5uaW5nKHRydWUpLCBbXSk7XG4gICAgLy8gY29uc3QgdG9nZ2xlID0gdXNlQ2FsbGJhY2soXG4gICAgLy8gICAgICgpID0+IHNldElzUnVubmluZygoaXNSdW5uaW5nKSA9PiAhaXNSdW5uaW5nKSxcbiAgICAvLyAgICAgW11cbiAgICAvLyApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWxhcHNlZCxcbiAgICAgICAgaXNDb21wbGV0ZSxcbiAgICAgICAgaXNSdW5uaW5nLFxuICAgICAgICByZW1haW5pbmcsXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3RvcCxcbiAgICAgICAgdG9nZ2xlLFxuICAgIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==