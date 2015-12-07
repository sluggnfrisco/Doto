var StepItem = React.createClass({
  // getInitialState: function() {},

  render: function() {
    return (
      <div className='step-item'>{this.props.step.content}</div>
    );
  },

});
