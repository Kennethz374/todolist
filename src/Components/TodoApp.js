import React, {useState} from "react";
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";
import uuid from "uuid/v4";


export default function TodoApp() {
  const initialTodos = [
    {id: 1, task: "Buy Groceries", completed: false},
    {id: 2, task: "Study React", completed: false},
    {id: 3, task: "Confirm Emails", completed: true},
    {id: 4, task: "Buy toys for Evie", completed: true},
    {id: 5, task: "Dimsum with Mom", completed: false},
  ]
  const [todos, setTodos] = useState(initialTodos)

  const addTodos = newTodoText => {
    setTodos([...todos, {id:uuid(), task: newTodoText, completed:false }])
  }
  const removeTodo = todoId => {
    const updatedTodo = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodo);
  }
  const toggleTodo = todoId => {
    const updateTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed}:todo);
    setTodos(updateTodos);
  }
  return (
    <Paper 
      style={{
        padding:0,
        margin:0,
        height:"100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    > 
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <ToolBar>
          <Typography color='inherit'> ToDos With Hooks</Typography>
        </ToolBar>
      </AppBar>

      <Grid container justify='center' style={{ marginTop:'1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodos={addTodos}/>
          <TodoList todos={todos} removeTodo={removeTodo} toggleTodo = {toggleTodo}/>
        </Grid>
      </Grid>    
    </Paper>
  )
};

// -TodoApp  manage states
//   -TodoForm
//   -TodoList
//     -ToDoItem