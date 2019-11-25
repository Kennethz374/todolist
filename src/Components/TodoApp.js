import React from "react";
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";
import useTodoState from "../Hooks/useTodoState";


export default function TodoApp() {
  const initialTodos = [{id:1, task: "Pet a dog", completed:false}];
  const {todos, addTodos, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos)

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
          <TodoList todos={todos} 
          removeTodo={removeTodo} 
          toggleTodo = {toggleTodo}
          editTodo = {editTodo}
          />
        </Grid>
      </Grid>    
    </Paper>
  )
};

// -TodoApp  manage states
//   -TodoForm
//   -TodoList
//     -ToDoItem