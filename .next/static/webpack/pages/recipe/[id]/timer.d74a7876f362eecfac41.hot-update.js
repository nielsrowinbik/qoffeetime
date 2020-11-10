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
  }, [remaining]); // // Compute the current step's index. This index is equal to the
  // // index of the first step that we find of which we have not yet
  // // passed the start moment, minus one.

  var currentStepIndex = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return steps.findIndex(function (_ref2) {
      var start = _ref2.start;
      return elapsed < start;
    }) - 1;
  }, [elapsed]); // // Compute the actual current step:

  var currentStep = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return steps[currentStepIndex];
  }, [currentStepIndex]); // // Compute how much time is remaining in the current step

  var currentStepRemaining = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var totalPreviousSteps = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["sum"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["valuesForKey"])(steps.slice(0, currentStepIndex), "duration"));
    return steps[currentStepIndex].duration;
  }, [currentStepIndex, elapsed]); // Every tick, update the current tick in state:

  var tick = function tick() {
    return setCurrentTick(Date.now());
  }; // Tick every 100 millisecons when timer is running:


  Object(_hooks_use_interval__WEBPACK_IMPORTED_MODULE_2__["useInterval"])(tick, isRunning ? 100 : null); // Update the total elapsed time by adding the difference
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
    currentStep: currentStep,
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

