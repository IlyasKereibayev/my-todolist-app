import React from "react";
import TodoItem from "./TodoItem";


const TodoList = ({todoItems, handleTodoItemRemove, handleTodoItemComplete}) => {
  return (
	<ul className="list-group">
	  {todoItems.map((item, index) => {
		return <TodoItem
		  key={index}
		  item={item}
		  index={index}
		  handleTodoItemRemove={handleTodoItemRemove}
		  handleTodoItemComplete={handleTodoItemComplete}
		/>
	  })}
	</ul>
  )
}

export default TodoList