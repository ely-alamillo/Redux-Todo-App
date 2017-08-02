import React, { Component } from 'react';
// import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { addTodo }  from './../actions'


class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({todo: event.target.value});
    // console.log(this.todo);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({todo: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} name='todoForm'>
          <input value={this.state.todo} onChange={this.handleChange} type='text' placeholder="Enter a todo..." ref="NewTodo"></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
// Decorate the form component
// TodoInput = reduxForm({
//   form: 'todoInput' // a unique name for this form
// })(TodoInput);

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { addTodo: addTodo,
      // resetForm: reset,
     }, dispatch);
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ selectMovie: selectMovie }, dispatch);
// };

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);;
