(function(root) {
  'use strict';

  // just an object -- don't worry about prototype
  // QUESTION: is this right?

  // _todos is collection of JS objects we get from server
  // _callbacks is to integrate with our React components to ensure that they render on cue. We will call all of the _callbacks every time our collection changes.
  var _todos = [], _callbacks = [];

  root.TodoStore = {

  // below, only have access to what's in scope to the function
  // scope is the object itself -- this.asdf === root.TodoStore.asdf
    changed: function() {
      // QUESTION NOTE: guide says not to worry about this -- should everything be on the root?
      _callbacks.forEach( function(callback) {       // invoke each callback
        callback();
      });
    },

    addChangedHandler: function(func) {
      _callbacks.push(func);
    },

    removeChangedHandler: function(func) {     // QUESTION: this actually works?
      var index = _callbacks.indexOf(func);
      if (index > -1) {
        _callbacks.splice(index, 1);
      }
    },

    all: function() {
      return _todos;
    },

    fetch: function() {
      $.ajax({
        url: '/api/todos',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
          _todos = response;
          this.changed();
        }.bind(this)
      });
    },

    create: function(object) {
      $.ajax({
        url: '/api/todos',
        method: 'POST',
        dataType: 'json',
        data: { todo: object },       // strong params, tho Rails can auto-wrap
        success: function(response) {     // response should carry an ID
          _todos.push(response);
          this.changed();
        }.bind(this)
      });
    },

    destroy: function(id) {
      var todo = _todos.find(function(todo) {
        return todo.id === id;
      });

      if (typeof todo === 'undefined') {return;}    // if don't exist

      $.ajax({
        url: '/api/todos/' + id,
        method: 'DELETE',
        dataType: 'json',
        success: function(response) {
          this.deleteIdFromCollection(id);
          this.changed();
        }.bind(this)
      });
    },

    deleteIdFromCollection: function(id) {
      var deleteIdx = _todos.findIndex(function(todo) {
        return todo.id === id;
      });

      if (deleteIdx > -1) {
        _todos.splice(deleteIdx, 1);
      }
    },

    toggleDone: function(id) {
      var todo = _todos.find( function(todo) {
        return todo.id === id;
      });

      var newDone = !todo.done;

      $.ajax({
        method: 'PATCH',
        url: '/api/todos/' + id,
        dataType: 'json',
        data: {todo: {done: newDone}},
        success: function(response) {
          todo.done = newDone;      // in BB, doing this before would've caused page to render the change much faster
          this.changed();
        }.bind(this),
        error: function() {
          alert('error!');
        }
      });
    },

  };

}(this));       // wtf is this lolol. passing in 'this' as argument? -- guess you want to make sure 'this' is the window

/*
From the notes...
"Pass in this (the root object) as an argument to your IIFE so you can reliably set properties on it. This is a common pattern in isomorphic JavaScript because window is undefined in Node.js."
*/
