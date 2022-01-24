# Todo App

## Description
*A UI to display a list of todos and where we can add or remove existing todos. We also want the ability to check whether or nto we have done them.*

## User Stories
- as a user, I want to be able to see all of the todos
- as a user, I want to be able to add a new todo
- as a user, I want to be able to indicate that I have done a todo
- as a user, I want the ability to remove a todo

## Structure of our data
- todos: an array of objects
  > id
  > task
  > done 

## Components
- App 
  - Header
  - NewTodoForm ({ addTodo })
  - todo list <section>
    - Todo ({task, done, updateTodo, deleteTodo })

