# Fullscreen

> JavaScript Fullscreen API. Support different frames(documents). Just for browser.


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
 * @desc like: Document.fullscreenEnabled
 * @desc The `fullscreenEnabled` attribute tells you whether or not the document is
 *       currently in a state that would allow fullscreen mode to be requested.
 *
 * @return {boolean}
 */
fs.fullscreenEnabled

/**
 * @desc like: Document.fullscreenElement
 * @desc The `fullscreenElement` attribute tells you the element that's currently being
 *       displayed fullscreen. If this is non-null, the document is in fullscreen mode.
 *       If this is null, the document is not in fullscreen mode.
 *
 * @return {Element | null}
 */
fs.fullscreenElement

/**
 * @desc like: Document.onfullscreenchange
 * @desc like: Document.onfullscreenerror
 * @desc The `fullscreenchange` event is fired when the browser is switched to/out-of
 *       fullscreen mode.
 * @desc The fullscreenerror event is fired when the browser cannot switch to fullscreen
 *       mode.
 */
fs.onfullscreenchange
fs.onfullscreenerror

/**
 * @desc like: Element.requestFullscreen()
 * @desc The `Element.requestFullscreen()` method issues an asynchronous request to make
 *       the element be displayed full-screen.
 */
fs.requestFullscreen()

/**
 * @desc like: Document.exitFullscreen()
 * @desc The `Document.exitFullscreen()` is a method that takes the document out of
 *       full-screen mode; this is used to reverse the effects of a call to make an
 *       element in the document full-screen using its Element.requestFullscreen() method
 */
fs.exitFullscreen()



// Other interface.
/**
 * @desc like: Document.addEventListener
 * @desc needn't to add prefix to `type`
 * @param {FullscreenEventType} type - 'fullscreenchange' | 'fullscreenerror' 
 * @param {EventListenerOrEventListenerObject} listener
 * @param {boolean | AddEventListenerOptions} [options]
 */
fs.addEventListener(type, listener, options)

/**
 * @desc like: Document.removeEventListener
 * @desc needn't to add prefix to `type`
 * @param {FullscreenEventType} type - 'fullscreenchange' | 'fullscreenerror' 
 * @param {EventListenerOrEventListenerObject} listener
 * @param {boolean | EventListenerOptions} [options]
 */
fs.removeEventListener(type, listener, options)

/**
 * @desc Note: This method refer to target element, `exitFullscreen` refer to
 *             ownerDocument. In other words, `toggleFullscreen` can only switch 
 *             target element to/out-of fullscreen mode.
 * @param {boolean} [forceExit]
 */
fs.toggleFullscreen(forceExit)

/**
 * @return {FullscreenAPIMapping | null}
 */
fs.fullscreenMapping

/**
 * @return {Element} - get current target element
 */
fs.currentElement
```


## Reference

- [MDN - Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
- [WhatWG - Fullscreen API](https://fullscreen.spec.whatwg.org/)
