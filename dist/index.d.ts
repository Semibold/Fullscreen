/**
 *
 */
declare global  {
    interface Document {
        readonly webkitFullscreenEnabled: Document['fullscreenEnabled'];
        readonly mozFullScreenEnabled: Document['fullscreenEnabled'];
        readonly msFullscreenEnabled: Document['fullscreenEnabled'];
        readonly webkitFullscreenElement: Document['fullscreenElement'];
        readonly mozFullScreenElement: Document['fullscreenElement'];
        readonly msFullscreenElement: Document['fullscreenElement'];
        onwebkitfullscreenchange: Document['onfullscreenchange'];
        onmozfullscreenchange: Document['onfullscreenchange'];
        onmsfullscreenchange: Document['onfullscreenchange'];
        onwebkitfullscreenerror: Document['onfullscreenerror'];
        onmozfullscreenerror: Document['onfullscreenerror'];
        onmsfullscreenerror: Document['onfullscreenerror'];
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
export interface FullscreenAPIMapping {
    fullscreenEnabled: 'fullscreenEnabled' | 'webkitFullscreenEnabled' | 'mozFullScreenEnabled' | 'msFullscreenEnabled';
    fullscreenElement: 'fullscreenElement' | 'webkitFullscreenElement' | 'mozFullScreenElement' | 'msFullscreenElement';
    onfullscreenchange: 'onfullscreenchange' | 'onwebkitfullscreenchange' | 'onmozfullscreenchange' | 'onmsfullscreenchange';
    onfullscreenerror: 'onfullscreenerror' | 'onwebkitfullscreenerror' | 'onmozfullscreenerror' | 'onmsfullscreenerror';
    requestFullscreen: 'requestFullscreen' | 'webkitRequestFullscreen' | 'mozRequestFullScreen' | 'msRequestFullscreen';
    exitFullscreen: 'exitFullscreen' | 'webkitExitFullscreen' | 'mozCancelFullScreen' | 'msExitFullscreen';
    fullscreenchange: 'fullscreenchange' | 'webkitfullscreenchange' | 'mozfullscreenchange' | 'MSFullscreenChange';
    fullscreenerror: 'fullscreenerror' | 'webkitfullscreenerror' | 'mozfullscreenerror' | 'MSFullscreenError';
}
declare class Fullscreen {
    private ele;
    private doc;
    private tab;
    private cfs;
    private fss;
    constructor(ele: Element, doc?: Document);
    private checkoutFullscreen();
    readonly fullscreenEnabled: boolean;
    readonly fullscreenElement: Element | null;
    onfullscreenchange: Document['onfullscreenchange'];
    onfullscreenerror: Document['onfullscreenerror'];
    requestFullscreen(): void;
    exitFullscreen(): void;
    addEventListener(type: 'fullscreenchange' | 'fullscreenerror', listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    removeEventListener(type: 'fullscreenchange' | 'fullscreenerror', listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}
export default Fullscreen;
export {};
