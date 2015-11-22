//R articles.new
import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('article', {
			// state: 'borrowed', not needed since it's the default of the model
			friend: this.modelFor('friends/show')
		}); 
	},
  actions: {
	    save() {
				var model = this.modelFor('articles/new');
				model.save().then(() => { this.transitionTo('articles');
		}); 
	},
		cancel() {
			this.transitionTo('articles');
		}
	}
});