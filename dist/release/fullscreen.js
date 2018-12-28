/*! @preserve @semibold/fullscreen: 3.1.0-2219a1b (2018-12-28T09:59:30.931Z) */
!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var t in r)("object"==typeof exports?exports:e)[t]=r[t]}}(window,function(){return function(r){var t={};function l(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}return l.m=r,l.c=t,l.d=function(e,n,r){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)l.d(r,t,function(e){return n[e]}.bind(null,t));return r},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="",l(l.s=0)}([function(e,n,r){"use strict";r.r(n);var t=Object.freeze({name:"@semibold/fullscreen",version:"3.1.0",revision:"2219a1b",production:!0,lastCompiled:"2018-12-28T09:59:30.931Z"});r.d(n,"Fullscreen",function(){return l});var l=function(){function e(e){this.cfs=null,this.fss=[{fullscreenEnabled:"fullscreenEnabled",fullscreenElement:"fullscreenElement",onfullscreenchange:"onfullscreenchange",onfullscreenerror:"onfullscreenerror",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen",fullscreenchange:"fullscreenchange",fullscreenerror:"fullscreenerror"},{fullscreenEnabled:"webkitFullscreenEnabled",fullscreenElement:"webkitFullscreenElement",onfullscreenchange:"onwebkitfullscreenchange",onfullscreenerror:"onwebkitfullscreenerror",requestFullscreen:"webkitRequestFullscreen",exitFullscreen:"webkitExitFullscreen",fullscreenchange:"webkitfullscreenchange",fullscreenerror:"webkitfullscreenerror"},{fullscreenEnabled:"mozFullScreenEnabled",fullscreenElement:"mozFullScreenElement",onfullscreenchange:"onmozfullscreenchange",onfullscreenerror:"onmozfullscreenerror",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen",fullscreenchange:"mozfullscreenchange",fullscreenerror:"mozfullscreenerror"},{fullscreenEnabled:"msFullscreenEnabled",fullscreenElement:"msFullscreenElement",onfullscreenchange:"onmsfullscreenchange",onfullscreenerror:"onmsfullscreenerror",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen",fullscreenchange:"MSFullscreenChange",fullscreenerror:"MSFullscreenError"}],this.ele=e,this.doc=this.ele.ownerDocument||document,this.win=this.doc.defaultView||window;for(var n=0;n<this.fss.length;n++)if(this.fss[n].fullscreenEnabled in this.doc){this.cfs=this.fss[n];break}}return Object.defineProperty(e,"metadata",{get:function(){return t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentElement",{get:function(){return this.ele},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullscreenMapping",{get:function(){return this.cfs},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullscreenEnabled",{get:function(){return!!this.cfs&&Boolean(this.doc[this.cfs.fullscreenEnabled])},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullscreenElement",{get:function(){return this.cfs&&this.doc[this.cfs.fullscreenElement]||null},enumerable:!0,configurable:!0}),e.prototype.getBrowsingContextPromise=function(){var e=this.win.Promise;return"function"==typeof e&&"function"==typeof e.resolve&&"function"==typeof e.reject?e:null},e.prototype.requestFullscreen=function(e){var s=this;if(this.cfs){var n=this.getBrowsingContextPromise();if(n){var r=new n(function(n,r){var t=function(e){s.fullscreenElement===s.currentElement&&(s.removeEventListener("fullscreenchange",t,!0),s.removeEventListener("fullscreenerror",l,!0),s.removeListener("fullscreenchange",t),s.removeListener(
"fullscreenerror",l),n())},l=function(e){s.fullscreenElement!==s.currentElement&&(s.removeEventListener("fullscreenchange",t,!0),s.removeEventListener("fullscreenerror",l,!0),s.removeListener("fullscreenchange",t),s.removeListener("fullscreenerror",l),r())};s.addEventListener("fullscreenchange",t,!0),s.addEventListener("fullscreenerror",l,!0),s.addListener("fullscreenchange",t),s.addListener("fullscreenerror",l)}),t=this.ele[this.cfs.requestFullscreen](e);return t&&"function"==typeof t.then&&"function"==typeof t.catch?t:r}return this.ele[this.cfs.requestFullscreen](e)}},e.prototype.exitFullscreen=function(s){var c=this;if(this.cfs){var e=this.getBrowsingContextPromise();if(e){if(s||this.fullscreenElement===this.ele){var n=new e(function(n,r){var t=function(e){(s||c.fullscreenElement!==c.currentElement)&&(c.removeEventListener("fullscreenchange",t,!0),c.removeEventListener("fullscreenerror",l,!0),c.removeListener("fullscreenchange",t),c.removeListener("fullscreenerror",l),n())},l=function(e){(s||c.fullscreenElement===c.currentElement)&&(c.removeEventListener("fullscreenchange",t,!0),c.removeEventListener("fullscreenerror",l,!0),c.removeListener("fullscreenchange",t),c.removeListener("fullscreenerror",l),r())};c.addEventListener("fullscreenchange",t,!0),c.addEventListener("fullscreenerror",l,!0),c.addListener("fullscreenchange",t),c.addListener("fullscreenerror",l)}),r=this.doc[this.cfs.exitFullscreen]();return r&&"function"==typeof r.then&&"function"==typeof r.catch?r:n}return e.reject(new this.win.TypeError("The document containing the element isn't fully active; that is, it's not the current active document."))}if(s||this.fullscreenElement===this.ele)return this.doc[this.cfs.exitFullscreen]()}},Object.defineProperty(e.prototype,"onfullscreenchange",{get:function(){return this.cfs?this.ele[this.cfs.onfullscreenchange]:null},set:function(e){this.cfs&&(this.ele[this.cfs.onfullscreenchange]=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onfullscreenerror",{get:function(){return this.cfs?this.ele[this.cfs.onfullscreenerror]:null},set:function(e){this.cfs&&(this.ele[this.cfs.onfullscreenerror]=e)},enumerable:!0,configurable:!0}),e.prototype.addEventListener=function(e,n,r){this.cfs&&("fullscreenchange"!==e&&"fullscreenerror"!==e||this.ele.addEventListener(this.cfs[e],n,r))},e.prototype.removeEventListener=function(e,n,r){this.cfs&&("fullscreenchange"!==e&&"fullscreenerror"!==e||this.ele.removeEventListener(this.cfs[e],n,r))},e.prototype.addListener=function(e,n,r){this.cfs&&("fullscreenchange"!==e&&"fullscreenerror"!==e||this.doc.addEventListener(this.cfs[e],n,r))},e.prototype.removeListener=function(e,n,r){this.cfs&&("fullscreenchange"!==e&&"fullscreenerror"!==e||this.doc.removeEventListener(this.cfs[e],n,r))},e}()}])});
//# sourceMappingURL=fullscreen.js.map