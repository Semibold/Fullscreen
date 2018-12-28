# Fullscreen

> [Changelog](changelog.md)

> Modern JavaScript Fullscreen API. Just for browser.

## Install

> Source code is written by TypeScript.

`$ npm i @semibold/fullscreen`

## Usage

```js
// Global
// <script src="./dist/release/fullscreen.js"></script>

// NodeJS Module
const { Fullscreen } = require("@semibold/fullscreen");

// ES-next Module
import { Fullscreen } from "@semibold/fullscreen";
```

## Support

More Information: [Can I Use Fullscreen?](http://caniuse.com/#search=fullscreen)

## Instance & API

```js
/**
 * @param {Element} target - target element
 */
const fs = new Fullscreen(target);

/**
 * @typedef {Object} Metadata
 * @property {string} name
 * @property {string} version
 * @property {string} revision
 * @property {boolean} production
 * @property {string} lastCompiled
 * @return {Metadata}
 */
Fullscreen.metadata;

/**
 * @return {Element} - get current target element
 */
fs.currentElement;

/**
 * @return {FullscreenAPIMapping | null}
 */
fs.fullscreenMapping;

/**
 * @desc The `fullscreenEnabled` attribute tells you whether or not the document is
 *       currently in a state that would allow fullscreen mode to be requested.
 *
 * @return {boolean}
 */
fs.fullscreenEnabled;

/**
 * @desc The `fullscreenElement` attribute tells you the element that's currently being
 *       displayed fullscreen. If this is non-null, the document is in fullscreen mode.
 *       If this is null, the document is not in fullscreen mode.
 *
 * @return {Element | null}
 */
fs.fullscreenElement;

/**
 * @desc Return BrowsingContextPromise
 *
 * @return {PromiseConstructor | null}
 */
fs.getBrowsingContextPromise();

/**
 * @desc The `fs.requestFullscreen()` method issues an asynchronous request to make
 *       the target be displayed full-screen.
 * @desc It will always return promise if BrowsingContextPromise is available.
 *
 * @param {Object} [options]
 * @param {"auto" | "show" | "hide"} [options.navigationUI]
 *
 * @return {Promise<void> | void}
 */
fs.requestFullscreen(options);

/**
 * @desc The `fs.exitFullscreen()` is a method that takes the target out of
 *       full-screen mode.
 * @desc It will always return promise if BrowsingContextPromise is available.
 *
 * @param {boolean} [isBrowsingContext]
 * @desc `fs.exitFullscreen()` does nothing if `document.fullscreenElement !== target`.
 * @desc `fs.exitFullscreen(true)` equal to `docuemnt.exitFullscreen()`.
 *
 * @return {Promise<void> | void}
 */
fs.exitFullscreen(isBrowsingContext);

/**
 * @desc Needn't to add prefix to the `type`
 * @desc The `fullscreenchange` event is fired when the document is switched to/out-of
 *       fullscreen mode.
 * @desc The fullscreenerror event is fired when the document cannot switch to fullscreen
 *       mode.
 *
 * @param {FullscreenEventType} type - "fullscreenchange" | "fullscreenerror"
 * @param {EventListenerOrEventListenerObject} listener
 * @param {boolean | AddEventListenerOptions} [options]
 *
 * @deprecated Use returned promise if BrowsingContextPromise is available.
 */
fs.addListener(type, listener, options);

/**
 * @desc Needn't to add prefix to the `type`
 * @desc Similar to `fs.addEventListener(type, listener, options)`
 *
 * @param {FullscreenEventType} type - "fullscreenchange" | "fullscreenerror"
 * @param {EventListenerOrEventListenerObject} listener
 * @param {boolean | EventListenerOptions} [options]
 *
 * @deprecated Use returned promise if BrowsingContextPromise is available.
 */
fs.removeListener(type, listener, options);
```

## Example

```js
const fs = new Fullscreen(document.body);

function onFullscreenChange(e) {
    console.log("fullscreenchange event triggered");
}

if (fs.fullscreenEnabled) {
    console.log(fs.currentElement === document.body); // log: true

    fs.addListener("fullscreenchange", onFullscreenChange);
    fs.requestFullscreen(); // triggered by gesture

    if (fs.getBrowsingContextPromise()) {
        fs.exitFullscreen()
            .then(() => {
                console.log("Everything is ok.");
            })
            .catch(err => {
                if (err) {
                    console.warn(err);
                } else {
                    alert("Cannot exit fullscreen mode.");
                }
            });
    }
}
```

## Non-public API

```js
/**
 * @desc Be Careful: these methods only support a handful of the latest browsers.
 *
 * @desc Equal to `Element.onfullscreenchange` and `Element.onfullscreenerror`
 * @desc Equal to `Element.addEventListener` and `Element.removeEventListener`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenchange
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenerror
 */
fs.onfullscreenchange;
fs.onfullscreenerror;
fs.addEventListener(type, listener, options);
fs.removeEventListener(type, listener, options);
```

## FAQ

-   Should I use deprecated method(`fs.addListener/fs.removeListener`)?
    -   You should use these method if BrowsingContextPromise is unavailable .
-   Why remove `fs.toggleFullscreen` method?
    -   Because this method isn't reliable if browser support options of `fs.requestFullscreen(options)`.
-   Can I use non-public methods(`fs.addEventListener/fs.removeEventListener/...`)?
    -   It depends on you. These methods only support a handful of the latest browsers.

## Reference

-   [MDN - Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
-   [WhatWG - Fullscreen API](https://fullscreen.spec.whatwg.org/)
