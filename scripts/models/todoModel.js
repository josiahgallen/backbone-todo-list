'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		item: '',
		incomplete: true
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/josiah-backbone-todo',
	idAttribute: '_id'
});