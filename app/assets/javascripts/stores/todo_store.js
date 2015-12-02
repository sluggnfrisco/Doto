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

    removeChangedHandler: function(func) {
      var index = _callbacks.indexOf(func);
      if (index > -1) {
        _callbacks.splice(index, 1);
      }
    },

    all: function() {
      return _todos;
    },

    fetch: function() {
      //make request to api/todos
      // success: _todos = array of returned objects, and call changed()
    },

    create: function(todo) {
      // make a POST request to persist it to the database.
      // Upon success add the server response (which should contain an id) to the _todos array
      // Again, call changed();
    },

    destroy: function(id) {
      //Only make the ajax request if the todo exists to begin with. Upon success be sure to splice the object out of _todos before calling changed()
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
      // This should make a PATCH request and change the specified todo's done to the opposite of whatever it is. Then, of course, call changed().
    },

  };

}());