_s(useTimer, "oOc8SrW+VnmpklL2PCs/BXp8bIY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXRpbWVyLnRzIl0sIm5hbWVzIjpbInVzZVRpbWVyIiwidXNlclN0ZXBzIiwic3RlcHMiLCJ1c2VNZW1vIiwibWFwIiwic3RlcCIsImkiLCJkdXJhdGlvbiIsInN0YXJ0Iiwic2xpY2UiLCJyZWR1Y2UiLCJ0b3RhbCIsImxlbmd0aCIsInVzZVN0YXRlIiwiaXNSdW5uaW5nIiwic2V0SXNSdW5uaW5nIiwiY3VycmVudFRpY2siLCJzZXRDdXJyZW50VGljayIsInByZXZpb3VzVGljayIsInVzZVByZXZpb3VzIiwiZWxhcHNlZCIsInNldEVsYXBzZWQiLCJ0b3RhbFRpbWUiLCJzdW0iLCJ2YWx1ZXNGb3JLZXkiLCJyZW1haW5pbmciLCJpc0NvbXBsZXRlIiwiY3VycmVudFN0ZXBJbmRleCIsImZpbmRJbmRleCIsImN1cnJlbnRTdGVwIiwiY3VycmVudFN0ZXBSZW1haW5pbmciLCJ0b3RhbFByZXZpb3VzU3RlcHMiLCJ0aWNrIiwiRGF0ZSIsIm5vdyIsInVzZUludGVydmFsIiwidXNlRWZmZWN0IiwicmVzZXQiLCJ1c2VDYWxsYmFjayIsInN0b3AiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxTQUFELEVBQXVCO0FBQUE7O0FBQzNDO0FBQ0E7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHFEQUFPLENBQ2pCO0FBQUEsV0FDSUYsU0FBUyxDQUFDRyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsNkNBRVBELElBRk87QUFJVjtBQUNBO0FBQ0E7QUFDQUUsZ0JBQVEsRUFBRUYsSUFBSSxDQUFDRSxRQUFMLEdBQWdCLElBUGhCO0FBU1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsYUFBSyxFQUNEUCxTQUFTLENBQ0pRLEtBREwsQ0FDVyxDQURYLEVBQ2NILENBRGQs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SUhWLFdBQU8sRUFBUEEsT0FKRztBQUtITSxjQUFVLEVBQVZBLFVBTEc7QUFNSFosYUFBUyxFQUFUQSxTQU5HO0FBT0hXLGFBQVMsRUFBVEEsU0FQRztBQVFIWSxTQUFLLEVBQUxBLEtBUkc7QUFTSDdCLFNBQUssRUFBTEEsS0FURztBQVVIK0IsUUFBSSxFQUFKQSxJQVZHO0FBV0hDLFVBQU0sRUFBTkE7QUFYRyxHQUFQO0FBYUgsQ0FuSU07O0dBQU14QyxRO1VBbUNZbUIsK0QsRUEyQ3JCZ0IsK0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlL1tpZF0vdGltZXIuZDc0YTc4NzZmMzYyZWVjZmFjNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSBcIi4uL2hvb2tzL3VzZS1pbnRlcnZhbFwiO1xuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tIFwiLi4vaG9va3MvdXNlLXByZXZpb3VzXCI7XG5pbXBvcnQgeyBzdW0sIHZhbHVlc0ZvcktleSB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJzXCI7XG5cbnR5cGUgU3RlcCA9IHtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGltZXIgPSAodXNlclN0ZXBzOiBTdGVwW10pID0+IHtcbiAgICAvLyAvLyBBZGQgYSBcInN0YXJ0XCIgZmllbGQgdG8gZXZlcnkgc3RlcCB0aGF0IHdhcyBwYXNzZWQgaW4gc28gd2VcbiAgICAvLyAvLyBjYW4gZGV0ZXJtaW5lIHdoaWNoIHN0ZXAgaXMgdGhlIGN1cnJlbnQ6XG4gICAgY29uc3Qgc3RlcHMgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgdXNlclN0ZXBzLm1hcCgoc3RlcCwgaSkgPT4gKHtcbiAgICAgICAgICAgICAgICAvLyBXZSBjb3B5IHRoZSBvcmlnaW5hbCBzdGVwIGFzIG5vdCB0byBsb3NlIGFueSBuZm9ybWF0aW9uLlxuICAgICAgICAgICAgICAgIC4uLnN0ZXAsXG5cbiAgICAgICAgICAgICAgICAvLyBXZSBjb252ZXJ0IHN0ZXAgZHVyYXRpb24sIHdoaWNoIGlzIGNvbmZpZ3VyZWQgaW4gc2Vjb25kcyxcbiAgICAgICAgICAgICAgICAvLyB0byBtaWxsaXNlY29uZHMgaGVyZS4gVGhpcyBvdmVyd3JpdGVzIHRoZSBvcmlnaW5hbCBkdXJhdGlvblxuICAgICAgICAgICAgICAgIC8vIHZhbHVlIVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzdGVwLmR1cmF0aW9uICogMTAwMCxcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBzdGFydCBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBzdW0gb2YgYWxsIGR1cmF0aW9ucyBvZlxuICAgICAgICAgICAgICAgIC8vIHRoZSBwcmV2aW91cyBzdGVwcy4gT25jZSB0aGVzZSBkdXJhdGlvbnMgaGF2ZSBwYXNzZWQsXG4gICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgc3RlcCBpcyBhY3RpdmUuIEZpbmFsbHksIHN1YnRyYWN0IDEwMDAgbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICAgICAgLy8gdG8gYWx3YXlzIHN0YXJ0IGEgcm91bmQgXCJlYXJseVwiLlxuICAgICAgICAgICAgICAgIHN0YXJ0OlxuICAgICAgICAgICAgICAgICAgICB1c2VyU3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodG90YWwsIHsgZHVyYXRpb24gfSkgPT4gdG90YWwgKyBkdXJhdGlvbiAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgKSAtIDEwMDAsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgIFt1c2VyU3RlcHMubGVuZ3RoXVxuICAgICk7XG5cbiAgICAvLyBTdG9yZSB3aGV0aGVyIHRoZSB0aW1lciBpcyBydW5uaW5nIGluIHN0YXRlOlxuICAgIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyBTdG9yZSBib3RoIGN1cnJlbnQgYW5kIHByZXZpb3VzIHRpY2sgdGltZXN0YW1wcyBzbyB3ZSBjYW5cbiAgICAvLyBjb21wdXRlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlbTpcbiAgICBjb25zdCBbY3VycmVudFRpY2ssIHNldEN1cnJlbnRUaWNrXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHByZXZpb3VzVGljayA9IHVzZVByZXZpb3VzKGN1cnJlbnRUaWNrKTtcblxuICAgIC8vIFN0b3JlIHRvdGFsIGVsYXBzZWQgdGltZSBpbiBzdGF0ZTpcbiAgICBjb25zdCBbZWxhcHNlZCwgc2V0RWxhcHNlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIC8vIENvbXB1dGUgdGhlIHRvdGFsIHRpbWUgbmVlZGVkIHRvIGNvbXBsZXRlIHRoaXMgdGltZXI6XG4gICAgY29uc3QgdG90YWxUaW1lID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gc3VtKHZhbHVlc0ZvcktleSh1c2VyU3RlcHMsIFwiZHVyYXRpb25cIikpICogMTAwMCxcbiAgICAgICAgW3VzZXJTdGVwcy5sZW5ndGhdXG4gICAgKTtcblxuICAgIC8vIENvbXB1dGUgdGhlIHJlbWFpbmluZyB0aW1lOlxuICAgIGNvbnN0IHJlbWFpbmluZyA9IHVzZU1lbW8oKCkgPT4gdG90YWxUaW1lIC0gZWxhcHNlZCwgW2VsYXBzZWRdKTtcblxuICAgIC8vIC8vIERldGVybWluZSB3aGV0aGVyIHRoZSB0aW1lciBpcyBjb21wbGV0ZTpcbiAgICBjb25zdCBpc0NvbXBsZXRlID0gdXNlTWVtbygoKSA9PiByZW1haW5pbmcgPT09IDAsIFtyZW1haW5pbmddKTtcblxuICAgIC8vIC8vIENvbXB1dGUgdGhlIGN1cnJlbnQgc3RlcCdzIGluZGV4LiBUaGlzIGluZGV4IGlzIGVxdWFsIHRvIHRoZVxuICAgIC8vIC8vIGluZGV4IG9mIHRoZSBmaXJzdCBzdGVwIHRoYXQgd2UgZmluZCBvZiB3aGljaCB3ZSBoYXZlIG5vdCB5ZXRcbiAgICAvLyAvLyBwYXNzZWQgdGhlIHN0YXJ0IG1vbWVudCwgbWludXMgb25lLlxuICAgIGNvbnN0IGN1cnJlbnRTdGVwSW5kZXggPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiBzdGVwcy5maW5kSW5kZXgoKHsgc3RhcnQgfSkgPT4gZWxhcHNlZCA8IHN0YXJ0KSAtIDEsXG4gICAgICAgIFtlbGFwc2VkXVxuICAgICk7XG5cbiAgICAvLyAvLyBDb21wdXRlIHRoZSBhY3R1YWwgY3VycmVudCBzdGVwOlxuICAgIGNvbnN0IGN1cnJlbnRTdGVwID0gdXNlTWVtbygoKSA9PiBzdGVwc1tjdXJyZW50U3RlcEluZGV4XSwgW1xuICAgICAgICBjdXJyZW50U3RlcEluZGV4LFxuICAgIF0pO1xuXG4gICAgLy8gLy8gQ29tcHV0ZSBob3cgbXVjaCB0aW1lIGlzIHJlbWFpbmluZyBpbiB0aGUgY3VycmVudCBzdGVwXG4gICAgY29uc3QgY3VycmVudFN0ZXBSZW1haW5pbmcgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgdG90YWxQcmV2aW91c1N0ZXBzID0gc3VtKFxuICAgICAgICAgICAgdmFsdWVzRm9yS2V5KHN0ZXBzLnNsaWNlKDAsIGN1cnJlbnRTdGVwSW5kZXgpLCBcImR1cmF0aW9uXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHN0ZXBzW2N1cnJlbnRTdGVwSW5kZXhdLmR1cmF0aW9uO1xuICAgIH0sIFtjdXJyZW50U3RlcEluZGV4LCBlbGFwc2VkXSk7XG5cbiAgICAvLyBFdmVyeSB0aWNrLCB1cGRhdGUgdGhlIGN1cnJlbnQgdGljayBpbiBzdGF0ZTpcbiAgICBjb25zdCB0aWNrID0gKCkgPT4gc2V0Q3VycmVudFRpY2soRGF0ZS5ub3coKSk7XG5cbiAgICAvLyBUaWNrIGV2ZXJ5IDEwMCBtaWxsaXNlY29ucyB3aGVuIHRpbWVyIGlzIHJ1bm5pbmc6XG4gICAgdXNlSW50ZXJ2YWwodGljaywgaXNSdW5uaW5nID8gMTAwIDogbnVsbCk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHRvdGFsIGVsYXBzZWQgdGltZSBieSBhZGRpbmcgdGhlIGRpZmZlcmVuY2VcbiAgICAvLyBiZXR3ZWVuIHRoZSBjdXJyZW50IGFuZCB0aGUgcHJldmlvdXMgdGljayB0byB0aGUgcHJldmlvdXMgdG90YWw6XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gRG9uJ3QgdXBkYXRlIGlmIHdlJ3JlIG5vdCBydW5uaW5nOlxuICAgICAgICBpZiAoIWlzUnVubmluZykgcmV0dXJuO1xuXG4gICAgICAgIC8vIERvbid0IHVwZGF0ZSBpZiB0aGUgcHJldmlvdXMgdGljayB3YXMgMDpcbiAgICAgICAgaWYgKCFwcmV2aW91c1RpY2sgfHwgcHJldmlvdXNUaWNrID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgc2V0RWxhcHNlZCgoZWxhcHNlZCkgPT4gZWxhcHNlZCArIChjdXJyZW50VGljayAtIHByZXZpb3VzVGljaykpO1xuICAgIH0sIFtjdXJyZW50VGlja10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHJlc2V0IHRoZSB0aW1lcjpcbiAgICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0RWxhcHNlZCgwKTtcbiAgICAgICAgc2V0Q3VycmVudFRpY2soMCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRXhwb3NlIGEgbWV0aG9kIHRvIHN0YXJ0IHRoZSB0aW1lcjpcbiAgICBjb25zdCBzdGFydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFRpY2soRGF0ZS5ub3coKSk7XG4gICAgICAgIHNldElzUnVubmluZyh0cnVlKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBFeHBvc2UgYSBtZXRob2QgdG8gc3RvcCAocGF1c2UpIHRoZSB0aW1lcjpcbiAgICBjb25zdCBzdG9wID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xuICAgICAgICAvLyBGSVhNRTogdGhpcyBmaXhlcyBwYXVzZSBmdW5jdGlvbmFsaXR5LCBidXQgd2UgZG9uJ3QgY291bnQgdGhlIHRpbWUgYmV0d2VlbiB0aGUgbGFzdCB0aWNrIGFuZCB1cyBwYXVzaW5nIHRoZSB0aW1lclxuICAgICAgICBzZXRDdXJyZW50VGljaygwKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBFeHBvc2UgYSBtZXRob2QgdG8gdG9nZ2xlIHRoZSB0aW1lcjpcbiAgICBjb25zdCB0b2dnbGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChpc1J1bm5pbmcpIHJldHVybiBzdG9wKCk7XG4gICAgICAgIHJldHVybiBzdGFydCgpO1xuICAgIH0sIFtpc1J1bm5pbmddKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRTdGVwLFxuICAgICAgICBjdXJyZW50U3RlcEluZGV4LFxuICAgICAgICBjdXJyZW50U3RlcFJlbWFpbmluZyxcbiAgICAgICAgZWxhcHNlZCxcbiAgICAgICAgaXNDb21wbGV0ZSxcbiAgICAgICAgaXNSdW5uaW5nLFxuICAgICAgICByZW1haW5pbmcsXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3RvcCxcbiAgICAgICAgdG9nZ2xlLFxuICAgIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==