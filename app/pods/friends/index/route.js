//R friends.index
import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			friends: this.store.findAll('friend')
		});
	}
});
