import { metadata } from "./metadata";

export interface FullscreenOptions {
    navigationUI: "auto" | "show" | "hide";
}

export interface FullscreenAPIMapping {
    fullscreenEnabled: "fullscreenEnabled" | "webkitFullscreenEnabled" | "mozFullScreenEnabled" | "msFullscreenEnabled";
    fullscreenElement: "fullscreenElement" | "webkitFullscreenElement" | "mozFullScreenElement" | "msFullscreenElement";
    onfullscreenchange:
        | "onfullscreenchange"
        | "onwebkitfullscreenchange"
        | "onmozfullscreenchange"
        | "onmsfullscreenchange";
    onfullscreenerror: "onfullscreenerror" | "onwebkitfullscreenerror" | "onmozfullscreenerror" | "onmsfullscreenerror";
    requestFullscreen: "requestFullscreen" | "webkitRequestFullscreen" | "mozRequestFullScreen" | "msRequestFullscreen";
    exitFullscreen: "exitFullscreen" | "webkitExitFullscreen" | "mozCancelFullScreen" | "msExitFullscreen";
    fullscreenchange: "fullscreenchange" | "webkitfullscreenchange" | "mozfullscreenchange" | "MSFullscreenChange";
    fullscreenerror: "fullscreenerror" | "webkitfullscreenerror" | "mozfullscreenerror" | "MSFullscreenError";
}

export type FullscreenEventType = "fullscreenchange" | "fullscreenerror";

export class Fullscreen {
    private readonly ele: Element;
    private readonly doc: Document;
    private readonly win: Window;
    private readonly cfs: FullscreenAPIMapping | null = null;
    private readonly fss = [
        {
            fullscreenEnabled: "fullscreenEnabled",
            fullscreenElement: "fullscreenElement",
            onfullscreenchange: "onfullscreenchange",
            onfullscreenerror: "onfullscreenerror",
            requestFullscreen: "requestFullscreen",
            exitFullscreen: "exitFullscreen",
            fullscreenchange: "fullscreenchange",
            fullscreenerror: "fullscreenerror",
        },
        {
            fullscreenEnabled: "webkitFullscreenEnabled",
            fullscreenElement: "webkitFullscreenElement",
            onfullscreenchange: "onwebkitfullscreenchange",
            onfullscreenerror: "onwebkitfullscreenerror",
            requestFullscreen: "webkitRequestFullscreen",
            exitFullscreen: "webkitExitFullscreen",
            fullscreenchange: "webkitfullscreenchange",
            fullscreenerror: "webkitfullscreenerror",
        },
        {
            fullscreenEnabled: "mozFullScreenEnabled",
            fullscreenElement: "mozFullScreenElement",
            onfullscreenchange: "onmozfullscreenchange",
            onfullscreenerror: "onmozfullscreenerror",
            requestFullscreen: "mozRequestFullScreen",
            exitFullscreen: "mozCancelFullScreen",
            fullscreenchange: "mozfullscreenchange",
            fullscreenerror: "mozfullscreenerror",
        },
        {
            fullscreenEnabled: "msFullscreenEnabled",
            fullscreenElement: "msFullscreenElement",
            onfullscreenchange: "onmsfullscreenchange",
            onfullscreenerror: "onmsfullscreenerror",
            requestFullscreen: "msRequestFullscreen",
            exitFullscreen: "msExitFullscreen",
            fullscreenchange: "MSFullscreenChange",
            fullscreenerror: "MSFullscreenError",
        },
    ];

    constructor(ele: Element) {
        this.ele = ele;
        this.doc = this.ele.ownerDocument || document;
        this.win = this.doc.defaultView || window;
        for (let i = 0; i < this.fss.length; i++) {
            if (this.fss[i].fullscreenEnabled in this.doc) {
                this.cfs = <FullscreenAPIMapping>this.fss[i];
                break;
            }
        }
    }

    static get metadata() {
        return metadata;
    }

    get currentElement(): Element {
        return this.ele;
    }

    get fullscreenMapping(): FullscreenAPIMapping | null {
        return this.cfs;
    }

    get fullscreenEnabled(): boolean {
        if (this.cfs) {
            return Boolean(this.doc[this.cfs.fullscreenEnabled]);
        } else {
            return false;
        }
    }

    get fullscreenElement(): Element | null {
        if (this.cfs) {
            return this.doc[this.cfs.fullscreenElement] || null;
        } else {
            return null;
        }
    }

    getBrowsingContextPromise(): PromiseConstructor | null {
        const maybePromise = this.win["Promise"];
        if (
            typeof maybePromise === "function" &&
            typeof maybePromise.resolve === "function" &&
            typeof maybePromise.reject === "function"
        ) {
            return maybePromise;
        } else {
            return null;
        }
    }

