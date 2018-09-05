declare global {
    interface Document {
        readonly webkitFullscreenEnabled: Document["fullscreenEnabled"];
        readonly mozFullScreenEnabled: Document["fullscreenEnabled"];
        readonly msFullscreenEnabled: Document["fullscreenEnabled"];
        readonly webkitFullscreenElement: Document["fullscreenElement"];
        readonly mozFullScreenElement: Document["fullscreenElement"];
        readonly msFullscreenElement: Document["fullscreenElement"];
        onwebkitfullscreenchange: Document["onfullscreenchange"];
        onmozfullscreenchange: Document["onfullscreenchange"];
        onmsfullscreenchange: Document["onfullscreenchange"];
        onwebkitfullscreenerror: Document["onfullscreenerror"];
        onmozfullscreenerror: Document["onfullscreenerror"];
        onmsfullscreenerror: Document["onfullscreenerror"];
        webkitExitFullscreen(): void;
        mozCancelFullScreen(): void;
        msExitFullscreen(): void;
    }
    interface Element {
        webkitRequestFullscreen(): void;
        mozRequestFullScreen(): void;
        msRequestFullscreen(): void;
    }
}

import { metadata } from "./metadata";

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
    private readonly tab: number = -1;
    private readonly cfs: FullscreenAPIMapping | null;
    private readonly originListeners: EventListenerOrEventListenerObject[] = [];
    private readonly wrappedListeners: EventListenerOrEventListenerObject[] = [];
    private readonly fss = [
        {
            fullscreenEnabled: "fullscreenEnabled",
            fullscreenElement: "fullscreenElement",
            onfullscreenchange: "onfullscreenchange",
            onfullscreenerror: "onfullscreenerror",
            requestFullscreen: "requestFullscreen",
            exitFullscreen: "exitFullscreen",
            fullscreenchange: "fullscreenchange",
            fullscreenerror: "fullscreenerror"
        },
        {
            fullscreenEnabled: "webkitFullscreenEnabled",
            fullscreenElement: "webkitFullscreenElement",
            onfullscreenchange: "onwebkitfullscreenchange",
            onfullscreenerror: "onwebkitfullscreenerror",
            requestFullscreen: "webkitRequestFullscreen",
            exitFullscreen: "webkitExitFullscreen",
            fullscreenchange: "webkitfullscreenchange",
            fullscreenerror: "webkitfullscreenerror"
        },
        {
            fullscreenEnabled: "mozFullScreenEnabled",
            fullscreenElement: "mozFullScreenElement",
            onfullscreenchange: "onmozfullscreenchange",
            onfullscreenerror: "onmozfullscreenerror",
            requestFullscreen: "mozRequestFullScreen",
            exitFullscreen: "mozCancelFullScreen",
            fullscreenchange: "mozfullscreenchange",
            fullscreenerror: "mozfullscreenerror"
        },
        {
            fullscreenEnabled: "msFullscreenEnabled",
            fullscreenElement: "msFullscreenElement",
            onfullscreenchange: "onmsfullscreenchange",
            onfullscreenerror: "onmsfullscreenerror",
            requestFullscreen: "msRequestFullscreen",
            exitFullscreen: "msExitFullscreen",
            fullscreenchange: "MSFullscreenChange",
            fullscreenerror: "MSFullscreenError"
        }
    ];

    constructor(ele?: Element) {
        this.ele = ele || document.documentElement;
        this.doc = this.ele.ownerDocument;
        for (let i = 0; i < this.fss.length; i++) {
            if (this.fss[i].fullscreenEnabled in this.doc) {
                this.tab = i;
                break;
            }
        }
        this.cfs = <FullscreenAPIMapping>this.fss[this.tab] || null;
    }

    static get metadata() {
        return metadata;
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

    requestFullscreen(): Promise<void> | void {
        if (this.cfs) {
            return this.ele[this.cfs.requestFullscreen]();
        }
    }

    exitFullscreen(): void {
        if (this.cfs) {
            if (this.fullscreenElement === this.ele) {
                this.doc[this.cfs.exitFullscreen]();
            }
        }
    }

    toggleFullscreen(): void {
        if (this.fullscreenElement === this.ele) {
            this.exitFullscreen();
        } else {
            this.requestFullscreen();
        }
    }

    private generateWrappedListener(listener: EventListenerOrEventListenerObject): EventListenerOrEventListenerObject {
        if (typeof listener === "function") {
            return (e: Event) => e.target === this.ele && listener.call(e.currentTarget, e);
        } else {
            return Object.create(listener, {
                handleEvent: {
                    writable: true,
                    enumerable: true,
                    configurable: true,
                    value: (e: Event) => e.target === this.ele && listener.handleEvent.call(listener, e)
                }
            });
        }
    }

    private getWrappedListener(
        listener: EventListenerOrEventListenerObject,
        pop: boolean = false
    ): EventListenerOrEventListenerObject {
        if (typeof listener === "function") {
            // EventListener
        } else {
            if (listener && typeof listener.handleEvent === "function") {
                // EventListenerObject
            } else {
                // Invalid
                return listener;
            }
        }
        const i = this.originListeners.indexOf(listener);
        if (i === -1) {
            const wrappedListener = this.generateWrappedListener(listener);
            if (!pop) {
                this.originListeners.push(listener);
                this.wrappedListeners.push(wrappedListener);
            }
            return wrappedListener;
        } else {
            const wrappedListener = this.wrappedListeners[i];
            if (pop) {
                this.originListeners.splice(i, 1);
                this.wrappedListeners.splice(i, 1);
            }
            return wrappedListener;
        }
    }

    addListener(
        type: FullscreenEventType,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
    ) {
        if (type === "fullscreenchange" || type === "fullscreenerror") {
            if (this.cfs) {
                this.doc.addEventListener(this.cfs[type], this.getWrappedListener(listener), options);
            }
        }
    }

    removeListener(
        type: FullscreenEventType,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions
    ) {
        if (type === "fullscreenchange" || type === "fullscreenerror") {
            if (this.cfs) {
                this.doc.removeEventListener(this.cfs[type], this.getWrappedListener(listener, true), options);
            }
        }
    }

    get fullscreenMapping(): FullscreenAPIMapping | null {
        return this.cfs;
    }

    get currentElement(): Element {
        return this.ele;
    }
}
