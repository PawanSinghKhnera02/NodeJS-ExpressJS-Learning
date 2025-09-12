import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick, onToggleComplete, completed }) {
  return (
    <div className="space-y-4">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoDate={item.dueDate}
          todoName={item.name}
          completed={item.completed}
          onDeleteClick={onDeleteClick}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoItems;
