// Reducers are used to only change/set the state and nothing else

// this reducers sets our state when new todos are passed in
// const todosReducer
export default (state = [], action) => {

  // console.log('inside todosReducer this is the state: ' + state);
  // console.log('this is the payload: ' + action.id);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          todo: action.payload,
          complete: false,
        }
      ]
    default:
      return state;
  }
};

// export default todosReducer;
