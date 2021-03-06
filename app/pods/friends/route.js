//R friends
import Ember from 'ember';

export default Ember.Route.extend({
	// accessible to all friends.* routes
	model: function() {
		return Ember.RSVP.hash({
			friends: this.store.findAll('friend')
		});
	},
	actions: {
		save(friend) {
			friend.save();
			this.transitionTo('friends.show', friend);
		},
		cancel(friend) {
			// works for new and edit functions
			if (friend.get('hasDirtyAttributes')) {
				friend.rollbackAttributes();
			}
			this.transitionTo('friends');
		},
		delete(friend) {
			friend.destroyRecord();
			this.transitionTo('friends');
		}
	}
});