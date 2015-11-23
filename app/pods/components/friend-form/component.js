//C friend-form
// http://emberigniter.com/send-action-does-not-fire/#comment-2294225034
import Ember from 'ember';

export default Ember.Component.extend({
	hasEmail: Ember.computed.notEmpty('friend.email'),
	hasFirstName: Ember.computed.notEmpty('friend.firstName'),
	hasLastName: Ember.computed.notEmpty('friend.lastName'),
	hasTwitter: Ember.computed.notEmpty('friend.twitter'),
	isValid: Ember.computed.and('hasEmail','hasFirstName','hasLastName','hasTwitter'),
	actions: {
		cancel(friend) {
			this.sendAction('cancelComponent', friend);
		},
		save(friend) {
			if (this.get('isValid')) {
				this.sendAction('saveComponent', friend);
			} else {
				this.set('errorMessage', 'Fill out the forms');
			}
		}
	}
});