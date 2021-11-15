import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const iconCss = ".icon{display:block;width:48px;height:48px;color:var(--color-primary);fill:currentColor}.icon__fill--primary-color{fill:var(--color-primary)}.icon__fill--secondary-color{fill:var(--color-secondary)}.icon__fill--none{fill:none}.icon--small{width:24px;height:24px}.icon--flag{width:28px;height:20px}.icon--medium{width:36px;height:36px}.icon--extra-small{width:18px;height:18px}.icon--size-auto{width:auto;height:auto}.icon--current-color{fill:currentColor;color:currentColor}.icon--circle{border-radius:50%;padding:calc(var(--space-xs) + 2px);overflow:visible}.icon--bg-white{background-color:#fff}.icon--bg-primary{background-color:var(--color-primary);color:#fff}.icon--bg-tertiary-light{background-color:var(--color-tertiary-light)}.icon--bg-tertiary-lime{background-color:var(--color-support-green)}.icon--bg-tertiary-yellow{background-color:var(--color-support-yellow)}.icon--bg-neutral-lightest{background-color:var(--color-neutral-lightest)}.icon--bg-tertiary-blue{background-color:var(--color-support-blue)}.icon--rotate-180{transform:rotate(180deg)}.icon--animated-transform{transition:transform 0.2s ease}.icon--margin-horizontal-xss{margin-left:var(--space-xxs);margin-right:var(--space-xxs)}";

let IconChevronUp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
  }
  render() {
    return (h(Host, { "aria-hidden": "true", role: "presentation" }, h("svg", { class: `icon ${this.classes}`, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" }, h("path", { fill: "currentColor", d: "M12.613 12.21l.094.083 5 5c.39.39.39 1.024 0 1.414-.36.36-.928.388-1.32.083l-.094-.083L12 14.415l-4.293 4.292c-.36.36-.928.388-1.32.083l-.094-.083c-.36-.36-.388-.928-.083-1.32l.083-.094 5-5c.36-.36.928-.388 1.32-.083zm0-7l.094.083 5 5c.39.39.39 1.024 0 1.414-.36.36-.928.388-1.32.083l-.094-.083L12 7.415l-4.293 4.292c-.36.36-.928.388-1.32.083l-.094-.083c-.36-.36-.388-.928-.083-1.32l.083-.094 5-5c.36-.36.928-.388 1.32-.083z" }))));
  }
};
IconChevronUp.style = iconCss;

export { IconChevronUp as d4l_icon_chevron_up };