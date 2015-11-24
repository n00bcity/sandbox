//R articles.new
import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('article', {
			// state: 'borrowed', not needed since it's the default of the model
			friend: this.modelFor('friends/show')
		}); 
	},

	resetController: function(controller, isExisting) {
		if (isExisting) {
			var model = controller.get('model');
			if (model.get('isNew')) {
				//console.log('destroying: '+model.get('description'));
				model.destroyRecord();
			}
		}
	},

  actions: {
	    save() {
	    	let model = this.modelFor('articles/new');
	    	let valid = !Ember.isEmpty(model.get('description'))&&
	    		!Ember.isEmpty(model.get('notes'));

	    	if (valid) {
	    		model.save().then(() => { this.transitionTo('articles'); });
	    	} else {
	    		this.set('errorMessage', 'Fill all fields');
	    	}
		},
		cancel() {
			//this.modelFor('articles/new').destroyRecord();
			this.transitionTo('articles');
		}
	}
});