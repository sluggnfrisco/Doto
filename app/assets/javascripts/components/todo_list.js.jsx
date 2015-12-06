var TodoList = React.createClass({
  getInitialState: function() {
    return { todos: TodoStore.all() };
  },

  componentDidMount: function() {
    // register callback -- remember React will automatically bind component methods to the component itself (i do explicitly for the funzies)
    TodoStore.addChangedHandler(this.todosChanged.bind(this));
    // fetch the todos
    TodoStore.fetch();
  },

  componentWillUnmount: function() {
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  todosChanged: function() {
    this.setState({ todos: TodoStore.all() });    // this will get updated at every change -- that is, we'll always grab the most recent collection
  },

  render: function() {
    // NOTE REM: all our JSX is compiled into JS server-side now, so we can't write JSX in the HTML
    return (
      <div className='todos-container'>      // REM: need interpolation here
        {
          this.state.todos.map( function(todo) {
            return( <TodoListItem key={todo.id} todo={todo}></TodoListItem> );
          })
        }

        <TodoForm></TodoForm>
      </div>
    );
  },
});
