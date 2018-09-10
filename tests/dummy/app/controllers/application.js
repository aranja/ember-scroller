import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  scroller: service(),

  actions: {
    scroll() {
      const element = document.getElementById('scroll-to');
      get(this, 'scroller').scrollTo(element);
    }
  }
});