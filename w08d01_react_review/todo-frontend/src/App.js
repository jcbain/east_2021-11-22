import './App.scss';
import Todo from './components/Todo';
import NewTodoForm from './components/NewTodoForm';
import useTodoData from './hooks/useTodoData';
import { useState} from 'react';


function App() {

  const { todos, updateTodo, deleteTodo, addTodo } = useTodoData();


  const todoItems = todos.map((todo) => {
    return (
      <Todo 
        key={todo.id}
        task={todo.task}
        done={todo.done}
        updateTodo={() => updateTodo(todo.id)}
        deleteTodo={() => deleteTodo(todo.id)}
      />
    );
  })


  return (
    <div className="App">

      <h1>Clever Todo Title</h1>
      <NewTodoForm addTodo={addTodo}/>
      <section className="todos">
        {todoItems}

        {/* <Todo 
          task={singleTodo.task} 
          done={singleTodo.done}
          updateTodo={() => updateTodo(singleTodo.id)}
        /> */}

      </section>
    </div>
  );
}

export default App;
