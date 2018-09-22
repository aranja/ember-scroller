import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  scroller: service(),

  actions: {
    scroll() {
      const scroller = get(this, 'scroller');
      if (!get(scroller, 'hasOffset')) {
        const headerEl = document.querySelectorAll('header')[0];
        scroller.addOffset(headerEl);
      }

      const element = document.getElementById('scroll-to');
      scroller.scrollTo(element);
    }
  }
});