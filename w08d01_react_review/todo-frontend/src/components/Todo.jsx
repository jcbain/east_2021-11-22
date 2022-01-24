const Todo = (props) => {
  const { task, done, updateTodo, deleteTodo } = props;

  const classStatus = done ? 'completed' : '';

  return (
    <div className="todo">
      <h2 className={classStatus}>{task}</h2>
      <button onClick={updateTodo}>{ done ? 'non done?' : 'finished?'}</button>
      <button 
        className='delete'
        onClick={deleteTodo}
        >
          delete
        </button>
    </div>
  )
};

export default Todo;