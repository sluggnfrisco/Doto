var StepItem = React.createClass({
  // getInitialState: function() {},

  render: function() {
    return (
      <div className='step-item'>
        {this.props.step.content}
        <DoneButton type='step'
                    step={this.props.step}
                    todoId={this.props.todoId}>
        </DoneButton>
      </div>
    );
  },

});
