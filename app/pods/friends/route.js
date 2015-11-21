//R friends
import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		save(friend) {
			friend.save();
			this.transitionTo('friends.show', friend);
		},
		cancel() {
			this.transitionTo('friends');
		},
		delete(friend) {
			friend.destroyRecord();
		}
	}
});