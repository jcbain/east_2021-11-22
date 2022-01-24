import { useState, useEffect} from 'react';
import axios from 'axios';

const useTodoData = () => {
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    axios.get('/api/todos')
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, [])

  const updateTodo = (id) => {

    axios.patch(`/api/todos/${id}`)
      .then((res) => {
        console.log("respsonse",res.data);
        const index = todos.findIndex((todo) => todo.id === id);
        const updatedTodo = res.data;
        const updatedTodos = [...todos.slice(0, index), updatedTodo, ...todos.slice(index + 1)];
        setTodos(updatedTodos); 
      })
    // find the index of the to-be modified object
    // const index = todos.findIndex((todo) => todo.id === id);

    // // find the object that i want to modify
    // const selectedTodo = todos.find((todo) => todo.id === id);

    // // modify the object
    // const updatedTodo = {...selectedTodo, done: !selectedTodo.done};


    // const updatedTodos = [...todos.slice(0, index), updatedTodo, ...todos.slice(index + 1)] 
    // setTodos(updatedTodos)
  };

  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`)
      .then((res) => {

        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);

      })
  }

  const addTodo = (task) => {
    axios.post('/api/todos', {task: task})
      .then((res) => {
        console.log(res)
        const newTodo = res.data;
        setTodos((prev) => [...prev, newTodo])
      })
    // const id = Math.floor(Math.random() * 2000) + 1;
    // const newTodo = {id: id, task: task, done: false};
    // setTodos((prev) => [...prev, newTodo])
  }

  return {todos, updateTodo, deleteTodo, addTodo};
};

export default useTodoData;