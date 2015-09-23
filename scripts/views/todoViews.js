'use strict';

var Backbone = require('backbone');
var _ = require ('backbone/node_modules/underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
    tagName: 'li',
    initialize: function(options){
        _.bindAll(
        	this,
        	'render',
        	'toggleCompletion',
        	'remove'
        );
        if (typeof options === 'undefined') {
        	this.options = {};
        } else {
        	this.options = options;
        }
        this.$el.on('click', this.toggleCompletion);
        this.model.on('change', this.render);
        this.render();

    },
    render: function() {
    	var newItemTemplate = _.template($('#item-row').html());
    	//var todoText = this.model.get('item');
    	this.$el.html(newItemTemplate(this.model.toJSON()));
    	if(!this.model.get('incomplete')) {
    		this.$el.css('text-decoration', 'line-through');
    	} else {
    		this.$el.css('text-decoration', 'none');
    	}
    	this.$el.find('button').on('click', this.remove);
    },
    toggleCompletion: function() {
    	this.model.set({
    		incomplete: !this.model.get('incomplete')
    	})
    },
    remove: function() {
		this.$el.remove();
	}
});