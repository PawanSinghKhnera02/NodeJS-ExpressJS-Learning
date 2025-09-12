function TodoItem({
  id,
  todoName,
  todoDate,
  completed,
  onDeleteClick,
  onToggleComplete,
}) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl border border-gray-100 shadow group transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-white via-blue-50 to-purple-50 ${
        completed ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(id)}
          className="mr-4 h-5 w-5 accent-purple-700"
        />
        <div>
          <h3
            className={`text-lg font-semibold ${
              completed ? "line-through text-gray-400" : "text-gray-800"
            } group-hover:text-purple-700 transition`}
          >
            {todoName}
          </h3>
          <p className="text-xs text-gray-400 mt-1">{todoDate}</p>
        </div>
      </div>
      <button
        onClick={() => onDeleteClick(id)}
        className="ml-4 p-2 rounded-full bg-red-100 hover:bg-red-500 hover:text-white text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
        title="Delete"
      >
        {/* You can use an icon here if you want */}
        &#10005;
      </button>
    </div>
  );
}

export default TodoItem;
