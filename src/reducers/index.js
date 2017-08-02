import { combineReducers } from 'redux';
import todosReducer from './todosReducer'

// this combines reducers to be able to pass them in all at once
// to the state
const rootReducers = combineReducers({
  todos: todosReducer,

  // todoCompleted: todoCompletedReducer;
});

export default rootReducers;
