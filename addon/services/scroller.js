import Service from '@ember/service';
import { get, set } from '@ember/object';

const DEFAULT_DURATION = 500;
const easeInOut = (x) => x < 0.5 ? 2 * x * x : -1 + (4 - 2 * x) * x;

export default Service.extend({
  init() {
    this._super(...arguments);

    this.onFrame = this.onFrame.bind(this);
    set(this, 'offsetElements', []);
  },

  addOffset(element) {
    if (!element) {
      return;
    }
    get(this, 'offsetElements').addObject(element);
  },

  deleteOffset(element) {
    if (!element) {
      return;
    }
    get(this, 'offsetElements').removeObject(element);
  },

  offset(element) {
    const offsetElements = get(this, 'offsetElements');

    const box = element.getBoundingClientRect();
    const offsetTop = box.top + window.pageYOffset;
    
    return offsetElements.reduce((offset, element) => {
      return offset + element.offsetHeight;
    }, offsetTop);
  },

  onFrame() {
    let now = performance.now();
    if (now >= this.endTime) {
      return;
    }

    let positionInTime = (now - this.startTime) / (this.endTime - this.startTime);
    window.scrollTo(0, Math.round(this.startY + this.deltaY * easeInOut(positionInTime)));
    window.requestAnimationFrame(this.onFrame);
  },

  scrollTo(element, duration = DEFAULT_DURATION) {
    this.startY = window.pageYOffset;
    this.targetY = this.offset(element);
    this.deltaY = this.targetY - this.startY;
    this.startTime = performance.now();
    this.endTime = this.startTime + duration;

    window.requestAnimationFrame(this.onFrame);
  }
});