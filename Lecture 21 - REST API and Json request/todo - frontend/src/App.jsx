import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useEffect, useState } from "react";
import {
  addItemToServer,
  deleteItemFromServer,
  getItemsFromServer,
  markItemCompletedOnServer, // use this!
} from "./services/itemService";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsFromServer().then((initialItems) => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const item = await addItemToServer(itemName, itemDueDate);
    setTodoItems([...todoItems, item]);
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    setTodoItems(todoItems.filter((item) => item.id !== deletedId));
  };

  const handleToggleComplete = async (id) => {
    const item = todoItems.find((item) => item.id === id);
    const updatedItem = await markItemCompletedOnServer(id, !item.completed);
    setTodoItems((todoItems) =>
      todoItems.map((item) =>
        item.id === id ? { ...item, completed: updatedItem.completed } : item
      )
    );
  };

  // Separate incomplete and completed items
  const incompleteItems = todoItems.filter((item) => !item.completed);
  const completedItems = todoItems.filter((item) => item.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <AppName />
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-10">
          <AddTodo onNewItem={handleNewItem} />
          {todoItems.length === 0 && <WelcomeMessage />}
          <TodoItems
            todoItems={incompleteItems}
            onDeleteClick={handleDeleteItem}
            onToggleComplete={handleToggleComplete}
          />
          {completedItems.length > 0 && (
            <>
              <div className="mt-8 mb-2 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                Completed Tasks :
              </div>
              <TodoItems
                todoItems={completedItems}
                onDeleteClick={handleDeleteItem}
                onToggleComplete={handleToggleComplete}
                completed
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
