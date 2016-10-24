import React, { PropTypes } from 'react'
import Todo from './Todo'

function getFilteredTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      // TODO
      return todos.filter(todo => !todo.completed);
    case 'SHOW_COMPLETED':
      // TODO
      console.log("testing");
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

const TodoList = ({
  todos,
  filter,
  onTodoClick,
  onTodoDelete
}) => (
  <ul>
    {getFilteredTodos(todos, filter).map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onDelete={() => onTodoDelete(todo.id)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  filter: PropTypes.string.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
};

export default TodoList;
