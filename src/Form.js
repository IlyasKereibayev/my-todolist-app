import React, {useState} from 'react'


const Form = ({handleAddTodoItem}) => {
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
	  event.preventDefault();
	  handleAddTodoItem(value)
	  setValue('')
	}
  }
  return (
	<form className={"form-group"}>
	  <input
		type={"text"}
		placeholder={"Enter todo item"}
		value={value}
		className={"form-control-lg w-100"}
		onChange={handleChange}
		onKeyDown={handleKeyDown}
	  />
	</form>
  )
}

export default Form