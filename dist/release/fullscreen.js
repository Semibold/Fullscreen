!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var l in r)("object"==typeof exports?exports:e)[l]=r[l]}}(window,function(){return function(e){var n={};function r(l){if(n[l])return n[l].exports;var t=n[l]={i:l,l:!1,exports:{}};return e[l].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=e,r.c=n,r.d=function(e,n,l){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(l,t,function(n){return e[n]}.bind(null,t));return l},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,r){"use strict";r.r(n);var l={mode:"production",name:"@aqours/fullscreen",version:"1.5.2",gitHash:"29a1b00",lastModified:"2018-07-29T11:13:06.679Z"};r.d(n,"Fullscreen",function(){return t});var t=function(){function e(e){this.tab=-1,this.fss=[{fullscreenEnabled:"fullscreenEnabled",fullscreenElement:"fullscreenElement",onfullscreenchange:"onfullscreenchange",onfullscreenerror:"onfullscreenerror",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen",fullscreenchange:"fullscreenchange",fullscreenerror:"fullscreenerror"},{fullscreenEnabled:"webkitFullscreenEnabled",fullscreenElement:"webkitFullscreenElement",onfullscreenchange:"onwebkitfullscreenchange",onfullscreenerror:"onwebkitfullscreenerror",requestFullscreen:"webkitRequestFullscreen",exitFullscreen:"webkitExitFullscreen",fullscreenchange:"webkitfullscreenchange",fullscreenerror:"webkitfullscreenerror"},{fullscreenEnabled:"mozFullScreenEnabled",fullscreenElement:"mozFullScreenElement",onfullscreenchange:"onmozfullscreenchange",onfullscreenerror:"onmozfullscreenerror",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen",fullscreenchange:"mozfullscreenchange",fullscreenerror:"mozfullscreenerror"},{fullscreenEnabled:"msFullscreenEnabled",fullscreenElement:"msFullscreenElement",onfullscreenchange:"onmsfullscreenchange",onfullscreenerror:"onmsfullscreenerror",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen",fullscreenchange:"MSFullscreenChange",fullscreenerror:"MSFullscreenError"}],this.ele=e||document.documentElement,this.doc=this.ele.ownerDocument,this.checkoutFullscreen()}return Object.defineProperty(e,"metadata",{get:function(){return l},enumerable:!0,configurable:!0}),e.prototype.checkoutFullscreen=function(){for(var e=0;e<this.fss.length;e++)if(this.fss[e].fullscreenEnabled in this.doc){this.tab=e;break}this.cfs=this.fss[this.tab]||null},Object.defineProperty(e.prototype,"fullscreenEnabled",{get:function(){return!!this.cfs&&Boolean(this.doc[this.cfs.fullscreenEnabled])},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullscreenElement",{get:function(){return this.cfs&&this.doc[this.cfs.fullscreenElement]||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onfullscreenchange",{get:function(){return this.cfs?this.doc[this.cfs.onfullscreenchange]:null},set:function(e){this.cfs&&(this.doc[this.cfs.onfullscreenchange]=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onfullscreenerror",{get:function(){return this.cfs?this.doc[this.cfs.onfullscreenerror]:null},set:function(e){this.cfs&&(this.doc[this.cfs.onfullscreenerror]=e)},enumerable:!0,configurable:!0}),e.prototype.requestFullscreen=function(){this.cfs&&this.ele[this.cfs.requestFullscreen]()},e.prototype.exitFullscreen=function(){this.cfs&&this.doc[this.cfs.exitFullscreen]()},e.prototype.addEventListener=function(e,n,r){"fullscreenchange"!==e&&"fullscreenerror"!==e||this.cfs&&this.doc.addEventListener(this.cfs[e],n,r)},e.prototype.removeEventListener=function(e,n,r){"fullscreenchange"!==e&&"fullscreenerror"!==e||this.cfs&&this.doc.removeEventListener(this.cfs[e],n,r)},e.prototype.toggleFullscreen=function(e){e?this.fullscreenElement===this.ele&&this.exitFullscreen():this.fullscreenElement===this.ele?this.exitFullscreen():this.requestFullscreen()},Object.defineProperty(e.prototype,"fullscreenMapping",{get:function(){return this.cfs},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentElement",{get:function(){return this.ele},enumerable:!0,configurable:!0}),e}()}])});
//# sourceMappingURL=fullscreen.js.map