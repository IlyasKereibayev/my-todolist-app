import React, {useState} from 'react'
import Form from "./Form";
import TodoList from "./TodoList";

const App = () => {
  const [todoItems, setTodoItems] = useState([])
  const handleAddTodoItem = (value) => {
    const newTodoItem = {
      title: value,
	  completed: false
	}
    setTodoItems([...todoItems, newTodoItem])
  }
  const handleTodoItemRemove = (index) => {
    setTodoItems(todoItems.filter((item, ind) => ind !== index))
  }
  const handleTodoItemComplete = (index) => {
    const newTodoItems = todoItems.map((item, ind) => {
      if(ind === index)
        item.completed = !item.completed
	  
	  return item
	})
	
	setTodoItems(newTodoItems)
  }
  return (
	<div className="container-fluid">
	  <div className="wrapper">
		<header><h2>Todo List</h2></header>
		<Form handleAddTodoItem={handleAddTodoItem}/>
		<TodoList
		  todoItems={todoItems}
		  handleTodoItemRemove={handleTodoItemRemove}
		  handleTodoItemComplete={handleTodoItemComplete}
		/>
	  </div>
	</div>
  )
};

export default App;
