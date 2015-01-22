import Ember from 'ember';

export default Ember.ObjectController.extend({
  bornOn: function() {
    return new Date();
  }.property()
});
