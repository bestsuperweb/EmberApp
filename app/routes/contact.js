import Ember from 'ember';

export default Ember.Route.extend({
	model(){		  
		return this.store.createRecord('contact');
	},
	actions: {
	    saveContact(newContact) {
	      newContact.save().then((response) =>{
	        this.controller.set('responseMessage', `We got your message and we’ll get in touch soon: ${response.get('id')}`);
	        this.controller.set('emailAddress', '');
	        this.controller.set('message', '');
	      });
	    },
	    willTransition() {
	      // rollbackAttributes() removes the record from the store
	      // if the model 'isNew'
	      this.controller.get('model').rollbackAttributes();
	    }
	  }
});
