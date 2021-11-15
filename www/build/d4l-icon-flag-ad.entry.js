import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconFlagAndorra = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: `icon icon--flag ${this.classes}`, width: "28", height: "20" }, h("defs", null, h("rect", { id: "a", width: "28", height: "20", x: "0", y: "0", rx: "2" })), h("g", { fill: "none", "fill-rule": "evenodd" }, h("mask", { id: "b", fill: "#fff" }, h("use", { xlinkHref: "#a" })), h("use", { fill: "#FFF", xlinkHref: "#a" }), h("path", { fill: "#1537D1", d: "M0 0h28v20H0z", mask: "url(#b)" }), h("path", { fill: "#EA3058", d: "M13.333 0H28v20H13.333z", mask: "url(#b)" }), h("path", { fill: "#FFCF3C", d: "M9.333 0h9.333v20H9.333z", mask: "url(#b)" }), h("path", { fill: "#FFEDB1", d: "M12.667 8.667H14v.666h-1.333z", mask: "url(#b)" }), h("path", { stroke: "#D32E28", "stroke-width": ".667", d: "M15.067 8.395l.375 2.284a1.12 1.12 0 01-.36.686c-.2.185-.467.302-.752.302h0-.66c-.285 0-.552-.116-.753-.302a1.11 1.11 0 01-.362-.725h0l-.143-1.711 2.655-.534z", mask: "url(#b)" }), h("path", { fill: "#D32E28", d: "M12.667 9.333h2.666V10h-2.666z", mask: "url(#b)" })))));
  }
};
IconFlagAndorra.style = iconCss;

export { IconFlagAndorra as d4l_icon_flag_ad };
