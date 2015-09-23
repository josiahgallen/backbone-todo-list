'use strict';

var Backbone = require('backbone');
var TodoModel = require('../models/todoModel.js');

module.exports = Backbone.Collection.extend({
	model: TodoModel,
	url: 'http://tiyfe.herokuapp.com/collections/josiah-backbone-todo'
})