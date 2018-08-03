!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var n=r();for(var t in n)("object"==typeof exports?exports:e)[t]=n[t]}}(window,function(){return function(e){var r={};function n(t){if(r[t])return r[t].exports;var l=r[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var l in e)n.d(t,l,function(r){return e[r]}.bind(null,l));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";n.r(r);var t={mode:"production",name:"@aqours/fullscreen",version:"2.0.1",gitHash:"573d70b",lastModified:"2018-08-03T07:09:47.000Z"};n.d(r,"Fullscreen",function(){return l});var l=function(){function e(e){this.tab=-1,this.originListeners=[],this.wrappedListeners=[],this.fss=[{fullscreenEnabled:"fullscreenEnabled",fullscreenElement:"fullscreenElement",onfullscreenchange:"onfullscreenchange",onfullscreenerror:"onfullscreenerror",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen",fullscreenchange:"fullscreenchange",fullscreenerror:"fullscreenerror"},{fullscreenEnabled:"webkitFullscreenEnabled",fullscreenElement:"webkitFullscreenElement",onfullscreenchange:"onwebkitfullscreenchange",onfullscreenerror:"onwebkitfullscreenerror",requestFullscreen:"webkitRequestFullscreen",exitFullscreen:"webkitExitFullscreen",fullscreenchange:"webkitfullscreenchange",fullscreenerror:"webkitfullscreenerror"},{fullscreenEnabled:"mozFullScreenEnabled",fullscreenElement:"mozFullScreenElement",onfullscreenchange:"onmozfullscreenchange",onfullscreenerror:"onmozfullscreenerror",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen",fullscreenchange:"mozfullscreenchange",fullscreenerror:"mozfullscreenerror"},{fullscreenEnabled:"msFullscreenEnabled",fullscreenElement:"msFullscreenElement",onfullscreenchange:"onmsfullscreenchange",onfullscreenerror:"onmsfullscreenerror",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen",fullscreenchange:"MSFullscreenChange",fullscreenerror:"MSFullscreenError"}],this.ele=e||document.documentElement,this.doc=this.ele.ownerDocument;for(var r=0;r<this.fss.length;r++)if(this.fss[r].fullscreenEnabled in this.doc){this.tab=r;break}this.cfs=this.fss[this.tab]||null}return Object.defineProperty(e,"metadata",{get:function(){return t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullscreenEnabled",{get:function(){return!!this.cfs&&Boolean(this.doc[this.cfs.fullscreenEnabled])},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullscreenElement",{get:function(){return this.cfs&&this.doc[this.cfs.fullscreenElement]||null},enumerable:!0,configurable:!0}),e.prototype.requestFullscreen=function(){if(this.cfs)return this.ele[this.cfs.requestFullscreen]()},e.prototype.exitFullscreen=function(){this.cfs&&this.fullscreenElement===this.ele&&this.doc[this.cfs.exitFullscreen]()},e.prototype.toggleFullscreen=function(){this.fullscreenElement===this.ele?this.exitFullscreen():this.requestFullscreen()},e.prototype.generateWrappedListener=function(e){var r=this;return"function"==typeof e?function(n){return n.target===r.ele&&e.call(n.currentTarget,n)}:Object.create(e,{handleEvent:{writable:!0,enumerable:!0,configurable:!0,value:function(n){return n.target===r.ele&&e.handleEvent.call(n.currentTarget,n)}}})},e.prototype.getWrappedListener=function(e,r){void 0===r&&(r=!1);var n=this.originListeners.indexOf(e);if(-1===n){var t=this.generateWrappedListener(e);return r||(this.originListeners.push(e),this.wrappedListeners.push(t)),t}t=this.wrappedListeners[n];return r&&(this.originListeners.splice(n,1),this.wrappedListeners.splice(n,1)),t},e.prototype.addListener=function(e,r,n){"fullscreenchange"!==e&&"fullscreenerror"!==e||this.cfs&&this.doc.addEventListener(this.cfs[e],this.getWrappedListener(r),n)},e.prototype.removeListener=function(e,r,n){"fullscreenchange"!==e&&"fullscreenerror"!==e||this.cfs&&this.doc.removeEventListener(this.cfs[e],this.getWrappedListener(r,!0),n)},Object.defineProperty(e.prototype,"fullscreenMapping",{get:function(){return this.cfs},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentElement",{get:function(){return this.ele},enumerable:!0,configurable:!0}),e}()}])});
//# sourceMappingURL=fullscreen.js.map