# Fullscreen

> JavaScript Fullscreen API. Support different frames(documents).


## Install

> Source code is written by TypeScript.

`$ npm install --save git@github.com:Aqours/Fullscreen.git`


## Support

More Information: [Can I Use Fullscreen?](http://caniuse.com/#search=fullscreen)


## Instance & API

```js
/**
 * @param {Element} [target = document.documentElement] - target element
 */
const fs = new Fullscreen(target);

// Property & Method
// Use this like the spec API.
/**
 * @return {boolean}
 */
fs.fullscreenEnabled

/**
 * @return {Element | null}
 */
fs.fullscreenElement

/**
 * Fullscreen Event
 */
fs.onfullscreenchange
fs.onfullscreenerror

/**
 * Request Fullscreen
 * like spec: target.requestFullscreen()
 */
fs.requestFullscreen()

/**
 * Exit Fullscreen
 */
fs.exitFullscreen()



// Extenal API
/**
 * @summary needn't to add prefix to `type`
 * @param {'fullscreenchange' | 'fullscreenerror'} type
 * @param {EventListenerOrEventListenerObject} listener
 * @param {boolean} [useCapture]
 */
fs.addEventListener(type, listener, useCapture)
fs.removeEventListener(type, listener, useCapture)

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
