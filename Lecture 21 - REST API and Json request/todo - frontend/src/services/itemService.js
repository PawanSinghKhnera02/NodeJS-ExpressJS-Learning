export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });

  const item = await response.json();
  return mapServerItemToLocalItem(item);
};

export const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/todo");
  const items = await response.json();
  return items.map(mapServerItemToLocalItem);
};

export const markItemCompletedOnServer = async (id, completed) => {
  const response = await fetch(
    `http://localhost:3000/api/todo/${id}/completed`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    }
  );
  const item = await response.json();
  return mapServerItemToLocalItem(item);
};

export const deleteItemFromServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "DELETE",
  });
  const item = await response.json();
  return item._id;
};

// Map server item to local item with normal date format
const mapServerItemToLocalItem = (serverItem) => {
  // Convert ISO date to YYYY-MM-DD
  const formattedDate = new Date(serverItem.date).toISOString().split("T")[0];

  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: formattedDate, // Normal date
    completed: serverItem.completed, // <-- Add this line!
    createAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};
