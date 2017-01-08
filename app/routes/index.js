// app/routes/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('invitation');
  },

  actions: {
  	saveInvitation(newInvitation) {
      newInvitation.save().then((response) =>{
        this.controller.set('responseMessage', `Thank you! We've just saved your email address, response_id: ${response.get('id')}`);
        this.controller.set('email', '');
      });
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }

});