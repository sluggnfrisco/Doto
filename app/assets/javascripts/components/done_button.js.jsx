var DoneButton = React.createClass({
  // should have a hash object that keeps track of which done functions and props belong to either type of DoneButton

  // can't do the below because TodoStore hasn't been defined. can wrap around with a function for invocation later, but it'll throw error if can't find props.todo or props.step
  // doneFuncMaps: {
  //   todo: TodoStore.toggleDone.bind(null, props.todo.id),
  //   step: StepStore.toggleDone.bind(null, props.todoId, props.step.id),
  // },

  handleDone: function(e) {
    e.preventDefault();
    var props = this.props;

    var store = (props.type === 'todo' ? TodoStore : StepStore);

    if (props.type === 'todo') {
      TodoStore.toggleDone(props.todo.id);
    } else if (props.type === 'step') {
      StepStore.toggleDone(props.todoId, props.step.id);
    }
  },

  render: function() {
    var props = this.props;

    // should probably refactor the below, or set some initial variables. type of done button could be anything
    var item = (props.type === 'todo' ? props.todo : props.step);
    var doneText = (item.done ? 'Undo' : 'Complete');

    // again, React does automatic binding of component method to component
    return (
      <button onClick={this.handleDone}>
        {doneText}
      </button>
    );
  },

});
