import Ember from 'ember';

export default Ember.Component.extend({
  height: 100,
  width: 100, // default h&w

	//
  // The following computed property will give us the url for
  // fill-cage. In this case it depends on the properties height and width.
  //

  src: Ember.computed('height', 'width', {
    get() {
    	var pick = Math.round(Math.random()*5);
    	var base = '';

    	switch(pick) {
    		case 0:
    			base = 'http://www.placecage.com/';
    			break;
    		case 1:
    			base = 'http://www.placecage.com/g/';
    			break;
    		case 2:
    			base = 'http://www.placecage.com/c/';
    			break;
    		case 3:
    			base = 'http://www.placecage.com/gif/';
    			break;
    		case 4:
    			base = 'http://www.fillmurray.com/';
    			break;
    		case 5:
    			base = 'http://www.fillmurray.com/g/';
    			break;
    		default:
    			base = 'http://www.fillmurray.com/';
    	}
			return `${base}${this.get('width')}/${this.get('height')}`;
		}
	})
});
