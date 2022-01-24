import { useState } from 'react';

const NewTodoForm = (props) => {
  const { addTodo } = props;
  const [ value, setValue ] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if( !value ) {
      return;
    }
    addTodo(value);
    setValue("")

  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>Got something new todo?</label>
      <input 
        name="todo"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder='write it here'
      />
      <button type="submit">Add Todo</button>

    </form>
  )
};

export default NewTodoForm;