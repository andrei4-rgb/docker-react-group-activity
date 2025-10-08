import React from "react";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul className="list-group">
      {tasks.length === 0 ? (
        <li className="list-group-item text-center">No tasks yet.</li>
      ) : (
        tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default TaskList;
