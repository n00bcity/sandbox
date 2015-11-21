//ember server --proxy http://api.ember-cli-101.com
//import DS from 'ember-data';
//export default DS.RESTAdapter.extend({});
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
	namespace: 'api'
});