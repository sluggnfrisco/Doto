var DoneButton = React.createClass({
  handleDone: function(e) {
    e.preventDefault();
    TodoStore.toggleDone(this.props.todo.id);
  },

  render: function() {
    var doneText = (this.props.todo.done ? 'Undo' : 'Complete');

    // again, React does automatic binding of component method to component
    return (
      <button onClick={this.handleDone}>
        {doneText}
      </button>
    );
  },

});
