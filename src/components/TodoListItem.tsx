const TodoListItem: React.FC<IListItem> = ({ item }) => {
  return (
    <li>
      {item.isDone && <p className="checked">{item.task}</p>}
      {!item.isDone && <p> {item.task} </p>}

      <span className="task-icons">✖️</span>
    </li>
  );
};

export default TodoListItem;
