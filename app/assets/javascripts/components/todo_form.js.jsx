var TodoForm = React.createClass({  // this is a *controlled component*. value of the element will always reflect what our render function tells it
  getInitialState: function() {
    return ({
      titleValue: '',
      bodyValue: '',
    });
  },

  componentDidMount: function() {},
  componentWillUnmount: function() {},

  updateTitle: function(e) {
    this.setState({
      titleValue: e.currentTarget.value
    });
  },

  updateBody: function(e) {
    this.setState({
      bodyValue: e.currentTarget.value
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();         // REM: need this

    var newTodo = {
      title: this.state.titleValue,
      body: this.state.bodyValue
    };

    // NOTE REM: the change callback set up in todo_list.js.jsx could still be out there, but React.js will ignore it if all elements set up are the same
    TodoStore.create(newTodo);

    this.setState({
      titleValue: '',
      bodyValue: '',
    });
  },

  render: function() {
    // we should bind the onChange and onSubmit, but react takes care of this for us
    return(
      <form onSubmit={this.handleSubmit}>
        Title
        <input name='title'
               value={this.state.titleValue}
               onChange={this.updateTitle}>
        </input>
        Body
        <input name='body'
               value={this.state.bodyValue}
               onChange={this.updateBody}>
        </input>
        <button>Submit</button>
      </form>
    );
  },
});
