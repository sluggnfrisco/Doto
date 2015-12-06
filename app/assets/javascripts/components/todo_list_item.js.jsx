var TodoListItem = React.createClass({
  getInitialState: function() {
    return ({ detailShown: false });
  },

  componentDidMount: function() {},
  componentWillUnmount: function() {},

  toggleDetail: function() {
    this.setState({ detailShown: !this.state.detailShown });
  },

  // QUESTION: SHOULD HAVE A CONDITIONAL RETURN?? one including detail, one without...
  render: function() {
    var todo = this.props.todo;

    // NOTE REM: React uses keys to diff nodes on the page -- here, it would be diffing nodes 1 level higher, so I don't need the key here. Only where it's iterating thru variables to display them on the page

    //QUESTION: CONDITIONAL ASSIGNMENT OF DETAIL OUT HERE? CAN CREATE EITHER A NEW REACTEL WITH JSX, OR NOTHING -- AND ADD THAT TO THE VERY END!

    var todoDetail;
    todoDetail = <TodoDetail todo={this.props.todo}></TodoDetail>;


    var asdf = (<li>herro</li>);

    return (
      <div className='todo-item'>
        <li onClick={this.toggleDetail}>{todo.title}</li>
        <DoneButton todo={this.props.todo}></DoneButton>
        {detail}
      </div>
    );
  },
});
