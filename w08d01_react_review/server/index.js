const PORT = 8080;
const express = require('express');  
const cors = require('cors');  
const uniqid = require('uniqid');  
const morgan = require('morgan'); 

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const todos = [
  {id: 1, task: 'feed cat', done: false},
  {id: 2, task: 'feed dog', done: false},
  {id: 3, task: 'wash dishes', done: true}
];

// get all of the toods
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// add a new todo
app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  console.log(req.body)
  const newTodo = {
    id: uniqid(),
    task,
    done: false
  };

  todos.push(newTodo);
  console.log(todos)
  res.json(newTodo);
});

// update a todo 
app.patch('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  console.log(id)
  const selectedTask = todos.find(todo => todo.id == id);
  selectedTask.done = !selectedTask.done;
  res.json(selectedTask)
});

// remove a todo
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(todo => todo.id == id )
  if(index === -1) {
    return res.json({message: 'no todo with that id'});
  };

  todos.splice(index, 1);
  res.json({message: 'todo successfully deleted'})
});


app.listen(PORT, () => console.log(`🤘 server listening on port ${PORT}`));