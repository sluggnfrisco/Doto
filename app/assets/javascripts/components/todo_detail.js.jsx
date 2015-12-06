TodoDetail = React.createClass({
  handleDestroy: function(e) {
    e.preventDefault();
    // this will remove the current todo from TodoStore, and trigger a change(), which will trigger a re-render of TodoList via setState on the collection -- this particular line item will consequently be left out
    TodoStore.destroy(this.props.todo.id);
  },

  render: function() {
    return(
      <div className='todo-detail'>
        {this.props.todo.body}
        <button onClick={this.handleDestroy}>Delete</button>
      </div>
    );
  },
});
// ;lkjhgfghjkllkjhgyuiol,mnbvgui,mbgyukmnhj