    requestFullscreen(options?: FullscreenOptions): Promise<void> | void {
        if (this.cfs) {
            // tslint:disable-next-line
            const Promise = this.getBrowsingContextPromise();
            if (Promise) {
                const p1: Promise<void> = new Promise((resolve, reject) => {
                    const onchange = (e: Event) => {
                        if (this.fullscreenElement === this.currentElement) {
                            this.removeEventListener("fullscreenchange", onchange, true);
                            this.removeEventListener("fullscreenerror", onerror, true);
                            this.removeListener("fullscreenchange", onchange);
                            this.removeListener("fullscreenerror", onerror);
                            resolve();
                        }
                    };
                    const onerror = (e: Event) => {
                        if (this.fullscreenElement !== this.currentElement) {
                            this.removeEventListener("fullscreenchange", onchange, true);
                            this.removeEventListener("fullscreenerror", onerror, true);
                            this.removeListener("fullscreenchange", onchange);
                            this.removeListener("fullscreenerror", onerror);
                            reject(/* new Error(message)? */);
                        }
                    };
                    this.addEventListener("fullscreenchange", onchange, true);
                    this.addEventListener("fullscreenerror", onerror, true);
                    this.addListener("fullscreenchange", onchange);
                    this.addListener("fullscreenerror", onerror);
                });
                const p2 = this.ele[this.cfs.requestFullscreen](options);
                if (p2 && typeof p2.then === "function" && typeof p2.catch === "function") {
                    return p2;
                } else {
                    return p1;
                }
            } else {
                return this.ele[this.cfs.requestFullscreen](options);
            }
        }
    }

    exitFullscreen(isBrowsingContext?: boolean): Promise<void> | void {
        if (this.cfs) {
            // tslint:disable-next-line
            const Promise = this.getBrowsingContextPromise();
            if (Promise) {
                if (isBrowsingContext || this.fullscreenElement === this.ele) {
                    const p1: Promise<void> = new Promise((resolve, reject) => {
                        const onchange = (e: Event) => {
                            if (isBrowsingContext || this.fullscreenElement !== this.currentElement) {
                                this.removeEventListener("fullscreenchange", onchange, true);
                                this.removeEventListener("fullscreenerror", onerror, true);
                                this.removeListener("fullscreenchange", onchange);
                                this.removeListener("fullscreenerror", onerror);
                                resolve();
                            }
                        };
                        const onerror = (e: Event) => {
                            if (isBrowsingContext || this.fullscreenElement === this.currentElement) {
                                this.removeEventListener("fullscreenchange", onchange, true);
                                this.removeEventListener("fullscreenerror", onerror, true);
                                this.removeListener("fullscreenchange", onchange);
                                this.removeListener("fullscreenerror", onerror);
                                reject(/* new Error(message)? */);
                            }
                        };
                        this.addEventListener("fullscreenchange", onchange, true);
                        this.addEventListener("fullscreenerror", onerror, true);
                        this.addListener("fullscreenchange", onchange);
                        this.addListener("fullscreenerror", onerror);
                    });
                    const p2 = this.doc[this.cfs.exitFullscreen]();
                    if (p2 && typeof p2.then === "function" && typeof p2.catch === "function") {
                        return p2;
                    } else {
                        return p1;
                    }
                } else {
                    return Promise.reject(
                        new this.win["TypeError"](
                            "The document containing the element isn't fully active; that is, it's not the current active document.",
                        ),
                    );
                }
            } else {
                if (isBrowsingContext || this.fullscreenElement === this.ele) {
                    return this.doc[this.cfs.exitFullscreen]();
                }
            }
        }
    }

    /**
     * @desc Modern APIs
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenchange#Browser_compatibility
     */
    get onfullscreenchange() {
        if (this.cfs) {
            return this.ele[this.cfs.onfullscreenchange];
        } else {
            return null;
        }
    }

    /**
     * @desc Modern APIs
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenchange#Browser_compatibility
     */
    set onfullscreenchange(callback: ((this: Element, ev: Event) => any) | null) {
        if (this.cfs) {
            this.ele[this.cfs.onfullscreenchange] = callback;
        }
    }

    /**
     * @desc Modern APIs
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenerror#Browser_compatibility
     */
    get onfullscreenerror() {
        if (this.cfs) {
            return this.ele[this.cfs.onfullscreenerror];
        } else {
            return null;
        }
    }

    /**
     * @desc Modern APIs
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenerror#Browser_compatibility
     */
    set onfullscreenerror(callback: ((this: Element, ev: Event) => any) | null) {
        if (this.cfs) {
            this.ele[this.cfs.onfullscreenerror] = callback;
        }
    }

    /**
     * @desc Modern APIs
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenchange#Browser_compatibility
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenerror#Browser_compatibility
     */
    addEventListener(
        type: FullscreenEventType,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ) {
        if (this.cfs) {
            if (type === "fullscreenchange" || type === "fullscreenerror") {
                this.ele.addEventListener(this.cfs[type], listener, options);
            }
        }
    }

    /**
     * @desc Modern APIs
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenchange#Browser_compatibility
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenerror#Browser_compatibility
     */
    removeEventListener(
        type: FullscreenEventType,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ) {
        if (this.cfs) {
            if (type === "fullscreenchange" || type === "fullscreenerror") {
                this.ele.removeEventListener(this.cfs[type], listener, options);
            }
        }
    }

    /**
     * @deprecated Use returned promise if BrowsingContextPromise is available.
     */
    addListener(
        type: FullscreenEventType,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ) {
        if (this.cfs) {
            if (type === "fullscreenchange" || type === "fullscreenerror") {
                this.doc.addEventListener(this.cfs[type], listener, options);
            }
        }
    }

    /**
     * @deprecated Use returned promise if BrowsingContextPromise is available.
     */
    removeListener(
        type: FullscreenEventType,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ) {
        if (this.cfs) {
            if (type === "fullscreenchange" || type === "fullscreenerror") {
                this.doc.removeEventListener(this.cfs[type], listener, options);
            }
        }
    }
}
