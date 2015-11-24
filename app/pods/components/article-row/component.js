import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	article: null,
	articleStates: ['borrowed','returned'],

	booleanProp: Ember.computed(function() {
		if (this.get('article.state') === "returned") {
			return false;
		} else {
			return true;
		}
	}),
	watchState: function(){
		let article = this.get('article');
		if (article.get('state')==="returned") {
			article.set('state', 'borrowed');
		} else {
			article.set('state', 'returned');
		}
		this.sendAction('save', article);
	}.observes('booleanProp'),

	actions: {
		delete() {
			let article = this.get('article');
			this.sendAction('delete', article);
		}
	}
});
