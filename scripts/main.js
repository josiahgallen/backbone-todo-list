'use strict';

var $ = require('jquery');
var TodoModel = require('./models/todoModel.js');
var TodoView = require('./views/todoViews.js');
var TodoCollection = require('./collections/todoCollection.js');
var _ = require('backbone/node_modules/underscore');

$(document).ready(function() {

	var $form = $('form');
	var $newTask = $('input');
	var $list = $('ul');
	
	var todos = new TodoCollection;
	
	$form.on('submit', function(e) {
		console.log('submit');
		e.preventDefault();
		todos.add({
			item: $newTask.val()
		});
		$newTask.val('');
		console.log(todos)
	});
	
	todos.on('add', function(newItem) {
		newItem.save();
		var newView = new TodoView({model: newItem});
		
			$list.append(newView.$el);
	})

	todos.fetch();

});