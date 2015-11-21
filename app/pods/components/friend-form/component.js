//C friend-form
// http://emberigniter.com/send-action-does-not-fire/#comment-2294225034
import Ember from 'ember';

export default Ember.Component.extend({
	isValid: Ember.computed(
	  'friend.email',
	  'friend.firstName',
	  'friend.lastName',
	  'friend.twitter',
    {
			get() {
				return !Ember.isEmpty(this.get('friend.email')) &&
					!Ember.isEmpty(this.get('friend.firstName')) &&
					!Ember.isEmpty(this.get('friend.lastName')) &&
					!Ember.isEmpty(this.get('friend.twitter'));
			} 
		}
	),
	actions: {
		cancel() {
			this.sendAction('cancelComponent');
			return true;
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