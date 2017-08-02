import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class TodoList extends Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <div>
        <center>
          <h1> Todos List </h1>
          <hr />
          <ul>
            {
              this.props.todos.map((element, index) =>
                <div key={element.id}>
                  <li key={element.id}>{element.todo}</li>
                </div>
              )
            }
          </ul>
        </center>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(TodoList);
