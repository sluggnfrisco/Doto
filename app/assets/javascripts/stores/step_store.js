(function(root) {
  'use strict';

  var _steps = {}, _callbacks = [];

  root.StepStore = {
    changed: function() {
      _callbacks.forEach( function(callback) {
        callback();
      });
    },

    addChangedHandler: function(func) {
      _callbacks.push(func);
    },

    removeChangedHandler: function(func) {
      var idx = _callbacks.indexOf(func);
      if (idx > -1) {
        _callbacks.splice(idx, 1);
      }
    },

    all: function(todoId) {
      return _steps[todoId];
    },

    fetch: function(todoId) {
      $.ajax({
        url: '/api/todos/' + todoId + '/steps',
        method: 'GET',
        dataType: 'json',     // NOTE REM: type of response EXPECTED from server
        success: function(response) {
          // debugger;
          _steps[todoId] = response;
          this.changed();
        }.bind(this),
        error: function() {
          alert('error!');
        }
      });
    },

    toggleDone: function(todoId, stepId) {        // should set todoId as instance var?
      var step = _steps[todoId].find( function(step) {
        return step.id === stepId;
      });
      var newDone = !step.done;

      $.ajax({
        url: '/api/todos/' + todoId + '/steps/' + stepId,
        method: 'PATCH',
        dataType: 'json',
        data: { step: { done: newDone } },
        success: function(response) {
          step.done = newDone;
          this.changed();
        }
      });
    },

    destroy: function(todoId, stepId) {
      var step = _steps[todoId].find( function(step) {
        return step.id === stepId;
      });

      if (typeof step === 'undefined') {return;}

      $.ajax({
        url: '/api/todos/' + todoId + '/steps/' + stepId,
        method: 'DELETE',
        dataType: 'json',
        success: function(response) {
          this.deleteIdFromCollection(todoId, stepId);
          this.changed();
        }
      });
    },

    deleteIdFromCollection: function(todoId, stepId) {
      var deleteIdx = _steps[todoId].findIndex( function(step) {
        return step.id === stepId;
      });

      if (deleteIdx > -1) {
        _steps[todoId].splice(deleteIdx, 1);
      }
    },

  };
}(this));
