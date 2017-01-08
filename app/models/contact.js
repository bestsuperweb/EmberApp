import DS from 'ember-data';

export default DS.Model.extend({
  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isEmailValid', 'isMessageValid'),
  isDisabled: Ember.computed.not('isValid'),
  email: DS.attr('string'),
  message: DS.attr('string')
});
