import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <ul>
      <TodoListItem />
    </ul>
  );
};

export default TodoList;
