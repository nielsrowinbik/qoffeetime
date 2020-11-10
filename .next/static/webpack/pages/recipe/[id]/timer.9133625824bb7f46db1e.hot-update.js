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
    return totalTime - elapsed;
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
    }); // If found, the current step is the step before the one we found:

    if (index !== -1) return index - 1; // If not found, we're on the last step:

    return steps.length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXRpbWVyLnRzIl0sIm5hbWVzIjpbInVzZVRpbWVyIiwidXNlclN0ZXBzIiwic3RlcHMiLCJ1c2VNZW1vIiwibWFwIiwic3RlcCIsImkiLCJkdXJhdGlvbiIsInN0YXJ0Iiwic2xpY2UiLCJyZWR1Y2UiLCJ0b3RhbCIsImxlbmd0aCIsInVzZVN0YXRlIiwiaXNSdW5uaW5nIiwic2V0SXNSdW5uaW5nIiwiY3VycmVudFRpY2siLCJzZXRDdXJyZW50VGljayIsInByZXZpb3VzVGljayIsInVzZVByZXZpb3VzIiwiZWxhcHNlZCIsInNldEVsYXBzZWQiLCJ0b3RhbFRpbWUiLCJzdW0iLCJ2YWx1ZXNGb3JLZXkiLCJyZW1haW5pbmciLCJpc0NvbXBsZXRlIiwiY3VycmVudFN0ZXBJbmRleCIsImluZGV4IiwiZmluZEluZGV4IiwiY3VycmVudFN0ZXBSZW1haW5pbmciLCJ0b3RhbFByZXZpb3VzU3RlcHMiLCJwcm9ncmVzc0N1cnJlbnRTdGVwIiwidGljayIsIkRhdGUiLCJub3ciLCJ1c2VJbnRlcnZhbCIsInVzZUVmZmVjdCIsInJlc2V0IiwidXNlQ2FsbGJhY2siLCJzdG9wIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBT08sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsU0FBRCxFQUF1QjtBQUFBOztBQUMzQztBQUNBO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxxREFBTyxDQUNqQjtBQUFBLFdBQ0lGLFNBQVMsQ0FBQ0csR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLDZDQUVQRCxJQUZPO0FBSVY7QUFDQTtBQUNBO0FBQ0FFLGdCQUFRLEVBQUVGLElBQUksQ0FBQ0UsUUFBTCxHQUFnQixJQVBoQjtBQVNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGFBQUssRUFDRFAsU0FBUyxDQUNKUSxLQURMLENBQ1cs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R0FIeUIsRUFHdkIsQ0FBQ00sU0FBRCxDQUh1QixDQUExQjtBQUtBLFNBQU87QUFDSGEsb0JBQWdCLEVBQWhCQSxnQkFERztBQUVIRyx3QkFBb0IsRUFBcEJBLG9CQUZHO0FBR0hWLFdBQU8sRUFBUEEsT0FIRztBQUlITSxjQUFVLEVBQVZBLFVBSkc7QUFLSFosYUFBUyxFQUFUQSxTQUxHO0FBTUhXLGFBQVMsRUFBVEEsU0FORztBQU9IYSxTQUFLLEVBQUxBLEtBUEc7QUFRSDlCLFNBQUssRUFBTEEsS0FSRztBQVNIZ0MsUUFBSSxFQUFKQSxJQVRHO0FBVUhDLFVBQU0sRUFBTkE7QUFWRyxHQUFQO0FBWUgsQ0F0SU07O0dBQU16QyxRO1VBbUNZbUIsK0QsRUErQ3JCaUIsK0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlL1tpZF0vdGltZXIuOTEzMzYyNTgyNGJiN2Y0NmRiMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSBcIi4uL2hvb2tzL3VzZS1pbnRlcnZhbFwiO1xuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tIFwiLi4vaG9va3MvdXNlLXByZXZpb3VzXCI7XG5pbXBvcnQgeyBzdW0sIHZhbHVlc0ZvcktleSB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJzXCI7XG5cbnR5cGUgU3RlcCA9IHtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGltZXIgPSAodXNlclN0ZXBzOiBTdGVwW10pID0+IHtcbiAgICAvLyAvLyBBZGQgYSBcInN0YXJ0XCIgZmllbGQgdG8gZXZlcnkgc3RlcCB0aGF0IHdhcyBwYXNzZWQgaW4gc28gd2VcbiAgICAvLyAvLyBjYW4gZGV0ZXJtaW5lIHdoaWNoIHN0ZXAgaXMgdGhlIGN1cnJlbnQ6XG4gICAgY29uc3Qgc3RlcHMgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgdXNlclN0ZXBzLm1hcCgoc3RlcCwgaSkgPT4gKHtcbiAgICAgICAgICAgICAgICAvLyBXZSBjb3B5IHRoZSBvcmlnaW5hbCBzdGVwIGFzIG5vdCB0byBsb3NlIGFueSBuZm9ybWF0aW9uLlxuICAgICAgICAgICAgICAgIC4uLnN0ZXAsXG5cbiAgICAgICAgICAgICAgICAvLyBXZSBjb252ZXJ0IHN0ZXAgZHVyYXRpb24sIHdoaWNoIGlzIGNvbmZpZ3VyZWQgaW4gc2Vjb25kcyxcbiAgICAgICAgICAgICAgICAvLyB0byBtaWxsaXNlY29uZHMgaGVyZS4gVGhpcyBvdmVyd3JpdGVzIHRoZSBvcmlnaW5hbCBkdXJhdGlvblxuICAgICAgICAgICAgICAgIC8vIHZhbHVlIVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzdGVwLmR1cmF0aW9uICogMTAwMCxcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBzdGFydCBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBzdW0gb2YgYWxsIGR1cmF0aW9ucyBvZlxuICAgICAgICAgICAgICAgIC8vIHRoZSBwcmV2aW91cyBzdGVwcy4gT25jZSB0aGVzZSBkdXJhdGlvbnMgaGF2ZSBwYXNzZWQsXG4gICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgc3RlcCBpcyBhY3RpdmUuIEZpbmFsbHksIHN1YnRyYWN0IDEwMDAgbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICAgICAgLy8gdG8gYWx3YXlzIHN0YXJ0IGEgcm91bmQgXCJlYXJseVwiLlxuICAgICAgICAgICAgICAgIHN0YXJ0OlxuICAgICAgICAgICAgICAgICAgICB1c2VyU3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodG90YWwsIHsgZHVyYXRpb24gfSkgPT4gdG90YWwgKyBkdXJhdGlvbiAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgKSAtIDEwMDAsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgIFt1c2VyU3RlcHMubGVuZ3RoXVxuICAgICk7XG5cbiAgICAvLyBTdG9yZSB3aGV0aGVyIHRoZSB0aW1lciBpcyBydW5uaW5nIGluIHN0YXRlOlxuICAgIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyBTdG9yZSBib3RoIGN1cnJlbnQgYW5kIHByZXZpb3VzIHRpY2sgdGltZXN0YW1wcyBzbyB3ZSBjYW5cbiAgICAvLyBjb21wdXRlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlbTpcbiAgICBjb25zdCBbY3VycmVudFRpY2ssIHNldEN1cnJlbnRUaWNrXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHByZXZpb3VzVGljayA9IHVzZVByZXZpb3VzKGN1cnJlbnRUaWNrKTtcblxuICAgIC8vIFN0b3JlIHRvdGFsIGVsYXBzZWQgdGltZSBpbiBzdGF0ZTpcbiAgICBjb25zdCBbZWxhcHNlZCwgc2V0RWxhcHNlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIC8vIENvbXB1dGUgdGhlIHRvdGFsIHRpbWUgbmVlZGVkIHRvIGNvbXBsZXRlIHRoaXMgdGltZXI6XG4gICAgY29uc3QgdG90YWxUaW1lID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gc3VtKHZhbHVlc0ZvcktleSh1c2VyU3RlcHMsIFwiZHVyYXRpb25cIikpICogMTAwMCxcbiAgICAgICAgW3VzZXJTdGVwcy5sZW5ndGhdXG4gICAgKTtcblxuICAgIC8vIENvbXB1dGUgdGhlIHJlbWFpbmluZyB0aW1lOlxuICAgIGNvbnN0IHJlbWFpbmluZyA9IHVzZU1lbW8oKCkgPT4gdG90YWxUaW1lIC0gZWxhcHNlZCwgW2VsYXBzZWRdKTtcblxuICAgIC8vIC8vIERldGVybWluZSB3aGV0aGVyIHRoZSB0aW1lciBpcyBjb21wbGV0ZTpcbiAgICBjb25zdCBpc0NvbXBsZXRlID0gdXNlTWVtbygoKSA9PiByZW1haW5pbmcgPT09IDAsIFtyZW1haW5pbmddKTtcblxuICAgIC8vIC8vIENvbXB1dGUgdGhlIGN1cnJlbnQgc3RlcCdzIGluZGV4OlxuICAgIGNvbnN0IGN1cnJlbnRTdGVwSW5kZXggPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgLy8gZmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IHN0ZXAgdGhhdCB3ZSBmaW5kIG9mIHdoaWNoIHdlIGhhdmUgbm90IHlldFxuICAgICAgICAvLyBwYXNzZWQgdGhlIHN0YXJ0IG1vbWVudDpcbiAgICAgICAgY29uc3QgaW5kZXggPSBzdGVwcy5maW5kSW5kZXgoKHsgc3RhcnQgfSkgPT4gZWxhcHNlZCA8IHN0YXJ0KTtcblxuICAgICAgICAvLyBJZiBmb3VuZCwgdGhlIGN1cnJlbnQgc3RlcCBpcyB0aGUgc3RlcCBiZWZvcmUgdGhlIG9uZSB3ZSBmb3VuZDpcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkgcmV0dXJuIGluZGV4IC0gMTtcblxuICAgICAgICAvLyBJZiBub3QgZm91bmQsIHdlJ3JlIG9uIHRoZSBsYXN0IHN0ZXA6XG4gICAgICAgIHJldHVybiBzdGVwcy5sZW5ndGg7XG4gICAgfSwgW2VsYXBzZWRdKTtcblxuICAgIC8vIC8vIENvbXB1dGUgaG93IG11Y2ggdGltZSBpcyByZW1haW5pbmcgaW4gdGhlIGN1cnJlbnQgc3RlcFxuICAgIGNvbnN0IGN1cnJlbnRTdGVwUmVtYWluaW5nID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIC8vIEdldCB0aGUgc3VtIG9mIGR1cmF0aW9ucyBvZiBhbGwgcHJldmlvdXMgc3RlcHMgKGV4Y2x1ZGluZyBjdXJyZW50KTpcbiAgICAgICAgY29uc3QgdG90YWxQcmV2aW91c1N0ZXBzID0gc3VtKFxuICAgICAgICAgICAgdmFsdWVzRm9yS2V5KHN0ZXBzLnNsaWNlKDAsIGN1cnJlbnRTdGVwSW5kZXgpLCBcImR1cmF0aW9uXCIpXG4gICAgICAgICk7XG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHByb2dyZXNzIHdpdGhpbiB0aGUgY3VycmVudCBzdGVwOlxuICAgICAgICBjb25zdCBwcm9ncmVzc0N1cnJlbnRTdGVwID0gZWxhcHNlZCAtIHRvdGFsUHJldmlvdXNTdGVwcztcblxuICAgICAgICAvLyBTdWJ0cmFjdCB0aGUgcHJvZ3Jlc3Mgd2l0aGluIHRoaXMgc3RlcCBmcm9tIHRoZSB0b3RhbCBkdXJhdGlvbjpcbiAgICAgICAgcmV0dXJuIHN0ZXBzW2N1cnJlbnRTdGVwSW5kZXhdLmR1cmF0aW9uIC0gcHJvZ3Jlc3NDdXJyZW50U3RlcDtcbiAgICB9LCBbY3VycmVudFN0ZXBJbmRleCwgZWxhcHNlZF0pO1xuXG4gICAgLy8gRXZlcnkgdGljaywgdXBkYXRlIHRoZSBjdXJyZW50IHRpY2sgaW4gc3RhdGU6XG4gICAgY29uc3QgdGljayA9ICgpID0+IHNldEN1cnJlbnRUaWNrKERhdGUubm93KCkpO1xuXG4gICAgLy8gVGljayBldmVyeSAxMDAgbWlsbGlzZWNvbnMgd2hlbiB0aW1lciBpcyBydW5uaW5nOlxuICAgIHVzZUludGVydmFsKHRpY2ssIGlzUnVubmluZyAmJiAhaXNDb21wbGV0ZSA/IDEwMCA6IG51bGwpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBlbGFwc2VkIHRpbWUgYnkgYWRkaW5nIHRoZSBkaWZmZXJlbmNlXG4gICAgLy8gYmV0d2VlbiB0aGUgY3VycmVudCBhbmQgdGhlIHByZXZpb3VzIHRpY2sgdG8gdGhlIHByZXZpb3VzIHRvdGFsOlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIERvbid0IHVwZGF0ZSBpZiB3ZSdyZSBub3QgcnVubmluZzpcbiAgICAgICAgaWYgKCFpc1J1bm5pbmcpIHJldHVybjtcblxuICAgICAgICAvLyBEb24ndCB1cGRhdGUgaWYgdGhlIHByZXZpb3VzIHRpY2sgd2FzIDA6XG4gICAgICAgIGlmICghcHJldmlvdXNUaWNrIHx8IHByZXZpb3VzVGljayA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHNldEVsYXBzZWQoKGVsYXBzZWQpID0+IGVsYXBzZWQgKyAoY3VycmVudFRpY2sgLSBwcmV2aW91c1RpY2spKTtcbiAgICB9LCBbY3VycmVudFRpY2tdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byByZXNldCB0aGUgdGltZXI6XG4gICAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgICAgIHNldEVsYXBzZWQoMCk7XG4gICAgICAgIHNldEN1cnJlbnRUaWNrKDApO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEV4cG9zZSBhIG1ldGhvZCB0byBzdGFydCB0aGUgdGltZXI6XG4gICAgY29uc3Qgc3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRUaWNrKERhdGUubm93KCkpO1xuICAgICAgICBzZXRJc1J1bm5pbmcodHJ1ZSk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHN0b3AgKHBhdXNlKSB0aGUgdGltZXI6XG4gICAgY29uc3Qgc3RvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICAgICAgLy8gRklYTUU6IHRoaXMgZml4ZXMgcGF1c2UgZnVuY3Rpb25hbGl0eSwgYnV0IHdlIGRvbid0IGNvdW50IHRoZSB0aW1lIGJldHdlZW4gdGhlIGxhc3QgdGljayBhbmQgdXMgcGF1c2luZyB0aGUgdGltZXJcbiAgICAgICAgc2V0Q3VycmVudFRpY2soMCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHRvZ2dsZSB0aGUgdGltZXI6XG4gICAgY29uc3QgdG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAoaXNSdW5uaW5nKSByZXR1cm4gc3RvcCgpO1xuICAgICAgICByZXR1cm4gc3RhcnQoKTtcbiAgICB9LCBbaXNSdW5uaW5nXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3RlcEluZGV4LFxuICAgICAgICBjdXJyZW50U3RlcFJlbWFpbmluZyxcbiAgICAgICAgZWxhcHNlZCxcbiAgICAgICAgaXNDb21wbGV0ZSxcbiAgICAgICAgaXNSdW5uaW5nLFxuICAgICAgICByZW1haW5pbmcsXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3RvcCxcbiAgICAgICAgdG9nZ2xlLFxuICAgIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==