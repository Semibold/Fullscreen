/**
 * @summary TypeScript Version
 */

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
    private tab = -1;
    private cfs: FullscreenAPIMapping | null;
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
        this.checkoutFullscreen();
    }

    static get metadata() {
        return metadata;
    }

    private checkoutFullscreen() {
        for (let i = 0; i < this.fss.length; i++) {
            if (this.fss[i].fullscreenEnabled in this.doc) {
                this.tab = i;
                break;
            }
        }
        this.cfs = <FullscreenAPIMapping>this.fss[this.tab] || null;
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

    get onfullscreenchange() {
        if (this.cfs) {
            return this.doc[this.cfs.onfullscreenchange];
        } else {
            return null;
        }
    }

    set onfullscreenchange(handler: Document["onfullscreenchange"]) {
        if (this.cfs) {
            this.doc[this.cfs.onfullscreenchange] = handler;
        }
    }

    get onfullscreenerror() {
        if (this.cfs) {
            return this.doc[this.cfs.onfullscreenerror];
        } else {
            return null;
        }
    }

    set onfullscreenerror(handler: Document["onfullscreenerror"]) {
        if (this.cfs) {
            this.doc[this.cfs.onfullscreenerror] = handler;
        }
    }

    requestFullscreen(): Promise<void> | void {
        if (this.cfs) {
            return this.ele[this.cfs.requestFullscreen]();
        }
    }

    exitFullscreen(): void {
        if (this.cfs) {
            this.doc[this.cfs.exitFullscreen]();
        }
    }

    addEventListener(
        type: FullscreenEventType,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
    ) {
        if (type === "fullscreenchange" || type === "fullscreenerror") {
            if (this.cfs) {
                this.doc.addEventListener(this.cfs[type], listener, options);
            }
        }
    }

    removeEventListener(
        type: FullscreenEventType,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions
    ) {
        if (type === "fullscreenchange" || type === "fullscreenerror") {
            if (this.cfs) {
                this.doc.removeEventListener(this.cfs[type], listener, options);
            }
        }
    }

    toggleFullscreen(forceExit?: boolean): void {
        if (forceExit) {
            if (this.fullscreenElement === this.ele) {
                this.exitFullscreen();
            }
        } else {
            if (this.fullscreenElement === this.ele) {
                this.exitFullscreen();
            } else {
                this.requestFullscreen();
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
