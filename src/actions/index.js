let todoId = 0;

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    id: todoId++,
    payload: todo,
  }
};

// export default addTodo;
