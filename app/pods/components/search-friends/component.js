import Ember from 'ember';

export default Ember.Component.extend({
	tagName:"div",
	slx: '',

	actions: {
		searchResult(str) {
			this.set('slx','delt');
			console.log(str+this.get('slx'));
		}
	}
});
