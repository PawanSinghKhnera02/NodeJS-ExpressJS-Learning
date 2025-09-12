import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-10">
      <input
        type="text"
        placeholder="Enter your task..."
        value={todoName}
        onChange={handleNameChange}
        className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDateChange}
        className="px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
      />
      <button
        type="button"
        onClick={handleAddButtonClicked}
        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-200 shadow-lg"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTodo;
