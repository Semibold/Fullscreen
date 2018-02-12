(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fullscreen", function() { return Fullscreen; });
var Fullscreen = /** @class */ (function () {
    function Fullscreen(ele) {
        this.tab = -1;
        this.fss = [
            {
                fullscreenEnabled: 'fullscreenEnabled',
                fullscreenElement: 'fullscreenElement',
                onfullscreenchange: 'onfullscreenchange',
                onfullscreenerror: 'onfullscreenerror',
                requestFullscreen: 'requestFullscreen',
                exitFullscreen: 'exitFullscreen',
                fullscreenchange: 'fullscreenchange',
                fullscreenerror: 'fullscreenerror',
            },
            {
                fullscreenEnabled: 'webkitFullscreenEnabled',
                fullscreenElement: 'webkitFullscreenElement',
                onfullscreenchange: 'onwebkitfullscreenchange',
                onfullscreenerror: 'onwebkitfullscreenerror',
                requestFullscreen: 'webkitRequestFullscreen',
                exitFullscreen: 'webkitExitFullscreen',
                fullscreenchange: 'webkitfullscreenchange',
                fullscreenerror: 'webkitfullscreenerror',
            },
            {
                fullscreenEnabled: 'mozFullScreenEnabled',
                fullscreenElement: 'mozFullScreenElement',
                onfullscreenchange: 'onmozfullscreenchange',
                onfullscreenerror: 'onmozfullscreenerror',
                requestFullscreen: 'mozRequestFullScreen',
                exitFullscreen: 'mozCancelFullScreen',
                fullscreenchange: 'mozfullscreenchange',
                fullscreenerror: 'mozfullscreenerror',
            },
            {
                fullscreenEnabled: 'msFullscreenEnabled',
                fullscreenElement: 'msFullscreenElement',
                onfullscreenchange: 'onmsfullscreenchange',
                onfullscreenerror: 'onmsfullscreenerror',
                requestFullscreen: 'msRequestFullscreen',
                exitFullscreen: 'msExitFullscreen',
                fullscreenchange: 'MSFullscreenChange',
                fullscreenerror: 'MSFullscreenError',
            }
        ];
        this.ele = ele || document.documentElement;
        this.doc = this.ele.ownerDocument;
        this.checkoutFullscreen();
    }
    Fullscreen.prototype.checkoutFullscreen = function () {
        for (var i = 0; i < this.fss.length; i++) {
            if (this.fss[i].fullscreenEnabled in this.doc) {
                this.tab = i;
                break;
            }
        }
        this.cfs = this.fss[this.tab] || null;
    };
    Object.defineProperty(Fullscreen.prototype, "fullscreenEnabled", {
        get: function () {
            if (this.cfs) {
                return Boolean(this.doc[this.cfs.fullscreenEnabled]);
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fullscreen.prototype, "fullscreenElement", {
        get: function () {
            if (this.cfs) {
                return this.doc[this.cfs.fullscreenElement] || null;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fullscreen.prototype, "onfullscreenchange", {
        get: function () {
            if (this.cfs) {
                return this.doc[this.cfs.onfullscreenchange];
            }
        },
        set: function (handler) {
            if (this.cfs) {
                this.doc[this.cfs.onfullscreenchange] = handler;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fullscreen.prototype, "onfullscreenerror", {
        get: function () {
            if (this.cfs) {
                return this.doc[this.cfs.onfullscreenerror];
            }
        },
        set: function (handler) {
            if (this.cfs) {
                this.doc[this.cfs.onfullscreenerror] = handler;
            }
        },
        enumerable: true,
        configurable: true
    });
    Fullscreen.prototype.requestFullscreen = function () {
        if (this.cfs) {
            this.ele[this.cfs.requestFullscreen]();
        }
    };
    Fullscreen.prototype.exitFullscreen = function () {
        if (this.cfs) {
            this.doc[this.cfs.exitFullscreen]();
        }
    };
    Fullscreen.prototype.addEventListener = function (type, listener, useCapture) {
        if (type === 'fullscreenchange' || type === 'fullscreenerror') {
            if (this.cfs) {
                this.doc.addEventListener(this.cfs[type], listener, useCapture);
            }
        }
    };
    Fullscreen.prototype.removeEventListener = function (type, listener, useCapture) {
        if (type === 'fullscreenchange' || type === 'fullscreenerror') {
            if (this.cfs) {
                this.doc.removeEventListener(this.cfs[type], listener, useCapture);
            }
        }
    };
    Fullscreen.prototype.toggleFullscreen = function (forceExit) {
        if (forceExit) {
            if (this.fullscreenElement === this.ele) {
                this.exitFullscreen();
            }
        }
        else {
            if (this.fullscreenElement === this.ele) {
                this.exitFullscreen();
            }
            else {
                this.requestFullscreen();
            }
        }
    };
    Object.defineProperty(Fullscreen.prototype, "fullscreenMapping", {
        get: function () {
            return this.cfs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fullscreen.prototype, "currentElement", {
        get: function () {
            return this.ele;
        },
        enumerable: true,
        configurable: true
    });
    return Fullscreen;
}());

/* harmony default export */ __webpack_exports__["default"] = (Fullscreen);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2svYm9vdHN0cmFwIDdkMTM5Mzk2YTA5MzExYTdmNGNjIiwiLi9zb3VyY2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckJBO0FBQUE7SUFpREksb0JBQVksR0FBYTtRQTdDakIsUUFBRyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBRWpCLFFBQUcsR0FBRztZQUNWO2dCQUNJLGlCQUFpQixFQUFFLG1CQUFtQjtnQkFDdEMsaUJBQWlCLEVBQUUsbUJBQW1CO2dCQUN0QyxrQkFBa0IsRUFBRSxvQkFBb0I7Z0JBQ3hDLGlCQUFpQixFQUFFLG1CQUFtQjtnQkFDdEMsaUJBQWlCLEVBQUUsbUJBQW1CO2dCQUN0QyxjQUFjLEVBQUUsZ0JBQWdCO2dCQUNoQyxnQkFBZ0IsRUFBRSxrQkFBa0I7Z0JBQ3BDLGVBQWUsRUFBRSxpQkFBaUI7YUFDckM7WUFDRDtnQkFDSSxpQkFBaUIsRUFBRSx5QkFBeUI7Z0JBQzVDLGlCQUFpQixFQUFFLHlCQUF5QjtnQkFDNUMsa0JBQWtCLEVBQUUsMEJBQTBCO2dC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QUNMLENBQUM7SUFFRCxzQkFBSSx5Q0FBaUI7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFTCxpQkFBQztBQUFELENBQUM7O0FBRUQsK0RBQWUsVUFBVSxFQUFDIiwiZmlsZSI6ImJ1bmRsZS53ZWJwYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2QxMzkzOTZhMDkzMTFhN2Y0Y2MiLCIvKipcbiAqIEBzdW1tYXJ5IFR5cGVTY3JpcHQgVmVyc2lvblxuICovXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIERvY3VtZW50IHtcbiAgICAgICAgcmVhZG9ubHkgd2Via2l0RnVsbHNjcmVlbkVuYWJsZWQ6IERvY3VtZW50WydmdWxsc2NyZWVuRW5hYmxlZCddO1xuICAgICAgICByZWFkb25seSBtb3pGdWxsU2NyZWVuRW5hYmxlZDogRG9jdW1lbnRbJ2Z1bGxzY3JlZW5FbmFibGVkJ107XG4gICAgICAgIHJlYWRvbmx5IG1zRnVsbHNjcmVlbkVuYWJsZWQ6IERvY3VtZW50WydmdWxsc2NyZWVuRW5hYmxlZCddO1xuICAgICAgICByZWFkb25seSB3ZWJraXRGdWxsc2NyZWVuRWxlbWVudDogRG9jdW1lbnRbJ2Z1bGxzY3JlZW5FbGVtZW50J107XG4gICAgICAgIHJlYWRvbmx5IG1vekZ1bGxTY3JlZW5FbGVtZW50OiBEb2N1bWVudFsnZnVsbHNjcmVlbkVsZW1lbnQnXTtcbiAgICAgICAgcmVhZG9ubHkgbXNGdWxsc2NyZWVuRWxlbWVudDogRG9jdW1lbnRbJ2Z1bGxzY3JlZW5FbGVtZW50J107XG4gICAgICAgIG9ud2Via2l0ZnVsbHNjcmVlbmNoYW5nZTogRG9jdW1lbnRbJ29uZnVsbHNjcmVlbmNoYW5nZSddO1xuICAgICAgICBvbm1vemZ1bGxzY3JlZW5jaGFuZ2U6IERvY3VtZW50WydvbmZ1bGxzY3JlZW5jaGFuZ2UnXTtcbiAgICAgICAgb25tc2Z1bGxzY3JlZW5jaGFuZ2U6IERvY3VtZW50WydvbmZ1bGxzY3JlZW5jaGFuZ2UnXTtcbiAgICAgICAgb253ZWJraXRmdWxsc2NyZWVuZXJyb3I6IERvY3VtZW50WydvbmZ1bGxzY3JlZW5lcnJvciddO1xuICAgICAgICBvbm1vemZ1bGxzY3JlZW5lcnJvcjogRG9jdW1lbnRbJ29uZnVsbHNjcmVlbmVycm9yJ107XG4gICAgICAgIG9ubXNmdWxsc2NyZWVuZXJyb3I6IERvY3VtZW50WydvbmZ1bGxzY3JlZW5lcnJvciddO1xuICAgICAgICB3ZWJraXRFeGl0RnVsbHNjcmVlbigpOiB2b2lkO1xuICAgICAgICBtb3pDYW5jZWxGdWxsU2NyZWVuKCk6IHZvaWQ7XG4gICAgICAgIG1zRXhpdEZ1bGxzY3JlZW4oKTogdm9pZDtcbiAgICB9XG4gICAgaW50ZXJmYWNlIEVsZW1lbnQge1xuICAgICAgICB3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOiB2b2lkO1xuICAgICAgICBtb3pSZXF1ZXN0RnVsbFNjcmVlbigpOiB2b2lkO1xuICAgICAgICBtc1JlcXVlc3RGdWxsc2NyZWVuKCk6IHZvaWQ7XG4gICAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBGdWxsc2NyZWVuQVBJTWFwcGluZyB7XG4gICAgZnVsbHNjcmVlbkVuYWJsZWQ6ICdmdWxsc2NyZWVuRW5hYmxlZCcgfCAnd2Via2l0RnVsbHNjcmVlbkVuYWJsZWQnIHwgJ21vekZ1bGxTY3JlZW5FbmFibGVkJyB8ICdtc0Z1bGxzY3JlZW5FbmFibGVkJztcbiAgICBmdWxsc2NyZWVuRWxlbWVudDogJ2Z1bGxzY3JlZW5FbGVtZW50JyB8ICd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcgfCAnbW96RnVsbFNjcmVlbkVsZW1lbnQnIHwgJ21zRnVsbHNjcmVlbkVsZW1lbnQnO1xuICAgIG9uZnVsbHNjcmVlbmNoYW5nZTogJ29uZnVsbHNjcmVlbmNoYW5nZScgfCAnb253ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyB8ICdvbm1vemZ1bGxzY3JlZW5jaGFuZ2UnIHwgJ29ubXNmdWxsc2NyZWVuY2hhbmdlJztcbiAgICBvbmZ1bGxzY3JlZW5lcnJvcjogJ29uZnVsbHNjcmVlbmVycm9yJyB8ICdvbndlYmtpdGZ1bGxzY3JlZW5lcnJvcicgfCAnb25tb3pmdWxsc2NyZWVuZXJyb3InIHwgJ29ubXNmdWxsc2NyZWVuZXJyb3InO1xuICAgIHJlcXVlc3RGdWxsc2NyZWVuOiAncmVxdWVzdEZ1bGxzY3JlZW4nIHwgJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyB8ICdtb3pSZXF1ZXN0RnVsbFNjcmVlbicgfCAnbXNSZXF1ZXN0RnVsbHNjcmVlbic7XG4gICAgZXhpdEZ1bGxzY3JlZW46ICdleGl0RnVsbHNjcmVlbicgfCAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nIHwgJ21vekNhbmNlbEZ1bGxTY3JlZW4nIHwgJ21zRXhpdEZ1bGxzY3JlZW4nO1xuICAgIGZ1bGxzY3JlZW5jaGFuZ2U6ICdmdWxsc2NyZWVuY2hhbmdlJyB8ICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyB8ICdtb3pmdWxsc2NyZWVuY2hhbmdlJyB8ICdNU0Z1bGxzY3JlZW5DaGFuZ2UnO1xuICAgIGZ1bGxzY3JlZW5lcnJvcjogJ2Z1bGxzY3JlZW5lcnJvcicgfCAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJyB8ICdtb3pmdWxsc2NyZWVuZXJyb3InIHwgJ01TRnVsbHNjcmVlbkVycm9yJztcbn1cbmV4cG9ydCB0eXBlIEZ1bGxzY3JlZW5FdmVudFR5cGUgPSAnZnVsbHNjcmVlbmNoYW5nZScgfCAnZnVsbHNjcmVlbmVycm9yJztcblxuXG5leHBvcnQgY2xhc3MgRnVsbHNjcmVlbiB7XG5cbiAgICBwcml2YXRlIGVsZTogRWxlbWVudDtcbiAgICBwcml2YXRlIGRvYzogRG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSB0YWI6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgY2ZzOiBGdWxsc2NyZWVuQVBJTWFwcGluZztcbiAgICBwcml2YXRlIGZzcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZnVsbHNjcmVlbkVuYWJsZWQ6ICdmdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgICAgICAgICBmdWxsc2NyZWVuRWxlbWVudDogJ2Z1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgIG9uZnVsbHNjcmVlbmNoYW5nZTogJ29uZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICBvbmZ1bGxzY3JlZW5lcnJvcjogJ29uZnVsbHNjcmVlbmVycm9yJyxcbiAgICAgICAgICAgIHJlcXVlc3RGdWxsc2NyZWVuOiAncmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgZXhpdEZ1bGxzY3JlZW46ICdleGl0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICBmdWxsc2NyZWVuY2hhbmdlOiAnZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICBmdWxsc2NyZWVuZXJyb3I6ICdmdWxsc2NyZWVuZXJyb3InLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmdWxsc2NyZWVuRW5hYmxlZDogJ3dlYmtpdEZ1bGxzY3JlZW5FbmFibGVkJyxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5FbGVtZW50OiAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICAgICAgICAgb25mdWxsc2NyZWVuY2hhbmdlOiAnb253ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgICAgIG9uZnVsbHNjcmVlbmVycm9yOiAnb253ZWJraXRmdWxsc2NyZWVuZXJyb3InLFxuICAgICAgICAgICAgcmVxdWVzdEZ1bGxzY3JlZW46ICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICBleGl0RnVsbHNjcmVlbjogJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5jaGFuZ2U6ICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5lcnJvcjogJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5FbmFibGVkOiAnbW96RnVsbFNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgZnVsbHNjcmVlbkVsZW1lbnQ6ICdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICBvbmZ1bGxzY3JlZW5jaGFuZ2U6ICdvbm1vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAgICAgb25mdWxsc2NyZWVuZXJyb3I6ICdvbm1vemZ1bGxzY3JlZW5lcnJvcicsXG4gICAgICAgICAgICByZXF1ZXN0RnVsbHNjcmVlbjogJ21velJlcXVlc3RGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgIGV4aXRGdWxsc2NyZWVuOiAnbW96Q2FuY2VsRnVsbFNjcmVlbicsXG4gICAgICAgICAgICBmdWxsc2NyZWVuY2hhbmdlOiAnbW96ZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICBmdWxsc2NyZWVuZXJyb3I6ICdtb3pmdWxsc2NyZWVuZXJyb3InLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmdWxsc2NyZWVuRW5hYmxlZDogJ21zRnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgZnVsbHNjcmVlbkVsZW1lbnQ6ICdtc0Z1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgIG9uZnVsbHNjcmVlbmNoYW5nZTogJ29ubXNmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgICAgIG9uZnVsbHNjcmVlbmVycm9yOiAnb25tc2Z1bGxzY3JlZW5lcnJvcicsXG4gICAgICAgICAgICByZXF1ZXN0RnVsbHNjcmVlbjogJ21zUmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgZXhpdEZ1bGxzY3JlZW46ICdtc0V4aXRGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5jaGFuZ2U6ICdNU0Z1bGxzY3JlZW5DaGFuZ2UnLFxuICAgICAgICAgICAgZnVsbHNjcmVlbmVycm9yOiAnTVNGdWxsc2NyZWVuRXJyb3InLFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZT86IEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGUgPSBlbGUgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB0aGlzLmRvYyA9IHRoaXMuZWxlLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuY2hlY2tvdXRGdWxsc2NyZWVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja291dEZ1bGxzY3JlZW4oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZzc1tpXS5mdWxsc2NyZWVuRW5hYmxlZCBpbiB0aGlzLmRvYykge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNmcyA9IDxGdWxsc2NyZWVuQVBJTWFwcGluZz50aGlzLmZzc1t0aGlzLnRhYl0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgZnVsbHNjcmVlbkVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmNmcykge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5kb2NbdGhpcy5jZnMuZnVsbHNjcmVlbkVuYWJsZWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBmdWxsc2NyZWVuRWxlbWVudCgpOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGlmICh0aGlzLmNmcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9jW3RoaXMuY2ZzLmZ1bGxzY3JlZW5FbGVtZW50XSB8fCBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgb25mdWxsc2NyZWVuY2hhbmdlKCkge1xuICAgICAgICBpZiAodGhpcy5jZnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvY1t0aGlzLmNmcy5vbmZ1bGxzY3JlZW5jaGFuZ2VdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IG9uZnVsbHNjcmVlbmNoYW5nZShoYW5kbGVyOiBEb2N1bWVudFsnb25mdWxsc2NyZWVuY2hhbmdlJ10pIHtcbiAgICAgICAgaWYgKHRoaXMuY2ZzKSB7XG4gICAgICAgICAgICB0aGlzLmRvY1t0aGlzLmNmcy5vbmZ1bGxzY3JlZW5jaGFuZ2VdID0gaGFuZGxlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBvbmZ1bGxzY3JlZW5lcnJvcigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2ZzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb2NbdGhpcy5jZnMub25mdWxsc2NyZWVuZXJyb3JdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IG9uZnVsbHNjcmVlbmVycm9yKGhhbmRsZXI6IERvY3VtZW50WydvbmZ1bGxzY3JlZW5lcnJvciddKSB7XG4gICAgICAgIGlmICh0aGlzLmNmcykge1xuICAgICAgICAgICAgdGhpcy5kb2NbdGhpcy5jZnMub25mdWxsc2NyZWVuZXJyb3JdID0gaGFuZGxlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3RGdWxsc2NyZWVuKCkge1xuICAgICAgICBpZiAodGhpcy5jZnMpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlW3RoaXMuY2ZzLnJlcXVlc3RGdWxsc2NyZWVuXSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhpdEZ1bGxzY3JlZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmNmcykge1xuICAgICAgICAgICAgdGhpcy5kb2NbdGhpcy5jZnMuZXhpdEZ1bGxzY3JlZW5dKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKHR5cGU6IEZ1bGxzY3JlZW5FdmVudFR5cGUsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCB1c2VDYXB0dXJlPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2Z1bGxzY3JlZW5jaGFuZ2UnIHx8IHR5cGUgPT09ICdmdWxsc2NyZWVuZXJyb3InKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jZnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvYy5hZGRFdmVudExpc3RlbmVyKHRoaXMuY2ZzW3R5cGVdLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IEZ1bGxzY3JlZW5FdmVudFR5cGUsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCB1c2VDYXB0dXJlPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2Z1bGxzY3JlZW5jaGFuZ2UnIHx8IHR5cGUgPT09ICdmdWxsc2NyZWVuZXJyb3InKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jZnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuY2ZzW3R5cGVdLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVGdWxsc2NyZWVuKGZvcmNlRXhpdD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGZvcmNlRXhpdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZnVsbHNjcmVlbkVsZW1lbnQgPT09IHRoaXMuZWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZnVsbHNjcmVlbkVsZW1lbnQgPT09IHRoaXMuZWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZnVsbHNjcmVlbk1hcHBpbmcoKTogRnVsbHNjcmVlbkFQSU1hcHBpbmcgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2ZzO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50RWxlbWVudCgpOiBFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsc2NyZWVuO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2luZGV4LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==