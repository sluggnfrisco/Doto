var TodoList = React.createClass({
  getInitialState: function() {
    return { collection: TodoStore.all() };
  },

  componentDidMount: function() {
    // register callback -- remember React will automatically bind component methods to the component itself (i do explicitly for the funzies)
    TodoStore.addChangedHandler(this.todosChanged.bind(this));
    // fetch the todos
    TodoStore.fetch();
  },

  componentWillUnmount: function() {
    TodoStore.removeChangedHandler(this.todosChanged)
  },

  todosChanged: function() {
    this.setState({ collection: TodoStore.all() });
  },

  render: function() {
    return (
      <div>{      // REM: need interpolation here
        this.state.collection.map( function(todo) {
          return( <li key={todo.id} >{todo.title}</li> );
        })
      }</div>
    );
  },
});
