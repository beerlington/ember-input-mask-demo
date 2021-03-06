/* global moment */
import Ember from 'ember';

export default Ember.TextField.extend({
  classNames: ['input-mask'],

  initializeMask: function() {
    var mask = this.get('mask');

    this.$().inputmask(mask, {
      onBeforeMask: function(value) {
        if (mask === 'mm/dd/yyyy') {
          return moment(new Date(value)).format('L');
        }
      }
    });

    // The input mask changes the value of the input from the original to a
    // formatted version. We need to manually send that change back to the
    // controller.
    this.set('value', this.$().val());
  }.on('didInsertElement')
});
