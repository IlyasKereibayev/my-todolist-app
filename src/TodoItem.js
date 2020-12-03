import React from "react";

const TodoItem = ({item, index, handleTodoItemRemove, handleTodoItemComplete}) => {
  const handleOnClick = (index) => {
    handleTodoItemRemove(index)
  }
  const handleOnChange = (index) => {
    handleTodoItemComplete(index)
  }
  return (
    <li className={`list-group-item ${item.completed ? "completed" : ""}`}>
      <input
        className="mr-2"
        type="checkbox"
        value=""
        onChange={() => handleOnChange(index)}
      />
      {item.title}
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={() => handleOnClick(index)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  )
}

export default TodoItem