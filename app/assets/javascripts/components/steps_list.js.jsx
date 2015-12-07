var StepsList = React.createClass({
  getInitialState: function() {
    return ({ steps: [] });
  },

  componentDidMount: function() {
    // remember, React.js auto-binds component methods to component
    StepStore.addChangedHandler(this.stepsChanged);
    StepStore.fetch(this.props.todoId);
  },

  // DOES THE BINDING CHANGE THE FUNCTION IDENTITY HERE?
  componentWillUnmount: function() {
    StepStore.removeChangedHandler(this.stepsChanged);
  },

  stepsChanged: function() {
    this.setState({ steps: StepStore.all(this.props.todoId) });
  },

  render: function() {
    return (
      <div className='steps-list'>
        {
          this.state.steps.map( function(step) {
            return (
              <StepItem key={step.id} step={step}></StepItem>
            );
          })
        }
      </div>
    );
  },

});
