import DS from 'ember-data';

export default DS.Model.extend({
  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  email: DS.attr('string')
});
