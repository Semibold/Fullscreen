# Fullscreen

> JavaScript Fullscreen API. Support different frames(documents). Just for browser.

[Navigate to 1.x docs](https://github.com/Aqours/Fullscreen/blob/1.5.3/README.md)


## Install

> Source code is written by TypeScript.

`$ npm i @aqours/fullscreen`

## Usage

```js
// Global
// <script src="./dist/release/fullscreen.js"></script>

// NodeJS Module
const {Fullscreen} = require('@aqours/fullscreen');

// ES-next Module
import {Fullscreen} from '@aqours/fullscreen';
```


## Support

More Information: [Can I Use Fullscreen?](http://caniuse.com/#search=fullscreen)


## Instance & API

```js
/**
 * @param {Element} [target = document.documentElement] - target element
 */
const fs = new Fullscreen(target);

// Static Property
/*
 * @return {Object}
 */
Fullscreen.metadata

// Property & Method
/**
 * @desc The `fullscreenEnabled` attribute tells you whether or not the document is
 *       currently in a state that would allow fullscreen mode to be requested.
 *
 * @return {boolean}
 */
fs.fullscreenEnabled

/**
 * @desc The `fullscreenElement` attribute tells you the element that's currently being
 *       displayed fullscreen. If this is non-null, the document is in fullscreen mode.
 *       If this is null, the document is not in fullscreen mode.
 *
 * @return {Element | null}
 */
fs.fullscreenElement

/**
 * @desc The `fs.requestFullscreen()` method issues an asynchronous request to make
 *       the target be displayed full-screen.
 *
 * @return {Promise<void>|void}
 */
fs.requestFullscreen()

/**
 * @desc Be Careful: It's not equal to `docuemnt.exitFullscreen();` which equal to
 *       `document[fs.fullscreenMapping.exitFullscreen]();` actually. The method does
 *       nothing if `document.fullscreenElement !== target`.
 * @desc The `fs.exitFullscreen()` is a method that takes the target out of
 *       full-screen mode.
 */
fs.exitFullscreen()

/**
 * @desc Toggle target in/out of full-screen mode.
 */
fs.toggleFullscreen()

/**
 * @desc Needn't to add prefix to the `type`
 * @desc The `fullscreenchange` event is fired when the target is switched to/out-of
 *       fullscreen mode.
 * @desc The fullscreenerror event is fired when the target cannot switch to fullscreen
 *       mode.
 * @desc Use `document.addEventListener(fs.fullscreenMapping.fullscreenchange, listener, options)`
 *       or `document[fs.fullscreenMapping.onfullscreenchange] = function (e) {};` if
 *       you want to capture fullscreenchange/fullscreenerror of all elements.
 *
 * @param {FullscreenEventType} type - 'fullscreenchange' | 'fullscreenerror' 
 * @param {EventListenerOrEventListenerObject} listener
 * @param {boolean | AddEventListenerOptions} [options]
 */
fs.addListener(type, listener, options)

/**
 * @desc Needn't to add prefix to the `type`
 * @desc Similar to `fs.addEventListener(type, listener, options)`
 *
 * @param {FullscreenEventType} type - 'fullscreenchange' | 'fullscreenerror' 
 * @param {EventListenerOrEventListenerObject} listener
 * @param {boolean | EventListenerOptions} [options]
 */
fs.removeListener(type, listener, options)

/**
 * @return {FullscreenAPIMapping | null}
 */
fs.fullscreenMapping

/**
 * @return {Element} - get current target element
 */
fs.currentElement
```


## Example

```js
const fs = new Fullscreen(document.body);

function onFullscreenChange(e) {
    console.log('fullscreenchange event triggered');
}

if (fs.fullscreenEnabled) {
    fs.addListener('fullscreenchange', onFullscreenChange);
    fs.requestFullscreen();     // triggered by gesture
    // log: fullscreenchange event triggered
    fs.removeListener('fullscreenchange', onFullscreenChange);
    fs.exitFullscreen();
    // log: n/a

    fs.addListener('fullscreenchange', onFullscreenChange);
    document[fs.fullscreenMapping.onfullscreenchange] = onFullscreenChange;
    fs.requestFullscreen();     // triggered by gesture
    // log: fullscreenchange event triggered
    // log: fullscreenchange event triggered
    fs.removeListener('fullscreenchange', onFullscreenChange);
    fs.exitFullscreen();
    // log: fullscreenchange event triggered
}
```


## Reference

- [MDN - Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
- [WhatWG - Fullscreen API](https://fullscreen.spec.whatwg.org/)
