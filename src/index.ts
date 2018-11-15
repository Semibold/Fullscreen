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
                            resolve();
                        }
                    };
                    const onerror = (e: Event) => {
                        if (this.fullscreenElement !== this.currentElement) {
                            this.removeEventListener("fullscreenchange", onchange, true);
                            this.removeEventListener("fullscreenerror", onerror, true);
                            reject(/* new Error(message)? */);
                        }
                    };
                    this.addEventListener("fullscreenchange", onchange, true);
                    this.addEventListener("fullscreenerror", onerror, true);
                });
                const p2 = this.ele[this.cfs.requestFullscreen](options);
                if (Object.prototype.toString.call(p2) === "[object Promise]") {
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
                            if (this.fullscreenElement !== this.currentElement) {
                                this.removeEventListener("fullscreenchange", onchange, true);
                                this.removeEventListener("fullscreenerror", onerror, true);
                                resolve();
                            }
                        };
                        const onerror = (e: Event) => {
                            if (this.fullscreenElement === this.currentElement) {
                                this.removeEventListener("fullscreenchange", onchange, true);
                                this.removeEventListener("fullscreenerror", onerror, true);
                                reject(/* new Error(message)? */);
                            }
                        };
                        this.addEventListener("fullscreenchange", onchange, true);
                        this.addEventListener("fullscreenerror", onerror, true);
                    });
                    const p2 = this.doc[this.cfs.exitFullscreen]();
                    if (Object.prototype.toString.call(p2) === "[object Promise]") {
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

    get onfullscreenchange() {
        if (this.cfs) {
            return this.ele[this.cfs.onfullscreenchange];
        } else {
            return null;
        }
    }

    set onfullscreenchange(callback: ((this: Element, ev: Event) => any) | null) {
        if (this.cfs) {
            this.ele[this.cfs.onfullscreenchange] = callback;
        }
    }

    get onfullscreenerror() {
        if (this.cfs) {
            return this.ele[this.cfs.onfullscreenerror];
        } else {
            return null;
        }
    }

    set onfullscreenerror(callback: ((this: Element, ev: Event) => any) | null) {
        if (this.cfs) {
            this.ele[this.cfs.onfullscreenerror] = callback;
        }
    }

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
}
