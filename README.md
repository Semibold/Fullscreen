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
// Use this like the spec interface.
/**
 * @return {boolean}
 */
fs.fullscreenEnabled

/**
 * @return {Element | null}
 */
fs.fullscreenElement

/**
 * @desc fullscreen event
 */
fs.onfullscreenchange
fs.onfullscreenerror

/**
 * @desc request fullscreen
 * @desc like spec: target.requestFullscreen()
 */
fs.requestFullscreen()

/**
 * @desc exit fullscreen
 */
fs.exitFullscreen()



// Other interface.
/**
 * @desc needn't to add prefix to `type`
 * @param {FullscreenEventType} type - 'fullscreenchange' | 'fullscreenerror' 
 * @param {EventListenerOrEventListenerObject} listener
 * @param {boolean | AddEventListenerOptions} [options]
 */
fs.addEventListener(type, listener, options)

/**
 * @desc needn't to add prefix to `type`
 * @param {FullscreenEventType} type - 'fullscreenchange' | 'fullscreenerror' 
 * @param {EventListenerOrEventListenerObject} listener
 * @param {boolean | EventListenerOptions} [options]
 */
fs.removeEventListener(type, listener, options)

/**
 * Notice: this method refer to target element, `exitFullscreen` refer to ownerDocument.
 *         in other words, `exitFullscreen` can controll other element besides target element.
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
