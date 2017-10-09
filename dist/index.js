(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Fullscreen = /** @class */ (function () {
        function Fullscreen(ele, doc) {
            if (doc === void 0) { doc = document; }
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
            this.ele = ele;
            this.doc = doc;
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
        return Fullscreen;
    }());
    exports.default = Fullscreen;
});
//# sourceMappingURL=index.js.map